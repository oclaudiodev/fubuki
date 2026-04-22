import { useState } from "react";
import colors from "../constants/colors";
import resultsData from "../constants/resultsData";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import Card3D from "../components/Card3D";

function TeamFilter({ team, active, onClick, accent }) {
  const accentColor = accent === "gold" ? colors.gold : colors.red;

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        padding: "10px 14px",
        border: `1px solid ${active ? accentColor : colors.border}`,
        background: active ? "rgba(204,0,0,0.08)" : "rgba(10,10,10,0.8)",
        color: active ? colors.white : colors.gray2,
        fontFamily: "var(--font-m,monospace)",
        fontSize: "0.62rem",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      {team}
    </button>
  );
}

function ResultRow({ item, isLast, accent }) {
  const accentColor = accent === "gold" ? colors.gold : colors.red;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(92px, 110px) minmax(76px, 90px) minmax(76px, 90px) 1fr",
        gap: 12,
        alignItems: "center",
        padding: "14px 16px",
        borderBottom: isLast ? "none" : `1px solid ${colors.border}`,
      }}
    >
      <span style={{ fontFamily: "var(--font-m,monospace)", fontSize: "0.62rem", color: colors.gray2 }}>{item.date}</span>
      <span style={{ color: accentColor, fontFamily: "var(--font-d,sans-serif)", fontSize: "0.88rem", letterSpacing: "0.04em" }}>{item.place}</span>
      <span style={{ fontFamily: "var(--font-m,monospace)", fontSize: "0.58rem", color: colors.gray, textTransform: "uppercase" }}>{item.tier}</span>
      <span style={{ color: colors.white, fontWeight: 600, lineHeight: 1.35 }}>{item.tournament}</span>
    </div>
  );
}

export default function ResultsSection() {
  const [activeTeam, setActiveTeam] = useState(resultsData[0].team);
  const activeGroup = resultsData.find((group) => group.team === activeTeam) ?? resultsData[0];
  const filteredResults = activeGroup.results.filter((item) => ["1st", "2nd", "3rd"].includes(item.place));

  return (
    <section
      id="resultados"
      style={{
        padding: "110px clamp(18px, 4vw, 52px)",
        maxWidth: 1240,
        margin: "0 auto",
      }}
    >
      <FadeIn>
        <SectionHeader
          num="// 03"
          title="Resultados por Time"
          subtitle="Separado por equipe com base em Liquipedia / Fubuki / Results"
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 18 }}>
          {resultsData.map((group) => (
            <TeamFilter
              key={group.team}
              team={group.team}
              accent={group.accent}
              active={group.team === activeTeam}
              onClick={() => setActiveTeam(group.team)}
            />
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <Card3D maxTilt={3} glareOpacity={0.04} scale={1.003}>
          <div
            style={{
              border: `1px solid ${colors.border}`,
              background: "linear-gradient(180deg, rgba(12,12,12,0.96), rgba(4,4,4,0.98))",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "18px 18px 14px",
                borderBottom: `1px solid ${colors.border}`,
                background: "rgba(255,255,255,0.01)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-d,sans-serif)",
                  fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                  color: activeGroup.accent === "gold" ? colors.gold : colors.white,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                {activeGroup.team}
              </div>
              <p style={{ margin: 0, color: colors.gray2, lineHeight: 1.6 }}>{activeGroup.subtitle}</p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(92px, 110px) minmax(76px, 90px) minmax(76px, 90px) 1fr",
                gap: 12,
                padding: "10px 16px",
                borderBottom: `1px solid ${colors.border}`,
                background: "rgba(204,0,0,0.06)",
                fontFamily: "var(--font-m,monospace)",
                fontSize: "0.56rem",
                color: colors.red,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              <span>Data</span>
              <span>Place</span>
              <span>Tier</span>
              <span>Torneio</span>
            </div>

            <div style={{ overflowX: "auto" }}>
              <div style={{ minWidth: 680 }}>
                {filteredResults.map((item, index) => (
                  <ResultRow
                    key={`${item.date}-${item.tournament}`}
                    item={item}
                    isLast={index === filteredResults.length - 1}
                    accent={activeGroup.accent}
                  />
                ))}
              </div>
            </div>
          </div>
        </Card3D>
      </FadeIn>
    </section>
  );
}

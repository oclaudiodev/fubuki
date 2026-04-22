import colors from "../constants/colors";
import teamData from "../constants/teamData";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import Card3D from "../components/Card3D";
import useMediaQuery from "../hooks/useMediaQuery";

function TeamCard({ item, index }) {
  const isMobile = useMediaQuery("(max-width: 720px)");
  const dotColor = item.current ? colors.gold : colors.red;
  const isLast = index === teamData.length - 1;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "48px 1fr",
        marginBottom: isLast ? 0 : 16,
        gap: isMobile ? 10 : 0,
      }}
    >
      <div style={{ display: "flex", flexDirection: isMobile ? "row" : "column", alignItems: "center", gap: isMobile ? 10 : 0 }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            flexShrink: 0,
            background: dotColor,
            border: `2px solid ${colors.black}`,
            boxShadow: `0 0 14px ${dotColor}, 0 0 28px ${dotColor}40`,
            marginTop: isMobile ? 0 : 8,
            zIndex: 2,
            animation: item.current ? "pulseDot 1.6s infinite" : "none",
          }}
        />
        {!isLast && !isMobile ? (
          <div
            style={{
              flex: 1,
              width: 2,
              marginTop: 6,
              background: `linear-gradient(180deg,${dotColor},rgba(204,0,0,0.08))`,
            }}
          />
        ) : null}
        {isMobile ? <div style={{ height: 2, flex: 1, background: `linear-gradient(90deg,${dotColor},rgba(204,0,0,0.08))` }} /> : null}
      </div>

      <Card3D maxTilt={6} glareOpacity={0.08} scale={1.02}>
        <div
          style={{
            background: colors.panel,
            border: `1px solid ${colors.border}`,
            padding: "clamp(18px, 3vw, 28px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 2,
              background: item.current
                ? `linear-gradient(90deg,${colors.gold},transparent)`
                : `linear-gradient(90deg,${colors.red},transparent)`,
            }}
          />

          <div
            style={{
              fontFamily: "var(--font-m,monospace)",
              fontSize: "0.6rem",
              color: colors.gray,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            {item.date}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 12 }}>
            <span
              style={{
                fontFamily: "var(--font-d,sans-serif)",
                fontSize: "clamp(1.3rem, 3vw, 1.75rem)",
                letterSpacing: "0.04em",
                color: colors.white,
                textTransform: "uppercase",
              }}
            >
              {item.team}
            </span>

            {item.current ? (
              <span
                style={{
                  background: colors.gold,
                  color: "#000",
                  fontFamily: "var(--font-b,sans-serif)",
                  fontWeight: 700,
                  fontSize: "0.56rem",
                  letterSpacing: "0.15em",
                  padding: "3px 10px",
                  textTransform: "uppercase",
                }}
              >
                Atual
              </span>
            ) : null}
            {item.org ? (
              <span
                style={{
                  border: "1px solid rgba(204,0,0,0.35)",
                  color: colors.red,
                  fontFamily: "var(--font-m,monospace)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  padding: "3px 10px",
                  textTransform: "uppercase",
                }}
              >
                {item.org}
              </span>
            ) : null}
          </div>

          <p
            style={{
              fontFamily: "var(--font-b,sans-serif)",
              fontSize: "0.93rem",
              color: colors.gray2,
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: 640,
              margin: 0,
            }}
          >
            {item.desc}
          </p>
        </div>
      </Card3D>
    </div>
  );
}

export default function TeamsSection() {
  return (
    <section id="times" style={{ padding: "110px clamp(18px, 4vw, 52px)", maxWidth: 1240, margin: "0 auto" }}>
      <FadeIn>
        <SectionHeader num="// 02" title="Historico de Times" subtitle="Team history · Career timeline" />
      </FadeIn>

      {teamData.map((item, index) => (
        <FadeIn key={index} delay={index * 0.1} direction="left">
          <TeamCard item={item} index={index} />
        </FadeIn>
      ))}
    </section>
  );
}

import { useState } from "react";
import colors from "../constants/colors";
import achievementsData from "../constants/achievementsData";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";

function AchievementCard({ icon, title, event, year, rank, desc }) {
  const [flipped, setFlipped] = useState(false);
  const isGold = rank === 1;

  return (
    <div
      onClick={() => setFlipped((value) => !value)}
      style={{
        perspective: "1000px",
        cursor: "pointer",
        height: 220,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: colors.panel,
            border: `1px solid ${isGold ? "rgba(212,160,23,0.3)" : colors.border}`,
            padding: "26px 24px",
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
              background: isGold
                ? `linear-gradient(90deg,${colors.gold},transparent)`
                : `linear-gradient(90deg,${colors.red},transparent)`,
            }}
          />

          <span
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              fontFamily: "var(--font-m,monospace)",
              fontSize: "0.57rem",
              color: colors.border2,
              border: `1px solid ${colors.border}`,
              padding: "2px 6px",
              letterSpacing: "0.1em",
            }}
          >
            {year}
          </span>

          <div style={{ fontSize: "1.9rem", marginBottom: 12 }}>{icon}</div>
          <div
            style={{
              fontFamily: "var(--font-d,sans-serif)",
              fontSize: "1.05rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: isGold ? colors.gold : colors.white,
              textShadow: isGold ? `0 0 12px ${colors.goldGlow}` : "none",
              marginBottom: 6,
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontFamily: "var(--font-m,monospace)",
              fontSize: "0.58rem",
              color: isGold ? colors.gold : colors.red,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              opacity: 0.8,
            }}
          >
            {event}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: isGold
              ? "linear-gradient(135deg,rgba(212,160,23,0.1),rgba(0,0,0,0))"
              : "linear-gradient(135deg,rgba(204,0,0,0.1),rgba(0,0,0,0))",
            border: `1px solid ${isGold ? "rgba(212,160,23,0.4)" : "rgba(204,0,0,0.35)"}`,
            padding: "28px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div style={{ fontSize: "1.4rem", marginBottom: 10 }}>{icon}</div>
          <div
            style={{
              fontFamily: "var(--font-d,sans-serif)",
              fontSize: "0.9rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: isGold ? colors.gold : colors.redBright,
              marginBottom: 10,
            }}
          >
            {title}
          </div>
          <p
            style={{
              fontFamily: "var(--font-b,sans-serif)",
              fontSize: "0.88rem",
              color: colors.gray2,
              lineHeight: 1.6,
              fontWeight: 300,
              margin: 0,
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AchievementsSection() {
  return (
    <section id="conquistas" style={{ padding: "110px clamp(18px, 4vw, 52px)", maxWidth: 1240, margin: "0 auto" }}>
      <FadeIn>
        <SectionHeader num="// 03" title="Conquistas e Premios" subtitle="Clique nos cards para ver detalhes" />
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 14,
        }}
      >
        {achievementsData.map((item, index) => (
          <FadeIn key={index} delay={index * 0.08} direction="scale">
            <AchievementCard {...item} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

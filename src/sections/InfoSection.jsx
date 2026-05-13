import { useState } from "react";
import colors from "../constants/colors";
import infoData from "../constants/infoData";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import Card3D from "../components/Card3D";
import useMediaQuery from "../hooks/useMediaQuery";

const HIGHLIGHTS = [
  "Current team",
  "Award 2023",
  "Award 2022",
  "Approx. total winnings",
];

function InfoRow({ label, value, last, index }) {
  const isMobile = useMediaQuery("(max-width: 760px)");
  const [hov, setHov] = useState(false);

  const isHighlight = HIGHLIGHTS.includes(label);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "240px 1fr",
        position: "relative",
        overflow: "hidden",
        borderBottom: !last ? `1px solid ${colors.border}` : "none",
        background: hov
          ? isHighlight
            ? "rgba(204,0,0,0.07)"
            : "rgba(255,255,255,0.025)"
          : index % 2 === 0
          ? "rgba(15,15,15,0.92)"
          : "rgba(10,10,10,0.82)",
        transition: "all 0.25s ease",
      }}
    >
      {/* LEFT GLOW BAR */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: hov ? 3 : 0,
          background: isHighlight ? colors.red : colors.border2,
          boxShadow: hov
            ? `0 0 20px ${isHighlight ? colors.redGlow : colors.border2}`
            : "none",
          transition: "all 0.22s ease",
        }}
      />

      {/* HOVER LIGHT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hov
            ? "linear-gradient(90deg, rgba(204,0,0,0.05), transparent 55%)"
            : "transparent",
          pointerEvents: "none",
          transition: "0.25s",
        }}
      />

      {/* LABEL */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "16px 22px 16px 20px",
          borderRight: isMobile ? "none" : `1px solid ${colors.border}`,
          borderBottom: isMobile ? `1px solid ${colors.border}` : "none",
          display: "flex",
          alignItems: "center",
          fontFamily: "var(--font-m,monospace)",
          fontSize: "0.62rem",
          color: hov && isHighlight ? colors.red : colors.gray,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          transition: "0.22s",
        }}
      >
        {label}
      </div>

      {/* VALUE */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "16px 26px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontFamily: "var(--font-b,sans-serif)",
          fontSize: "1rem",
          fontWeight: 600,
          color: isHighlight
            ? hov
              ? colors.redBright
              : colors.white
            : colors.gray2,
          transition: "0.22s",
          wordBreak: "break-word",
        }}
      >
        {isHighlight && (
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: hov ? colors.redBright : colors.red,
              boxShadow: hov ? `0 0 10px ${colors.redGlow}` : "none",
              flexShrink: 0,
            }}
          />
        )}

        {value}
      </div>
    </div>
  );
}

export default function InfoSection() {
  const isMobile = useMediaQuery("(max-width: 760px)");

  return (
    <section
      id="info"
      style={{
        position: "relative",
        padding: "120px clamp(18px, 4vw, 52px)",
        maxWidth: 1280,
        margin: "0 auto",
      }}
    >
      {/* BACKGROUND FX */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.35,
          background: `
            linear-gradient(rgba(204,0,0,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(204,0,0,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(circle at center, black 45%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 45%, transparent 100%)",
        }}
      />

      {/* HEADER */}
      <FadeIn>
        <SectionHeader
          num="// 04"
          title="Informacoes Detalhadas"
          subtitle="Player data · Statistics · References"
        />
      </FadeIn>

      {/* TABLE */}
      <FadeIn delay={0.1}>
        <Card3D maxTilt={4} glareOpacity={0.06} scale={1.008}>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              border: `1px solid ${colors.border}`,
              background: "rgba(8,8,8,0.72)",
              backdropFilter: "blur(14px)",
              boxShadow: `
                0 0 90px rgba(204,0,0,0.06),
                inset 0 0 40px rgba(255,255,255,0.015)
              `,
            }}
          >
            {/* TOP RED LINE */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: 2,
                background:
                  "linear-gradient(90deg, transparent, rgba(204,0,0,0.85), transparent)",
                zIndex: 2,
              }}
            />

            {/* CORNER DECOR */}
            <div
              style={{
                position: "absolute",
                top: 14,
                left: 14,
                width: 24,
                height: 24,
                borderTop: `2px solid ${colors.red}`,
                borderLeft: `2px solid ${colors.red}`,
                opacity: 0.8,
              }}
            />

            <div
              style={{
                position: "absolute",
                bottom: 14,
                right: 14,
                width: 24,
                height: 24,
                borderBottom: `2px solid ${colors.red}`,
                borderRight: `2px solid ${colors.red}`,
                opacity: 0.8,
              }}
            />

            {/* HEADER */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "240px 1fr",
                background: "rgba(204,0,0,0.08)",
                borderBottom: "1px solid rgba(204,0,0,0.18)",
              }}
            >
              <div
                style={{
                  padding: "12px 22px 12px 20px",
                  borderRight: isMobile
                    ? "none"
                    : "1px solid rgba(204,0,0,0.18)",
                  borderBottom: isMobile
                    ? "1px solid rgba(204,0,0,0.18)"
                    : "none",
                  fontFamily: "var(--font-m,monospace)",
                  fontSize: "0.58rem",
                  color: colors.red,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                }}
              >
                Campo
              </div>

              <div
                style={{
                  padding: "12px 26px",
                  fontFamily: "var(--font-m,monospace)",
                  fontSize: "0.58rem",
                  color: colors.red,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                }}
              >
                Valor
              </div>
            </div>

            {/* ROWS */}
            {infoData.map(([label, value], index) => (
              <InfoRow
                key={index}
                label={label}
                value={value}
                last={index === infoData.length - 1}
                index={index}
              />
            ))}
          </div>
        </Card3D>
      </FadeIn>
    </section>
  );
}
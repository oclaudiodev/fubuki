import { useState } from "react";
import colors from "../constants/colors";
import infoData from "../constants/infoData";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import Card3D from "../components/Card3D";
import useMediaQuery from "../hooks/useMediaQuery";

const HIGHLIGHTS = ["Current team", "Award 2023", "Award 2022", "Approx. total winnings"];

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
        borderBottom: !last ? `1px solid ${colors.border}` : "none",
        background: hov
          ? isHighlight
            ? "rgba(204,0,0,0.06)"
            : "rgba(255,255,255,0.02)"
          : index % 2 === 0
            ? colors.panel
            : "rgba(14,14,14,0.5)",
        transition: "background 0.2s",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: hov ? 2 : 0,
          background: isHighlight ? colors.red : colors.border2,
          transition: "width 0.2s",
        }}
      />

      <div
        style={{
          padding: "15px 22px 15px 20px",
          borderRight: isMobile ? "none" : `1px solid ${colors.border}`,
          borderBottom: isMobile ? `1px solid ${colors.border}` : "none",
          fontFamily: "var(--font-m,monospace)",
          fontSize: "0.62rem",
          color: hov && isHighlight ? colors.red : colors.gray,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          transition: "color 0.2s",
        }}
      >
        {label}
      </div>

      <div
        style={{
          padding: "15px 26px",
          fontFamily: "var(--font-b,sans-serif)",
          fontSize: "1rem",
          fontWeight: 600,
          color: isHighlight ? (hov ? colors.redBright : colors.white) : colors.gray2,
          display: "flex",
          alignItems: "center",
          gap: 10,
          transition: "color 0.2s",
          wordBreak: "break-word",
        }}
      >
        {isHighlight ? (
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: hov ? colors.redBright : colors.red,
              flexShrink: 0,
            }}
          />
        ) : null}
        {value}
      </div>
    </div>
  );
}

export default function InfoSection() {
  const isMobile = useMediaQuery("(max-width: 760px)");

  return (
    <section id="info" style={{ padding: "110px clamp(18px, 4vw, 52px)", maxWidth: 1240, margin: "0 auto" }}>
      <FadeIn>
        <SectionHeader num="// 04" title="Informacoes Detalhadas" subtitle="Player data · Statistics · References" />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Card3D maxTilt={3} glareOpacity={0.04} scale={1.005}>
          <div
            style={{
              border: `1px solid ${colors.border}`,
              overflow: "hidden",
              boxShadow: "0 0 80px rgba(204,0,0,0.04), inset 0 0 40px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "240px 1fr",
                background: "rgba(204,0,0,0.08)",
                borderBottom: "1px solid rgba(204,0,0,0.2)",
              }}
            >
              <div
                style={{
                  padding: "10px 22px 10px 20px",
                  borderRight: isMobile ? "none" : "1px solid rgba(204,0,0,0.18)",
                  borderBottom: isMobile ? "1px solid rgba(204,0,0,0.18)" : "none",
                  fontFamily: "var(--font-m,monospace)",
                  fontSize: "0.58rem",
                  color: colors.red,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Campo
              </div>
              <div
                style={{
                  padding: "10px 26px",
                  fontFamily: "var(--font-m,monospace)",
                  fontSize: "0.58rem",
                  color: colors.red,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                Valor
              </div>
            </div>

            {infoData.map(([label, value], index) => (
              <InfoRow key={index} label={label} value={value} last={index === infoData.length - 1} index={index} />
            ))}
          </div>
        </Card3D>
      </FadeIn>
    </section>
  );
}

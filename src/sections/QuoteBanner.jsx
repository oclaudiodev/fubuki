import colors from "../constants/colors";
import FadeIn from "../components/FadeIn";
import Card3D from "../components/Card3D";

export default function QuoteBanner() {
  return (
    <div style={{ padding: "0 clamp(18px, 4vw, 52px)", maxWidth: 1240, margin: "0 auto" }}>
      <FadeIn direction="scale">
        <Card3D maxTilt={5} glareOpacity={0.08} scale={1.01}>
          <div
            style={{
              position: "relative",
              padding: "clamp(24px, 5vw, 60px)",
              background: "linear-gradient(135deg,rgba(204,0,0,0.08) 0%,rgba(0,0,0,0) 50%,rgba(204,0,0,0.04) 100%)",
              border: "1px solid rgba(204,0,0,0.2)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: -10,
                top: "50%",
                transform: "translateY(-50%)",
                fontFamily: "var(--font-d,sans-serif)",
                fontSize: "clamp(4rem, 12vw, 9rem)",
                color: "rgba(204,0,0,0.04)",
                letterSpacing: "0.05em",
                userSelect: "none",
                pointerEvents: "none",
                lineHeight: 1,
              }}
            >
              NFA
            </div>

            <div
              style={{
                fontFamily: "var(--font-d,sans-serif)",
                fontSize: "3.5rem",
                color: colors.red,
                lineHeight: 0.5,
                marginBottom: 20,
                opacity: 0.7,
              }}
            >
              "
            </div>

            <p
              style={{
                fontFamily: "var(--font-d,sans-serif)",
                fontSize: "clamp(1.1rem,2vw,2rem)",
                letterSpacing: "0.03em",
                color: colors.white,
                lineHeight: 1.3,
                marginBottom: 24,
                maxWidth: 820,
              }}
            >
              E dele! Alem de levar o MVP da Liga das Americas, o @fubukizera tambem leva o premio de Atleta Revelacao da{" "}
              <span style={{ color: colors.red, textShadow: `0 0 18px ${colors.redGlow}` }}>#NFAAWARDS</span>.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <div style={{ width: 28, height: 1, background: `linear-gradient(90deg,${colors.red},transparent)` }} />
              <span
                style={{
                  fontFamily: "var(--font-m,monospace)",
                  fontSize: "0.63rem",
                  color: colors.gray,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                NFA · 17 de dezembro de 2022
              </span>
            </div>
          </div>
        </Card3D>
      </FadeIn>
    </div>
  );
}

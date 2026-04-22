import { Suspense, lazy, useEffect, useState } from "react";
import colors from "../constants/colors";
import FloatingCube from "../components/FloatingCube";
import useMediaQuery from "../hooks/useMediaQuery";

const ThreeBackground = lazy(() => import("../components/ThreeBackground"));

function BrandWord({ shadow = false }) {
  return (
    <>
      <span style={{ color: colors.red, textShadow: shadow ? `0 0 30px ${colors.redGlow}, 0 0 60px ${colors.redGlow}` : "none" }}>F</span>
      <span>U</span>
      <span style={{ color: colors.red, textShadow: shadow ? `0 0 30px ${colors.redGlow}, 0 0 60px ${colors.redGlow}` : "none" }}>B</span>
      <span>U</span>
      <span style={{ color: colors.red, textShadow: shadow ? `0 0 30px ${colors.redGlow}, 0 0 60px ${colors.redGlow}` : "none" }}>K</span>
      <span>I</span>
    </>
  );
}

function GlitchTitle() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <h1
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          margin: 0,
          fontFamily: "var(--font-d,'Russo One',sans-serif)",
          fontSize: "clamp(3.5rem,14vw,11rem)",
          lineHeight: 0.88,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#3a0000",
          transform: "translate(6px,6px)",
          filter: "blur(2px)",
          userSelect: "none",
        }}
      >
        <BrandWord />
      </h1>

      <h1
        style={{
          position: "relative",
          zIndex: 2,
          margin: 0,
          fontFamily: "var(--font-d,'Russo One',sans-serif)",
          fontSize: "clamp(3.5rem,14vw,11rem)",
          lineHeight: 0.88,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: colors.white,
          textShadow: "0 0 80px rgba(204,0,0,0.2)",
          userSelect: "none",
        }}
      >
        <BrandWord shadow />
      </h1>

      <h1
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          margin: 0,
          zIndex: 3,
          fontFamily: "var(--font-d,'Russo One',sans-serif)",
          fontSize: "clamp(3.5rem,14vw,11rem)",
          lineHeight: 0.88,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: colors.redBright,
          animation: "glitchA 7s steps(1) infinite",
          pointerEvents: "none",
        }}
      >
        <BrandWord />
      </h1>

      <h1
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          margin: 0,
          zIndex: 3,
          fontFamily: "var(--font-d,'Russo One',sans-serif)",
          fontSize: "clamp(3.5rem,14vw,11rem)",
          lineHeight: 0.88,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#00e5ff",
          animation: "glitchB 7s steps(1) 0.06s infinite",
          pointerEvents: "none",
        }}
      >
        <BrandWord />
      </h1>
    </div>
  );
}

function HudTag({ label, value }) {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.75)",
        border: `1px solid ${colors.border}`,
        borderLeft: `2px solid ${colors.red}`,
        padding: "8px 16px",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-m,monospace)",
          fontSize: "0.5rem",
          color: colors.gray,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: 2,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-d,sans-serif)",
          fontSize: "0.78rem",
          color: colors.red,
          letterSpacing: "0.1em",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default function Hero() {
  const isTablet = useMediaQuery("(max-width: 980px)");
  const isMobile = useMediaQuery("(max-width: 700px)");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "stretch" : "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: colors.black,
        padding: "max(80px, calc(62px + 2rem)) clamp(18px, 4vw, 52px) clamp(48px, 8vw, 60px)",
      }}
    >
      <Suspense fallback={null}>{mounted ? <ThreeBackground /> : null}</Suspense>

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          backgroundImage: `
            linear-gradient(rgba(204,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(204,0,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse 90% 80% at 40% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 40% 50%, black 40%, transparent 100%)",
        }}
      />

      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        <FloatingCube size={44} top="18%" left="7%" opacity={0.45} delay={0} />
        <FloatingCube size={22} top="72%" left="14%" opacity={0.3} delay={3.5} />
        <FloatingCube size={60} top="22%" right="32%" opacity={0.2} delay={7} />
        <FloatingCube size={16} top="78%" right="10%" opacity={0.4} delay={2} />
        <FloatingCube size={32} top="50%" left="3%" opacity={0.25} delay={5} />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          maxWidth: isMobile ? "100%" : 700,
          width: "100%",
          paddingRight: isTablet ? 0 : 180,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(204,0,0,0.1)",
            border: "1px solid rgba(204,0,0,0.3)",
            color: colors.redBright,
            fontFamily: "var(--font-m,monospace)",
            fontSize: "0.68rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            padding: "6px 16px",
            marginBottom: 32,
            animation: "fadeIn 0.8s ease both",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: colors.redBright,
              boxShadow: `0 0 8px ${colors.redBright}`,
              animation: "pulseDot 1.5s infinite",
              display: "inline-block",
            }}
          />
          Free Fire Emulador · Brasil
        </div>

        <div style={{ animation: "fadeUp 0.7s ease 0.1s both" }}>
          <GlitchTitle />
        </div>

        <div
          style={{
            fontFamily: "var(--font-m,monospace)",
            fontSize: "0.82rem",
            letterSpacing: "0.26em",
            color: colors.gray,
            marginTop: 18,
            marginBottom: 36,
            textTransform: "uppercase",
            animation: "fadeUp 0.7s ease 0.25s both",
          }}
        >
          <span style={{ color: colors.red }}>&gt;&gt;</span> Jose Leonardo · 19.03.2007 · 18 Anos
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, minmax(0, auto))",
            gap: isMobile ? 14 : 0,
            animation: "fadeUp 0.7s ease 0.4s both",
          }}
        >
          {[
            { val: "FAZ O P", label: "Time Atual", gold: true },
            { val: "LOUD", label: "Ex-Time", gold: false },
            { val: "2022", label: "Revelacao NFA", gold: false },
            { val: "257K", label: "Peak Viewers", gold: false },
          ].map((item, index) => (
            <div key={index} style={{ display: "flex", alignItems: "stretch" }}>
              {!isMobile && index > 0 ? (
                <div style={{ width: 1, background: colors.border, margin: "0 22px" }} />
              ) : null}
              <div
                style={
                  isMobile
                    ? { padding: "12px 14px", border: `1px solid ${colors.border}`, background: "rgba(10,10,10,0.7)", width: "100%" }
                    : {}
                }
              >
                <div
                  style={{
                    fontFamily: "var(--font-d,sans-serif)",
                    fontSize: "1.5rem",
                    color: item.gold ? colors.gold : colors.white,
                    letterSpacing: "0.04em",
                    textShadow: item.gold ? `0 0 14px ${colors.goldGlow}` : "none",
                  }}
                >
                  {item.val}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-m,monospace)",
                    fontSize: "0.56rem",
                    color: colors.gray,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    marginTop: 3,
                  }}
                >
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: isMobile ? "relative" : "absolute",
          right: isMobile ? "auto" : 48,
          top: isMobile ? "auto" : "50%",
          transform: isMobile ? "none" : "translateY(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          gap: 8,
          flexWrap: "wrap",
          animation: "fadeIn 1s ease 0.7s both",
          width: isMobile ? "100%" : "auto",
          marginTop: isMobile ? 22 : 0,
          justifyContent: isMobile ? "flex-start" : "initial",
        }}
      >
        {[
          { label: "Role", value: "FRAGGER" },
          { label: "Mode", value: "EMULADOR" },
          { label: "Region", value: "BR / SA" },
          { label: "Status", value: "ATIVO" },
          { label: "Team", value: "FAZ O P" },
        ].map((item, index) => (
          <HudTag key={index} {...item} />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 140,
          background: `linear-gradient(transparent,${colors.black})`,
          zIndex: 5,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

import { Suspense, lazy, useEffect, useState } from "react";
import colors from "../constants/colors";
import FloatingCube from "../components/FloatingCube";
import Card3D from "../components/Card3D";
import useMediaQuery from "../hooks/useMediaQuery";

const ThreeBackground = lazy(() => import("../components/ThreeBackground"));

function BrandWord({ shadow = false }) {
  return (
    <>
      <span
        style={{
          color: colors.red,
          textShadow: shadow
            ? `0 0 30px ${colors.redGlow}, 0 0 60px ${colors.redGlow}`
            : "none",
        }}
      >
        F
      </span>
      <span>U</span>

      <span
        style={{
          color: colors.red,
          textShadow: shadow
            ? `0 0 30px ${colors.redGlow}, 0 0 60px ${colors.redGlow}`
            : "none",
        }}
      >
        B
      </span>

      <span>U</span>

      <span
        style={{
          color: colors.red,
          textShadow: shadow
            ? `0 0 30px ${colors.redGlow}, 0 0 60px ${colors.redGlow}`
            : "none",
        }}
      >
        K
      </span>

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
        position: "relative",
        overflow: "hidden",
        background: colors.black,
        padding:
          "max(80px, calc(62px + 2rem)) clamp(18px, 4vw, 52px) clamp(48px, 8vw, 60px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Suspense fallback={null}>
        {mounted ? <ThreeBackground /> : null}
      </Suspense>

      {/* GRID */}
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
        }}
      />

      {/* FLOATING CUBES */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <FloatingCube size={44} top="18%" left="7%" opacity={0.45} delay={0} />
        <FloatingCube size={22} top="72%" left="14%" opacity={0.3} delay={3.5} />
        <FloatingCube size={60} top="22%" right="32%" opacity={0.2} delay={7} />
      </div>

      {/* MAIN */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 1400,
          display: "flex",
          flexDirection: isTablet ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: isTablet ? 40 : 100,
        }}
      >
        {/* IMAGE */}
        <div
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card3D maxTilt={10} glareOpacity={0.1} scale={1.02}>
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: isTablet ? 380 : 540,
                padding: isTablet ? 18 : 26,
                border: `1px solid ${colors.border}`,
                background: "rgba(8,8,8,0.65)",
                backdropFilter: "blur(14px)",
                overflow: "hidden",
                boxShadow: `
                  0 0 80px rgba(204,0,0,0.10),
                  inset 0 0 50px rgba(255,255,255,0.02)
                `,
              }}
            >
              {/* TOP LINE */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: 2,
                  background:
                    "linear-gradient(90deg, transparent, rgba(204,0,0,0.8), transparent)",
                }}
              />

              {/* CORNERS */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  width: 28,
                  height: 28,
                  borderTop: `2px solid ${colors.red}`,
                  borderLeft: `2px solid ${colors.red}`,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  right: 14,
                  width: 28,
                  height: 28,
                  borderBottom: `2px solid ${colors.red}`,
                  borderRight: `2px solid ${colors.red}`,
                }}
              />

              {/* RED GLOW */}
              <div
                style={{
                  position: "absolute",
                  bottom: "12%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(204,0,0,0.22) 0%, transparent 70%)",
                  filter: "blur(40px)",
                  zIndex: 0,
                }}
              />

              {/* IMAGE */}
              <img
                src="/fbk.png"
                alt="Fubuki — Jose Leonardo"
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  transform: "translateZ(50px)",
                  filter:
                    "drop-shadow(0 0 32px rgba(204,0,0,0.55)) drop-shadow(0 0 90px rgba(204,0,0,0.22))",
                  maskImage:
                    "linear-gradient(to top, transparent 0%, black 14%, black 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, black 14%, black 100%)",
                  animation: "fadeIn 1s ease both",
                }}
              />

              {/* HUD */}
              <div
                style={{
                  position: "absolute",
                  left: 18,
                  bottom: 18,
                  zIndex: 5,
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    padding: "6px 10px",
                    background: "rgba(0,0,0,0.78)",
                    border: `1px solid ${colors.border}`,
                    fontFamily: "var(--font-m,monospace)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.16em",
                    color: colors.red,
                    textTransform: "uppercase",
                  }}
                >
                  #FUBUKI
                </div>

                <div
                  style={{
                    padding: "6px 10px",
                    background: "rgba(0,0,0,0.78)",
                    border: `1px solid ${colors.border}`,
                    fontFamily: "var(--font-m,monospace)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.16em",
                    color: colors.gray,
                    textTransform: "uppercase",
                  }}
                >
                  BR SERVER
                </div>
              </div>
            </div>
          </Card3D>
        </div>

        {/* TEXT */}
        <div
          style={{
            flex: 1,
            width: "100%",
            maxWidth: 700,
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
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: colors.redBright,
                boxShadow: `0 0 8px ${colors.redBright}`,
              }}
            />

            Free Fire Emulador · Brasil
          </div>

          <GlitchTitle />

          <div
            style={{
              fontFamily: "var(--font-m,monospace)",
              fontSize: "0.82rem",
              letterSpacing: "0.26em",
              color: colors.gray,
              marginTop: 18,
              marginBottom: 36,
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: colors.red }}>&gt;&gt;</span> Jose Leonardo ·
            19.03.2007 · 18 Anos
          </div>

          {/* STATS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr 1fr"
                : "repeat(2, minmax(0, 1fr))",
              gap: 18,
              marginBottom: 36,
            }}
          >
            {[
              { val: "FAZ O P", label: "Time Atual", gold: true },
              { val: "LOUD", label: "Ex-Time" },
              { val: "2022", label: "Revelacao NFA" },
              { val: "257K", label: "Peak Viewers" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "14px 16px",
                  border: `1px solid ${colors.border}`,
                  background: "rgba(10,10,10,0.75)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-d,sans-serif)",
                    fontSize: "1.4rem",
                    color: item.gold ? colors.gold : colors.white,
                    letterSpacing: "0.04em",
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
                    marginTop: 4,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* HUD TAGS */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
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
        </div>
      </div>

      {/* BOTTOM GRADIENT */}
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
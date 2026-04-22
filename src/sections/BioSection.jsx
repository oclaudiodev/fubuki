import colors from "../constants/colors";
import FadeIn from "../components/FadeIn";
import SectionHeader from "../components/SectionHeader";
import Card3D from "../components/Card3D";
import useMediaQuery from "../hooks/useMediaQuery";

function BrandWord() {
  return (
    <>
      <span style={{ color: colors.red }}>F</span>
      <span style={{ color: colors.white }}>U</span>
      <span style={{ color: colors.red }}>B</span>
      <span style={{ color: colors.white }}>U</span>
      <span style={{ color: colors.red }}>K</span>
      <span style={{ color: colors.white }}>I</span>
    </>
  );
}

const BIO_ITEMS = [
  { label: "Nome", value: "Jose Leonardo" },
  { label: "Nickname", value: "Fubuki" },
  { label: "Nascimento", value: "19 de marco de 2007" },
  { label: "Idade", value: "18 anos" },
];

function MiniInfo({ label, value }) {
  return (
    <Card3D maxTilt={8} glareOpacity={0.07} scale={1.02}>
      <div
        style={{
          background: "rgba(12,12,12,0.88)",
          border: `1px solid ${colors.border}`,
          padding: "14px 16px",
          minHeight: 74,
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
            background: `linear-gradient(90deg, ${colors.red}, transparent)`,
            opacity: 0.55,
          }}
        />
        <div
          style={{
            fontFamily: "var(--font-m,monospace)",
            fontSize: "0.56rem",
            color: colors.gray,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "var(--font-b,sans-serif)",
            fontSize: "0.98rem",
            color: colors.white,
            fontWeight: 600,
            lineHeight: 1.25,
          }}
        >
          {value}
        </div>
      </div>
    </Card3D>
  );
}

export default function BioSection() {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <section
      id="bio"
      style={{
        padding: "110px clamp(18px, 4vw, 52px)",
        maxWidth: 1240,
        margin: "0 auto",
      }}
    >
      <FadeIn>
        <SectionHeader num="// 01" title="Perfil do Jogador" subtitle="Player profile · Jose Leonardo" />
      </FadeIn>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "minmax(280px, 420px) minmax(0, 1fr)",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        <FadeIn direction="up">
          <Card3D maxTilt={6} glareOpacity={0.08} scale={1.01}>
            <div
              style={{
                position: "relative",
                height: "100%",
                minHeight: isMobile ? 360 : 620,
                background: "linear-gradient(180deg, rgba(18,18,18,0.96), rgba(4,4,4,0.98))",
                border: `1px solid ${colors.border}`,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="/fbk.png"
                alt="Foto do Fubuki"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center center",
                  display: "block",
                  background: "radial-gradient(circle at center, rgba(204,0,0,0.12), rgba(0,0,0,0.95) 70%)",
                  padding: isMobile ? 12 : 20,
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.84) 100%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 20,
                  right: 20,
                  bottom: 20,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-m,monospace)",
                      fontSize: "0.58rem",
                      color: colors.redBright,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    Perfil oficial
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-d,sans-serif)",
                      fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                      color: colors.white,
                      letterSpacing: "0.06em",
                    }}
                  >
                    <BrandWord />
                  </div>
                </div>

                <div
                  style={{
                    padding: "8px 12px",
                    background: "rgba(0,0,0,0.72)",
                    border: "1px solid rgba(204,0,0,0.25)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-m,monospace)",
                      fontSize: "0.52rem",
                      color: colors.gray,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                    }}
                  >
                    Status
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-d,sans-serif)",
                      fontSize: "0.78rem",
                      color: colors.red,
                      letterSpacing: "0.08em",
                    }}
                  >
                    ATIVO
                  </div>
                </div>
              </div>
            </div>
          </Card3D>
        </FadeIn>

        <div style={{ display: "grid", gap: 18 }}>
          <FadeIn delay={0.08} direction="up">
            <Card3D maxTilt={5} glareOpacity={0.06} scale={1.01}>
              <div
                style={{
                  position: "relative",
                  background: "linear-gradient(135deg, rgba(204,0,0,0.05) 0%, rgba(0,0,0,0) 58%)",
                  border: `1px solid ${colors.border}`,
                  borderLeft: `3px solid ${colors.red}`,
                  padding: "clamp(22px, 4vw, 38px)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-m,monospace)",
                    fontSize: "0.6rem",
                    color: colors.red,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  // Sobre o jogador
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-b,sans-serif)",
                    fontSize: "clamp(1rem, 1.8vw, 1.08rem)",
                    lineHeight: 1.85,
                    color: colors.gray2,
                    fontWeight: 300,
                    marginBottom: 18,
                  }}
                >
                  <span style={{ color: colors.white, fontWeight: 700 }}>Jose "Fubuki" Leonardo</span> e um jogador
                  profissional de <span style={{ color: colors.white }}>Free Fire Emulador</span>, nascido em
                  <span style={{ color: colors.redBright }}> 19 de marco de 2007</span>. Ele aparece como um dos nomes
                  mais marcantes da cena, com destaque para o premio de
                  <span style={{ color: colors.gold }}> MVP da Liga das Americas</span> e para o reconhecimento como
                  <span style={{ color: colors.gold }}> Atleta Revelacao</span>.
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-b,sans-serif)",
                    fontSize: "clamp(0.96rem, 1.6vw, 1.02rem)",
                    lineHeight: 1.8,
                    color: colors.gray2,
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  Conhecido tambem pela parceria com <span style={{ color: colors.white }}>Greghi</span>, teve
                  passagens por <span style={{ color: colors.white }}>LOUD</span> e <span style={{ color: colors.white }}>Noise</span>,
                  chegando ao momento atual com a <span style={{ color: colors.redBright }}>FAZ O P</span>.
                </p>
              </div>
            </Card3D>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 12,
            }}
          >
            {BIO_ITEMS.map((item, index) => (
              <FadeIn key={item.label} delay={0.14 + index * 0.05} direction="up">
                <MiniInfo {...item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

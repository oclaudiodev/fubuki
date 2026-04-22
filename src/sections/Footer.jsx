import colors from "../constants/colors";
import useMediaQuery from "../hooks/useMediaQuery";

function BrandMark() {
  return (
    <>
      <span style={{ color: colors.red, textShadow: `0 0 20px ${colors.redGlow}` }}>F</span>
      <span style={{ color: colors.white }}>U</span>
      <span style={{ color: colors.red, textShadow: `0 0 20px ${colors.redGlow}` }}>B</span>
      <span style={{ color: colors.white }}>U</span>
      <span style={{ color: colors.red, textShadow: `0 0 20px ${colors.redGlow}` }}>K</span>
      <span style={{ color: colors.white }}>I</span>
    </>
  );
}

export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 760px)");
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        borderTop: `1px solid ${colors.border}`,
        background: colors.panel,
        padding: "48px clamp(18px, 4vw, 52px) 36px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: 1,
          background: `linear-gradient(90deg,transparent,${colors.red},transparent)`,
          boxShadow: `0 0 20px ${colors.redGlow}`,
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 32,
          marginBottom: 36,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-d,sans-serif)",
              fontSize: "1.5rem",
              letterSpacing: "0.1em",
              marginBottom: 10,
            }}
          >
            <BrandMark />
            <span style={{ fontFamily: "var(--font-m,monospace)", fontSize: "0.6rem", color: colors.gray, marginLeft: 8 }}>.GG</span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-b,sans-serif)",
              fontSize: "0.85rem",
              color: colors.gray,
              maxWidth: 280,
              lineHeight: 1.6,
            }}
          >
            Perfil competitivo de Jose "Fubuki" Leonardo · Free Fire Emulador · Brasil.
          </p>
        </div>

        <div>
          <div
            style={{
              fontFamily: "var(--font-m,monospace)",
              fontSize: "0.58rem",
              color: colors.red,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Fontes
          </div>
          {["Liquipedia Free Fire Wiki", "EsportsCharts", "NFA Awards 2022", "The Radioativo"].map((item, index) => (
            <div
              key={index}
              style={{
                fontFamily: "var(--font-b,sans-serif)",
                fontSize: "0.84rem",
                color: colors.gray2,
                marginBottom: 6,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: colors.border2 }}>{">"}</span>
              {item}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={scrollTop}
          style={{
            background: "none",
            border: `1px solid ${colors.border}`,
            color: colors.gray,
            fontFamily: "var(--font-m,monospace)",
            fontSize: "0.63rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          ↑ Voltar ao topo
        </button>
      </div>

      <div
        style={{
          borderTop: `1px solid ${colors.border}`,
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <span style={{ fontFamily: "var(--font-m,monospace)", fontSize: "0.58rem", color: colors.gray, letterSpacing: "0.1em" }}>
          Dados baseados no Liquipedia Free Fire Wiki · Atualizado 2024
        </span>
        <span style={{ fontFamily: "var(--font-m,monospace)", fontSize: "0.58rem", color: colors.border2, letterSpacing: "0.1em" }}>
          Free Fire © Garena · Fan Page nao oficial
        </span>
      </div>
    </footer>
  );
}

import colors from "../constants/colors";

function SectionHeader({ num, title, subtitle }) {
  return (
    <div style={{ marginBottom: 64 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 20,
        }}
      >
        <div
          style={{
            width: 28,
            height: 2,
            background: `linear-gradient(90deg, ${colors.red}, transparent)`,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-m, 'Share Tech Mono', monospace)",
            fontSize: "0.62rem",
            color: colors.red,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          {num}
        </span>
        <div
          style={{
            flex: 1,
            height: 1,
            background: `linear-gradient(90deg, ${colors.border}, transparent)`,
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
        <div
          style={{
            width: 5,
            alignSelf: "stretch",
            minHeight: 56,
            background: `linear-gradient(180deg, ${colors.red}, ${colors.redDeep})`,
            marginRight: 20,
            flexShrink: 0,
            boxShadow: `2px 0 18px ${colors.redGlow}`,
          }}
        />
        <div>
          <h2
            style={{
              fontFamily: "var(--font-d, 'Russo One', sans-serif)",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: colors.white,
              lineHeight: 1,
              textShadow: "0 2px 30px rgba(0,0,0,0.8)",
            }}
          >
            {title}
          </h2>
          {subtitle ? (
            <p
              style={{
                fontFamily: "var(--font-m, monospace)",
                fontSize: "0.7rem",
                color: colors.gray,
                letterSpacing: "0.18em",
                marginTop: 8,
                textTransform: "uppercase",
              }}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SectionHeader;

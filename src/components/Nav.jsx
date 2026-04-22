import { useEffect, useState } from "react";
import colors from "../constants/colors";
import useMediaQuery from "../hooks/useMediaQuery";

const NAV_ITEMS = [
  { id: "hero", label: "Inicio" },
  { id: "bio", label: "Perfil" },
  { id: "times", label: "Times" },
  { id: "resultados", label: "Resultados" },
  { id: "conquistas", label: "Conquistas" },
  { id: "info", label: "Info" },
];

function BrandMark() {
  return (
    <>
      <span style={{ color: colors.red, textShadow: `0 0 20px ${colors.redGlow}, 0 0 40px ${colors.redGlow}` }}>F</span>
      <span style={{ color: colors.white }}>U</span>
      <span style={{ color: colors.red, textShadow: `0 0 20px ${colors.redGlow}, 0 0 40px ${colors.redGlow}` }}>B</span>
      <span style={{ color: colors.white }}>U</span>
      <span style={{ color: colors.red, textShadow: `0 0 20px ${colors.redGlow}, 0 0 40px ${colors.redGlow}` }}>K</span>
      <span style={{ color: colors.white }}>I</span>
    </>
  );
}

function Nav() {
  const isMobile = useMediaQuery("(max-width: 820px)");
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [hovItem, setHovItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      for (let i = NAV_ITEMS.length - 1; i >= 0; i -= 1) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        minHeight: 62,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(18px, 4vw, 52px)",
        background:
          scrolled || menuOpen
            ? "rgba(0,0,0,0.97)"
            : "linear-gradient(180deg,rgba(0,0,0,0.9),transparent)",
        borderBottom: scrolled || menuOpen ? `1px solid ${colors.border}` : "none",
        backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        transition: "background 0.4s, border-color 0.4s",
      }}
    >
      <div
        onClick={() => goto("hero")}
        style={{
          fontFamily: "var(--font-d,'Russo One',sans-serif)",
          fontSize: "1.15rem",
          letterSpacing: "0.1em",
          cursor: "pointer",
          userSelect: "none",
          display: "flex",
          alignItems: "center",
          gap: 2,
          minHeight: 62,
        }}
      >
        <BrandMark />
        <span
          style={{
            fontFamily: "var(--font-m,monospace)",
            fontSize: "0.6rem",
            color: colors.gray,
            marginLeft: 6,
            letterSpacing: "0.1em",
          }}
        >
          .GG
        </span>
      </div>

      {isMobile ? (
        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          style={{
            width: 44,
            height: 44,
            border: `1px solid ${menuOpen ? colors.red : colors.border}`,
            background: "rgba(0,0,0,0.7)",
            color: colors.white,
            display: "grid",
            placeItems: "center",
            cursor: "pointer",
          }}
        >
          <div style={{ display: "grid", gap: 5 }}>
            {[0, 1, 2].map((item) => (
              <span
                key={item}
                style={{
                  width: 18,
                  height: 2,
                  background: menuOpen ? colors.red : colors.white,
                  display: "block",
                }}
              />
            ))}
          </div>
        </button>
      ) : null}

      <div
        style={{
          display: "flex",
          gap: 4,
          alignItems: "center",
          position: isMobile ? "absolute" : "static",
          top: "100%",
          left: 0,
          right: 0,
          flexDirection: isMobile ? "column" : "row",
          padding: isMobile ? "12px 18px 18px" : 0,
          background: isMobile ? "rgba(0,0,0,0.97)" : "transparent",
          borderBottom: isMobile && menuOpen ? `1px solid ${colors.border}` : "none",
          transform: isMobile && !menuOpen ? "translateY(-120%)" : "translateY(0)",
          opacity: isMobile && !menuOpen ? 0 : 1,
          pointerEvents: isMobile && !menuOpen ? "none" : "auto",
          transition: "transform 0.25s ease, opacity 0.25s ease",
        }}
      >
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = active === id;
          const isHov = hovItem === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => goto(id)}
              onMouseEnter={() => setHovItem(id)}
              onMouseLeave={() => setHovItem(null)}
              style={{
                background: isActive
                  ? "rgba(204,0,0,0.12)"
                  : isHov
                    ? "rgba(255,255,255,0.04)"
                    : "none",
                border: `1px solid ${isActive ? "rgba(204,0,0,0.4)" : "transparent"}`,
                cursor: "pointer",
                fontFamily: "var(--font-b,'Exo 2',sans-serif)",
                fontWeight: 600,
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: isActive ? colors.redBright : isHov ? colors.white : colors.gray,
                padding: isMobile ? "12px 16px" : "6px 16px",
                transition: "all 0.2s",
                position: "relative",
                width: isMobile ? "100%" : "auto",
                textAlign: isMobile ? "left" : "center",
              }}
            >
              {label}
              {isActive ? (
                <span
                  style={{
                    position: "absolute",
                    bottom: -1,
                    left: "20%",
                    right: "20%",
                    height: 2,
                    background: `linear-gradient(90deg, transparent, ${colors.red}, transparent)`,
                    boxShadow: `0 0 8px ${colors.red}`,
                  }}
                />
              ) : null}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;

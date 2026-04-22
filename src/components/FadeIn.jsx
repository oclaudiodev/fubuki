import useInView from "../hooks/useInView";

function FadeIn({ children, delay = 0, direction = "up", style: s = {} }) {
  const [ref, visible] = useInView();

  const transforms = {
    up: visible ? "translateY(0)" : "translateY(36px)",
    down: visible ? "translateY(0)" : "translateY(-36px)",
    left: visible ? "translateX(0)" : "translateX(-36px)",
    right: visible ? "translateX(0)" : "translateX(36px)",
    scale: visible ? "scale(1)" : "scale(0.88)",
    none: "none",
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: transforms[direction] || transforms.up,
        transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}s,
                     transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
        ...s,
      }}
    >
      {children}
    </div>
  );
}

export default FadeIn;

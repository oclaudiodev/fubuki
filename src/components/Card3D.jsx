import { useRef, useState } from "react";

export default function Card3D({
  children,
  maxTilt = 12,
  glareOpacity = 0.12,
  scale = 1.04,
  style: s = {},
}) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const onMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const px = (e.clientX - left) / width;
    const py = (e.clientY - top) / height;
    setTilt({
      rx: (py - 0.5) * -maxTilt * 2,
      ry: (px - 0.5) * maxTilt * 2,
    });
    setPos({ x: px * 100, y: py * 100 });
  };

  const onLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    setPos({ x: 50, y: 50 });
    setActive(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={onLeave}
      style={{
        perspective: "900px",
        transformStyle: "preserve-3d",
        ...s,
      }}
    >
      <div
        style={{
          transform: active
            ? `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${scale})`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transition: active
            ? "transform 0.1s ease-out"
            : "transform 0.6s cubic-bezier(.22,1,.36,1)",
          transformStyle: "preserve-3d",
          position: "relative",
          willChange: "transform",
        }}
      >
        {children}

        {active ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "inherit",
              background: `radial-gradient(
                circle at ${pos.x}% ${pos.y}%,
                rgba(255,255,255,${glareOpacity}) 0%,
                transparent 60%
              )`,
              pointerEvents: "none",
              zIndex: 10,
              mixBlendMode: "screen",
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

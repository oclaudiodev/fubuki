export default function FloatingCube({ size = 60, opacity = 0.5, top, left, right, bottom, delay = 0 }) {
  const face = {
    position: "absolute",
    width: size,
    height: size,
    border: "1px solid rgba(204,0,0,0.35)",
    background: "rgba(204,0,0,0.03)",
    backfaceVisibility: "hidden",
  };

  const half = size / 2;

  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        transformStyle: "preserve-3d",
        animation: `spinCube ${10 + delay}s linear infinite`,
        opacity,
        pointerEvents: "none",
        animationDelay: `${delay}s`,
      }}
    >
      <style>{`
        @keyframes spinCube {
          0%   { transform: rotateX(0deg)   rotateY(0deg); }
          33%  { transform: rotateX(120deg) rotateY(60deg); }
          66%  { transform: rotateX(60deg)  rotateY(200deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>

      <div style={{ ...face, transform: `translateZ(${half}px)` }} />
      <div style={{ ...face, transform: `rotateY(180deg) translateZ(${half}px)` }} />
      <div style={{ ...face, transform: `rotateY(-90deg) translateZ(${half}px)` }} />
      <div style={{ ...face, transform: `rotateY(90deg) translateZ(${half}px)` }} />
      <div style={{ ...face, transform: `rotateX(90deg) translateZ(${half}px)` }} />
      <div style={{ ...face, transform: `rotateX(-90deg) translateZ(${half}px)` }} />
    </div>
  );
}

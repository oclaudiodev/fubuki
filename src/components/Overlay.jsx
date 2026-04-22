function Overlay() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          pointerEvents: "none",
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0,0,0,0.07) 3px,
            rgba(0,0,0,0.07) 4px
          )`,
        }}
      />

      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          height: "12%",
          zIndex: 9997,
          pointerEvents: "none",
          background: "linear-gradient(180deg, transparent, rgba(204,0,0,0.025), transparent)",
          animation: "scanMove 7s linear infinite",
        }}
      />

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9996,
          pointerEvents: "none",
          background: "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.7) 100%)",
        }}
      />
    </>
  );
}

export default Overlay;

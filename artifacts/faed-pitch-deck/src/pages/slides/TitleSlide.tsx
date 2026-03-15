export default function TitleSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #0F3D4F 0%, #195155 50%, #0d2d38 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.12) 0%, transparent 60%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 10% 90%, rgba(25,81,85,0.6) 0%, transparent 50%)" }} />

      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)" }} />
      <div className="absolute bottom-0 left-0 w-full h-[1px]" style={{ background: "rgba(201,168,76,0.15)" }} />
      <div className="absolute top-0 left-0 w-[3px] h-full" style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent)" }} />

      <div className="absolute top-[8vh] right-[7vw] flex flex-col items-end gap-[0.8vh]">
        <div className="text-[1.1vw] font-light tracking-[0.25em] uppercase" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
          Business Requirements Document
        </div>
        <div className="text-[1vw] font-light tracking-[0.15em]" style={{ color: "rgba(212,234,236,0.4)", fontFamily: "IBM Plex Sans" }}>
          Version 1.0 · 2026
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <div className="mb-[2vh]">
          <div className="text-[1.1vw] tracking-[0.25em] font-light uppercase mb-[3vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>
            وثيقة متطلبات العمل
          </div>
          <h1 className="font-black leading-none tracking-tight" style={{ fontSize: "9vw", color: "#f5f2ee", fontFamily: "Cairo", lineHeight: 1 }}>
            فائض
          </h1>
          <div className="mt-[1.5vh] text-[3vw] font-light tracking-[0.4em]" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "Cairo" }}>
            FAED PLATFORM
          </div>
        </div>

        <div className="mt-[4vh] max-w-[60vw]">
          <p className="text-[1.8vw] font-light leading-relaxed" style={{ color: "rgba(212,234,236,0.8)", fontFamily: "Cairo" }}>
            منصة رقمية لتصريف فوائض الأزياء والمنسوجات — Deadstock
          </p>
          <p className="text-[1.3vw] font-light mt-[1.2vh]" style={{ color: "rgba(212,234,236,0.45)", fontFamily: "IBM Plex Sans" }}>
            Digital Marketplace · Fashion & Textile · E-Commerce · Saudi Arabia
          </p>
        </div>
      </div>

      <div className="absolute bottom-[6vh] left-[8vw] right-[7vw] flex items-center justify-between">
        <div className="text-[1.1vw] font-light" style={{ color: "rgba(212,234,236,0.35)", fontFamily: "IBM Plex Sans" }}>
          Confidential — For Internal Review Only
        </div>
        <div className="flex items-center gap-[1.5vw]">
          <div className="w-[3vw] h-[1px]" style={{ background: "rgba(201,168,76,0.4)" }} />
          <div className="text-[1.1vw] font-light" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "IBM Plex Sans" }}>
            BRD v1.0
          </div>
        </div>
      </div>
    </div>
  );
}

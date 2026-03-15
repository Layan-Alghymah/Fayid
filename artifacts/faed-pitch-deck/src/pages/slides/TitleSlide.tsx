export default function TitleSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #0F3D4F 0%, #195155 50%, #0d2d38 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.12) 0%, transparent 60%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 10% 90%, rgba(25,81,85,0.6) 0%, transparent 50%)" }} />

      <div className="absolute top-0 right-0 w-[40vw] h-[60vh]" style={{ background: "linear-gradient(225deg, rgba(201,168,76,0.08) 0%, transparent 70%)" }} />

      <div className="absolute bottom-0 left-0 w-[2px] h-full" style={{ background: "linear-gradient(180deg, transparent, #c9a84c, transparent)" }} />
      <div className="absolute top-0 left-0 w-full h-[2px]" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)" }} />

      <div className="absolute top-[8vh] right-[7vw] flex flex-col items-end gap-[1vh]">
        <div className="text-[1.3vw] font-light tracking-[0.3em] uppercase" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "IBM Plex Sans" }}>
          FAED PLATFORM
        </div>
        <div className="text-[1.1vw] font-light tracking-[0.2em]" style={{ color: "rgba(212,234,236,0.5)", fontFamily: "IBM Plex Sans" }}>
          BRD v1.0 · 2026
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center px-[8vw]">
        <div className="mb-[3vh]">
          <div className="text-[1.2vw] tracking-[0.25em] font-light mb-[2vh] uppercase" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
            منصة رقمية سعودية متخصصة
          </div>
          <h1 className="font-black leading-none tracking-tight" style={{ fontSize: "9vw", color: "#f5f2ee", fontFamily: "Cairo", lineHeight: 1 }}>
            فائض
          </h1>
          <div className="mt-[2vh] text-[3.5vw] font-light tracking-widest" style={{ color: "rgba(201,168,76,0.9)", fontFamily: "Cairo" }}>
            FAED
          </div>
        </div>

        <div className="mt-[3vh] max-w-[55vw]">
          <p className="text-[1.9vw] font-light leading-relaxed" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>
            سوق رقمي لتصريف فوائض الأزياء والمنسوجات
          </p>
          <p className="text-[1.5vw] font-light mt-[1vh]" style={{ color: "rgba(212,234,236,0.55)", fontFamily: "IBM Plex Sans" }}>
            Deadstock Fashion &amp; Textile Marketplace — Saudi Arabia
          </p>
        </div>
      </div>

      <div className="absolute bottom-[6vh] right-[7vw] flex items-center gap-[2vw]">
        <div className="w-[4vw] h-[1px]" style={{ background: "rgba(201,168,76,0.5)" }} />
        <div className="text-[1.3vw] font-light" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
          Circular Economy · Asset-Light · Commission-Based
        </div>
      </div>

      <div className="absolute bottom-[6vh] left-[8vw] text-[1.1vw] font-light" style={{ color: "rgba(212,234,236,0.4)", fontFamily: "IBM Plex Sans" }}>
        Confidential · For Discussion Only
      </div>
    </div>
  );
}

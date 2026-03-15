export default function ClosingSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(145deg, #0a2028 0%, #0F3D4F 45%, #195155 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.07) 0%, transparent 55%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(25,81,85,0.4) 0%, transparent 40%)" }} />

      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #c9a84c 40%, #c9a84c 60%, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #195155 40%, #195155 60%, transparent)" }} />

      <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.4), transparent)" }} />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-[10vw]">
        <div className="text-center mb-[5vh]">
          <div className="text-[1.2vw] tracking-[0.3em] font-light uppercase mb-[2vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>
            شكرًا لكم · THANK YOU
          </div>

          <h1 className="font-black leading-none tracking-tight mb-[2vh]" style={{ fontSize: "10vw", color: "#f5f2ee", fontFamily: "Cairo", lineHeight: 0.9 }}>
            فائض
          </h1>

          <div className="text-[2.5vw] font-light tracking-[0.3em] mb-[3vh]" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "Cairo" }}>
            FAED
          </div>

          <p className="text-[1.7vw] font-light max-w-[55vw] leading-relaxed" style={{ color: "rgba(212,234,236,0.7)", fontFamily: "Cairo" }}>
            نحول الفائض إلى فرصة، والمخزون الراكد إلى سيولة متجددة
          </p>
        </div>

        <div className="w-[25vw] h-[1px] my-[3vh]" style={{ background: "rgba(201,168,76,0.3)" }} />

        <div className="flex gap-[6vw] text-center">
          <div>
            <div className="text-[1.2vw] font-light tracking-widest uppercase mb-[0.5vh]" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "IBM Plex Sans" }}>
              VISION
            </div>
            <div className="text-[1.4vw] font-light" style={{ color: "rgba(212,234,236,0.65)", fontFamily: "Cairo" }}>
              اقتصاد أزياء دائري ومستدام
            </div>
          </div>
          <div className="w-[1px]" style={{ background: "rgba(201,168,76,0.2)" }} />
          <div>
            <div className="text-[1.2vw] font-light tracking-widest uppercase mb-[0.5vh]" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "IBM Plex Sans" }}>
              MISSION
            </div>
            <div className="text-[1.4vw] font-light" style={{ color: "rgba(212,234,236,0.65)", fontFamily: "Cairo" }}>
              ربط الفائض بمن يحتاجه
            </div>
          </div>
          <div className="w-[1px]" style={{ background: "rgba(201,168,76,0.2)" }} />
          <div>
            <div className="text-[1.2vw] font-light tracking-widest uppercase mb-[0.5vh]" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "IBM Plex Sans" }}>
              CONTACT
            </div>
            <div className="text-[1.4vw] font-light" style={{ color: "rgba(212,234,236,0.65)", fontFamily: "Cairo" }}>
              faed.sa · 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

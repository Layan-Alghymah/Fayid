export default function ClosingSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(145deg, #0a2028 0%, #0F3D4F 45%, #195155 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.07) 0%, transparent 55%)" }} />
      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #c9a84c 40%, #c9a84c 60%, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #195155 40%, #195155 60%, transparent)" }} />

      <div className="absolute inset-0 px-[7vw] py-[7vh] flex flex-col">
        <div className="mb-[3vh]">
          <div className="text-[1vw] tracking-[0.2em] font-light uppercase mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
            §9 — APPENDIX · INDEX
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#f5f2ee", fontFamily: "Cairo" }}>
            ملخص الوثيقة وفهرس المحتوى
          </h2>
        </div>

        <div className="flex gap-[3vw] flex-1">
          <div className="flex-1 flex flex-col gap-[1.5vh]">
            <div className="text-[1vw] font-semibold tracking-widests uppercase mb-[1vh]" style={{ color: "rgba(201,168,76,0.55)", fontFamily: "IBM Plex Sans" }}>
              TABLE OF CONTENTS
            </div>
            <div className="flex flex-col gap-[1.2vh]">
              <div className="flex items-center justify-between p-[1.5vw] rounded-lg" style={{ background: "rgba(245,242,238,0.04)", border: "1px solid rgba(245,242,238,0.07)" }}>
                <span className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.7)", fontFamily: "Cairo" }}>§1 نظرة عامة والأهداف</span>
                <span className="text-[1.1vw]" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "IBM Plex Sans" }}>Slide 2</span>
              </div>
              <div className="flex items-center justify-between p-[1.5vw] rounded-lg" style={{ background: "rgba(245,242,238,0.04)", border: "1px solid rgba(245,242,238,0.07)" }}>
                <span className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.7)", fontFamily: "Cairo" }}>§3 شخصيات المستخدمين</span>
                <span className="text-[1.1vw]" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "IBM Plex Sans" }}>Slide 3</span>
              </div>
              <div className="flex items-center justify-between p-[1.5vw] rounded-lg" style={{ background: "rgba(245,242,238,0.04)", border: "1px solid rgba(245,242,238,0.07)" }}>
                <span className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.7)", fontFamily: "Cairo" }}>§4 ميزات المنتج F1–F8</span>
                <span className="text-[1.1vw]" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "IBM Plex Sans" }}>Slides 4–5</span>
              </div>
              <div className="flex items-center justify-between p-[1.5vw] rounded-lg" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)" }}>
                <span className="text-[1.3vw] font-semibold" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>§5 User Flows — رحلة المشتري والمورد</span>
                <span className="text-[1.1vw]" style={{ color: "#c9a84c", fontFamily: "IBM Plex Sans" }}>Slides 6–7</span>
              </div>
              <div className="flex items-center justify-between p-[1.5vw] rounded-lg" style={{ background: "rgba(245,242,238,0.04)", border: "1px solid rgba(245,242,238,0.07)" }}>
                <span className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.7)", fontFamily: "Cairo" }}>§6 نطاق MVP</span>
                <span className="text-[1.1vw]" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "IBM Plex Sans" }}>Slide 8</span>
              </div>
              <div className="flex items-center justify-between p-[1.5vw] rounded-lg" style={{ background: "rgba(245,242,238,0.04)", border: "1px solid rgba(245,242,238,0.07)" }}>
                <span className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.7)", fontFamily: "Cairo" }}>§7 البنية التقنية</span>
                <span className="text-[1.1vw]" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "IBM Plex Sans" }}>Slide 9</span>
              </div>
              <div className="flex items-center justify-between p-[1.5vw] rounded-lg" style={{ background: "rgba(245,242,238,0.04)", border: "1px solid rgba(245,242,238,0.07)" }}>
                <span className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.7)", fontFamily: "Cairo" }}>§8 خارطة الطريق</span>
                <span className="text-[1.1vw]" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "IBM Plex Sans" }}>Slide 10</span>
              </div>
            </div>
          </div>

          <div className="w-[35vw] flex flex-col items-center justify-center gap-[3vh]">
            <div className="text-center">
              <div className="font-black" style={{ fontSize: "8vw", color: "#f5f2ee", fontFamily: "Cairo", lineHeight: 1 }}>فائض</div>
              <div className="text-[2vw] font-light tracking-[0.4em] mt-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "Cairo" }}>FAED</div>
            </div>

            <div className="w-[20vw] h-[1px]" style={{ background: "rgba(201,168,76,0.25)" }} />

            <div className="text-center">
              <div className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.55)", fontFamily: "Cairo" }}>
                PRD Version 1.0 · 2025
              </div>
              <div className="text-[1.1vw] font-light mt-[0.8vh]" style={{ color: "rgba(212,234,236,0.35)", fontFamily: "IBM Plex Sans" }}>
                Faed Platform — Product Requirements Document
              </div>
            </div>

            <div className="p-[2vw] rounded-xl text-center" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <div className="text-[1.2vw] font-light" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "Cairo" }}>
                نحوّل الفائض إلى فرصة
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

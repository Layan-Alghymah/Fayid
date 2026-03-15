export default function FinancialsSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(155deg, #0a2530 0%, #0F3D4F 50%, #195155 100%)" }}>
      <div className="absolute top-0 left-0 w-full h-full" style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(201,168,76,0.08) 0%, transparent 55%)" }} />

      <div className="absolute inset-0 px-[7vw] py-[7vh] flex flex-col">
        <div className="mb-[4vh]">
          <div className="text-[1.1vw] tracking-[0.2em] font-light uppercase mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
            FINANCIALS · المؤشرات المالية
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#f5f2ee", fontFamily: "Cairo" }}>
            إسقاطات السنة الأولى
          </h2>
        </div>

        <div className="flex gap-[3vw] flex-1">
          <div className="flex flex-col gap-[2vh] flex-1">
            <div className="flex-1 rounded-xl p-[2.5vw] flex flex-col justify-center items-center text-center" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <div className="text-[1.1vw] tracking-widest uppercase font-light mb-[1vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>GMV TARGET</div>
              <div className="font-black" style={{ fontSize: "6vw", color: "#c9a84c", fontFamily: "Cairo", lineHeight: 1 }}>
                ٥M+
              </div>
              <div className="text-[1.3vw] font-light mt-[1vh]" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>
                ريال سعودي — إجمالي قيمة المعاملات
              </div>
            </div>

            <div className="flex-1 rounded-xl p-[2.5vw] flex flex-col justify-center items-center text-center" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.1)" }}>
              <div className="text-[1.1vw] tracking-widest uppercase font-light mb-[1vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>REVENUE Y1</div>
              <div className="font-black" style={{ fontSize: "6vw", color: "#f5f2ee", fontFamily: "Cairo", lineHeight: 1 }}>
                ٥٠٠K
              </div>
              <div className="text-[1.3vw] font-light mt-[1vh]" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>
                ريال — عمولة ١٠٪ المتوقعة
              </div>
            </div>
          </div>

          <div className="w-[45vw] flex flex-col gap-[2vh]">
            <div className="flex gap-[2vh]">
              <div className="flex-1 rounded-xl p-[2vw] text-center" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
                <div className="font-black text-[4vw]" style={{ color: "#c9a84c", fontFamily: "Cairo", lineHeight: 1 }}>٥٠+</div>
                <div className="text-[1.2vw] font-light mt-[0.5vh]" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>موردًا مستهدفًا</div>
              </div>
              <div className="flex-1 rounded-xl p-[2vw] text-center" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
                <div className="font-black text-[4vw]" style={{ color: "#c9a84c", fontFamily: "Cairo", lineHeight: 1 }}>5K+</div>
                <div className="text-[1.2vw] font-light mt-[0.5vh]" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>مستخدم نشط</div>
              </div>
            </div>

            <div className="rounded-xl p-[2.5vw] flex-1" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.1)" }}>
              <div className="font-bold text-[1.5vw] mb-[2vh]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>
                جدول الإيرادات الربعي
              </div>
              <div className="flex flex-col gap-[1.5vh]">
                <div className="flex items-center gap-[2vw]">
                  <span className="text-[1.2vw] font-light w-[4vw]" style={{ color: "rgba(212,234,236,0.5)", fontFamily: "IBM Plex Sans" }}>Q1</span>
                  <div className="flex-1 h-[1.5vh] rounded-full overflow-hidden" style={{ background: "rgba(245,242,238,0.08)" }}>
                    <div className="h-full w-[15%] rounded-full" style={{ background: "rgba(201,168,76,0.6)" }} />
                  </div>
                  <span className="text-[1.2vw] font-light" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "Cairo" }}>٣٠K</span>
                </div>
                <div className="flex items-center gap-[2vw]">
                  <span className="text-[1.2vw] font-light w-[4vw]" style={{ color: "rgba(212,234,236,0.5)", fontFamily: "IBM Plex Sans" }}>Q2</span>
                  <div className="flex-1 h-[1.5vh] rounded-full overflow-hidden" style={{ background: "rgba(245,242,238,0.08)" }}>
                    <div className="h-full w-[30%] rounded-full" style={{ background: "rgba(201,168,76,0.7)" }} />
                  </div>
                  <span className="text-[1.2vw] font-light" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "Cairo" }}>٨٠K</span>
                </div>
                <div className="flex items-center gap-[2vw]">
                  <span className="text-[1.2vw] font-light w-[4vw]" style={{ color: "rgba(212,234,236,0.5)", fontFamily: "IBM Plex Sans" }}>Q3</span>
                  <div className="flex-1 h-[1.5vh] rounded-full overflow-hidden" style={{ background: "rgba(245,242,238,0.08)" }}>
                    <div className="h-full w-[65%] rounded-full" style={{ background: "rgba(201,168,76,0.85)" }} />
                  </div>
                  <span className="text-[1.2vw] font-light" style={{ color: "rgba(201,168,76,0.85)", fontFamily: "Cairo" }}>١٦٠K</span>
                </div>
                <div className="flex items-center gap-[2vw]">
                  <span className="text-[1.2vw] font-light w-[4vw]" style={{ color: "rgba(212,234,236,0.5)", fontFamily: "IBM Plex Sans" }}>Q4</span>
                  <div className="flex-1 h-[1.5vh] rounded-full overflow-hidden" style={{ background: "rgba(245,242,238,0.08)" }}>
                    <div className="h-full w-[90%] rounded-full" style={{ background: "#c9a84c" }} />
                  </div>
                  <span className="text-[1.2vw] font-light" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>٢٣٠K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

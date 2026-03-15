export default function ClosingSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(145deg, #0a2028 0%, #0F3D4F 45%, #195155 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.07) 0%, transparent 55%)" }} />

      <div className="absolute top-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #c9a84c 40%, #c9a84c 60%, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: "linear-gradient(90deg, transparent, #195155 40%, #195155 60%, transparent)" }} />

      <div className="absolute inset-0 px-[7vw] py-[7vh] flex flex-col">
        <div className="mb-[3vh]">
          <div className="text-[1vw] tracking-[0.2em] font-light uppercase mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
            SUCCESS METRICS · §10
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#f5f2ee", fontFamily: "Cairo" }}>
            مؤشرات النجاح وملخص التنفيذ
          </h2>
        </div>

        <div className="flex gap-[3vw] flex-1">
          <div className="flex-1 flex flex-col gap-[2vh]">
            <div className="text-[1vw] font-semibold mb-[0.5vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>
              KEY PERFORMANCE INDICATORS
            </div>

            <div className="flex gap-[2vw]">
              <div className="flex-1 p-[2vw] rounded-xl text-center" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <div className="font-black" style={{ fontSize: "4vw", color: "#c9a84c", fontFamily: "Cairo", lineHeight: 1 }}>١٠+</div>
                <div className="text-[1.1vw] font-light mt-[0.8vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "Cairo" }}>موردون في ٣ أشهر</div>
              </div>
              <div className="flex-1 p-[2vw] rounded-xl text-center" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.1)" }}>
                <div className="font-black" style={{ fontSize: "4vw", color: "#f5f2ee", fontFamily: "Cairo", lineHeight: 1 }}>GMV</div>
                <div className="text-[1.1vw] font-light mt-[0.8vh]" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>٥M+ ريال Y1</div>
              </div>
            </div>

            <div className="flex flex-col gap-[1.2vh]">
              <div className="flex items-center justify-between p-[1.5vw] rounded-lg" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
                <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>معدل تحويل الزوار</span>
                <span className="text-[1.2vw] font-semibold" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>≥ ٣٪</span>
              </div>
              <div className="flex items-center justify-between p-[1.5vw] rounded-lg" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
                <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>رضا المستهلكين</span>
                <span className="text-[1.2vw] font-semibold" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>≥ ٤/٥</span>
              </div>
              <div className="flex items-center justify-between p-[1.5vw] rounded-lg" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
                <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>Uptime المنصة</span>
                <span className="text-[1.2vw] font-semibold" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>99.9٪</span>
              </div>
              <div className="flex items-center justify-between p-[1.5vw] rounded-lg" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
                <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>معدل تصريف المخزون</span>
                <span className="text-[1.2vw] font-semibold" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>≥ ٦٠٪</span>
              </div>
            </div>
          </div>

          <div className="w-[38vw] flex flex-col gap-[2vh]">
            <div className="rounded-2xl overflow-hidden flex-1" style={{ background: "rgba(245,242,238,0.04)", border: "1px solid rgba(245,242,238,0.08)" }}>
              <div className="p-[2.5vw] h-full flex flex-col">
                <div className="text-[1vw] font-semibold mb-[2vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>
                  APPROVAL & NEXT STEPS
                </div>

                <div className="flex flex-col gap-[1.5vh] flex-1">
                  <div className="flex items-start gap-[1.5vw]">
                    <div className="w-[2vw] h-[2vw] rounded-full flex-shrink-0 flex items-center justify-center text-[1vw] font-bold" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}>١</div>
                    <div>
                      <div className="font-semibold text-[1.3vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>اعتماد وثيقة BRD</div>
                      <div className="text-[1.1vw] font-light" style={{ color: "rgba(212,234,236,0.5)", fontFamily: "Cairo" }}>من أصحاب المصلحة والإدارة</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-[1.5vw]">
                    <div className="w-[2vw] h-[2vw] rounded-full flex-shrink-0 flex items-center justify-center text-[1vw] font-bold" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}>٢</div>
                    <div>
                      <div className="font-semibold text-[1.3vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>إعداد وثيقة المتطلبات التقنية</div>
                      <div className="text-[1.1vw] font-light" style={{ color: "rgba(212,234,236,0.5)", fontFamily: "Cairo" }}>SRS / Technical Specification</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-[1.5vw]">
                    <div className="w-[2vw] h-[2vw] rounded-full flex-shrink-0 flex items-center justify-center text-[1vw] font-bold" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}>٣</div>
                    <div>
                      <div className="font-semibold text-[1.3vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>إطلاق مرحلة التصميم</div>
                      <div className="text-[1.1vw] font-light" style={{ color: "rgba(212,234,236,0.5)", fontFamily: "Cairo" }}>UX/UI Wireframes & Prototypes</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-[1.5vw]">
                    <div className="w-[2vw] h-[2vw] rounded-full flex-shrink-0 flex items-center justify-center text-[1vw] font-bold" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c" }}>٤</div>
                    <div>
                      <div className="font-semibold text-[1.3vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>بدء التطوير — Sprint 1</div>
                      <div className="text-[1.1vw] font-light" style={{ color: "rgba(212,234,236,0.5)", fontFamily: "Cairo" }}>Q1 2026 · المنصة الأساسية</div>
                    </div>
                  </div>
                </div>

                <div className="mt-[2vh] p-[1.5vw] rounded-lg text-center" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)" }}>
                  <div className="text-[1.15vw] font-light" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "Cairo" }}>
                    BRD v1.0 · فائض Platform · 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

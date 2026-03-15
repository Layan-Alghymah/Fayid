export default function FinancialsSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(155deg, #0a2530 0%, #0F3D4F 50%, #195155 100%)" }}>
      <div className="absolute top-0 left-0 w-full h-full" style={{ background: "radial-gradient(ellipse at 100% 100%, rgba(201,168,76,0.07) 0%, transparent 55%)" }} />

      <div className="absolute inset-0 px-[7vw] py-[7vh] flex flex-col">
        <div className="mb-[3.5vh]">
          <div className="text-[1vw] tracking-[0.2em] font-light uppercase mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
            BUSINESS RULES · §8
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#f5f2ee", fontFamily: "Cairo" }}>
            قواعد العمل والسياسات
          </h2>
        </div>

        <div className="flex gap-[3vw] flex-1">
          <div className="flex-1 flex flex-col gap-[2vh]">
            <div className="text-[1vw] font-semibold mb-[0.5vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>
              PRICING RULES
            </div>

            <div className="flex items-center gap-[2vw] p-[2vw] rounded-xl" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <div className="font-black" style={{ fontSize: "4.5vw", color: "#c9a84c", fontFamily: "Cairo", lineHeight: 1 }}>١٠٪</div>
              <div>
                <div className="font-semibold text-[1.4vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>العمولة الثابتة</div>
                <div className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>تُحتسب تلقائيًا على كل صفقة مكتملة</div>
              </div>
            </div>

            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
              <div className="font-semibold text-[1.3vw] mb-[1vh]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>سياسة التسعير</div>
              <div className="flex flex-col gap-[0.8vh]">
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1vw] h-[1vw] rounded-full" style={{ background: "rgba(201,168,76,0.5)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>يحدد المورد سعر البيع</span>
                </div>
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1vw] h-[1vw] rounded-full" style={{ background: "rgba(201,168,76,0.5)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>لا تتدخل المنصة في التسعير</span>
                </div>
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1vw] h-[1vw] rounded-full" style={{ background: "rgba(201,168,76,0.5)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>لا استرداد بعد إتمام الشحن إلا بعيوب</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[2vh]">
            <div className="text-[1vw] font-semibold mb-[0.5vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>
              OPERATIONAL RULES
            </div>

            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
              <div className="font-semibold text-[1.3vw] mb-[1vh]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>إدارة المخزون</div>
              <div className="flex flex-col gap-[0.8vh]">
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1vw] h-[1vw] rounded-full" style={{ background: "rgba(201,168,76,0.4)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>الكمية المعروضة = الكمية الفعلية المتاحة</span>
                </div>
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1vw] h-[1vw] rounded-full" style={{ background: "rgba(201,168,76,0.4)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>إغلاق تلقائي عند نفاد الكمية</span>
                </div>
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1vw] h-[1vw] rounded-full" style={{ background: "rgba(201,168,76,0.4)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>SLA شحن ٤٨ ساعة من التأكيد</span>
                </div>
              </div>
            </div>

            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
              <div className="font-semibold text-[1.3vw] mb-[1vh]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>ضمان الجودة</div>
              <div className="flex flex-col gap-[0.8vh]">
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1vw] h-[1vw] rounded-full" style={{ background: "rgba(201,168,76,0.4)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>مراجعة أولية لكل مورد جديد</span>
                </div>
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1vw] h-[1vw] rounded-full" style={{ background: "rgba(201,168,76,0.4)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>إيقاف موردين بتقييم أقل من ٣/٥</span>
                </div>
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1vw] h-[1vw] rounded-full" style={{ background: "rgba(201,168,76,0.4)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>نظام شكاوى واسترداد واضح</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

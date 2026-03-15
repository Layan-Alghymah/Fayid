export default function TargetMarketSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f2ee" }}>
      <div className="absolute top-0 right-0 w-[50vw] h-[4px]" style={{ background: "linear-gradient(90deg, transparent, #195155)" }} />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[4px]" style={{ background: "linear-gradient(90deg, #195155, transparent)" }} />

      <div className="absolute inset-0 flex flex-col px-[7vw] pt-[7vh] pb-[6vh]">
        <div className="mb-[4vh]">
          <div className="text-[1.1vw] tracking-[0.2em] font-medium uppercase mb-[1vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
            TARGET MARKET
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#0F3D4F", fontFamily: "Cairo" }}>
            الشرائح المستهدفة
          </h2>
        </div>

        <div className="flex gap-[4vw] flex-1">
          <div className="flex-1 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(145deg, #0F3D4F, #195155)" }}>
            <div className="p-[3vw] h-full flex flex-col">
              <div className="text-[1.2vw] tracking-widest uppercase font-light mb-[1.5vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
                SUPPLIERS
              </div>
              <div className="font-black text-[2.5vw] mb-[2vh]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>
                الموردون
              </div>

              <div className="flex flex-col gap-[1.5vh] flex-1">
                <div className="flex items-center gap-[1.5vw]">
                  <div className="w-[2px] h-[4vh]" style={{ background: "#c9a84c" }} />
                  <div>
                    <div className="font-semibold text-[1.4vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>مصانع الأزياء</div>
                    <div className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>الإنتاج الزائد والموسمي</div>
                  </div>
                </div>
                <div className="flex items-center gap-[1.5vw]">
                  <div className="w-[2px] h-[4vh]" style={{ background: "rgba(201,168,76,0.6)" }} />
                  <div>
                    <div className="font-semibold text-[1.4vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>العلامات التجارية المحلية</div>
                    <div className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>مخزون مواسم سابقة</div>
                  </div>
                </div>
                <div className="flex items-center gap-[1.5vw]">
                  <div className="w-[2px] h-[4vh]" style={{ background: "rgba(201,168,76,0.4)" }} />
                  <div>
                    <div className="font-semibold text-[1.4vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>الشركات ذات الفائض الموسمي</div>
                    <div className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>بحاجة لتصريف سريع</div>
                  </div>
                </div>
              </div>

              <div className="mt-[2vh] p-[1.5vw] rounded-lg" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <p className="text-[1.2vw] font-light" style={{ color: "rgba(201,168,76,0.9)", fontFamily: "Cairo" }}>
                  الهدف: تصريف سريع · تقليل الخسائر · قناة بيع مباشرة
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-2xl overflow-hidden" style={{ background: "rgba(25,81,85,0.06)", border: "2px solid rgba(25,81,85,0.15)" }}>
            <div className="p-[3vw] h-full flex flex-col">
              <div className="text-[1.2vw] tracking-widest uppercase font-light mb-[1.5vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
                BUYERS
              </div>
              <div className="font-black text-[2.5vw] mb-[2vh]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>
                المستهلكون
              </div>

              <div className="flex flex-col gap-[1.5vh] flex-1">
                <div className="flex items-center gap-[1.5vw]">
                  <div className="w-[2px] h-[4vh]" style={{ background: "#195155" }} />
                  <div>
                    <div className="font-semibold text-[1.4vw]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>الفئة العمرية ١٨–٣٥ سنة</div>
                    <div className="text-[1.2vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>جيل المتسوقين الرقميين</div>
                  </div>
                </div>
                <div className="flex items-center gap-[1.5vw]">
                  <div className="w-[2px] h-[4vh]" style={{ background: "rgba(25,81,85,0.6)" }} />
                  <div>
                    <div className="font-semibold text-[1.4vw]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>حساسية سعرية مرتفعة</div>
                    <div className="text-[1.2vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>يبحثون عن القيمة الحقيقية</div>
                  </div>
                </div>
                <div className="flex items-center gap-[1.5vw]">
                  <div className="w-[2px] h-[4vh]" style={{ background: "rgba(25,81,85,0.4)" }} />
                  <div>
                    <div className="font-semibold text-[1.4vw]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>الاهتمام بالاستدامة</div>
                    <div className="text-[1.2vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>استهلاك ذكي وواعٍ بيئيًا</div>
                  </div>
                </div>
              </div>

              <div className="mt-[2vh] p-[1.5vw] rounded-lg" style={{ background: "rgba(25,81,85,0.08)", border: "1px solid rgba(25,81,85,0.15)" }}>
                <p className="text-[1.2vw] font-light" style={{ color: "#195155", fontFamily: "Cairo" }}>
                  منتجات أصلية بسعر أقل · تجربة موثوقة · عروض محدودة
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

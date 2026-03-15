export default function TargetMarketSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f2ee" }}>
      <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: "linear-gradient(90deg, #195155, #0F3D4F, #c9a84c, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-[3px] h-full" style={{ background: "linear-gradient(180deg, transparent, rgba(25,81,85,0.3), transparent)" }} />

      <div className="absolute inset-0 px-[7vw] pt-[7vh] pb-[5vh] flex flex-col">
        <div className="mb-[3vh]">
          <div className="text-[1vw] tracking-[0.2em] font-medium uppercase mb-[1vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
            FUNCTIONAL REQUIREMENTS · §5
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#0F3D4F", fontFamily: "Cairo" }}>
            المتطلبات الوظيفية — لوحة الموردين
          </h2>
        </div>

        <div className="flex gap-[3vw] flex-1">
          <div className="flex-1 flex flex-col gap-[1.8vh]">
            <div className="text-[1.1vw] font-semibold" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
              SUPPLIER DASHBOARD
            </div>

            <div className="flex items-start gap-[1.5vw] p-[1.8vw] rounded-xl" style={{ background: "rgba(25,81,85,0.06)", border: "1px solid rgba(25,81,85,0.1)" }}>
              <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold flex-shrink-0" style={{ background: "#195155", color: "#f5f2ee", fontFamily: "IBM Plex Sans" }}>FR-01</div>
              <div>
                <div className="font-semibold text-[1.3vw]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>إدارة المخزون</div>
                <div className="text-[1.2vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>رفع المنتجات، تحديد الكميات والأسعار، إدارة الصور</div>
              </div>
            </div>

            <div className="flex items-start gap-[1.5vw] p-[1.8vw] rounded-xl" style={{ background: "rgba(25,81,85,0.06)", border: "1px solid rgba(25,81,85,0.1)" }}>
              <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold flex-shrink-0" style={{ background: "#195155", color: "#f5f2ee", fontFamily: "IBM Plex Sans" }}>FR-02</div>
              <div>
                <div className="font-semibold text-[1.3vw]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>إدارة الطلبات</div>
                <div className="text-[1.2vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>استلام إشعارات الطلبات، تأكيد الشحن، تتبع الحالة</div>
              </div>
            </div>

            <div className="flex items-start gap-[1.5vw] p-[1.8vw] rounded-xl" style={{ background: "rgba(25,81,85,0.06)", border: "1px solid rgba(25,81,85,0.1)" }}>
              <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold flex-shrink-0" style={{ background: "#195155", color: "#f5f2ee", fontFamily: "IBM Plex Sans" }}>FR-03</div>
              <div>
                <div className="font-semibold text-[1.3vw]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>التقارير المالية</div>
                <div className="text-[1.2vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>عرض المبيعات والمستحقات وخصم العمولة تلقائيًا</div>
              </div>
            </div>

            <div className="flex items-start gap-[1.5vw] p-[1.8vw] rounded-xl" style={{ background: "rgba(25,81,85,0.06)", border: "1px solid rgba(25,81,85,0.1)" }}>
              <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold flex-shrink-0" style={{ background: "#195155", color: "#f5f2ee", fontFamily: "IBM Plex Sans" }}>FR-04</div>
              <div>
                <div className="font-semibold text-[1.3vw]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>تحليلات الأداء</div>
                <div className="text-[1.2vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>معدلات التحويل، المنتجات الأعلى مبيعًا، إحصاءات الزوار</div>
              </div>
            </div>
          </div>

          <div className="w-[35vw] rounded-2xl overflow-hidden" style={{ background: "linear-gradient(145deg, #0F3D4F, #195155)" }}>
            <div className="p-[3vw] h-full flex flex-col">
              <div className="text-[1vw] tracking-widest uppercase font-light mb-[2vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>
                SUPPLIER REGISTRATION
              </div>
              <div className="flex flex-col gap-[2vh] flex-1">
                <div>
                  <div className="text-[1.1vw] font-semibold mb-[0.8vh]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>تأهيل الموردين</div>
                  <p className="text-[1.2vw] font-light leading-relaxed" style={{ color: "rgba(212,234,236,0.7)", fontFamily: "Cairo" }}>
                    المنصة تستهدف موردين مؤسسين بمخزون موثق وهوية تجارية معتمدة
                  </p>
                </div>

                <div>
                  <div className="text-[1.1vw] font-semibold mb-[0.8vh]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>معايير القبول</div>
                  <div className="flex flex-col gap-[0.8vh]">
                    <div className="flex items-center gap-[1vw]">
                      <div className="w-[1vw] h-[1vw] rounded-full flex-shrink-0" style={{ background: "rgba(201,168,76,0.5)" }} />
                      <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>سجل تجاري سعودي</span>
                    </div>
                    <div className="flex items-center gap-[1vw]">
                      <div className="w-[1vw] h-[1vw] rounded-full flex-shrink-0" style={{ background: "rgba(201,168,76,0.5)" }} />
                      <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>مخزون قابل للتصريف</span>
                    </div>
                    <div className="flex items-center gap-[1vw]">
                      <div className="w-[1vw] h-[1vw] rounded-full flex-shrink-0" style={{ background: "rgba(201,168,76,0.5)" }} />
                      <span className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>قدرة على الشحن المباشر</span>
                    </div>
                  </div>
                </div>

                <div className="mt-auto p-[1.5vw] rounded-lg" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
                  <p className="text-[1.15vw] font-light" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "Cairo" }}>
                    نموذج SLA: خلال ٤٨ ساعة من تأكيد الطلب يُجهّز الشحن
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

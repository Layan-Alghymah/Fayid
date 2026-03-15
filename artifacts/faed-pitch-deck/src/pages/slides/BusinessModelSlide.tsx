export default function BusinessModelSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(150deg, #0c2e3a 0%, #0F3D4F 40%, #195155 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.06) 0%, transparent 50%)" }} />

      <div className="absolute top-0 right-0 bottom-0 w-[3px]" style={{ background: "linear-gradient(180deg, transparent, #c9a84c 40%, #c9a84c 60%, transparent)" }} />

      <div className="absolute inset-0 px-[7vw] py-[7vh] flex flex-col">
        <div className="mb-[4vh]">
          <div className="text-[1.1vw] tracking-[0.2em] font-light uppercase mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
            BUSINESS MODEL
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#f5f2ee", fontFamily: "Cairo" }}>
            نموذج العمل
          </h2>
        </div>

        <div className="flex gap-[3vw] flex-1">
          <div className="flex-1 flex flex-col justify-center gap-[3vh]">
            <div className="rounded-xl p-[2.5vw]" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(201,168,76,0.3)" }}>
              <div className="flex items-center gap-[2vw] mb-[2vh]">
                <div className="rounded-lg px-[1.5vw] py-[0.8vh] font-bold text-[1.3vw]" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontFamily: "IBM Plex Sans" }}>
                  COMMISSION
                </div>
                <div className="font-black" style={{ fontSize: "5vw", color: "#c9a84c", fontFamily: "Cairo", lineHeight: 1 }}>
                  ١٠٪
                </div>
              </div>
              <p className="text-[1.5vw] leading-relaxed font-light" style={{ color: "rgba(212,234,236,0.8)", fontFamily: "Cairo" }}>
                عمولة من كل عملية بيع مكتملة — لا تتحمل المنصة تكاليف الشراء أو التخزين
              </p>
            </div>

            <div className="rounded-xl p-[2vw]" style={{ background: "rgba(245,242,238,0.04)", border: "1px solid rgba(245,242,238,0.08)" }}>
              <h4 className="font-bold text-[1.5vw] mb-[1.5vh]" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "Cairo" }}>
                لوحة تحكم ذكية للموردين
              </h4>
              <p className="text-[1.3vw] leading-relaxed font-light" style={{ color: "rgba(212,234,236,0.7)", fontFamily: "Cairo" }}>
                أتمتة تسييل الأصول عبر واجهة سهلة — رفع المنتجات، تتبع المبيعات، استلام المستحقات
              </p>
            </div>
          </div>

          <div className="w-[35vw] flex flex-col gap-[2vh]">
            <div className="font-bold text-[1.3vw] mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "Cairo" }}>
              مصادر الإيراد
            </div>

            <div className="flex items-center gap-[1.5vw] p-[1.5vw] rounded-lg" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
              <div className="w-[3px] h-full rounded-full self-stretch" style={{ background: "#c9a84c" }} />
              <div>
                <div className="font-semibold text-[1.4vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>العمولة الأساسية</div>
                <div className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>١٠٪ من قيمة كل صفقة</div>
              </div>
            </div>

            <div className="flex items-center gap-[1.5vw] p-[1.5vw] rounded-lg" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
              <div className="w-[3px] h-full rounded-full self-stretch" style={{ background: "rgba(201,168,76,0.5)" }} />
              <div>
                <div className="font-semibold text-[1.4vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>اشتراكات الموردين</div>
                <div className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>خطط مميزة لتحسين الظهور</div>
              </div>
            </div>

            <div className="flex items-center gap-[1.5vw] p-[1.5vw] rounded-lg" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
              <div className="w-[3px] h-full rounded-full self-stretch" style={{ background: "rgba(201,168,76,0.3)" }} />
              <div>
                <div className="font-semibold text-[1.4vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>خدمات مضافة</div>
                <div className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>تصوير، شحن، تحليلات</div>
              </div>
            </div>

            <div className="mt-[1vh] p-[1.5vw] rounded-lg text-center" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <div className="text-[1.3vw] font-light" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "Cairo" }}>
                نموذج Asset-Light — تكاليف تشغيلية منخفضة
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

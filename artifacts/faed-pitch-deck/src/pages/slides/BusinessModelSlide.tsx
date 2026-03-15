export default function BusinessModelSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(150deg, #0c2e3a 0%, #0F3D4F 40%, #195155 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.06) 0%, transparent 50%)" }} />
      <div className="absolute top-0 right-0 bottom-0 w-[3px]" style={{ background: "linear-gradient(180deg, transparent, #c9a84c 40%, #c9a84c 60%, transparent)" }} />

      <div className="absolute inset-0 px-[7vw] py-[7vh] flex flex-col">
        <div className="mb-[3.5vh]">
          <div className="text-[1vw] tracking-[0.2em] font-light uppercase mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
            STAKEHOLDERS · §4
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#f5f2ee", fontFamily: "Cairo" }}>
            أصحاب المصلحة والشرائح المستهدفة
          </h2>
        </div>

        <div className="flex gap-[3vw] flex-1">
          <div className="flex-1 flex flex-col gap-[2vh]">
            <div className="rounded-xl p-[2.5vw] flex-1" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(201,168,76,0.25)" }}>
              <div className="text-[1vw] tracking-widest uppercase font-light mb-[1.5vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>
                SUPPLIERS — الموردون
              </div>
              <div className="flex flex-col gap-[1.2vh]">
                <div>
                  <div className="font-semibold text-[1.3vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>مصانع الأزياء</div>
                  <div className="text-[1.15vw] font-light" style={{ color: "rgba(212,234,236,0.55)", fontFamily: "Cairo" }}>إنتاج زائد وفوائض تصنيع</div>
                </div>
                <div>
                  <div className="font-semibold text-[1.3vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>العلامات التجارية المحلية</div>
                  <div className="text-[1.15vw] font-light" style={{ color: "rgba(212,234,236,0.55)", fontFamily: "Cairo" }}>مخزون مواسم سابقة</div>
                </div>
                <div>
                  <div className="font-semibold text-[1.3vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>شركات الفائض الموسمي</div>
                  <div className="text-[1.15vw] font-light" style={{ color: "rgba(212,234,236,0.55)", fontFamily: "Cairo" }}>احتياجات تصريف سريع</div>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-[2.5vw] flex-1" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
              <div className="text-[1vw] tracking-widest uppercase font-light mb-[1.5vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>
                INTERNAL — الداخليون
              </div>
              <div className="flex flex-col gap-[1.2vh]">
                <div>
                  <div className="font-semibold text-[1.3vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>فريق إدارة المنصة</div>
                  <div className="text-[1.15vw] font-light" style={{ color: "rgba(212,234,236,0.55)", fontFamily: "Cairo" }}>تشغيل، متابعة، دعم</div>
                </div>
                <div>
                  <div className="font-semibold text-[1.3vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>فريق التقنية والتطوير</div>
                  <div className="text-[1.15vw] font-light" style={{ color: "rgba(212,234,236,0.55)", fontFamily: "Cairo" }}>بناء المنصة وصيانتها</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[38vw] flex flex-col gap-[2vh]">
            <div className="rounded-xl p-[2.5vw] flex-1" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <div className="text-[1vw] tracking-widests uppercase font-light mb-[1.5vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>
                BUYERS — المستهلكون
              </div>
              <div className="flex flex-col gap-[1.5vh]">
                <div className="flex items-start gap-[1.5vw]">
                  <div className="w-[2px] h-full self-stretch" style={{ background: "#c9a84c" }} />
                  <div>
                    <div className="font-semibold text-[1.3vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>الفئة العمرية ١٨–٣٥ سنة</div>
                    <div className="text-[1.15vw] font-light" style={{ color: "rgba(212,234,236,0.55)", fontFamily: "Cairo" }}>متسوقون رقميون نشطون</div>
                  </div>
                </div>
                <div className="flex items-start gap-[1.5vw]">
                  <div className="w-[2px] h-full self-stretch" style={{ background: "rgba(201,168,76,0.5)" }} />
                  <div>
                    <div className="font-semibold text-[1.3vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>حساسية سعرية مرتفعة</div>
                    <div className="text-[1.15vw] font-light" style={{ color: "rgba(212,234,236,0.55)", fontFamily: "Cairo" }}>يبحثون عن القيمة مقابل السعر</div>
                  </div>
                </div>
                <div className="flex items-start gap-[1.5vw]">
                  <div className="w-[2px] h-full self-stretch" style={{ background: "rgba(201,168,76,0.3)" }} />
                  <div>
                    <div className="font-semibold text-[1.3vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo" }}>مهتمون بالاستدامة</div>
                    <div className="text-[1.15vw] font-light" style={{ color: "rgba(212,234,236,0.55)", fontFamily: "Cairo" }}>استهلاك ذكي وواعٍ بيئيًا</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl p-[2vw]" style={{ background: "rgba(245,242,238,0.04)", border: "1px solid rgba(245,242,238,0.08)" }}>
              <div className="text-[1vw] font-semibold mb-[0.8vh]" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "IBM Plex Sans" }}>
                EXTERNAL PARTNERS
              </div>
              <p className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>
                شركات الشحن واللوجستيات · بوابات الدفع · شركاء التسويق
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SustainabilitySlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f2ee" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(25,81,85,0.06) 0%, transparent 60%)" }} />
      <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: "linear-gradient(90deg, #195155, #c9a84c, #0F3D4F)" }} />

      <div className="absolute inset-0 px-[7vw] pt-[7vh] pb-[5vh] flex flex-col">
        <div className="mb-[3vh]">
          <div className="text-[1vw] tracking-[0.2em] font-medium uppercase mb-[1vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
            CONSTRAINTS & ASSUMPTIONS · §9
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#0F3D4F", fontFamily: "Cairo" }}>
            القيود والافتراضات
          </h2>
        </div>

        <div className="flex gap-[3vw] flex-1">
          <div className="flex-1 flex flex-col gap-[2vh]">
            <div className="text-[1.1vw] font-semibold mb-[0.5vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
              CONSTRAINTS — القيود
            </div>

            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(25,81,85,0.07)", border: "1px solid rgba(25,81,85,0.12)" }}>
              <div className="font-bold text-[1.4vw] mb-[1vh]" style={{ color: "#195155", fontFamily: "Cairo" }}>
                القيود التقنية
              </div>
              <div className="flex flex-col gap-[0.8vh]">
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1.2vw] h-[1.2vw] rounded-sm flex-shrink-0" style={{ background: "rgba(25,81,85,0.3)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>يعتمد على بنية سحابية (AWS / Azure)</span>
                </div>
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1.2vw] h-[1.2vw] rounded-sm flex-shrink-0" style={{ background: "rgba(25,81,85,0.3)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>تكامل بوابات الدفع المحلية (Tap، HyperPay)</span>
                </div>
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1.2vw] h-[1.2vw] rounded-sm flex-shrink-0" style={{ background: "rgba(25,81,85,0.3)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>الامتثال لقوانين البيانات السعودية</span>
                </div>
              </div>
            </div>

            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(25,81,85,0.07)", border: "1px solid rgba(25,81,85,0.12)" }}>
              <div className="font-bold text-[1.4vw] mb-[1vh]" style={{ color: "#195155", fontFamily: "Cairo" }}>
                القيود التشغيلية
              </div>
              <div className="flex flex-col gap-[0.8vh]">
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1.2vw] h-[1.2vw] rounded-sm flex-shrink-0" style={{ background: "rgba(25,81,85,0.3)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>المرحلة الأولى: السوق السعودي فقط</span>
                </div>
                <div className="flex items-center gap-[1vw]">
                  <div className="w-[1.2vw] h-[1.2vw] rounded-sm flex-shrink-0" style={{ background: "rgba(25,81,85,0.3)" }} />
                  <span className="text-[1.2vw] font-light" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>فئة الأزياء والمنسوجات حصرًا (Y1)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[2vh]">
            <div className="text-[1.1vw] font-semibold mb-[0.5vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
              ASSUMPTIONS — الافتراضات
            </div>

            <div className="flex flex-col gap-[1.5vh]">
              <div className="flex items-start gap-[1.5vw] p-[1.8vw] rounded-xl" style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="w-[2px] self-stretch" style={{ background: "#c9a84c" }} />
                <div>
                  <div className="font-semibold text-[1.3vw]" style={{ color: "#8a6030", fontFamily: "Cairo" }}>الموردون جاهزون للتحول الرقمي</div>
                  <div className="text-[1.15vw] font-light" style={{ color: "#6a5030", fontFamily: "Cairo" }}>لديهم قدرة على استخدام لوحة تحكم رقمية</div>
                </div>
              </div>

              <div className="flex items-start gap-[1.5vw] p-[1.8vw] rounded-xl" style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="w-[2px] self-stretch" style={{ background: "#c9a84c" }} />
                <div>
                  <div className="font-semibold text-[1.3vw]" style={{ color: "#8a6030", fontFamily: "Cairo" }}>البنية اللوجستية متاحة</div>
                  <div className="text-[1.15vw] font-light" style={{ color: "#6a5030", fontFamily: "Cairo" }}>شركات شحن موثوقة تغطي المملكة</div>
                </div>
              </div>

              <div className="flex items-start gap-[1.5vw] p-[1.8vw] rounded-xl" style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="w-[2px] self-stretch" style={{ background: "#c9a84c" }} />
                <div>
                  <div className="font-semibold text-[1.3vw]" style={{ color: "#8a6030", fontFamily: "Cairo" }}>الطلب الاستهلاكي موجود</div>
                  <div className="text-[1.15vw] font-light" style={{ color: "#6a5030", fontFamily: "Cairo" }}>شريحة واسعة تبحث عن منتجات بسعر أقل</div>
                </div>
              </div>

              <div className="flex items-start gap-[1.5vw] p-[1.8vw] rounded-xl" style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.15)" }}>
                <div className="w-[2px] self-stretch" style={{ background: "#c9a84c" }} />
                <div>
                  <div className="font-semibold text-[1.3vw]" style={{ color: "#8a6030", fontFamily: "Cairo" }}>لا منافس مباشر منظم</div>
                  <div className="text-[1.15vw] font-light" style={{ color: "#6a5030", fontFamily: "Cairo" }}>السوق خال من منصات Deadstock متخصصة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

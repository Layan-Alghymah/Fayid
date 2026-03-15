export default function RoadmapSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f2ee" }}>
      <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: "linear-gradient(90deg, #195155, #0F3D4F, #c9a84c, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-[3px]" style={{ background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.3), transparent)" }} />

      <div className="absolute inset-0 px-[7vw] pt-[7vh] pb-[5vh] flex flex-col">
        <div className="mb-[3vh]">
          <div className="text-[1vw] tracking-[0.2em] font-medium uppercase mb-[1vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
            NON-FUNCTIONAL REQUIREMENTS · §7
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#0F3D4F", fontFamily: "Cairo" }}>
            المتطلبات غير الوظيفية
          </h2>
        </div>

        <div className="flex gap-[2.5vw] flex-1">
          <div className="flex-1 flex flex-col gap-[1.8vh]">
            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(25,81,85,0.07)", border: "1px solid rgba(25,81,85,0.12)" }}>
              <div className="flex items-center gap-[1.5vw] mb-[1vh]">
                <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold" style={{ background: "#195155", color: "#f5f2ee", fontFamily: "IBM Plex Sans" }}>NFR-01</div>
                <div className="font-bold text-[1.4vw]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>الأداء والتوافر</div>
              </div>
              <p className="text-[1.25vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>
                Uptime 99.9٪ · زمن استجابة أقل من ٢ ثانية · استيعاب ١٠٠٠ مستخدم متزامن
              </p>
            </div>

            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(25,81,85,0.07)", border: "1px solid rgba(25,81,85,0.12)" }}>
              <div className="flex items-center gap-[1.5vw] mb-[1vh]">
                <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold" style={{ background: "#195155", color: "#f5f2ee", fontFamily: "IBM Plex Sans" }}>NFR-02</div>
                <div className="font-bold text-[1.4vw]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>الأمان والامتثال</div>
              </div>
              <p className="text-[1.25vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>
                تشفير SSL/TLS · امتثال PCI-DSS للمدفوعات · حماية بيانات المستخدمين وفق اللوائح السعودية
              </p>
            </div>

            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(25,81,85,0.07)", border: "1px solid rgba(25,81,85,0.12)" }}>
              <div className="flex items-center gap-[1.5vw] mb-[1vh]">
                <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold" style={{ background: "#195155", color: "#f5f2ee", fontFamily: "IBM Plex Sans" }}>NFR-03</div>
                <div className="font-bold text-[1.4vw]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>قابلية التوسع</div>
              </div>
              <p className="text-[1.25vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>
                معمارية سحابية مرنة تستوعب نمو الموردين والمنتجات والمستخدمين
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[1.8vh]">
            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(25,81,85,0.07)", border: "1px solid rgba(25,81,85,0.12)" }}>
              <div className="flex items-center gap-[1.5vw] mb-[1vh]">
                <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold" style={{ background: "#c9a84c", color: "#0F3D4F", fontFamily: "IBM Plex Sans" }}>NFR-04</div>
                <div className="font-bold text-[1.4vw]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>تجربة المستخدم</div>
              </div>
              <p className="text-[1.25vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>
                واجهة عربية RTL كاملة · متوافق مع الجوال Mobile-First · تصميم سهل الاستخدام
              </p>
            </div>

            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(25,81,85,0.07)", border: "1px solid rgba(25,81,85,0.12)" }}>
              <div className="flex items-center gap-[1.5vw] mb-[1vh]">
                <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold" style={{ background: "#c9a84c", color: "#0F3D4F", fontFamily: "IBM Plex Sans" }}>NFR-05</div>
                <div className="font-bold text-[1.4vw]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>الموثوقية والصيانة</div>
              </div>
              <p className="text-[1.25vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>
                نسخ احتياطية يومية · نظام مراقبة لحظي · دعم فني ٢٤/٧ عند الإطلاق
              </p>
            </div>

            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(25,81,85,0.07)", border: "1px solid rgba(25,81,85,0.12)" }}>
              <div className="flex items-center gap-[1.5vw] mb-[1vh]">
                <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold" style={{ background: "#c9a84c", color: "#0F3D4F", fontFamily: "IBM Plex Sans" }}>NFR-06</div>
                <div className="font-bold text-[1.4vw]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>التكامل</div>
              </div>
              <p className="text-[1.25vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>
                API مفتوح للتكامل مع أنظمة ERP للموردين وشركاء الشحن وبوابات الدفع
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

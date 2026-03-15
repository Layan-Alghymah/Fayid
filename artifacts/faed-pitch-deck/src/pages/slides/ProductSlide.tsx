export default function ProductSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #0F3D4F 0%, #195155 100%)" }}>
      <div className="absolute top-0 left-0 w-full h-full" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />

      <div className="absolute inset-0 px-[7vw] py-[7vh] flex flex-col">
        <div className="mb-[3vh]">
          <div className="text-[1.1vw] tracking-[0.2em] font-light uppercase mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
            PRODUCT FEATURES
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#f5f2ee", fontFamily: "Cairo" }}>
            المنصة — الميزات الجوهرية
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-[2vw] flex-1">
          <div className="rounded-xl p-[2.5vw] flex flex-col gap-[1.5vh]" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.1)" }}>
            <div className="font-bold text-[1.6vw]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>
              🏪 لوحة تحكم الموردين
            </div>
            <p className="text-[1.3vw] font-light leading-relaxed" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>
              رفع المنتجات بسهولة، تحديد الكميات والأسعار، تتبع الطلبات والمدفوعات بشكل آلي
            </p>
          </div>

          <div className="rounded-xl p-[2.5vw] flex flex-col gap-[1.5vh]" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div className="font-bold text-[1.6vw]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>
              🛒 تجربة المستهلك
            </div>
            <p className="text-[1.3vw] font-light leading-relaxed" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>
              تصفح ذكي، فلترة متقدمة، دفع آمن، وتتبع الطلبات من المنبع للباب
            </p>
          </div>

          <div className="rounded-xl p-[2.5vw] flex flex-col gap-[1.5vh]" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.1)" }}>
            <div className="font-bold text-[1.6vw]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>
              📊 محرك التوصيات
            </div>
            <p className="text-[1.3vw] font-light leading-relaxed" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>
              خوارزمية تعرض الفائض الصحيح للمستهلك الصحيح — تسريع التصريف وزيادة التحويل
            </p>
          </div>

          <div className="rounded-xl p-[2.5vw] flex flex-col gap-[1.5vh]" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.1)" }}>
            <div className="font-bold text-[1.6vw]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>
              🔒 بوابة الدفع والعمولة
            </div>
            <p className="text-[1.3vw] font-light leading-relaxed" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>
              تحصيل آمن، تحويل تلقائي للموردين، خصم العمولة بشفافية كاملة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

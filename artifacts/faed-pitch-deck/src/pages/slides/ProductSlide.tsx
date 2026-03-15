export default function ProductSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(140deg, #0F3D4F 0%, #195155 100%)" }}>
      <div className="absolute top-0 left-0 w-full h-full" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 60%)" }} />

      <div className="absolute inset-0 px-[7vw] py-[7vh] flex flex-col">
        <div className="mb-[3.5vh]">
          <div className="text-[1vw] tracking-[0.2em] font-light uppercase mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
            FUNCTIONAL REQUIREMENTS · §6
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#f5f2ee", fontFamily: "Cairo" }}>
            المتطلبات الوظيفية — تجربة المستهلك
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-[2vw] flex-1">
          <div className="rounded-xl p-[2.5vw] flex flex-col gap-[1.2vh]" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.1)" }}>
            <div className="flex items-center gap-[1vw]">
              <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontFamily: "IBM Plex Sans" }}>FR-05</div>
            </div>
            <div className="font-bold text-[1.5vw]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>
              التصفح والبحث
            </div>
            <p className="text-[1.3vw] font-light leading-relaxed" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>
              فلترة متقدمة بالفئة والسعر والعلامة التجارية والكمية المتاحة مع خوارزمية توصيات
            </p>
          </div>

          <div className="rounded-xl p-[2.5vw] flex flex-col gap-[1.2vh]" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <div className="flex items-center gap-[1vw]">
              <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontFamily: "IBM Plex Sans" }}>FR-06</div>
            </div>
            <div className="font-bold text-[1.5vw]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>
              عملية الشراء والدفع
            </div>
            <p className="text-[1.3vw] font-light leading-relaxed" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>
              سلة تسوق، تحقق من التوافر اللحظي، بوابة دفع آمنة (بطاقة، مدى، Apple Pay)
            </p>
          </div>

          <div className="rounded-xl p-[2.5vw] flex flex-col gap-[1.2vh]" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.1)" }}>
            <div className="flex items-center gap-[1vw]">
              <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontFamily: "IBM Plex Sans" }}>FR-07</div>
            </div>
            <div className="font-bold text-[1.5vw]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>
              تتبع الطلبات
            </div>
            <p className="text-[1.3vw] font-light leading-relaxed" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>
              إشعارات لحظية بحالة الطلب، تتبع الشحن من المورد حتى التسليم
            </p>
          </div>

          <div className="rounded-xl p-[2.5vw] flex flex-col gap-[1.2vh]" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.1)" }}>
            <div className="flex items-center gap-[1vw]">
              <div className="rounded px-[1vw] py-[0.4vh] text-[1vw] font-bold" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontFamily: "IBM Plex Sans" }}>FR-08</div>
            </div>
            <div className="font-bold text-[1.5vw]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>
              التقييم والمراجعة
            </div>
            <p className="text-[1.3vw] font-light leading-relaxed" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>
              نظام تقييم موثوق للموردين والمنتجات لدعم قرار الشراء وبناء الثقة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

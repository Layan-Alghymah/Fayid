export default function ProblemSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f2ee" }}>
      <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: "linear-gradient(90deg, #195155, #0F3D4F)" }} />
      <div className="absolute top-0 right-0 w-[38vw] h-full" style={{ background: "linear-gradient(135deg, #195155 0%, #0F3D4F 100%)" }} />

      <div className="absolute right-0 top-0 w-[38vw] h-full flex flex-col justify-center px-[4vw] gap-[2.5vh]">
        <div className="text-[1vw] tracking-[0.2em] font-light uppercase mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
          BUSINESS PROBLEM
        </div>

        <div className="flex items-start gap-[1.5vw]">
          <div className="w-[2vw] h-[2vw] flex-shrink-0 flex items-center justify-center text-[1.1vw] font-bold rounded-sm" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontFamily: "Cairo" }}>
            ١
          </div>
          <p className="text-[1.4vw] leading-relaxed font-light" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>
            تجميد السيولة داخل المخزون الراكد
          </p>
        </div>

        <div className="flex items-start gap-[1.5vw]">
          <div className="w-[2vw] h-[2vw] flex-shrink-0 flex items-center justify-center text-[1.1vw] font-bold rounded-sm" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontFamily: "Cairo" }}>
            ٢
          </div>
          <p className="text-[1.4vw] leading-relaxed font-light" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>
            ارتفاع تكاليف التخزين المتراكمة
          </p>
        </div>

        <div className="flex items-start gap-[1.5vw]">
          <div className="w-[2vw] h-[2vw] flex-shrink-0 flex items-center justify-center text-[1.1vw] font-bold rounded-sm" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontFamily: "Cairo" }}>
            ٣
          </div>
          <p className="text-[1.4vw] leading-relaxed font-light" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>
            تصفية عبر قنوات غير منظمة بخسائر
          </p>
        </div>

        <div className="flex items-start gap-[1.5vw]">
          <div className="w-[2vw] h-[2vw] flex-shrink-0 flex items-center justify-center text-[1.1vw] font-bold rounded-sm" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontFamily: "Cairo" }}>
            ٤
          </div>
          <p className="text-[1.4vw] leading-relaxed font-light" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>
            غياب منصة رقمية متخصصة ومنظمة
          </p>
        </div>
      </div>

      <div className="absolute left-[7vw] top-0 w-[54vw] h-full flex flex-col justify-center pr-[4vw]">
        <div className="text-[1vw] tracking-[0.2em] font-medium uppercase mb-[1.5vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
          المشكلة التجارية — §2
        </div>
        <h2 className="font-black leading-tight mb-[2.5vh]" style={{ fontSize: "3.8vw", color: "#0F3D4F", fontFamily: "Cairo" }}>
          تحديات قطاع الأزياء والمنسوجات
        </h2>

        <p className="text-[1.6vw] leading-relaxed mb-[3vh]" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>
          تنتج شركات الأزياء كميات تفوق الطلب المتوقع، مما يُولّد فوائض موسمية غير منظمة تُثقل الميزانيات وتُهدر الموارد.
        </p>

        <div className="p-[2vw] rounded-xl" style={{ background: "rgba(25,81,85,0.07)", border: "1px solid rgba(25,81,85,0.12)" }}>
          <div className="text-[1.2vw] font-semibold mb-[1vh]" style={{ color: "#195155", fontFamily: "Cairo" }}>
            الفجوة في السوق
          </div>
          <p className="text-[1.3vw] font-light leading-relaxed" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>
            يبحث المستهلك عن منتجات أصلية بأسعار أقل، لكن لا توجد منصة رقمية منظمة ومتخصصة تربطه مباشرة بهذا النوع من المخزون.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ProblemSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f2ee" }}>
      <div className="absolute top-0 left-0 w-[6px] h-full" style={{ background: "linear-gradient(180deg, #195155, #0F3D4F)" }} />
      <div className="absolute top-0 right-0 w-[38vw] h-full" style={{ background: "linear-gradient(135deg, #195155 0%, #0F3D4F 100%)" }} />

      <div className="absolute right-0 top-0 w-[38vw] h-full flex flex-col justify-center px-[4vw] gap-[3vh]">
        <div className="text-[1.2vw] tracking-[0.2em] font-light uppercase mb-[1vh]" style={{ color: "rgba(201,168,76,0.8)", fontFamily: "IBM Plex Sans" }}>
          THE PROBLEM
        </div>

        <div className="flex items-start gap-[1.5vw]">
          <div className="w-[2.5vw] h-[2.5vw] flex-shrink-0 flex items-center justify-center rounded-sm text-[1.2vw] font-bold" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontFamily: "Cairo" }}>
            ١
          </div>
          <p className="text-[1.5vw] leading-relaxed" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>
            تجميد السيولة داخل المخزون الراكد
          </p>
        </div>

        <div className="flex items-start gap-[1.5vw]">
          <div className="w-[2.5vw] h-[2.5vw] flex-shrink-0 flex items-center justify-center rounded-sm text-[1.2vw] font-bold" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontFamily: "Cairo" }}>
            ٢
          </div>
          <p className="text-[1.5vw] leading-relaxed" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>
            ارتفاع تكاليف التخزين المتراكمة
          </p>
        </div>

        <div className="flex items-start gap-[1.5vw]">
          <div className="w-[2.5vw] h-[2.5vw] flex-shrink-0 flex items-center justify-center rounded-sm text-[1.2vw] font-bold" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontFamily: "Cairo" }}>
            ٣
          </div>
          <p className="text-[1.5vw] leading-relaxed" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>
            تصفية عبر قنوات غير منظمة بخسائر
          </p>
        </div>

        <div className="flex items-start gap-[1.5vw]">
          <div className="w-[2.5vw] h-[2.5vw] flex-shrink-0 flex items-center justify-center rounded-sm text-[1.2vw] font-bold" style={{ background: "rgba(201,168,76,0.15)", color: "#c9a84c", fontFamily: "Cairo" }}>
            ٤
          </div>
          <p className="text-[1.5vw] leading-relaxed" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>
            إتلاف منتجات قابلة للاستخدام
          </p>
        </div>
      </div>

      <div className="absolute left-[6vw] top-0 w-[54vw] h-full flex flex-col justify-center pr-[4vw]">
        <div className="text-[1.1vw] tracking-[0.2em] font-medium uppercase mb-[2vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
          المشكلة
        </div>
        <h2 className="font-black leading-tight tracking-tight mb-[3vh]" style={{ fontSize: "4.5vw", color: "#0F3D4F", fontFamily: "Cairo" }}>
          الفوائض تُكبّد القطاع خسائر فادحة
        </h2>

        <p className="text-[1.7vw] leading-relaxed mb-[4vh]" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>
          في قطاع الأزياء، تنتج الشركات كميات أكبر من الطلب المتوقع أو يتبقى لديها مخزون من مواسم سابقة — وهذا الفائض يتراكم دون حل منظم.
        </p>

        <div className="flex items-center gap-[3vw]">
          <div className="text-center">
            <div className="font-black" style={{ fontSize: "5vw", color: "#195155", fontFamily: "Cairo" }}>٣٠٪</div>
            <div className="text-[1.2vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>من المخزون لا يُباع</div>
          </div>
          <div className="w-[1px] h-[8vh]" style={{ background: "rgba(25,81,85,0.2)" }} />
          <div className="text-center">
            <div className="font-black" style={{ fontSize: "5vw", color: "#195155", fontFamily: "Cairo" }}>صفر</div>
            <div className="text-[1.2vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>منصات رقمية منظمة</div>
          </div>
        </div>
      </div>
    </div>
  );
}

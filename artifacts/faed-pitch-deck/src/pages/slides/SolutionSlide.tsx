export default function SolutionSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(160deg, #0F3D4F 0%, #195155 60%, #1a5c62 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 95% 5%, rgba(201,168,76,0.1) 0%, transparent 50%)" }} />

      <div className="absolute top-[8vh] left-[7vw] right-[7vw] flex items-center justify-between">
        <div>
          <div className="text-[1.1vw] tracking-[0.2em] font-light uppercase mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
            SOLUTION
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "4vw", color: "#f5f2ee", fontFamily: "Cairo" }}>
            الحل: منصة فائض
          </h2>
        </div>
        <div className="text-[4vw] font-black" style={{ color: "rgba(201,168,76,0.2)", fontFamily: "Cairo" }}>
          فائض
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-[7vw] pt-[20vh] pb-[8vh]">
        <div className="w-full grid grid-cols-3 gap-[2.5vw]">
          <div className="rounded-lg p-[2.5vw]" style={{ background: "rgba(245,242,238,0.06)", border: "1px solid rgba(245,242,238,0.1)" }}>
            <div className="text-[2.8vw] mb-[1.5vh]">⚡</div>
            <h3 className="font-bold text-[1.7vw] mb-[1.2vh]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>
              للموردين
            </h3>
            <p className="text-[1.4vw] leading-relaxed font-light" style={{ color: "rgba(212,234,236,0.8)", fontFamily: "Cairo" }}>
              عرض المخزون بسرعة والوصول لعملاء جدد — تحويل الراكد إلى سيولة فورية
            </p>
          </div>

          <div className="rounded-lg p-[2.5vw]" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}>
            <div className="text-[2.8vw] mb-[1.5vh]">🛍</div>
            <h3 className="font-bold text-[1.7vw] mb-[1.2vh]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>
              للمستهلكين
            </h3>
            <p className="text-[1.4vw] leading-relaxed font-light" style={{ color: "rgba(212,234,236,0.8)", fontFamily: "Cairo" }}>
              منتجات أصلية بأسعار أقل — تجربة موثوقة وشفافة وعروض محدودة الكمية
            </p>
          </div>

          <div className="rounded-lg p-[2.5vw]" style={{ background: "rgba(245,242,238,0.06)", border: "1px solid rgba(245,242,238,0.1)" }}>
            <div className="text-[2.8vw] mb-[1.5vh]">♻️</div>
            <h3 className="font-bold text-[1.7vw] mb-[1.2vh]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>
              للبيئة
            </h3>
            <p className="text-[1.4vw] leading-relaxed font-light" style={{ color: "rgba(212,234,236,0.8)", fontFamily: "Cairo" }}>
              الاقتصاد الدائري — تقليل الهدر وإعادة توظيف الفائض بدلاً من إتلافه
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[6vh] left-[7vw] right-[7vw]">
        <div className="w-full h-[1px] mb-[2vh]" style={{ background: "rgba(201,168,76,0.2)" }} />
        <p className="text-[1.5vw] font-light text-center" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "Cairo" }}>
          Asset-Light Marketplace · بدون تكاليف شراء أو تخزين · عمولة عند كل بيع فقط
        </p>
      </div>
    </div>
  );
}

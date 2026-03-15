export default function SolutionSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(160deg, #0F3D4F 0%, #195155 70%, #1a5c62 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 95% 5%, rgba(201,168,76,0.08) 0%, transparent 50%)" }} />

      <div className="absolute inset-0 px-[7vw] py-[7vh] flex flex-col">
        <div className="mb-[3.5vh]">
          <div className="text-[1vw] tracking-[0.2em] font-light uppercase mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
            EXECUTIVE SUMMARY · §1
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#f5f2ee", fontFamily: "Cairo" }}>
            نظرة عامة على المنصة
          </h2>
        </div>

        <div className="flex gap-[3vw] flex-1">
          <div className="flex-1 flex flex-col gap-[2vh]">
            <div className="rounded-xl p-[2.5vw]" style={{ background: "rgba(245,242,238,0.06)", border: "1px solid rgba(245,242,238,0.1)" }}>
              <div className="text-[1.2vw] tracking-widest uppercase font-light mb-[1.5vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>
                Product Name
              </div>
              <div className="font-black text-[2.5vw]" style={{ color: "#f5f2ee", fontFamily: "Cairo", lineHeight: 1 }}>
                منصة فائض
              </div>
              <div className="text-[1.3vw] font-light mt-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "Cairo" }}>
                Digital Marketplace · Asset-Light
              </div>
            </div>

            <div className="rounded-xl p-[2vw]" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
              <div className="text-[1.1vw] font-semibold mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
                INDUSTRY
              </div>
              <p className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>
                الأزياء والمنسوجات — التجارة الإلكترونية — المملكة العربية السعودية
              </p>
            </div>

            <div className="rounded-xl p-[2vw]" style={{ background: "rgba(245,242,238,0.05)", border: "1px solid rgba(245,242,238,0.08)" }}>
              <div className="text-[1.1vw] font-semibold mb-[1vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
                BUSINESS MODEL
              </div>
              <p className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>
                Commission-Based · ١٠٪ عمولة من كل عملية بيع
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-[2vh]">
            <div className="text-[1.1vw] tracking-widest uppercase font-light mb-[0.5vh]" style={{ color: "rgba(201,168,76,0.5)", fontFamily: "IBM Plex Sans" }}>
              OVERVIEW
            </div>
            <p className="text-[1.5vw] leading-relaxed font-light" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>
              فائض منصة رقمية سعودية متخصصة في تصريف فوائض قطاع الأزياء والمنسوجات (Deadstock).
            </p>
            <p className="text-[1.4vw] leading-relaxed font-light" style={{ color: "rgba(212,234,236,0.7)", fontFamily: "Cairo" }}>
              تربط المنصة بين المصانع والعلامات التجارية التي تمتلك مخزونًا راكدًا وبين المستهلك النهائي مباشرة، دون أن تتحمل المنصة تكاليف شراء أو تخزين.
            </p>

            <div className="mt-[1vh] p-[2vw] rounded-xl" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <div className="text-[1.1vw] font-semibold mb-[1vh]" style={{ color: "#c9a84c", fontFamily: "IBM Plex Sans" }}>
                VALUE PROPOSITION
              </div>
              <p className="text-[1.3vw] font-light leading-relaxed" style={{ color: "rgba(212,234,236,0.8)", fontFamily: "Cairo" }}>
                تحويل المخزون الراكد إلى سيولة فورية للموردين، ومنتجات أصلية بأسعار أقل للمستهلكين، مع دعم الاقتصاد الدائري.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

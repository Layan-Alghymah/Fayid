export default function MarketSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f2ee" }}>
      <div className="absolute bottom-0 right-0 w-[45vw] h-[45vh]" style={{ background: "radial-gradient(ellipse at bottom right, rgba(25,81,85,0.07) 0%, transparent 70%)" }} />
      <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: "linear-gradient(90deg, #195155, #0F3D4F, #c9a84c)" }} />

      <div className="absolute inset-0 flex flex-col px-[7vw] pt-[7vh] pb-[6vh]">
        <div className="mb-[3vh]">
          <div className="text-[1.1vw] tracking-[0.2em] font-medium uppercase mb-[1vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
            MARKET OPPORTUNITY
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#0F3D4F", fontFamily: "Cairo" }}>
            فرصة السوق
          </h2>
        </div>

        <div className="flex gap-[3vw] flex-1">
          <div className="flex-1 flex flex-col gap-[2vh]">
            <p className="text-[1.6vw] leading-relaxed" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>
              قطاع الأزياء الإلكترونية في السعودية يشهد نموًا متسارعًا، وسوق تصفية الفوائض فرصة غير مستغلة رقميًا.
            </p>

            <div className="flex flex-col gap-[1.5vh]">
              <div className="flex items-center gap-[1.5vw] p-[1.5vw] rounded-lg" style={{ background: "rgba(25,81,85,0.06)", border: "1px solid rgba(25,81,85,0.1)" }}>
                <div className="w-[1.5vw] h-[1.5vw] rounded-full flex-shrink-0" style={{ background: "#195155" }} />
                <p className="text-[1.4vw]" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>ارتفاع التجارة الإلكترونية في المملكة</p>
              </div>
              <div className="flex items-center gap-[1.5vw] p-[1.5vw] rounded-lg" style={{ background: "rgba(25,81,85,0.06)", border: "1px solid rgba(25,81,85,0.1)" }}>
                <div className="w-[1.5vw] h-[1.5vw] rounded-full flex-shrink-0" style={{ background: "#195155" }} />
                <p className="text-[1.4vw]" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>زيادة عدد المتسوقين الرقميين</p>
              </div>
              <div className="flex items-center gap-[1.5vw] p-[1.5vw] rounded-lg" style={{ background: "rgba(25,81,85,0.06)", border: "1px solid rgba(25,81,85,0.1)" }}>
                <div className="w-[1.5vw] h-[1.5vw] rounded-full flex-shrink-0" style={{ background: "#195155" }} />
                <p className="text-[1.4vw]" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>انتشار منصات الدفع والشحن</p>
              </div>
            </div>
          </div>

          <div className="w-[38vw] flex flex-col gap-[2vh]">
            <div className="flex-1 rounded-xl flex flex-col items-center justify-center" style={{ background: "linear-gradient(135deg, #195155, #0F3D4F)", border: "1px solid rgba(201,168,76,0.2)" }}>
              <div className="text-[1.1vw] tracking-widest uppercase mb-[1vh] font-light" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
                TAM — السوق الإجمالي
              </div>
              <div className="font-black" style={{ fontSize: "7vw", color: "#f5f2ee", fontFamily: "Cairo", lineHeight: 1 }}>
                $٢B+
              </div>
              <div className="text-[1.3vw] mt-[1vh] font-light" style={{ color: "rgba(212,234,236,0.6)", fontFamily: "Cairo" }}>
                أزياء إلكتروني — السعودية 2026
              </div>
            </div>

            <div className="flex gap-[2vh]">
              <div className="flex-1 rounded-xl p-[1.5vw] flex flex-col items-center justify-center" style={{ background: "rgba(25,81,85,0.08)", border: "1px solid rgba(25,81,85,0.15)" }}>
                <div className="font-black text-[3.5vw]" style={{ color: "#195155", fontFamily: "Cairo", lineHeight: 1 }}>SAM</div>
                <div className="text-[1.1vw] text-center font-light mt-[0.5vh]" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>سوق الفوائض</div>
              </div>
              <div className="flex-1 rounded-xl p-[1.5vw] flex flex-col items-center justify-center" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <div className="font-black text-[3.5vw]" style={{ color: "#c9a84c", fontFamily: "Cairo", lineHeight: 1 }}>SOM</div>
                <div className="text-[1.1vw] text-center font-light mt-[0.5vh]" style={{ color: "#8a7040", fontFamily: "Cairo" }}>المستهدف Y1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

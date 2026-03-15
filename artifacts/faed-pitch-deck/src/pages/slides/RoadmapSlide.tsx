export default function RoadmapSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f2ee" }}>
      <div className="absolute right-0 top-0 bottom-0 w-[3px]" style={{ background: "linear-gradient(180deg, transparent, #c9a84c 30%, #195155 70%, transparent)" }} />
      <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: "linear-gradient(90deg, #195155, #0F3D4F, #c9a84c, transparent)" }} />

      <div className="absolute inset-0 px-[7vw] py-[7vh] flex flex-col">
        <div className="mb-[4vh]">
          <div className="text-[1.1vw] tracking-[0.2em] font-medium uppercase mb-[1vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
            ROADMAP
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#0F3D4F", fontFamily: "Cairo" }}>
            خارطة الطريق
          </h2>
        </div>

        <div className="flex gap-[2vw] flex-1">
          <div className="flex-1 rounded-xl overflow-hidden" style={{ background: "linear-gradient(145deg, #0F3D4F, #195155)" }}>
            <div className="p-[2.5vw] h-full flex flex-col">
              <div className="text-[1vw] tracking-widest uppercase font-light mb-[1vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>PHASE 1</div>
              <div className="font-black text-[2vw] mb-[1.5vh]" style={{ color: "#c9a84c", fontFamily: "Cairo" }}>المرحلة الأولى</div>
              <div className="font-semibold text-[1.3vw] mb-[2vh]" style={{ color: "rgba(212,234,236,0.7)", fontFamily: "Cairo" }}>Q1–Q2 2026</div>
              <div className="flex flex-col gap-[1.2vh] flex-1">
                <div className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>• بناء المنصة الأساسية</div>
                <div className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>• تأهيل ١٠+ موردين مؤسسين</div>
                <div className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>• إطلاق بيتا مغلق</div>
                <div className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>• بوابة الدفع والشحن</div>
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-xl overflow-hidden" style={{ background: "rgba(25,81,85,0.06)", border: "2px solid rgba(25,81,85,0.15)" }}>
            <div className="p-[2.5vw] h-full flex flex-col">
              <div className="text-[1vw] tracking-widest uppercase font-light mb-[1vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>PHASE 2</div>
              <div className="font-black text-[2vw] mb-[1.5vh]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>المرحلة الثانية</div>
              <div className="font-semibold text-[1.3vw] mb-[2vh]" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>Q3–Q4 2026</div>
              <div className="flex flex-col gap-[1.2vh] flex-1">
                <div className="text-[1.3vw] font-light" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>• إطلاق عام وحملات تسويقية</div>
                <div className="text-[1.3vw] font-light" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>• ٥٠٠٠+ مستخدم نشط</div>
                <div className="text-[1.3vw] font-light" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>• محرك التوصيات الذكي</div>
                <div className="text-[1.3vw] font-light" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>• شراكات لوجستية</div>
              </div>
            </div>
          </div>

          <div className="flex-1 rounded-xl overflow-hidden" style={{ background: "rgba(201,168,76,0.05)", border: "2px solid rgba(201,168,76,0.15)" }}>
            <div className="p-[2.5vw] h-full flex flex-col">
              <div className="text-[1vw] tracking-widests uppercase font-light mb-[1vh]" style={{ color: "#c9a84c", fontFamily: "IBM Plex Sans" }}>PHASE 3</div>
              <div className="font-black text-[2vw] mb-[1.5vh]" style={{ color: "#8a6030", fontFamily: "Cairo" }}>المرحلة الثالثة</div>
              <div className="font-semibold text-[1.3vw] mb-[2vh]" style={{ color: "#8a7040", fontFamily: "Cairo" }}>2027+</div>
              <div className="flex flex-col gap-[1.2vh] flex-1">
                <div className="text-[1.3vw] font-light" style={{ color: "#6a5030", fontFamily: "Cairo" }}>• التوسع الخليجي</div>
                <div className="text-[1.3vw] font-light" style={{ color: "#6a5030", fontFamily: "Cairo" }}>• خطوط أعمال جديدة</div>
                <div className="text-[1.3vw] font-light" style={{ color: "#6a5030", fontFamily: "Cairo" }}>• فئات منتجات إضافية</div>
                <div className="text-[1.3vw] font-light" style={{ color: "#6a5030", fontFamily: "Cairo" }}>• شراكات مؤسسية</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

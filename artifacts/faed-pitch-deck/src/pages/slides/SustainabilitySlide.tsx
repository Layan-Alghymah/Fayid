export default function SustainabilitySlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f2ee" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(25,81,85,0.08) 0%, transparent 60%)" }} />
      <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: "linear-gradient(90deg, #195155, #c9a84c, #0F3D4F)" }} />
      <div className="absolute bottom-0 left-0 w-full h-[1px]" style={{ background: "rgba(25,81,85,0.15)" }} />

      <div className="absolute inset-0 px-[7vw] py-[7vh] flex flex-col">
        <div className="mb-[3vh]">
          <div className="text-[1.1vw] tracking-[0.2em] font-medium uppercase mb-[1vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
            SUSTAINABILITY · الاستدامة
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#0F3D4F", fontFamily: "Cairo" }}>
            الاقتصاد الدائري في قلب فائض
          </h2>
        </div>

        <div className="flex gap-[4vw] flex-1 items-stretch">
          <div className="flex-1 flex flex-col gap-[2vh]">
            <p className="text-[1.7vw] leading-relaxed" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>
              فائض ليست مجرد منصة بيع — هي حركة نحو اقتصاد أزياء أكثر ذكاءً ومسؤولية.
            </p>

            <div className="flex flex-col gap-[1.5vh]">
              <div className="p-[1.8vw] rounded-xl" style={{ background: "rgba(25,81,85,0.07)", border: "1px solid rgba(25,81,85,0.12)" }}>
                <div className="font-bold text-[1.5vw] mb-[0.8vh]" style={{ color: "#195155", fontFamily: "Cairo" }}>
                  ♻️ تقليل الهدر المادي
                </div>
                <p className="text-[1.3vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>
                  كل قطعة تُباع عبر فائض هي قطعة لم تُتلف
                </p>
              </div>

              <div className="p-[1.8vw] rounded-xl" style={{ background: "rgba(25,81,85,0.07)", border: "1px solid rgba(25,81,85,0.12)" }}>
                <div className="font-bold text-[1.5vw] mb-[0.8vh]" style={{ color: "#195155", fontFamily: "Cairo" }}>
                  💧 البصمة الكربونية الأقل
                </div>
                <p className="text-[1.3vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>
                  إعادة توجيه المنتج بدلاً من إنتاج بديل جديد
                </p>
              </div>

              <div className="p-[1.8vw] rounded-xl" style={{ background: "rgba(25,81,85,0.07)", border: "1px solid rgba(25,81,85,0.12)" }}>
                <div className="font-bold text-[1.5vw] mb-[0.8vh]" style={{ color: "#195155", fontFamily: "Cairo" }}>
                  🌱 الاستهلاك الواعي
                </div>
                <p className="text-[1.3vw] font-light" style={{ color: "#4a7a80", fontFamily: "Cairo" }}>
                  تعزيز ثقافة القيمة مقابل الإنفاق لدى جيل Z
                </p>
              </div>
            </div>
          </div>

          <div className="w-[38vw] flex flex-col justify-center items-center rounded-2xl" style={{ background: "linear-gradient(145deg, #195155, #0F3D4F)" }}>
            <div className="p-[4vw] text-center">
              <div className="text-[1.2vw] tracking-widest uppercase font-light mb-[2vh]" style={{ color: "rgba(201,168,76,0.7)", fontFamily: "IBM Plex Sans" }}>
                CIRCULAR ECONOMY
              </div>
              <div className="font-black mb-[1vh]" style={{ fontSize: "3.5vw", color: "#f5f2ee", fontFamily: "Cairo", lineHeight: 1 }}>
                الاقتصاد
              </div>
              <div className="font-black mb-[3vh]" style={{ fontSize: "3.5vw", color: "#c9a84c", fontFamily: "Cairo", lineHeight: 1 }}>
                الدائري
              </div>
              <div className="text-[1.4vw] font-light leading-relaxed" style={{ color: "rgba(212,234,236,0.75)", fontFamily: "Cairo" }}>
                البضائع الراكدة تتحول إلى سيولة وحركة اقتصادية مستمرة — هذه فلسفة شعار فائض
              </div>

              <div className="mt-[3vh] flex gap-[2vw] justify-center">
                <div className="text-center">
                  <div className="font-black text-[3vw]" style={{ color: "#c9a84c", fontFamily: "Cairo", lineHeight: 1 }}>↑</div>
                  <div className="text-[1.1vw] font-light mt-[0.5vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "Cairo" }}>قيمة</div>
                </div>
                <div className="text-center">
                  <div className="font-black text-[3vw]" style={{ color: "#c9a84c", fontFamily: "Cairo", lineHeight: 1 }}>↓</div>
                  <div className="text-[1.1vw] font-light mt-[0.5vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "Cairo" }}>هدر</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

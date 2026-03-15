export default function MarketSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "#f5f2ee" }}>
      <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: "linear-gradient(90deg, #195155, #c9a84c, #0F3D4F)" }} />
      <div className="absolute bottom-0 right-0 w-[45vw] h-[35vh]" style={{ background: "radial-gradient(ellipse at bottom right, rgba(25,81,85,0.06) 0%, transparent 70%)" }} />

      <div className="absolute inset-0 px-[7vw] pt-[7vh] pb-[5vh] flex flex-col">
        <div className="mb-[3vh]">
          <div className="text-[1vw] tracking-[0.2em] font-medium uppercase mb-[1vh]" style={{ color: "#195155", fontFamily: "IBM Plex Sans" }}>
            الأهداف التجارية — §3
          </div>
          <h2 className="font-black leading-tight" style={{ fontSize: "3.8vw", color: "#0F3D4F", fontFamily: "Cairo" }}>
            أهداف المنصة وغايتها
          </h2>
        </div>

        <div className="flex gap-[3vw] flex-1">
          <div className="flex-1 flex flex-col gap-[2vh]">
            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(25,81,85,0.06)", border: "1px solid rgba(25,81,85,0.12)" }}>
              <div className="flex items-start gap-[1.5vw]">
                <div className="w-[3px] h-full self-stretch rounded-full" style={{ background: "#195155" }} />
                <div>
                  <div className="font-bold text-[1.4vw] mb-[0.7vh]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>للموردين</div>
                  <p className="text-[1.3vw] font-light leading-relaxed" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>
                    تصريف المخزون الراكد بسرعة، تقليل خسائر التخزين، الوصول لعملاء جدد، تحويل المخزون إلى سيولة
                  </p>
                </div>
              </div>
            </div>

            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(25,81,85,0.06)", border: "1px solid rgba(25,81,85,0.12)" }}>
              <div className="flex items-start gap-[1.5vw]">
                <div className="w-[3px] h-full self-stretch rounded-full" style={{ background: "#c9a84c" }} />
                <div>
                  <div className="font-bold text-[1.4vw] mb-[0.7vh]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>للمستهلكين</div>
                  <p className="text-[1.3vw] font-light leading-relaxed" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>
                    الوصول لمنتجات أصلية بأسعار أقل، تجربة شراء موثوقة وشفافة، اكتشاف عروض محدودة الكمية
                  </p>
                </div>
              </div>
            </div>

            <div className="p-[2vw] rounded-xl" style={{ background: "rgba(25,81,85,0.06)", border: "1px solid rgba(25,81,85,0.12)" }}>
              <div className="flex items-start gap-[1.5vw]">
                <div className="w-[3px] h-full self-stretch rounded-full" style={{ background: "rgba(25,81,85,0.4)" }} />
                <div>
                  <div className="font-bold text-[1.4vw] mb-[0.7vh]" style={{ color: "#0F3D4F", fontFamily: "Cairo" }}>للمنصة</div>
                  <p className="text-[1.3vw] font-light leading-relaxed" style={{ color: "#2a4a50", fontFamily: "Cairo" }}>
                    تحقيق إيراد مستدام من العمولة، بناء قاعدة موردين ومستهلكين، دعم الاستدامة البيئية
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[34vw] flex flex-col gap-[2vh]">
            <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(145deg, #0F3D4F, #195155)", flex: 1 }}>
              <div className="p-[2.5vw] h-full flex flex-col justify-between">
                <div className="text-[1vw] tracking-widets uppercase font-light mb-[2vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>
                  النطاق — IN SCOPE
                </div>
                <div className="flex flex-col gap-[1.3vh]">
                  <div className="flex items-center gap-[1vw]">
                    <div className="w-[1.2vw] h-[1.2vw] rounded-full flex-shrink-0" style={{ background: "#c9a84c" }} />
                    <span className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>سوق الأزياء والمنسوجات</span>
                  </div>
                  <div className="flex items-center gap-[1vw]">
                    <div className="w-[1.2vw] h-[1.2vw] rounded-full flex-shrink-0" style={{ background: "#c9a84c" }} />
                    <span className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>الموردون السعوديون والمحليون</span>
                  </div>
                  <div className="flex items-center gap-[1vw]">
                    <div className="w-[1.2vw] h-[1.2vw] rounded-full flex-shrink-0" style={{ background: "#c9a84c" }} />
                    <span className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>المستهلك النهائي ١٨–٣٥ سنة</span>
                  </div>
                  <div className="flex items-center gap-[1vw]">
                    <div className="w-[1.2vw] h-[1.2vw] rounded-full flex-shrink-0" style={{ background: "#c9a84c" }} />
                    <span className="text-[1.3vw] font-light" style={{ color: "rgba(212,234,236,0.85)", fontFamily: "Cairo" }}>نموذج Marketplace خفيف الأصول</span>
                  </div>
                </div>

                <div className="mt-[2vh] pt-[2vh]" style={{ borderTop: "1px solid rgba(245,242,238,0.1)" }}>
                  <div className="text-[1vw] font-semibold mb-[1vh]" style={{ color: "rgba(201,168,76,0.6)", fontFamily: "IBM Plex Sans" }}>
                    OUT OF SCOPE
                  </div>
                  <p className="text-[1.2vw] font-light" style={{ color: "rgba(212,234,236,0.5)", fontFamily: "Cairo" }}>
                    شراء أو تخزين المنتجات · التصنيع المباشر · الشحن الداخلي
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

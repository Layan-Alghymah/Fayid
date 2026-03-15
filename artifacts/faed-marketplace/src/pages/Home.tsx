import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Box, CheckCircle, Percent, Recycle, Zap } from "lucide-react";
import { useListProducts } from "@workspace/api-client-react";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const { data: featuredData, isLoading } = useListProducts({ limit: 8 });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-80 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-background/90 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 animate-in" style={{ animationDelay: '0ms' }}>
              <Zap className="w-4 h-4" />
              <span>المنصة الأولى لفائض الأزياء في السعودية</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-[1.1] mb-6 animate-in" style={{ animationDelay: '100ms' }}>
              تسوق بذكاء، <br/>
              <span className="text-gradient-gold">وقلل الهدر.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg animate-in" style={{ animationDelay: '200ms' }}>
              نربطك بمخزون المصانع والعلامات التجارية الكبرى من الأقمشة والملابس الجاهزة بأسعار تنافسية وجودة عالية.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-in" style={{ animationDelay: '300ms' }}>
              <Link href="/products">
                <Button size="lg" className="w-full sm:w-auto text-lg group">
                  تصفح المنتجات
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/register?role=supplier">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg bg-black/20 backdrop-blur-sm">
                  انضم كمورد
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Percent className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">خصومات تصل لـ 70%</h3>
              <p className="text-muted-foreground">أسعار حصرية على الفائض من المصانع والمتاجر الكبرى بجودة أصلية.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Recycle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">تعزيز الاستدامة</h3>
              <p className="text-muted-foreground">ساهم في تقليل الهدر في قطاع النسيج من خلال تدوير المخزون الراكد.</p>
            </div>
            <div className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">جودة مضمونة</h3>
              <p className="text-muted-foreground">جميع الموردين معتمدين لضمان حصولك على أفضل الخامات والمنتجات.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">تسوق حسب القسم</h2>
              <p className="text-muted-foreground">اكتشف الفئات المتاحة في المنصة</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'أقمشة رجالية', img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500&h=500&fit=crop', category: 'textiles' },
              { name: 'أقمشة نسائية', img: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=500&h=500&fit=crop', category: 'textiles' },
              { name: 'ملابس جاهزة', img: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&h=500&fit=crop', category: 'apparel' },
              { name: 'إكسسوارات وملحقات', img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=500&h=500&fit=crop', category: 'accessories' },
            ].map((cat, i) => (
              <Link key={i} href={`/products?category=${cat.category}`} className="group relative overflow-hidden rounded-2xl aspect-[4/5] block">
                {/* category placeholder */}
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-xl">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">أحدث العروض</h2>
              <p className="text-muted-foreground">فرص لا تفوت من مصانع وماركات موثوقة</p>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="hidden sm:flex">عرض الكل</Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-card rounded-2xl h-[400px] animate-pulse" />
              ))}
            </div>
          ) : featuredData?.products && featuredData.products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredData.products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 glass-panel rounded-2xl">
              <Box className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-bold text-foreground">لا توجد منتجات حالياً</h3>
              <p className="text-muted-foreground mt-2">ستتوفر المنتجات قريباً، عد لاحقاً.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Decorative banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/abstract-gold.png`} 
            alt="Gold Texture" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">لديك مخزون راكد؟</h2>
          <p className="text-lg text-white/80 mb-10">
            انضم لأكثر من 500 مصنع وعلامة تجارية يثقون في منصة فائض لتسييل مخزونهم بسرعة وكفاءة.
          </p>
          <Link href="/register?role=supplier">
            <Button size="lg" className="bg-white text-secondary hover:bg-white/90 text-lg font-bold px-10 h-14">
              سجل كمورد الآن
            </Button>
          </Link>
        </div>
      </section>

    </Layout>
  );
}

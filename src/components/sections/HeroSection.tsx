import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, CircleCheck as CheckCircle2, Phone } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={siteData.images.hero} alt="Геодезические работы на местности" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl text-white animate-fade-up">
          <Badge className="bg-accent/90 text-accent-foreground border-none mb-5 text-sm py-1.5 px-4">
            <MapPin className="h-3.5 w-3.5 mr-1.5" />
            {siteData.company.license}
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Геодезия и кадастровые работы под ключ
          </h1>

          <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl">
            Топосъёмка, межевание, кадастровые работы и аэрофотосъёмка с применением современного оборудования. Точность измерений и соблюдение сроков гарантированы договором.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {["Выезд в день обращения", "Лицензия Росреестра", "Гарантия на все работы"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base h-12 px-8">
              <a href="#booking">
                Записаться на замер
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base h-12 px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
              <a href={siteData.company.phoneHref}>
                <Phone className="h-5 w-5" />
                {siteData.company.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

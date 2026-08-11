import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function CTABannerSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img src={siteData.images.cta} alt="Геодезист на местности" className="w-full h-full object-cover" />
            <div className="absolute inset-0 hero-overlay" />
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white text-center">
            <Badge className="bg-accent text-accent-foreground border-none mb-4">
              <Sparkles className="h-3.5 w-3.5 mr-1.5" />Бесплатная консультация
            </Badge>

            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance">Не знаете, какая услуга вам нужна?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed">
              Позвоните нам или оставьте заявку — наш специалист бесплатно проконсультирует и подберёт оптимальный набор работ для вашего объекта.
            </p>

            <Alert className="bg-white/10 border-white/20 text-white mb-6 max-w-xl mx-auto">
              <AlertTitle className="text-white font-semibold">Акция месяца</AlertTitle>
              <AlertDescription className="text-white/80">Скидка 15% на топосъёмку при заказе до конца месяца. Количество объектов ограничено.</AlertDescription>
            </Alert>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90"><a href="#booking">Оставить заявку<ArrowRight className="h-5 w-5" /></a></Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"><a href={siteData.company.phoneHref}><Phone className="h-5 w-5" />{siteData.company.phone}</a></Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

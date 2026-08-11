import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Этапы работы</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Как мы работаем</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Прозрачный процесс от заявки до получения готовых документов — вы всегда знаете, на каком этапе находится ваш заказ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {siteData.processSteps.map((step) => (
            <Card key={step.step} className="card-hover">
              <CardContent className="pt-6 pb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold shrink-0">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-semibold text-center mb-2 text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Map, Ruler, FileText, Crosshair, Plane, Building2, ArrowRight } from "lucide-react";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Map, Ruler, FileText, Crosshair, Plane, Building2 };

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Наши услуги</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Полный спектр геодезических работ</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выполняем все виды геодезических и кадастровых работ — от топосъёмки участка до сопровождения в Росреестре.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.services.map((service) => {
            const Icon = iconMap[service.icon] ?? Map;
            return (
              <Card key={service.id} className="card-hover border-border/60 overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-primary border-primary/30">{service.price}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-4" />
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between group">
                        Подробнее
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg">
                      <DialogHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <DialogTitle className="text-xl">{service.title}</DialogTitle>
                            <p className="text-sm text-primary font-semibold">{service.price}</p>
                          </div>
                        </div>
                        <DialogDescription className="text-base leading-relaxed pt-2">{service.description}</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-3 pt-2">
                        <h4 className="text-sm font-semibold text-foreground">Что включает:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Button asChild className="w-full mt-4"><a href="#booking">Заказать услугу</a></Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CircleCheck as CheckCircle2, Award, Zap, ShieldCheck } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={siteData.images.about} alt="Геодезист за работой" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
            <img src={siteData.images.aboutSecondary} alt="Команда инженеров" className="absolute -bottom-8 -right-4 w-2/3 rounded-xl shadow-xl border-4 border-background object-cover hidden md:block" />
          </div>

          <div>
            <Badge variant="secondary" className="mb-3">О компании</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">15 лет точности и надёжности</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              «{siteData.company.name}» — команда сертифицированных геодезистов и кадастровых инженеров. Мы используем современное электронное оборудование: электронные тахеометры, GNSS-приёмники и беспилотные аппараты. За 15 лет работы выполнили более 2500 проектов различной сложности.
            </p>

            <Tabs defaultValue="mission" className="mb-6">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="mission">Миссия</TabsTrigger>
                <TabsTrigger value="approach">Подход</TabsTrigger>
                <TabsTrigger value="guarantees">Гарантии</TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="mt-4">
                <Card><CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Обеспечивать заказчиков точными и легитимными геодезическими данными, которые проходят согласование в надзорных органах с первого раза. Мы несём полную ответственность за качество результатов.
                    </p>
                  </div>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="approach" className="mt-4">
                <Card><CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Каждый проект ведёт персональный менеджер. Полевые работы выполняются на современном оборудовании, камеральная обработка — в лицензионном ПО. Все этапы фиксируются, вы всегда знаете статус заказа.
                    </p>
                  </div>
                </CardContent></Card>
              </TabsContent>
              <TabsContent value="guarantees" className="mt-4">
                <Card><CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-3">
                    <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Стоимость и сроки фиксируются в договоре. При необходимости доработок по нашей вине — выполняем бесплатно. {siteData.company.license}.
                    </p>
                  </div>
                </CardContent></Card>
              </TabsContent>
            </Tabs>

            <Separator className="mb-6" />

            <div className="grid grid-cols-2 gap-4">
              {["Современное оборудование Trimble и Leica", "Аттестованные кадастровые инженеры", "Сопровождение в Росреестре", "Работа по всей Московской области"].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Satellite, ScanLine, Radar, Cpu } from "lucide-react";
import { siteData } from "@/data/siteData";

const equipmentTabs = [
  { value: "gnss", label: "GNSS", icon: Satellite, title: "Trimble R12 & Leica GS18", description: "Двухчастотные GNSS-приёмники с поддержкой всех спутниковых систем (GPS, ГЛОНАСС, Galileo, BeiDou). Обеспечивают сантиметровую точность в RTK-режиме.", accuracy: 95, specs: ["Точность: 8 мм + 1 ppm", "520 каналов", "IMU-компенсация наклона"] },
  { value: "totalstation", label: "Тахеометры", icon: ScanLine, title: "Leica TS16 & Sokkia FX-105", description: "Электронные тахеометры с автонаведением и servo-приводом. Идеальны для строительной разбивки и исполнительных съёмок.", accuracy: 90, specs: ["Точность: 1\"", "Дальность: 5000 м", "Автонаведение ATR"] },
  { value: "drone", label: "БПЛА", icon: Radar, title: "DJI Matrice 350 RTK", description: "Профессиональный дрон для аэрофотосъёмки с RTK-позиционированием. Создание ортофотопланов и 3D-моделей рельефа.", accuracy: 85, specs: ["Нагрузка: 2.7 кг", "Полёт: 55 мин", "Камера 45 МП"] },
  { value: "software", label: "ПО", icon: Cpu, title: "Лицензионное ПО", description: "Обработка данных в Trimble Business Center, AutoCAD Civil 3D и Credo. Формирование документации по ГОСТ.", accuracy: 98, specs: ["Trimble Business Center", "AutoCAD Civil 3D", "CREDO ТОПОПЛАН"] },
];

export default function EquipmentSection() {
  return (
    <section id="equipment" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img src={siteData.images.equipment} alt="Геодезическое оборудование" className="rounded-xl shadow-lg w-full object-cover aspect-[4/3]" />
          </div>

          <div className="order-1 lg:order-2">
            <Badge variant="secondary" className="mb-3">Оборудование</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Современное геодезическое оборудование</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Мы используем профессиональное оборудование ведущих производителей: Trimble, Leica, Sokkia и DJI. Регулярная поверка и калибровка гарантируют точность измерений.
            </p>

            <Tabs defaultValue="gnss">
              <TabsList className="grid grid-cols-4 w-full mb-4">
                {equipmentTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <TabsTrigger key={tab.value} value={tab.value} className="text-xs md:text-sm">
                      <Icon className="h-4 w-4 md:mr-1.5" />
                      <span className="hidden md:inline">{tab.label}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {equipmentTabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value}>
                  <Card><CardContent className="pt-6">
                    <h3 className="font-bold text-lg text-foreground mb-2">{tab.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tab.description}</p>
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-muted-foreground">Точность</span>
                        <span className="font-semibold text-primary">{tab.accuracy}%</span>
                      </div>
                      <Progress value={tab.accuracy} className="h-2" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tab.specs.map((spec) => (<Badge key={spec} variant="outline" className="text-xs">{spec}</Badge>))}
                    </div>
                  </CardContent></Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

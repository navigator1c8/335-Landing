import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Table, TableHeader, TableHead, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Прайс-лист</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Стоимость услуг</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Фиксированные цены на основные виды работ. Итоговая стоимость рассчитывается после оценки объекта.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Таблица цен</CardTitle>
              <p className="text-sm text-muted-foreground">Цены указаны для базовых объёмов работ.</p>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Услуга</TableHead>
                    <TableHead className="text-right">Ед.</TableHead>
                    <TableHead className="text-right">Цена</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {siteData.pricing.map((item) => (
                    <TableRow key={item.name}>
                      <TableCell>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.note}</p>
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground">{item.unit}</TableCell>
                      <TableCell className="text-right font-semibold text-primary">{item.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground border-none flex flex-col justify-center">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-3">Нужна точная смета?</h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Стоимость зависит от площади, рельефа местности, удалённости объекта и срочности. Оставьте заявку — мы бесплатно проконсультируем и рассчитаем индивидуальную смету.
              </p>
              <Separator className="bg-primary-foreground/20 mb-6" />
              <div className="space-y-3 mb-6">
                {["Бесплатный выезд оценщика", "Смета в течение 1 рабочего дня", "Фиксация цены в договоре"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
              <Button asChild variant="secondary" size="lg" className="w-full"><a href="#booking">Получить расчёт</a></Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

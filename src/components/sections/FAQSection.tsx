import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Circle as HelpCircle } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Вопросы и ответы</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Часто задаваемые вопросы</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Собрали ответы на популярные вопросы. Не нашли свой — задайте его нам напрямую.
          </p>
        </div>

        <Card className="shadow-md">
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              {siteData.faqItems.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    <span className="flex items-center gap-3 pr-4">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <HelpCircle className="h-5 w-5 text-primary shrink-0 cursor-help" />
                        </HoverCardTrigger>
                        <HoverCardContent side="top" className="w-64 text-sm">
                          Нажмите, чтобы развернуть подробный ответ на этот вопрос.
                        </HoverCardContent>
                      </HoverCard>
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

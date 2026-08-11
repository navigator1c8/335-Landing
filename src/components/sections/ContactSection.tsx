import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function ContactSection() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message || !consent) {
      toast({ title: "Заполните обязательные поля", description: "Имя, телефон, сообщение и согласие на обработку данных обязательны.", variant: "destructive" });
      return;
    }
    toast({ title: "Сообщение отправлено!", description: "Мы свяжемся с вами в ближайшее рабочее время." });
    setName(""); setPhone(""); setEmail(""); setMessage(""); setTopic(""); setConsent(false);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Контакты</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Свяжитесь с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Заполните форму обратной связи или позвоните — мы ответим на все вопросы и поможем выбрать подходящую услугу.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {siteData.contactMethods.map((method) => {
              const Icon = method.icon === "Phone" ? Phone : method.icon === "Mail" ? Mail : method.icon === "MapPin" ? MapPin : Clock;
              return (
                <Card key={method.label} className="card-hover">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{method.label}</p>
                      {method.href !== "#" ? (
                        <a href={method.href} className="font-semibold text-foreground hover:text-primary transition-colors">{method.value}</a>
                      ) : (
                        <p className="font-semibold text-foreground">{method.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="overflow-hidden">
              <img src={siteData.images.map} alt="Карта местности" className="w-full aspect-[16/8] object-cover" />
              <CardContent className="p-5">
                <p className="text-sm text-muted-foreground">{siteData.company.address}. Удобная парковка для клиентов.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Форма обратной связи</CardTitle>
              <CardDescription>Заполните форму, и мы перезвоним в течение 15 минут в рабочее время.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name" className="mb-1.5 block">Имя <span className="text-destructive">*</span></Label>
                    <Input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван Петров" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone" className="mb-1.5 block">Телефон <span className="text-destructive">*</span></Label>
                    <Input id="contact-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-email" className="mb-1.5 block">Email</Label>
                  <Input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.ru" />
                </div>

                <div>
                  <Label htmlFor="contact-topic" className="mb-1.5 block">Тема обращения</Label>
                  <Select value={topic} onValueChange={setTopic}>
                    <SelectTrigger id="contact-topic"><SelectValue placeholder="Выберите тему" /></SelectTrigger>
                    <SelectContent>
                      {siteData.bookingServices.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
                      <SelectItem value="other">Другое</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="contact-message" className="mb-1.5 block">Сообщение <span className="text-destructive">*</span></Label>
                  <Textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Опишите вашу задачу или вопрос..." rows={4} />
                </div>

                <Separator />

                <div className="flex items-start gap-2">
                  <Checkbox id="consent" checked={consent} onCheckedChange={(v) => setConsent(v === true)} className="mt-0.5" />
                  <Label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed">
                    Я согласен на обработку персональных данных и принимаю условия политики конфиденциальности <span className="text-destructive">*</span>
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full"><Send className="h-5 w-5" />Отправить сообщение</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

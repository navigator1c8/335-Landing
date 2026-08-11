import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Clock, CircleCheck as CheckCircle2, User, Phone, Mail } from "lucide-react";
import { siteData } from "@/data/siteData";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export default function BookingSection() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [service, setService] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);

  const allSlots = [...siteData.bookingSlots.morning, ...siteData.bookingSlots.afternoon, ...siteData.bookingSlots.evening];
  const bookedSlots = ["10:00", "14:00"];

  const handleSubmit = () => {
    if (!date || !selectedSlot || !name || !phone || !service) {
      toast({ title: "Заполните все поля", description: "Выберите дату, время, услугу и укажите контакты.", variant: "destructive" });
      return;
    }
    toast({ title: "Заявка принята!", description: `Мы перезвоним для подтверждения записи на ${format(date, "d MMMM", { locale: ru })} в ${selectedSlot}.` });
    setDate(undefined);
    setSelectedSlot(null);
    setService("");
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <section id="booking" className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={siteData.images.booking} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="bg-accent text-accent-foreground border-none mb-3">Бронирование</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Запишитесь на выезд специалиста</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Выберите удобную дату и время — наш инженер приедет на объект для замеров и консультации.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-2xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><CalendarDays className="h-5 w-5 text-primary" />Форма бронирования</CardTitle>
            <CardDescription>Заполните данные, и мы свяжемся с вами в течение 15 минут для подтверждения.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="mb-2 block">Выберите дату</Label>
                <div className="rounded-lg border p-3">
                  <Calendar mode="single" selected={date} onSelect={setDate} disabled={[{ before: today }, { after: maxDate }]} locale={ru} className="mx-auto" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="mb-2 block">Выберите время</Label>
                  {!date ? (
                    <div className="flex items-center justify-center h-24 rounded-lg bg-secondary/50 text-sm text-muted-foreground">Сначала выберите дату</div>
                  ) : (
                    <ScrollArea className="h-24 rounded-lg border p-3">
                      <div className="grid grid-cols-4 gap-2">
                        {allSlots.map((slot) => {
                          const isBooked = bookedSlots.includes(slot);
                          const isSelected = selectedSlot === slot;
                          return (
                            <Button key={slot} variant={isSelected ? "default" : "outline"} size="sm" disabled={isBooked} onClick={() => setSelectedSlot(slot)} className={`text-xs ${isBooked ? "line-through opacity-40" : ""}`}>
                              {slot}
                            </Button>
                          );
                        })}
                      </div>
                    </ScrollArea>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <Label htmlFor="service" className="mb-1.5 block">Услуга</Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger id="service"><SelectValue placeholder="Выберите услугу" /></SelectTrigger>
                      <SelectContent>
                        {siteData.bookingServices.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="name" className="mb-1.5 block flex items-center gap-1.5"><User className="h-3.5 w-3.5" />Ваше имя</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван Петров" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="phone" className="mb-1.5 block flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" />Телефон</Label>
                      <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="mb-1.5 block flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" />Email</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.ru" />
                    </div>
                  </div>
                </div>

                <Button onClick={handleSubmit} size="lg" className="w-full"><CheckCircle2 className="h-5 w-5" />Подтвердить запись</Button>

                {date && selectedSlot && (
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    Выбрано: {format(date, "d MMMM, EEEE", { locale: ru })} в {selectedSlot}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

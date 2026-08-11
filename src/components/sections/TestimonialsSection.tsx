import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Star, Quote } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={siteData.images.testimonialsBg} alt="" className="w-full h-full object-cover opacity-10" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Отзывы</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Что говорят наши клиенты</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Более 98% клиентов рекомендуют нас коллегам и партнёрам.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteData.testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="card-hover relative">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-3" />
                <p className="text-foreground/80 leading-relaxed mb-4 italic">«{testimonial.text}»</p>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { siteData } from "@/data/siteData";

export default function TeamSection() {
  return (
    <section id="team" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Наша команда</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Профессионалы своего дела</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Аттестованные кадастровые инженеры и геодезисты с опытом работы от 10 лет.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.images.team.map((member) => (
            <Card key={member.name} className="card-hover overflow-hidden text-center">
              <div className="relative aspect-square overflow-hidden">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <Badge variant="outline" className="mx-auto w-fit text-primary border-primary/30">{member.role}</Badge>
              </CardHeader>
              <CardContent>
                <Separator className="mb-3" />
                <p className="text-sm text-muted-foreground">Опыт работы более 10 лет в сфере геодезии и кадастра.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

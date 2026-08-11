import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { siteData } from "@/data/siteData";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Наши проекты</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Реализованные объекты</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Более 2500 успешно завершённых проектов — от частных участков до крупных промышленных зон.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteData.projects.map((project) => (
            <Dialog key={project.title}>
              <Card className="card-hover overflow-hidden group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} className="bg-accent/90 text-accent-foreground border-none">{tag}</Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" />{project.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{project.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Площадь работ: <span className="font-semibold text-foreground">{project.area}</span></p>
                </CardContent>
                <CardFooter>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between group/btn">
                      Подробнее об объекте
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                </CardFooter>
              </Card>

              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                </DialogHeader>
                <img src={project.image} alt={project.title} className="w-full rounded-lg aspect-[16/9] object-cover" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-lg bg-secondary/50">
                    <p className="text-xs text-muted-foreground mb-1">Локация</p>
                    <p className="text-sm font-semibold">{project.location}</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary/50">
                    <p className="text-xs text-muted-foreground mb-1">Площадь</p>
                    <p className="text-sm font-semibold">{project.area}</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary/50">
                    <p className="text-xs text-muted-foreground mb-1">Год</p>
                    <p className="text-sm font-semibold">{project.period}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (<Badge key={tag} variant="secondary">{tag}</Badge>))}
                </div>
                <Button asChild className="w-full"><a href="#booking">Хочу такой проект</a></Button>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}

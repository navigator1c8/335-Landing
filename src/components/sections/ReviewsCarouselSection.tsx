import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { siteData } from "@/data/siteData";

export default function ReviewsCarouselSection() {
  const allReviews = [...siteData.testimonials, ...siteData.testimonials];
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allReviews.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleReviews = allReviews.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="reviews-carousel" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-3">Карусель отзывов</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Отзывы наших клиентов</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Узнайте, что думают о нашей работе заказчики со всей Московской области.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visibleReviews.map((review, idx) => (
            <Card key={`${currentPage}-${idx}`} className="card-hover relative animate-fade-in">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-3" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-warning text-warning" />))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-4 text-sm italic">«{review.text}»</p>
                <Separator className="mb-3" />
                <p className="font-semibold text-foreground text-sm">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => setCurrentPage((p) => (p > 1 ? p - 1 : totalPages))}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Pagination>
            <PaginationContent>
              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink isActive={currentPage === i + 1} onClick={() => setCurrentPage(i + 1)}>{i + 1}</PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
          <Button variant="outline" size="icon" onClick={() => setCurrentPage((p) => (p < totalPages ? p + 1 : 1))}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

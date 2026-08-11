import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { ArrowRight, ChevronDown, FileText, Download, ExternalLink } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function CTADownloadSection() {
  return (
    <section id="documents" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-none shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 bg-primary text-primary-foreground">
              <Badge className="bg-accent text-accent-foreground border-none mb-4">Полезное</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Документы и материалы</h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Скачайте образцы договоров, бланки заявок и памятки для подготовки к геодезическим работам. Всё бесплатно и доступно в один клик.
              </p>
              <Separator className="bg-primary-foreground/20 mb-6" />

              <div className="space-y-3 mb-6">
                {[
                  { label: "Образец договора на геодезические работы", size: "PDF, 245 КБ" },
                  { label: "Бланк заявки на кадастровые работы", size: "DOCX, 180 КБ" },
                  { label: "Памятка по подготовке участка к межеванию", size: "PDF, 320 КБ" },
                ].map((doc) => (
                  <div key={doc.label} className="flex items-center gap-3 text-sm">
                    <FileText className="h-5 w-5 text-accent shrink-0" />
                    <div className="flex-1">
                      <p className="text-primary-foreground/90">{doc.label}</p>
                      <p className="text-xs text-primary-foreground/50">{doc.size}</p>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="secondary" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
                        </TooltipTrigger>
                        <TooltipContent>Скачать файл</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                ))}
              </div>

              <Button asChild variant="secondary" size="lg"><a href="#booking">Начать работу с нами<ArrowRight className="h-5 w-5" /></a></Button>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem><BreadcrumbLink href="/">Главная</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbPage>Документы</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>

              <h3 className="text-xl font-bold text-foreground mb-3">Полезные разделы</h3>
              <p className="text-sm text-muted-foreground mb-6">Переходите к нужному разделу или скачайте дополнительные материалы.</p>

              <div className="space-y-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">Перейти к разделу<ChevronDown className="h-4 w-4" /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuLabel>Разделы сайта</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {siteData.navLinks.map((link) => (
                      <DropdownMenuItem key={link.href} asChild>
                        <a href={link.href} className="flex items-center gap-2"><ExternalLink className="h-4 w-4" />{link.label}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <div className="grid grid-cols-2 gap-3">
                  <Button asChild variant="outline"><a href="#services">Услуги</a></Button>
                  <Button asChild variant="outline"><a href="#pricing">Цены</a></Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

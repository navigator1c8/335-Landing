import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu, Phone, Compass } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white/85 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Compass className="h-6 w-6" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-primary">{siteData.company.name}</span>
            <span className="text-[11px] text-muted-foreground">{siteData.company.tagline}</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {siteData.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-secondary/60"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={siteData.company.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            <Phone className="h-4 w-4" />
            {siteData.company.phone}
          </a>
          <Button asChild size="sm">
            <a href="#booking">Записаться</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetTitle className="text-primary text-lg font-bold mb-4">Меню</SheetTitle>
              <nav className="flex flex-col gap-1 mt-4">
                {siteData.navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md hover:bg-secondary"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t">
                <a href={siteData.company.phoneHref} className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
                  <Phone className="h-4 w-4" />
                  {siteData.company.phone}
                </a>
                <SheetClose asChild>
                  <Button asChild className="w-full">
                    <a href="#booking">Записаться на замер</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

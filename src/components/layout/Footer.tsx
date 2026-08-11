import { Compass, Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/90">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Compass className="h-6 w-6" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold">{siteData.company.name}</span>
                <span className="text-[11px] text-background/60">{siteData.company.tagline}</span>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Профессиональные геодезические и кадастровые работы. Точность, соблюдение сроков и полный пакет документов.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/60 mb-4">Услуги</h4>
            <ul className="space-y-2">
              {siteData.services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="text-sm text-background/70 hover:text-primary transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/60 mb-4">Навигация</h4>
            <ul className="space-y-2">
              {siteData.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#booking" className="text-sm text-background/70 hover:text-primary transition-colors">Бронирование</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/60 mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <a href={siteData.company.phoneHref}>{siteData.company.phone}</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <a href={siteData.company.emailHref}>{siteData.company.email}</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                {siteData.company.address}
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                {siteData.company.workHours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/15 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} {siteData.company.name}. {siteData.company.license}. {siteData.company.inn}.
          </p>
          <p className="text-xs text-background/50">Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

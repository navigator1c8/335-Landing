import { siteData } from "@/data/siteData";
import { TrendingUp, Award, Users, Map } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "15+": TrendingUp,
  "2500+": Award,
  "98%": Users,
  "24": Map,
};

export default function StatsSection() {
  return (
    <section className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.stats.map((stat) => {
            const Icon = iconMap[stat.value] ?? TrendingUp;
            return (
              <div key={stat.label} className="flex flex-col items-center text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Icon className="h-8 w-8 mb-3 text-accent" />
                <span className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</span>
                <span className="text-sm text-primary-foreground/70">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

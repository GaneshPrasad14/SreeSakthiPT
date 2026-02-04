import { TrendingUp, Users, Award, Truck } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "500+",
    label: "Machines Sold",
  },
  {
    icon: Users,
    value: "200+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Truck,
    value: "Pan",
    suffix: "India",
    label: "Delivery Network",
  },
];

export const Stats = () => {
  return (
    <section className="bg-navy py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-gold" />
              </div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-1">
                {stat.value}
                {stat.suffix && <span className="text-lg ml-1">{stat.suffix}</span>}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Link } from "react-router-dom";
import { Settings, Layers, Sparkles, Zap, Wrench, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: Layers,
    title: "Paper & Board Machines",
    description: "Complete paper making machines for various production capacities and paper grades.",
    slug: "paper-board",
  },
  {
    icon: Settings,
    title: "Paper Machine Parts",
    description: "Essential components including rollers, cylinders, and forming sections.",
    slug: "parts",
  },
  {
    icon: Sparkles,
    title: "Finishing Equipment",
    description: "Coating machines, calendering units, and surface treatment equipment.",
    slug: "finishing",
  },
  {
    icon: Zap,
    title: "Energy Production",
    description: "Boilers, turbines, and power generation equipment for paper mills.",
    slug: "energy",
  },
  {
    icon: Wrench,
    title: "Spare Parts & Equipment",
    description: "Quality replacement parts, bearings, seals, and maintenance tools.",
    slug: "spares",
  },
];

export const Categories = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">What We Offer</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">
            Our Product Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of second-hand paper machinery and equipment, 
            carefully selected and inspected for quality and performance.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              to={`/products?category=${category.slug}`}
              className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-lg transition-all duration-500 hover:-translate-y-2 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <category.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                {category.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {category.description}
              </p>
              <div className="flex items-center text-gold font-semibold">
                View Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

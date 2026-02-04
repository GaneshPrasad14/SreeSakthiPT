import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero2 from "@/assets/hero-2.jpg";

const features = [
  "Quality Assured Machinery",
  "Expert Technical Support",
  "Competitive Pricing",
  "Pan-India Delivery",
  "Installation Assistance",
  "After-Sales Service",
];

export const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={hero2}
                alt="Paper Machinery"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </div>
            
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-navy p-6 rounded-xl shadow-gold">
              <div className="text-4xl font-heading font-bold">15+</div>
              <div className="text-sm font-semibold uppercase tracking-wider">Years Experience</div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-gold/30 rounded-xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-gold font-semibold uppercase tracking-wider text-sm">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mt-2 mb-6">
              Your Trusted Partner in Paper Machinery
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">Sree Sakthi Paper Tech</strong> is a leading name in the 
              second-hand paper machinery industry based in Coimbatore. Founded and led by 
              <strong className="text-foreground"> Mr. N. Selvaraj</strong>, we have established ourselves 
              as a reliable partner for paper mills across India.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We specialize in buying and selling quality pre-owned paper machines, spare parts, 
              and equipment. Our commitment to quality and customer satisfaction has made us 
              the preferred choice for paper industry professionals.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-navy text-primary-foreground hover:bg-navy-light font-semibold">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

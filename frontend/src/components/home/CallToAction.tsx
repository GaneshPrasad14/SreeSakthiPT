import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-navy via-navy-light to-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-gold font-semibold uppercase tracking-wider text-sm">Get Started Today</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-6">
            Looking for Quality Paper Machinery?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're buying, selling, or looking for spare parts, we're here to help.
            Get in touch with our experts for personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold-light font-semibold text-base px-8">
              <Link to="/contact" className="text-navy hover:text-navy/80">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground hover:bg-primary-foreground font-semibold text-base px-8 bg-transparent">
              <a href="tel:9003839621" className="text-white hover:text-navy group flex items-center">
                <Phone className="mr-2 w-5 h-5 group-hover:text-navy" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

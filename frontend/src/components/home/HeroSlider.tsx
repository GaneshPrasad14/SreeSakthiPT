import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, Settings, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/machinery-hero-1.png";
import hero2 from "@/assets/machinery-hero-2.png";
import hero3 from "@/assets/machinery-hero-3.png";

const slides = [
  {
    image: hero1,
    title: "Advanced Paper Machinery",
    subtitle: "Heavy Industrial Solutions",
    project: "Sree Sakthi Paper Mills",
    description: "Engineering excellence in second-hand paper machines and industrial equipment.",
    color: "text-machinery-yellow",
  },
  {
    image: hero2,
    title: "Precision Engineering",
    subtitle: "Turnkey Project Execution",
    project: "Global Factories",
    description: "Complete plant setups with blueprints, steel structures, and heavy machinery.",
    color: "text-machinery-blue",
  },
  {
    image: hero3,
    title: "Quality Spare Parts",
    subtitle: "Gears & Steel Components",
    project: "Mechanical Systems",
    description: "High-grade spare parts ensuring longevity and efficiency for your production lines.",
    color: "text-white",
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden bg-machinery-dark group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* Background Image with Zoom Effect */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? "scale-110" : "scale-100"
              }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          {/* Overlay - Industrial Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-machinery-dark/95 via-machinery-dark/80 to-transparent" />

          {/* Tech Pattern Overlay (Optional for extra "Machinery Vibe") */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          {/* Content */}
          <div className="relative h-full container-custom flex items-center z-20">
            <div className="max-w-3xl text-white pt-20 pl-4 md:pl-0 border-l-4 border-machinery-yellow/0 hover:border-machinery-yellow/100 transition-all duration-300 md:border-l-0">

              {/* Animated Project Name Tag */}
              <div
                className={`flex items-center gap-2 mb-6 overflow-hidden transition-all duration-700 delay-100 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className="h-[2px] w-12 bg-machinery-yellow"></div>
                <span className="uppercase tracking-[0.2em] text-sm font-bold text-machinery-yellow/90 font-mono">
                  {slide.project}
                </span>
              </div>

              <h1
                className={`font-heading text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none transition-all duration-700 delay-200 ${index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
              >
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className="block shadow-black drop-shadow-lg">{word}</span>
                ))}
              </h1>

              <div className={`overflow-hidden mb-8 transition-all duration-700 delay-300 ${index === currentSlide ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}`}>
                <p className="text-xl md:text-2xl text-gray-300 font-light max-w-xl leading-relaxed border-l-2 border-machinery-gray pl-6">
                  {slide.description}
                </p>
              </div>

              <div
                className={`flex flex-col sm:flex-row gap-5 transition-all duration-700 delay-500 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
              >
                <Button asChild size="lg" className="bg-machinery-yellow hover:bg-machinery-yellow/90 text-machinery-dark font-bold text-lg px-10 py-6 rounded-none clip-path-slant relative overflow-hidden group/btn">
                  <Link to="/products" className="flex items-center gap-2">
                    <span className="relative z-10">VIEW MACHINERY</span>
                    <Cog className="w-5 h-5 relative z-10 animate-spin-slow" />
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                  </Link>
                </Button>

                <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold text-lg px-10 py-6 rounded-none backdrop-blur-sm transition-all duration-300">
                  <Link to="/contact">CONTACT US</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modern Navigation Controls */}
      <div className="absolute bottom-0 right-0 p-8 md:p-16 z-30 flex gap-4 items-end">
        <div className="flex gap-2 mb-2">
          <button
            onClick={prevSlide}
            className="w-14 h-14 border border-white/20 hover:bg-machinery-yellow hover:border-machinery-yellow hover:text-black text-white flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 border border-white/20 hover:bg-machinery-yellow hover:border-machinery-yellow hover:text-black text-white flex items-center justify-center transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-8 md:left-16 z-30 flex gap-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group flex items-center gap-3 transition-all duration-300`}
          >
            <span className={`text-sm font-mono font-bold ${index === currentSlide ? "text-machinery-yellow" : "text-white/40"}`}>
              0{index + 1}
            </span>
            <span className={`h-[2px] transition-all duration-300 ${index === currentSlide ? "w-12 bg-machinery-yellow" : "w-4 bg-white/20 group-hover:bg-white/40"}`}></span>
          </button>
        ))}
      </div>
    </section>
  );
};

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const aboutDropdown = [
  { name: "Our Story", path: "/about" },
  { name: "Mission & Vision", path: "/mission-vision" },
  { name: "Our Team", path: "/team" },
];

const productDropdown = [
  { name: "Paper & Board Machines", slug: "paper-board" },
  { name: "Paper Machine Parts", slug: "parts" },
  { name: "Finishing Equipment", slug: "finishing" },
  { name: "Energy Production", slug: "energy" },
  { name: "Spare Parts & Equipment", slug: "spares" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy text-primary-foreground py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:9003839621" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              +91 90038 39621
            </a>
            <a href="mailto:sreesakthitec@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              sreesakthitec@gmail.com
            </a>
          </div>
          <div className="text-muted-foreground">
            Trusted Partner in Paper Machinery Since Years
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-card/95 backdrop-blur-md sticky top-0 z-50 shadow-soft border-b border-border">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 px-2 md:px-0">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 md:gap-3 group flex-shrink-0">
              <img src="/logo.png" alt="Sree Sakthi Paper Tech" className="h-12 md:h-16 lg:h-20 w-auto" />
              <span className="font-heading font-bold text-xs sm:text-sm md:text-xl lg:text-2xl text-navy uppercase tracking-tight leading-tight">
                Sree Sakthi <br /> Paper Tech
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className={`px-4 py-2 font-medium transition-colors rounded-md ${isActive("/")
                  ? "text-gold bg-navy/5"
                  : "text-foreground hover:text-gold hover:bg-navy/5"
                  }`}
              >
                Home
              </Link>

              {aboutDropdown.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 font-medium transition-colors rounded-md ${isActive(item.path)
                    ? "text-gold bg-navy/5"
                    : "text-foreground hover:text-gold hover:bg-navy/5"
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger className={`px-4 py-2 font-medium transition-colors rounded-md flex items-center gap-1 ${isActive("/products")
                  ? "text-gold bg-navy/5"
                  : "text-foreground hover:text-gold hover:bg-navy/5"
                  }`}>
                  Products <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border-border">
                  <DropdownMenuItem asChild>
                    <Link to="/products" className="cursor-pointer font-semibold border-b border-border mb-1">
                      All Products
                    </Link>
                  </DropdownMenuItem>
                  {productDropdown.map((item) => (
                    <DropdownMenuItem key={item.slug} asChild>
                      <Link to={`/products?category=${item.slug}`} className="cursor-pointer">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/contact"
                className={`px-4 py-2 font-medium transition-colors rounded-md ${isActive("/contact")
                  ? "text-gold bg-navy/5"
                  : "text-foreground hover:text-gold hover:bg-navy/5"
                  }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-gold text-navy hover:bg-gold-dark font-semibold px-6">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-navy"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <nav className="container-custom py-4 flex flex-col gap-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 font-medium rounded-lg transition-colors ${isActive("/") ? "text-gold bg-navy/5" : "text-foreground hover:text-gold hover:bg-navy/5"}`}
              >
                Home
              </Link>

              {aboutDropdown.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 font-medium rounded-lg transition-colors ${isActive(item.path) ? "text-gold bg-navy/5" : "text-foreground hover:text-gold hover:bg-navy/5"}`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-4 py-3 font-medium rounded-lg text-foreground">
                <div className="mb-2">Products</div>
                <div className="pl-4 flex flex-col gap-2 border-l-2 border-border ml-1">
                  <Link
                    to="/products"
                    onClick={() => setIsOpen(false)}
                    className={`text-sm ${isActive("/products") ? "text-gold" : "text-muted-foreground hover:text-gold"}`}
                  >
                    All Products
                  </Link>
                  {productDropdown.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/products?category=${item.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="text-sm text-muted-foreground hover:text-gold"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 font-medium rounded-lg transition-colors ${isActive("/contact") ? "text-gold bg-navy/5" : "text-foreground hover:text-gold hover:bg-navy/5"}`}
              >
                Contact
              </Link>
              <Button asChild className="bg-gold text-navy hover:bg-gold-dark font-semibold mt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

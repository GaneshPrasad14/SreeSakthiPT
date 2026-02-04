import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <img src="/logo.png" alt="Sree Sakthi Paper Tech" className="h-16 w-auto" />
              <span className="font-heading font-bold text-xl text-gold uppercase tracking-tight leading-tight">
                Sree Sakthi <br /> Paper Tech
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Your trusted partner for second-hand paper machinery. We specialize in buying, selling, and providing spare parts for paper & board machines.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919003839621" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-gold transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-gold">Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products?category=paper-board" className="text-muted-foreground hover:text-gold transition-colors">Paper & Board Machines</Link>
              </li>
              <li>
                <Link to="/products?category=parts" className="text-muted-foreground hover:text-gold transition-colors">Paper Machine Parts</Link>
              </li>
              <li>
                <Link to="/products?category=finishing" className="text-muted-foreground hover:text-gold transition-colors">Finishing Equipment</Link>
              </li>
              <li>
                <Link to="/products?category=energy" className="text-muted-foreground hover:text-gold transition-colors">Energy Production</Link>
              </li>
              <li>
                <Link to="/products?category=spares" className="text-muted-foreground hover:text-gold transition-colors">Spare Parts</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  5/15 A, Popular Garden Extension,<br />Pallapalayam post, Pappampatti Pirivu,<br />Coimbatore - 641016
                </span>
              </li>
              <li>
                <a href="tel:9003839621" className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                  +91 90038 39621
                </a>
              </li>
              <li>
                <a href="tel:8754020062" className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                  +91 8754020062
                </a>
              </li>
              <li>
                <a href="mailto:sreesakthitec@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                  sreesakthitec@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sree Sakthi Paper Tech. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Proprietor: <span className="text-gold">N. Selvaraj</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

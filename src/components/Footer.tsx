import { Phone, Instagram } from 'lucide-react';
import { PHONE_NUMBER, INSTAGRAM_URL } from '@/data/cars';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center">
              <span className="font-serif text-lg font-bold text-navy-dark">OF</span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary-foreground">Ou Faris Drive Car</h3>
              <p className="text-xs text-primary-foreground/50">Location de voitures au Maroc</p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#fleet" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
              Notre Flotte
            </a>
            <a href="#about" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
              À Propos
            </a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
              Contact
            </a>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold-gradient group transition-all duration-300"
            >
              <Phone className="h-5 w-5 text-gold group-hover:text-navy-dark" />
            </a>
            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold-gradient group transition-all duration-300"
            >
              <Instagram className="h-5 w-5 text-gold group-hover:text-navy-dark" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gold/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Ou Faris Drive Car. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

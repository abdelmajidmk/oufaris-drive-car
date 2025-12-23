import { Phone, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER, INSTAGRAM_URL } from '@/data/cars';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
              <span className="font-serif text-xl font-bold text-navy-dark">OF</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl font-bold text-primary-foreground">Ou Faris</h1>
              <p className="text-xs text-gold font-medium tracking-widest uppercase">Drive Car</p>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#fleet" className="text-primary-foreground/80 hover:text-gold transition-colors font-medium">
              Notre Flotte
            </a>
            <a href="#about" className="text-primary-foreground/80 hover:text-gold transition-colors font-medium">
              À Propos
            </a>
            <a href="#contact" className="text-primary-foreground/80 hover:text-gold transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="instagram" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
            </a>
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button variant="gold" className="hidden sm:flex gap-2 rounded-full">
                <Phone className="h-4 w-4" />
                Réserver
              </Button>
              <Button variant="gold" size="icon" className="sm:hidden rounded-full">
                <Phone className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

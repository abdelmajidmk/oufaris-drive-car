import { Phone, ArrowDown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER } from '@/data/cars';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/60" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Star className="h-4 w-4 text-gold fill-gold" />
            <span className="text-gold text-sm font-medium">Service Premium au Maroc</span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up animation-delay-100">
            Louez Votre <br />
            <span className="text-gradient-gold">Voiture Idéale</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-xl animate-fade-in-up animation-delay-200">
            Des véhicules de qualité à des prix compétitifs. 
            À partir de <span className="text-gold font-bold">300 DH/jour</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Appelez Maintenant
              </Button>
            </a>
            <a href="#fleet">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                Voir Notre Flotte
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gold/20 animate-fade-in-up animation-delay-400">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold">8+</p>
              <p className="text-primary-foreground/60 text-sm">Véhicules</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold">500+</p>
              <p className="text-primary-foreground/60 text-sm">Clients Satisfaits</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-gold">24/7</p>
              <p className="text-primary-foreground/60 text-sm">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#fleet" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold animate-float"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  );
};

export default Hero;

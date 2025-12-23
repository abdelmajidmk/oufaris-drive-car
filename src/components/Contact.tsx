import { Phone, Instagram, MapPin, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PHONE_NUMBER, INSTAGRAM_URL } from '@/data/cars';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Info */}
          <div>
            <span className="text-gold font-semibold tracking-widest uppercase text-sm">Contact</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Réservez Votre Véhicule
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contactez-nous dès maintenant pour réserver votre véhicule ou pour toute demande d'information. Notre équipe est à votre disposition.
            </p>

            {/* Contact info */}
            <div className="space-y-6">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
                  <Phone className="h-6 w-6 text-gold group-hover:text-navy-dark transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Téléphone</p>
                  <p className="text-lg font-semibold text-foreground">{PHONE_NUMBER}</p>
                </div>
              </a>

              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
                  <Instagram className="h-6 w-6 text-gold group-hover:text-navy-dark transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <p className="text-lg font-semibold text-foreground">@oufarisdrivecar</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Horaires</p>
                  <p className="text-lg font-semibold text-foreground">Disponible 24h/24, 7j/7</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localisation</p>
                  <p className="text-lg font-semibold text-foreground">Maroc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - CTA Card */}
          <div className="bg-primary rounded-3xl p-10 lg:p-12">
            <h3 className="font-serif text-3xl font-bold text-primary-foreground mb-4">
              Prêt à Réserver?
            </h3>
            <p className="text-primary-foreground/70 mb-8">
              Appelez-nous directement ou suivez-nous sur Instagram pour voir nos dernières offres et promotions.
            </p>

            <div className="space-y-4">
              <a href={`tel:${PHONE_NUMBER}`} className="block">
                <Button variant="hero" size="xl" className="w-full">
                  <Phone className="h-5 w-5 mr-2" />
                  Appeler Maintenant
                </Button>
              </a>
              
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="instagram" size="xl" className="w-full rounded-full">
                  <Instagram className="h-5 w-5 mr-2" />
                  Suivez-nous sur Instagram
                </Button>
              </a>
            </div>

            <p className="text-primary-foreground/50 text-sm mt-8 text-center">
              Service rapide et personnalisé. Réponse garantie dans l'heure!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Shield, Clock, MapPin, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Véhicules Assurés',
    description: 'Tous nos véhicules sont entièrement assurés pour votre tranquillité d\'esprit.',
  },
  {
    icon: Clock,
    title: 'Disponibilité 24/7',
    description: 'Service de réservation disponible à tout moment, selon vos besoins.',
  },
  {
    icon: MapPin,
    title: 'Livraison Flexible',
    description: 'Nous livrons votre véhicule à l\'endroit de votre choix.',
  },
  {
    icon: ThumbsUp,
    title: 'Meilleur Prix',
    description: 'Des tarifs compétitifs sans compromis sur la qualité du service.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold tracking-widest uppercase text-sm">Pourquoi Nous Choisir</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6">
            L'Excellence à Votre Service
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Ou Faris Drive Car s'engage à vous offrir une expérience de location de voiture exceptionnelle au Maroc.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-navy-light/30 backdrop-blur-sm rounded-2xl p-8 border border-gold/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-navy-dark" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/60">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import { cars } from '@/data/cars';
import CarCard from './CarCard';

const Fleet = () => {
  return (
    <section id="fleet" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold tracking-widest uppercase text-sm">Notre Collection</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Choisissez Votre Véhicule
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une flotte variée de véhicules récents et bien entretenus pour répondre à tous vos besoins de déplacement.
          </p>
        </div>

        {/* Cars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;

import { Phone, Users, Fuel, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Car, WHATSAPP_URL } from '@/data/cars';

interface CarCardProps {
  car: Car;
  index: number;
}

const CarCard = ({ car, index }: CarCardProps) => {
  const categoryLabels = {
    economy: 'Économique',
    compact: 'Compact',
    suv: 'SUV',
    premium: 'Premium',
  };

  const categoryColors = {
    economy: 'bg-green-500/10 text-green-600',
    compact: 'bg-blue-500/10 text-blue-600',
    suv: 'bg-orange-500/10 text-orange-600',
    premium: 'bg-gold/20 text-gold',
  };

  return (
    <div 
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-muted">
        <img 
          src={car.image} 
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Category badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[car.category]}`}>
          {categoryLabels[car.category]}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-card-foreground mb-3">{car.name}</h3>
        
        {/* Features */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <Users className="h-4 w-4" />
            <span>{car.seats} places</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <Settings className="h-4 w-4" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            <Fuel className="h-4 w-4" />
            <span>{car.fuel}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="text-2xl font-bold text-gold">{car.pricePerDay}</span>
            <span className="text-muted-foreground text-sm"> DH/jour</span>
          </div>
          <a href={`https://wa.me/212664550547?text=Bonjour, je souhaite réserver la ${car.name}`} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="sm" className="rounded-full">
              <Phone className="h-4 w-4 mr-2" />
              Réserver
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

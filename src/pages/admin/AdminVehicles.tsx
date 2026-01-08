import { cars } from '@/data/cars';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Fuel, Users, Settings } from 'lucide-react';

const AdminVehicles = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Véhicules</h1>
        <p className="text-muted-foreground">
          Aperçu de votre flotte de véhicules
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <Card key={car.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-3 right-3 bg-primary">
                {car.category}
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-between">
                <span>{car.name}</span>
                <span className="text-primary font-bold">{car.pricePerDay} DH/jour</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{car.seats} places</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Settings className="h-4 w-4" />
                  <span>{car.transmission}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Fuel className="h-4 w-4" />
                  <span>{car.fuel}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminVehicles;

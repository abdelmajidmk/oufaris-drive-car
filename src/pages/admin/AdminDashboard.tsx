import { useReservations } from '@/hooks/useReservations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, Car, TrendingUp, Clock, Users } from 'lucide-react';
import { format, subDays, isAfter } from 'date-fns';
import { fr } from 'date-fns/locale';

const AdminDashboard = () => {
  const { data: reservations, isLoading } = useReservations();

  const today = new Date();
  const todayStr = today.toDateString();
  
  const todayReservations = reservations?.filter(r => 
    new Date(r.created_at).toDateString() === todayStr
  ).length || 0;

  const weekReservations = reservations?.filter(r => 
    isAfter(new Date(r.created_at), subDays(today, 7))
  ).length || 0;

  const totalReservations = reservations?.length || 0;

  const popularCar = reservations?.reduce((acc, r) => {
    acc[r.car_name] = (acc[r.car_name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const mostPopular = popularCar 
    ? Object.entries(popularCar).sort((a, b) => b[1] - a[1])[0]
    : null;

  const recentReservations = reservations?.slice(0, 5) || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Tableau de bord</h1>
        <p className="text-muted-foreground">
          Bienvenue dans votre espace d'administration
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Réservations
            </CardTitle>
            <CalendarDays className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{isLoading ? '...' : totalReservations}</div>
            <p className="text-xs text-muted-foreground mt-1">Depuis le début</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Aujourd'hui
            </CardTitle>
            <Clock className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{isLoading ? '...' : todayReservations}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {format(today, 'EEEE d MMMM', { locale: fr })}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Cette semaine
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{isLoading ? '...' : weekReservations}</div>
            <p className="text-xs text-muted-foreground mt-1">7 derniers jours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Voiture Populaire
            </CardTitle>
            <Car className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold truncate">
              {isLoading ? '...' : mostPopular ? mostPopular[0] : 'N/A'}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {mostPopular ? `${mostPopular[1]} réservations` : 'Aucune donnée'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reservations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Dernières réservations
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">Chargement...</div>
          ) : recentReservations.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              Aucune réservation pour le moment
            </div>
          ) : (
            <div className="space-y-3">
              {recentReservations.map((reservation) => (
                <div 
                  key={reservation.id} 
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Car className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{reservation.car_name}</p>
                      <p className="text-sm text-muted-foreground">
                        {reservation.car_category || 'Non catégorisé'}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">
                      {format(new Date(reservation.created_at), 'dd MMM yyyy', { locale: fr })}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {format(new Date(reservation.created_at), 'HH:mm', { locale: fr })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;

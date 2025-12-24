import { useReservations } from '@/hooks/useReservations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, Car, TrendingUp, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const { data: reservations, isLoading, error } = useReservations();

  const todayReservations = reservations?.filter(r => {
    const today = new Date().toDateString();
    return new Date(r.created_at).toDateString() === today;
  }).length || 0;

  const totalReservations = reservations?.length || 0;

  const popularCar = reservations?.reduce((acc, r) => {
    acc[r.car_name] = (acc[r.car_name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const mostPopular = popularCar 
    ? Object.entries(popularCar).sort((a, b) => b[1] - a[1])[0]?.[0] 
    : 'N/A';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard Réservations</h1>
            <p className="text-muted-foreground text-sm">Gérez vos demandes de réservation</p>
          </div>
          <Link to="/">
            <Button variant="outline">Retour au site</Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Réservations
              </CardTitle>
              <CalendarDays className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{totalReservations}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Aujourd'hui
              </CardTitle>
              <Clock className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{todayReservations}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Voiture Populaire
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-foreground truncate">{mostPopular}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Source
              </CardTitle>
              <Car className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">WhatsApp</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Reservations Table */}
        <Card>
          <CardHeader>
            <CardTitle>Historique des Réservations</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8 text-muted-foreground">Chargement...</div>
            ) : error ? (
              <div className="text-center py-8 text-destructive">Erreur de chargement</div>
            ) : reservations?.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                Aucune réservation pour le moment
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Heure</TableHead>
                      <TableHead>Voiture</TableHead>
                      <TableHead>Catégorie</TableHead>
                      <TableHead>Source</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reservations?.map((reservation) => (
                      <TableRow key={reservation.id}>
                        <TableCell>
                          {format(new Date(reservation.created_at), 'dd MMM yyyy', { locale: fr })}
                        </TableCell>
                        <TableCell>
                          {format(new Date(reservation.created_at), 'HH:mm', { locale: fr })}
                        </TableCell>
                        <TableCell className="font-medium">{reservation.car_name}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{reservation.car_category || 'N/A'}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-500 hover:bg-green-600">
                            {reservation.source || 'WhatsApp'}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;

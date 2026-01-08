import { useState } from 'react';
import { useReservations } from '@/hooks/useReservations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarDays, Search, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useQueryClient } from '@tanstack/react-query';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

const AdminReservations = () => {
  const { data: reservations, isLoading, error } = useReservations();
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const filteredReservations = reservations?.filter(r =>
    r.car_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (r.car_category && r.car_category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('reservations')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer la réservation",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Succès",
        description: "Réservation supprimée",
      });
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Réservations</h1>
          <p className="text-muted-foreground">
            Gérez toutes les demandes de réservation
          </p>
        </div>
        <Badge variant="secondary" className="text-lg px-4 py-2">
          <CalendarDays className="h-4 w-4 mr-2" />
          {reservations?.length || 0} total
        </Badge>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher par voiture ou catégorie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Historique des réservations</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">Chargement...</div>
          ) : error ? (
            <div className="text-center py-8 text-destructive">Erreur de chargement</div>
          ) : filteredReservations?.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {searchTerm ? 'Aucun résultat trouvé' : 'Aucune réservation pour le moment'}
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
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredReservations?.map((reservation) => (
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
                      <TableCell className="text-right">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Supprimer cette réservation ?</AlertDialogTitle>
                              <AlertDialogDescription>
                                Cette action est irréversible. La réservation pour "{reservation.car_name}" sera définitivement supprimée.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Annuler</AlertDialogCancel>
                              <AlertDialogAction 
                                onClick={() => handleDelete(reservation.id)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Supprimer
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminReservations;

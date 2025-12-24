import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Reservation {
  id: string;
  car_name: string;
  car_category: string | null;
  created_at: string;
  source: string | null;
}

export const useReservations = () => {
  return useQuery({
    queryKey: ['reservations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('reservations')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Reservation[];
    },
  });
};

export const saveReservation = async (carName: string, carCategory?: string) => {
  const { error } = await supabase
    .from('reservations')
    .insert({
      car_name: carName,
      car_category: carCategory,
      source: 'whatsapp'
    });
  
  if (error) {
    console.error('Error saving reservation:', error);
  }
};

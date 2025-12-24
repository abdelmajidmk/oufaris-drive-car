-- Create reservations table to store all booking requests
CREATE TABLE public.reservations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  car_name TEXT NOT NULL,
  car_category TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  source TEXT DEFAULT 'whatsapp'
);

-- Enable Row Level Security
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert reservations (public form)
CREATE POLICY "Anyone can insert reservations" 
ON public.reservations 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to read reservations (for dashboard - will add auth later)
CREATE POLICY "Anyone can view reservations" 
ON public.reservations 
FOR SELECT 
USING (true);

-- Enable realtime for reservations
ALTER PUBLICATION supabase_realtime ADD TABLE public.reservations;
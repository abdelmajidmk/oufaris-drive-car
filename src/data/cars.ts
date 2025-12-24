import i20 from '@/assets/cars/i20.jpg';
import corsa from '@/assets/cars/corsa.jpg';
import tucson from '@/assets/cars/tucson.jpg';
import golf8 from '@/assets/cars/golf8.jpg';
import troc from '@/assets/cars/troc.jpg';
import accent from '@/assets/cars/accent.jpg';
import clio5 from '@/assets/cars/clio5.jpg';
import peugeot208 from '@/assets/cars/peugeot208.jpg';

export interface Car {
  id: string;
  name: string;
  image: string;
  pricePerDay: number;
  category: 'economy' | 'compact' | 'suv' | 'premium';
  seats: number;
  transmission: 'Manuelle' | 'Automatique';
  fuel: 'Essence' | 'Diesel';
}

export const cars: Car[] = [
  {
    id: '1',
    name: 'Hyundai i20',
    image: i20,
    pricePerDay: 300,
    category: 'economy',
    seats: 5,
    transmission: 'Manuelle',
    fuel: 'Essence',
  },
  {
    id: '2',
    name: 'Opel Corsa',
    image: corsa,
    pricePerDay: 300,
    category: 'compact',
    seats: 5,
    transmission: 'Manuelle',
    fuel: 'Essence',
  },
  {
    id: '3',
    name: 'Hyundai Tucson',
    image: tucson,
    pricePerDay: 600,
    category: 'suv',
    seats: 5,
    transmission: 'Automatique',
    fuel: 'Diesel',
  },
  {
    id: '4',
    name: 'Volkswagen Golf 8',
    image: golf8,
    pricePerDay: 700,
    category: 'premium',
    seats: 5,
    transmission: 'Automatique',
    fuel: 'Essence',
  },
  {
    id: '5',
    name: 'Volkswagen T-Roc',
    image: troc,
    pricePerDay: 600,
    category: 'suv',
    seats: 5,
    transmission: 'Automatique',
    fuel: 'Diesel',
  },
  {
    id: '6',
    name: 'Hyundai Accent',
    image: accent,
    pricePerDay: 300,
    category: 'economy',
    seats: 5,
    transmission: 'Manuelle',
    fuel: 'Essence',
  },
  {
    id: '7',
    name: 'Renault Clio 5',
    image: clio5,
    pricePerDay: 300,
    category: 'compact',
    seats: 5,
    transmission: 'Manuelle',
    fuel: 'Essence',
  },
  {
    id: '8',
    name: 'Peugeot 208',
    image: peugeot208,
    pricePerDay: 300,
    category: 'compact',
    seats: 5,
    transmission: 'Manuelle',
    fuel: 'Essence',
  },
];

export const PHONE_NUMBER = '+212664550547';
export const INSTAGRAM_URL = 'https://www.instagram.com/oufarisdrivecar/';
export const WHATSAPP_URL = 'https://wa.me/212664550547?text=Bonjour, je souhaite réserver un véhicule';

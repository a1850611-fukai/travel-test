import { DaySchedule } from './types';
import { Plane, Train, Ship, Utensils, MapPin, Camera, ShoppingBag, Moon, Sun } from 'lucide-react';

export const ITINERARY: DaySchedule[] = [
  {
    date: 'Dec 3',
    dayLabel: 'Day 1',
    activities: [
      {
        id: 'd1-1',
        time: '12:00',
        title: 'Arrival in Bangkok',
        description: 'Arrive at Bangkok City Center. Check-in and refresh.',
        location: 'Bangkok City Center',
        type: 'transport',
        details: 'Flight: BR201\nHotel: The Siam Heritage\nBooking Ref: #TH123456',
        imageUrl: 'https://picsum.photos/400/200?random=1'
      },
      {
        id: 'd1-2',
        time: '14:00',
        title: 'Historic Tour',
        description: 'Blue Tourist Boat to Grand Palace, Emerald Buddha, and Wat Pho.',
        location: 'The Grand Palace',
        type: 'sightseeing',
        details: 'Entrance Fee: 500 THB\nDress Code: No shorts or sleeveless shirts.',
        imageUrl: 'https://picsum.photos/400/200?random=2'
      },
      {
        id: 'd1-3',
        time: '18:00',
        title: 'Wat Arun Sunset',
        description: 'Enjoy the stunning night view of the Temple of Dawn.',
        location: 'Wat Arun',
        type: 'sightseeing',
        details: 'Best viewed from the opposite side of the river at a rooftop bar.',
        imageUrl: 'https://picsum.photos/400/200?random=3'
      },
      {
        id: 'd1-4',
        time: '20:00',
        title: 'Dinner at Talat Phlu',
        description: 'Take MRT to Talat Phlu Food Market for authentic street food.',
        location: 'Talat Phlu Market',
        type: 'food',
        imageUrl: 'https://picsum.photos/400/200?random=4'
      }
    ]
  },
  {
    date: 'Dec 4',
    dayLabel: 'Day 2',
    activities: [
      {
        id: 'd2-1',
        time: '09:00',
        title: 'Ayutthaya Ancient City',
        description: 'Mini van to Ayutthaya. Visit Wat Mahathat (Buddha head in roots) & Wat Chaiwatthanaram.',
        location: 'Ayutthaya Historical Park',
        type: 'sightseeing',
        details: 'Mini Van Station: Mo Chit New Van Terminal.',
        imageUrl: 'https://picsum.photos/400/200?random=5'
      },
      {
        id: 'd2-2',
        time: '13:00',
        title: 'Temple Exploring',
        description: 'Visit Wat Phra Si Sanphet and Wat Ratchaburana.',
        location: 'Wat Phra Si Sanphet',
        type: 'sightseeing',
        imageUrl: 'https://picsum.photos/400/200?random=6'
      },
      {
        id: 'd2-3',
        time: '16:00',
        title: 'Train to Don Mueang',
        description: 'Experience local train travel back towards Bangkok.',
        location: 'Ayutthaya Railway Station',
        type: 'transport',
        imageUrl: 'https://picsum.photos/400/200?random=7'
      },
      {
        id: 'd2-4',
        time: '19:00',
        title: 'Save One Go Night Market',
        description: 'Grab taxi to the vibrant night market near Jodd Fairs.',
        location: 'Save One Go Night Market',
        type: 'food',
        imageUrl: 'https://picsum.photos/400/200?random=8'
      }
    ]
  },
  {
    date: 'Dec 5',
    dayLabel: 'Day 3',
    activities: [
      {
        id: 'd3-1',
        time: '08:00',
        title: 'Elephant Sanctuary',
        description: 'Chartered car to Somboon Legacy Foundation. Hands-off ethical experience.',
        location: 'Somboon Legacy Foundation',
        type: 'sightseeing',
        details: 'Booking confirmed for 2 people.\nBring: Sunscreen, bug spray.',
        imageUrl: 'https://picsum.photos/400/200?random=9'
      }
    ]
  },
  {
    date: 'Dec 6',
    dayLabel: 'Day 4',
    activities: [
      {
        id: 'd4-1',
        time: '07:30',
        title: 'Floating & Railway Markets',
        description: 'Chartered car day trip to Damnoen Saduak and Maeklong Railway Market.',
        location: 'Damnoen Saduak Floating Market',
        type: 'sightseeing',
        imageUrl: 'https://picsum.photos/400/200?random=10'
      },
      {
        id: 'd4-2',
        time: '14:00',
        title: 'Amphawa Floating Market',
        description: 'Afternoon relax at the more authentic Amphawa market.',
        location: 'Amphawa Floating Market',
        type: 'relax',
        imageUrl: 'https://picsum.photos/400/200?random=11'
      }
    ]
  },
  {
    date: 'Dec 7',
    dayLabel: 'Day 5',
    activities: [
      {
        id: 'd5-1',
        time: '10:00',
        title: 'The Ancient City',
        description: 'BTS to Kheha station, then taxi. Explore Thailand in miniature.',
        location: 'The Ancient City (Muang Boran)',
        type: 'sightseeing',
        details: 'Rent a golf cart for easier travel inside.',
        imageUrl: 'https://picsum.photos/400/200?random=12'
      },
      {
        id: 'd5-2',
        time: '18:00',
        title: 'Train Night Market',
        description: 'Grab taxi to Srinakarin Train Night Market for vintage vibes.',
        location: 'Srinakarin Train Night Market',
        type: 'shopping',
        imageUrl: 'https://picsum.photos/400/200?random=13'
      }
    ]
  },
  {
    date: 'Dec 8',
    dayLabel: 'Day 6',
    activities: [
      {
        id: 'd6-1',
        time: '11:00',
        title: 'Seafood Feast',
        description: 'Grab to Thonburi Seafood Market. Pick fresh seafood and have it cooked.',
        location: 'Thonburi Market Place',
        type: 'food',
        imageUrl: 'https://picsum.photos/400/200?random=14'
      },
      {
        id: 'd6-2',
        time: '14:00',
        title: 'Shopping at Big C',
        description: 'Last minute souvenir shopping.',
        location: 'Big C Supercenter Ratchadamri',
        type: 'shopping',
        imageUrl: 'https://picsum.photos/400/200?random=15'
      },
      {
        id: 'd6-3',
        time: '18:00',
        title: 'Bhawa Spa',
        description: 'Relaxing spa session before departure.',
        location: 'Bhawa Spa on the Eight',
        type: 'relax',
        details: 'Reservation: 18:00 - 21:00\nPackage: Aromatherapy Massage',
        imageUrl: 'https://picsum.photos/400/200?random=16'
      }
    ]
  }
];

export const ActivityIcons: Record<string, any> = {
  transport: Plane,
  food: Utensils,
  sightseeing: Camera,
  hotel: Moon,
  shopping: ShoppingBag,
  relax: Sun,
};

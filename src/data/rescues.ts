export interface Rescue {
  id: string;
  place: string;
  item: string;
  kg: number;
  to: string;
  timeAgo: string;
}

export const RESCUE_TICKER_ITEMS: Rescue[] = [
  {
    id: 'res-1',
    place: 'Spice Route Kitchen',
    item: '18 warm biryani & curry meals',
    kg: 7.5,
    to: 'Asha Nilaya Shelter',
    timeAgo: '12 min ago'
  },
  {
    id: 'res-2',
    place: 'Bengaluru Bakers',
    item: '45 fresh artisanal sourdough loaves',
    kg: 18.0,
    to: 'Mother Teresa Home',
    timeAgo: '28 min ago'
  },
  {
    id: 'res-3',
    place: 'Grand Palace Hotel Banquet',
    item: '120 portions vegetarian buffet',
    kg: 50.0,
    to: 'City Food Relief Kitchen',
    timeAgo: '42 min ago'
  },
  {
    id: 'res-4',
    place: 'Green Leaf Organic Market',
    item: '32 kg crisp surplus apples & greens',
    kg: 32.0,
    to: 'Indiranagar Community Pantry',
    timeAgo: '1 hr ago'
  },
  {
    id: 'res-5',
    place: 'Tech Park Cafe 4',
    item: '65 boxed wholesome lunch combos',
    kg: 26.0,
    to: 'Hope Mission Care Home',
    timeAgo: '2 hr ago'
  }
];

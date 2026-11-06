export interface Story {
  id: string;
  name: string;
  role: string;
  org: string;
  location: string;
  quote: string;
  outcome: string;
  initials: string;
  badge: string;
}

export const STORIES: Story[] = [
  {
    id: 'story-meera',
    name: 'Meera Nair',
    role: 'Founder & Head Chef',
    org: 'Spice Route Kitchen',
    location: 'Indiranagar, Bengaluru',
    quote: "We used to throw away 15–20 kg of aromatic biryani and fresh gravies after Saturday night service. MealMate changed that completely. Now, within 35 minutes of clicking donate, an insulated van arrives and the food reaches night shelters before 10 PM.",
    outcome: 'Fed 140 people last month',
    initials: 'MN',
    badge: 'Restaurant Donor'
  },
  {
    id: 'story-arjun',
    name: 'Arjun Rao',
    role: 'Operations Coordinator',
    org: 'Annapurna Seva Trust',
    location: 'Shivajinagar Kitchen Hub',
    quote: "Predictable surplus alerts eliminated the chaos of midnight phone calls. We know the exact dish type, temperature, and quantity before dispatching our team. We've scaled our evening feeding program by 40% without spending an extra rupee on procurement.",
    outcome: '3,200 hot meals distributed',
    initials: 'AR',
    badge: 'NGO Kitchen Partner'
  },
  {
    id: 'story-priya',
    name: 'Priya Menon',
    role: 'Volunteer Dispatcher',
    org: 'Student Volunteer Chapter',
    location: 'Koramangala Community Hub',
    quote: "All it takes is a 20-minute scooter run between an event catering venue and the elder care home nearby. It is easily the most rewarding thing I do on weekends. Seeing the relief on caretakers' faces is unforgettable.",
    outcome: '48 weekend rescue runs',
    initials: 'PM',
    badge: 'Youth Volunteer'
  }
];

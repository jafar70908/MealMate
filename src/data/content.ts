export interface NavLink {
  id: string;
  name: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: 'problem', name: 'The Problem', href: '#problem' },
  { id: 'solution', name: 'Our Solution', href: '#solution' },
  { id: 'how-it-works', name: 'How It Works', href: '#how-it-works' },
  { id: 'features', name: 'Features', href: '#features' },
  { id: 'impact', name: 'Impact', href: '#impact' },
  { id: 'stories', name: 'Stories', href: '#stories' },
];

export const HERO_CONTENT = {
  eyebrow: "Stop Food Waste",
  headline: "No meal left behind.",
  subheadline: "MealMate connects restaurants, events, and households with NGOs and communities, turning today's surplus into tonight's dinner.",
  ctaPrimary: "Donate food",
  ctaSecondary: "See how it works",
  trustChips: [
    { text: "Free for donors", icon: "Gift" },
    { text: "Verified NGO partners", icon: "ShieldCheck" },
    { text: "Pickup within the hour (sample)", icon: "Clock" }
  ]
};

export const PROBLEM_CONTENT = {
  eyebrow: "The Food Waste Paradox",
  heading: "While one plate is scraped into the bin, another stays empty.",
  description: "Every day, tons of fresh, wholesome food is lost across kitchens and catering halls simply due to broken coordination, while vulnerable families in our neighborhoods go hungry.",
  pivot: "It does not have to be this way."
};

export const SOLUTION_CONTENT = {
  eyebrow: "A Connected Ecosystem",
  heading: "A bridge between surplus and need.",
  description: "We replace fragmented phone trees and urgent guesswork with a reliable digital bridge that turns surplus food into dignity and hot meals.",
  promises: [
    {
      id: "promise-1",
      number: "01",
      title: "List in 60 seconds",
      body: "Snap, type the quantity, set a pickup window. Zero complex logistics.",
      badge: "Fast & Frictionless"
    },
    {
      id: "promise-2",
      number: "02",
      title: "Matched to a verified NGO nearby",
      body: "Hyperlocal routing instantly notifies the closest verified shelter or community kitchen.",
      badge: "Hyperlocal Routing"
    },
    {
      id: "promise-3",
      number: "03",
      title: "Delivered with a visible impact receipt",
      body: "Receive live photo proof, exact kilograms diverted, and carbon reduction calculated.",
      badge: "100% Traceable"
    }
  ]
};

export const HOW_IT_WORKS_STEPS = [
  {
    id: 1,
    title: "List your surplus",
    timing: "Takes 60 seconds",
    body: "Enter food type, estimated quantity, and your preferred pickup window. Our smart helper translates kilograms into meal equivalents instantly.",
    actionHint: "Quick form on mobile or desktop"
  },
  {
    id: 2,
    title: "Smart local match",
    timing: "Instant automated dispatch",
    body: "Our dispatch engine pings vetted NGO community kitchens within a 5 km radius based on real-time feeding capacity and cold storage readiness.",
    actionHint: "Vetted shelter coordination"
  },
  {
    id: 3,
    title: "Pickup coordinated",
    timing: "Under 45 minutes",
    body: "A designated volunteer or courier arrives with insulated carriers, conducts the standard food safety check, and confirms pickup with a digital signature.",
    actionHint: "Food safety checklist verified"
  },
  {
    id: 4,
    title: "Served & receipted",
    timing: "Same-evening distribution",
    body: "Surplus is served fresh while hot. Donors receive an automated Impact Receipt showing verified distribution photos, meals served, and CO2e spared.",
    actionHint: "Transparent digital receipt"
  }
];

export const FEATURES_CONTENT = {
  eyebrow: "Engineered For Impact",
  heading: "Built for speed, safety and zero friction.",
  description: "Designed from the ground up to solve the real logistical hurdles that keep donors from giving and NGOs from receiving.",
  items: [
    {
      id: "feat-1",
      title: "Easy Food Donation",
      body: "List fresh surplus in three simple steps. Intuitive quantity sliders and automated pickup time suggestions keep preparation under a minute.",
      badge: "Donor Experience",
      isLarge: true
    },
    {
      id: "feat-2",
      title: "NGO Partnerships",
      body: "All recipient kitchens undergo strict verification, food hygiene accreditation, and continuous capacity audits.",
      badge: "Vetted Network",
      isLarge: false
    },
    {
      id: "feat-3",
      title: "Pickup Coordination",
      body: "Real-time volunteer and courier dispatch routing with live status tracking and arrival notifications.",
      badge: "Rapid Dispatch",
      isLarge: false
    },
    {
      id: "feat-4",
      title: "Community Participation",
      body: "Hyperlocal neighborhood volunteer network that turns idle weekend hours into vital meal delivery lifelines.",
      badge: "Volunteer Hub",
      isLarge: false
    }
  ],
  supportingBadges: [
    { label: "Food-safety checklist", description: "Strict temperature and holding time safety protocols" },
    { label: "Impact receipts", description: "Verifiable certificates with tax exemption support" }
  ]
};

export const CTA_CONTENT = {
  heading: "Your leftovers could be someone's dinner.",
  subheading: "Join hundreds of conscious restaurants, bakers, volunteers, and kitchens bridging the divide between excess and empty plates.",
  cards: [
    {
      id: "donate",
      type: "primary",
      title: "Donate food",
      badge: "For Kitchens & Donors",
      description: "Have surplus from today's service, event, or buffet? List it in 60 seconds and our verified NGO network handles the rest.",
      actionLabel: "Donate Surplus Now",
      subtext: "Free for donors • No paperwork required"
    },
    {
      id: "volunteer",
      type: "secondary",
      title: "Volunteer with us",
      badge: "For Individuals & Students",
      description: "Help coordinate local pickups, transport insulated containers, or assist community kitchens in your neighborhood.",
      actionLabel: "Become a Volunteer",
      subtext: "Flexible 1-2 hour shifts on weekends"
    },
    {
      id: "partner",
      type: "secondary",
      title: "Partner as an NGO",
      badge: "For Kitchens & Shelters",
      description: "Receive timely, scheduled surplus alerts tailored to your community shelter's daily feeding capacity.",
      actionLabel: "Register Your Kitchen",
      subtext: "Free access to surplus food network"
    }
  ]
};

export const FOOTER_CONTENT = {
  tagline: "No meal left behind.",
  mission: "MealMate is a community-driven initiative connecting food donors with local NGOs to eliminate hunger and cut greenhouse emissions from food waste.",
  eventCredit: "Built for AI Prompt Battle by OSCode",
  copyright: `© ${new Date().getFullYear()} MealMate. All rights reserved.`,
  contactEmail: "hello@mealmate.example",
  phone: "+91 (800) 246-FOOD",
  address: "Koramangala, Bengaluru, Karnataka 560034",
  sources: [
    { name: "FAO / UN — Food Loss and Waste", url: "https://www.fao.org/food-loss-and-food-waste/flw-data" },
    { name: "UNEP Food Waste Index Report 2024", url: "https://www.unep.org/resources/publication/food-waste-index-report-2024" },
    { name: "FAO The State of Food Security and Nutrition (SOFI)", url: "https://www.fao.org/publications/sofi/en/" }
  ]
};

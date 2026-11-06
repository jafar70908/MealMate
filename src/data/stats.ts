export interface ProblemStat {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
  source: string;
  sourceUrl: string;
  tag: string;
}

export const PROBLEM_STATS: ProblemStat[] = [
  {
    id: 'stat-wasted',
    value: 33,
    suffix: '%',
    label: 'Food Produced is Lost or Wasted',
    description: 'Roughly one out of every three plates prepared globally is discarded before reaching anyone.',
    source: 'FAO / United Nations',
    sourceUrl: 'https://www.fao.org/food-loss-and-food-waste',
    tag: 'Global Scale'
  },
  {
    id: 'stat-tonnes',
    value: 1.05,
    suffix: 'B tonnes',
    label: 'Annual Food Discarded',
    description: 'Over 1 billion tonnes of edible sustenance squandered each year, majority at retail & consumer levels.',
    source: 'UNEP Food Waste Index 2024',
    sourceUrl: 'https://www.unep.org/resources/publication/food-waste-index-report-2024',
    tag: 'Report 2024'
  },
  {
    id: 'stat-hunger',
    value: 735,
    suffix: 'M+',
    label: 'People Still Facing Hunger',
    description: 'Chronic malnutrition persists while sufficient food is manufactured to feed 1.5x the human population.',
    source: 'FAO SOFI Report',
    sourceUrl: 'https://www.fao.org/publications/sofi',
    tag: 'Human Cost'
  }
];

export interface ImpactData {
  meals: number;
  tonnesSaved: number;
  co2eTonnes: number;
  ngos: number;
  volunteers: number;
  isPilotData: boolean;
}

export const IMPACT_METRICS: ImpactData = {
  meals: 48650,
  tonnesSaved: 20.3,
  co2eTonnes: 50.8,
  ngos: 120,
  volunteers: 1840,
  isPilotData: true
};

export const MONTHLY_IMPACT_HISTORY = [
  { month: 'Jun', meals: 2400, tonnes: 1.0 },
  { month: 'Jul', meals: 4100, tonnes: 1.7 },
  { month: 'Aug', meals: 6800, tonnes: 2.8 },
  { month: 'Sep', meals: 9500, tonnes: 4.0 },
  { month: 'Oct', meals: 12400, tonnes: 5.2 },
  { month: 'Nov', meals: 13450, tonnes: 5.6 }
];

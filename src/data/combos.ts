
// All available card types
export type CardType = 
  | "Shooting" 
  | "Passing" 
  | "Dribbling" 
  | "Speed" 
  | "Stamina" 
  | "Strength" 
  | "Jumping" 
  | "Tackling" 
  | "Catching" 
  | "Blocking";

// Stats that can be improved
export type StatType = 
  | "Speed" 
  | "Power" 
  | "Technique" 
  | "Stamina" 
  | "IQ";

// Interface for card requirements of a combo
export interface CardRequirement {
  type: CardType;
  quantity: number;
}

// Interface for a training combo
export interface TrainingCombo {
  id: string;
  name: string;
  cards: CardRequirement[];
  stats: {
    [key in StatType]?: number;
  };
}

// Collection of all training combos
export const trainingCombos: TrainingCombo[] = [
  {
    id: "combo1",
    name: "Basic Shooting Drill",
    cards: [
      { type: "Shooting", quantity: 3 },
    ],
    stats: {
      Technique: 1,
      Power: 1,
    }
  },
  {
    id: "combo2",
    name: "Passing Practice",
    cards: [
      { type: "Passing", quantity: 3 },
    ],
    stats: {
      Technique: 2,
    }
  },
  {
    id: "combo3",
    name: "Speed Training",
    cards: [
      { type: "Speed", quantity: 2 },
      { type: "Stamina", quantity: 1 },
    ],
    stats: {
      Speed: 2,
      Stamina: 1,
    }
  },
  {
    id: "combo4",
    name: "Power Development",
    cards: [
      { type: "Strength", quantity: 2 },
      { type: "Jumping", quantity: 1 },
    ],
    stats: {
      Power: 3,
    }
  },
  {
    id: "combo5",
    name: "Technical Mastery",
    cards: [
      { type: "Dribbling", quantity: 2 },
      { type: "Passing", quantity: 2 },
    ],
    stats: {
      Technique: 3,
      IQ: 1,
    }
  },
  {
    id: "combo6",
    name: "Defensive Block",
    cards: [
      { type: "Tackling", quantity: 2 },
      { type: "Blocking", quantity: 2 },
    ],
    stats: {
      Power: 2,
      Technique: 1,
      IQ: 1,
    }
  },
  {
    id: "combo7",
    name: "Goalkeeper Training",
    cards: [
      { type: "Catching", quantity: 2 },
      { type: "Blocking", quantity: 1 },
      { type: "Jumping", quantity: 1 },
    ],
    stats: {
      Technique: 2,
      IQ: 2,
    }
  },
  {
    id: "combo8",
    name: "Complete Athlete",
    cards: [
      { type: "Speed", quantity: 1 },
      { type: "Stamina", quantity: 1 },
      { type: "Strength", quantity: 1 },
      { type: "Jumping", quantity: 1 },
    ],
    stats: {
      Speed: 1,
      Power: 1,
      Stamina: 2,
    }
  },
  {
    id: "combo9",
    name: "Advanced Playmaker",
    cards: [
      { type: "Passing", quantity: 3 },
      { type: "Dribbling", quantity: 1 },
    ],
    stats: {
      Technique: 3,
      IQ: 2,
    }
  },
  {
    id: "combo10",
    name: "Striker Training",
    cards: [
      { type: "Shooting", quantity: 2 },
      { type: "Speed", quantity: 1 },
      { type: "Strength", quantity: 1 },
    ],
    stats: {
      Power: 2,
      Speed: 1,
      Technique: 1,
    }
  },
  {
    id: "combo11",
    name: "Box-to-Box Midfielder",
    cards: [
      { type: "Stamina", quantity: 2 },
      { type: "Tackling", quantity: 1 },
      { type: "Passing", quantity: 1 },
    ],
    stats: {
      Stamina: 3,
      IQ: 1,
    }
  },
  {
    id: "combo12",
    name: "Wing Play",
    cards: [
      { type: "Speed", quantity: 2 },
      { type: "Dribbling", quantity: 2 },
    ],
    stats: {
      Speed: 2,
      Technique: 2,
    }
  },
];

export const allCardTypes: CardType[] = [
  "Shooting", 
  "Passing", 
  "Dribbling", 
  "Speed", 
  "Stamina", 
  "Strength", 
  "Jumping", 
  "Tackling", 
  "Catching", 
  "Blocking"
];

export const allStatTypes: StatType[] = [
  "Speed", 
  "Power", 
  "Technique", 
  "Stamina", 
  "IQ"
];

export const cardColors: Record<CardType, string> = {
  "Shooting": "bg-npfc-red",
  "Passing": "bg-npfc-blue",
  "Dribbling": "bg-npfc-blue",
  "Speed": "bg-npfc-yellow",
  "Stamina": "bg-npfc-green",
  "Strength": "bg-npfc-red",
  "Jumping": "bg-npfc-yellow",
  "Tackling": "bg-npfc-purple",
  "Catching": "bg-npfc-blue",
  "Blocking": "bg-npfc-purple"
};

export const statColors: Record<StatType, string> = {
  "Speed": "stat-badge-speed",
  "Power": "stat-badge-power",
  "Technique": "stat-badge-technique",
  "Stamina": "stat-badge-stamina",
  "IQ": "stat-badge-iq"
};

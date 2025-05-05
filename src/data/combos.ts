
// All card categories
export type CardCategory = 
  | "Tactical" 
  | "Technical" 
  | "Physical" 
  | "Support";

// All available card types
export type CardType = 
  // Tactical cards
  | "Analysis" 
  | "Marking" 
  | "Pressuring" 
  | "Countering" 
  | "Mini-Game" 
  | "Line Control" 
  | "Set Play"
  // Technical cards
  | "Dribbling" 
  | "Place Kicks" 
  | "Shooting" 
  | "Passing" 
  | "Freestyle" 
  | "Sliding" 
  | "Heading"
  // Physical cards
  | "Running" 
  | "Weights" 
  | "Kicking" 
  | "Sprinting" 
  | "Agility" 
  | "Aerobics" 
  | "Stretching"
  // Support cards
  | "Oil Therapy" 
  | "Meditation" 
  | "Signing" 
  | "PK Practice" 
  | "Judo" 
  | "Visualising" 
  | "Meeting" 
  | "Spa" 
  | "Mini Camp" 
  | "Gaming" 
  | "Karaoke";

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

// Map each card to its category
export const cardToCategory: Record<CardType, CardCategory> = {
  // Tactical cards
  "Analysis": "Tactical",
  "Marking": "Tactical",
  "Pressuring": "Tactical",
  "Countering": "Tactical",
  "Mini-Game": "Tactical",
  "Line Control": "Tactical",
  "Set Play": "Tactical",
  
  // Technical cards
  "Dribbling": "Technical",
  "Place Kicks": "Technical",
  "Shooting": "Technical",
  "Passing": "Technical",
  "Freestyle": "Technical",
  "Sliding": "Technical",
  "Heading": "Technical",
  
  // Physical cards
  "Running": "Physical",
  "Weights": "Physical",
  "Kicking": "Physical",
  "Sprinting": "Physical",
  "Agility": "Physical",
  "Aerobics": "Physical",
  "Stretching": "Physical",
  
  // Support cards
  "Oil Therapy": "Support",
  "Meditation": "Support",
  "Signing": "Support",
  "PK Practice": "Support",
  "Judo": "Support",
  "Visualising": "Support",
  "Meeting": "Support",
  "Spa": "Support",
  "Mini Camp": "Support",
  "Gaming": "Support",
  "Karaoke": "Support"
};

// Collection of all training combos
export const trainingCombos: TrainingCombo[] = [
  {
    id: "combo1",
    name: "Basic Shooting Training",
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
    name: "Speed Development",
    cards: [
      { type: "Running", quantity: 2 },
      { type: "Sprinting", quantity: 1 },
    ],
    stats: {
      Speed: 2,
      Stamina: 1,
    }
  },
  {
    id: "combo4",
    name: "Power Enhancement",
    cards: [
      { type: "Weights", quantity: 2 },
      { type: "Kicking", quantity: 1 },
    ],
    stats: {
      Power: 3,
    }
  },
  {
    id: "combo5",
    name: "Technical Skills",
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
    name: "Defensive Training",
    cards: [
      { type: "Marking", quantity: 2 },
      { type: "Sliding", quantity: 2 },
    ],
    stats: {
      Power: 2,
      Technique: 1,
      IQ: 1,
    }
  },
  {
    id: "combo7",
    name: "Goalkeeper Skills",
    cards: [
      { type: "Place Kicks", quantity: 2 },  // Changed from "Diving"
      { type: "Agility", quantity: 1 },      // Changed from "Reflexes"
      { type: "Analysis", quantity: 1 },     // Changed from "Positioning"
    ],
    stats: {
      Technique: 2,
      IQ: 2,
    }
  },
  {
    id: "combo8",
    name: "All-Round Fitness",
    cards: [
      { type: "Sprinting", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Weights", quantity: 1 },
      { type: "Stretching", quantity: 1 },
    ],
    stats: {
      Speed: 1,
      Power: 1,
      Stamina: 2,
    }
  },
  {
    id: "combo9",
    name: "Playmaker Development",
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
    name: "Forward Training",
    cards: [
      { type: "Shooting", quantity: 2 },
      { type: "Sprinting", quantity: 1 },
      { type: "Heading", quantity: 1 },
    ],
    stats: {
      Power: 2,
      Speed: 1,
      Technique: 1,
    }
  },
  {
    id: "combo11",
    name: "Midfield Endurance",
    cards: [
      { type: "Aerobics", quantity: 2 },
      { type: "Pressuring", quantity: 1 },  // Changed from "Pressing"
      { type: "Passing", quantity: 1 },
    ],
    stats: {
      Stamina: 3,
      IQ: 1,
    }
  },
  {
    id: "combo12",
    name: "Wing Play Development",
    cards: [
      { type: "Sprinting", quantity: 2 },
      { type: "Dribbling", quantity: 2 },
    ],
    stats: {
      Speed: 2,
      Technique: 2,
    }
  },
  // New combos based on the updated card types
  {
    id: "combo13",
    name: "Tactical Session",
    cards: [
      { type: "Analysis", quantity: 2 },
      { type: "Set Play", quantity: 2 },
    ],
    stats: {
      IQ: 3,
      Technique: 1,
    }
  },
  {
    id: "combo14",
    name: "Recovery Program",
    cards: [
      { type: "Oil Therapy", quantity: 1 },
      { type: "Spa", quantity: 1 },
      { type: "Stretching", quantity: 1 },
    ],
    stats: {
      Stamina: 3,
    }
  },
  {
    id: "combo15",
    name: "Mental Preparation",
    cards: [
      { type: "Meditation", quantity: 2 },
      { type: "Visualising", quantity: 2 },
    ],
    stats: {
      IQ: 3,
      Stamina: 1,
    }
  },
];

export const allCardTypes: CardType[] = [
  // Tactical cards
  "Analysis",
  "Marking",
  "Pressuring",
  "Countering",
  "Mini-Game",
  "Line Control",
  "Set Play",
  // Technical cards
  "Dribbling",
  "Place Kicks",
  "Shooting",
  "Passing",
  "Freestyle",
  "Sliding",
  "Heading",
  // Physical cards
  "Running",
  "Weights",
  "Kicking",
  "Sprinting",
  "Agility",
  "Aerobics",
  "Stretching",
  // Support cards
  "Oil Therapy",
  "Meditation",
  "Signing",
  "PK Practice",
  "Judo",
  "Visualising",
  "Meeting",
  "Spa",
  "Mini Camp",
  "Gaming",
  "Karaoke"
];

export const allCategories: CardCategory[] = [
  "Tactical",
  "Technical",
  "Physical",
  "Support"
];

export const allStatTypes: StatType[] = [
  "Speed", 
  "Power", 
  "Technique", 
  "Stamina", 
  "IQ"
];

export const categoryColors: Record<CardCategory, string> = {
  "Tactical": "bg-npfc-green",
  "Technical": "bg-npfc-red",
  "Physical": "bg-npfc-blue",
  "Support": "bg-npfc-yellow"
};

export const cardColors: Record<CardType, string> = Object.fromEntries(
  allCardTypes.map(type => [type, categoryColors[cardToCategory[type]]])
) as Record<CardType, string>;

export const statColors: Record<StatType, string> = {
  "Speed": "stat-badge-speed",
  "Power": "stat-badge-power",
  "Technique": "stat-badge-technique",
  "Stamina": "stat-badge-stamina",
  "IQ": "stat-badge-iq"
};

// Icons for card categories
export const categoryIcons = {
  "Tactical": "star",
  "Technical": "wrench",
  "Physical": "activity", 
  "Support": "users"
};

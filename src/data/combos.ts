
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

// Updated Stats that can be improved based on the screenshot
export type StatType = 
  | "Kicking" 
  | "Speed" 
  | "Stamina" 
  | "Technique" 
  | "Toughness" 
  | "Jumping" 
  | "Willpower";

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
      Technique: 2,
      Kicking: 1,
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
      Toughness: 1,
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
      Kicking: 2,
      Toughness: 1,
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
      Technique: 2,
      Willpower: 1,
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
      Toughness: 2,
      Jumping: 1,
    }
  },
  {
    id: "combo7",
    name: "Goalkeeper Skills",
    cards: [
      { type: "Place Kicks", quantity: 2 },
      { type: "Agility", quantity: 1 },
      { type: "Analysis", quantity: 1 },
    ],
    stats: {
      Jumping: 2,
      Technique: 1,
      Willpower: 1,
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
      Stamina: 2,
      Jumping: 1,
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
      Technique: 2,
      Willpower: 2,
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
      Kicking: 2,
      Speed: 1,
      Jumping: 1,
    }
  },
  {
    id: "combo11",
    name: "Midfield Endurance",
    cards: [
      { type: "Aerobics", quantity: 2 },
      { type: "Pressuring", quantity: 1 },
      { type: "Passing", quantity: 1 },
    ],
    stats: {
      Stamina: 2,
      Willpower: 1,
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
  {
    id: "combo13",
    name: "Tactical Session",
    cards: [
      { type: "Analysis", quantity: 2 },
      { type: "Set Play", quantity: 2 },
    ],
    stats: {
      Willpower: 2,
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
      Stamina: 2,
      Toughness: 1,
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
      Willpower: 3,
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
  "Kicking", 
  "Speed", 
  "Stamina", 
  "Technique", 
  "Toughness", 
  "Jumping", 
  "Willpower"
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
  "Kicking": "stat-badge-kicking",
  "Speed": "stat-badge-speed",
  "Stamina": "stat-badge-stamina",
  "Technique": "stat-badge-technique",
  "Toughness": "stat-badge-toughness",
  "Jumping": "stat-badge-jumping",
  "Willpower": "stat-badge-willpower"
};

// Icons for card categories
export const categoryIcons = {
  "Tactical": "star",
  "Technical": "wrench",
  "Physical": "activity", 
  "Support": "users"
};

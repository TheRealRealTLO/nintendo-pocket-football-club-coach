
// Types related to cards and stats

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

// Stats that can be improved based on the data
export type StatType = 
  | "Kicking" 
  | "Speed" 
  | "Stamina" 
  | "Technique" 
  | "Toughness" 
  | "Jumping" 
  | "Willpower";

// All available stats for easy reference
export const allStatTypes: StatType[] = [
  "Kicking", "Speed", "Stamina", "Technique", "Toughness", "Jumping", "Willpower"
];

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
  // Position recommendation (optional)
  recommendedPosition?: "GK" | "DF" | "MF" | "FW" | "ALL";
  // Flag for best combos (new field)
  recommended?: boolean;
}


import { CardCategory, CardType, StatType } from './types';
import { allCardTypes } from './cardRelations';
import { cardToCategory } from './cardRelations';

// Color mapping for categories
export const categoryColors: Record<CardCategory, string> = {
  "Tactical": "bg-npfc-green",
  "Technical": "bg-npfc-red",
  "Physical": "bg-npfc-blue",
  "Support": "bg-npfc-yellow"
};

// Color mapping for individual cards based on their category
export const cardColors: Record<CardType, string> = Object.fromEntries(
  allCardTypes.map(type => [type, categoryColors[cardToCategory[type]]])
) as Record<CardType, string>;

// Color mapping for stats
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

// All stat types array
export const allStatTypes: StatType[] = [
  "Kicking", 
  "Speed", 
  "Stamina", 
  "Technique", 
  "Toughness", 
  "Jumping", 
  "Willpower"
];

// Position label colors and descriptions
export const positionLabels = {
  "GK": {
    color: "bg-orange-400",
    label: "Goalkeeper",
    description: "Best for goalkeepers"
  },
  "DF": {
    color: "bg-blue-400",
    label: "Defender",
    description: "Best for defensive players"
  },
  "MF": {
    color: "bg-green-400",
    label: "Midfielder",
    description: "Best for midfield players"
  },
  "FW": {
    color: "bg-red-400",
    label: "Forward",
    description: "Best for attacking players"
  },
  "ALL": {
    color: "bg-purple-400",
    label: "All Positions",
    description: "Suitable for any position"
  }
};

// Helper function to get stat description
export const getStatDescription = (stat: StatType): string => {
  switch(stat) {
    case "Kicking": return "Power in shots and passes";
    case "Speed": return "How quickly a player can move";
    case "Stamina": return "Energy and endurance during matches";
    case "Technique": return "Ball control and skill";
    case "Toughness": return "Physical strength and resistance";
    case "Jumping": return "Aerial ability";
    case "Willpower": return "Mental strength and decision making";
    default: return "";
  }
};

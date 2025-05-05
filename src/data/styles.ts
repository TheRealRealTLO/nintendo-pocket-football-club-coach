
// Define colors for the categories, cards, and stats

import { CardCategory, CardType, StatType } from './types';

// Category colors
export const categoryColors: Record<CardCategory, string> = {
  "Tactical": "bg-yellow-200",
  "Technical": "bg-blue-200",
  "Physical": "bg-green-200",
  "Support": "bg-purple-200"
};

// Card colors (for each specific card type)
export const cardColors: Record<CardType, string> = {
  // Tactical cards
  "Analysis": "bg-yellow-200",
  "Marking": "bg-yellow-300",
  "Pressuring": "bg-yellow-400",
  "Countering": "bg-yellow-200",
  "Mini-Game": "bg-yellow-300",
  "Line Control": "bg-yellow-400",
  "Set Play": "bg-yellow-200",
  
  // Technical cards
  "Dribbling": "bg-blue-200",
  "Place Kicks": "bg-blue-300",
  "Shooting": "bg-blue-400",
  "Passing": "bg-blue-200",
  "Freestyle": "bg-blue-300",
  "Sliding": "bg-blue-400",
  "Heading": "bg-blue-200",
  
  // Physical cards
  "Running": "bg-green-200",
  "Weights": "bg-green-300",
  "Kicking": "bg-green-400",
  "Sprinting": "bg-green-200",
  "Agility": "bg-green-300",
  "Aerobics": "bg-green-400",
  "Stretching": "bg-green-200",
  
  // Support cards
  "Oil Therapy": "bg-purple-200",
  "Meditation": "bg-purple-300",
  "Signing": "bg-purple-400",
  "PK Practice": "bg-purple-200",
  "Judo": "bg-purple-300",
  "Visualising": "bg-purple-400",
  "Meeting": "bg-purple-200",
  "Spa": "bg-purple-300",
  "Mini Camp": "bg-purple-400",
  "Gaming": "bg-purple-200",
  "Karaoke": "bg-purple-300"
};

// Stat colors
export const statColors: Record<StatType, string> = {
  "Kicking": "bg-red-300",
  "Speed": "bg-blue-300",
  "Stamina": "bg-green-300",
  "Technique": "bg-yellow-300",
  "Toughness": "bg-purple-300",
  "Jumping": "bg-orange-300",
  "Willpower": "bg-pink-300"
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

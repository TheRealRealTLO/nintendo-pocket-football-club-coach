
// Define colors for the categories, cards, and stats

import { CardCategory, CardType, StatType } from './types';

// Category colors
export const categoryColors: Record<CardCategory, string> = {
  "Tactical": "bg-green-200",
  "Technical": "bg-red-200",
  "Physical": "bg-blue-200",
  "Support": "bg-yellow-200"
};

// Card colors (for each specific card type)
export const cardColors: Record<CardType, string> = {
  // Tactical cards
  "Analysis": "bg-green-300",
  "Marking": "bg-green-300",
  "Pressuring": "bg-green-300",
  "Countering": "bg-green-300",
  "Mini-Game": "bg-green-300",
  "Line Control": "bg-green-300",
  "Set Play": "bg-green-300",
  
  // Technical cards
  "Dribbling": "bg-red-300",
  "Place Kicks": "bg-red-300",
  "Shooting": "bg-red-300",
  "Passing": "bg-red-300",
  "Freestyle": "bg-red-300",
  "Sliding": "bg-red-300",
  "Heading": "bg-red-300",
  
  // Physical cards
  "Running": "bg-blue-300",
  "Weights": "bg-blue-300",
  "Kicking": "bg-blue-300",
  "Sprinting": "bg-blue-300",
  "Agility": "bg-blue-300",
  "Aerobics": "bg-blue-300",
  "Stretching": "bg-blue-300",
  
  // Support cards
  "Oil Therapy": "bg-yellow-300",
  "Meditation": "bg-yellow-300",
  "Signing": "bg-yellow-300",
  "PK Practice": "bg-yellow-300",
  "Judo": "bg-yellow-300",
  "Visualising": "bg-yellow-300",
  "Meeting": "bg-yellow-300",
  "Spa": "bg-yellow-300",
  "Mini Camp": "bg-yellow-300",
  "Gaming": "bg-yellow-300",
  "Karaoke": "bg-yellow-300"
};

// Stat colors - updated to ensure all stats have distinct colors
export const statColors: Record<StatType, string> = {
  "Kicking": "bg-red-300",
  "Speed": "bg-blue-300",
  "Stamina": "bg-green-300",
  "Technique": "bg-yellow-300",
  "Toughness": "bg-purple-400", // Updated from white/default
  "Jumping": "bg-orange-300",   // Updated from white/default
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

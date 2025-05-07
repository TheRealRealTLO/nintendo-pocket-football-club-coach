
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

// Stat colors - updated to match card badges with more vibrant colors that are consistent
export const statColors: Record<StatType, string> = {
  "Kicking": "bg-red-500",
  "Speed": "bg-blue-500",
  "Stamina": "bg-green-500",
  "Technique": "bg-yellow-500",
  "Toughness": "bg-purple-500",
  "Jumping": "bg-orange-500",
  "Willpower": "bg-pink-500"
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

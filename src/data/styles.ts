
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
  "Analysis": "bg-yellow-300",
  "Marking": "bg-yellow-300",
  "Pressuring": "bg-yellow-300",
  "Countering": "bg-yellow-300",
  "Mini-Game": "bg-yellow-300",
  "Line Control": "bg-yellow-300",
  "Set Play": "bg-yellow-300",
  
  // Technical cards
  "Dribbling": "bg-blue-300",
  "Place Kicks": "bg-blue-300",
  "Shooting": "bg-blue-300",
  "Passing": "bg-blue-300",
  "Freestyle": "bg-blue-300",
  "Sliding": "bg-blue-300",
  "Heading": "bg-blue-300",
  
  // Physical cards
  "Running": "bg-green-300",
  "Weights": "bg-green-300",
  "Kicking": "bg-green-300",
  "Sprinting": "bg-green-300",
  "Agility": "bg-green-300",
  "Aerobics": "bg-green-300",
  "Stretching": "bg-green-300",
  
  // Support cards
  "Oil Therapy": "bg-purple-300",
  "Meditation": "bg-purple-300",
  "Signing": "bg-purple-300",
  "PK Practice": "bg-purple-300",
  "Judo": "bg-purple-300",
  "Visualising": "bg-purple-300",
  "Meeting": "bg-purple-300",
  "Spa": "bg-purple-300",
  "Mini Camp": "bg-purple-300",
  "Gaming": "bg-purple-300",
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

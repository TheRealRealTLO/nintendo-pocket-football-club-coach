
import { CardType, CardCategory } from './types';

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

// All card types array for easy access
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

// All categories array
export const allCategories: CardCategory[] = [
  "Tactical",
  "Technical",
  "Physical",
  "Support"
];

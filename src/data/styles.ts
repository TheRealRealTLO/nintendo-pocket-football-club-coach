
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

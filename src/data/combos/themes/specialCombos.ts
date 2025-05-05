import { TrainingCombo } from '../../types';

// Special combos, including those with negative effects or unique characteristics
export const specialCombos: TrainingCombo[] = [
  {
    id: "combo-92",
    name: "Wild Man",
    cards: [
      { type: "Running", quantity: 1 },
      { type: "Sprinting", quantity: 1 },
      { type: "Aerobics", quantity: 1 }
    ],
    stats: {
      Speed: 20,
      Stamina: 20,
      Willpower: -2
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-93",
    name: "Trickery",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 8,
      Stamina: -2,
      Willpower: 6
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-95",
    name: "Attack Pivot",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "PK Practice", quantity: 1 }
    ],
    stats: {
      Kicking: 4,
      Stamina: 2,
      Technique: 2
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-208",
    name: "Goal Sniffer",
    cards: [
      { type: "Oil Therapy", quantity: 1 },
      { type: "Meditation", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Speed: 4,
      Technique: 3,
      Toughness: 3,
      Jumping: 4
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-100",
    name: "Escape Reality",
    cards: [
      { type: "Gaming", quantity: 1 },
      { type: "Spa", quantity: 1 },
      { type: "Karaoke", quantity: 1 }
    ],
    stats: {
      Technique: 8,
      Toughness: -4,
      Willpower: -2
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-101",
    name: "Time Wasting",
    cards: [
      { type: "Place Kicks", quantity: 1 },
      { type: "Running", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Speed: -4,
      Stamina: 24,
      Jumping: -2,
      Willpower: -2
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-102",
    name: "Diving",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Agility", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 24,
      Stamina: -4,
      Willpower: -4
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-104",
    name: "After Charge",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Kicking", quantity: 1 },
      { type: "Karaoke", quantity: 1 }
    ],
    stats: {
      Kicking: 12,
      Technique: -2,
      Willpower: -2
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-105",
    name: "Overtraining",
    cards: [
      { type: "Running", quantity: 1 },
      { type: "Sliding", quantity: 1 },
      { type: "Weights", quantity: 1 }
    ],
    stats: {
      Kicking: -1,
      Stamina: -4,
      Toughness: 24,
      Willpower: -2
    },
    recommendedPosition: "ALL"
  }
];

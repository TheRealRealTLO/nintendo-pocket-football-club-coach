
import { TrainingCombo } from '../../types';

// Combos focused on passing and dribbling skills
export const dribblePassCombos: TrainingCombo[] = [
  {
    id: "combo-8",
    name: "Velvet Pass",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Kicking: 1,
      Stamina: 4,
      Toughness: 4,
      Willpower: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-23",
    name: "Triangle",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Passing", quantity: 1 }
    ],
    stats: {
      Kicking: 1,
      Speed: 6,
      Technique: 3
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-35",
    name: "Fast Dribble",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Sprinting", quantity: 1 }
    ],
    stats: {
      Speed: 12,
      Stamina: 4,
      Technique: 4
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-36",
    name: "No-Look Pass",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Sprinting", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 6,
      Willpower: 8
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-39",
    name: "First-Touch",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Freestyle", quantity: 1 }
    ],
    stats: {
      Speed: 7,
      Technique: 6
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-48",
    name: "Rapid Dribbling",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 6,
      Jumping: 4
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-49",
    name: "Shock Dribble",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Mini-Game", quantity: 1 },
      { type: "Kicking", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 6,
      Technique: 6,
      Jumping: 6
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-50",
    name: "Phantom Dribbler",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Freestyle", quantity: 1 },
      { type: "Aerobics", quantity: 1 }
    ],
    stats: {
      Speed: 14,
      Stamina: 6,
      Technique: 7
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-60",
    name: "Pin-Point Pass",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 4,
      Willpower: 6
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-61",
    name: "Killer Pass",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Kicking", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 5,
      Technique: 5,
      Toughness: 5,
      Jumping: 3
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-62",
    name: "Linked Partners",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Stamina: 8,
      Technique: 4,
      Toughness: 2,
      Jumping: 2
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-65",
    name: "Long Pass",
    cards: [
      { type: "Weights", quantity: 1 },
      { type: "Place Kicks", quantity: 1 }
    ],
    stats: {
      Kicking: 8,
      Technique: 6,
      Toughness: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-66",
    name: "Homing Cross",
    cards: [
      { type: "Kicking", quantity: 1 },
      { type: "Place Kicks", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Stamina: 8,
      Technique: 2,
      Jumping: 8
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-78",
    name: "Wing Attack",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Running", quantity: 1 }
    ],
    stats: {
      Speed: 1,
      Stamina: 1,
      Toughness: 2,
      Willpower: 4
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-81",
    name: "Rush Attack",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Dribbling", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Speed: 10,
      Stamina: 6,
      Technique: 4,
      Jumping: 6
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-94",
    name: "Strategist",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Gaming", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 3,
      Willpower: 6
    },
    recommendedPosition: "MF"
  }
];

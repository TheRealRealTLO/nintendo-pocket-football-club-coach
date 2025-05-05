
import { TrainingCombo } from '../../../types';

// Defender-specific defensive combos
export const defenderCombos: TrainingCombo[] = [
  {
    id: "combo-2",
    name: "Sliding Header",
    cards: [
      { type: "Sliding", quantity: 1 },
      { type: "Heading", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Technique: 2,
      Toughness: 6,
      Jumping: 6,
      Willpower: 6
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-5",
    name: "Deadly Slide",
    cards: [
      { type: "Sliding", quantity: 1 },
      { type: "Kicking", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Technique: 7,
      Toughness: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-6",
    name: "Covering",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Sprinting", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Stamina: 4,
      Toughness: 10,
      Jumping: 6
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-12",
    name: "Risky Block",
    cards: [
      { type: "Sliding", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Technique: 2,
      Toughness: 6,
      Willpower: 8
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-13",
    name: "Brick Wall",
    cards: [
      { type: "Kicking", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Technique: 4,
      Toughness: 1,
      Willpower: 4
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-22",
    name: "Body of Steel",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Weights", quantity: 1 },
      { type: "Kicking", quantity: 1 }
    ],
    stats: {
      Kicking: 4,
      Technique: 3,
      Toughness: 16
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-24",
    name: "The Chain",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Marking", quantity: 1 },
      { type: "Line Control", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 4,
      Stamina: 6,
      Technique: 2,
      Toughness: 6
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-32",
    name: "Compact Field",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Line Control", quantity: 1 }
    ],
    stats: {
      Speed: 4,
      Stamina: 4,
      Jumping: 4
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-33",
    name: "Chasing",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Aerobics", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Stamina: 8,
      Toughness: 6
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-34",
    name: "Wing Block",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 3,
      Technique: 3,
      Jumping: 5
    },
    recommendedPosition: "DF"
  }
];

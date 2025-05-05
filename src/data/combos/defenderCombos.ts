
import { TrainingCombo } from '../types';

// Training combos for defenders
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
    id: "combo-4",
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
    id: "combo-8",
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
    id: "combo-9",
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
    id: "combo-19",
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
    id: "combo-21",
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
    id: "combo-27",
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
    id: "combo-29",
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
  },
  {
    id: "combo-46",
    name: "Aerial Specialist",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Heading", quantity: 1 },
      { type: "Kicking", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Technique: 2,
      Toughness: 6,
      Jumping: 16
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-56",
    name: "Long Throw",
    cards: [
      { type: "Weights", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 4,
      Toughness: 12,
      Jumping: 4
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-61",
    name: "Intercepting",
    cards: [
      { type: "Sliding", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Technique: 4,
      Toughness: 6,
      Jumping: 4
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-66",
    name: "Open the Gates",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Countering", quantity: 1 }
    ],
    stats: {
      Speed: 2,
      Stamina: 4,
      Technique: 2,
      Toughness: 4
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-68",
    name: "Blocking",
    cards: [
      { type: "Sliding", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 2,
      Toughness: 8,
      Jumping: 6
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-69",
    name: "Iron Defence",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Pressuring", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Technique: 2,
      Toughness: 5
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-70",
    name: "Gutsy Clearance",
    cards: [
      { type: "Heading", quantity: 1 },
      { type: "Stretching", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 4,
      Toughness: 10,
      Jumping: 10
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-84",
    name: "Wild Rage",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Kicking", quantity: 1 },
      { type: "Agility", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Technique: 6,
      Toughness: 8,
      Jumping: 6
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-85",
    name: "Iron Fist",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Weights", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Toughness: 12,
      Jumping: 6
    },
    recommendedPosition: "DF"
  }
];

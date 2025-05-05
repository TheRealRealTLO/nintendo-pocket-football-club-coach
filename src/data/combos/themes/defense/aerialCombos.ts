
import { TrainingCombo } from '../../../types';

// Aerial-focused defensive combos
export const aerialCombos: TrainingCombo[] = [
  {
    id: "combo-51",
    name: "Headed Shot",
    cards: [
      { type: "Heading", quantity: 1 },
      { type: "Agility", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Technique: 2,
      Toughness: 6,
      Jumping: 14
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-52",
    name: "Explosive Header",
    cards: [
      { type: "Heading", quantity: 1 },
      { type: "Marking", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Stamina: 4,
      Toughness: 6,
      Jumping: 12,
      Willpower: 6
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-53",
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
    id: "combo-54",
    name: "Target Man",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Heading", quantity: 1 },
      { type: "Weights", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Speed: 5,
      Stamina: 5,
      Technique: 2,
      Jumping: 5
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-55",
    name: "Hold Up Play",
    cards: [
      { type: "Passing", quantity: 1 },
      { type: "Heading", quantity: 1 }
    ],
    stats: {
      Technique: 6,
      Toughness: 8
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-77",
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
    id: "combo-83",
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
    id: "combo-84",
    name: "Dogged Marker",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Running", quantity: 1 }
    ],
    stats: {
      Speed: 4,
      Stamina: 10,
      Toughness: 4,
      Willpower: 4
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-86",
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
    id: "combo-87",
    name: "Star Takedown",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Sliding", quantity: 1 },
      { type: "Sprinting", quantity: 1 }
    ],
    stats: {
      Speed: 12,
      Stamina: 6,
      Technique: 2,
      Toughness: 10
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-85",
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
  }
];


import { TrainingCombo } from '../../../types';

// Forward-specific attacking combos
export const forwardAttackingCombos: TrainingCombo[] = [
  {
    id: "combo-1",
    name: "Dribbling Shot",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Shooting", quantity: 1 }
    ],
    stats: {
      Kicking: 6,
      Speed: 6,
      Technique: 3
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-4",
    name: "Star Striker",
    cards: [
      { type: "Place Kicks", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Kicking: 10,
      Technique: 4,
      Toughness: 6
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-17",
    name: "Volley Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Kicking: 9,
      Technique: 2
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-19",
    name: "Shadow Striker",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Shooting", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Kicking: 7,
      Speed: 5,
      Technique: 2,
      Willpower: 2
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-41",
    name: "Controlled Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Freestyle", quantity: 1 }
    ],
    stats: {
      Kicking: 6,
      Technique: 5
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-42",
    name: "Banana Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Place Kicks", quantity: 1 }
    ],
    stats: {
      Willpower: 4
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-44",
    name: "Blind Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Marking", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Technique: 3
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-45",
    name: "Knuckle Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Kicking: 6,
      Technique: 3,
      Jumping: 6
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-47",
    name: "Diving Shot",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Marking", quantity: 1 },
      { type: "Sprinting", quantity: 1 }
    ],
    stats: {
      Kicking: 9,
      Speed: 10
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-203",
    name: "FK Master",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Place Kicks", quantity: 1 },
      { type: "PK Practice", quantity: 1 }
    ],
    stats: {
      Kicking: 12,
      Willpower: 8
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-85",
    name: "Free Kick Legend",
    cards: [
      { type: "Visualising", quantity: 1 },
      { type: "Place Kicks", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Kicking: 11,
      Jumping: 10
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-204",
    name: "Ball Magician",
    cards: [
      { type: "Freestyle", quantity: 1 },
      { type: "Place Kicks", quantity: 1 },
      { type: "Heading", quantity: 1 }
    ],
    stats: {
      Kicking: 7,
      Technique: 8
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-205",
    name: "Hand of God",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Shooting", quantity: 1 },
      { type: "Heading", quantity: 1 }
    ],
    stats: {
      Kicking: 12,
      Technique: -2,
      Willpower: -4
    },
    recommendedPosition: "FW"
  },
];

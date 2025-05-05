
import { TrainingCombo } from '../types';

// Training combos for all positions
export const allPositionCombos: TrainingCombo[] = [
  {
    id: "combo-10",
    name: "Hungry for Glory",
    cards: [
      { type: "Weights", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Stamina: 6,
      Technique: 3,
      Toughness: 4
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-11",
    name: "Multitool",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 4,
      Toughness: 4,
      Jumping: 4
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-14",
    name: "Determination",
    cards: [
      { type: "Pressuring", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Technique: 3,
      Willpower: 1
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-16",
    name: "Last Trump",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Passing", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Kicking: 8,
      Speed: 8,
      Toughness: 6,
      Jumping: 4
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-17",
    name: "Ultra Relaxation",
    cards: [
      { type: "Stretching", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Stamina: 6,
      Technique: 2,
      Toughness: 10,
      Jumping: 8
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-18",
    name: "ChooChoo Train",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Stretching", quantity: 1 },
      { type: "Spa", quantity: 1 }
    ],
    stats: {
      Speed: 4,
      Stamina: 2,
      Toughness: 7,
      Jumping: 2,
      Willpower: 4
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-22",
    name: "Fan Service",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Signing", quantity: 1 }
    ],
    stats: {
      Technique: 4,
      Willpower: 10
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-26",
    name: "Control Tower",
    cards: [
      { type: "Mini-Game", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Stamina: 4,
      Technique: 2,
      Jumping: 6
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-33",
    name: "Magic Trapping",
    cards: [
      { type: "Judo", quantity: 1 },
      { type: "Freestyle", quantity: 1 }
    ],
    stats: {
      Technique: 6,
      Jumping: 4
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-34",
    name: "Magnet Trapping",
    cards: [
      { type: "Stretching", quantity: 1 },
      { type: "Freestyle", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Speed: 6,
      Technique: 8,
      Toughness: 4,
      Jumping: 4
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-52",
    name: "Body Balance",
    cards: [
      { type: "Freestyle", quantity: 1 },
      { type: "Kicking", quantity: 1 }
    ],
    stats: {
      Stamina: 7,
      Toughness: 7
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-59",
    name: "Vocal Tactics",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Karaoke", quantity: 1 }
    ],
    stats: {
      Stamina: 4,
      Technique: 1,
      Jumping: 8
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-62",
    name: "Impulse Play",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Visualising", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Technique: 2,
      Jumping: 4,
      Willpower: 2
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-64",
    name: "Total Football",
    cards: [
      { type: "Line Control", quantity: 1 },
      { type: "Dribbling", quantity: 1 },
      { type: "Mini Camp", quantity: 1 }
    ],
    stats: {},
    recommendedPosition: "ALL"
  },
  {
    id: "combo-76",
    name: "FK Master",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Place Kicks", quantity: 1 },
      { type: "PK Practice", quantity: 1 }
    ],
    stats: {
      Kicking: 12,
      Jumping: 8
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-77",
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
    recommendedPosition: "ALL"
  },
  {
    id: "combo-79",
    name: "Football Professor",
    cards: [
      { type: "Analysis", quantity: 1 },
      { type: "Set Play", quantity: 1 },
      { type: "Gaming", quantity: 1 }
    ],
    stats: {
      Kicking: 4,
      Speed: 4,
      Technique: 2,
      Jumping: 8
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-83",
    name: "Heart of Steel",
    cards: [
      { type: "PK Practice", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Stamina: 1,
      Jumping: 12
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-86",
    name: "Last Gasp Miracle",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Set Play", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Kicking: 2,
      Speed: 4,
      Technique: 2,
      Jumping: 16
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-87",
    name: "Super Refreshment",
    cards: [
      { type: "Aerobics", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 },
      { type: "Karaoke", quantity: 1 }
    ],
    stats: {
      Stamina: 12,
      Technique: 2,
      Jumping: 8
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-88",
    name: "Blind Plane",
    cards: [
      { type: "Set Play", quantity: 1 },
      { type: "Freestyle", quantity: 1 },
      { type: "Weights", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Technique: 5,
      Toughness: 4,
      Jumping: 2
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-89",
    name: "Acrobatics",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Stretching", quantity: 1 }
    ],
    stats: {
      Kicking: 6,
      Speed: 5,
      Stamina: 2,
      Technique: 6,
      Toughness: 2
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-93",
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
    recommendedPosition: "ALL"
  },
  {
    id: "combo-94",
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
    id: "combo-97",
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
  }
];

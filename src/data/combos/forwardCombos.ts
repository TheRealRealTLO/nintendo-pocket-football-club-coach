
import { TrainingCombo } from '../types';

// Training combos for forwards
export const forwardCombos: TrainingCombo[] = [
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
    id: "combo-3",
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
    id: "combo-7",
    name: "Bicycle Kick",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Judo", quantity: 1 }
    ],
    stats: {
      Kicking: 4,
      Stamina: 6,
      Technique: 4,
      Toughness: 6
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-13",
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
    id: "combo-15",
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
    id: "combo-24",
    name: "Miracle Loop",
    cards: [
      { type: "Mini-Game", quantity: 1 },
      { type: "Shooting", quantity: 1 },
      { type: "Meditation", quantity: 1 }
    ],
    stats: {
      Kicking: 7,
      Technique: 2,
      Jumping: 8
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-31",
    name: "Wonder Boy",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Oil Therapy", quantity: 1 },
      { type: "Gaming", quantity: 1 }
    ],
    stats: {
      Kicking: 3,
      Speed: 6,
      Technique: 4
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-35",
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
    id: "combo-36",
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
    id: "combo-37",
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
    id: "combo-38",
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
    id: "combo-39",
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
    id: "combo-41",
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
    id: "combo-42",
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
    id: "combo-43",
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
    id: "combo-44",
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
    recommendedPosition: "FW"
  },
  {
    id: "combo-45",
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
      Jumping: 12
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-47",
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
    id: "combo-48",
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
    id: "combo-65",
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
    id: "combo-75",
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
    id: "combo-78",
    name: "Lucky Chance",
    cards: [
      { type: "Countering", quantity: 1 },
      { type: "Signing", quantity: 1 },
      { type: "PK Practice", quantity: 1 }
    ],
    stats: {
      Kicking: 5,
      Speed: 1,
      Technique: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-95",
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
  }
];

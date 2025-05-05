import { TrainingCombo, StatType, CardType } from './types';

// Collection of all training combos
export const trainingCombos: TrainingCombo[] = [
  // Original combos
  {
    id: "combo1",
    name: "Basic Shooting Training",
    cards: [
      { type: "Shooting", quantity: 3 },
    ],
    stats: {
      Technique: 2,
      Kicking: 1,
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo2",
    name: "Passing Practice",
    cards: [
      { type: "Passing", quantity: 3 },
    ],
    stats: {
      Technique: 2,
      Toughness: 1,
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo3",
    name: "Speed Development",
    cards: [
      { type: "Running", quantity: 2 },
      { type: "Sprinting", quantity: 1 },
    ],
    stats: {
      Speed: 2,
      Stamina: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo4",
    name: "Power Enhancement",
    cards: [
      { type: "Weights", quantity: 2 },
      { type: "Kicking", quantity: 1 },
    ],
    stats: {
      Kicking: 2,
      Toughness: 1,
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo5",
    name: "Technical Skills",
    cards: [
      { type: "Dribbling", quantity: 2 },
      { type: "Passing", quantity: 2 },
    ],
    stats: {
      Technique: 2,
      Willpower: 1,
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo6",
    name: "Defensive Training",
    cards: [
      { type: "Marking", quantity: 2 },
      { type: "Sliding", quantity: 2 },
    ],
    stats: {
      Toughness: 2,
      Jumping: 1,
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo7",
    name: "Goalkeeper Skills",
    cards: [
      { type: "Place Kicks", quantity: 2 },
      { type: "Agility", quantity: 1 },
      { type: "Analysis", quantity: 1 },
    ],
    stats: {
      Jumping: 2,
      Technique: 1,
      Willpower: 1,
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo8",
    name: "All-Round Fitness",
    cards: [
      { type: "Sprinting", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Weights", quantity: 1 },
      { type: "Stretching", quantity: 1 },
    ],
    stats: {
      Speed: 1,
      Stamina: 2,
      Jumping: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo9",
    name: "Playmaker Development",
    cards: [
      { type: "Passing", quantity: 3 },
      { type: "Dribbling", quantity: 1 },
    ],
    stats: {
      Technique: 2,
      Willpower: 2,
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo10",
    name: "Forward Training",
    cards: [
      { type: "Shooting", quantity: 2 },
      { type: "Sprinting", quantity: 1 },
      { type: "Heading", quantity: 1 },
    ],
    stats: {
      Kicking: 2,
      Speed: 1,
      Jumping: 1,
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo11",
    name: "Midfield Endurance",
    cards: [
      { type: "Aerobics", quantity: 2 },
      { type: "Pressuring", quantity: 1 },
      { type: "Passing", quantity: 1 },
    ],
    stats: {
      Stamina: 2,
      Willpower: 1,
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo12",
    name: "Wing Play Development",
    cards: [
      { type: "Sprinting", quantity: 2 },
      { type: "Dribbling", quantity: 2 },
    ],
    stats: {
      Speed: 2,
      Technique: 2,
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo13",
    name: "Tactical Session",
    cards: [
      { type: "Analysis", quantity: 2 },
      { type: "Set Play", quantity: 2 },
    ],
    stats: {
      Willpower: 2,
      Technique: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo14",
    name: "Recovery Program",
    cards: [
      { type: "Oil Therapy", quantity: 1 },
      { type: "Spa", quantity: 1 },
      { type: "Stretching", quantity: 1 },
    ],
    stats: {
      Stamina: 2,
      Toughness: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo15",
    name: "Mental Preparation",
    cards: [
      { type: "Meditation", quantity: 2 },
      { type: "Visualising", quantity: 2 },
    ],
    stats: {
      Willpower: 3,
    },
    recommendedPosition: "ALL"
  },
  
  // New combos from screenshots
  {
    id: "combo16",
    name: "Line Control Development",
    cards: [
      { type: "Line Control", quantity: 3 },
    ],
    stats: {
      Willpower: 2,
      Technique: 1,
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo17",
    name: "Judo Training",
    cards: [
      { type: "Judo", quantity: 3 },
    ],
    stats: {
      Toughness: 2,
      Technique: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo18",
    name: "Visualization Focus",
    cards: [
      { type: "Visualising", quantity: 3 },
    ],
    stats: {
      Willpower: 2,
      Technique: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo19",
    name: "Aerobic Workout",
    cards: [
      { type: "Aerobics", quantity: 3 },
    ],
    stats: {
      Stamina: 2,
      Speed: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo20",
    name: "Team Meeting",
    cards: [
      { type: "Meeting", quantity: 3 },
    ],
    stats: {
      Willpower: 2,
      Toughness: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo21",
    name: "Karaoke Night",
    cards: [
      { type: "Karaoke", quantity: 3 },
    ],
    stats: {
      Willpower: 1,
      Stamina: 1,
      Speed: -1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo22",
    name: "Gaming Session",
    cards: [
      { type: "Gaming", quantity: 3 },
    ],
    stats: {
      Willpower: 2,
      Stamina: -1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo23",
    name: "Weight Training",
    cards: [
      { type: "Weights", quantity: 3 },
    ],
    stats: {
      Toughness: 2,
      Kicking: 1,
      Speed: -1,
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo24",
    name: "Stretching Routine",
    cards: [
      { type: "Stretching", quantity: 3 },
    ],
    stats: {
      Jumping: 2,
      Stamina: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo25",
    name: "Sprinting Drills",
    cards: [
      { type: "Sprinting", quantity: 3 },
    ],
    stats: {
      Speed: 2,
      Stamina: -1,
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo26",
    name: "Pass and Move",
    cards: [
      { type: "Passing", quantity: 2 },
      { type: "Running", quantity: 1 },
    ],
    stats: {
      Technique: 1,
      Stamina: 1,
      Speed: 1,
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo27",
    name: "Defensive Positioning",
    cards: [
      { type: "Marking", quantity: 2 },
      { type: "Analysis", quantity: 1 },
    ],
    stats: {
      Toughness: 1,
      Willpower: 2,
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo28",
    name: "Shooting Practice",
    cards: [
      { type: "Shooting", quantity: 2 },
      { type: "Kicking", quantity: 1 },
    ],
    stats: {
      Kicking: 2,
      Technique: 1,
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo29",
    name: "Attacking Movement",
    cards: [
      { type: "Dribbling", quantity: 1 },
      { type: "Freestyle", quantity: 1 },
      { type: "Sprinting", quantity: 1 },
    ],
    stats: {
      Technique: 2,
      Speed: 1,
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo30",
    name: "Set Piece Specialist",
    cards: [
      { type: "Place Kicks", quantity: 2 },
      { type: "Set Play", quantity: 1 },
    ],
    stats: {
      Technique: 2,
      Kicking: 1,
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo31",
    name: "Goalkeeper Reactions",
    cards: [
      { type: "Agility", quantity: 2 },
      { type: "Jumping", quantity: 1 },
    ],
    stats: {
      Jumping: 2,
      Speed: 1,
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo32",
    name: "Mental Recovery",
    cards: [
      { type: "Meditation", quantity: 2 },
      { type: "Spa", quantity: 1 },
    ],
    stats: {
      Willpower: 2,
      Stamina: 1,
      Toughness: -1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo33",
    name: "Physical Therapy",
    cards: [
      { type: "Oil Therapy", quantity: 2 },
      { type: "Stretching", quantity: 1 },
    ],
    stats: {
      Stamina: 2,
      Toughness: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo34",
    name: "Intense Cardio",
    cards: [
      { type: "Running", quantity: 1 },
      { type: "Sprinting", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
    ],
    stats: {
      Speed: 1,
      Stamina: 2,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo35",
    name: "Team Building",
    cards: [
      { type: "Meeting", quantity: 1 },
      { type: "Mini-Game", quantity: 1 },
      { type: "Karaoke", quantity: 1 },
    ],
    stats: {
      Willpower: 2,
      Toughness: 1,
      Speed: -1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo36",
    name: "Match Analysis",
    cards: [
      { type: "Analysis", quantity: 2 },
      { type: "Visualising", quantity: 1 },
      { type: "Meeting", quantity: 1 },
    ],
    stats: {
      Willpower: 3,
      Technique: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo37",
    name: "Advanced Dribbling",
    cards: [
      { type: "Dribbling", quantity: 2 },
      { type: "Freestyle", quantity: 2 },
    ],
    stats: {
      Technique: 3,
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo38",
    name: "Strength and Power",
    cards: [
      { type: "Weights", quantity: 2 },
      { type: "Kicking", quantity: 2 },
    ],
    stats: {
      Kicking: 2,
      Toughness: 2,
      Speed: -1,
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo39",
    name: "Goalkeeper Handling",
    cards: [
      { type: "Place Kicks", quantity: 2 },
      { type: "Agility", quantity: 1 },
      { type: "Weights", quantity: 1 },
    ],
    stats: {
      Technique: 2,
      Jumping: 2,
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo40",
    name: "Defender's Toolkit",
    cards: [
      { type: "Marking", quantity: 1 },
      { type: "Sliding", quantity: 1 },
      { type: "Heading", quantity: 1 },
      { type: "Weights", quantity: 1 },
    ],
    stats: {
      Toughness: 2,
      Jumping: 1,
      Technique: 1,
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo41",
    name: "Media Training",
    cards: [
      { type: "Signing", quantity: 2 },
      { type: "Meeting", quantity: 2 },
    ],
    stats: {
      Willpower: 2,
      Stamina: -1,
      Toughness: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo42",
    name: "Relaxation Day",
    cards: [
      { type: "Spa", quantity: 1 },
      { type: "Meditation", quantity: 1 },
      { type: "Gaming", quantity: 1 },
      { type: "Karaoke", quantity: 1 },
    ],
    stats: {
      Willpower: 2,
      Stamina: 2,
      Toughness: -1,
      Speed: -1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo43",
    name: "Combat Training",
    cards: [
      { type: "Judo", quantity: 2 },
      { type: "Weights", quantity: 1 },
      { type: "Agility", quantity: 1 },
    ],
    stats: {
      Toughness: 3,
      Speed: 1,
      Technique: 1,
      Stamina: -1,
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo44",
    name: "Advanced Goalkeeping",
    cards: [
      { type: "Agility", quantity: 2 },
      { type: "Jumping", quantity: 1 },
      { type: "Analysis", quantity: 1 },
      { type: "Stretching", quantity: 1 },
    ],
    stats: {
      Jumping: 3,
      Technique: 1,
      Willpower: 1,
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo45",
    name: "Striker's Masterclass",
    cards: [
      { type: "Shooting", quantity: 2 },
      { type: "Heading", quantity: 1 },
      { type: "Freestyle", quantity: 1 },
      { type: "Visualising", quantity: 1 },
    ],
    stats: {
      Kicking: 2,
      Technique: 2,
      Jumping: 1,
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo46",
    name: "Complete Midfielder",
    cards: [
      { type: "Passing", quantity: 2 },
      { type: "Running", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Analysis", quantity: 1 },
    ],
    stats: {
      Technique: 2,
      Stamina: 2,
      Willpower: 1,
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo47",
    name: "Elite Fitness",
    cards: [
      { type: "Running", quantity: 1 },
      { type: "Sprinting", quantity: 1 },
      { type: "Aerobics", quantity: 1 },
      { type: "Weights", quantity: 1 },
      { type: "Stretching", quantity: 1 },
    ],
    stats: {
      Speed: 2,
      Stamina: 2,
      Toughness: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo48",
    name: "Tactical Genius",
    cards: [
      { type: "Analysis", quantity: 2 },
      { type: "Set Play", quantity: 1 },
      { type: "Line Control", quantity: 1 },
      { type: "Pressuring", quantity: 1 },
    ],
    stats: {
      Willpower: 3,
      Technique: 2,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo49",
    name: "Aerial Dominance",
    cards: [
      { type: "Heading", quantity: 2 },
      { type: "Jumping", quantity: 1 },
      { type: "Set Play", quantity: 1 },
    ],
    stats: {
      Jumping: 3,
      Technique: 1,
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo50",
    name: "Complete Forward",
    cards: [
      { type: "Shooting", quantity: 1 },
      { type: "Heading", quantity: 1 },
      { type: "Dribbling", quantity: 1 },
      { type: "Sprinting", quantity: 1 },
      { type: "Freestyle", quantity: 1 },
    ],
    stats: {
      Technique: 2,
      Kicking: 1,
      Speed: 1,
      Jumping: 1,
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo51",
    name: "Mini Camp Experience",
    cards: [
      { type: "Mini Camp", quantity: 1 },
      { type: "Mini-Game", quantity: 1 },
      { type: "Meeting", quantity: 1 },
    ],
    stats: {
      Willpower: 2,
      Stamina: 1,
      Technique: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo52",
    name: "Penalty Specialist",
    cards: [
      { type: "PK Practice", quantity: 2 },
      { type: "Kicking", quantity: 1 },
      { type: "Visualising", quantity: 1 },
    ],
    stats: {
      Kicking: 2,
      Willpower: 2,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo53",
    name: "Counter-Attack Master",
    cards: [
      { type: "Countering", quantity: 2 },
      { type: "Sprinting", quantity: 1 },
      { type: "Passing", quantity: 1 },
    ],
    stats: {
      Speed: 2,
      Technique: 2,
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo54",
    name: "Pressing Game",
    cards: [
      { type: "Pressuring", quantity: 2 },
      { type: "Running", quantity: 1 },
      { type: "Analysis", quantity: 1 },
    ],
    stats: {
      Stamina: 2,
      Willpower: 2,
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo55",
    name: "Ultimate Recovery",
    cards: [
      { type: "Oil Therapy", quantity: 1 },
      { type: "Spa", quantity: 1 },
      { type: "Meditation", quantity: 1 },
      { type: "Stretching", quantity: 1 },
      { type: "Gaming", quantity: 1 },
    ],
    stats: {
      Stamina: 3,
      Willpower: 2,
      Toughness: -1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo56",
    name: "Set Piece Mastery",
    cards: [
      { type: "Set Play", quantity: 2 },
      { type: "Place Kicks", quantity: 1 },
      { type: "Heading", quantity: 1 },
      { type: "Analysis", quantity: 1 },
    ],
    stats: {
      Technique: 2,
      Willpower: 2,
      Jumping: 1,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo57",
    name: "Freestyle Exhibition",
    cards: [
      { type: "Freestyle", quantity: 3 },
      { type: "Dribbling", quantity: 1 },
    ],
    stats: {
      Technique: 3,
      Speed: 1,
      Stamina: -1,
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo58",
    name: "Defensive Wall",
    cards: [
      { type: "Line Control", quantity: 2 },
      { type: "Marking", quantity: 1 },
      { type: "Sliding", quantity: 1 },
    ],
    stats: {
      Toughness: 2,
      Technique: 1,
      Willpower: 1,
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo59",
    name: "Entertainment Night",
    cards: [
      { type: "Gaming", quantity: 2 },
      { type: "Karaoke", quantity: 2 },
    ],
    stats: {
      Willpower: 3,
      Speed: -2,
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo60",
    name: "Weekend Tournament",
    cards: [
      { type: "Mini-Game", quantity: 3 },
      { type: "Mini Camp", quantity: 1 },
    ],
    stats: {
      Stamina: 2,
      Technique: 1,
      Willpower: 1,
    },
    recommendedPosition: "ALL"
  }
];

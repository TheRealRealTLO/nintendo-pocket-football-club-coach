
import { TrainingCombo, StatType, CardType } from './types';

// Collection of all training combos
export const trainingCombos: TrainingCombo[] = [
  {
    id: "combo-0",
    name: "Basic Passing Drill",
    description: "A fundamental drill to improve short passing accuracy and teamwork.",
    cards: [
      { type: "Passing", count: 2 },
      { type: "Tactics", count: 1 },
      { type: "Vision", count: 1 }
    ],
    stats: {
      PAS: 1,
      TEC: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-1",
    name: "Advanced Through Balls",
    description: "Master the art of the through ball with this challenging combo.",
    cards: [
      { type: "Passing", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Tactics", count: 2 }
    ],
    stats: {
      PAS: 2,
      VIS: 1,
      TEC: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-2",
    name: "Long Ball Precision",
    description: "Improve your long passing accuracy to switch play effectively.",
    cards: [
      { type: "Passing", count: 3 },
      { type: "Power", count: 2 },
      { type: "Vision", count: 1 }
    ],
    stats: {
      PAS: 2,
      VIS: 1,
      POW: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-3",
    name: "Short Passing Rhythm",
    description: "Enhance your short passing game with quick, rhythmic drills.",
    cards: [
      { type: "Passing", count: 2 },
      { type: "Agility", count: 1 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      PAS: 1,
      AGI: 1,
      TEC: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-4",
    name: "Crossing Accuracy",
    description: "Perfect your crosses into the box with this specialized training.",
    cards: [
      { type: "Passing", count: 3 },
      { type: "Technique", count: 2 },
      { type: "Vision", count: 1 }
    ],
    stats: {
      PAS: 2,
      TEC: 1,
      VIS: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-5",
    name: "Defensive Positioning",
    description: "Learn the fundamentals of defensive positioning to protect your goal.",
    cards: [
      { type: "Tactics", count: 2 },
      { type: "Strength", count: 1 },
      { type: "Vision", count: 1 }
    ],
    stats: {
      DEF: 1,
      VIS: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-6",
    name: "Tackling Technique",
    description: "Improve your tackling technique to win the ball cleanly.",
    cards: [
      { type: "Technique", count: 2 },
      { type: "Strength", count: 2 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      DEF: 2,
      TEC: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-7",
    name: "Interception Practice",
    description: "Enhance your interception skills to break up opposition attacks.",
    cards: [
      { type: "Vision", count: 2 },
      { type: "Agility", count: 2 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      DEF: 1,
      VIS: 1,
      AGI: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-8",
    name: "Marking Drills",
    description: "Master the art of marking to shut down key opposition players.",
    cards: [
      { type: "Strength", count: 2 },
      { type: "Tactics", count: 2 },
      { type: "Vision", count: 1 }
    ],
    stats: {
      DEF: 2,
      STR: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-9",
    name: "Clearance Training",
    description: "Improve your ability to clear the ball under pressure.",
    cards: [
      { type: "Power", count: 2 },
      { type: "Technique", count: 1 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      DEF: 1,
      POW: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-10",
    name: "Dribbling Agility",
    description: "Enhance your dribbling agility to glide past defenders.",
    cards: [
      { type: "Agility", count: 3 },
      { type: "Technique", count: 2 },
      { type: "Control", count: 1 }
    ],
    stats: {
      DRI: 2,
      AGI: 1,
      TEC: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-11",
    name: "Close Control Mastery",
    description: "Master close control to keep the ball at your feet in tight spaces.",
    cards: [
      { type: "Control", count: 3 },
      { type: "Technique", count: 2 },
      { type: "Vision", count: 1 }
    ],
    stats: {
      DRI: 2,
      TEC: 1,
      VIS: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-12",
    name: "Pace Dribbling",
    description: "Improve your dribbling speed to outpace opponents.",
    cards: [
      { type: "Speed", count: 3 },
      { type: "Agility", count: 2 },
      { type: "Control", count: 1 }
    ],
    stats: {
      DRI: 2,
      PAC: 1,
      AGI: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-13",
    name: "Feint and Skill Moves",
    description: "Learn a variety of feints and skill moves to deceive defenders.",
    cards: [
      { type: "Technique", count: 3 },
      { type: "Agility", count: 2 },
      { type: "Vision", count: 1 }
    ],
    stats: {
      DRI: 2,
      TEC: 1,
      VIS: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-14",
    name: "Dribbling Under Pressure",
    description: "Enhance your dribbling ability when under pressure from opponents.",
    cards: [
      { type: "Strength", count: 2 },
      { type: "Control", count: 2 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      DRI: 1,
      TEC: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-15",
    name: "Finishing Technique",
    description: "Improve your finishing technique to score more goals.",
    cards: [
      { type: "Technique", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Control", count: 1 }
    ],
    stats: {
      FIN: 2,
      TEC: 1,
      VIS: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-16",
    name: "Power Shooting",
    description: "Develop your shooting power to blast the ball past goalkeepers.",
    cards: [
      { type: "Power", count: 3 },
      { type: "Technique", count: 2 },
      { type: "Vision", count: 1 }
    ],
    stats: {
      FIN: 2,
      POW: 1,
      TEC: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-17",
    name: "Finesse Shots",
    description: "Master the art of the finesse shot to curl the ball into the net.",
    cards: [
      { type: "Technique", count: 3 },
      { type: "Passing", count: 2 },
      { type: "Vision", count: 1 }
    ],
    stats: {
      FIN: 2,
      TEC: 1,
      VIS: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-18",
    name: "Volley Practice",
    description: "Improve your volley technique to score spectacular goals.",
    cards: [
      { type: "Agility", count: 2 },
      { type: "Technique", count: 2 },
      { type: "Vision", count: 1 }
    ],
    stats: {
      FIN: 1,
      TEC: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-19",
    name: "Heading Accuracy",
    description: "Enhance your heading accuracy to score from crosses and set pieces.",
    cards: [
      { type: "Power", count: 2 },
      { type: "Technique", count: 2 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      FIN: 1,
      TEC: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-20",
    name: "Goalkeeping Reflexes",
    description: "Improve your reflexes to make incredible saves.",
    cards: [
      { type: "Agility", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      REF: 2,
      AGI: 1,
      VIS: 1
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo-21",
    name: "Handling Technique",
    description: "Master the art of handling to secure the ball safely.",
    cards: [
      { type: "Technique", count: 3 },
      { type: "Control", count: 2 },
      { type: "Vision", count: 1 }
    ],
    stats: {
      REF: 2,
      TEC: 1,
      VIS: 1
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo-22",
    name: "Diving Technique",
    description: "Improve your diving technique to reach shots in the corners.",
    cards: [
      { type: "Agility", count: 3 },
      { type: "Strength", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      REF: 2,
      AGI: 1,
      STR: 1
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo-23",
    name: "Distribution Accuracy",
    description: "Enhance your distribution accuracy to start attacks from the back.",
    cards: [
      { type: "Passing", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      PAS: 2,
      VIS: 1,
      TEC: 1
    },
     recommendedPosition: "GK"
  },
  {
    id: "combo-24",
    name: "Aerial Reach",
    description: "Improve your reach to claim high balls and crosses.",
    cards: [
      { type: "Power", count: 2 },
      { type: "Agility", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      REF: 1,
      POW: 1
    },
     recommendedPosition: "GK"
  },
  {
    id: "combo-25",
    name: "Speed Training",
    description: "Increase your maximum running speed with this intense training combo.",
    cards: [
      { type: "Speed", count: 3 },
      { type: "Agility", count: 2 },
      { type: "Strength", count: 1 }
    ],
    stats: {
      PAC: 2,
      AGI: 1,
      STR: 1
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-26",
    name: "Agility Enhancement",
    description: "Improve your agility and quickness with this specialized training.",
    cards: [
      { type: "Agility", count: 3 },
      { type: "Technique", count: 2 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      AGI: 2,
      TEC: 1
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-27",
    name: "Strength Building",
    description: "Build your physical strength to dominate opponents.",
    cards: [
      { type: "Strength", count: 3 },
      { type: "Power", count: 2 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      STR: 2,
      POW: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-28",
    name: "Power Development",
    description: "Increase your explosive power for stronger shots and tackles.",
    cards: [
      { type: "Power", count: 3 },
      { type: "Strength", count: 2 },
      { type: "Agility", count: 1 }
    ],
    stats: {
      POW: 2,
      STR: 1,
      AGI: 1
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-29",
    name: "Stamina Improvement",
    description: "Enhance your stamina to last the full 90 minutes.",
    cards: [
      { type: "Speed", count: 2 },
      { type: "Strength", count: 2 },
      { type: "Agility", count: 1 }
    ],
    stats: {
      STA: 2,
      STR: 1
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-30",
    name: "Vision Training",
    description: "Improve your vision and awareness on the field.",
    cards: [
      { type: "Vision", count: 3 },
      { type: "Tactics", count: 2 },
      { type: "Passing", count: 1 }
    ],
    stats: {
      VIS: 2,
      PAS: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-31",
    name: "Tactical Awareness",
    description: "Enhance your tactical understanding of the game.",
    cards: [
      { type: "Tactics", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Passing", count: 1 }
    ],
    stats: {
      TAC: 2,
      VIS: 1
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-32",
    name: "Technique Refinement",
    description: "Refine your overall technique to improve your game.",
    cards: [
      { type: "Technique", count: 3 },
      { type: "Control", count: 2 },
      { type: "Passing", count: 1 }
    ],
    stats: {
      TEC: 2,
      PAS: 1
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-33",
    name: "Control Enhancement",
    description: "Improve your ball control in all situations.",
    cards: [
      { type: "Control", count: 3 },
      { type: "Technique", count: 2 },
      { type: "Agility", count: 1 }
    ],
    stats: {
      DRI: 2,
      TEC: 1
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-34",
    name: "Passing Accuracy",
    description: "Enhance your passing accuracy over all distances.",
    cards: [
      { type: "Passing", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      PAS: 2,
      TEC: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-35",
    name: "Defensive Strength",
    description: "Increase your defensive strength and tackling ability.",
    cards: [
      { type: "Strength", count: 3 },
      { type: "Tactics", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      DEF: 2,
      STR: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-36",
    name: "Attacking Speed",
    description: "Improve your attacking speed and dribbling ability.",
    cards: [
      { type: "Speed", count: 3 },
      { type: "Agility", count: 2 },
      { type: "Control", count: 1 }
    ],
    stats: {
      PAC: 2,
      DRI: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-37",
    name: "Goalkeeping Skills",
    description: "Enhance your goalkeeping skills and reflexes.",
    cards: [
      { type: "Agility", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      REF: 2,
      AGI: 1
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo-38",
    name: "All-Around Training",
    description: "A balanced training combo to improve all aspects of your game.",
    cards: [
      { type: "Speed", count: 1 },
      { type: "Strength", count: 1 },
      { type: "Agility", count: 1 },
      { type: "Technique", count: 1 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      PAC: 1,
      STR: 1,
      AGI: 1,
      TEC: 1,
      TAC: 1
    },
    recommendedPosition: "ALL"
  },
  {
    id: "combo-39",
    name: "Quick Feet Training",
    description: "Develop quick feet and agility with this specialized training combo.",
    cards: [
      { type: "Agility", count: 3 },
      { type: "Technique", count: 2 },
      { type: "Control", count: 1 }
    ],
    stats: {
      AGI: 2,
      DRI: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-40",
    name: "High Leap Training",
    description: "Improve your jumping ability with this specialized training combo.",
    cards: [
      { type: "Agility", count: 2 },
      { type: "Power", count: 2 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      JMP: 3,
      STR: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-41",
    name: "Precision Passing",
    description: "Enhance your precision passing skills for accurate distribution.",
    cards: [
      { type: "Passing", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      PAS: 2,
      TEC: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-42",
    name: "Defensive Wall",
    description: "Become an impenetrable defensive wall with this training.",
    cards: [
      { type: "Strength", count: 3 },
      { type: "Tactics", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      DEF: 2,
      STR: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-43",
    name: "Forward Thrust",
    description: "Improve your forward thrust and attacking prowess.",
    cards: [
      { type: "Speed", count: 3 },
      { type: "Agility", count: 2 },
      { type: "Control", count: 1 }
    ],
    stats: {
      PAC: 2,
      DRI: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-44",
    name: "Goal Guardian",
    description: "Enhance your goalkeeping abilities to become a true goal guardian.",
    cards: [
      { type: "Agility", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      REF: 2,
      AGI: 1
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo-45",
    name: "Midfield Maestro",
    description: "Become a midfield maestro with this specialized training.",
    cards: [
      { type: "Passing", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      PAS: 2,
      VIS: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-46",
    name: "Defensive Rock",
    description: "Become a rock in defense with this strength-focused training.",
    cards: [
      { type: "Strength", count: 3 },
      { type: "Tactics", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      DEF: 2,
      STR: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-47",
    name: "Speed Demon",
    description: "Unleash your inner speed demon with this agility training.",
    cards: [
      { type: "Speed", count: 3 },
      { type: "Agility", count: 2 },
      { type: "Control", count: 1 }
    ],
    stats: {
      PAC: 2,
      DRI: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-48",
    name: "Net Protector",
    description: "Protect the net with enhanced reflexes and technique.",
    cards: [
      { type: "Agility", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      REF: 2,
      AGI: 1
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo-49",
    name: "Playmaker",
    description: "Become the ultimate playmaker with improved vision and passing.",
    cards: [
      { type: "Passing", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      PAS: 2,
      VIS: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-50",
    name: "Iron Curtain",
    description: "Form an iron curtain in defense with strength and tactics.",
    cards: [
      { type: "Strength", count: 3 },
      { type: "Tactics", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      DEF: 2,
      STR: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-51",
    name: "Lightning Striker",
    description: "Strike with lightning speed and agility.",
    cards: [
      { type: "Speed", count: 3 },
      { type: "Agility", count: 2 },
      { type: "Control", count: 1 }
    ],
    stats: {
      PAC: 2,
      DRI: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-52",
    name: "Safe Hands",
    description: "Develop safe hands and reliable goalkeeping technique.",
    cards: [
      { type: "Agility", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      REF: 2,
      AGI: 1
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo-53",
    name: "Creative Midfielder",
    description: "Unleash your creative potential in midfield.",
    cards: [
      { type: "Passing", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      PAS: 2,
      VIS: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-54",
    name: "Unyielding Defender",
    description: "Become an unyielding force in defense.",
    cards: [
      { type: "Strength", count: 3 },
      { type: "Tactics", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      DEF: 2,
      STR: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-55",
    name: "Swift Attacker",
    description: "Attack with swiftness and precision.",
    cards: [
      { type: "Speed", count: 3 },
      { type: "Agility", count: 2 },
      { type: "Control", count: 1 }
    ],
    stats: {
      PAC: 2,
      DRI: 1
    },
    recommendedPosition: "FW"
  },
   {
    id: "combo-56",
    name: "Goal Line Expert",
    description: "Become a goal line expert with top-notch reflexes.",
    cards: [
      { type: "Agility", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      REF: 2,
      AGI: 1
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo-57",
    name: "Passing Virtuoso",
    description: "Master the art of passing with vision and technique.",
    cards: [
      { type: "Passing", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      PAS: 2,
      VIS: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-58",
    name: "Defensive Titan",
    description: "Become a defensive titan with strength and tactical awareness.",
    cards: [
      { type: "Strength", count: 3 },
      { type: "Tactics", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      DEF: 2,
      STR: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-59",
    name: "Aerial Control",
    description: "Master aerial control with this specialized high jump training.",
    cards: [
      { type: "Agility", count: 3 },
      { type: "Ball", count: 2 },
      { type: "Control", count: 2 }
    ],
    stats: {
      JMP: 3,
      BAL: 2,
      TEC: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-60",
    name: "Long Shot Specialist",
    description: "Become a long shot specialist with power and precision.",
    cards: [
      { type: "Power", count: 3 },
      { type: "Technique", count: 2 },
      { type: "Vision", count: 1 }
    ],
    stats: {
      FIN: 2,
      POW: 1,
      TEC: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-61",
    name: "Set Piece Maestro",
    description: "Master set pieces with vision and technique.",
    cards: [
      { type: "Passing", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      PAS: 2,
      VIS: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-62",
    name: "Last-Ditch Defender",
    description: "Become a last-ditch defender with agility and strength.",
    cards: [
      { type: "Agility", count: 3 },
      { type: "Strength", count: 2 },
      { type: "Tactics", count: 1 }
    ],
    stats: {
      DEF: 2,
      STR: 1
    },
    recommendedPosition: "DF"
  },
  {
    id: "combo-63",
    name: "Clinical Finisher",
    description: "Become a clinical finisher with technique and vision.",
    cards: [
      { type: "Technique", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Control", count: 1 }
    ],
    stats: {
      FIN: 2,
      TEC: 1,
      VIS: 1
    },
    recommendedPosition: "FW"
  },
  {
    id: "combo-64",
    name: "Sweeper Keeper",
    description: "Become a sweeper keeper with agility and vision.",
    cards: [
      { type: "Agility", count: 3 },
      { type: "Vision", count: 2 },
      { type: "Passing", count: 1 }
    ],
    stats: {
      REF: 2,
      AGI: 1
    },
    recommendedPosition: "GK"
  },
  {
    id: "combo-65",
    name: "Box-to-Box Midfielder",
    description: "Become a box-to-box midfielder with stamina and technique.",
    cards: [
      { type: "Speed", count: 2 },
      { type: "Strength", count: 2 },
      { type: "Passing", count: 1 }
    ],
    stats: {
      STA: 2,
      STR: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-66",
    name: "Ball-Winning Midfielder",
    description: "Become a ball-winning midfielder with strength and tactics.",
    cards: [
      { type: "Strength", count: 3 },
      { type: "Tactics", count: 2 },
      { type: "Technique", count: 1 }
    ],
    stats: {
      DEF: 2,
      STR: 1
    },
    recommendedPosition: "MF"
  },
  {
    id: "combo-67",
    name: "Target Man",
    description: "Become a target man with strength and aerial ability.",
    cards: [
      { type: "Strength", count: 3 },
      { type: "Agility", count: 2 },
      { type: "Power", count: 1 }
    ],
    stats: {
      FIN: 2,
      STR: 1,
      JMP: 1
    },
    recommendedPosition: "FW"
  }
];

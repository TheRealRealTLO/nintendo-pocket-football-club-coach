
import { TrainingCombo } from '@/data/combos';
import { Player, StatRank, Position } from '@/data/playerTypes';
import { CardType, StatType } from '@/data/types';

// Convert StatRank to numerical value for comparison
const rankToValue = (rank: StatRank): number => {
  const rankValues: Record<StatRank, number> = {
    "E": 0,
    "D": 1,
    "C": 2,
    "B": 3,
    "A": 4,
    "S": 5
  };
  return rankValues[rank];
};

// Get position-specific recommended stat priorities
export const getPositionStatPriorities = (position: Position): StatType[] => {
  switch (position) {
    case "GK":
      return ["Jumping", "Toughness", "Willpower", "Speed", "Technique", "Stamina", "Kicking"];
    case "DF":
      return ["Toughness", "Jumping", "Speed", "Stamina", "Technique", "Willpower", "Kicking"];
    case "MF":
      return ["Stamina", "Technique", "Speed", "Willpower", "Toughness", "Kicking", "Jumping"];
    case "FW":
      return ["Speed", "Kicking", "Technique", "Willpower", "Jumping", "Stamina", "Toughness"];
  }
};

// Get the weakest stat for a player based on position priorities
export const getPlayerWeakestStats = (player: Player): StatType[] => {
  const priorities = getPositionStatPriorities(player.position);
  const statEntries = Object.entries(player.stats) as [StatType, StatRank][];
  
  // Sort stats by rank (weakest first) and then by position priority
  return statEntries
    .sort((a, b) => {
      const [statA, rankA] = a;
      const [statB, rankB] = b;
      
      // First sort by rank value
      const rankDiff = rankToValue(rankA) - rankToValue(rankB);
      if (rankDiff !== 0) return rankDiff;
      
      // If ranks are the same, sort by position priority
      return priorities.indexOf(statA) - priorities.indexOf(statB);
    })
    .map(([stat]) => stat);
};

// Find the best training combo for a player
export const findBestTrainingCombo = (
  player: Player, 
  availableCombos: TrainingCombo[],
  inventory: Record<CardType, number>
): TrainingCombo | null => {
  // Skip recommendation if player is fatigued (Red)
  if (player.fatigue === "Red") {
    return null;
  }
  
  const weakestStats = getPlayerWeakestStats(player);
  const positionSpecificCombos = availableCombos.filter(combo => 
    combo.recommendedPosition === player.position || 
    combo.recommendedPosition === "ALL"
  );

  // Filter for combos we can build with our inventory
  const buildableCombos = positionSpecificCombos.filter(combo => {
    return combo.cards.every(cardReq => {
      const available = inventory[cardReq.type] || 0;
      return available >= cardReq.quantity;
    });
  });

  if (buildableCombos.length === 0) {
    return null;
  }

  // Score each combo based on how well it improves the player's weakest stats
  const scoredCombos = buildableCombos.map(combo => {
    let score = 0;
    
    // Prioritize combos that improve the weakest stats
    weakestStats.forEach((stat, index) => {
      const statImprovement = combo.stats[stat] || 0;
      // Give more weight to the weakest stats (higher scores for earlier indexes)
      score += statImprovement * (weakestStats.length - index);
    });
    
    // Bonus for recommended combos
    if (combo.recommended) {
      score += 10;
    }
    
    // Adjust score based on player fatigue
    if (player.fatigue === "Amber") {
      score *= 0.8; // Reduce effectiveness for tired players
    }
    
    return { combo, score };
  });

  // Sort by score and return the best combo
  scoredCombos.sort((a, b) => b.score - a.score);
  return scoredCombos.length > 0 ? scoredCombos[0].combo : null;
};

// Create default stats based on position
export const createDefaultStats = (position: Position): Record<StatType, StatRank> => {
  const baseStats: Record<StatType, StatRank> = {
    "Kicking": "E",
    "Speed": "E",
    "Stamina": "E",
    "Technique": "E",
    "Toughness": "E",
    "Jumping": "E",
    "Willpower": "E"
  };
  
  // Slightly boost position-relevant stats
  switch (position) {
    case "GK":
      baseStats.Jumping = "D";
      baseStats.Toughness = "D";
      break;
    case "DF":
      baseStats.Toughness = "D";
      baseStats.Stamina = "D";
      break;
    case "MF":
      baseStats.Stamina = "D";
      baseStats.Technique = "D";
      break;
    case "FW":
      baseStats.Speed = "D";
      baseStats.Kicking = "D";
      break;
  }
  
  return baseStats;
};

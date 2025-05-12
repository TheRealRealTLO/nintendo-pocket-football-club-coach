
import React, { useState } from 'react';
import { Player } from '@/data/playerTypes';
import { TrainingCombo } from '@/data/combos';
import { CardType } from '@/data/types';
import { Button } from '@/components/ui/button';
import { Radio } from 'lucide-react';
import FatigueIndicator from './FatigueIndicator';
import ComboItem from '@/components/ComboItem';
import CardRequirements from '@/components/combo-item/CardRequirements';

interface PlayerTrainingCardProps {
  player: Player;
  recommendedCombo: TrainingCombo | null;
  selectedComboId: string | null;
  availableCombos: TrainingCombo[];
  inventory: Record<CardType, number>;
  onSelectCombo: (comboId: string | null) => void;
}

const PlayerTrainingCard: React.FC<PlayerTrainingCardProps> = ({
  player,
  recommendedCombo,
  selectedComboId,
  availableCombos,
  inventory,
  onSelectCombo
}) => {
  const [showAllCombos, setShowAllCombos] = useState(false);

  // Filter available combos based on inventory
  const buildableCombos = availableCombos.filter(combo => {
    return combo.cards.every(cardReq => {
      const available = inventory[cardReq.type] || 0;
      return available >= cardReq.quantity;
    });
  });

  // Check if we can build the combo with our inventory
  const canBuildCombo = (combo: TrainingCombo): boolean => {
    return combo.cards.every(cardReq => {
      const available = inventory[cardReq.type] || 0;
      return available >= cardReq.quantity;
    });
  };

  // Position color indicator
  const positionColors: Record<string, string> = {
    "GK": "border-yellow-500",
    "DF": "border-blue-500",
    "MF": "border-green-500", 
    "FW": "border-red-500"
  };

  return (
    <div className={`bg-white rounded-md overflow-hidden shadow-sm border-l-4 ${positionColors[player.position]}`}>
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <div className="flex items-center">
          <span className="font-pixel text-sm mr-2">#{player.number}</span>
          <h3 className="font-pixel text-base">{player.name}</h3>
          <div className="ml-2 px-2 py-0.5 bg-gray-200 rounded text-xs font-pixel">
            {player.position}
          </div>
        </div>
        <FatigueIndicator status={player.fatigue} />
      </div>
      
      <div className="p-3">
        {player.fatigue === "Red" ? (
          <div className="bg-red-100 text-red-800 p-3 rounded-md mb-3">
            <p className="font-pixel text-sm">Player is fatigued and needs rest</p>
          </div>
        ) : (
          <>
            <div className="mb-3">
              <label className="flex items-center mb-2">
                <input 
                  type="radio" 
                  checked={selectedComboId === null} 
                  onChange={() => onSelectCombo(null)}
                  className="mr-2"
                />
                <span className="font-pixel text-sm">Rest player (recover fatigue)</span>
              </label>
              
              {recommendedCombo && canBuildCombo(recommendedCombo) && (
                <label className="block mb-2">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      checked={selectedComboId === recommendedCombo.id} 
                      onChange={() => onSelectCombo(recommendedCombo.id)}
                      className="mr-2"
                    />
                    <span className="font-pixel text-sm">Recommended training:</span>
                  </div>
                  <div className="ml-6 mt-2">
                    <ComboItem
                      combo={recommendedCombo}
                      isAvailable={true}
                      onApply={() => onSelectCombo(recommendedCombo.id)}
                    />
                  </div>
                </label>
              )}
              
              {buildableCombos.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowAllCombos(!showAllCombos)}
                  className="font-pixel text-xs text-gray-500 mt-1"
                >
                  {showAllCombos ? "Hide options" : "Show all options"} 
                  ({buildableCombos.length})
                </Button>
              )}
            </div>
            
            {showAllCombos && (
              <div className="max-h-64 overflow-y-auto border border-gray-200 rounded-md p-2">
                {buildableCombos.map(combo => (
                  <label key={combo.id} className="block mb-2">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        checked={selectedComboId === combo.id} 
                        onChange={() => onSelectCombo(combo.id)}
                        className="mr-2"
                      />
                      <span className="font-pixel text-sm">{combo.name}</span>
                    </div>
                    <div className="ml-6 mt-1">
                      <CardRequirements cards={combo.cards} />
                    </div>
                  </label>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PlayerTrainingCard;

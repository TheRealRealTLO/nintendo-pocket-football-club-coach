
import React, { useState, useEffect } from 'react';
import { Player } from '@/data/playerTypes';
import { TrainingCombo } from '@/data/combos';
import { CardType } from '@/data/types';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { findBestTrainingCombo } from '@/utils/trainingRecommendations';
import PlayerTrainingCard from './PlayerTrainingCard';
import { toast } from '@/hooks/use-toast';

interface TrainingCampProps {
  players: Player[];
  priorityPlayers: Player[];
  availableCombos: TrainingCombo[];
  inventory: Record<CardType, number>;
  onApplyTraining: (playerId: string, comboId: string | null) => void;
  onRunCamp: () => void;
  lastTrainingCamp: string | null;
  trainingCampCount: number;
}

const TrainingCamp: React.FC<TrainingCampProps> = ({
  players,
  priorityPlayers,
  availableCombos,
  inventory,
  onApplyTraining,
  onRunCamp,
  lastTrainingCamp,
  trainingCampCount
}) => {
  const [selectedPlayers, setSelectedPlayers] = useState<Record<string, string | null>>({});
  const [recommendations, setRecommendations] = useState<Record<string, TrainingCombo | null>>({});

  // Generate recommendations when priority players or inventory changes
  useEffect(() => {
    const newRecommendations: Record<string, TrainingCombo | null> = {};
    
    priorityPlayers.forEach(player => {
      const bestCombo = findBestTrainingCombo(player, availableCombos, inventory);
      newRecommendations[player.id] = bestCombo;
    });
    
    setRecommendations(newRecommendations);
  }, [priorityPlayers, availableCombos, inventory]);

  // Initialize selected players
  useEffect(() => {
    const initialSelected: Record<string, string | null> = {};
    
    priorityPlayers.forEach(player => {
      const recommended = recommendations[player.id];
      // Don't auto-select training for fatigued players
      if (player.fatigue === "Red") {
        initialSelected[player.id] = null; // Rest
      } else {
        initialSelected[player.id] = recommended?.id || null;
      }
    });
    
    setSelectedPlayers(initialSelected);
  }, [priorityPlayers, recommendations]);

  const handleRunCamp = () => {
    // Apply training to all selected players
    Object.entries(selectedPlayers).forEach(([playerId, comboId]) => {
      onApplyTraining(playerId, comboId);
    });
    
    // Run the training camp
    onRunCamp();
    
    toast({
      title: "Training Complete",
      description: `${Object.values(selectedPlayers).filter(Boolean).length} players trained, ${Object.values(selectedPlayers).filter(v => !v).length} players rested.`
    });
  };

  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Calendar className="mr-2" />
          <h2 className="font-pixel text-xl">Training Camp #{trainingCampCount + 1}</h2>
        </div>
        <Button
          onClick={handleRunCamp}
          className="font-pixel bg-npfc-green text-black hover:bg-npfc-green-dark border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,0.8)]"
          disabled={priorityPlayers.length === 0}
        >
          Run Training Camp
        </Button>
      </div>
      
      {lastTrainingCamp && (
        <div className="mb-6 p-3 bg-gray-100 rounded-md">
          <p className="font-pixel text-sm">
            Last training camp: {new Date(lastTrainingCamp).toLocaleDateString()}
          </p>
        </div>
      )}
      
      {priorityPlayers.length === 0 ? (
        <div className="text-center p-8 bg-gray-50 rounded-md">
          <p className="font-pixel text-gray-500 mb-2">No players selected for training.</p>
          <p className="font-pixel text-sm text-gray-400">
            Add players to your squad and mark them as priority for training.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {priorityPlayers.map(player => (
            <PlayerTrainingCard
              key={player.id}
              player={player}
              recommendedCombo={recommendations[player.id]}
              selectedComboId={selectedPlayers[player.id]}
              availableCombos={availableCombos.filter(combo =>
                combo.recommendedPosition === player.position || 
                combo.recommendedPosition === "ALL"
              )}
              inventory={inventory}
              onSelectCombo={(comboId) => {
                setSelectedPlayers(prev => ({
                  ...prev,
                  [player.id]: comboId
                }));
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrainingCamp;

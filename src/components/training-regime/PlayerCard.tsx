
import React from 'react';
import { Player, StatRank } from '@/data/playerTypes';
import { Button } from '@/components/ui/button';
import { Trash2, Star } from 'lucide-react';
import FatigueIndicator from './FatigueIndicator';
import { allStatTypes } from '@/data/combos';

interface PlayerCardProps {
  player: Player;
  onRemove: (id: string) => void;
  onTogglePriority: (id: string) => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, onRemove, onTogglePriority }) => {
  // Colors for each position
  const positionColors: Record<string, string> = {
    "GK": "bg-yellow-500",
    "DF": "bg-blue-500",
    "MF": "bg-green-500", 
    "FW": "bg-red-500"
  };
  
  // Colors for each stat rank
  const rankColors: Record<StatRank, string> = {
    "E": "bg-gray-400",
    "D": "bg-blue-400",
    "C": "bg-green-400",
    "B": "bg-yellow-400",
    "A": "bg-orange-400",
    "S": "bg-red-400"
  };

  // Get training history display
  const trainingHistory = player.trainingHistory.slice(0, 4);
  while (trainingHistory.length < 4) {
    trainingHistory.push({ trained: false, comboId: null, date: "" });
  }
  
  return (
    <div className="bg-white border-2 border-gray-300 rounded-md overflow-hidden shadow-sm">
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <div className="flex items-center">
          <div className={`${positionColors[player.position]} text-white font-pixel text-xs p-1 rounded mr-2`}>
            {player.position}
          </div>
          <span className="font-pixel text-sm mr-2">#{player.number}</span>
          <h3 className="font-pixel text-base">{player.name}</h3>
        </div>
        <div className="flex items-center space-x-1">
          <FatigueIndicator status={player.fatigue} />
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-full ${player.trainingPriority ? 'text-amber-500' : 'text-gray-400'}`}
            onClick={() => onTogglePriority(player.id)}
            title={player.trainingPriority ? "Remove from training priority" : "Add to training priority"}
          >
            <Star size={16} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-gray-400 hover:text-red-500"
            onClick={() => onRemove(player.id)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
      
      <div className="p-3">
        <div className="grid grid-cols-7 gap-1 mb-3">
          {allStatTypes.map(stat => (
            <div key={stat} className="text-center">
              <div className="font-pixel text-xs text-gray-600 mb-1">{stat.slice(0, 1)}</div>
              <div className={`${rankColors[player.stats[stat]]} rounded-sm font-pixel font-bold text-xs text-center p-1`}>
                {player.stats[stat]}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-500">
            <span className="font-pixel">{player.foot} foot</span>
          </div>
          <div className="flex space-x-1">
            {trainingHistory.map((history, i) => (
              <div 
                key={i}
                className={`w-4 h-4 border border-gray-300 rounded-sm ${history.trained ? 'bg-green-400' : 'bg-gray-200'}`}
                title={history.date ? `Training on ${new Date(history.date).toLocaleDateString()}` : 'No training'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;


import React from 'react';
import { Player } from '@/data/playerTypes';
import PlayerCard from './PlayerCard';

interface PlayerListProps {
  players: Player[];
  onRemovePlayer: (id: string) => void;
  onTogglePriority: (id: string) => void;
}

const PlayerList: React.FC<PlayerListProps> = ({ 
  players, 
  onRemovePlayer,
  onTogglePriority
}) => {
  const sortedPlayers = [...players].sort((a, b) => {
    // Sort by position: GK, DF, MF, FW
    const positionOrder: Record<string, number> = { "GK": 1, "DF": 2, "MF": 3, "FW": 4 };
    const positionDiff = positionOrder[a.position] - positionOrder[b.position];
    
    if (positionDiff !== 0) return positionDiff;
    
    // Then by jersey number
    return a.number - b.number;
  });

  // Group players by position
  const playersByPosition: Record<string, Player[]> = {
    "GK": sortedPlayers.filter(p => p.position === "GK"),
    "DF": sortedPlayers.filter(p => p.position === "DF"),
    "MF": sortedPlayers.filter(p => p.position === "MF"),
    "FW": sortedPlayers.filter(p => p.position === "FW")
  };

  const positionColors = {
    "GK": "bg-yellow-200 border-yellow-400",
    "DF": "bg-blue-200 border-blue-400",
    "MF": "bg-green-200 border-green-400",
    "FW": "bg-red-200 border-red-400"
  };

  return (
    <div className="space-y-6">
      {Object.entries(playersByPosition).map(([position, posPlayers]) => (
        posPlayers.length > 0 && (
          <div key={position} className="bg-white rounded-md shadow-md overflow-hidden">
            <div className={`font-pixel text-lg px-4 py-2 ${positionColors[position as keyof typeof positionColors]}`}>
              {position} ({posPlayers.length})
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {posPlayers.map(player => (
                <PlayerCard 
                  key={player.id} 
                  player={player} 
                  onRemove={onRemovePlayer}
                  onTogglePriority={onTogglePriority}
                />
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default PlayerList;

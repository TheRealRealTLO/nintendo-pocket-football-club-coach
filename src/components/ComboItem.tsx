
import React from 'react';
import { TrainingCombo, StatType, allStatTypes, statColors, cardColors, cardToCategory, CardType } from '../data/combos';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Wrench, Activity, Users } from 'lucide-react';

interface ComboItemProps {
  combo: TrainingCombo;
  isAvailable: boolean;
  onApply: () => void;
}

// Helper function to get stat icon
const getStatIcon = (stat: StatType) => {
  switch(stat) {
    case "Kicking": return "🦵";
    case "Speed": return "⚡";
    case "Stamina": return "🔋";
    case "Technique": return "✨";
    case "Toughness": return "💪";
    case "Jumping": return "🦘";
    case "Willpower": return "🧠";
    default: return "";
  }
};

// Helper function to get position badge color
const getPositionColor = (position?: string) => {
  switch(position) {
    case "GK": return "bg-orange-400 text-black";
    case "DF": return "bg-blue-400 text-black";
    case "MF": return "bg-green-400 text-black";
    case "FW": return "bg-red-400 text-black";
    case "ALL": return "bg-purple-400 text-black";
    default: return "bg-gray-400 text-black";
  }
};

const ComboItem: React.FC<ComboItemProps> = ({ combo, isAvailable, onApply }) => {
  // Get icon component based on card type
  const getCardIcon = (type: CardType) => {
    const category = cardToCategory[type];
    switch (category) {
      case "Tactical": return <Star size={14} className="text-black" />;
      case "Technical": return <Wrench size={14} className="text-black" />;
      case "Physical": return <Activity size={14} className="text-black" />;
      case "Support": return <Users size={14} className="text-black" />;
      default: return null;
    }
  };

  return (
    <div className={`pixel-card mb-4 ${isAvailable ? '' : 'opacity-50'}`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-pixel text-sm text-black">{combo.name}</h3>
        {combo.recommendedPosition && (
          <Badge className={`${getPositionColor(combo.recommendedPosition)} ml-2`}>
            {combo.recommendedPosition}
          </Badge>
        )}
      </div>
      
      <div className="mb-3">
        <p className="font-pixel text-xs mb-1">Requirements:</p>
        <div className="flex flex-wrap gap-2">
          {combo.cards.map((card, index) => (
            <Badge key={index} className={`${cardColors[card.type]} text-black flex items-center gap-1`}>
              {getCardIcon(card.type)}
              {card.type} x{card.quantity}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="mb-3">
        <p className="font-pixel text-xs mb-1">Stat Improvements:</p>
        <div className="flex flex-wrap gap-2">
          {allStatTypes.map((stat) => (
            combo.stats[stat] ? (
              <Badge 
                key={stat} 
                className={`${statColors[stat]} flex items-center gap-1 ${combo.stats[stat]! < 0 ? 'border-2 border-red-500' : ''}`}
              >
                {getStatIcon(stat)} {stat} {combo.stats[stat]! > 0 ? `+${combo.stats[stat]}` : combo.stats[stat]}
              </Badge>
            ) : null
          ))}
        </div>
      </div>
      
      <Button
        className="pixel-button w-full mt-2"
        disabled={!isAvailable}
        onClick={onApply}
      >
        Apply Combo
      </Button>
    </div>
  );
};

export default ComboItem;


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
                className={`${statColors[stat]}`}
              >
                {stat} +{combo.stats[stat]}
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

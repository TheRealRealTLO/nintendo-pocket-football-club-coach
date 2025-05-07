
import React from 'react';
import { TrainingCombo } from '../data/combos';
import { Button } from '@/components/ui/button';
import PositionBadge from './combo-item/PositionBadge';
import CardRequirements from './combo-item/CardRequirements';
import StatImprovements from './combo-item/StatImprovements';
import { Star } from 'lucide-react';

interface ComboItemProps {
  combo: TrainingCombo;
  isAvailable: boolean;
  onApply: () => void;
}

// This component preserves the original grid view of combos
const ComboItem: React.FC<ComboItemProps> = ({ combo, isAvailable, onApply }) => {
  return (
    <div className={`pixel-card p-3 flex flex-col h-full ${isAvailable ? '' : 'opacity-50'}`}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-1">
          <h3 className="font-pixel text-sm text-black">{combo.name}</h3>
          {combo.recommended && (
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          )}
        </div>
        {combo.recommendedPosition && (
          <PositionBadge position={combo.recommendedPosition} />
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-3 flex-grow">
        <CardRequirements cards={combo.cards} />
        <StatImprovements stats={combo.stats} />
      </div>
      
      <Button
        className="pixel-button w-full mt-3 py-1 h-auto text-xs"
        disabled={!isAvailable}
        onClick={onApply}
      >
        Apply Combo
      </Button>
    </div>
  );
};

export default ComboItem;

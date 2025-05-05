
import React from 'react';
import { TrainingCombo } from '../data/combos';
import { Button } from '@/components/ui/button';
import PositionBadge from './combo-item/PositionBadge';
import CardRequirements from './combo-item/CardRequirements';
import StatImprovements from './combo-item/StatImprovements';

interface ComboItemProps {
  combo: TrainingCombo;
  isAvailable: boolean;
  onApply: () => void;
}

const ComboItem: React.FC<ComboItemProps> = ({ combo, isAvailable, onApply }) => {
  return (
    <div className={`pixel-card mb-3 p-3 ${isAvailable ? '' : 'opacity-50'}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-pixel text-sm text-black">{combo.name}</h3>
        {combo.recommendedPosition && (
          <PositionBadge position={combo.recommendedPosition} />
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <CardRequirements cards={combo.cards} />
        <StatImprovements stats={combo.stats} />
      </div>
      
      <Button
        className="pixel-button w-full mt-2 py-1 h-auto text-xs"
        disabled={!isAvailable}
        onClick={onApply}
      >
        Apply Combo
      </Button>
    </div>
  );
};

export default ComboItem;

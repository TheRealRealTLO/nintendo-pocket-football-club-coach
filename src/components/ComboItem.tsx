
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
    <div className={`pixel-card mb-4 ${isAvailable ? '' : 'opacity-50'}`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-pixel text-sm text-black">{combo.name}</h3>
        {combo.recommendedPosition && (
          <PositionBadge position={combo.recommendedPosition} />
        )}
      </div>
      
      <CardRequirements cards={combo.cards} />
      
      <StatImprovements stats={combo.stats} />
      
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

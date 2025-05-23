
import React from 'react';
import { TrainingCombo } from '../../data/combos';
import ComboItem from '../ComboItem';
import { useIsMobile } from '../../hooks/use-mobile';

interface CombosTabProps {
  combos: (TrainingCombo & { key?: string })[];
  availableCombos: TrainingCombo[];
  selectedStat: boolean;
  onApplyCombo: (combo: TrainingCombo) => void;
  viewMode?: 'grid';
}

const CombosTab: React.FC<CombosTabProps> = ({
  combos,
  availableCombos,
  selectedStat,
  onApplyCombo
}) => {
  const isMobile = useIsMobile();

  if (combos.length === 0) {
    return (
      <div className="text-center p-6">
        <p className="font-pixel text-sm text-gray-500">
          No combos match your search or filter.
          {selectedStat && " Try selecting a different stat or adjust your search."}
        </p>
      </div>
    );
  }

  // Grid view using ComboItem with improved responsiveness
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {combos.map(combo => {
        const isAvailable = availableCombos.some(c => c.id === combo.id);
        return (
          <ComboItem
            key={combo.key || `combo-${combo.id}`}
            combo={combo}
            isAvailable={isAvailable}
            onApply={() => onApplyCombo(combo)}
          />
        );
      })}
    </div>
  );
};

export default CombosTab;

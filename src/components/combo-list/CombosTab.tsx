
import React from 'react';
import { TrainingCombo } from '../../data/combos';
import ComboTable from './ComboTable';
import ComboItem from '../ComboItem';

interface CombosTabProps {
  combos: (TrainingCombo & { key?: string })[];
  availableCombos: TrainingCombo[];
  selectedStat: boolean;
  onApplyCombo: (combo: TrainingCombo) => void;
  viewMode?: 'table' | 'grid';
}

const CombosTab: React.FC<CombosTabProps> = ({
  combos,
  availableCombos,
  selectedStat,
  onApplyCombo,
  viewMode = 'grid'
}) => {
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

  if (viewMode === 'table') {
    return (
      <ComboTable
        combos={combos}
        availableCombos={availableCombos}
        onApplyCombo={onApplyCombo}
      />
    );
  }

  // Default grid view using ComboItem
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

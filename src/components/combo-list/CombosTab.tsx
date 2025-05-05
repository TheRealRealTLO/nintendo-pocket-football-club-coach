
import React from 'react';
import { TrainingCombo } from '../../data/combos';
import ComboTable from './ComboTable';

interface CombosTabProps {
  combos: (TrainingCombo & { key?: string })[];
  availableCombos: TrainingCombo[];
  selectedStat: boolean;
  onApplyCombo: (combo: TrainingCombo) => void;
}

const CombosTab: React.FC<CombosTabProps> = ({
  combos,
  availableCombos,
  selectedStat,
  onApplyCombo
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

  return (
    <ComboTable
      combos={combos}
      availableCombos={availableCombos}
      onApplyCombo={onApplyCombo}
    />
  );
};

export default CombosTab;

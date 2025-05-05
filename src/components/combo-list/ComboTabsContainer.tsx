
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { TrainingCombo } from '../../data/combos';
import CombosTab from './CombosTab';

interface ComboTabsContainerProps {
  availableCombos: TrainingCombo[];
  filteredCombos: TrainingCombo[];
  allFilteredCombos: TrainingCombo[];
  selectedStat: boolean;
  onApplyCombo: (combo: TrainingCombo) => void;
}

const ComboTabsContainer: React.FC<ComboTabsContainerProps> = ({
  availableCombos,
  filteredCombos,
  allFilteredCombos,
  selectedStat,
  onApplyCombo
}) => {
  return (
    <Tabs defaultValue="available">
      <TabsList className="grid w-full grid-cols-2 mb-4">
        <TabsTrigger value="available">Available ({filteredCombos.length})</TabsTrigger>
        <TabsTrigger value="all">All Training Combinations</TabsTrigger>
      </TabsList>
      
      <TabsContent value="available" className="max-h-[60vh] overflow-y-auto py-2">
        <CombosTab 
          combos={filteredCombos}
          availableCombos={availableCombos}
          selectedStat={!!selectedStat}
          onApplyCombo={onApplyCombo}
        />
      </TabsContent>

      <TabsContent value="all" className="max-h-[60vh] overflow-y-auto py-2">
        <CombosTab 
          combos={allFilteredCombos}
          availableCombos={availableCombos}
          selectedStat={!!selectedStat}
          onApplyCombo={onApplyCombo}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ComboTabsContainer;

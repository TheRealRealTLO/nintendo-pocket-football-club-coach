
import React, { useState } from 'react';
import { TrainingCombo } from '../../data/combos';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import CombosTab from './CombosTab';
import ComboTable from './ComboTable';
import { Star } from 'lucide-react';

interface ComboTabsContainerProps {
  availableCombos: TrainingCombo[];
  filteredCombos: TrainingCombo[];
  allFilteredCombos: TrainingCombo[];
  selectedStat: boolean;
  onApplyCombo: (combo: TrainingCombo) => void;
  onResetFilters: () => void;
}

const ComboTabsContainer: React.FC<ComboTabsContainerProps> = ({
  availableCombos,
  filteredCombos,
  allFilteredCombos,
  selectedStat,
  onApplyCombo,
  onResetFilters
}) => {
  const [view, setView] = useState<'grid' | 'table'>('grid');
  const recommendedCount = filteredCombos.filter(combo => combo.recommended).length;
  const isShowingRecommended = filteredCombos.every(combo => combo.recommended) && filteredCombos.length > 0;
  
  return (
    <div>
      <div className="p-4 border-t">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-pixel">
              Available Combos ({filteredCombos.length})
              {isShowingRecommended && (
                <span className="text-sm text-yellow-600 flex items-center gap-1 mt-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> 
                  Showing recommended combos ({recommendedCount})
                </span>
              )}
            </h3>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onResetFilters}
              className="font-pixel text-xs"
            >
              Reset Filters
            </Button>
            <Tabs defaultValue="grid" className="w-[180px]" onValueChange={(value) => setView(value as 'grid' | 'table')}>
              <TabsList className="font-pixel text-xs">
                <TabsTrigger value="grid" className="font-pixel text-xs">Grid View</TabsTrigger>
                <TabsTrigger value="table" className="font-pixel text-xs">Table View</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        {view === 'grid' ? (
          <CombosTab 
            combos={filteredCombos}
            availableCombos={availableCombos}
            selectedStat={selectedStat}
            onApplyCombo={onApplyCombo}
          />
        ) : (
          <ComboTable 
            combos={filteredCombos}
            availableCombos={availableCombos}
            onApplyCombo={onApplyCombo}
          />
        )}

        {filteredCombos.length === 0 && allFilteredCombos.length > 0 && (
          <div className="text-center p-6">
            <p className="text-gray-600 font-pixel">No combos match your current filters.</p>
            <Button 
              className="mt-2 font-pixel text-xs"
              onClick={onResetFilters}
              variant="outline"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComboTabsContainer;


import React from 'react';
import { TrainingCombo, allStatTypes, statColors, StatType } from '../data/combos';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import ComboItem from './ComboItem';
import { Undo2 } from 'lucide-react';

interface ComboListProps {
  availableCombos: TrainingCombo[];
  filteredCombos: TrainingCombo[];
  selectedStat: StatType | null;
  setSelectedStat: (stat: StatType | null) => void;
  applyCombo: (comboId: string, cards: any[]) => void;
  undoLastCombo: () => void;
  hasHistory: boolean;
}

const ComboList: React.FC<ComboListProps> = ({
  availableCombos,
  filteredCombos,
  selectedStat,
  setSelectedStat,
  applyCombo,
  undoLastCombo,
  hasHistory
}) => {
  // Handler for applying a combo
  const handleApplyCombo = (combo: TrainingCombo) => {
    applyCombo(combo.id, combo.cards);
    toast({
      title: "Combo Applied",
      description: `${combo.name} has been applied and cards have been deducted from your inventory.`
    });
  };

  // Handler for undoing the last action
  const handleUndo = () => {
    undoLastCombo();
    toast({
      title: "Combo Undone",
      description: "Your last combo has been reversed and cards have been returned to your inventory."
    });
  };

  // Render filter badges
  const renderStatFilters = () => (
    <div className="mb-4">
      <p className="font-pixel text-xs mb-2">Filter by stat:</p>
      <div className="flex flex-wrap gap-2 justify-start">
        <Badge 
          className={`cursor-pointer ${!selectedStat ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedStat(null)}
        >
          All
        </Badge>
        {allStatTypes.map((stat) => (
          <Badge
            key={stat}
            className={`cursor-pointer ${statColors[stat]} ${selectedStat === stat ? 'ring-2 ring-black' : ''}`}
            onClick={() => setSelectedStat(stat)}
          >
            {stat}
          </Badge>
        ))}
      </div>
    </div>
  );

  // Render available combos tab content
  const renderAvailableCombosTab = () => (
    <TabsContent value="available" className="max-h-[60vh] overflow-y-auto py-2">
      {filteredCombos.length > 0 ? (
        filteredCombos.map((combo) => (
          <ComboItem
            key={combo.id}
            combo={combo}
            isAvailable={true}
            onApply={() => handleApplyCombo(combo)}
          />
        ))
      ) : (
        <div className="text-center p-6">
          <p className="font-pixel text-sm text-gray-500">
            No available combos match your filter.
            {selectedStat && " Try selecting a different stat."}
          </p>
        </div>
      )}
    </TabsContent>
  );

  // Render all combos tab content
  const renderAllCombosTab = () => (
    <TabsContent value="all" className="max-h-[60vh] overflow-y-auto py-2">
      {filteredCombos.length > 0 ? (
        filteredCombos.map((combo) => {
          const isAvailable = availableCombos.some(c => c.id === combo.id);
          return (
            <ComboItem
              key={combo.id}
              combo={combo}
              isAvailable={isAvailable}
              onApply={() => handleApplyCombo(combo)}
            />
          );
        })
      ) : (
        <div className="text-center p-6">
          <p className="font-pixel text-sm text-gray-500">
            No combos match your filter.
          </p>
        </div>
      )}
    </TabsContent>
  );

  return (
    <div className="pixel-card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-pixel text-lg text-black">Available Combos</h2>
        <Button
          className="pixel-button-red"
          disabled={!hasHistory}
          onClick={handleUndo}
        >
          <Undo2 size={16} className="mr-2" />
          Undo
        </Button>
      </div>

      {renderStatFilters()}

      <Tabs defaultValue="available">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="available">Available ({filteredCombos.length})</TabsTrigger>
          <TabsTrigger value="all">All Combos</TabsTrigger>
        </TabsList>
        
        {renderAvailableCombosTab()}
        {renderAllCombosTab()}
      </Tabs>
    </div>
  );
};

export default ComboList;

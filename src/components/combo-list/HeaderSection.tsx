
import React from 'react';
import { Button } from '@/components/ui/button';
import { Undo2, ListFilter } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useIsMobile } from '../../hooks/use-mobile';
import { tokens } from '@/styles/tokens';

interface HeaderSectionProps {
  hasHistory: boolean;
  onUndo: () => void;
  showAllCombos?: boolean;
  setShowAllCombos?: (show: boolean) => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  hasHistory,
  onUndo,
  showAllCombos = false,
  setShowAllCombos = () => {}
}) => {
  const isMobile = useIsMobile();
  
  const handleUndo = () => {
    onUndo();
    toast({
      title: "Combo Undone",
      description: "Your last combo has been reversed and cards have been returned to your inventory."
    });
  };

  const toggleShowAllCombos = () => {
    setShowAllCombos(!showAllCombos);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
      <h2 className={`${tokens.fontWeight.pixel} ${tokens.fontSize.lg} text-black`}>Training Combos</h2>
      <div className="flex flex-wrap gap-2 w-full sm:w-auto justify-between sm:justify-end">
        <Button
          variant="outline"
          className={`${tokens.fontWeight.pixel} ${tokens.fontSize.xs} ${showAllCombos ? 'bg-yellow-100' : ''} flex items-center gap-1`}
          onClick={toggleShowAllCombos}
        >
          <ListFilter size={16} />
          {showAllCombos ? "Show Available Only" : "Show All 132 Combos"}
        </Button>
        <Button
          className={`${tokens.button.pixel} ${tokens.button.variants.danger} px-3 py-1 h-auto`}
          disabled={!hasHistory}
          onClick={handleUndo}
        >
          <Undo2 size={16} className={isMobile ? "" : "mr-2"} />
          {!isMobile && "Undo"}
        </Button>
      </div>
    </div>
  );
};

export default HeaderSection;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Undo2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface HeaderSectionProps {
  hasHistory: boolean;
  onUndo: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
  hasHistory,
  onUndo
}) => {
  const handleUndo = () => {
    onUndo();
    toast({
      title: "Combo Undone",
      description: "Your last combo has been reversed and cards have been returned to your inventory."
    });
  };

  return (
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
  );
};

export default HeaderSection;


import React from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { tokens } from '@/styles/tokens';

interface ActionButtonsProps {
  onReset: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onReset }) => {
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset your inventory?')) {
      onReset();
      toast({
        title: "Inventory Reset",
        description: "Your card inventory has been reset",
      });
    }
  };

  return (
    <Button 
      className={`${tokens.button.pixel} ${tokens.button.variants.danger}`} 
      onClick={handleReset}
    >
      <RefreshCw size={16} className="mr-2" />
      Reset
    </Button>
  );
};

export default ActionButtons;

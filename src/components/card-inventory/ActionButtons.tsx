
import React from 'react';
import { Save, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface ActionButtonsProps {
  onReset: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onReset }) => {
  const handleSave = () => {
    toast({
      title: "Inventory Saved",
      description: "Your card inventory has been saved",
    });
  };

  return (
    <div className="flex justify-center mt-4 gap-4">
      <Button 
        className="pixel-button-blue" 
        onClick={handleSave}
      >
        <Save size={16} className="mr-2" />
        Save
      </Button>
      <Button 
        className="pixel-button-red" 
        onClick={onReset}
      >
        <RefreshCw size={16} className="mr-2" />
        Reset
      </Button>
    </div>
  );
};

export default ActionButtons;

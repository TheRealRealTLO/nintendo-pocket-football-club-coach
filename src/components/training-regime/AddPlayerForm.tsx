
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createDefaultStats } from '@/utils/trainingRecommendations';
import { Position, FatigueStatus } from '@/data/playerTypes';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AddPlayerFormProps {
  onAddPlayer: (player: any) => void;
  onClose: () => void;
}

interface PlayerFormValues {
  name: string;
  position: Position;
  number: number;
  foot: 'Left' | 'Right' | 'Both';
}

const AddPlayerForm: React.FC<AddPlayerFormProps> = ({ onAddPlayer, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const form = useForm<PlayerFormValues>({
    defaultValues: {
      name: '',
      position: 'MF',
      number: 1,
      foot: 'Right'
    }
  });

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const onSubmit = (data: PlayerFormValues) => {
    const newPlayer = {
      ...data,
      number: parseInt(String(data.number)),
      fatigue: 'Green' as FatigueStatus,
      trainingPriority: true,
      stats: createDefaultStats(data.position)
    };
    
    onAddPlayer(newPlayer);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-pixel text-lg">Add New Player</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-pixel">Player Name</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="Enter player name" 
                      className="font-pixel"
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-pixel">Position</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="font-pixel">
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="GK" className="font-pixel">GK</SelectItem>
                        <SelectItem value="DF" className="font-pixel">DF</SelectItem>
                        <SelectItem value="MF" className="font-pixel">MF</SelectItem>
                        <SelectItem value="FW" className="font-pixel">FW</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-pixel">Number</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="number" 
                        min="1" 
                        max="99"
                        className="font-pixel"
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="foot"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-pixel">Preferred Foot</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="font-pixel">
                          <SelectValue placeholder="Select foot" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Left" className="font-pixel">Left</SelectItem>
                        <SelectItem value="Right" className="font-pixel">Right</SelectItem>
                        <SelectItem value="Both" className="font-pixel">Both</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex justify-end space-x-2 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleClose}
                className="font-pixel"
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                className="font-pixel bg-npfc-green text-black hover:bg-npfc-green-dark"
              >
                Add Player
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddPlayerForm;

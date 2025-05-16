
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useColorAdjustment } from '../hooks/useColorAdjustment';
import { Button } from '@/components/ui/button';
import { Eye, Contrast, Accessibility } from 'lucide-react';

interface AccessibilityModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AccessibilityModal: React.FC<AccessibilityModalProps> = ({ isOpen, setIsOpen }) => {
  const { setColorMode, activeMode, resetColorMode } = useColorAdjustment();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Accessibility className="h-5 w-5" />
            Ajustes de Acessibilidade
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="color" className="w-full">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="color" className="flex items-center gap-2">
              <Contrast className="h-4 w-4" />
              Ajustes de Cor
            </TabsTrigger>
          </TabsList>
          <TabsContent value="color" className="py-4">
            <div className="flex flex-col gap-4">
              <h3 className="font-medium">Contraste</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button 
                  variant={activeMode === 'monochrome' ? 'default' : 'outline'} 
                  onClick={() => setColorMode('monochrome')}
                  className="flex flex-col gap-2 h-auto py-3 items-center justify-center"
                >
                  <div className="w-6 h-6 rounded-full bg-gray-400 mb-1"></div>
                  <span>Monocromático</span>
                </Button>
                <Button 
                  variant={activeMode === 'dark-contrast' ? 'default' : 'outline'} 
                  onClick={() => setColorMode('dark-contrast')}
                  className="flex flex-col gap-2 h-auto py-3 items-center justify-center"
                >
                  <div className="w-6 h-6 rounded-full bg-black mb-1"></div>
                  <span>Alto Contraste Escuro</span>
                </Button>
                <Button 
                  variant={activeMode === 'light-contrast' ? 'default' : 'outline'} 
                  onClick={() => setColorMode('light-contrast')}
                  className="flex flex-col gap-2 h-auto py-3 items-center justify-center"
                >
                  <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 mb-1"></div>
                  <span>Alto Contraste Claro</span>
                </Button>
              </div>
              
              <div className="flex justify-end mt-4">
                <Button variant="outline" onClick={resetColorMode} className="mr-2">
                  Restaurar Padrão
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AccessibilityModal;
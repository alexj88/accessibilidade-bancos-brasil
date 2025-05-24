
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useColorAdjustment } from '../hooks/useColorAdjustment';
import { Button } from '@/components/ui/button';
import { ArrowDown01, Contrast, Accessibility, Keyboard, KeyboardIcon, MoonIcon, Grid3x3Icon, Ear, Speech, Volume2 } from 'lucide-react';


interface AccessibilityModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AccessibilityModal: React.FC<AccessibilityModalProps> = ({ isOpen, setIsOpen }) => {
  const { setColorMode, activeMode, resetColorMode } = useColorAdjustment();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="  sm:max-w-md">
        <DialogHeader className='h-auto'>
            
          <DialogTitle className="text-2xl font-bold flex items-center ">
            <Accessibility className="h-10 w-10 py" />
           <span className='m-2 text-2xl'> Ajustes de Acessibilidade</span>
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="color" className="w-full">
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="color" className="flex items-center gap-2 text-xl">
              <Contrast className="h-6 w-6" />
              Ajustes de Cor
            </TabsTrigger>
          </TabsList>
          <TabsContent value="color" className="py-4">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg text-center strong">Contraste</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button 
                  variant={activeMode === 'monochrome' ? 'default' : 'outline'} 
                  // onClick={() => setColorMode('monochrome')}
                  onClick={() => setColorMode(activeMode === 'monochrome' ? 'normal' : 'monochrome')}
                  className="flex flex-col gap-2 h-auto py-3 items-center justify-center"
                >
                  <div className="w-4 h-4 rounded-full bg-gray-400 mb-1"></div>
                  <span className='text-wrap'>Monocromático</span>
                </Button>
                <Button 
                  variant={activeMode === 'dark-contrast' ? 'default' : 'outline'} 
                  // onClick={() => setColorMode('dark-contrast')}
                  onClick={() => setColorMode(activeMode === 'dark-contrast' ? 'normal' : 'dark-contrast')}
                  className="flex flex-col gap-2 h-auto py-3 items-center justify-center"
                >
                  <div className="w-4 h-4 rounded-full bg-black mb-1"></div>
                  <span className='text-wrap'>Alto Contraste Escuro</span>
                </Button>
                <Button 
                  variant={activeMode === 'light-contrast' ? 'default' : 'outline'} 
                  // onClick={() => setColorMode('light-contrast')}
                  onClick={() => setColorMode(activeMode === 'light-contrast' ? 'normal' : 'light-contrast')}
                  className="flex flex-col gap-2 h-auto py-3 items-center justify-center"
                >
                  {/* <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 mb-1"></div> */}
                  <MoonIcon className="h-auto w-auto" />
                  <span className=' text-wrap'>Alto Contraste Claro</span>
                </Button>
              </div>
              
              {/* <div className="flex justify-end mt-4">
                <Button variant="outline" onClick={resetColorMode} className="mr-2">
                  Restaurar Padrão
                </Button>
              </div> */}
            </div>
            <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="color" className="flex items-center gap-2 text-xl">
              <Speech className="flex items-center h-6 w-6" />
              Ajustes de Voz e Navegação
            </TabsTrigger>
          </TabsList>
            <TabsContent value="color" className="py-4">
            <div className="flex flex-col gap-4">
              {/* <h3 className="font-medium">Contraste</h3> */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button 
                  variant='outline' 
                  // onClick={() => setColorMode('mono')}
                  className="flex flex-col gap-2 h-auto py-3 items-center justify-center"
                >
                  {/* <div className="w-6 h-6 rounded bg-gray-400 mb-1"></div> */}
                  <Ear className="h-5 w-10" />
                  <p className='flex flex-row text-wrap items-center-justify wrap'>Ajuste de Leitor de Tela</p>
                </Button>
                <Button 
                
                  variant='outline'
                //   onClick={() => setColorMode('dark-contrast')}
                  className="flex flex-col gap-2 h-auto py-3 items-center justify-center"
                >
                  {/* <div className="w-6 h-6 rounded-full bg-black mb-1"></div> */}
                  <KeyboardIcon className="flex flex-row text-wrap content-between h-10 w-10" />
                  <p className='p-1 flex flex-row text-wrap items-center-justify wrap'>Navegação de Teclado</p>
                </Button>
                <Button 
                  variant='outline' 
                //   onClick={() => setColorMode('light-contrast')}
                  className="flex flex-col gap-2 h-auto py-3 items-center text-wrap justify-center"
                >
                  {/* <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 mb-1"></div> */}
                  <Grid3x3Icon/>
                  <span className='flex flex-wrap text-wrap'>Grade de Rato</span>
                </Button>
                <Button 
                    variant='outline'
                  // variant={activeMode === 'light-contrast' ? 'default' : 'outline'} 
                //   onClick={() => setColorMode('light-contrast')}
                  className="flex  gap-2 h-auto py-3 items-center justify-center text-wrap text-sm"
                >
                  {/* <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 mb-1"></div> */}
                  <ArrowDown01 className='h-4 w-4'/>
                  <span className='flex text-wrap'>Navegação Inteligente</span>
                </Button>
                <Button 
                  variant='outline'
                  // variant={activeMode === 'light-contrast' ? 'default' : 'outline'} 
                //   onClick={() => setColorMode('light-contrast')}
                  className="flex flex-col gap-2 h-auto py-3 items-center justify-center"
                >
                  {/* <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 mb-1"></div> */}
                  <Volume2 className='h-4 w-4'/>
                  <span>Leitor de Texto</span>
                </Button>
                <Button 
                  variant='outline'
                //   onClick={() => setColorMode('light-contrast')}
                  className="flex flex-col gap-2 h-auto py-3 items-center justify-center"
                >
                  {/* <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 mb-1"></div> */}
                  <Speech className='w-4 h-4'/>
                  
                  <span>Comando de Voz</span>
                </Button>
              </div>
              
              
              <div className="flex justify-end mt-4">
                <Button variant="outline" onClick={resetColorMode} className="mr-10  hover:bg-red-100 w-52  bg-black text-white text-lg">
                  Restaurar Padrão
                </Button>
              </div>
            </div>
          </TabsContent>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default AccessibilityModal;
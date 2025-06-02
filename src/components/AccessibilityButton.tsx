import React, { useState } from 'react';
import { Accessibility } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AccessibilityModal from '@/components/AccessibilityModal.tsx';

const AccessibilityButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-12 h-12 p-0 mr-2 bg-blue-600 hover:bg-purple-700 text-white shadow-lg flex items-center justify-center z-50 transition-all duration-300 hover:scale-110"
        aria-label="Opções de acessibilidade"
      >
        <Accessibility className="h-6 w-6" />
      </Button>
      <AccessibilityModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default AccessibilityButton;
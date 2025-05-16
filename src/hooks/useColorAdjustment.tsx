import { useState, useEffect } from 'react';

type ColorMode = 'normal' | 'monochrome' | 'dark-contrast' | 'light-contrast';

export const useColorAdjustment = () => {
  const [activeMode, setActiveMode] = useState<ColorMode>(() => {
    // Try to get saved mode from localStorage on initial load
    const savedMode = localStorage.getItem('color-mode');
    return (savedMode as ColorMode) || 'normal';
  });

  // Apply the color mode effects whenever it changes
  useEffect(() => {
    // Save current mode to localStorage
    localStorage.setItem('color-mode', activeMode);
    
    // Remove any existing color mode classes
    document.documentElement.classList.remove(
      'monochrome-mode', 
      'dark-contrast-mode', 
      'light-contrast-mode'
    );
    
    // Add the appropriate class based on active mode
    if (activeMode !== 'normal') {
      document.documentElement.classList.add(`${activeMode}-mode`);
    }
  }, [activeMode]);

  // Function to set a new color mode
  const setColorMode = (mode: ColorMode) => {
    setActiveMode(mode);
  };

  // Function to reset to normal mode
  const resetColorMode = () => {
    setActiveMode('normal');
  };

  return {
    activeMode,
    setColorMode,
    resetColorMode
  };
};

import { useContext } from 'react';
import { SampleAppContext } from '../contextAPI/SampleContext';

// Create a custom hook to use the context
export const useAppContext = () => {
  const context = useContext(SampleAppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a SampleAppProvider');
  }
  return context;
};

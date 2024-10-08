import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
} from 'react';

// Define the context data
type AppContextValue = {
  user: string;
  setUser: (value: string) => void;
};

// Create the context with a default value
const SampleAppContext = createContext<AppContextValue | undefined>(undefined);

// Create a provider component
const SampleAppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string>('');

  const fetchData = useCallback(async () => {
    try {
      // Simulating an API call
      // TODO : Implement user setup
      setUser('test user');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }, []); // Dependencies array is empty since it doesn't depend on any external variables

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Adding fetchData to the dependency array ensures it runs when fetchData changes

  return (
    <SampleAppContext.Provider value={{ user, setUser }}>
      {children}
    </SampleAppContext.Provider>
  );
};

export { SampleAppContext, SampleAppProvider };

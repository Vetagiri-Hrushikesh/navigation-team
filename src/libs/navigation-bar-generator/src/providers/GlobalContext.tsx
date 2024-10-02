import React, { createContext, useContext, useReducer, ReactNode, useEffect, useMemo } from 'react';
import { globalReducer, defaultState } from './reducer';
import { GlobalState, GlobalAction } from '../types';

// Create the Global Context
export const GlobalContext = createContext<{ state: GlobalState; dispatch: React.Dispatch<GlobalAction> } | null>(null);

export const GlobalProvider = ({ children, isAuthenticated, packageType, role }: { children: ReactNode, isAuthenticated: boolean, packageType: 'basic' | 'premium', role: 'user' | 'admin' }) => {
  const [state, dispatch] = useReducer(globalReducer, { ...defaultState, isAuthenticated, packageType, role });

  useEffect(() => {
    if (!isAuthenticated) return;
  }, [packageType, role, isAuthenticated]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};
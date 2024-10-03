import React, { createContext, useContext, useReducer, ReactNode, useEffect, useMemo } from 'react';
import { globalReducer, defaultState } from './reducer';
import { GlobalState, GlobalAction } from '../types';

// Create the Global Context to manage and provide global state and dispatch
export const GlobalContext = createContext<{ state: GlobalState; dispatch: React.Dispatch<GlobalAction> } | null>(null);
/**
 * GlobalProvider Component
 * 
 * This component acts as a provider for the global state. It wraps the entire application (or a part of it)
 * and provides access to the global state and the dispatch function through React's Context API.
 * 
 * @param {ReactNode} children - The child components that will be wrapped and have access to the global state.
 * @param {boolean} isAuthenticated - Indicates if the user is authenticated.
 * @param {'basic' | 'premium'} packageType - Represents the type of package the user is subscribed to.
 * @param {'user' | 'admin'} role - The role of the user (either user or admin).
 * 
 * @returns JSX.Element - The provider that makes the state and dispatch accessible to all child components.
 */
export const GlobalProvider = ({ children, isAuthenticated, packageType, role }: { children: ReactNode, isAuthenticated: boolean, packageType: 'basic' | 'premium', role: 'user' | 'admin' }) => {
  const [state, dispatch] = useReducer(globalReducer, { ...defaultState, isAuthenticated, packageType, role });

  // Effect to watch for changes in authentication, packageType, or role
  useEffect(() => {
    if (!isAuthenticated) return;
  }, [packageType, role, isAuthenticated]);

  // Memoize the context value to optimize performance and prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  
  // Return the context provider that wraps the children components
  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

/**
 * useGlobalState Hook
 * 
 * This hook provides access to the global state and dispatch function. It must be used within a component 
 * that is wrapped by the GlobalProvider. If used outside the GlobalProvider, it throws an error.
 * 
 * @returns {state, dispatch} - Returns the global state and dispatch function to manage global actions.
 */
export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};
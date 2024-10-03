import { GlobalState, GlobalAction } from '../types';
import * as actionTypes from '../utils/actionTypes';

// Defines the initial state for the global state context.
export const defaultState: GlobalState = {
    isAuthenticated: false,           // Indicates whether the user is authenticated (default: false).
    packageType: 'basic',             // Defines the user's package type, defaulting to 'basic'
    role: 'user',                     // Defines the user's role, defaulting to 'user'
    features: [],                     // An array to hold the list of features available to the user
    controls: [],                     // An array to store the controls available to the user.
    subControls: [],                  // An array to store the sub-controls available to the user.
    selectedFeature: null,            // Holds the currently selected feature.
    selectedControl: null,            // Stores the currently selected control
    selectedPreviewUrl: '',           // Stores the URL for the selected preview (default: empty string).
    menuTextValue: '',                // Holds the text value for a menu input (default: empty string).
  };
  
/**
 * Reducer function to handle state updates based on dispatched actions.
 * The function receives the current state and an action, and returns the new state
 * after applying the changes triggered by the action type.
 *
 * @param {GlobalState} state - The current state of the global context.
 * @param {GlobalAction} action - Action dispatched to modify the state.
 * @returns {GlobalState} - The updated state after applying the action.
 */
export const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case actionTypes.SET_AUTHENTICATION:
      // Updates the authentication status (true/false) in the global state.
      return { ...state, isAuthenticated: action.payload };
    case actionTypes.SET_USER_PACKAGE_TYPE:
      // Updates the package type (e.g., 'basic', 'premium') based on action.payload.
      return { ...state, packageType: action.payload };
    case actionTypes.SET_USER_ROLE:
      // Sets the user's role (e.g., 'user', 'admin') in the global state.
      return { ...state, role: action.payload };
    case actionTypes.SET_FEATURES:
      // Updates the list of available features for the user with the new list provided in action.payload.
      return { ...state, features: action.payload };
    case actionTypes.SET_CONTROLS:
      // Updates the list of controls available to the user with the new list provided in action.payload.
      return { ...state, controls: action.payload };
    case actionTypes.SET_SUBCONTROLS:
      // Updates the list of sub-controls available to the user with the new list provided in action.payload.
      return { ...state, subControls: action.payload };
    case actionTypes.SET_SELECTED_FEATURE:
      // Updates the currently selected feature based on the feature provided in action.payload.
      return { ...state, selectedFeature: action.payload };
    case actionTypes.SET_SELECTED_CONTROL:
      // Updates the currently selected control based on the control provided in action.payload.
      return { ...state, selectedControl: action.payload };
    case actionTypes.SET_MENU_TEXT:
      // Updates the text value in the menu input with the value provided in action.payload.
      return { ...state, menuTextValue: action.payload };
    default:
      // Returns the current state unchanged if the action type does not match any case.
      return state;
  }
};

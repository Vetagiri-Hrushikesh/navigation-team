import { GlobalState, GlobalAction } from '../types';
import * as actionTypes from '../utils/actionTypes';

export const defaultState: GlobalState = {
    isAuthenticated: false,
    packageType: 'basic',
    role: 'user',
    features: [],
    controls: [],
    subControls: [],
    selectedFeature: null,
    selectedControl: null,
    selectedPreviewUrl: '',
    menuTextValue: '',
  };
  

export const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case actionTypes.SET_AUTHENTICATION:
      return { ...state, isAuthenticated: action.payload };
    case actionTypes.SET_USER_PACKAGE_TYPE:
      return { ...state, packageType: action.payload };
    case actionTypes.SET_USER_ROLE:
      return { ...state, role: action.payload };
    case actionTypes.SET_FEATURES:
      return { ...state, features: action.payload };
    case actionTypes.SET_CONTROLS:
      return { ...state, controls: action.payload };
    case actionTypes.SET_SUBCONTROLS:
      return { ...state, subControls: action.payload };
    case actionTypes.SET_SELECTED_FEATURE:
      return { ...state, selectedFeature: action.payload };
    case actionTypes.SET_SELECTED_CONTROL:
      return { ...state, selectedControl: action.payload };
    case actionTypes.SET_MENU_TEXT:
      return { ...state, menuTextValue: action.payload };
    default:
      return state;
  }
};

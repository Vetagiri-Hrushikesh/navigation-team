// actionTypes.ts

// Action type for setting the user's authentication status
export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';

// Action type for setting the user's package type (e.g., 'basic' or 'premium')
export const SET_USER_PACKAGE_TYPE = 'SET_USER_PACKAGE_TYPE';

// Action type for setting the role of the user (e.g., 'user' or 'admin')
export const SET_USER_ROLE = 'SET_USER_ROLE';

// Action type for setting the features accessible to the user based on package type and role
export const SET_FEATURES = 'SET_FEATURES';

// Action type for setting the controls available to the user based on selected features
export const SET_CONTROLS = 'SET_CONTROLS';

// Action type for setting the sub-controls available based on the selected control
export const SET_SUBCONTROLS = 'SET_SUBCONTROLS';

// Action type for setting the currently selected feature
export const SET_SELECTED_FEATURE = 'SET_SELECTED_FEATURE';

// Action type for setting the currently selected control
export const SET_SELECTED_CONTROL = 'SET_SELECTED_CONTROL';

// Action type for setting the value of the menu text in the application
export const SET_MENU_TEXT = 'SET_MENU_TEXT';

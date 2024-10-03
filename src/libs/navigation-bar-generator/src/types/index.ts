// src/types/index.ts

// Enumerates available package types within the application.
export type PackageType = 'basic' | 'premium';

// Enumerates available roles for users within the application.
export type RoleType = 'user' | 'admin';

// Enumerates keys for identifying features within the application.
export type FeatureKey = 'SideBar' | 'BottomBar';

// Enumerates control names within features.
export type ControlName = 'Header' | 'Primary' | 'Secondary';

// Describes the accessibility of features based on the package type.
export interface FeatureAccess {
  premium: boolean;
  basic: boolean;
}

// Defines the role-based access model for different features.
export interface RoleBasedAccess {
  user: FeatureAccess;
  admin: FeatureAccess;
}

// Maps feature keys to their corresponding role-based access configurations.
export type FeatureConfig = {
  [key in FeatureKey]: RoleBasedAccess;
};

// Defines the control access model based on user role.
export interface ControlAccess {
  [role: string]: ControlName[];
}

// Maps package types to control access configurations.
export interface PackageControls {
  premium: ControlAccess;
  basic: ControlAccess;
}

// Maps feature keys to their corresponding package and control access configurations.
export type ControlConfig = {
  [key in FeatureKey]: PackageControls;
};

  // Defines the shape of the global state, including authentication, package type, role, features, controls, and more.
  export interface GlobalState {              
    isAuthenticated: boolean;                 // Tracks if the user is authenticated.
    packageType: PackageType;                 // The type of package the user is subscribed to ('basic' or 'premium').
    role: RoleType;                           // The role of the user ('user' or 'admin').
    features: FeatureKey[];                  // Array of features accessible to the user.
    controls: ControlName[];                  // Array of controls available to the user.
    subControls: React.ComponentType[];       // Array of sub-controls available to the user.
    selectedFeature: FeatureKey | null;        // The currently selected feature.
    selectedControl: ControlName | null;       // The currently selected control.
    selectedPreviewUrl: string;               // URL for the currently selected preview.
    menuTextValue: string;                   // The current value of the menu text.
  } 
  
  // Defines the sub-control access model, where each role has access to specific sub-controls.
export interface SubControlAccess {
    [role: string]: string[];
  }

  // Maps package types to sub-control access configurations, allowing different sub-controls for 'premium' and 'basic' packages.
  export interface ControlSubControls {
    premium: SubControlAccess;
    basic: SubControlAccess;
  }
  
  // Maps control names to their corresponding sub-control configurations.
  export type SubControlConfig = {
    [control in ControlName]: ControlSubControls;
  };


  // Defines the shape of actions that can be dispatched to the global state reducer, each having a 'type' and 'payload'.
  export type GlobalAction = 
  | { type: 'SET_AUTHENTICATION'; payload: boolean }
  | { type: 'SET_USER_PACKAGE_TYPE'; payload: PackageType }
  | { type: 'SET_USER_ROLE'; payload: RoleType }
  | { type: 'SET_FEATURES'; payload: FeatureKey[] }
  | { type: 'SET_CONTROLS'; payload: ControlName[] }
  | { type: 'SET_SUBCONTROLS'; payload: React.ComponentType[] }
  | { type: 'SET_SELECTED_FEATURE'; payload: FeatureKey | null }
  | { type: 'SET_SELECTED_CONTROL'; payload: ControlName | null }
  | { type: 'UPDATE_PREVIEW_URL'; payload: string }
  | { type: 'SET_MENU_TEXT'; payload: string };

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
  
  export interface GlobalState {
    isAuthenticated: boolean;
    packageType: PackageType;
    role: RoleType;
    features: FeatureKey[];
    controls: ControlName[];
    subControls: React.ComponentType[];
    selectedFeature: FeatureKey | null;
    selectedControl: ControlName | null;
    selectedPreviewUrl: string;
    menuTextValue: string;
  }
  

export interface SubControlAccess {
    [role: string]: string[];
  }
  
  export interface ControlSubControls {
    premium: SubControlAccess;
    basic: SubControlAccess;
  }
  
  export type SubControlConfig = {
    [control in ControlName]: ControlSubControls;
  };

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

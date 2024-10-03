import { ControlConfig, PackageType, RoleType, ControlName, FeatureKey } from '../types';
import { controlAccessConfig } from '../config/controlAccessConfig';

/**
 * generateControls Function
 * 
 * This function generates a list of controls that are allowed for a user based on their package type, role, 
 * and the features they have access to. It uses the `controlAccessConfig` to determine which controls are 
 * available for a specific feature, package type, and role.
 * 
 * @param {FeatureKey[]} allowedFeatures - An array of features the user is allowed to access.
 * @param {PackageType} packageType - The user's subscription package (e.g., 'premium', 'basic').
 * @param {RoleType} role - The user's role (e.g., 'admin', 'user').
 * @returns {ControlName[]} - An array of control names the user is allowed to access.
 */
export const generateControls = (allowedFeatures: FeatureKey[], packageType: PackageType, role: RoleType): ControlName[] => {
  let allowedControls: ControlName[] = [];
  
  allowedFeatures.forEach(feature => {
    const controlsByPackage = controlAccessConfig[feature][packageType];
    if (controlsByPackage) {
      allowedControls = [...allowedControls, ...controlsByPackage[role] as ControlName[]];
    }
  });

  return allowedControls;
};
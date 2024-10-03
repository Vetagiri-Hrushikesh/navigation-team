import { FeatureKey, PackageType, RoleType } from '../types';
import { featureAccessConfig } from '../config/featureAccessConfig';

/**
 * getAllowedFeatures Function
 * 
 * This function determines the list of features a user is allowed to access based on their package type and role.
 * It uses the `featureAccessConfig` to filter the available features based on the user's subscription package 
 * and role (e.g., 'admin', 'user').
 * 
 * @param {PackageType} packageType - The user's subscription package (e.g., 'premium', 'basic').
 * @param {RoleType} role - The user's role (e.g., 'admin', 'user').
 * @returns {FeatureKey[]} - An array of feature keys that the user has access to.
 */
export const getAllowedFeatures = (packageType: PackageType, role: RoleType): FeatureKey[] => {
  const keys = Object.keys(featureAccessConfig) as FeatureKey[]; 
  return keys.filter((feature) => {
    const accessConfig = featureAccessConfig[feature];
    // Check if the user's role and package type have access to the feature.
    return accessConfig && accessConfig[role][packageType];
  });
};

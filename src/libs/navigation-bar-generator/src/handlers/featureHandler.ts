import { FeatureKey, PackageType, RoleType } from '../types';
import { featureAccessConfig } from '../config/featureAccessConfig';

export const getAllowedFeatures = (packageType: PackageType, role: RoleType): FeatureKey[] => {
  const keys = Object.keys(featureAccessConfig) as FeatureKey[]; 
  return keys.filter((feature) => {
    const accessConfig = featureAccessConfig[feature];
    return accessConfig && accessConfig[role][packageType];
  });
};

import { ControlConfig, PackageType, RoleType, ControlName, FeatureKey } from '../types';
import { controlAccessConfig } from '../config/controlAccessConfig';

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
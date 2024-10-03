import { FeatureConfig } from '../types';

/**
 * featureAccessConfig
 * 
 * This object defines the role-based access control (RBAC) for each feature in the system.
 * It determines which features are accessible to users and admins based on their subscription type (premium, basic).
 */
export const featureAccessConfig: FeatureConfig = {
    SideBar: {
      user: { premium: true, basic: false },
      admin: { premium: true, basic: true }
    },
    
};


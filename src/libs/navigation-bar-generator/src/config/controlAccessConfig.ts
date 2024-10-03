import { ControlConfig } from '../types';

/**
 * controlAccessConfig
 * 
 * This object defines the access control for various UI components based on user roles (e.g., user, admin)
 * and subscription packages (e.g., premium, basic). It ensures that different users have access to specific
 * components in the sidebar based on their privileges.
 */
export const controlAccessConfig: ControlConfig = {
  SideBar: {
    premium: {
      user: ['Header', 'Primary', 'Secondary'],
      admin: ['Header', 'Primary', 'Secondary']
    },
    basic: {
      user: ['Header'],
      admin: ['Header', 'Primary']
    }
  },
  
};

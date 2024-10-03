import { SubControlConfig } from '../types';


/**
 * subcontrolAccessConfig
 * 
 * This object defines access control for subcomponents within the main controls (Header, Primary, Secondary).
 * The configuration is based on the user role (admin, user) and the subscription package (premium, basic).
 * It ensures that only certain subcomponents are accessible depending on the user's privileges.
 */
export const subcontrolAccessConfig: SubControlConfig = {
  'Header': {
    premium: {
      admin: ['MenuText', 'OtherSubControl1'],
      user: ['MenuText']
    },
    basic: {
      admin: ['MenuText'],
      user: []
    }
  },
  'Primary': {
    premium: {
      admin: ['SubMenu1', 'SubMenu2'],
      user: ['SubMenu1']
    },
    basic: {
      admin: [],
      user: []
    }
  },
  'Secondary': {
    premium: {
      admin: ['Option1', 'Option2'],
      user: ['Option1']
    },
    basic: {
      admin: ['Option1'],
      user: []
    }
  }
};

import { SubControlConfig } from '../types';

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

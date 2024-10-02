// src/config/controlAccessConfig.ts
import { ControlConfig } from '../types';

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
  BottomBar: {
    premium: {
      user: ['Header', 'Secondary'],
      admin: ['Header', 'Primary', 'Secondary']
    },
    basic: {
      user: [],
      admin: ['Header']
    }
  }
};

import { FeatureConfig } from '../types';

export const featureAccessConfig: FeatureConfig = {
    SideBar: {
      user: { premium: true, basic: false },
      admin: { premium: true, basic: true }
    },
    BottomBar: {
      user: { premium: true, basic: false },
      admin: { premium: true, basic: true }
    }
};

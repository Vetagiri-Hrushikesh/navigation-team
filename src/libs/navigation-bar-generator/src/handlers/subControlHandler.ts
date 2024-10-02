import { ControlName, PackageType, RoleType } from '../types';
import { subcontrolAccessConfig } from '../config/subControlAccessconfig';
import MenuText from '../components/subcontrols/headerControls/MenuText';

const subControlComponents: { [key: string]: React.ComponentType } = {
  MenuText: MenuText,
};

export const generateSubControls = (controls: ControlName[], packageType: PackageType, role: RoleType): React.ComponentType[] => {
  let allowedSubControls: React.ComponentType[] = [];

  controls.forEach(control => {
    const config = subcontrolAccessConfig[control]?.[packageType]?.[role];
    if (config) {
      config.forEach(subControlName => {
        if (subControlComponents[subControlName]) {
          allowedSubControls.push(subControlComponents[subControlName]);
        }
      });
    }
  });

  return allowedSubControls;
};

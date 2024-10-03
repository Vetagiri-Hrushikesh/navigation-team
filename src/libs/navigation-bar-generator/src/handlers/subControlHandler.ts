import { ControlName, PackageType, RoleType } from '../types';
import { subcontrolAccessConfig } from '../config/subControlAccessconfig';
import MenuText from '../components/subcontrols/headerControls/MenuText';
/**
 * A mapping of sub-control names to their respective React components.
 * This is used to dynamically render sub-controls based on their string names.
 */
const subControlComponents: { [key: string]: React.ComponentType } = {
  MenuText: MenuText,   // Example mapping of the "MenuText" string to the MenuText component.
};
/**
 * generateSubControls Function
 * 
 * This function generates a list of allowed sub-controls (as React components) based on the user's controls,
 * subscription package type, and role. It checks the subcontrolAccessConfig to determine what sub-controls
 * are accessible to the user.
 * 
 * @param {ControlName[]} controls - The list of controls assigned to the user.
 * @param {PackageType} packageType - The user's subscription package (e.g., 'premium', 'basic').
 * @param {RoleType} role - The user's role (e.g., 'admin', 'user').
 * @returns {React.ComponentType[]} - An array of React components representing the sub-controls the user has access to.
 */
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

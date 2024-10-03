
import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import MenuText from '../components/subcontrols/headerControls/MenuText';

interface ControlControllerProps {
  controls: string[]; // List of control names
  subControls: React.ComponentType[]; // Array of React components for subcontrols
}

/**
 * ControlController Component
 * 
 * This component renders a set of tabs based on the `controls` prop and displays
 * corresponding subcontrols based on the selected tab.
 * 
 * Props:
 * - controls: An array of control names to display as tab labels.
 * - subControls: An array of React components to display when a corresponding tab is selected.
 * 
 * @returns JSX.Element - A tabbed interface that switches between different subcontrol components.
 */
const ControlController: React.FC<ControlControllerProps> = ({ controls, subControls }) => {
  const [selectedTab, setSelectedTab] = useState(0);    // State to track the currently selected tab.

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);   // Update the selected tab index
  };

  return (
    <div>
       {/* Render the tab bar with control names */}
      <Tabs value={selectedTab} onChange={handleChange} aria-label="control tabs">
        {controls.map((control, index) => (
          <Tab key={index} label={control} />
        ))}
      </Tabs>
      {/* Render the corresponding subcontrol for the selected tab */}
      {subControls[selectedTab] ? React.createElement(subControls[selectedTab]) : <div>No SubControl Available</div>}
    </div>
  );
};

export default ControlController;

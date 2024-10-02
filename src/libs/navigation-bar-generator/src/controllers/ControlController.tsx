
import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import MenuText from '../components/subcontrols/headerControls/MenuText';

interface ControlControllerProps {
  controls: string[]; // List of control names
  subControls: React.ComponentType[]; // Array of React components for subcontrols
}

const ControlController: React.FC<ControlControllerProps> = ({ controls, subControls }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange} aria-label="control tabs">
        {controls.map((control, index) => (
          <Tab key={index} label={control} />
        ))}
      </Tabs>
      {subControls[selectedTab] ? React.createElement(subControls[selectedTab]) : <div>No SubControl Available</div>}
    </div>
  );
};

export default ControlController;

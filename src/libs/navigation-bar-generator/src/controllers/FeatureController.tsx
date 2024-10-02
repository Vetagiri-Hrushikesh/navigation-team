import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

interface FeatureControllerProps {
  features: string[];
}

const FeatureController: React.FC<FeatureControllerProps> = ({ features }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    console.log(newValue)
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange} aria-label="feature tabs">
        {features.map((feature, index) => (
          <Tab key={index} label={feature} />
        ))}
      </Tabs>
    </div>
  );
};

export default FeatureController;

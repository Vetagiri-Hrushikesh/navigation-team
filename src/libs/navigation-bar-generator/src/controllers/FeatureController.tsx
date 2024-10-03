import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

interface FeatureControllerProps {
  features: string[];   // Array of feature names passed as props
}
/**
 * FeatureController Component
 * 
 * This component renders a set of tabs based on the features available to the user.
 * It allows switching between different features using tabs.
 * 
 * @param {string[]} features - An array of feature names to be displayed as tabs.
 * @returns JSX.Element - A tabbed UI displaying the features.
 */
const FeatureController: React.FC<FeatureControllerProps> = ({ features }) => {
  const [selectedTab, setSelectedTab] = useState(0);    // State to track the currently selected tab.
  /**
   * Handles tab change event.
   * 
   * This function is triggered when the user clicks on a tab. It updates the selectedTab state
   * with the index of the newly selected tab.
   * 
   * @param {React.SyntheticEvent} event - The event triggered by clicking a tab.
   * @param {number} newValue - The index of the newly selected tab.
   */
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    console.log(newValue)
  };

  return (
    <div>
        {/* Render the Tabs component with dynamically generated Tab elements for each feature */}
      <Tabs value={selectedTab} onChange={handleChange} aria-label="feature tabs">
        {features.map((feature, index) => (
          <Tab key={index} label={feature} />   // Render a Tab for each feature.
        ))}
      </Tabs>
    </div>
  );
};

export default FeatureController;

import React from 'react';
import { Box } from '@mui/material';
import DisplayController from '../controllers/DisplayController';
import LivePreview from '../components/preview/LivePreview';

/**
 * NavigationBarGenerator Component
 * 
 * This component serves as the main layout for the navigation bar customization tool.
 * It organizes and displays the controls for adjusting various properties (via `DisplayController`) 
 * on the left side and provides a live preview of the changes (via `LivePreview`) on the right side.
 * 
 * The component uses Material-UI's `Box` component to manage layout and styling, ensuring a responsive 
 * and centered UI.
 * 
 * @returns JSX.Element - The rendered layout of the navigation bar generator.
 */
const NavigationBarGenerator: React.FC = () => {
  return (
    // Main container for the component with a full-screen height layout
    <Box sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Left container to display controls, such as selecting navigation bar options and styles. */}
      <Box sx={{ width: '300px', bgcolor: 'background.paper', p: 2, boxShadow: 1 }}>
        {/* DisplayController handles the settings and customization controls */}
        <DisplayController />
      </Box>

      {/* Right container for displaying the live preview of the navigation bar settings. */}
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* LivePreview renders the current state of the navigation bar and other properties */}
        <LivePreview />
      </Box>
      
    </Box>
  );
};

export default NavigationBarGenerator;

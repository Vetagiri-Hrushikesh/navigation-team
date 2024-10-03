import React from 'react';
import { useGlobalState } from '../../providers/GlobalContext';

/**
 * LivePreview Component
 * 
 * A simple component that displays a live preview of the text from the global state.
 * The menu text is dynamically rendered based on the user's current input or a default placeholder if no text is provided.
 * 
 * @returns JSX.Element - A preview box displaying the current menu text or a default message.
 */
const LivePreview: React.FC = () => {
  const { state } = useGlobalState();   //Access the global state using a custom hook.

  return (
    <div>
      {/* Heading for the preview section */}
      <h2>Live Preview</h2>
      {/* Render the current menu text or a placeholder if none is provided */}
      <p>{state.menuTextValue || 'Your menu text will appear here...'}</p>
    </div>
  );
};

export default LivePreview;

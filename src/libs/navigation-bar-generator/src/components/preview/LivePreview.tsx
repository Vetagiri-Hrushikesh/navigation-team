import React from 'react';
import { useGlobalState } from '../../providers/GlobalContext';

const LivePreview: React.FC = () => {
  const { state } = useGlobalState();

  return (
    <div>
      <h2>Live Preview</h2>
      <p>{state.menuTextValue || 'Your menu text will appear here...'}</p>
    </div>
  );
};

export default LivePreview;

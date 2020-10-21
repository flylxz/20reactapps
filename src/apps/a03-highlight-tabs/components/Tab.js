import React, { useState } from 'react';
import '../HightlightTabs.scss';

export const Tab = ({ children }) => {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  const moveHighlight = (e) => {
    setHighlightStyle({ left: e.nativeEvent.layerX - 150 });
  };

  const hideHighlight = (e) => {
    setHighlightStyle({ opacity: 0, left: e.nativeEvent.layerX - 150 });
  };

  return (
    <div className='tab' onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
      <div className='highlight' style={highlightStyle} />
      {children}
    </div>
  );
};

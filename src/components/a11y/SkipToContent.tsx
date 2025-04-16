
import React from 'react';

const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="absolute left-0 top-0 p-2 -translate-y-full bg-white focus:translate-y-0 transition-transform z-50 text-weather-blue"
    >
      Skip to content
    </a>
  );
};

export default SkipToContent;

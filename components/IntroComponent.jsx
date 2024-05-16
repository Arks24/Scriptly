'use client'
import React, { useState } from 'react';
import Joyride, { ACTIONS, EVENTS } from 'react-joyride';
const steps = [
  {
    target: '.hello',
    content: 'This is my awesome feature!',
  },
  {
    target: '.world',
    content: 'This another awesome feature!',
  },
];

export default function IntroComponent() {
  const [run, setRun] = useState(false);

  const handleClickStart = () => {
    setRun(true);
  };

  return (
    <div>
      <Joyride
        run={run}
        steps={steps}
        
        styles={{
          options: {
            arrowColor: '#e3ffeb',
            backgroundColor: '#e3ffeb',
            overlayColor: 'rgba(79, 26, 0, 0.4)',
            primaryColor: '#000',
            textColor: '#004a14',
            width: 900,
            zIndex: 1000,
          },
        }}
      />
      <button onClick={handleClickStart}>Start</button>
      <h1 className="hello">Hello,</h1>
        <hr />
        <h1 className="world">World!</h1>
        <hr />
    </div>
  );
}
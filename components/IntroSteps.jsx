'use client'
import React from "react";
import { Steps } from "intro.js-react";

const IntroSteps = ({ stepsEnabled, steps, initialStep, onExit }) => (
  <Steps
    enabled={stepsEnabled}
    steps={steps}
    initialStep={initialStep}
    onExit={onExit}
  />
);

export default IntroSteps;
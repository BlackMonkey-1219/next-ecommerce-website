import React, { ReactNode, useState } from 'react';

function useStep(stepElements: ReactNode[]) {
  const [steps, setSteps] = useState(stepElements);
  const [currentStep, setCurrentStep] = useState(0);

  function goToPrevStep() {
    setCurrentStep((prevStep) => (prevStep == 0 ? 0 : prevStep - 1));
  }

  function goToNextStep() {
    setCurrentStep((prevStep) =>
      prevStep >= steps.length ? prevStep : prevStep + 1
    );
  }

  return {
    currentStep: steps[currentStep],
    prev: goToPrevStep,
    next: goToNextStep,
    isFinal: currentStep + 1 >= steps.length ? true : false,
  };
}

export default useStep;

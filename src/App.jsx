import { useCallback, useState } from "react";
import StepOne from "./multistep/StepOne";
import StepTwo from "./multistep/StepTwo";
import StepThree from "./multistep/StepThree";
import StepFour from "./multistep/StepFour";
import Stepper from "./components/Stepper";
import StepFive from "./multistep/StepFive";
import { AppState } from "./context/state";

const App = () => {
  // const [currentStep, setCurrentStep] = useState(1);
  // const [completeStep, setCompleteStep] = useState(false);
  const {
    formData,
    setFormData,
    prevSatep,
    completeStep,
    currentStep,
    setCurrentStep,
    setCompleteStep,
  } = AppState();
  const steps = [
    "User Info",
    "Account Info",
    "Social Accounts",
    "Favourite",
    "Review",
  ];

  // const nextStep = useCallback(
  //   (data) => {
  //     if (currentStep === steps.length) {
  //       setCompleteStep(true);
  //     } else {

  //       setCurrentStep(currentStep + 1);
  //     }
  //   },
  //   [currentStep, steps.length]
  // );

  const nextStep = useCallback(
    (data) => {
      // return currentStep === steps.length
      //   ? setCompleteStep(true)
      //   : setCurrentStep(currentStep + 1);
      if (currentStep === steps.length) {
        setCompleteStep(true);
      } else {
        setFormData((prev) => ({ ...prev, ...data }));
        setCurrentStep((prev) => prev + 1);
      }
    },
    [setFormData, setCurrentStep, steps.length, currentStep, setCompleteStep]
  );

  const prevStep = useCallback(
    (data) => {
      setFormData((prev) => ({ ...prev, ...data }));
      setCurrentStep((prev) => prev - 1);
    },
    [setFormData, setCurrentStep]
  );

  const isLastStep = currentStep === steps.length;

  const STEPS = {
    1: <StepOne nextStep={nextStep} formData={formData} />,
    2: <StepTwo nextStep={nextStep} prevStep={prevStep} formData={formData} />,
    3: (
      <StepThree nextStep={nextStep} prevStep={prevStep} formData={formData} />
    ),
    4: <StepFour nextStep={nextStep} prevStep={prevStep} formData={formData} />,
    5: <StepFive nextStep={nextStep} prevStep={prevStep} formData={formData} />,
  };
  console.log(formData);
  return (
    <>
      <div className="bg-gray-100 min-h-screen grid place-items-center sm:px-0 px-4">
        <div className="bg-white sm:w-[700px] p-4  w-full rounded">
          <div className="flex justify-between">
            {steps?.map((step, i) => (
              <Stepper
                key={i}
                currentStep={currentStep}
                completeStep={completeStep}
                step={step}
                index={i}
              />
            ))}
          </div>

          <div className="my-10">{STEPS[currentStep]}</div>

          <div
            className={`mt-4 ${
              currentStep === 1 ? "justify-end" : "justify-between"
            } flex items-center w-full`}
          >
            {currentStep !== 1 && (
              <button
                className="text-indigo-800 font-bold text-xl cursor-pointer"
                onClick={prevStep}
              >
                Back
              </button>
            )}
            <button
              className="text-indigo-800 font-bold text-xl cursor-pointer"
              onClick={nextStep}
            >
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

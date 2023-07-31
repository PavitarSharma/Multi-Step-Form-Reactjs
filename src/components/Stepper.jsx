import { TiTick } from "react-icons/ti";

const Stepper = ({ step, index, currentStep, completeStep }) => {
  return (
    <div className="relative flex flex-col items-center w-full before:content-[''] before:w-full before:h-1 before:bg-gray-400  before:inline-block before:absolute sm:before:top-2/4 before:top-8 before:right-2/4 before:first-of-type:hidden  before:-translate-y-3.5">
      <div
        className={`w-10 h-10 ${
          currentStep === index + 1 ? "bg-sky-600" : "bg-gray-400"
        }  ${
          (index + 1 < currentStep || completeStep) && "bg-green-400"
        } relative flex items-center justify-center rounded-full z-10 text-white font-bold`}
      >
        {index + 1 < currentStep || completeStep ? <TiTick size={24} /> : index + 1}
      </div>
      <p className="text-gray-500">{step}</p>
    </div>
  );
};

export default Stepper;

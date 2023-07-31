import { createContext, useCallback, useContext, useState } from "react";

export const AppStateContext = createContext();

const steps = [
  "User Info",
  "Account Info",
  "Social Accounts",
  "Favourite",
  "Review",
];

export function AppProvider({ children }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    age: "",
    phone: "",
    image: "",
    country: null,
    state: null,
    city: null,
    socailAccounts: [],
    gender: "",
    account: "",
    hobbies: [],
    places: [],
    language: "",
    accept: false,
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [completeStep, setCompleteStep] = useState(false);

  const nextStep = useCallback((data) => {
    // return currentStep === steps.length
    //   ? setCompleteStep(true)
    //   : setCurrentStep(currentStep + 1);
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep(currentStep + 1)
  }, [currentStep]);

  const prevStep = useCallback(
    (data) => {
      setFormData((prev) => ({ ...prev, ...data }));
      setCurrentStep(currentStep - 1);
    },
    [currentStep]
  );

  return (
    <AppStateContext.Provider
      value={{
        formData,
        setFormData,
        nextStep,
        prevStep,
        completeStep,
        currentStep,
        setCurrentStep,
        setCompleteStep,
        steps,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export const AppState = () => useContext(AppStateContext);

import useCountryStateCity from "../hooks/useCountryStateCity";
import Select from "react-select";
import { SocialsAccount } from "../utils/Info";
import { useState } from "react";


const StepTwo = (props) => {
  const {
    country,
    setCountry,
    countryOptions,
    state,
    setState,
    stateOptions,
    city,
    setCity,
    cityOptions,
  } = useCountryStateCity();

  const [socialAccounts, setSocialAccount] = useState([]);

  const handleSocialAccount = (data) => {
    if (data.some((option) => option?.value === "all")) {
      setSocialAccount(
        SocialsAccount.filter((option) => option.value !== "all")
      );
    } else {
      setSocialAccount(data);
    }
  };

  const onSubmitHandler = (data) => {
    props.nextStep(data);
  };

  //   console.log(socialAccounts);
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        <Select
          options={countryOptions}
          value={country}
          onChange={setCountry}
          placeholder="Country"
        />
        <Select
          options={stateOptions}
          value={state}
          onChange={setState}
          placeholder="State"
        />

        <Select
          options={cityOptions}
          value={city}
          onChange={setCity}
          placeholder="City"
        />

        <Select
          options={SocialsAccount}
          placeholder="Social Accounts"
          value={socialAccounts}
          onChange={handleSocialAccount}
          isMulti
        />

        <div>
          <label htmlFor="gender">Gender</label>

          <div className="flex gap-2 items-center">
            {["Male", "Female", "Other"].map((option) => {
              return (
                <div key={option} className="space-x-1 flex items-center">
                  <input type="radio" className="w-4 h-4" />
                  <label className="text-lg font-medium text-gray-600">
                    {option}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepTwo;

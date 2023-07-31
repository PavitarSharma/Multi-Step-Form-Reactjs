import { useEffect, useMemo, useState } from "react";
import { Country, State, City } from "country-state-city";

const useCountryStateCity = () => {
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  const countrydata = Country.getAllCountries();

  const countryOptions = useMemo(() => {
    return countrydata?.map((country) => {
      return {
        value: country?.name,
        label: country?.name,
        name: country?.name,
        flag: country?.flag,
        isoCode: country?.isoCode,
      };
    });
  }, [countrydata]);

  useEffect(() => {
    const states = State.getAllStates();
    const data =
      country &&
      states.filter((state) => state?.countryCode === country?.isoCode);

    setStateData(data);
  }, [country]);

  //   console.log(country);

  const stateOptions = useMemo(() => {
    return stateData?.map((state) => {
      return {
        value: state?.name,
        label: state?.name,
        name: state?.name,
        isoCode: state?.isoCode,
        countryCode: state?.countryCode,
      };
    });
  }, [stateData]);

  useEffect(() => {
    const cities = City.getAllCities();

    const data =
      country &&
      state &&
      cities.filter(
        (city) =>
          city?.stateCode === state?.isoCode &&
          city?.countryCode === country?.isoCode
      );

    setCityData(data);
  }, [country, state]);

  const cityOptions = useMemo(() => {
    return cityData?.map((city) => {
      return {
        value: city?.name,
        label: city?.name,
        name: city?.name,
      };
    });
  }, [cityData]);


  return {
    country,
    setCountry,
    state,
    setState,
    city,
    setCity,
    countryOptions,
    stateOptions,
    cityOptions,
  };
};

export default useCountryStateCity;

import { useState } from "react";
import { hobbies, places } from "../utils/Info";

const StepFour = () => {
  const [hobby, setHobby] = useState([]);
  const [selectPlaces, setSelectPlaces] = useState([]);
  const [selectLanguage, setSelectLanguage] = useState([]);

  const handleHobby = (data) => {
    if (data === hobbies[0]) {
      if (hobby.length === hobbies.length - 1) {
        setHobby([]);
      } else {
        setHobby(hobbies.slice(1));
      }
    } else {
      if (hobby.includes(data)) {
        setHobby((prevItems) => prevItems.filter((item) => item !== data));
      } else {
        setHobby((prevItems) => [...prevItems, data]);
      }
    }
  };

  const handleSelectPlace = (event) => {
    const { checked, value } = event.target;

    if (value === "All") {
      if (checked) {
        setSelectPlaces(places.slice(1));
      } else {
        setSelectPlaces([]);
      }
    } else {
      if (checked) {
        setSelectPlaces((prevItems) => [...prevItems, value]);
      } else {
        setSelectPlaces((prevItems) =>
          prevItems.filter((item) => item !== value)
        );
      }
      const allCheckbox = document.querySelector('input[value="All"]');
      if (allCheckbox) {
        allCheckbox.checked = false;
      }
    }
  };

  const handleSelectLanguage = (event) => {
    const { checked, value } = event.target;

    if (checked) {
      setSelectLanguage((prevItems) => [...prevItems, value]);
    } else {
      setSelectLanguage((prevItems) =>
        prevItems.filter((item) => item !== value)
      );
    }
  };

  //   console.log(selectPlaces);

  const selectedHobbies = (data) => hobby.some((item) => item === data);
  const isPlaceSelected = (place) => selectPlaces.includes(place);
  const isLanguageSelected = (lan) => selectLanguage.includes(lan);

  return (
    <>
      <div>
        <div>
          <p className="text-lg font-medium text-gray-600 mb-2"> Hobbies</p>
          <div
            className={`
          flex 
          items-center 
          flex-wrap 
          gap-x-6 
          gap-y-2
          
          `}
          >
            {hobbies.map((hobby) => (
              <div
                key={hobby}
                onClick={() => handleHobby(hobby)}
                className={`
                border 
                border-gray-400 
                rounded-full 
                cursor-pointer 
                px-4 
                py-2 
                flex 
                items-center 
                justify-center
                ${selectedHobbies(hobby) && "bg-red-600 text-white border-0"}
                `}
              >
                {hobby}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 grid-cols-1">
          <div>
            <p className="text-lg font-medium text-gray-500 mb-2">Places</p>

            <div>
              {places.map((place) => (
                <div key={place} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={place}
                    checked={isPlaceSelected(place)}
                    onChange={handleSelectPlace}
                    className="w-4 h-4"
                  />
                  <label>{place}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div>
              <p className="text-lg font-medium text-gray-500 mb-2">
                Languages
              </p>

              <div>
                {["Hindi", "English", "German", "Ploish", "Spanish"].map(
                  (language) => (
                    <div key={language} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={language}
                        checked={isLanguageSelected(language)}
                        onChange={handleSelectLanguage}
                        className="w-4 h-4"
                      />
                      <label>{language}</label>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 mt-10">
              <input type="checkbox" className="w-4 h-4" />
              <label>Accept Terms & Conditions</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFour;

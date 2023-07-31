import { useState } from "react";
import Input from "../components/Input";


const StepOne = ({ nextStep, formData }) => {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPreviewImage(reader.result);
    };

    reader.readAsDataURL(file);

    setImage(file);
  };

  const onSubmitHandler = (data) => {
    nextStep(data);
  };

  return (
    <>
      <form>
            <div>
              <div>
                <div className="w-40 h-40 border-4 border-gray-600 rounded-full flex items-center justify-center">
                  <img
                    src={previewImage ? previewImage : "/images/image.png"}
                    alt="image"
                    className={`${
                      previewImage ? "w-full h-full rounded-full" : "w-20"
                    } object-cover`}
                  />
                </div>
                <div className="w-40 mt-2 h-10 bg-red-200 relative">
                  <label className="bg-blue-400 text-white absolute w-full h-full flex items-center justify-center  rounded cursor-pointer z-10">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImage}
                      className="absolute w-full h-full z-0 hidden"
                    />
                    Upload
                  </label>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-col-1 gap-6 mt-8">
              <Input
                label="First Name"
                name="firstName"
              />

              <Input
                label="Last Name"
                name="lastName"
              />
              <Input
                label="Email"
                name="email"
              />
              <Input
                label="Phone"
                name="phone"
              />
              <Input
                label="Dob"
                type="date"
                name="dob"
              />
              <Input
                label="Your Age"
                type="text"
                name="age"
              />
            </div>
          </form>
    </>
  );
};

export default StepOne;

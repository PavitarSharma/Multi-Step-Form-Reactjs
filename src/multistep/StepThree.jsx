import { useState } from "react";
import SocialCard from "../components/SocialCard";
import { socialsIcons } from "../utils/Info";

const StepThree = () => {
  const [socialAccount, setSocialAccount] = useState();

  return (
    <>
      <div>
        <p className="text-xl text-gray-600 font-medium mb-4">
          Choose your account name
        </p>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6">
          {socialsIcons.map((social) => (
            <SocialCard
              key={social.id}
              social={social}
              socialAccount={socialAccount}
              setSocialAccount={setSocialAccount}
            />
          ))}
        </div>

        {socialAccount && (
          <p className="text-xl mt-10 font-bold text-gray-400">
            You Choose <span className="text-blue-800">{socialAccount}</span>
          </p>
        )}
      </div>
    </>
  );
};

export default StepThree;

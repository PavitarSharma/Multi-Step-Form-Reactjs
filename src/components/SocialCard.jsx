const SocialCard = ({ social, setSocialAccount, socialAccount }) => {
  return (
    <>
      <div
        className={`flex flex-col items-center justify-center gap-2 border border-gray-500 rounded-lg p-4 cursor-pointer hover:bg-gray-200 hover:font-medium ${
          socialAccount === social.name
            ? "bg-gray-200 font-medium"
            : " bg-transparent font-normal"
        }`}
        onClick={() => setSocialAccount(social.name)}
      >
        <img src={social.image} alt={social.name} className="w-10" />
        <p>{social.name}</p>
      </div>
    </>
  );
};

export default SocialCard;

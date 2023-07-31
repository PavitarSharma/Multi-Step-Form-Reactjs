const Input = ({ type = "text", id, label, errorMessage,onChange, onBlur, value,  ...props }) => {
  return (
    <>
      <div className="flex flex-col">
        {label && <label htmlFor={id}>{label}</label>}
        <input
          type={type}
          id={id}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          className="border border-gray-500 rounded p-2"
          {...props}
        />
        {errorMessage && (
          <small className="p-1 text-red-500">{errorMessage}</small>
        )}
      </div>
    </>
  );
};

export default Input;

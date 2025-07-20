const TextField = ({
  label = "TextField",
  onChange,
  name,
  id,
  placeholder = "placeholder",
  value,
  required = false,
  type = "text",
}) => {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id}>{label}</label>
      <input
        className="border border-gray-600 rounded p-2 w-[200px] sm:w-[300px]"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;

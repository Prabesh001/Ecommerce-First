import { useState } from "react";
import TextField from "../components/TextField";
import { resetField } from "../config/loginField";

const ResetPassword = () => {
  const initialValue = {
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(initialValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div>Reset Password</div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border flex flex-col gap-4 items-start"
          >
            {resetField.map(({ id, label, placeholder, type, name }) => (
              <TextField
                key={name}
                id={id}
                name={name}
                label={label}
                placeholder={placeholder}
                type={type}
                value={formData[name]}
                onChange={handleChange}
              />
            ))}

            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;

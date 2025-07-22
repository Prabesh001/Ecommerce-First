import { useEffect, useState } from "react";
import TextField from "../components/TextField";
import registerField from "../config/registerField";
import axios from "axios";
import Cookies from "js-cookie";
import { handlePostOperation } from "../config/handlePostOperation";
import { BASE_URL, registerInitialValue } from "../config/constants";

const Register = () => {
  const [formData, setFormData] = useState(registerInitialValue);

  const handdleSaveCookie = () => {
    Cookies.set("name", "Prabesh");
  };

  const handleClearCookie = () => {
    Cookies.remove("name");
  };

  const name = Cookies.get("name");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table(formData);

    const response = await handlePostOperation("/auth/register", formData);

    console.log(response);

    if (response.status === 201) {
      alert("User registered Sucessfully!");
      setFormData(registerInitialValue);
    } else {
      alert("User registration failed!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen">
      {name}
      <button onClick={handleClearCookie} className="border">
        Clear Cookie
      </button>
      <button onClick={handdleSaveCookie} className="border">
        Add Cookie
      </button>
      <div>Register</div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 border p-4">
        {registerField.map(({ id, label, placeholder, type, name }) => (
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;

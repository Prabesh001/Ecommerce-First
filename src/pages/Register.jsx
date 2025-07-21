import { useEffect, useState } from "react";
import TextField from "../components/TextField";
import registerField from "../config/registerField";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userName: "",
    phone: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const handdleSaveCookie = async () => {
      try {
        await axios.get("http://localhost:4000/test", {
          withCredentials: true,
        });
      } catch (error) {
        console.log(error);
      }
    };
    handdleSaveCookie();
  }, []);

  const handlePostOperation = async (url, data) => {
    try {
      const result = await axios.post(url, data);
      return result;
    } catch (error) {
      return error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.table(formData);

    const response = await handlePostOperation(
      "http://localhost:4000/api/auth/register",
      formData
    );

    console.log(response);

    if (response.status === 201) {
      alert("User registered Sucessfully!");
    } else {
      alert("User registration failed!");
    }
    // navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen">
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

import { useState } from "react";
import TextField from "../components/TextField";
import registerField from "../config/registerField";
import { handlePostOperation } from "../config/handlePostOperation";
import {  registerInitialValue } from "../config/constants";

const Register = () => {
  const [formData, setFormData] = useState(registerInitialValue);
  // const [name, setName] = useState(
  //   JSON.parse(localStorage.getItem("name")) || ""
  // );

  // // localStorage.setItem("name", "Prabesh") //setting value
  // // localStorage.getItem("name") //getting value
  // // localStorage.removeItem("name") //removing value
  // // localStorage.clear() //clearing all values

  // useEffect(() => {
  //   // setName(JSON.parse(localStorage.getItem("name")) || "");
  //   localStorage.setItem("authToken", "1234567890abcdefg");
  //   localStorage.setItem("email", "pr@gmail.com");
  // }, []);

  // const handdleSaveCookie = () => {
  //   // Cookies.set("name", "Prabesh");
  //   setName(localStorage.setItem("name", JSON.stringify({ name: "Prabesh" })));
  // };

  // const handleClearCookie = () => {
  //   // Cookies.remove("name");
  //   localStorage.removeItem("name");
  //   setName("");
  // };

  // const clearAll = () => {
  //   localStorage.clear();
  // };

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

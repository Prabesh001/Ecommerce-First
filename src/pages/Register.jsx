import React, { useState } from "react";
import TextField from "../components/TextField";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <div>Register</div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          id={"email"}
          label={"Email"}
          placeholder={"email@gmail.com"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id={"username"}
          label={"Username"}
          placeholder={"JohnDoe"}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          id={"phone"}
          label={"Phone Number"}
          placeholder={"9800000000"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          id={"password"}
          label={"Password"}
          placeholder={"**********"}
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id={"confirmPassword"}
          label={"Confirm Password"}
          placeholder={"**********"}
          type="password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </form>
    </>
  );
};

export default Register;

import { useState } from "react";
import TextField from "../components/TextField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Hello!");

    console.log("email", email);
    console.log("password", password);
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div>Login</div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border flex flex-col gap-4 items-start"
          >
            {/* Email */}
            <TextField
              label={"Email"}
              id={"email"}
              value={email}
              placeholder={"email@gmail.com"}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password */}
            <TextField
              label={"Password"}
              id={"password"}
              value={password}
              placeholder={"*******"}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />

            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

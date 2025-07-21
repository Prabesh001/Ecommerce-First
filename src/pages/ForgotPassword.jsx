import { useState } from "react";
import TextField from "../components/TextField";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");

    console.table(email);
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div>Forgot Password</div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border flex flex-col gap-4 items-start"
          >
            <TextField
              key={"email"}
              id={"email"}
              name={"email"}
              label={"Email"}
              placeholder={"example@gmail.com"}
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

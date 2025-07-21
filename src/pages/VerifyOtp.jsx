import { useState } from "react";
import TextField from "../components/TextField";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setOtp("");

    console.table(otp);
  };

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div>Verify OTP</div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-4 border flex flex-col gap-4 items-start"
          >
            <TextField
              key={"otp"}
              id={"otp"}
              name={"otp"}
              label={"Your OTP"}
              placeholder={"123456"}
              type={"text"}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyOtp;

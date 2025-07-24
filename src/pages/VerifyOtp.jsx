import { useState } from "react";
import TextField from "../components/TextField";
import { handlePostOperation } from "../config/handlePostOperation";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handlePostOperation("/auth/verify-otp", {
      otp,
    });

    console.log(response);

    if (response.status === 200) {
      alert(response.data.message || "OTP verified!");

      setTimeout(() => {
        navigate("/reset-password");
      }, 1500);
    } else {
      alert(response.response.data.error || "Error verifing otp!");
    }

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

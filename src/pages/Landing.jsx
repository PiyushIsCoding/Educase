import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-[#f7f8f9] px-6">
      <div className="h-full flex flex-col justify-end pb-10">
        <h1 className="text-[28px] font-bold text-[#1d2226] leading-[34px]">
          Welcome to PopX
        </h1>

        <p className="text-[18px] text-[#7c7c7c] leading-[26px] mt-2 mb-7">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <button
          onClick={() => navigate("/register")}
          className="w-full h-[46px] rounded-md bg-[#6C25FF]
                     text-white text-[16px] font-medium mb-3"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full h-[46px] rounded-md
                     text-[#1d2226] text-[16px] font-medium"
          style={{
            backgroundColor: "rgba(108, 37, 255, 0.29)",
          }}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FloatingInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative mb-4">
      <span
        className="absolute -top-[8px] left-3 px-1 text-[11px] font-medium z-10"
        style={{
          backgroundColor: "#fff",
          color: "#6C25FF",
        }}
      >
        {label}
      </span>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full h-[46px] px-4 rounded-md border text-[13px]
                   text-[#1a1a1a] bg-white outline-none
                   placeholder:text-[#b8b8b8]"
        style={{
          borderColor: focused ? "#6C25FF" : "#d0d0d0",
        }}
      />
    </div>
  );
}

export default function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const active =
    email.trim() !== "" && password.trim() !== "";

  return (
    <div className="h-full bg-white px-6 pt-10">
      <h1 className="text-[28px] font-bold text-[#1D2226] leading-[36px]">
        Signin to your
        <br />
        PopX account
      </h1>

      <p className="text-[18px] text-[#7c7c7c] leading-[26px] mt-3 mb-8">
        Lorem ipsum dolor sit amet,
        <br />
        consectetur adipiscing elit,
      </p>

      <FloatingInput
        label="Email Address"
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FloatingInput
        label="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() => active && navigate("/account")}
        className={`w-full h-[46px] rounded-md text-white text-[16px] font-medium transition-all duration-200
          ${active
            ? "bg-[#6C25FF] hover:bg-[#5b1ce6] hover:shadow-md cursor-pointer active:scale-[0.98]"
            : "bg-[#CBCBCB] cursor-not-allowed opacity-80"
          }`}
      >
        Login
      </button>
    </div>
  );
}
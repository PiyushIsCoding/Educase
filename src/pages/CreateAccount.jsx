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
                   placeholder:text-[#aaaaaa]"
        style={{
          borderColor: focused ? "#6C25FF" : "#d0d0d0",
        }}
      />
    </div>
  );
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const set = (k) => (e) =>
    setForm({
      ...form,
      [k]: e.target.value,
    });

  return (
    <div className="h-full bg-white px-6 pt-8 pb-6 flex flex-col">
      <h1 className="text-[28px] font-bold text-[#1D2226] leading-[34px] mb-6">
        Create your
        <br />
        PopX account
      </h1>

      <FloatingInput
        label="Full Name*"
        placeholder="Marry Doe"
        value={form.fullName}
        onChange={set("fullName")}
      />

      <FloatingInput
        label="Phone number*"
        type="tel"
        placeholder="Marry Doe"
        value={form.phone}
        onChange={set("phone")}
      />

      <FloatingInput
        label="Email address*"
        type="email"
        placeholder="Marry Doe"
        value={form.email}
        onChange={set("email")}
      />

      <FloatingInput
        label="Password *"
        type="password"
        placeholder="Marry Doe"
        value={form.password}
        onChange={set("password")}
      />

      <FloatingInput
        label="Company name"
        placeholder="Marry Doe"
        value={form.company}
        onChange={set("company")}
      />

      <div className="mt-1 mb-7">
        <p className="text-[13px] text-[#1D2226] mb-3">
          Are you an Agency?*
        </p>

        <div className="flex items-center gap-6">
          {["yes", "no"].map((val) => (
            <label
              key={val}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                onClick={() =>
                  setForm({
                    ...form,
                    isAgency: val,
                  })
                }
                className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                style={{
                  borderColor: "#6C25FF",
                  backgroundColor:
                    form.isAgency === val
                      ? "#6C25FF"
                      : "#fff",
                }}
              >
                {form.isAgency === val && (
                  <div className="w-[7px] h-[7px] rounded-full bg-white" />
                )}
              </div>

              <span className="text-[13px] capitalize">
                {val}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <button
          onClick={() => navigate("/account")}
          className="w-full h-[46px] rounded-md bg-[#6C25FF]
                     text-white text-[16px] font-medium
                     hover:bg-[#5b1ce6] hover:shadow-md cursor-pointer
                     transition-all duration-200 active:scale-[0.98]"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
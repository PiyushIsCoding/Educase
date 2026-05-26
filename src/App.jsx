import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import RegisterPage from "./pages/CreateAccount";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div className="w-screen h-screen bg-[#cfcfcf] flex justify-center items-center overflow-hidden">
      <div
        className="bg-[#f7f8f9] overflow-hidden relative shadow-sm"
        style={{
          height: "min(812px, 100vh)",
          aspectRatio: "375 / 812",
        }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/login" element={<Signin />} />

          <Route
            path="/register"
            element={<RegisterPage />}
          />

          <Route
            path="/account"
            element={<Profile />}
          />
        </Routes>
      </div>
    </div>
  );
}
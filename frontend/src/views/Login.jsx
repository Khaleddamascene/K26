import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const Login = () => {
  const [mode, setMode] = useState("login");

  return (
    <section className="relative min-h-[calc(100vh-90px)] flex items-center justify-center px-5 py-10">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_55%_at_90%_110%,rgba(170,59,255,0.14),transparent),radial-gradient(ellipse_50%_45%_at_10%_-5%,rgba(170,59,255,0.09),transparent)]" />

      <div className="w-full max-w-md">
        {/* Tabs */}
        <div className="flex border border-gray-300 border-b-0">
          <button
            className={`flex-1 py-2 text-xs font-mono uppercase tracking-widest border-b-2 transition ${
              mode === "login"
                ? "border-purple-500 text-purple-500"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
            onClick={() => setMode("login")}
          >
            Sign in
          </button>

          <button
            className={`flex-1 py-2 text-xs font-mono uppercase tracking-widest border-b-2 transition ${
              mode === "register"
                ? "border-purple-500 text-purple-500"
                : "border-transparent text-gray-500 hover:text-gray-900"
            }`}
            onClick={() => setMode("register")}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <div className="border border-gray-300 bg-white dark:bg-gray-900 shadow-xl p-6">
          {mode === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </section>
  );
};

export default Login;

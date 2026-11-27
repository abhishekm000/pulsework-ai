
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login UI demo! Connect a backend for authentication.");
  };

  return (
    <div className="min-h-screen bg-[#FAF3E1] flex items-center justify-center px-5 py-10">

      <div className="w-full max-w-6xl grid md:grid-cols-2 bg-white rounded-[30px] overflow-hidden shadow-2xl">

        {/* Left Side - Login Form */}
        <div className="p-8 sm:p-12 lg:p-16">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 mb-12">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FA8112] to-[#F5E7C6] flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="27" fill="none"
                stroke="#222222" strokeWidth="2.5"
                strokeLinecap="round">
                <path d="M2 12h4l3-8 5 16 3-8h5" />
              </svg>
            </div>

            <span className="text-2xl font-extrabold text-[#222222]">
              pulsework<span className="text-[#FA8112]">.</span>ai
            </span>
          </a>

          {/* Heading */}
          <div className="mb-8">
            <p className="text-[#FA8112] font-bold text-sm tracking-widest">
              WELCOME BACK
            </p>

            <h1 className="text-4xl font-extrabold text-[#222222] mt-3">
              Sign in to your
              <span className="text-[#FA8112]"> workspace.</span>
            </h1>

            <p className="text-[#222222]/60 mt-4">
              Enter your details to access your Pulsework AI account.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            <div>
              <label className="block text-sm font-bold mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full px-5 py-4 rounded-xl bg-[#FAF3E1] border border-[#F5E7C6] outline-none focus:border-[#FA8112] focus:ring-2 focus:ring-[#FA8112]/20 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                  className="w-full px-5 py-4 pr-16 rounded-xl bg-[#FAF3E1] border border-[#F5E7C6] outline-none focus:border-[#FA8112] focus:ring-2 focus:ring-[#FA8112]/20 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#FA8112]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex justify-between items-center gap-3 text-sm">

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="accent-[#FA8112] w-4 h-4"
                />
                Remember me
              </label>

              <a href="#forgot-password" className="font-bold text-[#FA8112] hover:underline">
                Forgot password?
              </a>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FA8112] to-[#F5B34C] text-[#222222] font-extrabold text-lg shadow-lg hover:shadow-orange-300/50 hover:-translate-y-1 transition duration-300"
            >
              Sign In ↗
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-7">
            <div className="h-px bg-[#222222]/15 flex-1"></div>
            <span className="text-sm text-[#222222]/50">OR CONTINUE WITH</span>
            <div className="h-px bg-[#222222]/15 flex-1"></div>
          </div>

          {/* Google Button - Demo */}
          <button
            type="button"
            onClick={() => alert("Google authentication is not configured yet.")}
            className="w-full py-4 rounded-xl border border-[#222222]/20 font-bold flex items-center justify-center gap-3 hover:bg-[#FAF3E1] transition"
          >
            <span className="text-xl font-extrabold text-[#4285F4]">G</span>
            Continue with Google
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-[#222222]/60 mt-8">
            Don't have an account?
            <a href="#signup" className="text-[#FA8112] font-extrabold ml-1">
              Create Account
            </a>
          </p>

        </div>

        {/* Right Side - Branding */}
        <div className="hidden md:flex relative bg-[#222222] text-[#FAF3E1] p-12 lg:p-16 flex-col justify-between overflow-hidden">

          {/* Decorative Circles */}
          <div className="absolute w-80 h-80 rounded-full bg-[#FA8112]/20 blur-3xl -top-20 -right-20"></div>
          <div className="absolute w-72 h-72 rounded-full bg-[#FA8112]/10 blur-3xl bottom-0 -left-20"></div>

          <div className="relative z-10">
            <span className="text-[#FA8112] font-bold tracking-widest text-sm">
              THE FUTURE OF WORK
            </span>

            <h2 className="text-5xl font-extrabold leading-tight mt-6">
              Your ideas.
              <br />
              Your workflow.
              <br />
              <span className="text-[#FA8112]">One intelligence.</span>
            </h2>

            <p className="text-[#FAF3E1]/60 mt-6 leading-8">
              Bring your productivity and creativity together
              with a smarter digital workspace built around AI.
            </p>
          </div>

          {/* Abstract Illustration */}
          <div className="relative z-10 flex justify-center py-12">
            <div className="relative w-64 h-64 rounded-full border border-[#FA8112]/30 flex items-center justify-center">

              <div className="absolute inset-6 rounded-full border border-[#FA8112]/40"></div>

              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-[#FA8112] to-[#F5E7C6] shadow-[0_0_80px_rgba(250,129,18,0.3)] flex items-center justify-center">

                <svg viewBox="0 0 100 100" width="110" fill="none"
                  stroke="#222222" strokeWidth="4"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 50h15l12-25 20 50 12-25h15" />
                </svg>

              </div>

              <div className="absolute top-8 right-8 w-5 h-5 rounded-full bg-[#FA8112]"></div>
              <div className="absolute bottom-10 left-5 w-3 h-3 rounded-full bg-[#F5E7C6]"></div>

            </div>
          </div>

          <div className="relative z-10 border-t border-white/10 pt-6">
            <p className="text-sm text-[#FAF3E1]/50">
              © 2026 Pulsework AI. Work smarter. Achieve more.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;

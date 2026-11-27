 
import { useState } from "react";

function Navbar({ onLogin, onCreateTask }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-[#FAF3E1] sticky top-0 z-50 border-b border-[#F5E7C6]">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FA8112] to-[#F5E7C6] flex items-center justify-center">

            <svg
              viewBox="0 0 24 24"
              width="27"
              height="27"
              fill="none"
              stroke="#222222"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M2 12h4l3-8 5 16 3-8h5" />
            </svg>

          </div>

          <span className="text-2xl font-extrabold tracking-tight text-[#222222]">
            pulsework<span className="text-[#FA8112]">.</span>ai
          </span>

        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-10">

          <a href="#home" className="text-[#222222] font-medium hover:text-[#FA8112] transition">
            Home
          </a>

          <a href="#features" className="text-[#222222] font-medium hover:text-[#FA8112] transition">
            Features
          </a>

          <a href="#workflow" className="text-[#222222] font-medium hover:text-[#FA8112] transition">
            How It Works
          </a>

          <a href="#about" className="text-[#222222] font-medium hover:text-[#FA8112] transition">
            About
          </a>

        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-4">

          <button
            onClick={onLogin}
            className="font-bold text-[#222222] hover:text-[#FA8112] transition"
          >
            Login
          </button>

          <button
            onClick={onCreateTask}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FA8112] to-[#F5B34C] text-[#222222] font-bold shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300"
          >
            Create Task ↗
          </button>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#222222] p-2"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAF3E1] border-t border-[#F5E7C6] px-6 py-6 space-y-5">

          <a href="#home" onClick={closeMenu}
            className="block font-medium text-[#222222] hover:text-[#FA8112]">
            Home
          </a>

          <a href="#features" onClick={closeMenu}
            className="block font-medium text-[#222222] hover:text-[#FA8112]">
            Features
          </a>

          <a href="#workflow" onClick={closeMenu}
            className="block font-medium text-[#222222] hover:text-[#FA8112]">
            How It Works
          </a>

          <a href="#about" onClick={closeMenu}
            className="block font-medium text-[#222222] hover:text-[#FA8112]">
            About
          </a>

          <div className="flex flex-col gap-3 pt-3">

            <button
              onClick={() => {
                closeMenu();
                onLogin?.();
              }}
              className="w-full py-3 rounded-full border border-[#FA8112] font-bold text-[#222222]"
            >
              Login
            </button>

            <button
              onClick={() => {
                closeMenu();
                onCreateTask?.();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#FA8112] to-[#F5B34C] font-bold text-[#222222]"
            >
              Create Task ↗
            </button>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;

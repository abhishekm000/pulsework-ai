
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Login from "./components/Login";
import NewTask from "./components/NewTask";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showNewTask, setShowNewTask] = useState(false);

  if (showLogin) {
    return (
      <div>
        <button
          onClick={() => setShowLogin(false)}
          className="fixed top-5 left-5 z-[100] bg-[#FAF3E1] px-5 py-3 rounded-full font-bold shadow-lg hover:bg-[#F5E7C6]"
        >
          ← Back to Home
        </button>

        <Login />
      </div>
    );
  }

  if (showNewTask) {
    return (
      <div className="min-h-screen bg-[#FAF3E1]">
        <button
          onClick={() => setShowNewTask(false)}
          className="fixed top-5 left-5 z-[100] rounded-full bg-white px-5 py-3 font-bold shadow-lg transition hover:bg-[#F5E7C6]"
        >
          ← Back to Home
        </button>
        <NewTask />
      </div>
    );
  }

  return (
    <>
      <Navbar
        onLogin={() => setShowLogin(true)}
        onCreateTask={() => setShowNewTask(true)}
      />

      <main>
        <Hero />
        <Features />
        <Workflow />
      </main>

      <Footer />
    </>
  );
}

export default App;

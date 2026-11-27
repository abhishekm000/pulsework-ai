
function Hero() {
  return (
    <section id="home" className="bg-[#FAF3E1] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <div className="inline-flex items-center gap-2 bg-[#F5E7C6] rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FA8112]"></span>
            <span className="text-sm font-semibold">INTELLIGENCE MEETS PRODUCTIVITY</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#222222] leading-tight">
            Work smarter.
            <br />
            Think <span className="text-[#FA8112]">bigger.</span>
            <br />
            Move faster.
          </h1>

          <p className="text-lg text-[#222222]/65 mt-7 max-w-lg leading-8">
            Welcome to Pulsework AI — your intelligent workspace
            designed to simplify tasks, organize workflows and
            help you achieve more with the power of AI.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">

            <a
              href="#features"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FA8112] to-[#F5B34C] font-bold text-[#222222] shadow-lg hover:scale-105 transition"
            >
              Explore Platform ↗
            </a>

            <a
              href="#workflow"
              className="px-8 py-4 rounded-full border border-[#222222]/30 font-bold hover:bg-[#F5E7C6] transition"
            >
              Discover More →
            </a>

          </div>

          <div className="flex gap-8 mt-12">
            <div>
              <h3 className="text-3xl font-extrabold">AI</h3>
              <p className="text-sm text-[#222222]/60">Powered Workspace</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold">24/7</h3>
              <p className="text-sm text-[#222222]/60">Smart Assistance</p>
            </div>
          </div>

        </div>

        {/* Right Dashboard Illustration */}
        <div className="relative">

          <div className="absolute w-72 h-72 bg-[#FA8112]/20 blur-3xl rounded-full -top-10 -right-10"></div>

          <div className="relative bg-[#F5E7C6] rounded-[2rem] p-6 shadow-2xl border border-white/60 rotate-1">

            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="text-sm text-[#222222]/60">YOUR WORKSPACE</p>
                <h2 className="text-2xl font-extrabold">Good morning!</h2>
              </div>
              <div className="w-11 h-11 rounded-full bg-[#FA8112] flex items-center justify-center font-bold">
                PW
              </div>
            </div>

            <div className="bg-[#FAF3E1] rounded-2xl p-5 mb-4">
              <p className="text-sm text-[#222222]/60">Productivity overview</p>
              <h2 className="text-4xl font-extrabold mt-2">86%</h2>
              <div className="w-full h-2 bg-[#F5E7C6] rounded-full mt-4">
                <div className="w-[86%] h-full bg-gradient-to-r from-[#FA8112] to-[#F5B34C] rounded-full"></div>
              </div>
              <p className="text-xs mt-3 text-[#222222]/60">Illustrative dashboard preview</p>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-[#FAF3E1] rounded-2xl p-4">
                <div className="text-2xl">✦</div>
                <h3 className="font-bold mt-3">AI Assistant</h3>
                <p className="text-xs text-[#222222]/60 mt-1">Smart support</p>
              </div>

              <div className="bg-[#FAF3E1] rounded-2xl p-4">
                <div className="text-2xl">✓</div>
                <h3 className="font-bold mt-3">Tasks</h3>
                <p className="text-xs text-[#222222]/60 mt-1">Stay organized</p>
              </div>

            </div>

            <div className="bg-[#222222] text-[#FAF3E1] rounded-2xl p-5 mt-4">
              <p className="text-sm text-[#F5E7C6]">Pulsework AI insight</p>
              <h3 className="font-bold mt-2">
                Your next big idea starts here.
              </h3>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;

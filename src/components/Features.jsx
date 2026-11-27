
const features = [
  {
    number: "01",
    symbol: "✦",
    title: "AI Intelligence",
    description: "Make smarter decisions with intelligent AI-powered assistance."
  },
  {
    number: "02",
    symbol: "↗",
    title: "Smart Productivity",
    description: "Organize your tasks and improve your everyday workflow."
  },
  {
    number: "03",
    symbol: "◎",
    title: "Workflow Management",
    description: "Bring your work, ideas and activities into one workspace."
  },
  {
    number: "04",
    symbol: "⌘",
    title: "Seamless Experience",
    description: "Enjoy a clean, simple and user-friendly digital environment."
  }
];

function Features() {
  return (
    <section id="features" className="bg-[#F5E7C6] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-2xl mb-14">
          <p className="text-[#FA8112] font-bold tracking-widest text-sm">
            WHAT WE OFFER
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Everything you need.
            <span className="text-[#FA8112]"> One workspace.</span>
          </h2>

          <p className="mt-5 text-[#222222]/65 leading-7">
            Discover a smarter way to work with tools designed
            to bring simplicity and intelligence together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {features.map((feature) => (
            <div
              key={feature.number}
              className="bg-[#FAF3E1] rounded-3xl p-7 border border-[#222222]/5 hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >

              <div className="flex justify-between items-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FA8112] to-[#F5B34C] flex items-center justify-center text-2xl font-bold">
                  {feature.symbol}
                </div>

                <span className="text-sm text-[#222222]/40 font-bold">
                  {feature.number}
                </span>
              </div>

              <h3 className="text-xl font-extrabold mt-8">
                {feature.title}
              </h3>

              <p className="text-sm text-[#222222]/60 leading-7 mt-3">
                {feature.description}
              </p>

              <div className="mt-6 text-[#FA8112] font-bold">
                Explore more ↗
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;

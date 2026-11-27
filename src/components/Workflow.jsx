
const steps = [
  {
    number: "01",
    title: "Get Started",
    description: "Enter your workspace and explore the Pulsework AI experience."
  },
  {
    number: "02",
    title: "Work Smarter",
    description: "Use intelligent tools to organize your tasks and workflows."
  },
  {
    number: "03",
    title: "Achieve More",
    description: "Focus on what matters and make your work more productive."
  }
];

function Workflow() {
  return (
    <section id="workflow" className="bg-[#FAF3E1] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#FA8112] font-bold tracking-widest text-sm">
            SIMPLE PROCESS
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Three steps.
            <span className="text-[#FA8112]"> Endless possibilities.</span>
          </h2>

          <p className="text-[#222222]/60 mt-5 leading-7">
            A simple journey towards a smarter and more productive workspace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-[#F5E7C6] rounded-3xl p-9"
            >

              <div className="text-6xl font-extrabold text-[#FA8112]/30">
                {step.number}
              </div>

              <h3 className="text-2xl font-extrabold mt-7">
                {step.title}
              </h3>

              <p className="text-[#222222]/60 mt-4 leading-7">
                {step.description}
              </p>

              <div className="mt-8 w-12 h-1 rounded-full bg-gradient-to-r from-[#FA8112] to-[#F5B34C]"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Workflow;

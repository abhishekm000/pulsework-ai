const features = [
  {
    icon: "◷",
    title: "Plan your day",
    description:
      "Turn a long task list into a clear plan, with priorities you can act on.",
  },
  {
    icon: "✦",
    title: "Get help from AI",
    description:
      "Summarize notes, shape rough ideas, and find a useful next step.",
  },
  {
    icon: "↗",
    title: "Move projects forward",
    description:
      "Keep goals, tasks, and progress together so nothing important gets lost.",
  },
  {
    icon: "▤",
    title: "Keep everything organized",
    description:
      "Bring your work into one focused space that’s easy to come back to.",
  },
  {
    icon: "◉",
    title: "Protect your focus",
    description:
      "See what matters now and give your attention to one thing at a time.",
  },
  {
    icon: "✓",
    title: "Finish with confidence",
    description:
      "Track the small wins and see how your work adds up over time.",
  },
];

const tasks = [
  { title: "Finalize product brief", label: "Product", time: "9:30 AM", done: true },
  { title: "Review team priorities", label: "Planning", time: "11:00 AM", done: false },
  { title: "Share weekly update", label: "Team", time: "2:00 PM", done: false },
];

const steps = [
  {
    number: "01",
    title: "Bring your work together",
    description: "Add the tasks, ideas, and projects you want to move forward.",
  },
  {
    number: "02",
    title: "Choose what matters today",
    description: "Make a focused plan with a clear next step for each priority.",
  },
  {
    number: "03",
    title: "Make steady progress",
    description: "Use your workspace and AI suggestions to keep moving.",
  },
];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FAF3E1] text-[#222222]">
      <header className="sticky top-0 z-20 border-b border-[#222222]/10 bg-[#FAF3E1]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3" aria-label="Pulsework AI home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#222222] text-lg font-bold text-[#FAF3E1]">
              P
            </span>
            <span className="text-xl font-bold tracking-tight">
              Pulsework <span className="text-[#FA8112]">AI</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-[#222222]/70 md:flex">
            <a href="#features" className="transition hover:text-[#FA8112]">
              Features
            </a>
            <a href="#how-it-works" className="transition hover:text-[#FA8112]">
              How it works
            </a>
            <a href="#about" className="transition hover:text-[#FA8112]">
              About
            </a>
          </div>

          <a
            href="#get-started"
            className="rounded-lg bg-gradient-to-r from-[#FA8112] to-[#f6a33a] px-5 py-2.5 text-sm font-bold text-[#222222] shadow-md shadow-[#FA8112]/20 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get started
          </a>
        </nav>
      </header>

      <section className="relative">
        <div className="pointer-events-none absolute -right-32 top-8 h-96 w-96 rounded-full bg-[#F5E7C6] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-[#FA8112]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#FA8112]/25 bg-[#F5E7C6] px-4 py-2 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-[#FA8112]" />
              A smarter rhythm for your workday
            </p>

            <h1 className="mt-7 max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
              Make your next great idea happen.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#222222]/70">
              Pulsework AI brings your tasks, plans, and ideas into one clear
              workspace—so you can spend less time juggling work and more time
              making progress.
            </p>

            <div id="get-started" className="mt-9 flex flex-wrap gap-3">
              <a
                href="mailto:hello@pulsework.ai"
                className="rounded-lg bg-gradient-to-r from-[#FA8112] to-[#f6a33a] px-6 py-3.5 font-bold text-[#222222] shadow-lg shadow-[#FA8112]/25 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get started
              </a>
              <a
                href="#features"
                className="rounded-lg border border-[#222222]/20 bg-[#FAF3E1] px-6 py-3.5 font-semibold transition hover:bg-[#F5E7C6]"
              >
                Explore features
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#222222]/60">
              <span className="flex items-center gap-2">
                <span className="font-bold text-[#FA8112]">✓</span>
                Simple to get started
              </span>
              <span className="flex items-center gap-2">
                <span className="font-bold text-[#FA8112]">✓</span>
                Designed for focused work
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#F5E7C6] via-[#FA8112]/15 to-[#FAF3E1]" />
            <div className="relative rounded-3xl border border-[#222222]/10 bg-white/90 p-5 shadow-2xl shadow-[#222222]/10 sm:p-7">
              <div className="flex items-start justify-between border-b border-[#222222]/10 pb-5">
                <div>
                  <p className="text-sm text-[#222222]/55">Tuesday, June 18</p>
                  <h2 className="mt-1 text-xl font-bold">Good morning, Alex</h2>
                  <p className="mt-1 text-sm text-[#222222]/60">
                    Let’s make today count.
                  </p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5E7C6] font-bold">
                  A
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <h3 className="font-bold">Today’s priorities</h3>
                <span className="rounded-full bg-[#F5E7C6] px-3 py-1 text-xs font-semibold">
                  1 of 3 complete
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.title}
                    className="flex items-center gap-3 rounded-xl border border-[#222222]/10 bg-white p-4"
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        task.done
                          ? "bg-[#FA8112] text-[#222222]"
                          : "border-2 border-[#222222]/20"
                      }`}
                    >
                      {task.done && <span className="text-xs">✓</span>}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={`truncate text-sm font-semibold ${
                          task.done
                            ? "text-[#222222]/45 line-through"
                            : "text-[#222222]"
                        }`}
                      >
                        {task.title}
                      </p>
                      <p className="mt-1 text-xs text-[#222222]/50">{task.label}</p>
                    </div>
                    <span className="text-xs text-[#222222]/50">{task.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl bg-[#F5E7C6]/70 p-4">
                <p className="flex items-center gap-2 text-sm font-bold">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-[#FA8112] to-[#f6a33a]">
                    ✦
                  </span>
                  A helpful suggestion
                </p>
                <p className="mt-2 text-sm leading-6 text-[#222222]/70">
                  Your project review is complete. Use those notes to prepare
                  the team update.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#222222]/5 bg-[#F5E7C6]/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 sm:grid-cols-3 sm:gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold">One workspace</p>
            <p className="mt-1 text-sm text-[#222222]/60">For your daily work</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">Clear priorities</p>
            <p className="mt-1 text-sm text-[#222222]/60">For your next steps</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">Helpful AI</p>
            <p className="mt-1 text-sm text-[#222222]/60">When you need a hand</p>
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-[#FA8112]">
              Made for your everyday flow
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to move work forward.
            </h2>
            <p className="mt-4 leading-7 text-[#222222]/70">
              Keep your day organized, get useful support from AI, and make
              progress one focused step at a time.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-[#222222]/10 bg-white/70 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-[#222222]/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#FA8112] to-[#f6a33a] text-xl font-bold">
                  {feature.icon}
                </span>
                <h3 className="mt-5 text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 leading-7 text-[#222222]/65">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#F5E7C6]/70 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-[#FA8112]">
              How it works
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A clear path from busy to focused.
            </h2>
            <p className="mt-4 leading-7 text-[#222222]/70">
              Start simple. Build a rhythm that works for you.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-[#222222]/10 bg-[#FAF3E1] p-7"
              >
                <p className="text-sm font-bold text-[#FA8112]">{step.number}</p>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 leading-7 text-[#222222]/65">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#FA8112]">
              Work with more intention
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Your tools should make work feel lighter.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#222222]/70">
            Pulsework AI is built around a simple idea: when your priorities
            are clear, it’s easier to make progress. Use it to plan your day,
            collect your thoughts, and keep your projects moving at a
            sustainable pace.
          </p>
        </div>
      </section>

      <section className="px-6 pb-20 sm:pb-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center rounded-3xl bg-[#222222] px-7 py-14 text-center text-[#FAF3E1] sm:px-12 sm:py-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#FA8112]">
            Your next step starts here
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Bring more focus to your workday.
          </h2>
          <p className="mt-4 max-w-xl leading-7 text-[#FAF3E1]/70">
            Put your priorities in one place and make room for meaningful progress.
          </p>
          <a
            href="mailto:hello@pulsework.ai"
            className="mt-8 rounded-lg bg-gradient-to-r from-[#FA8112] to-[#f6a33a] px-6 py-3 font-bold text-[#222222] shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
          >
            Get started
          </a>
        </div>
      </section>

      <footer className="border-t border-[#222222]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-sm text-[#222222]/60 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="font-bold text-[#222222]">
            Pulsework <span className="text-[#FA8112]">AI</span>
          </a>
          <p>Thoughtful tools for focused work.</p>
          <p>© {new Date().getFullYear()} Pulsework AI</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
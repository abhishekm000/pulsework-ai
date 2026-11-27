
function Footer() {
  return (
    <footer id="contact" className="bg-[#222222] text-[#FAF3E1] pt-16 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 pb-12">

          <div id="about">
            <h2 className="text-3xl font-extrabold">
              pulsework<span className="text-[#FA8112]">.</span>ai
            </h2>

            <p className="text-[#FAF3E1]/60 mt-5 max-w-sm leading-7">
              Work smarter, think bigger and achieve more.
              Experience a new way of bringing intelligence
              and productivity together.
            </p>
          </div>

          <div className="md:text-right">
            <h3 className="font-bold text-lg">Explore</h3>

            <div className="flex md:justify-end flex-wrap gap-6 mt-5 text-[#FAF3E1]/60">
              <a href="#home" className="hover:text-[#FA8112]">Home</a>
              <a href="#features" className="hover:text-[#FA8112]">Features</a>
              <a href="#workflow" className="hover:text-[#FA8112]">Workflow</a>
              <a href="#contact" className="hover:text-[#FA8112]">Contact</a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between gap-4 text-sm text-[#FAF3E1]/50">
          <p>© {new Date().getFullYear()} Pulsework AI. All rights reserved.</p>
          <p>Designed with intelligence. Built for productivity.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

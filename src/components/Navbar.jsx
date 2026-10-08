

import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <header className="fixed left-0 right-0 top-4 z-50 hidden md:block">
        <div className="mx-auto max-w-5xl ">

          <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/[0.08] bg-[#080808]/75 px-4 shadow-2xl shadow-black/20 backdrop-blur-2xl">

            {/* LOGO */}
            <a
              href="#home"
              className="group flex items-center gap-2"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-bold text-black transition-transform duration-300 group-hover:rotate-3">
                AF
              </span>

              <span className="text-[15px] font-semibold tracking-tight text-white">
                Abdul
                <span className="text-zinc-500"> Furqan</span>
              </span>
            </a>

            {/* NAV LINKS */}
            <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-1">

              <a
                href="#home"
                className="rounded-lg px-4 py-2 text-xs font-medium text-zinc-400 transition-all duration-300 hover:bg-white/[0.07] hover:text-white"
              >
                Home
              </a>

              <a
                href="#projects"
                className="rounded-lg px-4 py-2 text-xs font-medium text-zinc-400 transition-all duration-300 hover:bg-white/[0.07] hover:text-white"
              >
                Work
              </a>

              <a
                href="#about"
                className="rounded-lg px-4 py-2 text-xs font-medium text-zinc-400 transition-all duration-300 hover:bg-white/[0.07] hover:text-white"
              >
                About
              </a>

              <a
                href="#contact"
                className="rounded-lg px-4 py-2 text-xs font-medium text-zinc-400 transition-all duration-300 hover:bg-white/[0.07] hover:text-white"
              >
                Contact
              </a>

            </div>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-2">

              {/* GitHub */}
              <a
                href="https://github.com/furqancsit"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-zinc-400 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.07] hover:text-white"
              >
                <FaGithub size={15} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abdul-furqan-af/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-zinc-400 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.07] hover:text-white"
              >
                <FaLinkedin size={15} />
              </a>

              {/* Resume */}
              <a
                href="/finalresume.pdf"
                target="_blank"
                rel="noreferrer"
                className="ml-1 flex h-9 items-center gap-1.5 rounded-xl bg-white px-4 text-xs font-semibold text-black transition-all duration-300 hover:bg-zinc-200"
              >
                Resume
                <FiArrowUpRight size={13} />
              </a>

            </div>
          </nav>
        </div>
      </header>


      {/* ================= MOBILE NAV ================= */}
      <header className="fixed left-0 right-0 top-3 z-50 px-4 md:hidden">

        <nav className="flex h-14 items-center justify-between rounded-2xl border border-white/[0.08] bg-[#080808]/80 px-3 shadow-2xl shadow-black/30 backdrop-blur-2xl">

          {/* LOGO */}
          <a
            href="#home"
            className="flex items-center gap-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-black">
              AF
            </span>

            <span className="text-sm font-semibold tracking-tight text-white">
              Abdul
              <span className="text-zinc-500"> Furqan</span>
            </span>
          </a>

          {/* MOBILE LINKS */}
          <div className="flex items-center gap-1">

            <a
              href="#projects"
              className="rounded-xl px-3 py-2 text-xs font-medium text-zinc-400 transition-colors hover:bg-white/[0.07] hover:text-white"
            >
              Work
            </a>

            <a
              href="#about"
              className="rounded-xl px-3 py-2 text-xs font-medium text-zinc-400 transition-colors hover:bg-white/[0.07] hover:text-white"
            >
              About
            </a>

            <a
              href="/finalresume.pdf"
              target="_blank"
              rel="noreferrer"
              className="ml-1 flex items-center gap-1 rounded-xl bg-white px-3.5 py-2 text-xs font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Resume
              <FiArrowUpRight size={12} />
            </a>

          </div>

        </nav>
      </header>
    </>
  );
};

export default Navbar;

import React from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineFolder,
} from "react-icons/hi2";

import { FiFileText } from "react-icons/fi";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* DESKTOP NAV */}
      <header className="hidden md:block fixed top-5 left-0 right-0 z-50">
        <div className="max-w-[1180px] mx-auto px-5">

          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl px-5 py-4">

            {/* logo */}
            <a
              href="#home"
              className="text-lg font-semibold tracking-tight text-white"
            >
              Abdul<span className="text-zinc-500">Furqan</span>
            </a>

            {/* nav */}
            <div className="flex items-center gap-6 text-sm text-zinc-400">

              <a
                href="#projects"
                className="hover:text-white transition"
              >
                Projects
              </a>

              <a
                href="#about"
                className="hover:text-white transition"
              >
                About
              </a>

              <a
                href="#contact"
                className="hover:text-white transition"
              >
                Contact
              </a>

            </div>

            {/* right */}
            <div className="flex items-center gap-3">

              <a
                href="https://github.com/furqancsit"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-400 hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abdul-furqan-af/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-400 hover:text-white transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="/finalresume.pdf"
                target="_blank"
                rel="noreferrer"
                className="h-10 px-5 rounded-xl bg-white text-black text-sm font-medium flex items-center hover:bg-zinc-200 transition"
              >
                Resume
              </a>

            </div>
          </div>
        </div>
      </header>

      {/* MOBILE NAV */}
      {/* MOBILE NAV */}
      <div className="md:hidden fixed top-4 inset-x-0 z-50">

        <div className="max-w-6xl mx-auto px-5">

          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl px-3 py-3">

            {/* logo */}
            <a
              href="#home"
              className="text-sm font-semibold tracking-tight text-white"
            >
              Abdul
              <span className="text-zinc-500">
                Furqan
              </span>
            </a>

            {/* links */}
            <div className="flex items-center gap-1">

              <a
                href="#projects"
                className="rounded-full px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                Work
              </a>

              <a
                href="#about"
                className="rounded-full px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                About
              </a>

              <a
                href="/finalresume.pdf"
                target="_blank"
                rel="noreferrer"
                className="ml-1 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Resume
              </a>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
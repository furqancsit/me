import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import mypic from "../assets/mypic.jpg";

function Hero() {
  return (
    <section className="bg-[#050505] text-white relative overflow-hidden pt-16">
      {/* background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,200,0,0.08),transparent_40%)]" />

      <div className="relative z-10 pt-16 pb-10 max-w-6xl mx-auto px-5">

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div className="w-full">

            {/* identity row */}
            <div className="flex items-center gap-3">

              <div className="relative shrink-0">

                <div className="absolute inset-0 bg-amber-400 blur-2xl opacity-20 rounded-full" />

                <img
                  src={mypic}
                  alt="Abdul Furqan"
                  className="relative w-14 h-14 rounded-2xl object-cover border border-white/10"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available for Work
                </div>

                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight mt-1">
                  Abdul Furqan
                </h1>

                <p className="text-zinc-500 text-xs sm:text-sm">
                 Full-Stack Developer • MERN • Next.js • SQL 
                </p>
              </div>
            </div>

            {/* heading (IMPROVED) */}
            <div className="mt-10">

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] sm:leading-[1.05] tracking-tight">
               I build modern web applications 
                <span className="block text-zinc-400">
                 with clean and scalable solutions.
                </span>
              </h2>

              <p className="mt-5 text-zinc-400 text-sm sm:text-[15px] leading-relaxed max-w-xl">
                {/* I’m a full-stack developer focused on building fast, scalable,
                and user-centric applications with clean architecture, strong UI systems,
                and performance-first engineering. */}
                Full-stack developer focused on building scalable, responsive, and user-centric web applications using modern JavaScript technologies and clean engineering practices.
              </p>
            </div>

            {/* CTA */}
           <div className="mt-8 flex items-center sm:items-center gap-3 ">

              <a
                href="#projects"
                className="h-12 px-5 rounded-xl bg-white text-black font-medium flex items-center gap-2 hover:bg-zinc-200 transition"
              >
                View Projects
                <FaArrowRight className="text-sm" />
              </a>

              <a
                href="#contact"
                className="h-12 px-5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] transition "
              >
                Let's Connect
              </a>
            </div>

            {/* socials */}
            <div className="mt-7 flex items-center gap-3">

              <a
                href="https://github.com/furqancsit"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abdul-furqan-af/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:a.furqan.codes@gmail.com"
                className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full hidden lg:flex justify-center">

            <div className="relative w-[420px] h-[500px] rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.03]">

              <img
                src={mypic}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl backdrop-blur-xl bg-black/40 border border-white/10">

                <p className="text-zinc-400 text-sm">
                  Focus Areas
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {["Frontend Architecture", "Backend APIs", "UI Systems", "Performance"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/10 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
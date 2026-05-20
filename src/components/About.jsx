// About.jsx
import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    label: "Projects Built",
    value: "10+",
  },
  {
    label: "Tech Stack",
    value: "MERN",
  },
  {
    label: "Focus",
    value: "Full-Stack",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070707] text-white py-24 md:py-32 "
    >

      {/* subtle background glow */}
      <div className="absolute inset-0 " />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
              About
            </p>

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">

              Building scalable web applications
              <span className="block text-zinc-500">
                digital experiences
              </span>
              with modern engineering.

            </h2>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {/* main paragraph */}
            <p className="text-[15px] sm:text-lg text-zinc-400 leading-relaxed">

              I'm Abdul Furqan, a full-stack developer focused on building scalable,
              responsive, and performance-driven web applications using modern
              JavaScript technologies.

              <br />
              <br />

              I enjoy developing clean frontend interfaces, efficient backend systems,
              and practical full-stack solutions with React, Next.js, Node.js,
              MongoDB, and SQL.

              <br />
              <br />

              Currently completing my MCA while continuously improving my frontend
              architecture, backend development, and real-world product engineering skills
              through hands-on projects.

            </p>

            {/* stats */}
            <div className="mt-12 grid sm:grid-cols-3 gap-4">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5"
                >

                  <p className="text-sm text-zinc-500">
                    {item.label}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {item.value}
                  </h3>

                </div>
              ))}

            </div>



          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;
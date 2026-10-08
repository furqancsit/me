


import { motion } from "framer-motion";

const stats = [
  {
    label: "Projects",
    value: "10+",
  },
  {
    label: "Stack",
    value: "MERN",
  },
  {
    label: "Specialty",
    value: "Full-Stack",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#050505] px-5 py-20 text-white sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-5xl md:px-4 px-2">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-medium text-zinc-500">
              About me
            </p>

            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              I build web applications that are simple to use and built to scale.
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-2xl text-sm leading-7 text-zinc-400 sm:text-[15px]">

              <p>
                I'm Abdul Furqan, a full-stack developer who enjoys turning
                ideas into practical web applications. I work mainly with
                React, Node.js, MongoDB, and modern JavaScript technologies.
              </p>

              <p className="mt-5">
                I care about writing clean code, building responsive
                interfaces, and creating backend systems that are easy to
                maintain. My projects often involve authentication, APIs,
                databases, dashboards, and real-world product features.
              </p>

              <p className="mt-5">
                I'm currently completing my MCA and improving my skills by
                building projects, exploring better development practices,
                and working on problems that require both frontend and
                backend thinking.
              </p>

            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-3 border-y border-white/[0.08]">

              {stats.map((item, index) => (
                <div
                  key={item.label}
                  className={`py-5 ${
                    index !== 0
                      ? "border-l border-white/[0.08] pl-4 sm:pl-6"
                      : ""
                  }`}
                >
                  <p className="text-[11px] text-zinc-600">
                    {item.label}
                  </p>

                  <p className="mt-1.5 text-xl font-medium text-zinc-200">
                    {item.value}
                  </p>
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


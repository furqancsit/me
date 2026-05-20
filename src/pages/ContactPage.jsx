import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const ContactPage = () => {
  return (
    <section className="bg-[#050505] text-white py-6 px-6">
      <div className="max-w-6xl mx-auto md:px-4">

        <div className="">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16">

            {/* left */}
            <div className="max-w-3xl">

              <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                Contact
              </p>

              <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
                Let’s build modern web products together.
              </h2>

              <p className="mt-8 text-zinc-400 text-[15px] leading-relaxed max-w-xl">
                Open to full-time opportunities, collaborative projects, and modern full-stack engineering roles focused on building scalable web applications.
              </p>

            </div>

            {/* right */}
            <div className="lg:text-right flex flex-col items-center  lg:justify-end">

              <a
                href="mailto:a.furqan.codes@gmail.com"
                className="inline-flex items-center justify-center rounded-2xl bg-white text-black px-7 h-14 text-sm font-medium hover:bg-zinc-200 transition-all duration-300"
              >
                a.furqan.codes@gmail.com
              </a>

              <div className="mt-10 flex items-center gap-3 lg:justify-end">

                <a
                  href="https://github.com/furqancsit"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/abdul-furqan-af/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all duration-300"
                >
                  <FaXTwitter size={18} />
                </a>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;
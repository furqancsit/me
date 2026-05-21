import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const ContactPage = () => {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white py-28 sm:py-36 px-6">

      {/* ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.03] blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-zinc-800/20 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto md:px-5">

        <div className="flex flex-col gap-16 lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:items-end">

          {/* left */}
          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-8">
              Contact
            </p>

            <h2 className="max-w-4xl text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-[0.95]">
              Designing and building high-performance digital products for modern brands.
            </h2>

            <p className="mt-10 max-w-xl text-zinc-400 text-[15px] sm:text-base leading-relaxed">
              Available for full-time roles, selected freelance projects,
              and product-focused frontend engineering opportunities.
            </p>

          </div>

          {/* right */}
          <div className="flex flex-col items-start lg:items-end gap-8">

            {/* CTA */}
            <a
              href="mailto:a.furqan.codes@gmail.com"
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white
                px-7
                h-14
                text-sm
                font-medium
                text-black
                transition-all
                duration-500
                ease-out
                hover:-translate-y-1
                hover:shadow-[0_0_40px_rgba(255,255,255,0.12)]
              "
            >
              <span className="relative z-10">
                a.furqan.codes@gmail.com
              </span>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white to-zinc-200" />
            </a>

            {/* socials */}
            <div className="flex items-center gap-4">

              {[
                {
                  icon: <FaGithub size={18} />,
                  href: "https://github.com/furqancsit",
                },
                {
                  icon: <FaLinkedin size={18} />,
                  href: "https://www.linkedin.com/in/abdul-furqan-af/",
                },
                {
                  icon: <FaXTwitter size={18} />,
                  href: "#",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    relative
                    flex
                    items-center
                    justify-center
                    w-12
                    h-12
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    text-zinc-500
                    transition-all
                    duration-500
                    ease-out
                    hover:-translate-y-1
                    hover:border-white/20
                    hover:bg-white/[0.05]
                    hover:text-white
                  "
                >
                  {item.icon}
                </a>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactPage;

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const ContactPage = () => {
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub size={14} />,
      href: "https://github.com/furqancsit",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={14} />,
      href: "https://www.linkedin.com/in/abdul-furqan-af/",
    },
    
  ];

  return (
    <section
      id="contact"
      className="bg-[#050505] px-5 py-20 text-white sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-5xl md:px-4 px-2">

        {/* HEADER */}
       <div className="max-w-2xl">
  <p className="text-xs font-medium text-zinc-500">
    Contact
  </p>

  <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
    Open to opportunities and good projects.
  </h2>

  <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:text-[15px]">
    I'm open to full-time roles, freelance work, and opportunities where I
    can contribute as a full-stack developer.
  </p>
</div>

        {/* CONTACT */}
        <div className="mt-10 border-y border-white/[0.08]">

          <div className="flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">

            {/* EMAIL */}
            <div>
              <p className="text-[11px] text-zinc-600">
                Email
              </p>

              <a
                href="mailto:a.furqan.codes@gmail.com"
                className="mt-1 block text-sm font-medium text-zinc-200 transition hover:text-white"
              >
                a.furqan.codes@gmail.com
              </a>
            </div>

            {/* BUTTON */}
            <a
              href="mailto:a.furqan.codes@gmail.com"
              className="inline-flex h-10 w-fit items-center gap-2 rounded-lg bg-white px-4 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              send email
              <FaArrowUpRightFromSquare size={11} />
            </a>

          </div>

        </div>

        {/* SOCIALS */}
        <div className="mt-6 flex flex-wrap items-center gap-2">

          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 items-center gap-2 rounded-lg border border-white/[0.08] px-3 text-xs text-zinc-500 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
            >
              {item.icon}
              {item.name}
            </a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ContactPage;


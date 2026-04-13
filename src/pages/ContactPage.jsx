
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
export default function ContactPage() {
  return (
    <section className="w-full px-6 md:px-10 py-24 bg-black text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[20%] w-[300px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-100px] right-[10%] w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Let’s Build Something{" "}
          <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Great
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Have an idea, project, or opportunity? I’m always open to discussing
          new work, collaborations, or just having a chat.
        </p>

        {/* Email CTA */}
        <Link
          to="mailto:a.furqan.codes@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-black font-medium rounded-lg hover:bg-amber-300 transition cursor-pointer"
        >
          <FiMail />
          a.furqan.codes@gmail.com
        </Link>

        {/* Divider */}
        <div className="my-12 border-t border-white/10"></div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 text-2xl text-gray-500">
          <Link
            to="https://github.com/furqancsit"
            target="_blank"
            className="hover:text-amber-400 transition"
          >
            <FiGithub />
          </Link>

          <Link
            to="https://www.linkedin.com/in/abdul-furqan-af/"
            target="_blank"
            className="hover:text-amber-400 transition"
          >
            <FiLinkedin />
          </Link>

          <Link
            to="#"
            target="_blank"
            className="hover:text-amber-400 transition"
          >
            <FiTwitter />
          </Link>
        </div>

      </div>
    </section>
  );
}
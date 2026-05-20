const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">

      <div className="max-w-6xl mx-auto px-5 py-6">

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          {/* left */}
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Abdul Furqan
          </p>

          {/* right */}
          <p className="text-sm text-zinc-600">
            Built with React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
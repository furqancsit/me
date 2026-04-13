

const EducationSection = () => {
  return (
    <section className="w-full bg-black text-white">
  <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">

    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-left mb-10">
      Education
    </h2>

    {/* Education List */}
    <ul className="space-y-8">
      <li className="border-l-2 border-amber-400 pl-6">
        <h3 className="text-xl md:text-2xl font-semibold">
          MCA (Master of Computer Applications) — 2025
        </h3>
        <p className="text-gray-400">
          SRTMUN University, Nanded (Via IIMS)
        </p>
      </li>

      <li className="border-l-2 border-amber-400 pl-6">
        <h3 className="text-xl md:text-2xl font-semibold">
          BCA (Bachelor of Computer Applications) — 2023
        </h3>
        <p className="text-gray-400">
          SRTMUN University, Nanded (via ITM College)
        </p>
      </li>

      <li className="border-l-2 border-amber-400 pl-6">
        <h3 className="text-xl md:text-2xl font-semibold">
          12th Science
        </h3>
        <p className="text-gray-400">
          Completed in Nanded
        </p>
      </li>
    </ul>
  </div>
</section>
  );
};

export default EducationSection;
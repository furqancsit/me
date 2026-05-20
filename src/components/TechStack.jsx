
import React from 'react'

const TechStack = () => {
  return (
    <div>
      <section className="px-5 py-20 bg-[#050505] text-white">

        <div className="max-w-[1180px] mx-auto">

          <p className="text-sm text-zinc-500 uppercase tracking-[0.2em]">
            Capabilities
          </p>

          <div className="mt-10 space-y-10">

            <div className="border-b border-white/10 pb-10">

              <h3 className="text-2xl font-semibold tracking-tight">
                Frontend Engineering
              </h3>

              <p className="mt-3 text-zinc-400 max-w-xl leading-relaxed">
                Building responsive and modern interfaces with React,
                Next.js, Tailwind CSS, and performance-focused architecture.
              </p>

            </div>

            <div className="border-b border-white/10 pb-10">

              <h3 className="text-2xl font-semibold tracking-tight">
                Backend Systems
              </h3>

              <p className="mt-3 text-zinc-400 max-w-xl leading-relaxed">
                Designing scalable APIs, authentication systems,
                database architecture, and cloud-ready applications.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold tracking-tight">
                Product-Focused UI
              </h3>

              <p className="mt-3 text-zinc-400 max-w-xl leading-relaxed">
                Creating clean, cinematic, and intuitive user experiences
                inspired by modern digital products.
              </p>

            </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default TechStack
import React from "react";
import ProjectCard from "../components/ProjectCard";
const projects = [
    {
        title: "Blog Platform",
        description: "Markdown-based blog platform with SEO & dark mode.",
        image: "/images/blog.png",
        liveLink: "https://yourblog.com",
        moreLink: "/projects/coming-soon",
        tech: ["Next.js", "Tailwind", "MDX"],
    },
    {
        title: "E-commerce Store",
        description: "Full-featured store with payments & admin dashboard.",
        image: "/images/e-commerce.png",
        liveLink: "#",
        moreLink: "/projects/coming-soon",
        tech: ["Next.js", "Stripe", "MongoDB"],
    },
    {
        title: "AI Job Tracker",
        description:
            "AI-powered job tracking platform with resume optimization & analytics.",
        image: "/images/job.png",
        liveLink: "#",
        moreLink: "/projects/coming-soon",
        tech: ["MERN", "Next.js", "OpenAI"],
    },
    {
        title: "Dashboard App",
        description: "Modern analytics dashboard with charts & filters.",
        image: "/images/dashboard.png",
        liveLink: "#",
        moreLink: "/projects/coming-soon",
        tech: ["React", "Chart.js", "Tailwind"],
    },
];

const Project = () => {
    return (
        <section className="w-full px-6 md:px-10 py-2 bg-black text-white">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-12 space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Selected Work
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-base max-w-xl">
                        A collection of projects where I design and build scalable,
                        high-performance applications with modern technologies.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Project;

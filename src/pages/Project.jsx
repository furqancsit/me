import React from "react";
import ProjectCard from "../components/ProjectCard";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
const projects =[
  {
    "title": "SaaS AI Platform",
    "image" : p1,
    "description": "AI-powered SaaS platform with chatbot automation, secure authentication, and scalable backend architecture using Next.js and MongoDB.",
    "tech_stack": ["Next.js", "TypeScript", "MongoDB", "JWT", "CI/CD"],
    "highlights": ["AI Integration", "Scalable Architecture", "Authentication System"],
    "github": "https://github.com/yourusername/saas-ai",
    "live": "https://your-live-link.com"
  },
  {
    "title": "AI Interviewer Agent",
    "image" : p2,

    "description": "Intelligent mock interview platform that generates dynamic questions and delivers real-time feedback using AI and MERN stack.",
    "tech_stack": ["MongoDB", "Express.js", "React.js", "Node.js", "OpenAI API", "Docker"],
    "highlights": ["AI-Based Feedback", "Dynamic Question Generation", "Dockerized App"],
    "github": "https://github.com/yourusername/ai-interviewer",
    "live": "https://your-live-link.com"
  },
  {
    "title": "E-Commerce Platform",
    "image" : p3,

    "description": "Full-stack e-commerce application with secure authentication, product management, and smooth order processing workflow.",
    "tech_stack": ["MongoDB", "Express.js", "React.js", "Node.js"],
    "highlights": ["Authentication", "Cart & Orders", "Optimized Backend"],
    "github": "https://github.com/yourusername/ecommerce",
    "live": "https://your-live-link.com"
  },
  {
    "title": "Learning Management System",
    "image" : p4,

    "description": "Robust LMS platform with role-based access, course management, and interactive learning features for scalable user engagement.",
    "tech_stack": ["MongoDB", "Express.js", "React.js", "Node.js"],
    "highlights": ["RBAC", "Course Management", "Scalable Design"],
    "github": "https://github.com/yourusername/lms",
    "live": "https://your-live-link.com"
  }
]

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
                       Real-world full-stack development projects
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

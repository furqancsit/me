import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaXTwitter } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';
import { projects } from '../lib/projects';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="relative bg-black text-white overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 mt-12 flex flex-col md:flex-row items-center justify-between gap-12">

                <div className="flex-1 space-y-6">

                    {/* Name */}
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                            Abdul Furqan
                        </span>
                    </h1>

                    {/* Role */}
                    <h2 className="text-lg md:text-xl text-gray-400 font-medium">
                        Full Stack Developer • Building scalable & elegant digital experiences
                    </h2>

                    {/* Description */}
                    <p className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed">
                        I design and develop high-performance web applications with a strong focus on
                        <span className="text-white"> clean architecture</span>,{" "}
                        <span className="text-white">intuitive UI</span>, and{" "}
                        <span className="text-white">seamless user experience</span>.
                        Passionate about turning ideas into impactful digital products.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 pt-4">
                        <Link
                             to="/projects"
                            className="px-6 py-3 bg-amber-400 text-black font-medium rounded-lg hover:bg-amber-300 transition"
                        >
                            View Projects
                        </Link>
                        <Link
                            to = "/contactme"
                            className="px-6 py-3 border border-gray-700 rounded-lg hover:border-amber-400 hover:text-amber-400 transition"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-5 text-xl text-gray-500 pt-4">
                        <a
                            href="https://github.com/furqancsit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-400 transition"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/abdul-furqan-af/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-amber-400 transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:a.furqan.codes@gmail.com"
                            className="hover:text-amber-400 transition"
                        >
                            <FaEnvelope />
                        </a>
                        <a
                            href="#"
                            className="hover:text-amber-400 transition"
                        >
                            <FaXTwitter />
                        </a>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Hero
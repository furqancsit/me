


import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="w-full sticky top-0 z-50 bg-black/60 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 md:px-10  py-3 md:py-4 flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center text-xl md:text-2xl font-semibold tracking-tight"
                >
                    <span className="text-amber-400">A</span>
                    <span className="text-white">F</span>
                </Link>

                {/* Resume Button */}
                <a
                    href="/finalresume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-amber-400 border border-amber-400 rounded-lg overflow-hidden group transition"
                >
                    <span className="absolute inset-0 bg-amber-400 translate-y-[100%] group-hover:translate-y-0 transition duration-300 ease-out"></span>
                    <span className="relative group-hover:text-black transition">
                        Resume
                    </span>
                </a>

            </div>
        </nav>
    );
}

export default Navbar;
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EducationSection from './components/EducationSection'
import Project from './pages/Project'
import TechStack from './components/TechStack'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Router>
            <Navbar />

        <div className="max-w-6xl mx-auto  space-y-12 py-6">

          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Project />
                  <TechStack />
                  <EducationSection />
                  <ContactPage />
                </>
              }
            />

            {/* Projects Page */}
            <Route path="/projects" element={<Project />} />
            <Route path="/contactme" element={<ContactPage />} />
          </Routes>

        </div>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
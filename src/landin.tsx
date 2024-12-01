import { useState, useEffect } from 'react'
import {  AlertTriangle, Shield, Eye, Search, FileSearch, Lock, Fingerprint, Wifi, Radar, Camera, Crosshair, Download } from 'lucide-react'
import { Link } from 'react-router-dom';

import { ReactNode } from 'react';


export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  interface IconWrapperProps {
    children: ReactNode;
    className?: string;
    animationName: string;
  }
  
  const IconWrapper = ({ children, className = '', animationName }: IconWrapperProps) => (
    <div
      className={`absolute ${className} opacity-20 filter drop-shadow-[0_0_10px_currentColor]`}
      style={{
        animation: `${animationName} 20s linear infinite`,
      }}
    >
      {children}
    </div>
  );

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes moveTopLeft {
        0% { transform: translate(0, 0); }
        25% { transform: translate(-50px, 50px); }
        50% { transform: translate(-100px, 0); }
        75% { transform: translate(-50px, -50px); }
        100% { transform: translate(0, 0); }
      }
      @keyframes moveTopRight {
        0% { transform: translate(0, 0); }
        25% { transform: translate(50px, 50px); }
        50% { transform: translate(100px, 0); }
        75% { transform: translate(50px, -50px); }
        100% { transform: translate(0, 0); }
      }
      @keyframes moveBottomLeft {
        0% { transform: translate(0, 0); }
        25% { transform: translate(-50px, -50px); }
        50% { transform: translate(-100px, 0); }
        75% { transform: translate(-50px, 50px); }
        100% { transform: translate(0, 0); }
      }
      @keyframes moveBottomRight {
        0% { transform: translate(0, 0); }
        25% { transform: translate(50px, -50px); }
        50% { transform: translate(100px, 0); }
        75% { transform: translate(50px, 50px); }
        100% { transform: translate(0, 0); }
      }
      @keyframes moveCenter {
        0% { transform: translate(0, 0) scale(1); }
        50% { transform: translate(0, 0) scale(1.2); }
        100% { transform: translate(0, 0) scale(1); }
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Moving, glowing background icons */}
      <IconWrapper className="top-1/4 left-1/4" animationName="moveTopLeft">
        <Search className="w-16 h-16 text-blue-700" />
      </IconWrapper>
      <IconWrapper className="top-1/4 right-1/4" animationName="moveTopRight">
        <FileSearch className="w-20 h-20 text-yellow-700" />
      </IconWrapper>
      <IconWrapper className="bottom-1/4 left-1/4" animationName="moveBottomLeft">
        <Lock className="w-12 h-12 text-green-700" />
      </IconWrapper>
      <IconWrapper className="bottom-1/4 right-1/4" animationName="moveBottomRight">
        <Shield className="w-24 h-24 text-red-700" />
      </IconWrapper>
      <IconWrapper className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" animationName="moveCenter">
        <Eye className="w-32 h-32 text-purple-700" />
      </IconWrapper>
      <IconWrapper className="top-3/4 left-1/3" animationName="moveTopRight">
        <Fingerprint className="w-20 h-20 text-indigo-700" />
      </IconWrapper>
      <IconWrapper className="bottom-3/4 right-1/3" animationName="moveBottomLeft">
        <Wifi className="w-16 h-16 text-cyan-700" />
      </IconWrapper>
      <IconWrapper className="top-1/3 right-2/3" animationName="moveTopLeft">
        <Radar className="w-24 h-24 text-emerald-700" />
      </IconWrapper>
      <IconWrapper className="bottom-1/3 left-2/3" animationName="moveBottomRight">
        <Camera className="w-16 h-16 text-pink-700" />
      </IconWrapper>
      <IconWrapper className="top-2/3 right-1/3" animationName="moveTopRight">
        <Crosshair className="w-20 h-20 text-orange-700" />
      </IconWrapper>

      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : ''}`}>
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-red-500">Ethify</Link>
            <div className="space-x-4">
              <Link to="/#features" className="hover:text-red-500 transition-colors">Features</Link>
              <Link to="#dark-patterns" className="hover:text-red-500 transition-colors">Dark Patterns</Link>
              <Link to="https://drive.usercontent.google.com/u/0/uc?id=1SxQVMTbIbvPOJXvVABSZ8ixEs9dM9LQp&export=download" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Download 
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="h-screen flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-red-500">Protect Yourself from Dark Patterns</h1>
            <p className="text-xl mb-8">Ethify is your digital guardian, helping you navigate the web safely and ethically.</p>
            <Link to="https://drive.usercontent.google.com/u/0/uc?id=1SxQVMTbIbvPOJXvVABSZ8ixEs9dM9LQp&export=download" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center">
              <Download className="mr-2" />
              Get Ethify Now 
            </Link>
          </div>
        </section>

        <section id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <AlertTriangle className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Real-time Detection</h3>
                <p>Instantly identify dark patterns as you browse the web.</p>
              </div>
              <div className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <Shield className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Privacy Protection</h3>
                <p>Safeguard your personal information from deceptive practices.</p>
              </div>
              <div className="bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <Eye className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Educational Insights</h3>
                <p>Learn about different types of dark patterns and how to avoid them.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="dark-patterns" className="py-20 px-4 bg-gray-800 bg-opacity-50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">What are Dark Patterns?</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                Dark patterns are deceptive user interface designs that trick users into making unintended decisions. 
                These manipulative practices can lead to privacy violations, unwanted purchases, or sharing of personal information.
              </p>
              <p className="text-lg mb-6">
                Common types of dark patterns include:
              </p>
              <ul className="list-disc list-inside mb-6 space-y-2">
                <li>Disguised Ads: Advertisements that are disguised as other kinds of content or navigation</li>
                <li>Forced Continuity: When a free trial silently becomes a paid subscription</li>
                <li>Hidden Costs: When the true cost of a product is obscured until the last step of checkout</li>
                <li>Misdirection: Design that purposefully focuses attention on one thing to distract from another</li>
                <li>Confirmshaming: Guilting users into opting into something</li>
              </ul>
              <p className="text-lg">
                Ethify helps you identify and avoid these deceptive practices, ensuring a safer and more transparent online experience.
              </p>
            </div>
          </div>
        </section>

        <section id="download" className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Download Ethify</h2>
            <p className="text-xl mb-8">Start protecting yourself from dark patterns today.</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center">
                <Download className="mr-2" />
                Chrome Extension
              </a>
              <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 inline-flex items-center">
                <Download className="mr-2" />
                Firefox Add-on
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Ethify. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="#" className="text-gray-400 hover:text-red-500 transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-400 hover:text-red-500 transition-colors">Terms of Service</Link>
            <Link to="#" className="text-gray-400 hover:text-red-500 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
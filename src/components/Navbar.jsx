import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-8 py-3 rounded-full transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-warm-charcoal/80 backdrop-blur-xl border border-cream/10 shadow-lg'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <a
        href="#"
        className="font-heading font-bold text-lg text-cream no-underline whitespace-nowrap"
      >
        Progress Inc.
      </a>

      <div className="hidden md:flex items-center gap-6">
        <a href="#why" className="text-cream/70 hover:text-cream text-sm no-underline font-body transition-colors">
          Our Why
        </a>
        <a href="#transform" className="text-cream/70 hover:text-cream text-sm no-underline font-body transition-colors">
          Transform
        </a>
        <a href="#audience" className="text-cream/70 hover:text-cream text-sm no-underline font-body transition-colors">
          For Trainers
        </a>
      </div>

      <a
        href="#consult"
        className="btn-primary text-sm py-2 px-5 no-underline"
      >
        Book a Consultation
      </a>
    </nav>
  )
}

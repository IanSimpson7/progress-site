import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-animate', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.3,
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover img-treated"
          loading="eager"
          aria-hidden="true"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/80 to-deep/30" />
      </div>

      {/* Content — bottom left */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28 pt-40">
        <div className="max-w-3xl">
          <p className="hero-animate mono text-cream/50 mb-6">
            // potential is not a fantasy
          </p>

          <h1 className="hero-animate heading-xl text-cream text-5xl md:text-7xl lg:text-8xl mb-2">
            Your potential
          </h1>

          <p className="hero-animate drama text-terra text-6xl md:text-8xl lg:text-[10rem] leading-none mb-8">
            is inevitable.
          </p>

          <p className="hero-animate text-cream/70 text-lg md:text-xl max-w-xl mb-10 font-body">
            We exist to prove that what you're capable of doesn't have to stay
            unrealized. Through transformation that starts with the body and
            rewires the mind.
          </p>

          <a href="#consult" className="hero-animate btn-primary text-lg no-underline">
            Begin Your Transformation
          </a>
        </div>
      </div>
    </section>
  )
}

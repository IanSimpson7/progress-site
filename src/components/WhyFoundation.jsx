import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WhyFoundation() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sectionRef.current.querySelectorAll('.reveal-word')
      gsap.from(words, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.04,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      })

      gsap.to('.why-texture', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const splitWords = (text) =>
    text.split(' ').map((word, i) => (
      <span key={i} className="reveal-word inline-block mr-[0.3em]">
        {word}
      </span>
    ))

  return (
    <section
      ref={sectionRef}
      id="why"
      className="section-dark relative py-24 md:py-40 overflow-hidden"
      aria-label="Our Why"
    >
      <div className="why-texture absolute inset-0 opacity-[0.06]">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=60"
          alt=""
          className="w-full h-[120%] object-cover img-treated"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-cream/40 text-xl md:text-2xl font-body mb-4">
            {splitWords('Most programs focus on changing your body.')}
          </p>

          <p className="text-4xl md:text-6xl lg:text-7xl leading-tight">
            {splitWords('We focus on changing your')}
            <span className="reveal-word inline-block mr-[0.3em] drama text-terra">
              belief.
            </span>
          </p>
        </div>

        <div className="max-w-3xl">
          <p className="reveal-word text-cream/60 text-lg md:text-xl leading-relaxed mb-6">
            Progress Incorporated exists to be the external catalyst that creates
            the first crack in a person's belief that their circumstances are fixed.
          </p>
          <p className="reveal-word text-cream/60 text-lg md:text-xl leading-relaxed mb-6">
            Through the accumulation of small, self-generated victories — with
            physical transformation as the primary vehicle — your locus of control
            migrates from external to internal.
          </p>
          <p className="reveal-word text-cream/50 text-base md:text-lg leading-relaxed">
            The unit of that change is one self-limiting belief erased. Evidenced
            by a measurable shift in how you assign cause and control in your own
            language.
          </p>
        </div>
      </div>
    </section>
  )
}

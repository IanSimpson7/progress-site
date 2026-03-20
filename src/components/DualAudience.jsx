import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DualAudience() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.audience-left', {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          once: true,
        },
      })
      gsap.from('.audience-right', {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          once: true,
        },
      })
      gsap.from('.audience-convergence', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.audience-convergence',
          start: 'top 85%',
          once: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="audience"
      className="section-deep relative py-24 md:py-40 px-6 md:px-12 overflow-hidden"
      aria-label="Who we serve"
    >
      <div className="max-w-7xl mx-auto">
        <p className="mono text-terra/60 mb-12 text-center">// who this is for</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-cream/10" aria-hidden="true" />

          <div className="audience-left md:pr-16 pb-12 md:pb-0">
            <h3 className="heading-lg text-cream text-2xl md:text-3xl mb-3">
              For Those Ready to Transform
            </h3>
            <p className="drama text-amber text-xl mb-8">
              You already know something needs to change.
            </p>
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-3">
                <span className="text-terra mt-1 text-lg">→</span>
                <p className="text-cream/70">
                  A training system built around proof — every workout, every meal,
                  every logged metric becomes evidence that you are in control.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-terra mt-1 text-lg">→</span>
                <p className="text-cream/70">
                  Accountability that doesn't let you hide. We track the language
                  you use about yourself and show you when it shifts.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-terra mt-1 text-lg">→</span>
                <p className="text-cream/70">
                  A philosophy framework that makes failure due to ambiguity
                  impossible. You will always know exactly what to do next.
                </p>
              </li>
            </ul>
            <a href="#consult" className="btn-primary no-underline">
              Start Your Transformation
            </a>
          </div>

          <div className="audience-right md:pl-16 pt-12 md:pt-0 border-t md:border-t-0 border-cream/10">
            <h3 className="heading-lg text-cream text-2xl md:text-3xl mb-3">
              For Trainers Ready to Scale
            </h3>
            <p className="drama text-amber text-xl mb-8">
              Your clients deserve more than sets and reps.
            </p>
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-3">
                <span className="text-amber mt-1 text-lg">→</span>
                <p className="text-cream/70">
                  An AI-powered lead generation system proven on a real training
                  business — the same system we use to acquire our own clients.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber mt-1 text-lg">→</span>
                <p className="text-cream/70">
                  A product framework that transforms your coaching from
                  transactional fitness plans into identity-level transformation
                  your clients can't quit.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber mt-1 text-lg">→</span>
                <p className="text-cream/70">
                  The same WHY-driven methodology — applied to your business.
                  We see potential in you. We'll help your clients see it in
                  themselves.
                </p>
              </li>
            </ul>
            <a
              href="#consult"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber text-deep font-heading font-semibold rounded-full no-underline transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(212,148,58,0.3)]"
            >
              Grow Your Business
            </a>
          </div>
        </div>

        <div className="audience-convergence text-center mt-20 md:mt-28 max-w-2xl mx-auto">
          <div className="w-px h-16 bg-cream/20 mx-auto mb-8" aria-hidden="true" />
          <p className="drama text-cream text-2xl md:text-3xl lg:text-4xl leading-snug">
            Same WHY. Same mission.{' '}
            <span className="text-terra">Your potential doesn't have to go unrealized.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

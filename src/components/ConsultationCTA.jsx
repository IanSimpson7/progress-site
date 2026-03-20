import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ConsultationCTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-animate', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <section
        ref={sectionRef}
        id="consult"
        className="section-terra py-24 md:py-40 px-6 md:px-12 text-center"
        aria-label="Book a consultation"
      >
        <div className="max-w-3xl mx-auto">
          <p className="cta-animate mono text-cream/40 mb-6">
            // the first step
          </p>
          <h2 className="cta-animate drama text-cream text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
            The first step is the conversation.
          </h2>
          <p className="cta-animate text-cream/70 text-lg md:text-xl mb-12 max-w-xl mx-auto">
            Whether you're ready to transform yourself or ready to scale your
            training business — it starts with a free consultation where we
            understand your WHY.
          </p>
          <a
            href="mailto:ian@progressincorporated.com?subject=Consultation%20Request"
            className="cta-animate btn-secondary text-lg no-underline"
          >
            Book Your Free Consultation
          </a>
        </div>
      </section>

      <footer className="bg-deep text-cream rounded-t-[3rem] py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <p className="font-heading font-bold text-2xl mb-3">
                Progress Incorporated
              </p>
              <p className="text-cream/40 max-w-sm">
                Proving that potential doesn't have to go unrealized — so that the
                people we reach never have to live with the weight of what could
                have been.
              </p>
            </div>

            <div className="md:col-span-3">
              <p className="mono text-cream/30 mb-4">Navigation</p>
              <nav aria-label="Footer navigation" className="flex flex-col gap-3">
                <a href="#why" className="text-cream/60 hover:text-cream no-underline transition-colors">
                  Our Why
                </a>
                <a href="#transform" className="text-cream/60 hover:text-cream no-underline transition-colors">
                  Transform
                </a>
                <a href="#audience" className="text-cream/60 hover:text-cream no-underline transition-colors">
                  For Trainers
                </a>
                <a href="#consult" className="text-cream/60 hover:text-cream no-underline transition-colors">
                  Book a Consultation
                </a>
              </nav>
            </div>

            <div className="md:col-span-4">
              <p className="mono text-cream/30 mb-4">Legal</p>
              <div className="flex flex-col gap-3">
                <span className="text-cream/40">Privacy Policy</span>
                <span className="text-cream/40">Terms of Service</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-cream/10 gap-4">
            <p className="text-cream/30 text-sm">
              © {new Date().getFullYear()} Progress Incorporated. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              <span className="font-mono text-xs text-cream/30">
                System Operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

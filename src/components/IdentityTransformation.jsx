import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function BeliefShiftCard() {
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('external')
  const external = "I can't control my circumstances."
  const internal = "I control my actions."
  const intervalRef = useRef(null)

  useEffect(() => {
    let i = 0
    const current = phase === 'external' ? external : internal

    intervalRef.current = setInterval(() => {
      if (i <= current.length) {
        setText(current.slice(0, i))
        i++
      } else {
        clearInterval(intervalRef.current)
        setTimeout(() => {
          setText('')
          setPhase((p) => (p === 'external' ? 'internal' : 'external'))
        }, 2000)
      }
    }, 50)

    return () => clearInterval(intervalRef.current)
  }, [phase])

  return (
    <div className="card p-8 md:p-10 flex flex-col h-full">
      <p className="mono text-terra mb-2">01</p>
      <h3 className="heading-lg text-cream text-xl md:text-2xl mb-4">
        The Belief Shift
      </h3>
      <div className="flex-1 flex items-center">
        <p className="font-mono text-lg md:text-xl text-cream/80 min-h-[3rem]">
          {text}
          <span className="cursor-blink text-terra ml-0.5">|</span>
        </p>
      </div>
      <p className="text-cream/30 text-sm mt-4">
        {phase === 'external' ? 'External locus' : 'Internal locus'}
      </p>
    </div>
  )
}

function EvidenceLoopCard() {
  const victories = [
    'Meal prepped — Sunday, 6:00 AM',
    'Workout completed — 45 min strength',
    'Weight logged — 183.2 lbs',
    'Calories tracked — 2,140 kcal',
    'Sleep logged — 7.5 hours',
  ]
  const [stack, setStack] = useState([0, 1, 2])

  useEffect(() => {
    const timer = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        const last = next.pop()
        next.unshift((last + 1) % victories.length)
        return next
      })
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="card p-8 md:p-10 flex flex-col h-full">
      <p className="mono text-terra mb-2">02</p>
      <h3 className="heading-lg text-cream text-xl md:text-2xl mb-6">
        The Evidence Loop
      </h3>
      <div className="relative flex-1 min-h-[180px]">
        {stack.map((idx, pos) => (
          <div
            key={`${idx}-${pos}`}
            className="absolute inset-x-0 rounded-2xl bg-deep/60 border border-cream/5 px-5 py-4 transition-all duration-700"
            style={{
              top: `${pos * 28}px`,
              zIndex: 3 - pos,
              opacity: 1 - pos * 0.25,
              transform: `scale(${1 - pos * 0.04})`,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <p className="font-mono text-sm text-cream/70">
              <span className="text-amber mr-2">✓</span>
              {victories[idx]}
            </p>
          </div>
        ))}
      </div>
      <p className="text-cream/30 text-sm mt-4">
        Small victories accumulate into undeniable evidence
      </p>
    </div>
  )
}

function IdentityUpgradeCard() {
  const pathRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(pathRef.current, {
        strokeDashoffset: 800,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: pathRef.current,
          start: 'top 80%',
          once: true,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="card p-8 md:p-10 flex flex-col h-full">
      <p className="mono text-terra mb-2">03</p>
      <h3 className="heading-lg text-cream text-xl md:text-2xl mb-6">
        The Identity Upgrade
      </h3>
      <div className="flex-1 flex items-center">
        <svg
          viewBox="0 0 400 120"
          className="w-full h-auto"
          aria-label="Path from jagged uncertainty to smooth confidence"
          role="img"
        >
          <path
            ref={pathRef}
            d="M 10,80 L 30,40 L 50,90 L 70,30 L 90,70 L 110,50 L 140,60 Q 180,55 220,50 Q 260,45 300,35 Q 340,28 380,25"
            fill="none"
            stroke="#C4572A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="800"
            strokeDashoffset="0"
          />
          <text x="10" y="110" fill="#F5F0E8" opacity="0.3" fontSize="10" fontFamily="IBM Plex Mono">
            who you think you are
          </text>
          <text x="280" y="18" fill="#F5F0E8" opacity="0.3" fontSize="10" fontFamily="IBM Plex Mono" textAnchor="end">
            who you're becoming
          </text>
        </svg>
      </div>
      <p className="text-cream/30 text-sm mt-4">
        The path from doubt to identity is never linear — but the direction is clear
      </p>
    </div>
  )
}

export default function IdentityTransformation() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.transform-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          once: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="transform"
      className="py-24 md:py-40 px-6 md:px-12"
      aria-label="Identity Transformation"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="mono text-terra/60 mb-4">// transformation</p>
          <h2 className="heading-xl text-deep text-4xl md:text-5xl lg:text-6xl mb-4">
            Not just your body.
          </h2>
          <p className="drama text-terra text-3xl md:text-4xl">
            Your entire identity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="transform-card md:col-span-5 md:row-span-2">
            <BeliefShiftCard />
          </div>
          <div className="transform-card md:col-span-7">
            <EvidenceLoopCard />
          </div>
          <div className="transform-card md:col-span-7">
            <IdentityUpgradeCard />
          </div>
        </div>
      </div>
    </section>
  )
}

import NoiseOverlay from './components/NoiseOverlay'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyFoundation from './components/WhyFoundation'
import IdentityTransformation from './components/IdentityTransformation'
import DualAudience from './components/DualAudience'
import ConsultationCTA from './components/ConsultationCTA'

export default function App() {
  return (
    <>
      <NoiseOverlay />
      <a
        href="#why"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-deep focus:text-cream focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <WhyFoundation />
        <IdentityTransformation />
        <DualAudience />
        <ConsultationCTA />
      </main>
    </>
  )
}

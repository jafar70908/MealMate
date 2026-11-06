import { SkipLink } from './components/layout/SkipLink';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BridgeLine } from './components/illustrations/BridgeLine';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { HowItWorks } from './components/sections/HowItWorks';
import { Features } from './components/sections/Features';
import { Impact } from './components/sections/Impact';
import { Stories } from './components/sections/Stories';
import { CallToAction } from './components/sections/CallToAction';
import { DonateModal } from './components/ui/DonateModal';
import { ToastProvider } from './context/ToastContext';
import { DonateProvider } from './context/DonateContext';

export function AppContent() {
  return (
    <div className="relative min-h-screen bg-cream-50 text-ink-900 selection:bg-saffron-500 selection:text-forest-900">
      <SkipLink />
      <Navbar />

      {/* Signature Scroll-linked SVG Bridge Line */}
      <BridgeLine />

      {/* Main semantic landmark */}
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <Impact />
        <Stories />
        <CallToAction />
      </main>

      <Footer />
      <DonateModal />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <DonateProvider>
        <AppContent />
      </DonateProvider>
    </ToastProvider>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Gift, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { HERO_CONTENT } from '../../data/content';
import { RESCUE_TICKER_ITEMS } from '../../data/rescues';
import { Button } from '../ui/Button';
import { HeroScene } from '../illustrations/HeroScene';
import { useDonate } from '../../context/DonateContext';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Hero: React.FC = () => {
  const { openModal } = useDonate();
  const reducedMotion = useReducedMotion();
  const [tickerIndex, setTickerIndex] = useState(0);
  const [isTickerPaused, setIsTickerPaused] = useState(false);

  // Rotate rescue ticker pill every 3.5s
  useEffect(() => {
    if (isTickerPaused || reducedMotion) return;

    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % RESCUE_TICKER_ITEMS.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isTickerPaused, reducedMotion]);

  const currentRescue = RESCUE_TICKER_ITEMS[tickerIndex];

  // Headline words for staggered reveal
  const headlineWords = HERO_CONTENT.headline.split(' ');

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden min-h-[92vh] flex items-center bg-cream-50 bg-grain"
    >
      {/* Apple & Oppo-style Ambient Atmospheric Light Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-leaf-400/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-32 w-[520px] h-[520px] bg-saffron-400/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Two-Column Layout (7/5 on desktop, stacked on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols): Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
            {/* Dynamic Island / Oppo Capsule Live Rescue Ticker */}
            <div
              onMouseEnter={() => setIsTickerPaused(true)}
              onMouseLeave={() => setIsTickerPaused(false)}
              onFocus={() => setIsTickerPaused(true)}
              onBlur={() => setIsTickerPaused(false)}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full apple-glass mb-6 text-xs text-forest-900 shadow-sm hover:shadow-md transition-all cursor-default"
              tabIndex={0}
              role="region"
              aria-label="Recent food rescue ticker"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-leaf-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-leaf-500" />
              </span>
              <span className="font-bold uppercase tracking-wider text-[10px] text-saffron-600 bg-saffron-500/15 px-2 py-0.5 rounded-full">
                Live Rescue
              </span>

              <div className="h-5 overflow-hidden relative min-w-[210px] sm:min-w-[260px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRescue.id}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 font-medium truncate text-forest-900"
                  >
                    <strong>{currentRescue.place}</strong> rescued {currentRescue.item}
                  </motion.span>
                </AnimatePresence>
              </div>

              <span className="text-[10px] text-ink-600 hidden sm:inline font-mono">
                {currentRescue.timeAgo}
              </span>
            </div>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/5 text-forest-800 text-xs font-semibold mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
              <span>{HERO_CONTENT.eyebrow}</span>
            </div>

            {/* H1 Display XL with Staggered Word Mask Reveal */}
            <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-forest-900 leading-[1.04] mb-6">
              {headlineWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-3">
                  <motion.span
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: reducedMotion ? 0 : i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block ${
                      word.toLowerCase().includes('behind')
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 via-saffron-400 to-amber-600 italic underline decoration-saffron-400/40'
                        : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Body Large */}
            <p className="text-base sm:text-xl text-ink-700 leading-relaxed max-w-xl mb-8 font-sans font-normal">
              {HERO_CONTENT.subheadline}
            </p>

            {/* Dual CTAs (Apple-style sleek pills) */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <Button
                variant="primary"
                size="lg"
                magnetic
                onClick={() => openModal()}
                className="group btn-shine !rounded-full !px-8 !py-4 shadow-lg shadow-saffron-500/25 text-base font-bold hover:shadow-glow-apple transition-all"
              >
                <span>{HERO_CONTENT.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToHowItWorks}
                className="!rounded-full !px-7 !py-4 text-base font-semibold bg-white/70 backdrop-blur-md border border-forest-900/15 hover:bg-white transition-all shadow-sm"
              >
                <span>{HERO_CONTENT.ctaSecondary}</span>
              </Button>
            </div>

            {/* Trust Strip with 3 refined badges */}
            <div
              className="w-full pt-6 border-t border-forest-900/10 flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-ink-700"
              role="list"
              aria-label="Trust highlights"
            >
              <div className="flex items-center gap-2" role="listitem">
                <span className="w-5 h-5 rounded-full bg-leaf-500/15 text-leaf-600 flex items-center justify-center">
                  <Gift className="w-3 h-3" />
                </span>
                <span className="font-semibold text-forest-900">Free for donors</span>
              </div>
              <span className="text-forest-900/20 hidden sm:inline" aria-hidden="true">•</span>
              <div className="flex items-center gap-2" role="listitem">
                <span className="w-5 h-5 rounded-full bg-leaf-500/15 text-leaf-600 flex items-center justify-center">
                  <ShieldCheck className="w-3 h-3" />
                </span>
                <span className="font-semibold text-forest-900">Verified NGO partners</span>
              </div>
              <span className="text-forest-900/30 hidden sm:inline" aria-hidden="true">•</span>
              <div className="flex items-center gap-2" role="listitem">
                <Clock className="w-4 h-4 text-saffron-600" />
                <span>Pickup within the hour <span className="text-[10px] text-ink-600 font-normal">(sample)</span></span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Custom SVG Illustration Scene */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <HeroScene />
          </div>
        </div>
      </div>
    </section>
  );
};

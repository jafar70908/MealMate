import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Heart, MapPin } from 'lucide-react';
import { Section } from '../ui/Section';
import { Chip } from '../ui/Chip';
import { STORIES } from '../../data/stories';
import { useCarousel } from '../../hooks/useCarousel';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Stories: React.FC = () => {
  const { currentIndex, next, prev, goTo, pause, resume, isPaused } = useCarousel({
    totalItems: STORIES.length,
    autoAdvanceInterval: 7000,
  });

  const reducedMotion = useReducedMotion();
  const currentStory = STORIES[currentIndex];

  return (
    <Section id="stories" variant="cream">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-widest text-saffron-600">
              Community Voices
            </span>
            <Chip variant="outline" size="sm">
              Illustrative stories
            </Chip>
          </div>
          <h2
            id="stories-heading"
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 tracking-tight leading-tight mb-2"
          >
            Real stories from the bridge.
          </h2>
          <p className="text-base text-ink-700 leading-relaxed font-sans">
            Hear from the chefs who make surplus available, the coordinators who feed hundreds every evening, and the volunteers on the move.
          </p>
        </div>

        {/* Carousel Controls (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous story"
            className="w-12 h-12 rounded-full border border-forest-900/20 bg-white text-forest-900 hover:bg-forest-900 hover:text-cream-50 flex items-center justify-center transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next story"
            className="w-12 h-12 rounded-full border border-forest-900/20 bg-white text-forest-900 hover:bg-forest-900 hover:text-cream-50 flex items-center justify-center transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
        className="relative max-w-4xl mx-auto"
        role="region"
        aria-roledescription="carousel"
        aria-label="Community impact stories"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStory.id}
            initial={{ opacity: 0, x: reducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: reducedMotion ? 0 : -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="apple-glass rounded-4xl p-7 sm:p-12 border border-white/80 shadow-modal text-left relative overflow-hidden"
          >
            {/* Background Decorative Quote Mark */}
            <div className="absolute top-6 right-8 text-sage-200/50 pointer-events-none select-none">
              <Quote className="w-24 h-24 stroke-[1.2]" />
            </div>

            <div className="relative z-10">
              {/* Author & Badge Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {/* Illustrated Initial Avatar */}
                  <div className="w-14 h-14 rounded-2xl bg-forest-900 text-saffron-400 font-serif-display font-bold text-xl flex items-center justify-center border-2 border-saffron-400 shadow-md flex-shrink-0">
                    {currentStory.initials}
                  </div>

                  <div>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-forest-900 tracking-tight">
                      {currentStory.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-600 font-medium">
                      {currentStory.role} • <span className="text-forest-700 font-semibold">{currentStory.org}</span>
                    </p>
                    <p className="text-xs text-ink-600/70 flex items-center gap-1 mt-0.5 font-medium">
                      <MapPin className="w-3 h-3 text-saffron-600" />
                      <span>{currentStory.location}</span>
                    </p>
                  </div>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-leaf-600 bg-leaf-500/15 border border-leaf-500/30 px-3.5 py-1.5 rounded-full">
                  {currentStory.badge}
                </span>
              </div>

              {/* Quote Body */}
              <blockquote className="font-serif-display text-lg sm:text-2xl lg:text-3xl text-forest-900 leading-relaxed italic mb-8 font-normal">
                &ldquo;{currentStory.quote}&rdquo;
              </blockquote>

              {/* Verified Outcome Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-leaf-500/30 flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-2.5 text-forest-900 text-xs sm:text-sm font-semibold">
                  <span className="w-6 h-6 rounded-full bg-leaf-500/15 text-leaf-600 flex items-center justify-center">
                    <Heart className="w-3.5 h-3.5 fill-leaf-500" />
                  </span>
                  <span>Verified Outcome:</span>
                </div>
                <span className="font-serif-display text-base sm:text-xl font-bold text-saffron-600">
                  {currentStory.outcome}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Navigation Dots & Mobile Arrows */}
        <div className="flex items-center justify-between mt-6 px-2">
          {/* Mobile Arrows */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous story"
              className="w-10 h-10 rounded-full border border-forest-900/20 bg-white text-forest-900 flex items-center justify-center shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next story"
              className="w-10 h-10 rounded-full border border-forest-900/20 bg-white text-forest-900 flex items-center justify-center shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2 mx-auto sm:mx-0" role="tablist">
            {STORIES.map((story, idx) => (
              <button
                key={story.id}
                type="button"
                role="tab"
                aria-selected={currentIndex === idx}
                aria-label={`Go to story ${idx + 1} of ${STORIES.length}: ${story.name}`}
                onClick={() => goTo(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-saffron-500'
                    : 'w-2.5 bg-forest-900/20 hover:bg-forest-900/40'
                }`}
              />
            ))}
          </div>

          {/* Pause / Resume status indicator for accessibility */}
          <span className="text-[11px] text-ink-600 hidden sm:inline">
            Slide {currentIndex + 1} of {STORIES.length} {isPaused && '(Paused)'}
          </span>
        </div>
      </div>
    </Section>
  );
};

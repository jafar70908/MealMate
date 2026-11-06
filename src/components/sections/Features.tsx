import React from 'react';
import { Utensils, Building2, Truck, Users, ShieldCheck, Receipt, ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Chip } from '../ui/Chip';
import { FEATURES_CONTENT } from '../../data/content';
import { useDonate } from '../../context/DonateContext';

export const Features: React.FC = () => {
  const { openModal } = useDonate();

  return (
    <Section id="features" variant="cream">
      {/* Eyebrow & Heading */}
      <div className="max-w-3xl mb-12 text-left">
        <Chip variant="forest" size="sm" className="mb-3">
          {FEATURES_CONTENT.eyebrow}
        </Chip>
        <h2
          id="features-heading"
          className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 tracking-tight leading-tight mb-4"
        >
          {FEATURES_CONTENT.heading}
        </h2>
        <p className="text-base sm:text-lg text-ink-700 leading-relaxed font-sans">
          {FEATURES_CONTENT.description}
        </p>
      </div>

      {/* Bento Grid (Apple Flagship Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        {/* Large Forest Card (7 cols on desktop): Easy Food Donation with Interactive Mini UI Preview */}
        <div className="lg:col-span-7 rounded-4xl bg-gradient-to-br from-forest-900 via-forest-800 to-[#07251D] text-cream-50 p-7 sm:p-10 border border-white/10 shadow-glass-dark flex flex-col justify-between relative overflow-hidden group">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-saffron-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-leaf-500/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 mb-6">
            <div className="flex items-center justify-between mb-5">
              <span className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-saffron-400 flex items-center justify-center shadow-inner">
                <Utensils className="w-6 h-6" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-saffron-500/20 text-saffron-300 border border-saffron-400/30 px-3 py-1 rounded-full">
                Instant Listing
              </span>
            </div>

            <h3 className="font-serif-display text-2xl sm:text-4xl font-bold text-cream-50 mb-3 tracking-tight">
              Easy Food Donation
            </h3>

            <p className="text-sm sm:text-base text-cream-50/80 leading-relaxed max-w-lg mb-6 font-normal">
              List fresh surplus in three simple steps. Intuitive quantity helpers and automated pickup suggestions keep preparation under a minute.
            </p>

            {/* Apple-style Frosted Glass Mini UI Preview Card */}
            <div className="bg-white/[0.07] backdrop-blur-xl rounded-2xl p-5 border border-white/10 max-w-md shadow-2xl text-left">
              <div className="flex items-center justify-between mb-3 text-xs text-cream-50/70 border-b border-white/10 pb-2">
                <span className="font-semibold text-saffron-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-leaf-400 animate-pulse" />
                  Surplus Snapshot
                </span>
                <span className="font-mono text-[11px]">Bengaluru Hub</span>
              </div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-saffron-500/20 border border-saffron-500/30 flex items-center justify-center text-saffron-400 font-bold font-serif-display text-lg">
                  25kg
                </div>
                <div>
                  <h4 className="text-sm font-bold text-cream-50">Warm Buffet Surplus</h4>
                  <p className="text-xs text-cream-50/70">Feeds ~60 people tonight</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => openModal({ quantity: 25, donorType: 'Restaurant' })}
                className="w-full py-2.5 px-4 rounded-full bg-saffron-500 text-forest-900 font-bold text-xs flex items-center justify-center gap-2 hover:bg-saffron-400 transition-all btn-shine shadow-md"
              >
                <span>Launch Interactive Form</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-cream-50/70 relative z-10">
            <span>Verified cold-chain adherence</span>
            <span className="text-leaf-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf-400" />
              Ready to Dispatch
            </span>
          </div>
        </div>

        {/* 3 Standard Cards (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Card 1: NGO Partnerships */}
          <div className="apple-glass rounded-3xl p-6 sm:p-7 border border-white/80 shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-forest-900 text-saffron-400 flex items-center justify-center shadow-inner">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-forest-900">NGO Partnerships</h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed mb-3">
                All recipient kitchens undergo strict food hygiene accreditation, cold-chain checks, and continuous capacity audits.
              </p>
            </div>
            <span className="text-[11px] font-bold text-forest-800 uppercase tracking-wider bg-forest-900/5 px-2.5 py-1 rounded-full inline-block w-fit">
              120+ Vetted Kitchens
            </span>
          </div>

          {/* Card 2: Pickup Coordination */}
          <div className="apple-glass rounded-3xl p-6 sm:p-7 border border-white/80 shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-forest-900 text-leaf-400 flex items-center justify-center shadow-inner">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-forest-900">Pickup Coordination</h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed mb-3">
                Real-time volunteer and courier dispatch routing with live status tracking and arrival notifications.
              </p>
            </div>
            <span className="text-[11px] font-bold text-forest-800 uppercase tracking-wider bg-forest-900/5 px-2.5 py-1 rounded-full inline-block w-fit">
              Avg. 38 Min Arrival
            </span>
          </div>

          {/* Card 3: Community Participation */}
          <div className="apple-glass rounded-3xl p-6 sm:p-7 border border-white/80 shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-forest-900 text-saffron-400 flex items-center justify-center shadow-inner">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg text-forest-900">Community Participation</h3>
              </div>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed mb-3">
                Hyperlocal neighborhood volunteer network that turns idle weekend hours into vital meal delivery lifelines.
              </p>
            </div>
            <span className="text-[11px] font-bold text-forest-800 uppercase tracking-wider bg-forest-900/5 px-2.5 py-1 rounded-full inline-block w-fit">
              1,800+ Active Helpers
            </span>
          </div>
        </div>
      </div>

      {/* Supporting Badges Row */}
      <div className="p-6 sm:p-8 rounded-3xl apple-glass border border-white/80 flex flex-col sm:flex-row items-center justify-around gap-6 text-left shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-leaf-500/15 text-leaf-600 flex items-center justify-center flex-shrink-0 shadow-inner">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-forest-900">Food-Safety Checklist</h4>
            <p className="text-xs text-ink-600">Strict temperature and holding time safety protocols enforced on every pickup.</p>
          </div>
        </div>

        <div className="w-full sm:w-px h-px sm:h-12 bg-forest-900/10" />

        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-saffron-500/15 text-saffron-600 flex items-center justify-center flex-shrink-0 shadow-inner">
            <Receipt className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-forest-900">Impact Receipts</h4>
            <p className="text-xs text-ink-600">Verifiable certificates with photographic evidence and carbon savings.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Heart, ExternalLink, Globe } from 'lucide-react';
import { FOOTER_CONTENT, NAV_LINKS } from '../../data/content';
import { Skyline } from '../illustrations/Skyline';
import { useDonate } from '../../context/DonateContext';

export const Footer: React.FC = () => {
  const { openModal } = useDonate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainEl = document.getElementById('main');
    if (mainEl) {
      mainEl.focus({ preventScroll: true });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-forest-900 via-[#08281F] to-[#041611] text-cream-50 pt-20 pb-12 relative overflow-hidden dark-surface border-t border-white/10">
      {/* City Skyline Silhouette */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Skyline />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-forest-800/80">
          {/* Column 1: Brand & Mission */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full border-2 border-saffron-500 bg-cream-50 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-saffron-500" />
              </div>
              <span className="font-serif-display text-2xl font-bold tracking-tight text-cream-50">
                MealMate
              </span>
            </div>

            <p className="text-sm text-cream-50/80 leading-relaxed font-sans">
              {FOOTER_CONTENT.mission}
            </p>

            <div className="flex items-center gap-2 text-xs text-saffron-400 font-semibold mt-2">
              <Heart className="w-4 h-4 text-tomato-500 fill-tomato-500" />
              <span>Imagine. Design. Impact.</span>
            </div>
          </div>

          {/* Column 2: Navigation / Explore */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-saffron-400 uppercase tracking-widest">
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-cream-50/80 hover:text-saffron-400 transition-colors inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 rounded-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-saffron-400 uppercase tracking-widest">
              Get Involved
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="text-cream-50/80 hover:text-saffron-400 transition-colors text-left"
                >
                  List Food Surplus
                </button>
              </li>
              <li>
                <a
                  href="#cta"
                  className="text-cream-50/80 hover:text-saffron-400 transition-colors"
                >
                  Volunteer Driver Sign-up
                </a>
              </li>
              <li>
                <a
                  href="#cta"
                  className="text-cream-50/80 hover:text-saffron-400 transition-colors"
                >
                  Register Community Kitchen / NGO
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-cream-50/80 hover:text-saffron-400 transition-colors"
                >
                  Meal Surplus Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verification */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold text-saffron-400 uppercase tracking-widest">
              Reach Out
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-cream-50/80">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                <a
                  href={`mailto:${FOOTER_CONTENT.contactEmail}`}
                  className="hover:text-saffron-400 transition-colors"
                >
                  {FOOTER_CONTENT.contactEmail}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-saffron-400 flex-shrink-0" />
                <span>{FOOTER_CONTENT.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-saffron-400 flex-shrink-0 mt-0.5" />
                <span>{FOOTER_CONTENT.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sources & Citations Row */}
        <div className="py-6 border-b border-forest-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-cream-50/60">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="font-semibold text-cream-50/80 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-saffron-400" />
              Verified Sourced Data:
            </span>
            {FOOTER_CONTENT.sources.map((src, i) => (
              <a
                key={i}
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-saffron-400 transition-colors flex items-center gap-1 underline underline-offset-2"
              >
                <span>{src.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="flex items-center gap-2 px-3 py-1.5 rounded-pill bg-forest-800 hover:bg-forest-700 text-cream-50 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-50/60">
          <div>
            <span className="text-saffron-400 font-semibold">{FOOTER_CONTENT.eventCredit}</span>
            <span className="mx-2">•</span>
            <span>{FOOTER_CONTENT.copyright}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Render Static Site CDN</span>
            <span>•</span>
            <span>WCAG 2.2 AA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

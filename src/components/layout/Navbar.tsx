import React, { useState, useEffect } from 'react';
import { Menu, HeartHandshake } from 'lucide-react';
import { NAV_LINKS } from '../../data/content';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import { ScrollProgress } from './ScrollProgress';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useDonate } from '../../context/DonateContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useDonate();

  const sectionIds = NAV_LINKS.map((link) => link.id);
  const activeId = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[94%] max-w-6xl z-40 transition-all duration-300"
      >
        <div
          className={`apple-glass rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 ${
            isScrolled
              ? 'shadow-[0_16px_40px_-10px_rgba(11,59,46,0.14)] bg-white/85 backdrop-blur-2xl border-white/90'
              : 'shadow-[0_8px_30px_-6px_rgba(11,59,46,0.06)] bg-white/75 backdrop-blur-xl border-white/70'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo Lockup */}
            <a
              href="#"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 rounded-full p-1 transition-transform hover:scale-[1.02]"
              aria-label="MealMate Home"
            >
              {/* Logo: Saffron plate ring crowned with golden bridge arch */}
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
                <svg
                  viewBox="0 0 36 36"
                  className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  fill="none"
                >
                  {/* Plate Ring */}
                  <circle cx="18" cy="18" r="15" stroke="#F5A524" strokeWidth="3" fill="#FFF7E8" />
                  {/* Inner ring */}
                  <circle cx="18" cy="18" r="10" stroke="#F5A524" strokeWidth="1" strokeDasharray="2 2" fill="none" opacity="0.6" />
                  {/* Bridge Arch */}
                  <path d="M8 22 C 12 10, 24 10, 28 22" stroke="#0B3B2E" strokeWidth="3" strokeLinecap="round" />
                  {/* Base span */}
                  <line x1="6" y1="22" x2="30" y2="22" stroke="#0B3B2E" strokeWidth="2" strokeLinecap="round" />
                  {/* Core golden dot */}
                  <circle cx="18" cy="16" r="2.5" fill="#F5A524" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-serif-display text-lg sm:text-xl font-bold tracking-tight text-forest-900 leading-none">
                  MealMate
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-saffron-600 leading-tight">
                  Stop Food Waste
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-4 py-2 text-xs xl:text-sm font-semibold transition-all rounded-full ${
                      isActive
                        ? 'text-forest-900 bg-forest-900/5'
                        : 'text-ink-700 hover:text-forest-900 hover:bg-forest-900/[0.04]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-1.5 left-4 right-4 h-[2px] bg-saffron-500 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Donate Button + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                variant="primary"
                size="sm"
                magnetic
                onClick={() => openModal()}
                className="hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm font-bold shadow-sm btn-shine !rounded-full !px-5 !py-2.5 hover:shadow-glow-apple transition-all"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Donate Food</span>
              </Button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                aria-expanded={isMobileMenuOpen}
                className="lg:hidden p-2 text-forest-900 hover:bg-forest-900/10 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar directly under floating island */}
        <div className="mt-1 px-4 max-w-md mx-auto">
          <ScrollProgress />
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeId={activeId}
      />
    </>
  );
};

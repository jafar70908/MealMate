import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HeartHandshake } from 'lucide-react';
import { NAV_LINKS } from '../../data/content';
import { Button } from '../ui/Button';
import { useDonate } from '../../context/DonateContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeId: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, activeId }) => {
  const { openModal } = useDonate();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = (href: string) => {
    onClose();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDonateClick = () => {
    onClose();
    openModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-forest-900/60 backdrop-blur-sm z-50 lg:hidden"
            aria-hidden="true"
          />

          {/* Slide-in Drawer */}
          <motion.div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-cream-50 text-forest-900 z-50 p-6 flex flex-col justify-between shadow-2xl lg:hidden border-l border-forest-900/10"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-forest-900/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full border-2 border-saffron-500 bg-cream-50 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-saffron-500" />
                  </div>
                  <span className="font-serif-display text-xl font-bold tracking-tight text-forest-900">
                    MealMate
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 text-forest-900 hover:bg-forest-900/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile Navigation">
                {NAV_LINKS.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => handleLinkClick(link.href)}
                      className={`text-left text-lg font-medium px-4 py-3 rounded-card transition-all ${
                        isActive
                          ? 'bg-forest-900 text-cream-50 font-semibold'
                          : 'text-forest-900 hover:bg-forest-900/5'
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Pinned Bottom CTA */}
            <div className="pt-6 border-t border-forest-900/10 flex flex-col gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={handleDonateClick}
                className="w-full flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-5 h-5" />
                <span>Donate Food</span>
              </Button>
              <p className="text-xs text-center text-ink-600">
                Turns today&apos;s surplus into tonight&apos;s dinner.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

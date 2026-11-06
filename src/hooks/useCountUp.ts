import { useState, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface UseCountUpOptions {
  end: number;
  duration?: number; // milliseconds, default 1400ms (max 1600ms)
  start?: number;
  decimals?: number;
  trigger?: boolean;
}

export function useCountUp({
  end,
  duration = 1400,
  start = 0,
  decimals = 0,
  trigger = true,
}: UseCountUpOptions): number {
  const [count, setCount] = useState(trigger ? start : end);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!trigger) return;

    if (reducedMotion) {
      setCount(end);
      return;
    }

    let startTime: number | null = null;
    let frameId: number;

    const easeOutCubic = (x: number): number => {
      return 1 - Math.pow(1 - x, 3);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const current = start + (end - start) * easedProgress;

      setCount(decimals === 0 ? Math.round(current) : parseFloat(current.toFixed(decimals)));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [end, duration, start, decimals, trigger, reducedMotion]);

  return count;
}

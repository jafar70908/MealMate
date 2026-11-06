import { describe, it, expect } from 'vitest';
import { NAV_LINKS, HERO_CONTENT } from '../src/data/content';
import { PROBLEM_STATS } from '../src/data/stats';
import { STORIES } from '../src/data/stories';

describe('Smoke Verification of Content & Navigation', () => {
  it('has all required navigation links', () => {
    expect(NAV_LINKS.length).toBeGreaterThanOrEqual(5);
    expect(NAV_LINKS.map((l) => l.id)).toEqual(
      expect.arrayContaining(['problem', 'solution', 'how-it-works', 'features', 'impact', 'stories'])
    );
  });

  it('has valid problem statistics and citations', () => {
    expect(PROBLEM_STATS.length).toBe(3);
    PROBLEM_STATS.forEach((stat) => {
      expect(stat.value).toBeGreaterThan(0);
      expect(stat.source).toBeTruthy();
      expect(stat.sourceUrl).toBeTruthy();
    });
  });

  it('has all 3 community stories with outcomes', () => {
    expect(STORIES.length).toBe(3);
    STORIES.forEach((story) => {
      expect(story.quote).toBeTruthy();
      expect(story.outcome).toBeTruthy();
    });
  });

  it('hero headline matches brand positioning', () => {
    expect(HERO_CONTENT.headline).toBe('No meal left behind.');
  });
});

import { TextAnimator } from './text-animator.js';

const isTouchDevice = () => window.matchMedia('(hover: none) and (pointer: coarse)').matches;

const init = () => {
  document.querySelectorAll('.list__item').forEach(item => {
    const cols = Array.from(item.querySelectorAll('.hover-effect'));
    const animators = cols.map(col => new TextAnimator(col));

    const triggerAnimation = () => {
      animators.forEach(animator => animator.animate());
    };

    item.addEventListener('mouseenter', triggerAnimation);

    // Touch: trigger on tap
    item.addEventListener('touchstart', (e) => {
      triggerAnimation();
    }, { passive: true });
  });

  // Same for all links
  document.querySelectorAll('a.hover-effect').forEach(item => {
    const animator = new TextAnimator(item);

    const triggerAnimation = () => animator.animate();

    item.addEventListener('mouseenter', triggerAnimation);
    item.addEventListener('touchstart', triggerAnimation, { passive: true });
  });
};

init();
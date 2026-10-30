// Reveal each picture once as it enters the viewport. Images stay visible
// without JavaScript, IntersectionObserver, or Web Animations support.
(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
  const running = new Set();
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (preference.matches) continue;
      const animation = entry.target.animate([
        { opacity: 0, translate: '0 22px' },
        { opacity: 1, translate: '0 0' }
      ], { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)' });
      running.add(animation);
      const done = () => running.delete(animation);
      animation.addEventListener('finish', done, { once: true });
      animation.addEventListener('cancel', done, { once: true });
    }
  }, { threshold: .12 });
  document.querySelectorAll('.atelier-hero-art, .tile-art, .edition-gallery, .edition-banner > img, .mouse-visual > img, .mouse-feature > a').forEach(picture => observer.observe(picture));
  preference.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    for (const animation of running) animation.cancel();
    running.clear();
  });
})();

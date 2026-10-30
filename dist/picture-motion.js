// Give every product picture the same reveal, including SVG keyboard previews.
// Keep images visible if scripting, motion, or animation support is unavailable.
(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window) || !Element.prototype.animate) return;
  const running = new Set();
  const decoded = new Map();
  const ready = picture => Promise.allSettled(
    [...picture.querySelectorAll('img, image'), ...(picture.matches('img') ? [picture] : [])].map(image => {
      const source = image.currentSrc || image.getAttribute('src') || image.getAttribute('href');
      if (!source) return Promise.resolve();
      if (!decoded.has(source)) {
        const preload = new Image();
        preload.src = source;
        decoded.set(source, preload.decode());
      }
      return decoded.get(source);
    })
  );
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting || entry.intersectionRatio < .28) continue;
      observer.unobserve(entry.target);
      // Slow and lazy-loaded pictures should not miss their own reveal.
      ready(entry.target).then(() => {
        if (preference.matches || !entry.target.isConnected) return;
        const bounds = entry.target.getBoundingClientRect();
        if (bounds.bottom <= 0 || bounds.top >= innerHeight) {
          observer.observe(entry.target);
          return;
        }
        const animation = entry.target.animate([
          { opacity: 0, transform: 'translateY(22px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 650, delay: 80, fill: 'backwards', easing: 'cubic-bezier(.2,.7,.2,1)' });
        running.add(animation);
        const done = () => running.delete(animation);
        animation.addEventListener('finish', done, { once: true });
        animation.addEventListener('cancel', done, { once: true });
      });
    }
  }, { threshold: .28 });
  document.querySelectorAll('[data-picture-reveal], .atelier-hero-art, .tile-art, .edition-gallery, .edition-banner > img, .mouse-visual > img, .mouse-feature > a').forEach(picture => observer.observe(picture));
  preference.addEventListener('change', event => {
    if (!event.matches) return;
    observer.disconnect();
    for (const animation of running) animation.cancel();
    running.clear();
  });
})();

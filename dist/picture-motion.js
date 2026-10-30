// Pictures remain fully visible. Repeat a small directional slide on each visit.
(() => {
  if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const pictures = [...document.querySelectorAll('[data-picture-reveal], .atelier-hero-art, .tile-art, .edition-gallery, .edition-banner > img, .mouse-visual > img, .mouse-feature > a')];
  const states = new Map(pictures.map(picture => [picture, { inside: false, visit: 0, animation: null }]));
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
  let previousScroll = scrollY;
  let direction = 1;
  addEventListener('scroll', () => {
    if (scrollY !== previousScroll) direction = scrollY > previousScroll ? 1 : -1;
    previousScroll = scrollY;
  }, { passive: true });
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const picture = entry.target;
      const state = states.get(picture);
      if (!entry.isIntersecting) {
        state.inside = false;
        state.visit++;
        state.animation?.cancel();
        state.animation = null;
        continue;
      }
      if (state.inside || entry.intersectionRatio < .18) continue;
      state.inside = true;
      const visit = ++state.visit;
      const from = direction * 22;
      ready(picture).then(() => {
        if (preference.matches || !picture.isConnected || !state.inside || state.visit !== visit) return;
        // No opacity reset, hidden state or delayed blank frame before movement.
        state.animation?.cancel();
        state.animation = picture.animate([
          { transform: `translateY(${from}px)` },
          { transform: 'translateY(0)' }
        ], { duration: 1000, easing: 'cubic-bezier(.2,.7,.2,1)' });
      });
    }
  }, { threshold: [0, .18] });
  const watch = () => {
    observer.disconnect();
    for (const [picture, state] of states) {
      state.visit++;
      state.inside = false;
      state.animation?.cancel();
      state.animation = null;
      if (!preference.matches) observer.observe(picture);
    }
  };
  preference.addEventListener('change', watch);
  watch();
})();

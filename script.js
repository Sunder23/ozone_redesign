'use strict';

/* ── Floor Plan Tabs ─────────────────────────────────────────────────────── */
(function () {
  const sectionBtns = document.querySelectorAll('.fp-section-btn');
  const floorsEl    = document.getElementById('floorsA');
  const floorBtns   = document.querySelectorAll('.fp-floor');

  sectionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sectionBtns.forEach(b => b.classList.remove('fp-section-active'));
      btn.classList.add('fp-section-active');

      /* Show floor picker only for section A */
      if (floorsEl) {
        floorsEl.style.display = btn.dataset.section === 'A' ? 'flex' : 'none';
      }
    });
  });

  floorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      floorBtns.forEach(b => b.classList.remove('fp-floor-active'));
      btn.classList.add('fp-floor-active');
    });
  });
})();

/* ── Smooth anchor links ─────────────────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

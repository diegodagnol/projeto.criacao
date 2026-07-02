/* ===================================================================
   Criação Digital · Portfólio — animations.js
   Toda a lógica GSAP (carregar após main.js)
   =================================================================== */
(function () {
  'use strict';

  // AOS — animação de entrada dos cards (fade-up).
  // Os elementos têm data-aos="fade-up" (cards no render.js; disciplinas,
  // passos e equipe direto no HTML). Cards da mesma linha entram juntos.
  if (window.AOS) {
    AOS.init({ duration: 600, easing: 'ease-out-cubic', once: true, offset: 80 });
  }

  if (!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('gsap-ready');

  /* ----------------------------------------------------------------
     HERO HOME — timeline de entrada
     ---------------------------------------------------------------- */
  if (document.querySelector('.hero-home')) {
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from('.hero-eyebrow', { opacity: 0, y: 16, duration: 0.6 })
      .from('.hero-title',   { opacity: 0, y: 24, duration: 0.7 }, '-=0.3')
      .from('.hero-sub',     { opacity: 0, y: 16, duration: 0.6 }, '-=0.4')
      .from('.hero-ctas',    { opacity: 0, y: 12, duration: 0.5 }, '-=0.3');
  }

  /* ----------------------------------------------------------------
     STATS — contador animado
     ---------------------------------------------------------------- */
  document.querySelectorAll('.stat-num[data-count]').forEach((el) => {
    const target = parseInt(el.dataset.count, 10);
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1.5,
      ease: 'power1.out',
      snap: { val: 1 },
      scrollTrigger: { trigger: '.stats-bar', start: 'top 80%', once: true },
      onUpdate: () => { el.textContent = Math.round(obj.val); }
    });
  });

  /* Cards: agora animados via AOS (data-aos="fade-up"), inicializado acima. */

  /* ----------------------------------------------------------------
     HERO DA PÁGINA DO PROJETO
     ---------------------------------------------------------------- */
  if (document.querySelector('.project-hero')) {
    gsap.from('.project-hero img', { scale: 1.06, duration: 1.3, ease: 'power2.out' });
    gsap.from('.project-hero-content', { opacity: 0, y: 24, duration: 0.8, delay: 0.4 });
    gsap.from('.project-sidebar', { opacity: 0, x: 20, duration: 0.7, delay: 0.6 });
  }
})();

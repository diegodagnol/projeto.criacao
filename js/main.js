/* ===================================================================
   Criação Digital · Portfólio — main.js
   Filtros, busca, URL params, ordenação, toast, scroll behavior
   =================================================================== */
(function () {
  'use strict';

  /* ----------------------------------------------------------------
     1. HEADER SCROLL BEHAVIOR
     ---------------------------------------------------------------- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ----------------------------------------------------------------
     2. BUSCA GLOBAL NO HEADER → projetos.html?busca=
     ---------------------------------------------------------------- */
  document.querySelectorAll('.header-search input').forEach((input) => {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = input.value.trim();
        window.location.href = 'projetos.html' + (val ? '?busca=' + encodeURIComponent(val) : '');
      }
    });
  });

  /* ----------------------------------------------------------------
     MENU MOBILE (hamburguer)
     ---------------------------------------------------------------- */
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const open = mainNav.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open && window.gsap) {
        gsap.from('.main-nav .nav-link', { opacity: 0, x: -20, stagger: 0.08, duration: 0.4 });
      }
    });
  }

  /* ----------------------------------------------------------------
     5. TOAST  (exposto globalmente p/ projeto.html)
     ---------------------------------------------------------------- */
  window.showToast = function showToast(msg, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);

    if (window.gsap) {
      gsap.fromTo(toast, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
      gsap.to(toast, {
        opacity: 0, delay: duration / 1000 - 0.5,
        duration: 0.4, onComplete: () => toast.remove()
      });
    } else {
      setTimeout(() => toast.remove(), duration);
    }
  };

  /* ----------------------------------------------------------------
     6. BOTÃO COMPARTILHAR (projeto.html)
     ---------------------------------------------------------------- */
  const btnShare = document.getElementById('btn-share');
  if (btnShare) {
    btnShare.addEventListener('click', () => {
      const url = window.location.href;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(
          () => window.showToast('Link copiado!'),
          () => window.showToast('Não foi possível copiar')
        );
      } else {
        window.showToast('Link: ' + url);
      }
    });
  }

  /* ----------------------------------------------------------------
     3 + 4. FILTROS E ORDENAÇÃO (projetos.html)
     ---------------------------------------------------------------- */
  const grid = document.getElementById('projects-grid');
  if (!grid) return; // só nas páginas com acervo

  const selectDisciplina = document.getElementById('filter-disciplina');
  const selectSemestre   = document.getElementById('filter-semestre');
  const selectTipo       = document.getElementById('filter-tipo');
  const inputBusca       = document.getElementById('filter-busca');
  const selectSort       = document.getElementById('sort-projects');
  const counter          = document.getElementById('results-count');
  const btnLimpar        = document.getElementById('btn-limpar');
  const emptyState       = document.getElementById('empty-state');

  const cards = Array.from(grid.querySelectorAll('.project-card'));
  const total = cards.length;

  function filterProjects() {
    const disciplina = selectDisciplina ? selectDisciplina.value : '';
    const semestre   = selectSemestre ? selectSemestre.value : '';
    const tipo       = selectTipo ? selectTipo.value : '';
    const busca      = inputBusca ? inputBusca.value.toLowerCase().trim() : '';

    let visible = 0;
    cards.forEach((card) => {
      const match =
        (!disciplina || card.dataset.disciplina === disciplina) &&
        (!semestre   || card.dataset.semestre === semestre) &&
        (!tipo       || card.dataset.tipo === tipo) &&
        (!busca      || card.dataset.busca.includes(busca));

      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    if (counter) counter.textContent = `Mostrando ${visible} de ${total} projetos`;

    const hasFilter = !!(disciplina || semestre || tipo || busca);
    if (btnLimpar) btnLimpar.style.display = hasFilter ? '' : 'none';
    if (emptyState) emptyState.style.display = visible === 0 ? 'flex' : 'none';
  }

  function sortProjects() {
    if (!selectSort) return;
    const mode = selectSort.value;
    const sorted = cards.slice().sort((a, b) => {
      const sa = a.dataset.semestre, sb = b.dataset.semestre;
      const ta = a.querySelector('.card-title').textContent.trim();
      const tb = b.querySelector('.card-title').textContent.trim();
      switch (mode) {
        case 'antigos':  return sa.localeCompare(sb) || ta.localeCompare(tb);
        case 'az':       return ta.localeCompare(tb, 'pt-BR');
        case 'recentes':
        default:         return sb.localeCompare(sa) || ta.localeCompare(tb);
      }
    });
    sorted.forEach((c) => grid.appendChild(c));
  }

  // Eventos
  [selectDisciplina, selectSemestre, selectTipo].forEach((el) => {
    if (el) el.addEventListener('change', filterProjects);
  });
  if (inputBusca) inputBusca.addEventListener('input', filterProjects);
  if (selectSort) selectSort.addEventListener('change', sortProjects);
  if (btnLimpar) {
    btnLimpar.addEventListener('click', () => {
      if (selectDisciplina) selectDisciplina.value = '';
      if (selectSemestre) selectSemestre.value = '';
      if (selectTipo) selectTipo.value = '';
      if (inputBusca) inputBusca.value = '';
      filterProjects();
    });
  }

  // Ler URLSearchParams ao carregar e pré-selecionar filtros
  const params = new URLSearchParams(window.location.search);
  if (params.get('disciplina') && selectDisciplina) selectDisciplina.value = params.get('disciplina');
  if (params.get('semestre') && selectSemestre)     selectSemestre.value = params.get('semestre');
  if (params.get('tipo') && selectTipo)             selectTipo.value = params.get('tipo');
  if (params.get('busca') && inputBusca)            inputBusca.value = params.get('busca');

  sortProjects();
  filterProjects();
})();

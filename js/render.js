/* ===================================================================
   Criação Digital · Portfólio — render.js
   Monta os cards e a página do projeto a partir de PROJETOS (dados.js).
   Carregar DEPOIS de dados.js e ANTES de main.js.
   Roda de forma síncrona (os <script> ficam no fim do <body>).
   =================================================================== */
(function () {
    "use strict";
    if (typeof PROJETOS === "undefined") return;

    // --- IMAGENS -----------------------------------------------------
    // Picsum é o padrão (fallback). Para usar imagens LOCAIS de um projeto,
    // marque-o com imgLocal: true no dados.js e coloque os arquivos em:
    //   img/projetos/<id>/capa.jpg      → capa do card + hero da página
    //   img/projetos/<id>/1.jpg .. N.jpg → galeria (1 por item de "galeria")
    //   img/projetos/<id>/aluno.jpg     → foto do aluno (opcional)
    // Ou sobrescreva um caminho específico com os campos capa / hero.
    // Se o arquivo local não existir, o onerror faz cair no picsum.
    const IMG_DIR = "img/projetos";
    const picThumb = (seed) => `https://picsum.photos/seed/${seed}/600/400`;
    const picHero = (seed) => `https://picsum.photos/seed/${seed}/1200/600`;

    const capaSrc = (p) =>
        p.capa || (p.imgLocal ? `${IMG_DIR}/${p.id}/capa.jpg` : picThumb(p.seed));
    const heroSrc = (p) =>
        p.hero ||
        p.capa ||
        (p.imgLocal ? `${IMG_DIR}/${p.id}/capa.jpg` : picHero(p.seed));

    // alunos pode ser string ("A, B") ou lista (["A", "B"])
    const alunosTexto = (p) =>
        Array.isArray(p.alunos) ? p.alunos.join(", ") : p.alunos || "";

    // Texto de busca (usado pelos filtros em main.js)
    function textoBusca(p) {
        return [
            p.titulo,
            alunosTexto(p),
            p.disciplina,
            p.tipo,
            (p.tags || []).join(" "),
        ]
            .join(" ")
            .toLowerCase();
    }

    // HTML de um card de projeto.
    // aos=true adiciona a animação AOS; passamos false para cards dentro
    // de swiper (o AOS conflita com o transform dos slides).
    function cardHTML(p, aos = true) {
        const tags = (p.tags || [])
            .slice(0, 2)
            .map((t) => `<span class="tag">${t}</span>`)
            .join("");
        return `
      <article class="card project-card"${aos ? ' data-aos="fade-up"' : ""}
        data-disciplina="${p.disciplina}"
        data-semestre="${p.semestre}"
        data-tipo="${p.tipo}"
        data-busca="${textoBusca(p)}">
        <a href="projeto.html?id=${p.id}" class="card-thumb">
          <img src="${capaSrc(p)}" alt="${p.titulo}" loading="lazy"
               onerror="this.onerror=null;this.src='${picThumb(p.seed)}'">
          <span class="card-tipo-badge ${tipoClasse(p.tipo)}">${p.tipo}</span>
        </a>
        <div class="card-body">
          <h3 class="card-title">${p.titulo}</h3>
          <p class="card-meta">${alunosTexto(p)} · ${p.disciplina} · ${p.semestre}</p>
          <div class="card-tags">${tags}</div>
        </div>
      </article>`;
    }

    // Slide de swiper embrulhando um card (sem AOS)
    const slideHTML = (p) =>
        `<div class="swiper-slide">${cardHTML(p, false)}</div>`;

    /* ---------------- ACERVO (projetos.html) ---------------- */
    const grid = document.getElementById("projects-grid");
    if (grid) {
        // map passa (item, índice) — envolvemos p/ não vazar o índice em cardHTML(p, aos)
        grid.innerHTML = PROJETOS.map((p) => cardHTML(p)).join("");
    }

    /* ---------------- DESTAQUES (index.html) ---------------- */
    const featuredGrid = document.querySelector(".featured-grid");
    if (featuredGrid) {
        const destaques = PROJETOS.slice(0, 6);
        featuredGrid.innerHTML = destaques.map((p) => cardHTML(p)).join("");
        const featWrapper = document.querySelector(
            "#featured-swiper .swiper-wrapper",
        );
        if (featWrapper)
            featWrapper.innerHTML = destaques.map(slideHTML).join("");
    }

    /* ---------------- PÁGINA DO PROJETO (projeto.html) ---------------- */
    const detail = document.querySelector(".project-detail");
    if (detail) {
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        const p = PROJETOS.find((x) => x.id === id) || PROJETOS[0];

        const set = (sel, val) => {
            const el = detail.querySelector(sel);
            if (el) el.textContent = val;
        };
        const enc = encodeURIComponent;

        document.title = `${p.titulo} — Criação Digital · Portfólio`;

        // Hero
        const hImg = detail.querySelector("#pd-hero-img");
        if (hImg) {
            hImg.src = heroSrc(p);
            hImg.alt = p.titulo;
            hImg.onerror = () => {
                hImg.onerror = null;
                hImg.src = picHero(p.seed);
            };
        }
        const badge = detail.querySelector("#pd-badge");
        if (badge) {
            badge.textContent = p.tipo;
            badge.className = `card-tipo-badge ${tipoClasse(p.tipo)}`;
            badge.style.position = "static";
            badge.style.alignSelf = "flex-start";
        }
        set("#pd-titulo", p.titulo);
        set("#pd-breadcrumb-titulo", p.titulo);

        // Descrição
        const desc = detail.querySelector("#pd-descricao");
        if (desc) {
            const paras =
                p.descricao && p.descricao.length
                    ? p.descricao
                    : ["Descrição em breve."];
            desc.innerHTML = paras.map((t) => `<p>${t}</p>`).join("");
        }

        // Galeria — cada item de p.galeria pode ser:
        //   número  → seed do picsum (padrão)
        //   string  → caminho local direto (ex.: "img/projetos/01/1.jpg")
        // e, com imgLocal:true, usamos img/projetos/<id>/<n>.jpg por convenção.
        const galeriaSection = detail.querySelector("#pd-galeria-section");
        const galeria = detail.querySelector("#pd-galeria");
        if (galeria && p.galeria && p.galeria.length) {
            galeria.innerHTML = p.galeria
                .map((g, i) => {
                    let full, small;
                    if (typeof g === "string") {
                        full = small = g;
                    } else if (p.imgLocal) {
                        full = small = `${IMG_DIR}/${p.id}/${i + 1}.jpg`;
                    } else {
                        full = `https://picsum.photos/seed/${g}/1200/800`;
                        small = `https://picsum.photos/seed/${g}/400/300`;
                    }
                    const fb = `https://picsum.photos/seed/${p.seed}-${i}/400/300`;
                    const cap = `${p.titulo} — imagem ${i + 1}`;
                    return `
        <a href="${full}" data-fancybox="galeria" data-caption="${cap}">
          <img src="${small}" alt="${cap}" loading="lazy" onerror="this.onerror=null;this.src='${fb}'">
        </a>`;
                })
                .join("");
        } else if (galeriaSection) {
            galeriaSection.style.display = "none";
        }

        // Vídeo (só se houver)
        const videoSection = detail.querySelector("#pd-video-section");
        const iframe = detail.querySelector("#pd-video");
        if (p.video && iframe) {
            iframe.src = `https://www.youtube.com/embed/${p.video}`;
            iframe.title = `Vídeo de apresentação — ${p.titulo}`;
        } else if (videoSection) {
            videoSection.style.display = "none";
        }

        // Áudio — cada item de p.audios pode ser { src, title } ou uma string.
        // Sem áudios, a seção some.
        const audioSection = detail.querySelector("#pd-audio-section");
        const audios = detail.querySelector("#pd-audios");
        const mic = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/></svg>`;
        if (audios && p.audios && p.audios.length) {
            audios.innerHTML = p.audios
                .map((a) => {
                    const src = typeof a === "string" ? a : a.src;
                    const title = (typeof a === "object" && a.title) || p.titulo;
                    return `
          <div class="card audio-note" style="margin-bottom:16px">
            <div class="audio-note-head">${mic}<span>${title}</span></div>
            <audio controls>
              <source src="${src}" type="audio/mpeg">
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>`;
                })
                .join("");
        } else if (audioSection) {
            audioSection.style.display = "none";
        }

        // Ficha técnica
        const aImg = detail.querySelector("#pd-aluno-img");
        if (aImg) {
            const picAluno = `https://picsum.photos/seed/aluno-${p.seed}/48/48`;
            aImg.src =
                p.alunoFoto ||
                (p.imgLocal ? `${IMG_DIR}/${p.id}/aluno.jpg` : picAluno);
            aImg.alt = alunosTexto(p);
            aImg.onerror = () => {
                aImg.onerror = null;
                aImg.src = picAluno;
            };
        }
        set("#pd-aluno-nome", alunosTexto(p));
        const dLink = detail.querySelector("#pd-disciplina");
        if (dLink) {
            dLink.textContent = p.disciplina;
            dLink.href = `projetos.html?disciplina=${enc(p.disciplina)}`;
        }
        const sLink = detail.querySelector("#pd-semestre");
        if (sLink) {
            sLink.textContent = p.semestre;
            sLink.href = `projetos.html?semestre=${enc(p.semestre)}`;
        }
        set("#pd-tipo", p.tipo);
        set("#pd-orientador", p.orientador || "—");

        // Tags
        const tagList = detail.querySelector("#pd-tags");
        if (tagList) {
            tagList.innerHTML = (p.tags || [])
                .map(
                    (t) =>
                        `<a href="projetos.html?busca=${enc(t.toLowerCase())}" class="tag">${t}</a>`,
                )
                .join("");
        }

        // Relacionados: mesma disciplina (exclui o atual); completa com outros
        set("#pd-rel-titulo", `Mais projetos de ${p.disciplina}`);
        let rel = PROJETOS.filter(
            (x) => x.disciplina === p.disciplina && x.id !== p.id,
        );
        if (rel.length < 3) {
            const extra = PROJETOS.filter(
                (x) => x.id !== p.id && !rel.includes(x),
            );
            rel = rel.concat(extra).slice(0, 3);
        } else {
            rel = rel.slice(0, 3);
        }
        const relWrapper = detail.querySelector("#pd-rel-wrapper");
        if (relWrapper) relWrapper.innerHTML = rel.map(slideHTML).join("");

        // Inicializa Fancybox + Swiper de relacionados (dados já no DOM)
        if (window.Fancybox) {
            Fancybox.bind('[data-fancybox="galeria"]', {
                Toolbar: {
                    display: {
                        left: ["infobar"],
                        middle: [],
                        right: ["close"],
                    },
                },
            });
        }
        if (window.Swiper) {
            new Swiper("#related-swiper", {
                slidesPerView: 1.2,
                spaceBetween: 20,
                loop: false,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    640: { slidesPerView: 2.5 },
                    1024: { slidesPerView: 3 },
                },
            });
        }
    }
})();

# Prompt — Claude Code: Criação Digital · Portfólio

> Cole este prompt inteiro no Claude Code e execute.
> O objetivo é gerar um protótipo funcional completo de hipermídia em HTML5 + CSS3 + JS vanilla.

---

## 1. Visão geral do projeto

Construa o **Criação Digital · Portfólio** — um repositório web de projetos acadêmicos do curso de **Criação Digital da Universidade de Caxias do Sul (UCS)**. O curso articula três eixos: **Artes, Comunicação e Tecnologia**.

O repositório reúne projetos das disciplinas práticas do curso (Projeto Temático, Hipermídia, Narrativa Interativa, Motion Design, Fotografia, etc.). Alunos consultam o acervo para buscar referência, inspiração e memória do que já foi produzido no curso.

**Nome do produto:** Criação Digital · Portfólio  
**Público-alvo:** Alunos do curso de Criação Digital da UCS  
**Persona principal:** Diego, 20 anos, 3º semestre, cursando Projeto Temático. Acessa à noite pelo notebook, quer ver o que outros alunos fizeram na mesma disciplina para se inspirar e entender o nível esperado.

---

## 2. Identidade visual

### Referência de estética
Inspirado no **uiverse.io/design**: dark mode com glassmorphism, acentos em gradiente, tipografia moderna, cards com brilho sutil no hover.

### Paleta (CSS custom properties — definir em `:root`)
```css
:root {
  /* Fundos */
  --bg-primary:    #080810;
  --bg-secondary:  #0f0f1a;
  --bg-card:       rgba(255, 255, 255, 0.04);
  --bg-card-hover: rgba(255, 255, 255, 0.07);

  /* Bordas */
  --border-subtle: rgba(255, 255, 255, 0.07);
  --border-card:   rgba(255, 255, 255, 0.10);
  --border-accent: rgba(139, 92, 246, 0.40);

  /* Acentos — identidade Criação Digital */
  --accent-violet: #8b5cf6;
  --accent-pink:   #ec4899;
  --accent-cyan:   #22d3ee;
  --accent-grad:   linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #22d3ee 100%);
  --accent-grad-2: linear-gradient(135deg, #8b5cf6, #ec4899);

  /* Texto */
  --text-primary:   #f1f5f9;
  --text-secondary: #94a3b8;
  --text-muted:     #475569;

  /* Sombras / glow */
  --glow-violet: 0 0 24px rgba(139, 92, 246, 0.35);
  --glow-pink:   0 0 24px rgba(236, 72, 153, 0.30);
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.40);

  /* Tipografia */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body:    'Inter', sans-serif;

  /* Raio */
  --radius-sm:  6px;
  --radius-md:  12px;
  --radius-lg:  20px;
  --radius-pill: 999px;
}
```

### Tipografia (Google Fonts — importar no CSS)
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
```
- **Títulos e logo:** Space Grotesk, bold
- **Corpo e UI:** Inter, regular/medium

### Componentes visuais recorrentes
- **Cards:** `background: var(--bg-card)`, `border: 1px solid var(--border-card)`, `backdrop-filter: blur(12px)`, `border-radius: var(--radius-md)`. No hover: `background: var(--bg-card-hover)`, `border-color: var(--border-accent)`, `box-shadow: var(--glow-violet)`, `transform: translateY(-3px)`. Transição `0.25s ease`.
- **Tags / badges:** `border-radius: var(--radius-pill)`, `padding: 4px 12px`, fundo `rgba(139,92,246,0.15)`, cor `var(--accent-violet)`, `font-size: 0.72rem`, `font-weight: 600`, uppercase.
  - Cada tipo de mídia tem cor diferente:
    - Web / Hipermídia → violet (`#8b5cf6`)
    - Vídeo / Motion → pink (`#ec4899`)
    - Fotografia / Imagem → cyan (`#22d3ee`)
    - Design Gráfico → amber (`#f59e0b`)
    - Narrativa / Ficção → emerald (`#10b981`)
    - Jogo → red (`#ef4444`)
    - Áudio → blue (`#3b82f6`)
    - App / Software → orange (`#f97316`)
    - Modelagem / Animação 3D → teal (`#14b8a6`)
- **Botão primário:** `background: var(--accent-grad-2)`, `border: none`, `border-radius: var(--radius-pill)`, `padding: 10px 24px`, `font-weight: 600`. Hover: `box-shadow: var(--glow-violet)`, `transform: translateY(-1px)`.
- **Botão secundário:** fundo transparente, `border: 1px solid var(--border-accent)`, mesmas dimensões. Hover: fundo `rgba(139,92,246,0.10)`.
- **Input / select:** `background: var(--bg-secondary)`, `border: 1px solid var(--border-subtle)`, `border-radius: var(--radius-sm)`, `color: var(--text-primary)`. Focus: `border-color: var(--accent-violet)`.
- **Scrollbar customizada:**
```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-primary); }
::-webkit-scrollbar-thumb { background: var(--accent-violet); border-radius: 3px; }
```
- **Linha decorativa com gradiente:** `height: 2px; background: var(--accent-grad); border: none;` — usar como `<hr class="grad-line">` em separadores de seção.

---

## 3. Bibliotecas externas (CDN — incluir nos HTMLs)

```html
<!-- Fancybox 5 — lightbox para galeria de imagens -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5/dist/fancybox/fancybox.css"/>
<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5/dist/fancybox/fancybox.umd.js"></script>

<!-- Swiper 11 — sliders e carrosséis -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<!-- GSAP 3 — animações de entrada e scroll -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"></script>
```

**Regras de uso:**
- **Fancybox:** galeria de imagens na página do projeto. Inicializar com `Fancybox.bind('[data-fancybox]', {})`. Cada `<img>` da galeria deve ser envolto em `<a href="URL_FULL" data-fancybox="gallery">`.
- **Swiper:** carrossel de "Projetos relacionados" na página do projeto (loop, navigation arrows, breakpoints responsivos). Também usar no hero da home para os projetos em destaque em mobile.
- **GSAP + ScrollTrigger:** animações de entrada dos cards (`opacity: 0 → 1`, `y: 30 → 0`) ao entrar no viewport. Registrar plugin: `gsap.registerPlugin(ScrollTrigger)`. Usar `ScrollTrigger.batch()` nos cards para stagger.  Também animar o hero da home com `.from()` nos elementos de texto (título, subtítulo, CTAs) em sequência com `timeline`.

---

## 4. Estrutura de arquivos

```
index.html
projetos.html
projeto.html
disciplinas.html
sobre.html
css/
  style.css        ← estilos globais, componentes, utilitários
js/
  main.js          ← filtros, busca, URL params, toast, scroll behavior
  animations.js    ← toda lógica GSAP (importar após main.js)
```

Todos os arquivos HTML devem importar `css/style.css`, `js/main.js` e `js/animations.js` (nessa ordem, antes do `</body>`). As bibliotecas CDN vêm antes dos scripts locais.

---

## 5. Dados fictícios — 16 projetos

Use estes projetos como conteúdo fixo em HTML (sem JSON externo). Cada card de projeto deve ter os atributos `data-disciplina`, `data-semestre`, `data-tipo`, `data-busca` para filtragem via JS.

```
ID  | Título                                      | Aluno(s)                        | Disciplina              | Semestre | Tipo                   | Thumb seed (picsum)
----|---------------------------------------------|----------------------------------|-------------------------|----------|------------------------|--------------------
01  | Sous Chef Secreto                           | Diego Martins                   | Hipermídia              | 2024/2   | Web / Hipermídia       | 10
02  | O Bosque Não Esquece                        | Ana Luiza Farias                | Projeto Temático        | 2024/2   | Áudio                  | 20
03  | Identidade Visual — Faden Knitwear          | Rafael Teixeira, Júlia Fontana  | Projeto Temático        | 2024/1   | Design Gráfico         | 30
04  | Metrópolis: Reconstrução 3D                 | Carlos Eduardo Rocha            | Modelagem e Animação    | 2024/1   | Modelagem / Animação   | 40
05  | LOOP — Videoclipe Experimental              | Beatriz Lima                    | Motion Design           | 2024/2   | Vídeo / Motion         | 50
06  | Retratos do Bairro                          | Fernanda Dias, Lucas Mendes     | Fotografia Aplicada     | 2024/1   | Fotografia / Imagem    | 60
07  | Nexus — Jogo de Narrativa                   | Gabriel Nunes                   | Game Design             | 2023/2   | Jogo                   | 70
08  | Deriva Urbana                               | Mariana Costa                   | Projeto Temático        | 2023/2   | Fotografia / Imagem    | 80
09  | Raízes — Documentário Sonoro                | Isabela Freitas                 | Hipermídia              | 2023/2   | Áudio                  | 90
10  | Teia — App de Rede Criativa                 | Thiago Moraes                   | Projeto Temático        | 2024/2   | App / Software         | 100
11  | Crônicas do Pixel                           | Pedro Alves                     | Narrativa Digital       | 2024/1   | Narrativa / Ficção     | 110
12  | Voz da Margem — Podcast Documental          | Sofia Bernardi                  | Produção Audiovisual    | 2023/1   | Áudio                  | 120
13  | Aquarela Generativa                         | Eduardo Campos                  | Arte Computacional      | 2024/2   | Web / Hipermídia       | 130
14  | Frequência — Instalação Sonora Interativa   | Larissa Pinto, Renata Moura     | Projeto Temático        | 2024/1   | Áudio                  | 140
15  | Typografía Viva — Motion Typography         | Vítor Santana                   | Motion Design           | 2023/2   | Vídeo / Motion         | 150
16  | EcoTrack — App de Pegada Ambiental          | Camila Brum                     | Projeto Temático        | 2024/2   | App / Software         | 160
```

**Imagens:** use `https://picsum.photos/seed/{seed}/600/400` para thumbs de card e `https://picsum.photos/seed/{seed}/1200/600` para hero da página do projeto.

**Disciplinas do curso (para o filtro e a página disciplinas.html):**
- Projeto Temático
- Hipermídia
- Motion Design
- Fotografia Aplicada
- Narrativa Digital
- Game Design
- Modelagem e Animação
- Produção Audiovisual
- Arte Computacional

---

## 6. Página a página

### 6.1 `index.html` — Home

**Header fixo:**
- Logo: `<span class="logo-cd">Criação Digital</span> <span class="logo-sep">·</span> <span class="logo-port">Portfólio</span>` — "Criação Digital" com `background: var(--accent-grad); -webkit-background-clip: text; color: transparent`, "Portfólio" em `var(--text-secondary)`.
- Nav: links Projetos / Disciplinas / Sobre + campo de busca (lupa icon SVG inline, input que expande no focus com transição CSS).
- `backdrop-filter: blur(16px)`, `background: rgba(8,8,16,0.80)`, `border-bottom: 1px solid var(--border-subtle)`, `position: sticky; top: 0; z-index: 100`.

**Hero section:**
- Fundo: `radial-gradient` saindo do centro com as cores de acento em baixa opacidade (0.12) sobre `var(--bg-primary)`.
- Elemento decorativo: 3 círculos blur absolutos (violet, pink, cyan) posicionados fora do centro para criar profundidade — `border-radius: 50%; filter: blur(80px); opacity: 0.15; pointer-events: none`.
- Eyebrow: `<span>Curso de Criação Digital — UCS</span>` em tag pill com borda gradiente.
- Título principal: `"O que foi feito aqui, fica aqui."` — `font-size: clamp(2.2rem, 5vw, 4rem)`, Space Grotesk bold.
- Subtítulo: `"Explore projetos reais produzidos por alunos do curso. Inspire-se, pesquise, descubra."` — Inter, `var(--text-secondary)`.
- Dois CTAs: "Explorar projetos" (primário → `projetos.html`) + "Ver disciplinas" (secundário → `disciplinas.html`).
- GSAP: `.from()` em timeline — eyebrow (0s) → título (0.15s) → subtítulo (0.25s) → CTAs (0.35s). Cada um com `opacity: 0, y: 20`.

**Destaques — Swiper (mobile) / Grid (desktop):**
- Desktop (≥1024px): CSS Grid `repeat(3, 1fr)`, mostrar projetos 01–06.
- Mobile (<1024px): Swiper horizontal, `slidesPerView: 1.2`, `spaceBetween: 16`, `loop: false`.
- Título da seção: "Projetos em Destaque" com `<hr class="grad-line">` abaixo.

**Stats bar:**
- Fundo `var(--bg-secondary)`, borda sutil, 3 colunas: "16 Projetos" / "9 Disciplinas" / "6 Semestres" — números com `var(--accent-grad)` clip, labels em `var(--text-muted)`.
- GSAP: animar os números de 0 até o valor final com `gsap.to()` + objeto contador.

**Footer:**
- 3 colunas: Logo + tagline | Links rápidos | Créditos.
- `border-top: 1px solid var(--border-subtle)`, fundo `var(--bg-secondary)`.
- Copyright: `© 2025 Criação Digital · UCS. Projeto Hipermídia.`

---

### 6.2 `projetos.html` — Acervo

**Barra de filtros (sticky abaixo do header):**
- `position: sticky; top: 64px; z-index: 90; background: rgba(8,8,16,0.90); backdrop-filter: blur(12px); padding: 16px 0; border-bottom: 1px solid var(--border-subtle)`.
- Controles: Select "Disciplina" | Select "Semestre" | Select "Tipo de Mídia" | Input busca por texto.
- Todos com estilo do design system, inline em flex com `gap: 12px`, `flex-wrap: wrap`.
- Botão "Limpar filtros" que reseta tudo (aparece só quando algum filtro estiver ativo).

**Contador + ordenação:**
- `"Mostrando X de 16 projetos"` — atualiza dinamicamente.
- Select de ordenação: "Mais recentes" | "Mais antigos" | "A–Z" (reordena os cards no DOM via JS).

**Grid de cards:**
- CSS Grid `repeat(auto-fill, minmax(280px, 1fr))`, `gap: 24px`.
- Card estrutura:
  ```html
  <article class="card project-card"
    data-disciplina="Hipermídia"
    data-semestre="2024/2"
    data-tipo="Web / Hipermídia"
    data-busca="sous chef secreto diego martins hipermídia web">
    <a href="projeto.html" class="card-thumb">
      <img src="https://picsum.photos/seed/10/600/400" alt="...">
      <span class="card-tipo-badge web">Web / Hipermídia</span>
    </a>
    <div class="card-body">
      <h3 class="card-title">Sous Chef Secreto</h3>
      <p class="card-meta">Diego Martins · Hipermídia · 2024/2</p>
      <div class="card-tags">
        <span class="tag">Hipermídia</span>
        <span class="tag">Narrativa</span>
      </div>
    </div>
  </article>
  ```
- Imagem com `aspect-ratio: 16/9; object-fit: cover; border-radius: var(--radius-md) var(--radius-md) 0 0`.
- Badge de tipo: posição absolute `top: 12px; right: 12px`.
- GSAP ScrollTrigger: `ScrollTrigger.batch('.project-card', { onEnter: batch => gsap.from(batch, { opacity: 0, y: 30, stagger: 0.08, duration: 0.5 }) })`.

**Lógica de filtro (JS puro):**
```javascript
// Em main.js
function filterProjects() {
  const disciplina = selectDisciplina.value;
  const semestre   = selectSemestre.value;
  const tipo       = selectTipo.value;
  const busca      = inputBusca.value.toLowerCase().trim();

  let visible = 0;
  document.querySelectorAll('.project-card').forEach(card => {
    const match =
      (!disciplina || card.dataset.disciplina === disciplina) &&
      (!semestre   || card.dataset.semestre === semestre) &&
      (!tipo       || card.dataset.tipo === tipo) &&
      (!busca      || card.dataset.busca.includes(busca));

    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });
  counter.textContent = `Mostrando ${visible} de 16 projetos`;
  btnLimpar.style.display = (disciplina || semestre || tipo || busca) ? '' : 'none';
}

// Ler URLSearchParams ao carregar a página e pré-selecionar filtros:
const params = new URLSearchParams(window.location.search);
if (params.get('disciplina')) { selectDisciplina.value = params.get('disciplina'); }
if (params.get('tipo'))       { selectTipo.value = params.get('tipo'); }
if (params.get('busca'))      { inputBusca.value = params.get('busca'); }
filterProjects(); // rodar imediatamente ao carregar
```

**Estado vazio:**
- Se nenhum card visível: mostrar `<div class="empty-state">` com ícone SVG, "Nenhum projeto encontrado" e botão "Limpar filtros".

---

### 6.3 `projeto.html` — Página do Projeto

> Use o projeto **"Sous Chef Secreto"** (ID 01) como conteúdo de demonstração desta página.

**Breadcrumb:**
```html
<nav class="breadcrumb">
  <a href="index.html">Início</a> <span>/</span>
  <a href="projetos.html">Projetos</a> <span>/</span>
  <span>Sous Chef Secreto</span>
</nav>
```

**Hero do projeto:**
- Imagem `https://picsum.photos/seed/10/1200/600` com `width: 100%; height: 420px; object-fit: cover; border-radius: var(--radius-lg)`.
- Overlay gradiente em baixo: `linear-gradient(to top, rgba(8,8,16,1) 0%, transparent 60%)`.
- Sobre o overlay: título do projeto + badge de tipo.
- GSAP: `.from(heroImg, { scale: 1.05, duration: 1.2, ease: 'power2.out' })` + `.from(heroTitle, { opacity: 0, y: 20, duration: 0.8, delay: 0.3 })`.

**Layout de duas colunas (grid 65% / 35%):**

**Coluna principal:**

1. **Sobre o projeto** — 2–3 parágrafos de texto fictício sobre "Sous Chef Secreto":
   > Narrativa interativa desenvolvida em Twine/Harlowe ambientada no universo de Ratatouille. O jogador assume o papel de um sous chef iniciante que precisa tomar decisões em tempo real durante um serviço caótico. Cada escolha afeta o humor da brigada, a qualidade dos pratos e o desfecho da noite. O projeto explora as possibilidades da hipermídia instrucional-ficcional ao unir mecânicas de jogo com técnicas de storytelling culinário...

2. **Galeria — Fancybox:**
   ```html
   <div class="gallery-grid">
     <a href="https://picsum.photos/seed/11/1200/800" data-fancybox="gallery-01" data-caption="Interface principal">
       <img src="https://picsum.photos/seed/11/400/300" alt="Interface principal">
     </a>
     <!-- repetir para seeds 12, 13, 14 — 4 imagens total -->
   </div>
   ```
   - Grid CSS: `repeat(2, 1fr)`, `gap: 12px`. Cada img com `border-radius: var(--radius-sm)`, hover `opacity: 0.85`.
   - Inicializar: `Fancybox.bind('[data-fancybox="gallery-01"]', { Toolbar: { display: { left: ['infobar'], middle: [], right: ['close'] } } })`.

3. **Vídeo de apresentação:**
   - Título da seção + `<hr class="grad-line">`.
   - Wrapper com `padding-top: 56.25%; position: relative` (aspect ratio 16:9).
   - `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" ... style="position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:var(--radius-md)">`.

4. **Nota de processo (áudio):**
   - Card com `var(--bg-card)` e borda, ícone de microfone SVG, texto: *"O aluno gravou uma nota sobre o processo criativo deste projeto."*
   - `<audio controls style="width:100%;margin-top:12px">` com `<source>` apontando para arquivo fictício (o `<audio>` renderiza o controle nativo do browser, que é suficiente para o protótipo).

**Coluna lateral (sticky: `position: sticky; top: 80px`):**

1. **Card de metadados:**
   ```
   Aluno       → Diego Martins (foto: picsum seed 200, 48x48, border-radius 50%)
   Disciplina  → Hipermídia  (link → projetos.html?disciplina=Hipermídia)
   Semestre    → 2024/2      (link → projetos.html?semestre=2024%2F2)
   Tipo        → Web / Hipermídia
   Orientador  → Prof. Dr. [Nome Fictício]
   ```

2. **Tags clicáveis:**
   ```html
   <div class="tag-list">
     <a href="projetos.html?tipo=Web+%2F+Hiperm%C3%ADdia" class="tag">Hipermídia</a>
     <a href="projetos.html?disciplina=Hiperm%C3%ADdia" class="tag">Twine</a>
     <span class="tag">Narrativa Interativa</span>
     <span class="tag">Ficção</span>
   </div>
   ```

3. **Botão compartilhar:**
   ```javascript
   btnShare.addEventListener('click', () => {
     navigator.clipboard.writeText(window.location.href);
     showToast('Link copiado!');
   });
   ```
   - Toast: `position: fixed; bottom: 24px; right: 24px; background: var(--accent-violet); color: white; padding: 10px 20px; border-radius: var(--radius-pill)`. Animar com `gsap.fromTo(toast, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 })` e remover após 3s com `gsap.to(toast, { opacity: 0, delay: 2.5, onComplete: () => toast.remove() })`.

**Projetos relacionados — Swiper:**
- Título: "Mais projetos de Hipermídia".
- Swiper horizontal, `slidesPerView: 1.2` mobile / `2.5` tablet / `3` desktop, `spaceBetween: 20`, navigation arrows, `loop: false`.
- Mostrar projetos 09 e 13 (mesma disciplina ou tema próximo) + 1 terceiro qualquer.

---

### 6.4 `disciplinas.html` — Disciplinas

**Grid de cards de disciplina** (`repeat(auto-fill, minmax(260px, 1fr))`):

Cada card:
```html
<a href="projetos.html?disciplina=Hiperm%C3%ADdia" class="card discipline-card">
  <div class="disc-icon"><!-- ícone SVG inline representando a disciplina --></div>
  <h3>Hipermídia</h3>
  <p class="disc-desc">Projetos de web interativa, narrativas digitais e experiências multimídia.</p>
  <div class="disc-footer">
    <span class="tag">3 projetos</span>
    <span class="disc-arrow">→</span>
  </div>
</a>
```

Ícones SVG inline (simples, monocromáticos, 32x32) para cada disciplina:
- Hipermídia → ícone de link/corrente
- Motion Design → ícone de play com trilha
- Fotografia → ícone de câmera
- Narrativa Digital → ícone de livro aberto
- Game Design → ícone de controle
- Modelagem e Animação → ícone de cubo 3D
- Produção Audiovisual → ícone de claquete
- Arte Computacional → ícone de terminal/código
- Projeto Temático → ícone de estrela/destaque

Hover no card: borda accent + glow + seta se move `translateX(4px)`.

---

### 6.5 `sobre.html` — Sobre

**Seção hero:** título "Sobre o portfólio" + subtítulo explicando a proposta. `<hr class="grad-line">`.

**Como funciona — 3 passos:**
```
1. Projeto finalizado   → Aluno conclui o projeto na disciplina
2. Curadoria            → Equipe seleciona e prepara o registro
3. Publicado            → Projeto entra no repositório para todos acessarem
```
Layout em 3 cards horizontais no desktop, vertical no mobile. Numeral grande `01 / 02 / 03` em gradiente.

**Missão:**
> *"Criar memória institucional viva para o curso de Criação Digital da UCS. Um lugar onde cada projeto produzido aqui se torna referência para quem vem depois."*

**Equipe — 4 cards:**
```
Diretor Criativo       → [Nome fictício] — conceito e identidade visual
UX / Arq. Informação   → [Nome fictício] — navegação e experiência
Produtor de Conteúdo   → [Nome fictício] — curadoria e textos
Dev Front-end          → [Nome fictício] — HTML, CSS e JavaScript
```
Foto: `picsum.photos/seed/30{n}/80/80`, `border-radius: 50%`, borda `2px solid var(--border-accent)`.

**Regras de submissão — lista:**
- Projeto deve ter sido avaliado e aprovado em disciplina do curso
- Aluno autoriza a publicação dos materiais
- Mínimo: título, descrição, imagem de capa e créditos
- Projetos com vídeo, áudio ou demo interativa têm prioridade

---

## 7. CSS global (`css/style.css`) — estrutura esperada

Organizar o arquivo nas seguintes seções (comentários delimitadores):

```
/* === RESET & BASE === */
/* === CUSTOM PROPERTIES === */  ← (o :root completo da seção 2)
/* === TIPOGRAFIA === */
/* === LAYOUT UTILITÁRIOS === */  ← .container (max-width: 1200px, margin: auto, padding: 0 24px)
/* === HEADER === */
/* === HERO === */
/* === CARDS === */
/* === TAGS & BADGES === */
/* === BOTÕES === */
/* === INPUTS & SELECTS === */
/* === FILTROS === */
/* === GALERIA === */
/* === SWIPER CUSTOMIZAÇÃO === */  ← sobrescrever setas e paginação com as cores do tema
/* === STATS BAR === */
/* === DISCIPLINAS === */
/* === PROJETO — PAGE LAYOUT === */
/* === BREADCRUMB === */
/* === SIDEBAR === */
/* === TOAST === */
/* === FOOTER === */
/* === EMPTY STATE === */
/* === RESPONSIVE === */  ← media queries ao final
/* === ANIMAÇÕES === */  ← @keyframes e classes utilitárias de animação CSS
```

---

## 8. JavaScript (`js/main.js` + `js/animations.js`)

### `main.js` — funcionalidades

```javascript
// 1. HEADER SCROLL BEHAVIOR
// Adicionar classe .scrolled ao header quando scrollY > 20 (aumenta blur e opacidade do bg)

// 2. BUSCA GLOBAL NO HEADER
// Input de busca: ao pressionar Enter, redireciona para projetos.html?busca=<valor>

// 3. FILTROS (projetos.html)
// Função filterProjects() conforme descrito na seção 6.2
// Eventos: 'change' nos selects, 'input' no campo de busca
// Ler URLSearchParams ao DOMContentLoaded e pré-selecionar filtros

// 4. ORDENAÇÃO (projetos.html)
// Ao mudar select de ordenação, reordenar os .project-card no DOM

// 5. TOAST
// showToast(msg, duration = 3000) — criar elemento, animar entrada/saída via GSAP

// 6. BOTÃO COMPARTILHAR (projeto.html)
// navigator.clipboard.writeText(window.location.href) + showToast()

// 7. SMOOTH SCROLL
// Links âncoras internos com scroll suave nativo: html { scroll-behavior: smooth }
// (CSS é suficiente, não precisa de JS extra)
```

### `animations.js` — GSAP

```javascript
// Registrar plugin
gsap.registerPlugin(ScrollTrigger);

// HERO HOME — timeline de entrada
// (só na index.html — checar if document.querySelector('.hero-home'))
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
heroTl
  .from('.hero-eyebrow', { opacity: 0, y: 16, duration: 0.6 })
  .from('.hero-title',   { opacity: 0, y: 24, duration: 0.7 }, '-=0.3')
  .from('.hero-sub',     { opacity: 0, y: 16, duration: 0.6 }, '-=0.4')
  .from('.hero-ctas',    { opacity: 0, y: 12, duration: 0.5 }, '-=0.3');

// STATS — contador animado
// gsap.to(counterEl, { innerText: targetValue, duration: 1.5, snap: { innerText: 1 },
//   scrollTrigger: { trigger: '.stats-bar', start: 'top 80%' } })

// CARDS — stagger ao entrar no viewport
ScrollTrigger.batch('.project-card, .discipline-card', {
  onEnter: batch => gsap.from(batch, {
    opacity: 0, y: 32, stagger: 0.07, duration: 0.55, ease: 'power2.out'
  }),
  start: 'top 88%',
  once: true
});

// HERO DA PÁGINA DO PROJETO
// (só em projeto.html)
if (document.querySelector('.project-hero')) {
  gsap.from('.project-hero img', { scale: 1.06, duration: 1.3, ease: 'power2.out' });
  gsap.from('.project-hero-content', { opacity: 0, y: 24, duration: 0.8, delay: 0.4 });
}

// SIDEBAR — fade in
gsap.from('.project-sidebar', { opacity: 0, x: 20, duration: 0.7, delay: 0.6 });
```

---

## 9. Responsividade

| Breakpoint | Comportamento |
|---|---|
| < 640px (mobile) | 1 coluna em tudo; menu hamburguer (toggle com JS simples); Swiper no lugar de grid |
| 640–1023px (tablet) | 2 colunas nos cards; sidebar passa para abaixo do conteúdo |
| ≥ 1024px (desktop) | Layout completo 3 colunas / grid / sidebar lateral |

**Menu mobile:**
- Botão hamburguer SVG no header (visível só em < 768px via CSS).
- Ao clicar: adiciona `.nav-open` no `<nav>`, que tem `position: fixed; inset: 0; top: 64px; background: var(--bg-primary); flex-direction: column; padding: 32px`.
- GSAP: `gsap.from('.mobile-nav a', { opacity: 0, x: -20, stagger: 0.08, duration: 0.4 })`.

---

## 10. Instruções finais de execução

1. Criar todos os arquivos listados na seção 4 com a estrutura e conteúdo descritos.
2. Garantir que **todos os links internos funcionem** com caminhos relativos corretos.
3. O design deve ser **visualmente consistente** em todas as páginas — mesmo header, footer, variáveis CSS.
4. **Não usar Bootstrap, Tailwind ou qualquer framework CSS** — somente CSS puro com as variáveis definidas.
5. **Não usar React, Vue ou qualquer framework JS** — somente JavaScript vanilla.
6. Fancybox, Swiper e GSAP devem ser importados via CDN conforme a seção 3.
7. Após gerar todos os arquivos, abrir `index.html` no browser (se possível) e tirar screenshot para validar o resultado visual.
8. Listar ao final todos os arquivos criados com uma linha descrevendo cada um.

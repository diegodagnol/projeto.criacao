# Criação Digital · Portfólio

Repositório web dos projetos acadêmicos do curso de **Criação Digital da Universidade de Caxias do Sul (UCS)** — que articula os eixos de **Artes, Comunicação e Tecnologia**.

O site reúne os projetos das disciplinas práticas (Projeto Temático, Hipermídia, Game Design, Fotografia, etc.) para que alunos possam consultar, se inspirar e ter memória do que já foi produzido no curso.

---

## ✨ Visão geral

- **Estético:** dark mode com glassmorphism, acentos em gradiente (violeta → rosa → ciano) e tipografia moderna (Space Grotesk + Inter).
- **Sem frameworks:** HTML, CSS e JavaScript puros (vanilla).
- **Orientado a dados:** todos os projetos ficam em um único arquivo (`js/dados.js`). Os cards, a home e a página de cada projeto são montados automaticamente por JavaScript — **não é preciso editar HTML** para adicionar um projeto.

### Bibliotecas (via CDN)

| Biblioteca | Uso |
|---|---|
| [Fancybox 5](https://fancyapps.com/) | Lightbox da galeria de imagens |
| [Swiper 11](https://swiperjs.com/) | Carrosséis (destaques mobile e "projetos relacionados") |
| [GSAP 3](https://gsap.com/) | Animação do hero e contador das estatísticas |
| [AOS 2](https://michalsnik.github.io/aos/) | Animação de entrada dos cards ao rolar a página |

---

## 📁 Estrutura de arquivos

```
index.html          → Home (hero, destaques, estatísticas)
projetos.html       → Acervo com filtros (disciplina, semestre, tipo, busca)
projeto.html        → Página de um projeto (lê ?id=NN da URL)
disciplinas.html    → Grade de disciplinas
sobre.html          → Sobre o portfólio
css/
  style.css         → Estilos globais, componentes e responsivo
js/
  dados.js          → ★ FONTE DE DADOS: a lista de projetos (edite aqui)
  render.js         → Monta cards e a página do projeto a partir de dados.js
  main.js           → Filtros, busca, ordenação, menu mobile, toast
  animations.js     → Inicializa AOS + animações GSAP
img/
  projetos/<id>/    → Imagens locais de cada projeto (capa.jpg, 1.jpg…, aluno.jpg)
audios/
  projetos/<id>/    → Áudios de cada projeto (.mp3)
```

---

## ▶️ Como rodar

O site é estático. Há duas formas:

1. **Abrir direto:** dê duplo-clique em `index.html` (funciona via `file://`).
2. **Com servidor local** (recomendado; evita pequenas diferenças de caminho):
   ```bash
   npx serve .
   ```
   e acesse o endereço mostrado no terminal (ex.: `http://localhost:3000`).

> Links entre projetos usam `projeto.html?id=NN`. Isso funciona nas duas formas.

---

## 📝 Como adicionar ou editar um projeto

Abra **`js/dados.js`** e copie um bloco `{ ... }` dentro da lista `PROJETOS`, ajustando os campos:

```js
{
  id: "17",                        // string única (usada em projeto.html?id=17)
  titulo: "Nome do Projeto",
  alunos: ["Fulano", "Ciclana"],   // texto "A, B" ou lista
  disciplina: "Hipermídia",        // deve bater com uma opção do filtro
  semestre: "2026/2",
  tipo: "Web / Hipermídia",        // define a cor do badge (ver tabela abaixo)
  seed: 17,                        // semente das imagens placeholder (picsum)
  tags: ["Web", "Interativo"],
  orientador: "Prof. Dr. Fulano",
  resumo: "Frase curta em destaque no topo da página.",
  descricao: [ "Parágrafo 1…", "Parágrafo 2…" ],
  imgLocal: true,                  // usar imagens locais (ver seção Imagens)
  galeria: [1, 2, 3, 4],           // seeds picsum OU caminhos locais
  video: "ID_DO_YOUTUBE",          // opcional
  audios: [                        // opcional
    { src: "audios/projetos/17/faixa.mp3", title: "Faixa 1" }
  ]
}
```

### Campos

| Campo | Obrigatório | Descrição |
|---|---|---|
| `id` | ✅ | String única, usada na URL `projeto.html?id=…` |
| `titulo` | ✅ | Nome do projeto |
| `alunos` | ✅ | Autor(es): texto `"A, B"` ou lista `["A", "B"]` |
| `disciplina` | ✅ | Deve bater com uma opção do filtro em `projetos.html` |
| `semestre` | ✅ | Formato `"AAAA/S"` (ex.: `"2026/2"`) |
| `tipo` | ✅ | Tipo de mídia — define a cor do badge (tabela abaixo) |
| `seed` | ✅ | Semente das imagens placeholder (picsum) |
| `tags` | ✅ | Lista de etiquetas curtas |
| `orientador` | — | Nome do professor |
| `resumo` | — | Frase curta em destaque no topo (aceita HTML) |
| `descricao` | — | Lista de parágrafos (aceita HTML, ex.: links) |
| `galeria` | — | Lista de imagens; **sem ela, a seção some** |
| `video` | — | ID do YouTube; **sem ele, a seção some** |
| `audios` | — | Lista de áudios; **sem eles, a seção some** |
| `imgLocal` | — | `true` → usa imagens locais por convenção (ver abaixo) |
| `capa` / `hero` / `alunoFoto` | — | Caminho exato p/ sobrescrever a convenção |

> A página do projeto é **modular**: cada seção (galeria, áudio, vídeo) só aparece se o campo correspondente existir.

### Tipos de mídia (cor do badge)

`Web / Hipermídia` · `Vídeo / Motion` · `Fotografia / Imagem` · `Design Gráfico` · `Narrativa / Ficção` · `Jogo` · `Áudio` · `App / Software` · `Modelagem / Animação`

### HTML na descrição

Como `descricao` e `resumo` são inseridos como HTML, dá para incluir links e ênfase. Use **aspas simples** nos atributos:

```js
descricao: [
  "Veja o projeto ao vivo em <a href='https://exemplo.com' target='_blank' rel='noopener'>exemplo.com</a>."
]
```

---

## 🖼️ Imagens

Por padrão o site usa placeholders do [picsum.photos](https://picsum.photos/). Para usar **imagens reais** de um projeto:

1. No `dados.js`, adicione `imgLocal: true` ao projeto.
2. Coloque os arquivos em `img/projetos/<id>/`:
   - `capa.jpg` → capa do card + imagem grande (hero) da página
   - `1.jpg`, `2.jpg`, … → imagens da galeria (1 por item de `galeria`)
   - `aluno.jpg` → foto do aluno (opcional)

Se um arquivo local não existir, o site cai automaticamente no picsum (a imagem não fica quebrada). Detalhes em `img/projetos/README.txt`.

---

## 🎧 Áudios

Coloque os arquivos em `audios/projetos/<id>/` e referencie no `dados.js`:

```js
audios: [
  { src: "audios/projetos/02/narracao.mp3", title: "Narração" },
  { src: "audios/projetos/02/completo.mp3", title: "Versão completa" }
]
```

---

## 👥 Créditos

Projeto desenvolvido para a disciplina de **Hipermídia** do curso de Criação Digital da **UCS**.

© 2025 Criação Digital · UCS.

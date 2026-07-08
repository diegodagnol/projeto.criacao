/* ===================================================================
   Criação Digital · Portfólio — dados.js
   Fonte de dados única dos projetos. Carregar ANTES de render.js.

   Para adicionar um projeto real: copie um bloco { ... } abaixo,
   troque os campos e pronto — os cards e a página do projeto se
   montam sozinhos a partir daqui. Nenhum HTML precisa ser editado.

   Campos:
     id          → string única, usada na URL: projeto.html?id=01
     titulo      → nome do projeto
     alunos      → autor(es): texto ("A, B") ou lista (["A", "B"])
     disciplina  → deve bater com uma opção do filtro em projetos.html
     semestre    → "AAAA/S"  (ex.: "2024/2")
     tipo        → deve bater com uma opção do filtro (define a cor do badge)
     seed        → semente das imagens picsum (capa e galeria derivam dela)
     tags        → lista de etiquetas curtas
     orientador  → nome do professor (opcional)
     video       → ID do YouTube (opcional; sem isso, a seção some)
     audios      → lista de áudios (opcional; sem isso, a seção some).
                   Cada item: { src: "audios/...mp3", title: "Nome" } ou string
     descricao   → lista de parágrafos (opcional)
     galeria     → lista de imagens da galeria (opcional). Cada item pode ser
                   um seed picsum (número) OU um caminho local (string).
     imgLocal    → true para usar imagens locais deste projeto por convenção:
                   img/projetos/<id>/capa.jpg, 1.jpg, 2.jpg…, aluno.jpg
                   (veja img/projetos/README.txt). Sem local, usa picsum.
     capa/hero/alunoFoto → (opcional) caminho exato p/ sobrescrever a convenção
   =================================================================== */

const PROJETOS = [
  {
    id: "01",
    titulo: "Explócus",
    alunos: "Diego Dall Agnol",
    disciplina: "Projeto Temático",
    semestre: "2026/2",
    tipo: "Web / Hipermídia",
    seed: 10,
    imgLocal: true,   // usa img/projetos/01/  (capa.jpg, 1.jpg…4.jpg, aluno.jpg); cai no picsum se faltar
    tags: ["Hipermídia", "Interativo", "Mapa", "Web"],
    orientador: "Prof. Dr. Elisa Boff",
    descricao: [
      "A ideia do Explócus nasceu da percepção de que muitos estudantes, sobretudo os ingressantes, conhecem apenas uma fração dos espaços do campus da Universidade de Caxias do Sul. Blocos, laboratórios, biblioteca e espaços de convivência frequentemente passam despercebidos durante toda a graduação. A motivação central foi, portanto, transformar esse problema de orientação espacial em uma experiência lúdica: e se a descoberta do campus pudesse ser tão envolvente quanto um jogo de exploração? A partir dessa pergunta, discutiu-se como aliar três elementos para a hipermídia: mapa interativo, conteúdo multimídia e participação ativa do usuário.",
      "Como referências diretas, observaram-se hipermídias e aplicativos que já exploram a relação entre espaço físico e interação digital. O Pokémon GO (Niantic) e o Ingress demonstraram o potencial dos jogos baseados em localização para deslocar pessoas pelo mundo real; o Foursquare/Swarm popularizou a mecânica de check-in como forma de registrar presença em lugares; e o Geocaching mostrou como coordenadas geográficas podem virar uma caça ao tesouro colaborativa. A discussão convergiu para um objetivo claro: criar não um jogo de fantasia sobreposto ao mapa, mas uma ferramenta de descoberta real do campus, em que cada local visitado revela informação institucional relevante.",
      "O objetivo da hipermídia é incentivar a exploração presencial do campus da UCS por meio de uma experiência interativa e gamificada. O Explócus busca comunicar os espaços universitários, convertendo cada ponto de interesse em um “checkpoint” que só libera seu conteúdo (textos, imagens e vídeos) quando o usuário efetivamente chega ao local. O conceito é o de um “passaporte digital do campus”: a interatividade foi explorada na geolocalização em tempo real, no check-in dependente de proximidade física, no desbloqueio progressivo de conteúdo, no ranking entre exploradores e em microinterações (animações, som e vibração) que dão feedback imediato a cada conquista."
      ,"Veja o projeto ao vivo em <a href='https://explocus.onrender.com' target='_blank' rel='noopener'>explocus.onrender.com</a>"
    ],
    galeria: ["img/projetos/01/1.jpg", "img/projetos/01/2.jpg", "img/projetos/01/3.jpg", "img/projetos/01/4.jpg"]
  },
  {
    id: "02",
    titulo: "O Bosque Não Esquece",
    alunos: ["Diego Luiz Dall Agnol", "Eduardo Da Rosa Pintos", "Pedro Henrique Galvão"],
    disciplina: "Hipermídia",
    semestre: "2026/2",
    tipo: "Áudio",
    seed: 20,
    tags: ["Áudio", "Imersivo"],
    orientador: "Profa. Dra. Elisa Boff",
    descricao: [
      "A atividade de Hiperáudio é um projeto prático da disciplina de Criação em Hipermidia que propõe a produção de um produto sonoro narrativo — como um podcast ou radionovela — explorando a linguagem do áudio como meio expressivo autônomo. O aluno deve criar uma peça sonora baseada em notícia, ficção ou no uso de áudio em games e ambientes interativos, desenvolvendo roteiro, narração e, opcionalmente, trilha e efeitos sonoros.",
      "O diferencial da proposta está na criação de duas versões do mesmo conteúdo: uma versão limpa, apenas com a fala, e outra com camadas sonoras adicionais — efeitos e/ou música. Esse exercício de comparação evidencia como o som não-verbal transforma a experiência narrativa, um conceito central na teoria do hiperáudio e das mídias interativas. Após a edição no Audacity, o trabalho é publicado em plataformas de podcast como o Spotify for Podcasters (Anchor.fm) ou o Podomatic, tornando o produto acessível como obra de comunicação digital real."
    ],
    imgLocal: true,
    audios : [
      { src: "audios/projetos/02/bosque_nao_esquece-narracao.mp3", title: "O Bosque Não Esquece" },
      { src: "audios/projetos/02/bosque_nao_esquece-completo.mp3", title: "O Bosque Não Esquece (Completo)" }
    ]
  },
  {
    id: "03",
    titulo: "Identidade Visual — Faden Knitwear",
    alunos: "Rafael Teixeira, Júlia Fontana",
    disciplina: "Projeto Temático",
    semestre: "2024/1",
    tipo: "Design Gráfico",
    seed: 30,
    tags: ["Branding", "Design"],
    orientador: "Prof. Me. Otávio Bertoluci",
    descricao: [
      "Sistema de identidade visual completo para a marca fictícia de malharia Faden Knitwear, incluindo logotipo, paleta, tipografia e aplicações.",
      "O projeto parte de pesquisa de referências têxteis para traduzir o conceito de 'trama' em uma linguagem gráfica coesa e escalável."
    ],
    galeria: [31, 32, 33, 34]
  },
  {
    id: "04",
    titulo: "Metrópolis: Reconstrução 3D",
    alunos: "Carlos Eduardo Rocha",
    disciplina: "Modelagem e Animação",
    semestre: "2024/1",
    tipo: "Modelagem / Animação",
    seed: 40,
    tags: ["3D", "Animação"],
    orientador: "Prof. Dr. Henrique Vasconcelos",
    video: "dQw4w9WgXcQ",
    descricao: [
      "Reconstrução tridimensional de cenários inspirados no clássico Metropolis (1927), com modelagem, texturização e animação de câmera.",
      "O trabalho estuda a linguagem do expressionismo alemão aplicada a ferramentas contemporâneas de computação gráfica."
    ],
    galeria: [41, 42, 43, 44]
  },
  {
    id: "05",
    titulo: "LOOP — Videoclipe Experimental",
    alunos: "Beatriz Lima",
    disciplina: "Motion Design",
    semestre: "2024/2",
    tipo: "Vídeo / Motion",
    seed: 50,
    tags: ["Motion", "Vídeo"],
    orientador: "Profa. Dra. Cláudia Reinaldo",
    video: "dQw4w9WgXcQ",
    descricao: [
      "Videoclipe experimental construído sobre a ideia de repetição e ciclo. Grafismos em movimento sincronizados à batida criam uma experiência hipnótica.",
      "O projeto combina animação por keyframes, tipografia cinética e edição rítmica."
    ],
    galeria: [51, 52, 53, 54]
  },
  {
    id: "06",
    titulo: "Ensaio Final: Caxias dupla exposta",
    alunos: "Diego Luiz Dall Agnol",
    disciplina: "Fotografia",
    semestre: "2024/1",
    tipo: "Fotografia / Imagem",
    tags: ["Fotografia", "Ensaio"],
    orientador: "Prof. Me. Gustavo Luiz Pozza",
    imgLocal: true,
    descricao: [
      "Ensaio fotografico como atividade final da disciplina de fotografia do curso de Criação Digital da Universidade de Caxias do Sul.",
      "O ensaio explora a técnica de dupla exposição, combinando imagens de paisagens urbanas de Caxias do Sul do passado e do presente."
      
    ],
    galeria: ["img/projetos/06/1.png", "img/projetos/06/2.png", "img/projetos/06/3.png", "img/projetos/06/4.png", "img/projetos/06/5.png"]
  },
  {
    id: "07",
    titulo: "Nexus — Jogo de Narrativa",
    alunos: "Gabriel Nunes",
    disciplina: "Game Design",
    semestre: "2023/2",
    tipo: "Jogo",
    seed: 70,
    tags: ["Jogo", "Narrativa"],
    orientador: "Prof. Dr. Henrique Vasconcelos",
    video: "dQw4w9WgXcQ",
    descricao: [
      "Jogo narrativo em que o jogador conecta memórias fragmentadas para reconstruir uma história não-linear.",
      "O design explora mecânicas de escolha e consequência aliadas a uma estética minimalista."
    ],
    galeria: [71, 72, 73, 74]
  },
  {
    id: "08",
    titulo: "Deriva Urbana",
    alunos: "Mariana Costa",
    disciplina: "Projeto Temático",
    semestre: "2023/2",
    tipo: "Fotografia / Imagem",
    seed: 80,
    tags: ["Fotografia", "Urbano"],
    orientador: "Prof. Me. Otávio Bertoluci",
    descricao: [
      "Registro fotográfico de percursos aleatórios pela cidade, inspirado no conceito situacionista de deriva.",
      "As imagens capturam o acaso, a textura e o ritmo do espaço urbano."
    ],
    galeria: [81, 82, 83, 84]
  },
  {
    id: "09",
    titulo: "Raízes — Documentário Sonoro",
    alunos: "Isabela Freitas",
    disciplina: "Hipermídia",
    semestre: "2023/2",
    tipo: "Áudio",
    seed: 90,
    tags: ["Áudio", "Documental"],
    orientador: "Profa. Dra. Cláudia Reinaldo",
    descricao: [
      "Documentário sonoro que reúne depoimentos de imigrantes e seus descendentes sobre pertencimento e memória.",
      "A montagem entrelaça vozes, silêncios e ambiências para construir uma narrativa afetiva."
    ],
    galeria: [91, 92, 93, 94]
  },
  {
    id: "10",
    titulo: "Teia — App de Rede Criativa",
    alunos: "Thiago Moraes",
    disciplina: "Projeto Temático",
    semestre: "2024/2",
    tipo: "App / Software",
    seed: 100,
    tags: ["App", "UX"],
    orientador: "Prof. Dr. Henrique Vasconcelos",
    video: "dQw4w9WgXcQ",
    descricao: [
      "Protótipo de aplicativo que conecta estudantes de criação para colaborações em projetos.",
      "O trabalho parte de pesquisa com usuários para desenhar fluxos, wireframes e um protótipo navegável."
    ],
    galeria: [101, 102, 103, 104]
  },
  {
    id: "11",
    titulo: "Crônicas do Pixel",
    alunos: "Pedro Alves",
    disciplina: "Narrativa Digital",
    semestre: "2024/1",
    tipo: "Narrativa / Ficção",
    seed: 110,
    tags: ["Narrativa", "Ficção"],
    orientador: "Profa. Dra. Cláudia Reinaldo",
    descricao: [
      "Coletânea de contos hipertextuais ambientados em um mundo digital em ruínas.",
      "Cada crônica ramifica em finais distintos conforme os caminhos escolhidos pelo leitor."
    ],
    galeria: [111, 112, 113, 114]
  },
  {
    id: "12",
    titulo: "Voz da Margem — Podcast Documental",
    alunos: "Sofia Bernardi",
    disciplina: "Produção Audiovisual",
    semestre: "2023/1",
    tipo: "Áudio",
    seed: 120,
    tags: ["Podcast", "Áudio"],
    orientador: "Prof. Me. Otávio Bertoluci",
    descricao: [
      "Série de podcast documental sobre comunidades à margem dos grandes centros.",
      "Cada episódio combina entrevista, narração autoral e desenho sonoro."
    ],
    galeria: [121, 122, 123, 124]
  },
  {
    id: "13",
    titulo: "Airboeing A720neo",
    alunos: "Diego Luiz Dall Agnol",
    disciplina: "Modelagem e Animação",
    semestre: "2024/2",
    tipo: "Modelagem / Animação",
    imgLocal: true,
    tags: ["Modelagem", "Blender", "3D"],
    orientador: "Prof. Dr. Marcelo Luís Fardo",
    descricao: [
      "A mistura do Boeing 737 com o Airbus A320neo.",
      "Trabalho como requisto para avaliação da tarefa final da disciplina de modelagem digital do curso de Criação Digital da Universidade de Caxias do Sul",
      "O projeto foi desenvolvido no software Blender, utilizando técnicas de modelagem poligonal e texturização para criar um modelo 3D detalhado da aeronave.",
      "O modelo pode ser acessado no <a href='https://sketchfab.com/3d-models/airboeing-a720neo-65af2dfda405426ea8f945f222e9e30b' target='_blank' rel='noopener'>Sketchfab</a>."
    ],
    galeria: ["img/projetos/13/1.jpg", "img/projetos/13/2.jpg"]
  },
  {
    id: "14",
    titulo: "Bomb Kick Party",
    alunos: "Pedro Henrique Galvão",
    disciplina: "Game Design",
    semestre: "2024/1",
    tipo: "Jogo",
    imgLocal: true,
    tags: ["Game", "Design", "Boardgame"],
    orientador: "Profa. Dra. Marcelo Luís Fardo",
    descricao: [
      "Jogo de tabuleiro competitivo em que os jogadores controlam personagens que devem plantar bombas para eliminar adversários e conquistar territórios.",
      "O projeto pode ser acessado na <a href='https://tabletopia.com/players/id3786199/k3eqkt' target='_blank' rel='noopener'>Tabletopia</a>."
    ],
    galeria: ["img/projetos/14/1.jpeg", "img/projetos/14/2.jpeg", "img/projetos/14/3.jpeg", "img/projetos/14/4.jpeg"]
  },
  {
    id: "15",
    titulo: "Sufoco - Director's Cut",
    alunos: ["Pedro Henrique Galvão", "Willian Meurer", "Caio Cruz"],
    disciplina: "Produção Audiovisual",
    semestre: "2023/2",
    tipo: "Vídeo / Motion",
    tags: ["Video", "Motion"],
    orientador: "Prof. Juliano Trajano",
    video: "2lTVmyxA3nU",
    imgLocal: true,
    descricao: [
      "Um trabalho de Faculdade pra treinar as habilidades artísticas.",
      "Versão do Diretor porque a original estava faltando alguns retoques finais."
    ],
  },
  {
    id: "16",
    titulo: "Animação - A Caverna (2024)",
    alunos: ["Diego Luiz Dall Agnol", "Diego Campagnolo", "Gabriel Spironello"],
    disciplina: "Projeto Temático",
    semestre: "2024/4",
    tipo: "Modelagem / Animação",
    imgLocal: true, 
    tags: ["Video", "Animação", "Modelagem 3D"],
    orientador: "Prof. Dr. Marcelo Luís Fardo",
    video: "yp3bz5hKeuY",
    descricao: [
      "\"Na caverna que você tem medo de entrar está o tesouro que você procura\" - Joseph Campbell.",
      "Projeto de animação digital realizado pelos estudantes de Criação Digital Diego Luiz Dall´ Agnol, Diego Campagnolo e Gabriel Spironello Picolotto para a disciplina de Projeto Temático: Animação Digital."
    ],
  },
  {
    id: "17",
    titulo: "Patty Wagon (Siri Móvel)",
    alunos: "Eduardo Pintos",
    disciplina: "Modelagem e Animação",
    semestre: "2023/2",
    tipo: "Modelagem / Animação",
    seed: 170,
    imgLocal: true,  
    tags: ["3D", "Modelagem", "Animação"],
    orientador: "Prof. Dr. Marcelo Luís Fardo",
    descricao: [
      "Reconstrução tridimensional do Patty Wagon (Sirí Móvel), o icônico veículo-lanche do universo de Bob Esponja, desenvolvida como exercício de modelagem e animação 3D.",
      "O projeto trabalha topologia, texturização e composição de elementos característicos do design original: como as rodas, a bandeirola e os detalhes de carroceria."
    ],
    galeria: ["img/projetos/17/1.jpg", "img/projetos/17/2.jpg", "img/projetos/17/3.jpg"]
  },
  {
    id: "18",
    titulo: "Sonhando com a Terra-Média",
    alunos: "Eduardo Pintos",
    disciplina: "Narrativa Digital",
    semestre: "2026/1",
    tipo: "Narrativa / Ficção",
    seed: 180,
    imgLocal: true, 
    tags: ["Twine", "Ficção", "Comédia", "Ramificado"],
    orientador: "Profa. Dra. Elisa Boff",
    descricao: [
      "Narrativa interativa em Twine que reimagina, em tom de comédia, os bastidores de uma jornada épica inspirada no universo de fantasia de Senhor dos Anéis. O jogador acompanha decisões absurdas da trama.",
      "O projeto explora hipertexto ramificado, com múltiplos caminhos que dependem das escolhas do leitor, trabalhando estrutura de nós, variáveis de estado e coerência narrativa entre passagens."
    ],
    galeria: ["img/projetos/18/1.png", "img/projetos/18/2.png", "img/projetos/18/3.png"]
  },
  {
    id: "19",
    titulo: "Messenera",
    alunos: "Eduardo Pintos",
    disciplina: "Game Design",
    semestre: "2026/1",
    tipo: "Jogo",

    imgLocal: true, 
    tags: ["Unity", "Pixel Art", "Filosofia", "Narrativa"],
    orientador: "Prof. Dr. Marcelo Luis Fardo",
    descricao: [
      "Messenera é um jogo de aventura narrativa em pixel art no qual o jogador assume o papel de um mensageiro que precisa decidir entre entregar, ler ou reter uma carta lacrada. Cada escolha reverbera no destino dos habitantes de uma cidade isolada.",
      "O sistema central calcula um perfil ético dinâmico com base em três correntes filosóficas: o dever kantiano, o utilitarismo de Stuart Mill e a ética das virtudes de Aristóteles, culminando em um julgamento final que revela o alinhamento moral construído ao longo da jornada.",
      "Desenvolvido em Unity, com arte em pixel art 32x32 feita em Aseprite, o projeto foi produzido como Trabalho de Conclusão de Curso (TCC)."
    ],
    galeria: ["img/projetos/19/1.png", "img/projetos/19/2.png", "img/projetos/19/3.png", "img/projetos/19/4.png"]
  }
];

/* Mapa tipo de mídia → classe de cor do badge (ver css/style.css) */
const TIPO_CLASSE = {
  "Web / Hipermídia":      "tipo-web",
  "Vídeo / Motion":        "tipo-video",
  "Fotografia / Imagem":   "tipo-foto",
  "Design Gráfico":        "tipo-design",
  "Narrativa / Ficção":    "tipo-narrativa",
  "Jogo":                  "tipo-jogo",
  "Áudio":                 "tipo-audio",
  "App / Software":        "tipo-app",
  "Modelagem / Animação":  "tipo-3d"
};

function tipoClasse(tipo) {
  return TIPO_CLASSE[tipo] || "tipo-web";
}

IMAGENS LOCAIS DOS PROJETOS
===========================

Por padrão o site usa imagens do picsum.photos (placeholders). Para usar
imagens REAIS de um projeto, faça duas coisas:

1) No arquivo js/dados.js, adicione  imgLocal: true  no projeto desejado. Ex.:
      {
        id: "01",
        titulo: "Explócus",
        imgLocal: true,        <-- liga as imagens locais deste projeto
        ...
      }

2) Coloque os arquivos nesta pasta, dentro de uma subpasta com o ID do projeto:

   img/projetos/01/capa.jpg     -> capa do card + imagem grande (hero) da página
   img/projetos/01/1.jpg        -> 1ª imagem da galeria
   img/projetos/01/2.jpg        -> 2ª imagem da galeria
   img/projetos/01/3.jpg        -> 3ª imagem da galeria
   img/projetos/01/4.jpg        -> 4ª imagem da galeria
   img/projetos/01/aluno.jpg    -> foto do aluno (opcional)

   (a quantidade de imagens da galeria segue o tamanho da lista "galeria" no dados.js)

OBSERVAÇÕES
-----------
- Use sempre .jpg com esses nomes. Se preferir outro nome/extensão, dá pra
  apontar o caminho exato no dados.js com os campos:
      capa: "img/projetos/01/minha-capa.png",
      hero: "img/projetos/01/banner.png",
      alunoFoto: "img/projetos/01/diego.png",
      galeria: ["img/projetos/01/a.png", "img/projetos/01/b.png"]

- Se um arquivo local não for encontrado, o site cai automaticamente no
  picsum (a imagem não fica quebrada) — útil enquanto você ainda não subiu tudo.

- Projetos SEM imgLocal continuam usando picsum normalmente.

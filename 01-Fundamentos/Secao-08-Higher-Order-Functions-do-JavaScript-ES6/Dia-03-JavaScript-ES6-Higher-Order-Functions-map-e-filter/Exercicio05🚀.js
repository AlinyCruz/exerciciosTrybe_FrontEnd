const { books } = require('./Exercicio01🚀');

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// De olho na dica 👀: cada inicial termina com um ponto.

// const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name[1] === '.'
    && book.author.name[4] === '.'
    && book.author.name[7] === '.'
  )).name;
}
console.log(authorWith3DotsOnName()); // extraido do gabarito
//Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.
//Exemplo: longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const contaPalavra = (param) => {
  const palavra = param.split(' ');
  let maiorPalavra = 0;
  let resultado = ' ';
  
  for (const key of palavra) {
    if (key.length > maiorPalavra) {
      maiorPalavra = key.length;
      resultado = key;
    }
  }
  return resultado;
}
console.log(contaPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu'));

//Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().
// Extarido do gabarito:

  const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

  console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));

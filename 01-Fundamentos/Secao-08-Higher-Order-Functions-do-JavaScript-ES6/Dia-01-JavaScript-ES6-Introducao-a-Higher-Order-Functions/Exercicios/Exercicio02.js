// Sorteador de loteria
// Desenvolva uma HOF que retorna o resultado de um sorteio.
//Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
//O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

const sorteio = (numeroJogador, numeroSorteio) =>  numeroJogador === numeroSorteio;

const conferindoJogo = (numeroJogador, funcao) => {
  let numero = Math.floor((Math.random() * 5) + 1);
  return funcao(numeroJogador, numero) ? `Parabéns você ganhou, o número sorteado foi o ${numero}.` : `Tente novamente, o número sorteado foi o ${numero}.`;
};

console.log(conferindoJogo(2, sorteio));

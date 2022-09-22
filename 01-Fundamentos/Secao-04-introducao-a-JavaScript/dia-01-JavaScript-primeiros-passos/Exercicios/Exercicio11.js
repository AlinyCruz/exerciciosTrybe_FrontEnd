// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

const peca = "REI";

switch (peca.toLowerCase()) {
    case 'rei': console.log("Rei -> anda para todos os lados, de uma em uma casa");
        break;

    case 'rainha': console.log("Rainha -> anda para todos os lados, várias casas");
        break;

    case 'cavalo': console.log("Cavalo -> anda em L, várias casas");
        break;

    case 'torre': console.log("Torre -> anda em para frente e para trás, várias casas");
        break;

    case 'bispo': console.log("Bispo -> anda em diagonal, várias casas");
        break;

    case 'peao': console.log("Peão -> anda para frente de uma em uma casa");
        break;

    default: console.log("erro, peça invalida");
        break;
}
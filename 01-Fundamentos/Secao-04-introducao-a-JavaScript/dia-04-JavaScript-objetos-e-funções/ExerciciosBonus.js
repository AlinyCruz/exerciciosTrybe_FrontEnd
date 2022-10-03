//Exercício 1

//(Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
//Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
//Dicas:
//Uma string é um array de caracteres, então cada elemento do array é uma letra.
//O valor de cada numeral romano é:
//| I   | 1    |
//| --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

//Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
//Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados.
//Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, 
//ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.
const romanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function numerosRomanos(number) {
    number = number.toLowerCase();

    const len = number.length;
    let soma = romanos[number[len - 1]];
    let atual = romanos[number[len - 1]];

    for (let i = 2; i<= len; i += 1) {
        const prox = romanos[number[len - i]];

        if (atual <= prox) {
            soma += prox;
        } else {
            soma -= prox;
        }
        atual = prox;
    }

    return soma;
}

console.log(numerosRomanos('MMXVIII')); // 2018
console.log(numerosRomanos('VI')); // 6
console.log(numerosRomanos('IV')); // 4

//exercicio extraido do gabarito


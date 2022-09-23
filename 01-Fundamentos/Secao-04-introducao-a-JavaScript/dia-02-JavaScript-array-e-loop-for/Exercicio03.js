let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index]; //<--- soma += numbers[index];
}
console.log(soma);

// Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let media = 0;
for (let index = 0; index < numbers.length; index += 1) {
    media = soma / numbers.length;
}
console.log(media);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (media > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }
}
console.log(`O maior valor é o ${maiorValor}!`);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let impares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impares = impares + 1; // ou impares += 1;
    } //console.log(`A quantidade de valores impares são ${impares}!`); (6)
}
if (impares === 0) { //caso seja 0, é por que nenhum valor impar foi encontrado.
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(`O total de números impares são: ${impares}`);
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorValor = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
        if(numbers[index] < menorValor) {
              menorValor = numbers[index]
        }
}
console.log(menorValor);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];

for (let index = 1; index <= 25; index += 1) {
    array.push(index);
}
console.log(array);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < array.length; index += 1) {
    let divisao = array[index] / 2;
    console.log(divisao);
}
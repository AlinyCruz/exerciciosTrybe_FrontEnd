//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja,
//é divisível por 1 e por ele mesmo. Sabendo disso,
//escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let numerosPrimos = [];


for (let inicio = 2; inicio <= 50; inicio += 1) {
    let primo = true;
    for (let divisor = 2; divisor < inicio; divisor += 1) {
        if (inicio % divisor === 0) {
            primo = false;
        }
    }

    if (primo) {
        numerosPrimos = inicio;
    }
}

console.log(numerosPrimos);
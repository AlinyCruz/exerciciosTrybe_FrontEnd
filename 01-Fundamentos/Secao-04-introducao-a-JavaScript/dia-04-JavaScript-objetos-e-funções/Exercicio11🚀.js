//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.

//Valor esperado no retorno da função: 4.

function inteiros(array) {
    let maior = 0;
    for (let i in array) {

        if (array[maior] < array[i]) {
            maior = i;
        }
    }
    console.log(maior);
}
inteiros([2, 3, 6, 7, 10, 1])

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3];.
//Valor esperado no retorno da função: 6.

function inteiros(array) {
    let menor = 0;
    for (let i in array) {

        if (array[menor] > array[i]) {
            menor = i;
        }
    }
    console.log(menor);
}
inteiros([2, 4, 6, 7, 10, 0, -3])

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
//Valor esperado no retorno da função: Fernanda.

function nomes(array) {
    let maiorNome = array[0];
    for (let i in array) {

        if (maiorNome.length < array[i].length) {
            maiorNome = array[i];
        }
    }
    return maiorNome;
}
console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3];.
//Valor esperado no retorno da função: 2.

function inteiros(array) {
    let repetido = array[0];

    for (let i in array) {

        if (repetido === array[i]) {
            repetido = array[i];

        }
    } console.log(repetido);
}
inteiros([2, 3, 2, 5, 8, 2, 3]);


//Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5.
//Valor esperado no retorno da função: 1+2+3+4+5 = 15.
function inteiro(n) {
    let soma = 0;

    for (let i = 1; i <= n; i += 1) {
        soma = soma + i;

    }
    return soma;
}
inteiro([5]);


//Crie uma função que receba uma string word e outra string ending.
//Verifique se a string ending é o final da string word.
//Considere que a string ending sempre será menor que a string word.
//Valor de teste: 'trybe' e 'be' //Valor esperado no retorno da função: true
//verificaFimPalavra('trybe', 'be'); //Retorno esperado: true
//verificaFimPalavra('joaofernando', 'fernan'); //Retorno esperado: false

function string(word, ending) {

    for (let i = 0; i <= word.length; i += 1) {
        if (word.length > ending.length) {
            if ((word[word.length - 2] + word[word.length - 1]) == ending) {
                return (true);
            } else {
                return (false);
            }
        }
    }

}
string('joaofernando', 'fernan');

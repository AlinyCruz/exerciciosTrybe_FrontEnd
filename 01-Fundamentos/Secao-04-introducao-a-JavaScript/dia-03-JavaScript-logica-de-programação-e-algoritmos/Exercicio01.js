//ALGORITIMOS:

//Utilizando o array abaixo, percorra;o somando todos os valores.
//Caso o valor final seja maior que 15, imprima-o. 
//Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:


// 1º - Devemos utilizar o array fruits;
let fruits = [3, 4, 10, 1, 12];
let soma = 0;
// 2º - O termo “percorra“ indica uma estrutura de repetição, ou loop;
for (let index = 0; index < fruits.length; index += 1) {
// 3º - “somando todos os valores“ mostra que devemos ter uma variável que guarda o valor da soma dos valores;
    soma += fruits[index];
}
// 4º O termo “caso“ indica uma estrutura condicional, ou if;
if (soma > 15) {
// 5º “imprima o valor final“ indica um console.log;
    console.log(soma)
} else {
    console.log('valor menor que 16');
}
//---------------------------------------------------------------//
const n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
    resultado -= index;
};
console.log(resultado);

// index ; index <= 9 ; index = index + 1 -> (resultado = resultado - index = resultado)
//   0   ;   0   <= 9 ;   0   =   0   + 1 -> (  100     =   100     -   0   =   100    )
//   1   ;   1   <= 9 ;   1   =   1   + 1 -> (  100     =   100     -   1   =    99    )
//   2   ;   2   <= 9 ;   2   =   2   + 1 -> (   99     =    99     -   2   =    97    )
//   3   ;   3   <= 9 ;   3   =   3   + 1 -> (   97     =    97     -   3   =    94    )
//   4   ;   4   <= 9 ;   4   =   4   + 1 -> (   94     =    94     -   4   =    90    )
//   5   ;   5   <= 9 ;   5   =   5   + 1 -> (   90     =    90     -   5   =    85    )
//   6   ;   6   <= 9 ;   6   =   6   + 1 -> (   85     =    85     -   6   =    79    )
//   7   ;   7   <= 9 ;   7   =   7   + 1 -> (   79     =    79     -   7   =    72    )
//   8   ;   8   <= 9 ;   8   =   8   + 1 -> (   72     =    72     -   8   =    64    )
//   9   ;   9   <= 9 ;   9   =   9   + 1 -> (   64     =    64     -   9   =    55    )

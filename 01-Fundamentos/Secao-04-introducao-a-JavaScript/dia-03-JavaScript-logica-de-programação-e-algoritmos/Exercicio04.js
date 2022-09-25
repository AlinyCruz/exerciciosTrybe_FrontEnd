let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

//Utilize a estrutura de repetição for para escrever dois algoritmos:
//um que retorne a maior palavra desse array e outro que retorne a menor.
//Considere o número de caracteres de cada palavra.

for (let index = 0; index < array.length; index+= 1) {
    if (array[index].length > maior.length) {
        maior = array[index];
    }
}   console.log(maior);

for (let index = 0; index < array.length; index+= 1) {
    if (array[index].length < menor.length) {
        menor = array[index];
    }
}   console.log(menor);


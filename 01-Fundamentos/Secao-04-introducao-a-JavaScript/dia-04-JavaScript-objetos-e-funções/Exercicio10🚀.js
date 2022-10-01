//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
//Exemplo de palíndromo: arara
//verificaPalindrome('arara')
//Retorno esperado: true
//verificaPalindrome('desenvolvimento')
//Retorno esperado: false

function verificaPalindrome(word) {
    for (index in word) {
        if (word[index] != word[(word.length - 1) - index]) {
            return false;
        }
        return true;
    }
}
function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        return true;
      } else {
        return false;
      }
}

console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('desenvolvimento')); //false

//exercicios do gabarito

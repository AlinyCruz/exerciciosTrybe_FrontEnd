let word = 'trybe';

// Passo 1. Use o método split() para retornar um novo array
let splitString = word.split(""); // let splitString = "trybe".split("");
// ["t", "r", "y", "b", "e"]
console.log('Passo 1 ->', splitString);
 
// Passo 2. Use o método reverse() para inverter o array recém-criado
let reverseArray = splitString.reverse(); // let reverseArray = ["t", "r", "y", "b", "e"].reverse();
// ["e", "b", "y", "r", "t"]
console.log('Passo 2 ->', reverseArray);

// Passo 3. Use o método join() para unir todos os elementos do array em uma string
let joinArray = reverseArray.join(""); // let joinArray = ["e", "b", "y", "r", "t"].join("");
// "ebyrt"
console.log('Passo 3 ->', joinArray);
    
// Passo 4. Retorne a string invertida
console.log('Passo 4 ->', joinArray); // "ebyrt"

//ou let palavraInversa = ' ';
// palavraInvertida = word.split('').reverse().join('');

//ou let reverseWord = '';
//for (let index = 0; index < word.length; index += 1) {
//reverseWord = reverseWord + word[word.length - 1 - index];
//}
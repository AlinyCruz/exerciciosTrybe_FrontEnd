const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

// Estrutura forEach ----> array.forEach(valor, indice, array);
numbers.forEach(multipliesFor2);

/////////////////////////////////////////////////////////////////////////

const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase(); // toUpperCase ---> retorna o valor da string original convertido em letras maiúsculas.
};

// Estrutura forEach ----> array.forEach(valor, indice, array);
names.forEach(convertToUpperCase);

console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]


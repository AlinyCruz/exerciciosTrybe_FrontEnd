// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;

// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); 
// retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().
//Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
  for (let i = 1; i < array.length; i += 1) { // primeiro loop 

    for (let i2 = 0; i2 < i; i2 += 1) { // segundo loop

      if (array[i] < array[i2]) { // condição - se o primeiro loop for menor que o segundo loop
        let position = array[i]; // variável position declarada com o valor da posição do primeiro loop
        array[i] = array[i2]; // primeiro loop reatribuido com valor da posição do segundo loop
        array[i2] = position; // segundo loop reatribuido com valor da variável position
      }
    }
  }
  return `Os números ${array} se encontram ordenados de forma crescente!`; // retornar o array na ordem
};


console.log(sortOddsAndEvens(oddsAndEvens));

// UTILIZANDO O SORT():

oddsAndEvens.sort((a,b) => a-b);

console.log(oddsAndEvens);

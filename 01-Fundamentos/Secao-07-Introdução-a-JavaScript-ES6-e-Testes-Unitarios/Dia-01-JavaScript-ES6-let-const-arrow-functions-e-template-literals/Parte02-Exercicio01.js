//Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions
//(Lembre-se de armazenar a função utilizando o tipo de variável correta). Exemplo: 4! = 4 * 3 * 2 * 1 = 24

const factorial = (n) => {
  //Dentro da função crie uma variável result, que será o retorno final da função.
  let result = n;
  //Crie a lógica para retornar o fatorial de N!.
  for (let i = n - 1; i >= 1; i-= 1) {
    result = result * i;
  } 
  //Imprima no terminal “Esse é o fatorial resultado da função“ (Lembre-se de utilizar template literals nesse momento).
  // console.log(`${result}, esse é o fatorial do resultado da função!`);  
}
factorial(4);

//Spoiler: É possível resolver com uma linha usando ternary operator.
// Operador ternário

const factorial = n => n > 1 ? n * factorial(n-1) : 1;

console.log(factorial(4));

//Bônus: tente fazer o mesmo exercício de forma recursiva.

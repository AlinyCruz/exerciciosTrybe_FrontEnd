// Crie uma função que retorne a string 'Acordando!!';
const acorda = () => {
  return 'Acordando!!';
}

// Crie outra função que retorne a string 'Bora tomar café!!';
const cafe = () => {
  return 'Bora tomar café!!';
}

// Crie mais uma função que retorne a string 'Partiu dormir!!';
const dormir = () => {
  return 'Partiu dormir!!';
}

// Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
const doingThings = (callback) => {
  return callback;
}

// Ao chamar a função doingThings:
console.log(doingThings(dormir()));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
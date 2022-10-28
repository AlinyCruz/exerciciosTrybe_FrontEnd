// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; 
// faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// Faça uma lista com as suas frutas favoritas

const specialFruit = ['banana', 'morango', 'pera', 'maçã', 'uva', 'carambola'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'leite em pó', 'palitinho'];

const fruitSalad = (fruit, additional) => {
  const juncaoFrutas = [...fruit, ...additional];
  return juncaoFrutas
};

console.log(fruitSalad(specialFruit, additionalItens));
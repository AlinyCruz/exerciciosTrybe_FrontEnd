//Na estrutura do script (dentro do HTML ou em um arquivo de JavaScript ):
//Crie uma variável clickCount que irá acumular o número de clicks do botão;

//Dica: Nesse exercício utilize document. getElementById para retornar o elemento do DOM que deseja.
const contador = document.getElementById('contador');
const botao = document.getElementById('btn');

let clickCount = 0;

//Crie a lógica do evento, para que a cada click no botão, a variável seja atualizada com acréscimo de valor 1. 
//Exemplo: Caso não tenha sido realizado nenhum click, o valor renderizado será de 0.
//Caso o botão seja clicado 5 vezes o valor renderizado no HTML será de 5.

botao.addEventListener('click', () => contador.innerHTML = clickCount+= 1);


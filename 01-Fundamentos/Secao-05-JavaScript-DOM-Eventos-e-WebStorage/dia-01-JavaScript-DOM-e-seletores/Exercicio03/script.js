//Aqui você vai modificar os elementos já existentes utilizando apenas as funções:

//  - document.getElementById()
//  - document.getElementsByClassName()
//  - document.getElementsByTagName()
     
// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos.
// (Não gaste tempo pensando no texto e sim realizando o exercício)
function meuFuturo(){
const paragrafo2 = document.getElementsByTagName('p')[1];
paragrafo2.innerText = 'Bem de vida, realizada profissionalmente e financeiramente.'
} meuFuturo();
      
// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function corTrybe(){
const mainContent = document.getElementsByClassName('main-content')[0];
mainContent.style.background = 'rgb(76,164,109)';
} corTrybe();

// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
function corQuadrado(){
const centerContent = document.getElementsByClassName('center-content')[0];
centerContent.style.background = 'white';
} corQuadrado();

// 4. Crie e execute uma função que corrija o texto da tag <h1>.
function textoTag(){
const titulo = document.getElementsByTagName('h1')[0];
titulo.innerText = 'Exercício - JavaScript'
} textoTag();

// 5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
function textoMaiusculo (){
const paragrafo1 = document.getElementsByTagName('p')[0];
paragrafo1.innerText = paragrafo1.innerText.toUpperCase();
} textoMaiusculo();

// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
function exibeParagrafo (){
const paragrafos = document.getElementsByTagName('p');
    for(i = 0; i < paragrafos.length; i += 1) {
        console.log(paragrafos[i].innerText)
    }
} exibeParagrafo();

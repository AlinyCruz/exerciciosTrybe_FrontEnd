//Acesse o elemento elementoOndeVoceEsta.
document.querySelector('#elementoOndeVoceEsta'); // acessa o 2º filho do pai 

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = document.querySelector('#elementoOndeVoceEsta').parentElement; // acessa o pai
pai.style.color = 'blue';
pai.style.fontSize = '30px';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
//Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilho = document.querySelector('#primeiroFilho');
primeiroFilho.innerHTML = 'Conteúdo exclusivo para estudantes da Trybe.';

//Acesse o primeiroFilho a partir de pai.
document.querySelector('#pai').firstElementChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.querySelector('#elementoOndeVoceEsta').nextSibling;

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

//Agora acesse o terceiroFilho a partir de pai.
document.querySelector('#pai').childNodes[5];


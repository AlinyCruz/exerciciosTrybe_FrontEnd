//Exercicios parte 01

//Acesse o elemento elementoOndeVoceEsta.
const ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta'); // acessa o 2º filho do pai 

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = document.querySelector('#elementoOndeVoceEsta').parentElement; // acessa o pai
pai.style.color = 'magenta';
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

//Exercicios parte 02

//Crie um irmão para elementoOndeVoceEsta.
const newSection = document.createElement('section');
pai.appendChild(newSection);

newSection.innerText = 'Oi sou seu novo filho';

//Crie um filho para elementoOndeVoceEsta.
const newDiv = document.createElement('div');
ondeVoceEsta.appendChild(newDiv);

newDiv.innerText = 'Oi sou sua nova filha';

//Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
const newArticle = document.createElement('article');
primeiroFilhoDoFilho.appendChild(newArticle);

newArticle.innerText = 'Oi sou a sua caçula';

//A partir desse filho criado, acesse terceiroFilho.
newArticle.setAttribute('id','son');
document.querySelector('#primeiroFilhoDoFilho');

//Exercicios parte 03

//Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
const todosFilhos = pai.childNodes;
for (let index = todosFilhos.length - 1; index >= 0; index -= 1) {
    const filhoAtual = todosFilhos[index];
    if (filhoAtual.id !== 'elementoOndeVoceEsta') { // Verifica se o id do filho atual é diferente de 'elementoOndeVoceEsta'
        filhoAtual.remove(); // Remove o filhoAtual
      }
}
const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho'); // Recupera o elemento com o id segundoEUltimoFilhoDoFilho
segundoEUltimoFilhoDoFilho.remove(); // Remove o segundo filho do filho


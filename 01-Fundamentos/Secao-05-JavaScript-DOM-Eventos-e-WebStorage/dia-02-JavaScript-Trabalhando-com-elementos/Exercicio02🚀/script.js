//Exercicio parte 01:
//Comece criando algumas coisas:

//Adicione a tag h1 com o texto Exercício - JavaScript DOM como filho da tag body;
const h1Elemento = document.createElement('h1');
h1Elemento.innerText = 'Exercício - JavaScript DOM';
document.body.appendChild(h1Elemento);

//Adicione a tag main com a classe main-content como filho da tag body;
const tagMain = document.createElement('main');
document.body.className = 'main-content';
document.body.appendChild(tagMain);

//Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const tagSection = document.createElement('section');
tagSection.className = 'center-content';
tagMain.appendChild(tagSection);

//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const tagP = document.createElement('p');
tagP.innerText = 'Aprendendo DOM';
tagSection.appendChild(tagP);

//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
tagSection.className = 'left-content';

//Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const tagSection2 = document.createElement('section');
tagSection2.className = 'right-content';
tagMain.appendChild(tagSection2);

//Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const img = document.createElement('img');
img.className = 'small-image';
img.src = 'https:picsum.photos/200';
tagSection.appendChild(img);

//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const elementoUl = document.createElement('ul');
tagSection2.appendChild(elementoUl);
const listaExtenso = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
for (let i in listaExtenso) {
    const elementoLi = document.createElement('li');
    elementoLi.innerHTML = listaExtenso[i];
    elementoUl.appendChild(elementoLi);
}

//Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let i = 0; i < 3; i += 1) {
    const tagH3 = document.createElement('h3');
    tagH3.innerHTML = 'Index' + ' ' + i;
    tagMain.appendChild(tagH3);
}

//Exercicio parte 02:
//Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:

//Adicione a classe title na tag h1 criada;
h1Elemento.className = 'title';

//Adicione a classe description nas 3 tags h3 criadas;
const elementoH3 = document.getElementsByTagName('h3');
for (let i = 0; i < 3; i += 1) {
    elementoH3[i].className = 'description';
}

//Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
const section1 = document.getElementsByClassName('left-content')[0];
tagMain.removeChild(section1);

//Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;
const section2 = document.getElementsByClassName('right-content')[0];
section2.style.marginRight = 'auto';

//Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
const paiSection = document.getElementsByClassName('center-content')[0];
paiSection.parentNode.style.background = 'red';

//Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
const ul = document.getElementsByTagName('ul')[0];
ul.lastChild.remove();
ul.lastChild.remove();
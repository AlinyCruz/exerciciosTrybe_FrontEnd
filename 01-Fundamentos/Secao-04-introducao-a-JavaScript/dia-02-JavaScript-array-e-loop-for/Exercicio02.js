let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index+= 1) {
    console.log(groceryList[index]);
}

//------------------------------------------------------------//

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

names.push('Aline');

for (let nomes of names) {
    console.log(nomes);
}

//------------------------------------------------------------//

function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();
}
console.log(d2);
const number1 = 201;
const number2 = 114;
const number3 = 275;

if (number1 > number2) {
    console.log(`${number1} é o maior número!`);
} else {
    console.log(`${number2} é o maior número!`);
}

//-------------------------------------------------//

if (number1 > number2 && number1 > number3) {
    console.log(`${number1} é o maior número!`);
} else if (number2 > number1 && number2 > number3) {
    console.log(`${number2} é o maior número!`);
} else {
    console.log(`${number3} é o maior número!`);
}

//-------------------------------------------------//

if (number1 >= 30 && number1 <= 99) {
    console.log('Resultado negativo');
} else if (number1 >= 100 && number1 <= 200) {
    console.log('Resultado positivo');
} else {
    console.log(0);
}

//-------------------------------------------------//


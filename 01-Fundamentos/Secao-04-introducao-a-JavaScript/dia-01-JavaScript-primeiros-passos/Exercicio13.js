const number1 = 14;
const number2 = 24;
const number3 = 34;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0){
    console.log(true);
} if (number1 % 2 !== 0 && number2 % 2 !== 0 && number3 % 2 !== 0){
    console.log(false);
}

//------------------------------------------------------------------//

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0){
    console.log(true);
} if (number1 % 2 === 0 && number2 % 2 === 0 && number3 % 2 === 0){
    console.log(false);
}

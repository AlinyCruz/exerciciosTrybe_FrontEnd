//Faça um programa que retorne o maior de três números.
//Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorNumero (number1,number2,number3) {
    if(number1 > number2 && number1 > number3){
    return `O número ${number1} é o maior número!` 
    } else if (number2 > number1 && number2 > number3 ){
    return `O número ${number2} é o maior número!`
    } else if (number3 > number1 && number3 > number2 ){
    return `O número ${number3} é o maior número!`
    } else {
    return "Os números são iguais!"    
    }
} console.log(maiorNumero(150,550,250));
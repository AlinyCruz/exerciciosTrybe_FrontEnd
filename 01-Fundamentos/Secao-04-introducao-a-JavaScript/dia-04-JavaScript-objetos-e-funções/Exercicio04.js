//Faça um programa que retorne o maior de dois números.
//Defina, no começo do programa, duas constantes com os valores que serão comparados.

function maiorNumero (number1,number2) {
    if(number1 > number2){
    return `O número ${number1} é o maior número!` 
    } else if (number2 > number1){
    return `O número ${number2} é o maior número!` 
    } else {
    return "Os números são iguais!"    
    }
} console.log(maiorNumero(100,150));
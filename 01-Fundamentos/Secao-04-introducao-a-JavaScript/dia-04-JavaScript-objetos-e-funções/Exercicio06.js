//Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo,
//“negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function resultado (numero) {
    if(numero >= 100 && numero < 150){
    return 'Resultado positivo!'
    } else if (numero < 100 && numero > 20){
    return 'Resultado negativo!'
    } else {
    return 'Zero'
    }
} console.log(resultado(56));
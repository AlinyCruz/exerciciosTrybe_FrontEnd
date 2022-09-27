//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo.
//Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário.
//Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

function triangulo (angulo1,angulo2,angulo3) {
    if(angulo1 + angulo2 + angulo3 === 180){
    return true
    } else if (angulo1 + angulo2 + angulo3 !== 180 && angulo1 + angulo2 + angulo3 > 0){
        return false
    } else if(angulo1 + angulo2 + angulo3 < 0){
        return 'angulo inválido'
    }
} console.log(triangulo(100,40,40));
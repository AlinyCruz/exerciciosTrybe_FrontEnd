const nota = 100;
let mensagem;

//Aprovada - Reprovada - Lista de Espera??//

if (nota >= 80){
    mensagem = 'Parabéns, você foi aprovada(o)!';
} else if (nota < 80 && nota >= 61){
    mensagem = 'Você está na nossa lista de espera';
} else {
    mensagem = 'Você foi reprovada(o)';
}

console.log (mensagem);

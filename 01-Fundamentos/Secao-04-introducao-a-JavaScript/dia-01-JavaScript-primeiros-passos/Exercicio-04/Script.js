const nota = 100;
let mensagem;

//Aprovada - Reprovada - Lista de Espera

if (nota >= 80){
    mensagem = 'Parabéns, você foi aprovada(o)!';
} else if (nota < 80){
    mensagem = 'Você está na nossa lista de espera';
} if (nota < 60){
    mensagem = 'Você foi reprovada(o)';
}

console.log(mensagem);
// Aprovada - Lista - Reprovada //
let resultado = 'lista';
const nome = 'Aline'

switch (resultado) {
    case 'aprovada':
        console.log(`Parabéns ${nome}, você foi aprovada(o)!`);
        break;

    case 'reprovado':
        console.log(`${nome}, você foi reprovada(o).`);
        break;
    
    case 'lista':
        console.log(`${nome}, você está na nossa lista de espera.`);
        break;

    default:
        console.log('Informação incorreta');
        break;
}
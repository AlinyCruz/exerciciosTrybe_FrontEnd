const custoProduto = 100;
const valorVenda = 1000;

const imposto = custoProduto * 0.2;
const custoTotal = imposto + custoProduto;
const lucro = valorVenda - custoTotal;

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero. :white_check_mark:
if (custoProduto > 0 && valorVenda > 0) {
console.log('Lucro em um produto: ', lucro);
console.log('Lucro em 1000 produtos: ', lucro * 1000);
} else {
console.log('Valores inválidos');
} 

// Exercicio elaborado na mentoria
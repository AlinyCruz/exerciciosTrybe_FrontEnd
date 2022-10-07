window.onload = function (){
    botaoEnviar.addEventListener('click', pararPagina);
    botaoApagar.addEventListener('click', limpar);
    termo2.addEventListener('change', habilitaBotao);
}

//Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
function pararPagina (event){
    event.preventDefault();

    const validation = validacao();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
}
const botaoEnviar = document.getElementById('botao-enviar');
// botaoEnviar.addEventListener('click', pararPagina);

//Crie um botão que limpe as informações contidas nos campos.
function limpar (){
    InputEvent.value = ' ';
}
const botaoApagar = document.getElementById('botao-apagar');
// botaoApagar.addEventListener('click', limpar);


//(Bônus) A TrybeTrip precisa muito de fotos para divulgar seus concursos. 
//Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
function habilitaBotao (){
    const termo2 = document.getElementById('termo2');
    botaoEnviar.disabled = !termo2.checked;
}

//(Bônus) Faça a validação dos campos com limite de caracteres.
//Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: ‘Dados Inválidos’.
//Caso contrário, a mensagem ‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’ deverá aparecer na tela.

// Exercicio feito pelo gabarito:

function validacao () {
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.querySelector('#nome').value.length;
    const invalidName = name < 10 || name > 40;
  
    const reason = document.querySelector('#porque').value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
  }



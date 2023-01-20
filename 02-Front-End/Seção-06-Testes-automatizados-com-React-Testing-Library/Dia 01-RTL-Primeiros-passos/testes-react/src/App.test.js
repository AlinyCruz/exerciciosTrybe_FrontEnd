import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});

test('Verificando se existe o campo Email.', () => {
  render(<App />); // renderiza o componente 
  const inputEmail = screen.getByLabelText('Email'); // pega o input e guarda na const
  expect(inputEmail).toBeInTheDocument(); // verifica se o imput renderiza na tela
  expect(inputEmail).toHaveProperty('type', 'email'); // verifica se o input é do tipo email
});

test('Verificando se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button'); // role olha para um elemento (all - todos)
  expect(buttons).toHaveLength(2); // verifica a quantia de elemento com o mesmo nome 
});

test('Verificando se existe um botão de enviar', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send'); // identifica pelo id do elemento
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar'); // verifica o 'valor' que esta dentro do elemento
});

# language: pt

Funcionalidade: Login do usuário

  Cenário: Login com credenciais válidas

    Dado que estou na página de login
    Quando eu digitar um nome de usuário e senha válidos
    E clico no botão de login
    Então devo ser redirecionado para a página de inventário


Cenário: Login com senha inválida
  
    Dado que estou na página de login
    Quando eu digitar um nome de usuário válido e uma senha inválida
    E clico no botão de login
    Então devo ver uma mensagem de erro

Cenário: Login com nome de usuário inválido
  
    Dado que estou na página de login
    Quando eu digitar um nome de usuário inválido e uma senha válida
    E clico no botão de login
    Então devo ver uma mensagem de erro

Cenário: Login com campos vazios
  
    Dado que estou na página de login
    Quando deixo os campos nome de usuário e senha vazios
    E clico no botão de login
    Então devo ver uma mensagem de erro
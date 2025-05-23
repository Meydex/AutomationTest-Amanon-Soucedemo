# language: pt
@requires_cart @login
Funcionalidade: Página Suas informações

  Cenário: Preencher página Suas informações com dados válidos

    Dado que estou na página Suas informações
    Quando preencho primeiro nome, sobrenome e código postal válidos
    E clico em Continue
    Então sou redirecionado para a página de finalização da compra

  Cenário: Deixar campo código postal vazio

    Dado que estou na página Suas informações
    Quando preencho nome, sobrenome e deixo o campo código postal vazio
    E clico em Continue
    Então devo ver a mensagem de erro Error: Postal Code is required

  Cenário: Deixar campo nome vazio

    Dado que estou na página Suas informações
    Quando preencho sobrenome, código postal e deixo o campo nome vazio
    E clico em Continue
    Então devo ver a mensagem de erro Error: First Name is required

  Cenário: Deixar campo sobrenome vazio

    Dado que estou na página Suas informações
    Quando preencho nome, código postal e deixo o campo sobrenome vazio
    E clico em Continue
    Então devo ver a mensagem de erro Error: Last Name is required

  Cenário: Deixar todos os campos vazios

    Dado que estou na página Suas informações
    Quando deixo todos os campos vazios
    E clico em Continue
    Então devo ver a mensagem de erro Error: First Name is required

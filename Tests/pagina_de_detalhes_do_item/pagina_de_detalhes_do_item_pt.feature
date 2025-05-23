# language: pt
 @login
Funcionalidade: Página do item

 Cenário: Adicionar item ao carrinho a partir da página do item

    Dado que estou na página de detalhes do item
    Quando verifico as informações do item
    E clico em "Adicionar ao carrinho"
    Então o item deve ser adicionado ao carrinho de compras

  Cenário: Voltar à página de produtos a partir da página do item

    Dado que estou na página de detalhes do item
    Quando clico em "Voltar aos produtos"
    Então devo retornar à página de produtos

  Cenário: Remover item do carrinho na página do item

    Dado que estou na página de detalhes do item
    Quando verifico que o item já está no carrinho
    E clico em "Remover"
    Então o item deve ser removido do carrinho de compras
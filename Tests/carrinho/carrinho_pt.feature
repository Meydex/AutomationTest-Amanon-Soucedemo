# language: pt
@requires_cart @login
Funcionalidade: Carrinho de compras

  Cenário: Remover produto do carrinho de compras

    Dado que estou na página do carrinho
    Quando tenho um produto adicionado ao carrinho de compras
    E clico em "Remover"
    Então o produto deve ser removido do carrinho de compras

  Cenário: Prosseguir para o checkout

    Dado que estou na página do carrinho
    Quando tenho um produto adicionado ao carrinho de compras
    E clico em "Checkout"
    Então devo ser redirecionado para a página "Suas informações"

  
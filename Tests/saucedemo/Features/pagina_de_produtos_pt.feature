# language: pt

Funcionalidade: Página de produtos (Inventário)

  Cenário: Adicionar item ao carrinho de compras

    Dado que estou na página de produtos
    Quando visualizo o item desejado
    E clico em "Adicionar ao carrinho"
    Então o item deve ser adicionado ao carrinho de compras

  Cenário: Visualizar detalhes do item

    Dado que estou na página de produtos
    Quando clico no item que desejo visualizar
    Então devo ser redirecionado para a página do item

  Cenário: Remover item do carrinho na página de produtos

    Dado que estou na página de produtos
    Quando visualizo um item já adicionado ao carrinho
    E clico em "Remover"
    Então o item deve ser removido do carrinho de compras


  Cenário: Aplicar filtros na página de produtos
  
    Dado que estou na página de produtos
    Quando clico no menu de filtros
    E seleciono um filtro
    Então os itens devem ser reorganizados de acordo com o filtro selecionado

  Cenário: Verificar carrinho de compras

    Dado que estou na página de produtos
    Quando tenho um produto adicionado ao carrinho de compras
    E clico em "Carrinho" no canto superior direito
    Então devo ser redirecionado para a página do carrinho


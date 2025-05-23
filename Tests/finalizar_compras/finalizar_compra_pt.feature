# language: pt
@requires_cart @requires_checkout_step1 @requires_checkout_step2 @login
Funcionalidade: Página "Finalizar compra"

  Cenário: Finalizar compra

    Dado que estou na página "Finalizar compra"
    Quando visualizo as informações e o valor dos produtos
    E clico em "Finalizar"
    Então sou redirecionado para página de confirmação de compra

  Cenário: Cancelar compra

    Dado que estou na página "Finalizar compra"
    Quando visualizo as informações e o valor dos produtos
    E clico em "Cancelar"
    Então sou redirecionado para a página de produtos

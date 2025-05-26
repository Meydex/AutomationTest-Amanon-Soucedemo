module.exports = {
  //default: '--require ./Tests/**/*.js --require ./Tests/world.js --format progress ./Tests/**/*.feature',

  login: '--require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/login/loginsteps_pt.js ./Tests/login/login_pt.feature',

  logout: '--require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/logout/logousteps_pt.js ./Tests/logout/logout_pt.feature',

  pagina_de_detalhes_do_item: '--require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/pagina_de_detalhes_do_item/pagina_de_detalhes_do_itemsteps_pt.js ./Tests/pagina_de_detalhes_do_item/pagina_de_detalhes_do_item_pt.feature',

  carrinho: '--require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/carrinho/carrinhosteps_pt.js ./Tests/carrinho/carrinho_pt.feature',

  finalizar: '--require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/finalizar_compras/finalizar_comprasteps_pt.js ./Tests/finalizar_compras/finalizar_compra_pt.feature',

  produtos: '--require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/pagina_de_produtos/pagina_de_produtosteps_pt.js ./Tests/pagina_de_produtos/pagina_de_produtos_pt.feature',

  informacoes: '--require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/suas_informacoes/suas_informacoes_steps_pt.js ./Tests/suas_informacoes/suas_informações_pt.feature',
};

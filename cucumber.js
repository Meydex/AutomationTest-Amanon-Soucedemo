module.exports = {
  default: '--require ./Tests/support/hooks.js --require ./Tests/support/world.js --format json:./Reports/cucumber_report.json ./Tests/**/*.feature',

  login: '--format json:./Reports/login_report.json --require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/login/loginsteps_pt.js ./Tests/login/login_pt.feature',

  logout: '--format json:./Reports/logout_report.json --require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/logout/logousteps_pt.js ./Tests/logout/logout_pt.feature',

  pagina_de_detalhes_do_item: '--format json:./Reports/pagina_report.json --require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/pagina_de_detalhes_do_item/pagina_de_detalhes_do_itemsteps_pt.js ./Tests/pagina_de_detalhes_do_item/pagina_de_detalhes_do_item_pt.feature',

  carrinho: '--format json:./Reports/carrinho_report.json --require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/carrinho/carrinhosteps_pt.js ./Tests/carrinho/carrinho_pt.feature',

  finalizar: '--format json:./Reports/finalizar_report.json --require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/finalizar_compras/finalizar_comprasteps_pt.js ./Tests/finalizar_compras/finalizar_compra_pt.feature',

  produtos: '--format json:./Reports/produtos_report.json --require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/pagina_de_produtos/pagina_de_produtosteps_pt.js ./Tests/pagina_de_produtos/pagina_de_produtos_pt.feature',

  informacoes: '--format json:./Reports/informacoes_report.json --require ./Tests/support/hooks.js  --require ./Tests/support/world.js --require ./Tests/suas_informacoes/suas_informacoes_steps_pt.js ./Tests/suas_informacoes/suas_informações_pt.feature',
};

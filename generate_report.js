const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './Reports/mesclado',
  reportPath: './Reports/mesclado/html-report',
  openReportInBrowser: false,
  saveCollectedJSON: true,
  pageTitle: 'Relatório de Testes Cucumber',
  reportName: 'Relatório Automatizado - Projeto Soucedemo',
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest'
    },
    device: 'Local machine',
    platform: {
      name: 'windows',
      version: '10'
    }
  }
});

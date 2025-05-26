const fs = require('fs');
const path = require('path');

const reportsDir = path.resolve(__dirname, './Reports');
const outputFile = path.join(reportsDir, 'cucumber_report.json');

async function mergeReports() {
  try {
    const files = fs.readdirSync(reportsDir)
      .filter(file => file.endsWith('_report.json'));

    let mergedData = [];

    for (const file of files) {
      const filePath = path.join(reportsDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const json = JSON.parse(content);

    
      if (Array.isArray(json)) {
        mergedData = mergedData.concat(json);
      } else {
        console.warn(`Arquivo ${file} não é um array, ignorado.`);
      }
    }

    fs.writeFileSync(outputFile, JSON.stringify(mergedData, null, 2));
    console.log(`Relatório mesclado criado em: ${outputFile}`);

  } catch (err) {
    console.error('Erro ao mesclar relatórios:', err);
  }
}

mergeReports();

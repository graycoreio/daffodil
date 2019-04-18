import { Processor, Document } from 'dgeni';

export type GenerateApiListConfiguration = {
  outputFolder: string;
}

export const DefaultGenerateApiListConfiguration : GenerateApiListConfiguration = {
  outputFolder: "api"
} 

export class GenerateApiListProcessor implements Processor {
  name = 'generateApiList';
  $runAfter = ['extra-docs-added'];
  $runBefore = ['rendering-docs'];
  config: GenerateApiListConfiguration;
  
  constructor(config?: GenerateApiListConfiguration) {
    this.config = {...DefaultGenerateApiListConfiguration, ...config};
  }

  $process(docs: Document[]) : Document[] {
    docs.push({
      docType: 'api-list-data',
      template: 'json-doc.template.json',
      path: this.config.outputFolder + '/api-list.json',
      outputPath: this.config.outputFolder + '/api-list.json',
      data: docs
        .filter(doc => doc.docType === 'package')
        .map(getPackageInfo)
    });

    return docs;
  }
}

function getPackageInfo(packageDoc) {
  const packageName = packageDoc.id.replace(/\/src\/index$/, '');
  return {
    name: packageName.toLowerCase(),
    title: packageName,
    path: packageDoc.path,
    items: packageDoc.exports
                  // Ignore internals and private exports (indicated by the ɵ prefix)
                  .filter(doc => !doc.internal && !doc.privateExport)
                  .map(getExportInfo)
                  .sort((a, b) => a.name === b.name ? 0 : a.name > b.name ? 1 : -1)
  };
}

function getExportInfo(exportDoc) {
  return {
    name: exportDoc.name.toLowerCase(),
    title: exportDoc.name,
    path: exportDoc.path,
    docType: getDocType(exportDoc),
    securityRisk: !!exportDoc.security
  };
}

function getDocType(doc) {
  // We map `let` and `var` types to `const`
  if (['let', 'var'].indexOf(doc.docType) !== -1) {
    return 'const';
  }
  return doc.docType;
}
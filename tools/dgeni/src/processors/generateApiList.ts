import { Processor, Document } from 'dgeni';

export type GenerateApiListConfiguration = {
  outputFolder: string;
}

export const DefaultGenerateApiListConfiguration : GenerateApiListConfiguration = {
  outputFolder: "api"
} 

export class GenerateApiListProcessor implements Processor {
  name = 'generateApiList';
  $runAfter = ['docs-processed'];
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
        .map(doc => getPackageInfo(doc))
    });

    return docs;
  }
}

function getPackageInfo(packageDoc) {  
  return {
    ...getExportInfo(packageDoc),
    title: packageDoc.name,
    docType: 'package',
    docTypeShorthand: 'pk',
    items: packageDoc.exports
      .filter(doc => doc.docType !== 'package')
      .map(getExportInfo)
  }
}

function getExportInfo(exportDoc) {
  return {
    id: exportDoc.id,
    title: exportDoc.name,
    path: '/docs/' + exportDoc.path,
    docType: getDocType(exportDoc),
    docTypeShorthand: exportDoc.docType.charAt(0)
  };
}

function getDocType(doc) {
  // We map `let` and `var` types to `const`
  if (['let', 'var'].indexOf(doc.docType) !== -1) {
    return 'const';
  }
  return doc.docType;
}

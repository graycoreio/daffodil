import {
  Processor,
  Document,
} from 'dgeni';

// TODO: combine with generate guide list processor
export class GenerateApiListProcessor implements Processor {
  name = 'generateApiList';
  $runAfter = ['docs-processed'];
  $runBefore = ['rendering-docs'];
  outputFolder: string;

  $process(docs: Document[]): Document[] {
	  docs.push({
	    docType: 'api-list-data',
	    template: 'api-list.template.json',
	    path: this.outputFolder + '/api-list.json',
	    outputPath: this.outputFolder + '/api-list.json',
	    data: docs
	      .filter(doc => doc.docType === 'package')
        // sort alphabetically
        .sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
	      .map(doc => getPackageInfo(doc)),
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
      .map(getExportInfo),
  };
}

function getExportInfo(exportDoc) {
  return {
    id: exportDoc.id,
    title: exportDoc.name,
    path: `/${exportDoc.path}`,
    docType: getDocType(exportDoc),
    docTypeShorthand: exportDoc.docType.charAt(0),
  };
}

function getDocType(doc) {
  // We map `let` and `var` types to `const`
  if (['let', 'var'].indexOf(doc.docType) !== -1) {
    return 'const';
  }
  return doc.docType;
}

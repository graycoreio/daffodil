import { Package } from 'dgeni';

const typescriptPackage = require('dgeni-packages/typescript');

import { daffodilBasePackage } from '../daffodil-base-package';
import { DESIGN_PATH, TEMPLATES_PATH } from '../config';
import { CleanSelectorsProcessor } from '../../processors/cleanSelectors';
import { FilterContainedDocsProcessor } from '../../processors/filterDocs';
import { DesignExampleDocumentCreatorProcessor } from './processors/designExampleDocumentCreator';
import { DesignExampleFilterProcessor } from './processors/exampleFileCollator';
import { designExampleReader } from './reader/example.reader';
import { DesignExampleConvertToJsonProcessor } from './processors/convertToJson';
import { DesignExampleHighlightCodeProcessor } from './processors/highlightCode';

export const designExamplePackage = new Package('daffodil-design-examples', [daffodilBasePackage])
  .factory(designExampleReader)
  .processor('convertToJson', function(log, createDocMessage) {
		return new DesignExampleConvertToJsonProcessor(log, createDocMessage);
	})
  .processor(new FilterContainedDocsProcessor())
  .processor(new CleanSelectorsProcessor())
  .processor(new DesignExampleDocumentCreatorProcessor())
  .processor(new DesignExampleFilterProcessor())
  .processor(new DesignExampleHighlightCodeProcessor())
  .config(function (readFilesProcessor, designExampleReader) {
    readFilesProcessor.$enabled = true;
    readFilesProcessor.fileReaders.push(designExampleReader);
    readFilesProcessor.basePath = DESIGN_PATH;
    readFilesProcessor.sourceFiles = [
      { include: ['**/examples/src/*/*.*']}
    ]
  })
  .config(function (convertToJson) {
    convertToJson.docTypes = convertToJson.docTypes.concat(['design-example']);
  })
  .config(function (computePathsProcessor) {
    const DOCS_SEGMENT = 'design-examples';
    computePathsProcessor.pathTemplates.push({
      docTypes: ['design-example'],
      getPath: function computeModulePath(doc) {
        doc.moduleFolder = `${DOCS_SEGMENT}/${doc.id}`;
        return doc.moduleFolder;
      },
      outputPathTemplate: '${moduleFolder}.json'
    })
  })
  .config(function(templateFinder) {
    // Where to find the templates for the doc rendering
    templateFinder.templateFolders.unshift(TEMPLATES_PATH + '/design-examples');
  })
  .config(function(computeIdsProcessor) {
    computeIdsProcessor.idTemplates.push({
      docTypes: ['design-example'],
      getId: function(doc) {
        return doc.id
      },
      getAliases: function(doc) { return [doc.id]; }
    })
  });
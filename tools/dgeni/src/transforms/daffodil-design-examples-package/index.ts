import { Package } from 'dgeni';


import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DesignExampleConvertToJsonProcessor } from './processors/convertToJson';
import { DesignExampleDocumentCreatorProcessor } from './processors/designExampleDocumentCreator';
import { DesignExampleFilterProcessor } from './processors/exampleFileCollator';
import { DesignExampleHighlightCodeProcessor } from './processors/highlightCode';
import { designExampleReaderFactory } from './reader/example.reader';
import { AddKindProcessor } from '../../processors/add-kind';
import { CleanSelectorsProcessor } from '../../processors/cleanSelectors';
import { FilterContainedDocsProcessor } from '../../processors/filterDocs';
import {
  DESIGN_PATH,
  TEMPLATES_PATH,
} from '../config';
import { daffodilBasePackage } from '../daffodil-base-package';

const docTypes = ['design-example'];

export const designExamplePackage = new Package('daffodil-design-examples', [daffodilBasePackage])
  .factory('designExampleReader', designExampleReaderFactory)
  .processor('convertToJson', (log, createDocMessage) =>  new DesignExampleConvertToJsonProcessor(log, createDocMessage))
  .processor(new FilterContainedDocsProcessor())
  .processor(new CleanSelectorsProcessor())
  .processor(new DesignExampleDocumentCreatorProcessor())
  .processor(new DesignExampleFilterProcessor())
  .processor(new DesignExampleHighlightCodeProcessor())
  .config((readFilesProcessor, designExampleReader) => {
    readFilesProcessor.$enabled = true;
    readFilesProcessor.fileReaders.push(designExampleReader);
    readFilesProcessor.basePath = DESIGN_PATH;
    readFilesProcessor.sourceFiles = [
      { include: ['**/examples/src/*/*.*']},
    ];
  })
  .config((convertToJson, addKind: AddKindProcessor) => {
    convertToJson.docTypes.push(...docTypes);
    addKind.docTypes.push(...docTypes);
  })
  .config((computePathsProcessor) => {
    computePathsProcessor.pathTemplates.push({
      docTypes,
      getPath: (doc) => {
        doc.moduleFolder = `${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.EXAMPLE]}/${doc.id}`;
        return doc.moduleFolder;
      },
      outputPathTemplate: '${moduleFolder}.json',
    });
  })
  .config((templateFinder) => {
    // Where to find the templates for the doc rendering
    templateFinder.templateFolders.unshift(TEMPLATES_PATH + '/design-examples');
  })
  .config((computeIdsProcessor) => {
    computeIdsProcessor.idTemplates.push({
      docTypes,
      getId: (doc) => doc.id,
      getAliases: (doc) =>[doc.id],
    });
  });

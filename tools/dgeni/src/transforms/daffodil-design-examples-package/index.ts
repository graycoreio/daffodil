import { Package } from 'dgeni';


import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DAFF_DOCS_STOREFRONT_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DesignExampleDocumentCreatorProcessor } from './processors/designExampleDocumentCreator';
import { DesignExampleFilterProcessor } from './processors/exampleFileCollator';
import { DesignExampleHighlightCodeProcessor } from './processors/highlightCode';
import { designExampleReaderFactory } from './reader/example.reader';
import { AddKindProcessor } from '../../processors/add-kind';
import { CleanSelectorsProcessor } from '../../processors/cleanSelectors';
import { FilterContainedDocsProcessor } from '../../processors/filterDocs';
import {
  DESIGN_EXAMPLES_PATH,
  STOREFRONT_EXAMPLES_PATH,
} from '../config';
import { daffodilBasePackage } from '../daffodil-base-package';

const docTypes = ['design-example'];

export const baseExamplePackage = new Package('daffodil-base-examples', [daffodilBasePackage])
  .factory('designExampleReader', designExampleReaderFactory)
  .processor(new FilterContainedDocsProcessor())
  .processor(new CleanSelectorsProcessor())
  .processor(new DesignExampleDocumentCreatorProcessor())
  .processor(new DesignExampleFilterProcessor())
  .processor(new DesignExampleHighlightCodeProcessor())
  .config((readFilesProcessor, designExampleReader) => {
    readFilesProcessor.$enabled = true;
    readFilesProcessor.fileReaders.push(designExampleReader);
    readFilesProcessor.sourceFiles = [
      { include: ['*/src/*/*.*']},
    ];
  })
  .config((addKind: AddKindProcessor) => {
    addKind.docTypes.push(...docTypes);
  })
  .config((computeIdsProcessor) => {
    computeIdsProcessor.idTemplates.push({
      docTypes,
      getId: (doc) => doc.id,
      getAliases: (doc) => [doc.id],
    });
  });

export const designExamplePackage = new Package('daffodil-design-examples', [baseExamplePackage])
  .config((readFilesProcessor) => {
    readFilesProcessor.basePath = DESIGN_EXAMPLES_PATH;
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
  });

export const storefrontExamplePackage = new Package('daffodil-storefront-examples', [baseExamplePackage])
  .config((readFilesProcessor) => {
    readFilesProcessor.basePath = STOREFRONT_EXAMPLES_PATH;
  })
  .config((computePathsProcessor) => {
    computePathsProcessor.pathTemplates.push({
      docTypes,
      getPath: (doc) => {
        doc.moduleFolder = `${DAFF_DOCS_PATH}/${DAFF_DOCS_STOREFRONT_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.EXAMPLE]}/${doc.id}`;
        return doc.moduleFolder;
      },
      outputPathTemplate: '${moduleFolder}.json',
    });
  });

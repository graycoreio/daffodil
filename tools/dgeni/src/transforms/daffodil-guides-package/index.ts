import { Package } from 'dgeni';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DAFF_DOCS_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { GenerateGuideListProcessor } from './processors/generateGuideList';
import { guideFileReaderFactory } from './reader/guide-file.reader';
import { DAFF_DGENI_EXCLUDED_PACKAGES_REGEX } from '../../constants/excluded-packages';
import { MarkdownCodeProcessor } from '../../processors/markdown';
import {
  API_SOURCE_PATH,
  DOCS_SOURCE_PATH,
  GUIDES_TEMPLATES_PATH,
} from '../config';
import { daffodilBasePackage } from '../daffodil-base-package';

const base = new Package('daffodil-guides-base', [daffodilBasePackage])
  .factory('guideFileReader', guideFileReaderFactory)
  .processor(new MarkdownCodeProcessor())
  .config((markdown: MarkdownCodeProcessor) => markdown.docTypes = ['guide'])
  .config((readFilesProcessor, guideFileReader) => {
    readFilesProcessor.$enabled = true;
    readFilesProcessor.fileReaders.push(guideFileReader);
  })
  .config((convertToJson) => {
    convertToJson.docTypes = convertToJson.docTypes.concat(['guide']);
  })
  .config((templateFinder) => {
    // Where to find the templates for the API doc rendering
    templateFinder.templateFolders.unshift(GUIDES_TEMPLATES_PATH);
  })
  .config((computeIdsProcessor) => {
    computeIdsProcessor.idTemplates.push({
      docTypes: ['guide'],
      getId: (doc) => doc
        .fileInfo
        .relativePath
        .replace(/\/src/, '')
        .replace(/\/docs/, '')
        .replace(/\/guides/, '')
        .replace(/\/README/, '')
        .replace(/\.\w*$/, ''),
      getAliases: (doc) => [doc.id],
    });
  });

const baseFactory = (kind: DaffDocKind) => new Package(`daffodil-${kind}-base`, [base])
  .processor(new GenerateGuideListProcessor())
  .config((generateGuideList: GenerateGuideListProcessor) => {
    generateGuideList.outputFolder = `${DAFF_DOCS_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[kind]}`;
  })
  .config((computePathsProcessor) => {
    computePathsProcessor.pathTemplates.push({
      docTypes: ['guide'],
      getPath: (doc) => {
        doc.moduleFolder = `${DAFF_DOCS_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[kind]}/${doc.id}`;
        return `/${doc.moduleFolder}`;
      },
      outputPathTemplate: '${moduleFolder}.json',
    });
  });

const globalDocFactory = (kind: DaffDocKind) => new Package(`daffodil-global-${kind}`, [baseFactory(kind)])
  .config((readFilesProcessor) => {
    readFilesProcessor.basePath = `${DOCS_SOURCE_PATH}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[kind]}`;
    readFilesProcessor.sourceFiles = [
      { include: [
        '**/*.md',
      ]},
    ];
  });

export const packageDocsPackage = new Package('daffodil-package-docs', [baseFactory(DaffDocKind.PACKAGE)])
  .config((readFilesProcessor) => {
    readFilesProcessor.basePath = API_SOURCE_PATH;
    readFilesProcessor.sourceFiles = [
      { include: [DAFF_DGENI_EXCLUDED_PACKAGES_REGEX + '*/**/README.md', DAFF_DGENI_EXCLUDED_PACKAGES_REGEX + '/guides/**/*.md']},
    ];
  });

export const guideDocsPackage = new Package('daffodil-guide-docs', [globalDocFactory(DaffDocKind.GUIDE)]);
export const explanationDocsPackage = new Package('daffodil-explanation-docs', [globalDocFactory(DaffDocKind.EXPLANATION)]);

import { Package } from 'dgeni';

import { GenerateGuideListProcessor } from './processors/generateGuideList';
import { guideFileReaderFactory } from './reader/guide-file.reader';
import { MarkdownCodeProcessor } from '../../processors/markdown';
import {
  API_SOURCE_PATH,
  DOCS_SOURCE_PATH,
  GUIDES_TEMPLATES_PATH,
} from '../config';
import { daffodilBasePackage } from '../daffodil-base-package';

//List of packages to be left out of Guide generation
const excludedPackages = <const>[
  'branding',
  'docs-utils',
  'theme-switch',
];
const excludedPackagesRegex = '!(' + excludedPackages.join('|') + ')';
const excludedDocs = <const>['internal'];
const excludedDocsRegex = '!(' + excludedDocs.join('|') + ')';

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

export const packageDocsPackage = new Package('daffodil-package-docs', [base])
  .processor(new GenerateGuideListProcessor({ outputFolder: 'packages' }))
  .config((readFilesProcessor) => {
    readFilesProcessor.basePath = API_SOURCE_PATH;
    readFilesProcessor.sourceFiles = [
      { include: [excludedPackagesRegex + '/README.md', excludedPackagesRegex + '/guides/**/*.md']},
    ];
  })
  .config((computePathsProcessor) => {
    const DOCS_SEGMENT = 'packages';
    computePathsProcessor.pathTemplates.push({
      docTypes: ['guide'],
      getPath: (doc)  =>{
        doc.moduleFolder = `${DOCS_SEGMENT}/${doc.id.replace(/\/docs/, '')}`;
        return doc.moduleFolder;
      },
      outputPathTemplate: '${moduleFolder}.json',
    });
  });

export const guideDocsPackage = new Package('daffodil-guide-docs', [base])
  .processor(new GenerateGuideListProcessor({ outputFolder: 'guides' }))
  .config((readFilesProcessor) => {
    readFilesProcessor.basePath = `${DOCS_SOURCE_PATH}/guides`;
    readFilesProcessor.sourceFiles = [
      { include: [
        '**/*.md',
      ]},
    ];
  })
  .config((computePathsProcessor) => {
    const DOCS_SEGMENT = 'guides';
    computePathsProcessor.pathTemplates.push({
      docTypes: ['guide'],
      getPath: (doc)  =>{
        doc.moduleFolder = `${DOCS_SEGMENT}/${doc.id.replace(/\/docs/, '')}`;
        return doc.moduleFolder;
      },
      outputPathTemplate: '${moduleFolder}.json',
    });
  });

export const explanationDocsPackage = new Package('daffodil-explanation-docs', [base])
  .processor(new GenerateGuideListProcessor({ outputFolder: 'explanations' }))
  .config((readFilesProcessor) => {
    readFilesProcessor.basePath = `${DOCS_SOURCE_PATH}/explanations`;
    readFilesProcessor.sourceFiles = [
      { include: [
        '**/*.md',
      ]},
    ];
  })
  .config((computePathsProcessor) => {
    const DOCS_SEGMENT = 'explanations';
    computePathsProcessor.pathTemplates.push({
      docTypes: ['guide'],
      getPath: (doc)  =>{
        doc.moduleFolder = `${DOCS_SEGMENT}/${doc.id.replace(/\/docs/, '')}`;
        return doc.moduleFolder;
      },
      outputPathTemplate: '${moduleFolder}.json',
    });
  });

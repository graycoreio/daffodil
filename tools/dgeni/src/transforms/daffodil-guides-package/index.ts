import { Package } from 'dgeni';

import { MarkdownCodeProcessor } from '../../processors/markdown';
import {
  API_SOURCE_PATH,
  GUIDES_TEMPLATES_PATH,
} from '../config';
import { daffodilBasePackage } from '../daffodil-base-package';
import { GenerateGuideListProcessor } from './processors/generateGuideList';
import { guideFileReaderFactory } from './reader/guide-file.reader';

//List of packages to be left out of Guide generation
const excludedPackages = ['branding', 'docs-utils'];
const excludedPackagesRegex: string = '!(' + excludedPackages.join('|') + ')';

export const guideDocPackage = new Package('daffodil-guides', [daffodilBasePackage])
  .factory('guideFileReader', guideFileReaderFactory)
  .processor(new GenerateGuideListProcessor())
  .processor(new MarkdownCodeProcessor())
  .config((markdown: MarkdownCodeProcessor) => markdown.docTypes = ['guide'])
  .config((readFilesProcessor, guideFileReader) => {
    readFilesProcessor.$enabled = true;
    readFilesProcessor.fileReaders.push(guideFileReader);
    readFilesProcessor.basePath = API_SOURCE_PATH;
    readFilesProcessor.sourceFiles = [
      { include: [excludedPackagesRegex + '/README.md', excludedPackagesRegex + '/guides/**/*.md']},
    ];
  })
  .config((convertToJson) => {
    convertToJson.docTypes = convertToJson.docTypes.concat(['guide']);
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

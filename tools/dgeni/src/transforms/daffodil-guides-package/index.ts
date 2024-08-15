import { Package } from 'dgeni';

import {
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { transformGuideDoc } from './helpers/generateGuideList';
import { guideFileReaderFactory } from './reader/guide-file.reader';
import { DAFF_DGENI_EXCLUDED_PACKAGES_REGEX } from '../../constants/excluded-packages';
import { GenerateNavListProcessor } from '../../processors/generateNavList';
import { MarkdownCodeProcessor } from '../../processors/markdown';
import { outputPathsConfigurator } from '../../utils/configurator/output';
import { pathsConfigurator } from '../../utils/configurator/path';
import { generateNavigationTrieFromDocuments } from '../../utils/navigation-trie';
import {
  API_SOURCE_PATH,
  DESIGN_PATH,
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
        .replaceAll('src/', '')
        .replaceAll('docs/', '')
        .replaceAll('guides/', '')
        .replaceAll('/README', '')
        .replace(/\.\w*$/, ''),
      getAliases: (doc) => [doc.id],
    });
  })
  .config((generateNavList: GenerateNavListProcessor) => {
    generateNavList.transform = (docs) => generateNavigationTrieFromDocuments(docs.map(transformGuideDoc));
  });

// global
export const packageDocsPackage = outputPathsConfigurator({
  kind: DaffDocKind.PACKAGE,
  outputPath: DAFF_DOCS_PATH,
  docTypes: ['guide'],
})(new Package('daffodil-package-docs', [base]))
  .config((readFilesProcessor) => {
    readFilesProcessor.basePath = API_SOURCE_PATH;
    readFilesProcessor.sourceFiles = [
      { include: [`${DAFF_DGENI_EXCLUDED_PACKAGES_REGEX}*/**/README.md`, `${DAFF_DGENI_EXCLUDED_PACKAGES_REGEX}/guides/**/*.md`]},
    ];
  });

export const guideDocsPackage = pathsConfigurator({
  kind: DaffDocKind.GUIDE,
  outputPath: DAFF_DOCS_PATH,
  inputPathBase: DOCS_SOURCE_PATH,
  docTypes: ['guide'],
})(new Package('daffodil-guide', [base]));

export const explanationDocsPackage = pathsConfigurator({
  kind: DaffDocKind.EXPLANATION,
  outputPath: DAFF_DOCS_PATH,
  inputPathBase: DOCS_SOURCE_PATH,
  docTypes: ['guide'],
})(new Package('daffodil-explanation', [base]));
//

// design
export const designDocsPackage = outputPathsConfigurator({
  kind: DaffDocKind.PACKAGE,
  outputPath: `${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}`,
  docTypes: ['guide'],
})(new Package('design-packages', [base]))
  .config((readFilesProcessor) => {
    readFilesProcessor.basePath = DESIGN_PATH;
    readFilesProcessor.sourceFiles = [
      { include: ['**/README.md']},
    ];
  });

export const designGuidesPackage = pathsConfigurator({
  kind: DaffDocKind.GUIDE,
  outputPath: `${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}`,
  inputPathBase: DESIGN_PATH,
  docTypes: ['guide'],
})(new Package('design-guides', [base]));

export const designExplanationsPackage = pathsConfigurator({
  kind: DaffDocKind.EXPLANATION,
  outputPath: `${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}`,
  inputPathBase: DESIGN_PATH,
  docTypes: ['guide'],
})(new Package('design-explanations', [base]));
//

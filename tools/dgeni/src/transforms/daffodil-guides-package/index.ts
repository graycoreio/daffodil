import { Package } from 'dgeni';

import {
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { transformGuideDoc } from './helpers/generateGuideList';
import { guideFileReaderFactory } from './reader/guide-file.reader';
import { DAFF_DGENI_EXCLUDED_PACKAGES_REGEX } from '../../constants/excluded-packages';
import { AddKindProcessor } from '../../processors/add-kind';
import { BreadcrumbProcessor } from '../../processors/breadcrumb';
import { GenerateNavListProcessor } from '../../processors/generateNavList';
import { MarkdownCodeProcessor } from '../../processors/markdown';
import { IdSanitizer } from '../../services/id-sanitizer';
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

const docTypes = ['guide'];

const base = new Package('daffodil-guides-base', [daffodilBasePackage])
  .factory('guideFileReader', guideFileReaderFactory)
  .processor(new MarkdownCodeProcessor())
  .config((markdown: MarkdownCodeProcessor, addKind: AddKindProcessor, convertToJson, breadcrumb: BreadcrumbProcessor) => {
    addKind.docTypes.push(...docTypes);
    markdown.docTypes.push(...docTypes);
    breadcrumb.docTypes.push(...docTypes);
    convertToJson.docTypes = convertToJson.docTypes.concat(docTypes);
  })
  .config((readFilesProcessor, guideFileReader) => {
    readFilesProcessor.$enabled = true;
    readFilesProcessor.fileReaders.push(guideFileReader);
  })
  .config((templateFinder) => {
    // Where to find the templates for the API doc rendering
    templateFinder.templateFolders.unshift(GUIDES_TEMPLATES_PATH);
  })
  .config((computeIdsProcessor, idSanitizer: IdSanitizer) => {
    computeIdsProcessor.idTemplates.push({
      docTypes,
      getId: (doc) => idSanitizer.sanitize(doc.fileInfo.relativePath),
      getAliases: (doc) => [doc.id],
    });
    idSanitizer.segmentsToRemove = [
      'src/',
      'docs/',
      'guides/',
      '/README',
      /\.\w*$/,
    ];
  })
  .config((generateNavList: GenerateNavListProcessor) => {
    generateNavList.transform = (docs) => generateNavigationTrieFromDocuments(docs.map(transformGuideDoc));
  });

// global
export const packageDocsPackage = outputPathsConfigurator({
  kind: DaffDocKind.PACKAGE,
  outputPath: DAFF_DOCS_PATH,
  docTypes,
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
  docTypes,
})(new Package('daffodil-guide', [base]));

export const explanationDocsPackage = pathsConfigurator({
  kind: DaffDocKind.EXPLANATION,
  outputPath: DAFF_DOCS_PATH,
  inputPathBase: DOCS_SOURCE_PATH,
  docTypes,
})(new Package('daffodil-explanation', [base]));
//

// design
const design = new Package('design-base', [base])
  .config((idSanitizer: IdSanitizer) => {
    idSanitizer.segmentsToRemove.push(
      'atoms/',
      'molecules/',
    );
  });
export const designDocsPackage = outputPathsConfigurator({
  kind: DaffDocKind.PACKAGE,
  outputPath: `${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}`,
  docTypes,
})(new Package('design-packages', [design]))
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
  docTypes,
})(new Package('design-guides', [design]));

export const designExplanationsPackage = pathsConfigurator({
  kind: DaffDocKind.EXPLANATION,
  outputPath: `${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}`,
  inputPathBase: DESIGN_PATH,
  docTypes,
})(new Package('design-explanations', [design]));
//

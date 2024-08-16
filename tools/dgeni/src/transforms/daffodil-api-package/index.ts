import { Package } from 'dgeni';

import {
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { transformApiNavList } from './helpers/generateApiList';
import { AddPackageExportsProcessor } from './processors/add-package-exports';
import { RemoveDuplicatesProcessor } from './processors/remove-duplicates';
import { DAFF_DGENI_EXCLUDED_PACKAGES_REGEX } from '../../constants/excluded-packages';
import { AddInheritedDocsContentProcessor } from '../../processors/addInheritedDocsContent';
import { AddLinkTagToDaffodilReferencesProcessor } from '../../processors/addLinkTagToDaffodilReferences';
import { CleanSelectorsProcessor } from '../../processors/cleanSelectors';
import {
  COLLECT_LINKABLE_SYMBOLS_PROCESSOR_NAME,
  CollectLinkableSymbolsProcessor,
} from '../../processors/collect-linkable-symbols';
import { CrossEnvSafeNameProcessor } from '../../processors/cross-env-safe-name';
import { FilterContainedDocsProcessor } from '../../processors/filterDocs';
import { FilterOutPrivatePropertiesProcessor } from '../../processors/filterOutPrivateProperties';
import { GenerateNavListProcessor } from '../../processors/generateNavList';
import { MakeTypesHtmlCompatibleProcessor } from '../../processors/makeTypesHtmlCompatible';
import { MarkdownCodeProcessor } from '../../processors/markdown';
import { PackagesProcessor } from '../../processors/packages';
import { outputPathsConfigurator } from '../../utils/configurator/output';
import {
  API_SOURCE_PATH,
  API_TEMPLATES_PATH,
  DESIGN_PATH,
} from '../config';
import { daffodilBasePackage } from '../daffodil-base-package';

const linksPackage = require('dgeni-packages/links');
const typescriptPackage = require('dgeni-packages/typescript');

const API_PACKAGE_NAME = 'daffodil-api';

export const apiDocsBase = new Package('api-base', [
  daffodilBasePackage,
  typescriptPackage,
  linksPackage,
])
  .processor(new CrossEnvSafeNameProcessor())
  //Register Processors for this package
  .processor(new FilterContainedDocsProcessor())
  .processor(new CleanSelectorsProcessor())
  .processor(new MakeTypesHtmlCompatibleProcessor())
  .processor(new FilterOutPrivatePropertiesProcessor())
  .processor(new AddInheritedDocsContentProcessor())
  .processor(new AddLinkTagToDaffodilReferencesProcessor())
  .processor(new PackagesProcessor())
  .processor(new AddPackageExportsProcessor())
  .processor(new MarkdownCodeProcessor())
  .processor(COLLECT_LINKABLE_SYMBOLS_PROCESSOR_NAME, (log, createDocMessage) => new CollectLinkableSymbolsProcessor(log, createDocMessage))
  .factory('API_DOC_TYPES_TO_RENDER', (EXPORT_DOC_TYPES) => EXPORT_DOC_TYPES.concat(['component', 'directive', 'pipe']))
  //Configure our package
  .config((readFilesProcessor, readTypeScriptModules, tsParser) => {

    // Tell TypeScript how to load modules that start with `@daffodil`
    tsParser.options.paths = { '@daffodil/*': [API_SOURCE_PATH + '/*/src']};
    tsParser.options.baseUrl = '.';

    // The typescriptPackage only uses the 'readTypeScriptModules' processor, so disable readFilesProcessor.
    readFilesProcessor.$enabled = false;

    // Specify the base path used when resolving relative paths to source and output files
    readTypeScriptModules.basePath = API_SOURCE_PATH;
    readTypeScriptModules.hidePrivateMembers = true;
  })
  .config((markdown: MarkdownCodeProcessor, EXPORT_DOC_TYPES) => {
    markdown.docTypes.push(...EXPORT_DOC_TYPES);
    markdown.contentKey = 'description';
  })
  .config((computePathsProcessor, EXPORT_DOC_TYPES) => {
    computePathsProcessor.pathTemplates.push({
      docTypes: EXPORT_DOC_TYPES,
      pathTemplate: '${moduleDoc.moduleFolder}/${name}',
      outputPathTemplate: '${moduleDoc.moduleFolder}/${safeName}.json',
    });
  })
  .config((parseTagsProcessor: any) => {
    parseTagsProcessor.tagDefinitions = parseTagsProcessor.tagDefinitions.concat([
      { name: 'docs-private' },
      { name: 'inheritdoc' },
    ]);
  })
  .config((convertToJson, API_DOC_TYPES_TO_RENDER) => {
    convertToJson.docTypes = convertToJson.docTypes.concat(API_DOC_TYPES_TO_RENDER);
  })
  .config((templateFinder) => {
    // Where to find the templates for the API doc rendering
    templateFinder.templateFolders.unshift(API_TEMPLATES_PATH);
  })
  .config((generateNavList: GenerateNavListProcessor) => {
    generateNavList.transform = transformApiNavList;
  });

export const apiDocs = outputPathsConfigurator({
  kind: DaffDocKind.API,
  outputPath: DAFF_DOCS_PATH,
  docTypes: ['package'],
})(new Package(API_PACKAGE_NAME, [apiDocsBase]))
  .config((readTypeScriptModules) => {
    // Specify collections of source files that should contain the documentation to extract
    readTypeScriptModules.sourceFiles = [
      `${DAFF_DGENI_EXCLUDED_PACKAGES_REGEX}/**/src/index.ts`,
    ];
  });

export const designApiPackage = outputPathsConfigurator({
  kind: DaffDocKind.API,
  outputPath: `${DAFF_DOCS_PATH}/${DAFF_DOCS_DESIGN_PATH}`,
  docTypes: ['package'],
})(new Package('design-api-docs', [apiDocs]))
  .processor(new RemoveDuplicatesProcessor())
  .config((readTypeScriptModules) => {
    readTypeScriptModules.basePath = DESIGN_PATH;
    readTypeScriptModules.sourceFiles = [
      // TS will walk entire dep tree to find file paths
      // since these two packages are loaded by other packages before
      // their entry here, TS will incorrectly map the path as absolute
      // including them first ensures that they are treated as relative paths
      // this will unfortunately create duplicate docs so they must be removed
      'loading-icon/src/index.ts',
      'media-gallery/src/index.ts',
      //
      '*/src/index.ts',
      'src/index.ts',
    ];
  })
  .config((packages: PackagesProcessor) => {
    packages.nameComputer = (id: string) => `@daffodil/${id === 'design' ? '' : 'design/'}${id}`;
  });

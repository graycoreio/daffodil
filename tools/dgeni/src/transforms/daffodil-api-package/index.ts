import {
  Document,
  Package,
} from 'dgeni';
import linksPackage from 'dgeni-packages/links';
import typescriptPackage from 'dgeni-packages/typescript';

import {
  DAFF_DOCS_DESIGN_PATH,
  DAFF_DOCS_PATH,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { transformApiNavList } from './helpers/generateApiList';
import { ADD_PACKAGE_EXPORTS_PROCESSOR_PROVIDER } from './processors/add-package-exports';
import {
  ADD_SOURCE_PROVIDER,
  AddSourceProcessor,
} from './processors/add-source';
import {
  ADD_SUBPACKAGE_EXPORTS_PROCESSOR_NAME,
  ADD_SUBPACKAGE_EXPORTS_PROCESSOR_PROVIDER,
} from './processors/add-subpackage-exports';
import { RemoveDuplicatesProcessor } from './processors/remove-duplicates';
import { DAFF_DGENI_EXCLUDED_PACKAGES_REGEX } from '../../constants/excluded-packages';
import { AddKindProcessor } from '../../processors/add-kind';
import { AddInheritedDocsContentProcessor } from '../../processors/addInheritedDocsContent';
import { BreadcrumbProcessor } from '../../processors/breadcrumb';
import { CleanSelectorsProcessor } from '../../processors/cleanSelectors';
import { COLLECT_LINKABLE_SYMBOLS_PROCESSOR_PROVIDER } from '../../processors/collect-linkable-symbols';
import { CrossEnvSafeNameProcessor } from '../../processors/cross-env-safe-name';
import { FilterContainedDocsProcessor } from '../../processors/filterDocs';
import { FilterOutPrivatePropertiesProcessor } from '../../processors/filterOutPrivateProperties';
import { GenerateNavListProcessor } from '../../processors/generateNavList';
import { MakeTypesHtmlCompatibleProcessor } from '../../processors/makeTypesHtmlCompatible';
import {
  MARKDOWN_CODE_PROCESSOR_PROVIDER,
  MarkdownCodeProcessor,
} from '../../processors/markdown';
import {
  PACKAGES_PROCESSOR_PROVIDER,
  PackagesProcessor,
} from '../../processors/packages';
import { outputPathsConfigurator } from '../../utils/configurator/output';
import {
  API_SOURCE_PATH,
  API_TEMPLATES_PATH,
  DESIGN_PATH,
} from '../config';
import { daffodilBasePackage } from '../daffodil-base-package';
import {
  EXAMPLES_PROCESSOR_PROVIDER,
  ExamplesProcessor,
} from './processors/examples';
import { ConvertToJsonProcessor } from '../../processors/convertToJson';

const API_PACKAGE_NAME = 'daffodil-api';

export const apiDocsBase = new Package('api-base', [
  daffodilBasePackage,
  typescriptPackage,
  linksPackage,
])
  .processor(new CrossEnvSafeNameProcessor())
  .processor(new FilterContainedDocsProcessor())
  .processor(new CleanSelectorsProcessor())
  .processor(new MakeTypesHtmlCompatibleProcessor())
  .processor(new FilterOutPrivatePropertiesProcessor())
  .processor(new AddInheritedDocsContentProcessor())
  .processor(...PACKAGES_PROCESSOR_PROVIDER)
  .processor(...ADD_PACKAGE_EXPORTS_PROCESSOR_PROVIDER)
  .processor(...ADD_SUBPACKAGE_EXPORTS_PROCESSOR_PROVIDER)
  .processor(...MARKDOWN_CODE_PROCESSOR_PROVIDER)
  .processor(...COLLECT_LINKABLE_SYMBOLS_PROCESSOR_PROVIDER)
  .processor(...EXAMPLES_PROCESSOR_PROVIDER)
  .processor(...ADD_SOURCE_PROVIDER)
  .factory('API_DOC_TYPES_TO_RENDER', (EXPORT_DOC_TYPES) => EXPORT_DOC_TYPES.concat(['component', 'directive', 'pipe']))
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
  .config((
    markdown: MarkdownCodeProcessor,
    EXPORT_DOC_TYPES,
    addKind: AddKindProcessor,
    breadcrumb: BreadcrumbProcessor,
    examples: ExamplesProcessor,
    addSource: AddSourceProcessor,
  ) => {
    markdown.docTypes.push(...EXPORT_DOC_TYPES);
    examples.docTypes.push(...EXPORT_DOC_TYPES);
    markdown.docTypes.push(...EXPORT_DOC_TYPES);
    addSource.docTypes.push(...EXPORT_DOC_TYPES);
    addKind.docTypes.push(...EXPORT_DOC_TYPES, 'package', 'module');
    breadcrumb.docTypes.push(...EXPORT_DOC_TYPES, 'package');
    markdown.contentKey = 'description';

    addKind.$runAfter.push('readTypeScriptModules');
    breadcrumb.$runAfter.push(ADD_SUBPACKAGE_EXPORTS_PROCESSOR_NAME);
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
      {
        name: 'example',
        multi: true,
        transforms: (doc: Document, tag: any, value: any) => {
          const match = value.match(/^(.*)$/gm);
          tag.caption = match[0];
          tag.body = value.replace(match[0], '').trim();

          return value;
        },
      },
    ]);
  })
  .config((convertToJson: ConvertToJsonProcessor, API_DOC_TYPES_TO_RENDER) => {
    convertToJson.docTypes = convertToJson.docTypes.concat(API_DOC_TYPES_TO_RENDER);
    convertToJson.extraFields.push('examples');
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

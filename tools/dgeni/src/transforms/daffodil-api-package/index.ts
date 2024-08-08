import { Package } from 'dgeni';

import {
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
  DaffDocKind,
} from '@daffodil/docs-utils';

import { DAFF_DGENI_EXCLUDED_PACKAGES_REGEX } from '../../constants/excluded-packages';
import { AddInheritedDocsContentProcessor } from '../../processors/addInheritedDocsContent';
import { AddLinkTagToDaffodilReferencesProcessor } from '../../processors/addLinkTagToDaffodilReferences';
import { CleanSelectorsProcessor } from '../../processors/cleanSelectors';
import { CrossEnvSafeNameProcessor } from '../../processors/cross-env-safe-name';
import { FilterContainedDocsProcessor } from '../../processors/filterDocs';
import { FilterOutPrivatePropertiesProcessor } from '../../processors/filterOutPrivateProperties';
import { GenerateApiListProcessor } from '../../processors/generateApiList';
import { MakeTypesHtmlCompatibleProcessor } from '../../processors/makeTypesHtmlCompatible';
import { PackagesProcessor } from '../../processors/packages';
import {
  API_SOURCE_PATH,
  API_TEMPLATES_PATH,
} from '../config';
import { daffodilBasePackage } from '../daffodil-base-package';

const linksPackage = require('dgeni-packages/links');
const typescriptPackage = require('dgeni-packages/typescript');

export const apiDocs = new Package('daffodil-api', [
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
  .processor(new GenerateApiListProcessor())
  .processor(new PackagesProcessor())
  .factory('API_DOC_TYPES_TO_RENDER', (EXPORT_DOC_TYPES) => EXPORT_DOC_TYPES.concat(['component', 'directive', 'pipe', 'package']))
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

    // Specify collections of source files that should contain the documentation to extract
    readTypeScriptModules.sourceFiles = [
      DAFF_DGENI_EXCLUDED_PACKAGES_REGEX + '/**/src/index.ts',
    ];
  })
  .config((computePathsProcessor, EXPORT_DOC_TYPES, generateApiList) => {

    const API_SEGMENT = DAFF_DOC_KIND_PATH_SEGMENT_MAP[DaffDocKind.API];

    generateApiList.outputFolder = API_SEGMENT;

    computePathsProcessor.pathTemplates.push({
      docTypes: ['package'],
      getPath: (doc) => {
        doc.moduleFolder = `${API_SEGMENT}/${doc.id.replace(/\/src$/, '')}`;
        return doc.moduleFolder;
      },
      outputPathTemplate: '${moduleFolder}.json',
    });
    computePathsProcessor.pathTemplates.push({
      docTypes: EXPORT_DOC_TYPES,
      pathTemplate: 'docs/${moduleDoc.moduleFolder}/${name}',
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
  });

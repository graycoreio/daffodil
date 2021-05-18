import { Package } from 'dgeni';
const typescriptPackage = require('dgeni-packages/typescript');
import { daffodilBasePackage } from '../daffodil-base-package';

import { API_SOURCE_PATH, API_TEMPLATES_PATH } from '../config';

import { GenerateApiListProcessor } from '../../processors/generateApiList';
import { PackagesProcessor } from '../../processors/packages';
import { FilterContainedDocsProcessor } from '../../processors/filterDocs';
import { CleanSelectorsProcessor } from '../../processors/cleanSelectors';
import { MakeTypesHtmlCompatibleProcessor } from '../../processors/makeTypesHtmlCompatible';
import { FilterOutPrivatePropertiesProcessor } from '../../processors/filterOutPrivateProperties';
import { CreateAnchorTagsProcessor } from '../../processors/createAnchorTags';

//List of packages to be left out of API generation
const excludedPackages = ['branding'];
const excludedPackagesRegex: string = '!(' + excludedPackages.join('|') + ')';

export const apiDocs =  new Package('checkout', [
  daffodilBasePackage,
  typescriptPackage
])
  //Register Processors for this package
  .processor(new FilterContainedDocsProcessor())
  .processor(new CleanSelectorsProcessor())
  .processor(new MakeTypesHtmlCompatibleProcessor())
  .processor(new FilterOutPrivatePropertiesProcessor())
  .processor(new CreateAnchorTagsProcessor())
  .processor(new GenerateApiListProcessor())
  .processor(new PackagesProcessor())
  .factory(function API_DOC_TYPES_TO_RENDER(EXPORT_DOC_TYPES) {
    return EXPORT_DOC_TYPES.concat(['component', 'directive', 'pipe', 'package']);
  })
  //Configure our package
  .config(function(readFilesProcessor, readTypeScriptModules, tsParser) {

    // Tell TypeScript how to load modules that start with with `@daffodil`
    tsParser.options.paths = { '@daffodil/*': [API_SOURCE_PATH + '/*'] };
    tsParser.options.baseUrl = '.';

    // The typescriptPackage only uses the 'readTypeScriptModules' processor, so disable readFilesProcessor.
    readFilesProcessor.$enabled = false;

    // Specify the base path used when resolving relative paths to source and output files
    readTypeScriptModules.basePath = API_SOURCE_PATH;
    readTypeScriptModules.hidePrivateMembers = true;

    // Specify collections of source files that should contain the documentation to extract
    readTypeScriptModules.sourceFiles = [
      excludedPackagesRegex + '/src/index.ts'
    ];
  })
  .config(function(computePathsProcessor, EXPORT_DOC_TYPES, generateApiList) {

    const API_SEGMENT = 'api';

    generateApiList.outputFolder = API_SEGMENT;

    computePathsProcessor.pathTemplates.push({
      docTypes: ['package'],
      getPath: function computeModulePath(doc) {
        doc.moduleFolder = `${API_SEGMENT}/${doc.id.replace(/\/src$/, '')}`;
        return doc.moduleFolder;
      },
      outputPathTemplate: '${moduleFolder}.json'
    });
    computePathsProcessor.pathTemplates.push({
      docTypes: EXPORT_DOC_TYPES,
      pathTemplate: '${moduleDoc.moduleFolder}/${name}',
      outputPathTemplate: '${moduleDoc.moduleFolder}/${name}.json',
    });
	})
	.config(function(parseTagsProcessor: any) {
		parseTagsProcessor.tagDefinitions = parseTagsProcessor.tagDefinitions.concat([
			{name: 'docs-private'}
		])
	})
  .config(function(convertToJson, API_DOC_TYPES_TO_RENDER) {
    convertToJson.docTypes = convertToJson.docTypes.concat(API_DOC_TYPES_TO_RENDER);
  })
  .config(function(templateFinder) {
    // Where to find the templates for the API doc rendering
    templateFinder.templateFolders.unshift(API_TEMPLATES_PATH);
  });

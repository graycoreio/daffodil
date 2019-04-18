import { Package } from "dgeni";
const typescriptPackage = require('dgeni-packages/typescript');

import { API_SOURCE_PATH, API_TEMPLATES_PATH, requireFolder } from '../config';
import { basePackage } from '../daffodil-base-package';

import { GenerateApiListProcessor } from '../../processors/generateApiList';
import { PackagesProcessor } from "../../processors/packages";
import { FilterContainedDocsProcessor } from "../../processors/filterDocs";

export const apiDocs =  new Package('checkout', [
  basePackage,
  typescriptPackage
])
  //Register Processors for this package
  .processor(new GenerateApiListProcessor())
  .processor(new FilterContainedDocsProcessor())
  .processor(new PackagesProcessor())
  .factory(function API_DOC_TYPES_TO_RENDER(EXPORT_DOC_TYPES) {
    return EXPORT_DOC_TYPES.concat(['decorator', 'directive', 'ngmodule', 'pipe', 'package']);
  })
  //Configure our package
  .config(function(readFilesProcessor, readTypeScriptModules, tsParser) {

    // Tell TypeScript how to load modules that start with with `@daffodil`
    tsParser.options.paths = { '@daffodil/*': [API_SOURCE_PATH + '/*'] };
    tsParser.options.baseUrl = '.';
    
    // The typescriptPackage only uses the "readTypeScriptModules" processor, so disable readFilesProcessor.
    readFilesProcessor.$enabled = false;

    // Specify the base path used when resolving relative paths to source and output files
    readTypeScriptModules.basePath = API_SOURCE_PATH;
    readTypeScriptModules.hidePrivateMembers = true;

    // Specify collections of source files that should contain the documentation to extract
    readTypeScriptModules.sourceFiles = [
      'core/src/index.ts',
      'driver/src/index.ts',
      'cart/src/index.ts',
      'checkout/src/index.ts',
      'design/src/index.ts',
      'product/src/index.ts'
    ];
  })
  // Configure jsdoc-style tag parsing
  .config(function(parseTagsProcessor, getInjectables) {
    // Load up all the tag definitions in the tag-defs folder
    parseTagsProcessor.tagDefinitions =
        parseTagsProcessor.tagDefinitions.concat(getInjectables(requireFolder(__dirname, './tag-defs')));
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
      docTypes: EXPORT_DOC_TYPES.concat(['decorator', 'directive', 'ngmodule', 'pipe']),
      pathTemplate: '${moduleDoc.moduleFolder}/${name}',
      outputPathTemplate: '${moduleDoc.moduleFolder}/${name}.json',
    });
  })
  .config(function(convertToJson, API_DOC_TYPES_TO_RENDER) {
    convertToJson.docTypes = convertToJson.docTypes.concat(API_DOC_TYPES_TO_RENDER);
  })
  .config(function(templateFinder) {
    // Where to find the templates for the API doc rendering
    templateFinder.templateFolders.unshift(API_TEMPLATES_PATH);
  });

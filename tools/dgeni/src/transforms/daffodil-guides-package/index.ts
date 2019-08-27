import { Package, Processor } from "dgeni";
import { daffodilBasePackage } from "../daffodil-base-package";
import { guideFileReader } from "./reader/guide-file.reader";
import { API_SOURCE_PATH, GUIDES_TEMPLATES_PATH } from "../config";

export const guideDocPackage = new Package('daffodil-guides', [daffodilBasePackage])
  .factory(guideFileReader)
  .config(function (readFilesProcessor, guideFileReader) {
    readFilesProcessor.$enabled = true;
    readFilesProcessor.fileReaders.push(guideFileReader);
    readFilesProcessor.basePath = API_SOURCE_PATH;
    readFilesProcessor.sourceFiles = [
      { include: ["cart/README.md", "cart/docs/**/*.md"]},
      { include: ["category/README.md", "category/docs/**/*.md"]},
      { include: ["checkout/README.md", "checkout/docs/**/*.md"]},
      { include: ["core/README.md", "core/docs/**/*.md"]},
      { include: ["design/README.md", "design/docs/**/*.md"]},
      { include: ["product/README.md", "product/docs/**/*.md"]}
    ]
  })
  .config(function (convertToJson) {
    convertToJson.docTypes = convertToJson.docTypes.concat(['guide']);
  })
  .config(function (computeIdsProcessor) {
    computeIdsProcessor.idTemplates.push({
      docTypes: ['guide'],
      getId: function (doc) {
        return doc.fileInfo
          .relativePath
          .replace(/\/src$/, '')
          .replace(/\/docs$/, '')
          .replace(/\/README.md$/, '')
          .replace(/\.\w*$/, '');
      },
      getAliases: function (doc) { return [doc.id]; }
    })
  })
  .config(function (computePathsProcessor) {
    const DOCS_SEGMENT = "guides";
    computePathsProcessor.pathTemplates.push({
      docTypes: ['guide'],
      getPath: function computeModulePath(doc) {
        doc.moduleFolder = `${DOCS_SEGMENT}/${doc.id.replace(/\/docs/, '')}`;
        return doc.moduleFolder;
      },
      outputPathTemplate: '${moduleFolder}.json'
    })
  })
  .config(function(templateFinder) {
    // Where to find the templates for the API doc rendering
    templateFinder.templateFolders.unshift(GUIDES_TEMPLATES_PATH);
  });
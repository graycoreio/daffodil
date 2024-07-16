import { Package } from 'dgeni';

import { PaletteProcessor } from './processors/palette';
import { scssFileReaderFactory } from './reader/scss-file.reader';
import {
  DESIGN_PATH,
  PALETTE_TEMPLATES_PATH,
} from '../config';
import { daffodilBasePackage } from '../daffodil-base-package';

export const daffodilPalettePackage = new Package('daffodil-palette', [
  daffodilBasePackage,
])
  .factory('scssFileReader', scssFileReaderFactory)
  .processor(new PaletteProcessor())
  .config((readFilesProcessor, scssFileReader) => {
    readFilesProcessor.$enabled = true;
    readFilesProcessor.basePath = DESIGN_PATH;
    readFilesProcessor.fileReaders.push(scssFileReader);
    readFilesProcessor.sourceFiles = [
      { include: ['scss/theming/_color-palettes.scss']},
    ];
  })
  .config((computePathsProcessor) => {
    const DOCS_SEGMENT = 'palettes';
    computePathsProcessor.pathTemplates.push({
      docTypes: ['palette'],
      getPath: (doc) => {
        doc.moduleFolder = `${DOCS_SEGMENT}/${doc.id}`;
        return doc.moduleFolder;
      },
      outputPathTemplate: '${moduleFolder}.json',
    });
  })
  .config((templateFinder) => {
    // Where to find the templates for the API doc rendering
    templateFinder.templateFolders.unshift(PALETTE_TEMPLATES_PATH);
  })
  .config((convertToJson) => {
    convertToJson.docTypes = ['palette'];
  });

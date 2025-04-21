/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Package } from 'dgeni';
import * as basePackage from 'dgeni-packages/base';
import * as nunjucksPackage from 'dgeni-packages/nunjucks';
import * as path from 'path';

import {
  ABSOLUTIFY_PATHS_PROCESSOR_NAME,
  ABSOLUTIFY_PATHS_PROCESSOR_PROVIDER,
} from '../../processors/absolutify-paths';
import { ADD_KIND_PROCESSOR_PROVIDER } from '../../processors/add-kind';
import { BREADCRUMB_PROCESSOR_PROVIDER } from '../../processors/breadcrumb';
import { COLLECT_ROUTABLE_PATHS_PROCESSOR_PROVIDER } from '../../processors/collect-routable-paths';
import {
  CONVERT_TO_JSON_PROCESSOR_PROVIDER,
  ConvertToJsonProcessor,
} from '../../processors/convertToJson';
import { MARKDOWN_CODE_PROCESSOR_PROVIDER } from '../../processors/markdown';
import { ID_SANITIZER_PROVIDER } from '../../services/id-sanitizer';
import {
  PROJECT_ROOT,
  OUTPUT_PATH,
} from '../config';

export const daffodilBasePackage = new Package('daffodil-base', [
  basePackage,
  nunjucksPackage,
])
  .processor({ name: 'absolutify-paths', $runAfter: ['paths-computed'], $process: (d) => d })
  .processor(...ABSOLUTIFY_PATHS_PROCESSOR_PROVIDER)
  .processor({ name: 'paths-absolutified', $runAfter: [ABSOLUTIFY_PATHS_PROCESSOR_NAME], $process: (d) => d })
  .processor(...ADD_KIND_PROCESSOR_PROVIDER)
  .factory(...ID_SANITIZER_PROVIDER)
  .processor(...BREADCRUMB_PROCESSOR_PROVIDER)
  .processor(...CONVERT_TO_JSON_PROCESSOR_PROVIDER)
  .processor(...MARKDOWN_CODE_PROCESSOR_PROVIDER)
  .processor(...COLLECT_ROUTABLE_PATHS_PROCESSOR_PROVIDER)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  .factory('packageInfo', () => require(path.resolve(PROJECT_ROOT, 'package.json')))

// Where do we get the source files?
  .config((readFilesProcessor) => {
    readFilesProcessor.basePath = PROJECT_ROOT;
    readFilesProcessor.fileReaders = [];
    readFilesProcessor.sourceFiles = [];
  })

// Where do we write the output files?
  .config((writeFilesProcessor) => {
    writeFilesProcessor.outputFolder = OUTPUT_PATH;
  })

  .config((renderDocsProcessor) => {
    // overwrite
    renderDocsProcessor.$process = (docs) => docs.map((doc) => {
      doc.renderedContent ??= '';
      return doc;
    });
  })

  .config((convertToJson: ConvertToJsonProcessor) => {
    convertToJson.extraFields.push('breadcrumbs', 'kind');
  });

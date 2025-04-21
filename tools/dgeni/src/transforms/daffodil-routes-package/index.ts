/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Package } from 'dgeni';
import * as basePackage from 'dgeni-packages/base';

import {
  COLLECT_ROUTABLE_PATHS_PROCESSOR_PROVIDER,
  CollectRoutablePathsProcessor,
} from '../../processors/collect-routable-paths';
import {
  PROJECT_ROOT,
  OUTPUT_PATH,
} from '../config';

export const daffodilRoutesPackage = new Package('daffodil-routes', [
  basePackage,
])
  .processor(...COLLECT_ROUTABLE_PATHS_PROCESSOR_PROVIDER)
// stub out templateEngine
  .processor('templateEngine', () => ({ $process: (d) => d, getRenderer: () => {}, getFinder: () => {} }))
  .config((readFilesProcessor) => {
    readFilesProcessor.basePath = PROJECT_ROOT;
    readFilesProcessor.fileReaders = [];
    readFilesProcessor.sourceFiles = [];
  })
  .config((writeFilesProcessor) => {
    writeFilesProcessor.outputFolder = OUTPUT_PATH;
  })
  .config((collectRoutablePaths: CollectRoutablePathsProcessor) => {
    collectRoutablePaths.generate = true;
  });


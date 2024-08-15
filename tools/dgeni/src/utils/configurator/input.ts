import { Package } from 'dgeni';
import { Configurator } from 'tools/dgeni/src/utils/configurator/type';

import {
  DaffDocKind,
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
} from '@daffodil/docs-utils';

export interface InputPathsConfig {
  kind: DaffDocKind;
  inputPathBase: string;
}

export const inputPathsConfigurator: Configurator<InputPathsConfig> = (config: InputPathsConfig) => (pkg: Package) => pkg
  .config((readFilesProcessor) => {
    readFilesProcessor.basePath = `${config.inputPathBase}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[config.kind]}`;
    readFilesProcessor.sourceFiles = [
      { include: [
        '**/*.md',
      ]},
    ];
  });

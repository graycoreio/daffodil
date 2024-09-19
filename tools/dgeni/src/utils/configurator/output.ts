import { Package } from 'dgeni';

import {
  DaffDocKind,
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
} from '@daffodil/docs-utils';

import { Configurator } from './type';
import {
  GENERATE_NAV_LIST_PROCESSOR_PROVIDER,
  GenerateNavListProcessor,
} from '../../processors/generateNavList';

export interface OutputPathsConfig {
  kind: DaffDocKind;
  outputPath: string;
  docTypes: Array<string>;
}

export const outputPathsConfigurator: Configurator<OutputPathsConfig> = (config: OutputPathsConfig) => (pkg: Package) => pkg
  .processor(...GENERATE_NAV_LIST_PROCESSOR_PROVIDER)
  .config((generateNavList: GenerateNavListProcessor) => {
    generateNavList.outputFolder = `${config.outputPath}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[config.kind]}`;
  })
  .config((computePathsProcessor) => {
    computePathsProcessor.pathTemplates.push({
      docTypes: config.docTypes,
      getPath: (doc) => {
        doc.moduleFolder = `${config.outputPath}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[config.kind]}/${doc.id}`;
        return doc.moduleFolder;
      },
      outputPathTemplate: '${moduleFolder}.json',
    });
  });

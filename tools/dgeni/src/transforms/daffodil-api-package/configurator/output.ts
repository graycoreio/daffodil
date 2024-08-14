import { Package } from 'dgeni';

import {
  DaffDocKind,
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
} from '@daffodil/docs-utils';

import { GenerateApiListProcessor } from '../../../processors/generateApiList';
import { Configurator } from '../../../utils/configurator.type';

export interface OutputPathsConfig {
  kind: DaffDocKind;
  outputPath: string;
}

// TODO: combine with guide configurator
export const outputPathsConfigurator: Configurator<OutputPathsConfig> = (config: OutputPathsConfig) => (pkg: Package) => pkg
  .processor(new GenerateApiListProcessor())
  .config((generateApiList: GenerateApiListProcessor) => {
    generateApiList.outputFolder = `${config.outputPath}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[config.kind]}`;
  })
  .config((computePathsProcessor) => {
    computePathsProcessor.pathTemplates.push({
      docTypes: ['package'],
      getPath: (doc) => {
        doc.moduleFolder = `${config.outputPath}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[config.kind]}/${doc.id}`;
        return doc.moduleFolder;
      },
      outputPathTemplate: '${moduleFolder}.json',
    });
  });

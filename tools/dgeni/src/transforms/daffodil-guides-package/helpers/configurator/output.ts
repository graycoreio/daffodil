import { Package } from 'dgeni';

import {
  DaffDocKind,
  DAFF_DOC_KIND_PATH_SEGMENT_MAP,
} from '@daffodil/docs-utils';

import { Configurator } from '../../../../utils/configurator.type';
import { GenerateGuideListProcessor } from '../../processors/generateGuideList';

export interface OutputPathsConfig {
  kind: DaffDocKind;
  outputPath: string;
}

export const outputPathsConfigurator: Configurator<OutputPathsConfig> = (config: OutputPathsConfig) => (pkg: Package) => pkg
  .processor(new GenerateGuideListProcessor())
  .config((generateGuideList: GenerateGuideListProcessor) => {
    generateGuideList.outputFolder = `${config.outputPath}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[config.kind]}`;
  })
  .config((computePathsProcessor) => {
    computePathsProcessor.pathTemplates.push({
      docTypes: ['guide'],
      getPath: (doc) => {
        doc.moduleFolder = `${config.outputPath}/${DAFF_DOC_KIND_PATH_SEGMENT_MAP[config.kind]}/${doc.id}`;
        return `/${doc.moduleFolder}`;
      },
      outputPathTemplate: '${moduleFolder}.json',
    });
  });

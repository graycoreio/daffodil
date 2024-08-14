import { Package } from 'dgeni';

import {
  InputPathsConfig,
  inputPathsConfigurator,
} from './input';
import {
  OutputPathsConfig,
  outputPathsConfigurator,
} from './output';
import { Configurator } from '../../../../utils/configurator.type';

export type PathsConfig = InputPathsConfig & OutputPathsConfig;

export const pathsConfigurator: Configurator<PathsConfig> = (config: PathsConfig) => (pkg: Package) =>
  outputPathsConfigurator(config)(inputPathsConfigurator(config)(pkg));

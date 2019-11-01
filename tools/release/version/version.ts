import { series } from 'gulp';
import { rootVersion } from './root-version';
import { leafVersion } from './leaf-version';

export const version = series(
  rootVersion, 
  leafVersion,
); 
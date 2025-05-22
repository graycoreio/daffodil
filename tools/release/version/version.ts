import { series } from 'gulp';

import { leafVersion } from './leaf-version';
import { rootVersion } from './root-version';

export { devVersion } from './leaf-version';
export const version = series(
  rootVersion,
  leafVersion,
);

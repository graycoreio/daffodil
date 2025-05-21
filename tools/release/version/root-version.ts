import { series } from 'gulp';
import * as standardVersion from 'standard-version';

import { RELEASE_CONFIG } from '../config';

const rootPackageVersion = () => standardVersion({
  noVerify: true,
  sign: true,
  infile: RELEASE_CONFIG.PROJECT_PATH + '/docs/CHANGELOG.md',
  silent: true,
  skip: {
    commit: true,
    changelog: true,
    tag: true,
  },
  packageFiles: [
    RELEASE_CONFIG.PROJECT_PATH + '/package.json',
  ],
  bumpFiles: [
    RELEASE_CONFIG.PROJECT_PATH + '/package.json',
    RELEASE_CONFIG.PROJECT_PATH + '/package-lock.json',
  ],
}).catch(err => {
  console.error(`standard-version failed with message: ${err.message}`);
});

export const rootVersion = series(rootPackageVersion);

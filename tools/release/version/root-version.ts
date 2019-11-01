import * as standardVersion from 'standard-version';
import { RELEASE_CONFIG } from '../config';
import { series } from 'gulp'; 

const rootPackageVersion = () => standardVersion({
  noVerify: true,
  sign: true,
  infile: RELEASE_CONFIG.PROJECT_PATH + '/docs/CHANGELOG.md',
  silent: true,
  skip: {
    commit: true,
    changelog: true,
    tag: true
  },
  packageFiles: [
    RELEASE_CONFIG.PROJECT_PATH + '/package.json',
  ],
  bumpFiles: [
    RELEASE_CONFIG.PROJECT_PATH + '/package.json',
    RELEASE_CONFIG.PROJECT_PATH + '/package-lock.json',
    {
      filename: RELEASE_CONFIG.PROJECT_PATH + '/lerna.json',
      type: 'json'
    }
  ]
}).catch(err => {
    console.error(`standard-version failed with message: ${err.message}`)
});

export const rootVersion = series(rootPackageVersion)
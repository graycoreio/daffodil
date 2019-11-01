import * as standardVersion from 'standard-version';
import * as git from 'simple-git/promise';
import { RELEASE_CONFIG } from '../config';
import { series } from 'gulp'; 

const stageAll = async (): Promise<void> => {
    await git(RELEASE_CONFIG.PROJECT_PATH).add('.');
}

const generateCommit = () => standardVersion({
  noVerify: true,
  sign: true,
  infile: RELEASE_CONFIG.PROJECT_PATH + '/docs/CHANGELOG.md',
  silent: true,
  commitAll: true,
  skip: {
    bump: true,
  },
  packageFiles: [
    RELEASE_CONFIG.PROJECT_PATH + '/package.json',
  ],
  bumpFiles: []
}).catch(err => {
    console.error(`standard-version failed with message: ${err.message}`)
});

export const commitChangelogAndTag = series(
  stageAll,
  generateCommit
)
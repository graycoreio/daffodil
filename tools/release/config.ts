import * as path from 'path';

export const RELEASE_CONFIG = {
  PROJECT_PATH: path.resolve(__dirname, '../../'),
  DIST: path.resolve(__dirname, '../../dist'),
  ROOT_PACKAGE: path.resolve(__dirname, '../../package.json'),
  BASE_BRANCH: 'develop',
  GIT_REMOTE_NAME: 'origin',
  TEMPORARY_BRANCH_NAME: 'temporary_release_branch',
};

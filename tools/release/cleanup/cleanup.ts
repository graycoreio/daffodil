import { series } from 'gulp';
import * as git from 'simple-git/promise';
import { RELEASE_CONFIG } from '../config';

const removeTemporaryBranch = async() => {
  const repo = await git(RELEASE_CONFIG.PROJECT_PATH);
  await repo.checkout(RELEASE_CONFIG.GIT_REMOTE_NAME + '/' + RELEASE_CONFIG.BASE_BRANCH);
  await repo.branch([
    '-D', 
    RELEASE_CONFIG.TEMPORARY_BRANCH_NAME
  ]);
}

export const cleanup = series(
  removeTemporaryBranch
)
import { RELEASE_CONFIG } from '../config';
import { parallel, series } from 'gulp';
import { clean } from './clean';
import * as git from 'simple-git/promise';

/**
 * Function which determines whether or not the current workspace is dirty (git).
 */
const verifyWorkspace = async (callback: Function): Promise<any> => {
  const repo = await git(RELEASE_CONFIG.PROJECT_PATH);
  const status = await repo.status();

  if(status.files.length === 0){
    callback();
  }
  else {
    callback(new Error("The repository is not in a clean state, please cleanup your project before proceeding."));
  }
}

const checkoutReleaseBranch = async () => {
  const repo = git(RELEASE_CONFIG.PROJECT_PATH);
  await repo.fetch();
  await repo.checkout(RELEASE_CONFIG.GIT_REMOTE_NAME + '/' + RELEASE_CONFIG.BASE_BRANCH);
  await repo.checkoutLocalBranch(RELEASE_CONFIG.TEMPORARY_BRANCH_NAME);
}

export const prepare = series(
  checkoutReleaseBranch,
  verifyWorkspace,
  clean
);
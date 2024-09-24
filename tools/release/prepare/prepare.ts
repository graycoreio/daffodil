import { series } from 'gulp';
import git from 'simple-git/promise';

import { ARGS } from '../args/args';
import { ARG as GIT_REMOTE_ARG } from '../args/git-remote';
import { RELEASE_CONFIG } from '../config';
import { getGitRemote } from '../get-git-remote';
import { clean } from './clean';


/**
 * Function which determines whether or not the current workspace is dirty (git).
 */
const verifyWorkspace = async (callback: Function): Promise<any> => {
  const repo = await git(RELEASE_CONFIG.PROJECT_PATH);
  const status = await repo.status();

  if(status.files.length === 0){
    callback();
  } else {
    callback(new Error('The repository is not in a clean state, please cleanup your project before proceeding.'));
  }
};

export const checkoutReleaseBranch = async () => {
  const repo = git(RELEASE_CONFIG.PROJECT_PATH);
  const remote = getGitRemote(ARGS[GIT_REMOTE_ARG.key]);

  await repo.fetch();
  await repo.checkout(remote + '/' + RELEASE_CONFIG.BASE_BRANCH);
  await repo.checkoutLocalBranch(RELEASE_CONFIG.TEMPORARY_BRANCH_NAME);
};

export const prepare = series(
  checkoutReleaseBranch,
  verifyWorkspace,
  clean,
);

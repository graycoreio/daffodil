import { series } from 'gulp';
import git from 'simple-git';

import { ARGS } from '../args/args';
import { ARG as GIT_REMOTE_ARG } from '../args/git-remote';
import { RELEASE_CONFIG } from '../config';
import { getGitRemote } from '../get-git-remote';

const removeTemporaryBranch = async () => {
  const repo = git(RELEASE_CONFIG.PROJECT_PATH);
  const remote = getGitRemote(ARGS[GIT_REMOTE_ARG.key]);
  await repo.checkout(remote + '/' + RELEASE_CONFIG.BASE_BRANCH);
  await repo.branch([
    '-D',
    RELEASE_CONFIG.TEMPORARY_BRANCH_NAME,
  ]);
};

export const cleanup = series(
  removeTemporaryBranch,
);

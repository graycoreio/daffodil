import { series } from 'gulp';
import git from 'simple-git/promise';

import { ARGS } from '../args/args';
import { ARG as GIT_REMOTE_ARG } from '../args/git-remote';
import { RELEASE_CONFIG } from '../config';
import { getGitRemote } from '../get-git-remote';

export const pushToRemote = async () => {
  const repo = await git(RELEASE_CONFIG.PROJECT_PATH);
  const remote = getGitRemote(ARGS[GIT_REMOTE_ARG.key]);
  await repo.push([remote, 'HEAD:' + RELEASE_CONFIG.BASE_BRANCH] as any);
  await repo.push([remote, 'HEAD:master'] as any);
  await repo.pushTags();
};

export const publish = series(
  pushToRemote,
);

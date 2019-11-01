import { series } from 'gulp';
import * as git from 'simple-git/promise';
import { RELEASE_CONFIG } from '../config';

export const pushToRemote = async () => {
  const repo = await git(RELEASE_CONFIG.PROJECT_PATH);
  await repo.push([RELEASE_CONFIG.GIT_REMOTE_NAME, 'HEAD:' + RELEASE_CONFIG.BASE_BRANCH] as any);
  await repo.push([RELEASE_CONFIG.GIT_REMOTE_NAME, 'HEAD:master'] as any);
  await repo.pushTags();
}

export const publish = series(
  pushToRemote
);
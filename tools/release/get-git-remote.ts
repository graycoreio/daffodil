import { RELEASE_CONFIG } from './config';

export const getGitRemote = (remote = RELEASE_CONFIG.GIT_REMOTE_NAME) => remote;

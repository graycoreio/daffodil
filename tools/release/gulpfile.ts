import { series } from 'gulp';

import { ARG as GIT_REMOTE_ARG } from './args/git-remote';
import { build } from './build/build';
import { cleanup } from './cleanup/cleanup';
import { commitChangelogAndTag } from './commit/commitChangelogAndTag';
import { clean } from './prepare/clean';
import { prepare } from './prepare/prepare';
import { publish } from './publish/publish';
import { leafVersion } from './version/leaf-version';
import { version } from './version/version';
export { addPackagesToReadme } from './packages/add-packages-to-readme';
export {
  annotateDeprecationMessages,
  checkForRemovals,
} from './deprecation';

export const release = series(
  prepare,
  build,
  version,
  commitChangelogAndTag,
  publish,
  cleanup,
);
release.description = 'Release Daffodil';
release.flags = {
  [`--${GIT_REMOTE_ARG.key}`]: GIT_REMOTE_ARG.doc,
};
export default release;

export const generateReleasablePackages = series(
  clean,
  build,
  leafVersion,
);

export const updateLeafVersions = leafVersion;

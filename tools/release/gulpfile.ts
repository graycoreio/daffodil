import { series } from 'gulp';

import { prepare } from './prepare/prepare';
import { version } from './version/version';
import { build } from './build/build';
import { commitChangelogAndTag } from './commit/commitChangelogAndTag';
import { cleanup } from './cleanup/cleanup';
import { publish } from './publish/publish';

const release = series(
  prepare, 
  build,
  version,
  commitChangelogAndTag,
  publish,
  cleanup
);

export default release;





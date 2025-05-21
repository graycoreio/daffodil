import { series } from 'gulp';
import { exec } from 'gulp-execa';

import { RELEASE_CONFIG } from '../config';

const fullBuild = async () => await exec('npx nx run-many -t build', { cwd: RELEASE_CONFIG.PROJECT_PATH });

export const build = series(fullBuild);

import { series } from 'gulp';
import { exec } from 'gulp-execa';
import { RELEASE_CONFIG } from '../config';

const lernaBuild = async () => await exec('lerna run build --stream', { cwd: RELEASE_CONFIG.PROJECT_PATH});

export const build = series(lernaBuild);
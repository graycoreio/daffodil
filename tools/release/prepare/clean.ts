import * as log from 'fancy-log';
import { rimraf } from 'rimraf';

import { RELEASE_CONFIG } from '../config';
const DIST_PATH = RELEASE_CONFIG.PROJECT_PATH + '/dist';

const cleanDist = (cb): void => {
  rimraf(DIST_PATH).then(() => {
    log(`Removed '${DIST_PATH}' successfully`);
    cb();
  });
};

/**
 * Clean the distributable directory for release.
 */
export const clean = cleanDist;

import {
  dest,
  series,
  src,
} from 'gulp';
import replace from 'gulp-replace';
import { TaskFunction } from 'undertaker';

import { RELEASE_CONFIG } from '../config';
import { getRootPackage } from '../version/leaf-version';

const VERSION_REGEX = '\\d+\\.\\d+\\.\\d+';
const PRERELEASE_REMOVAL = 3;
const RELEASE_REMOVAL = 1;
const DEPRECATION_MESSAGE = 'Deprecated in version';
const REMOVAL_MESSAGE = 'Will be removed in version';
const HAS_ANNOTATION_REGEX = new RegExp(`${DEPRECATION_MESSAGE} ${VERSION_REGEX}\\. ${REMOVAL_MESSAGE} ${VERSION_REGEX}`);

const getPrereleaseRemovalVersion = (rootVersion: string): string =>
  [0, Number(rootVersion.split('.')[1]) + PRERELEASE_REMOVAL, 0].join('.');

const getReleaseRemovalVersion = (rootVersion: string): string =>
  [rootVersion.split('.')[0] + RELEASE_REMOVAL, 0, 0].join('.');

const getRemovalVersion = (rootVersion: string): string =>
  rootVersion.startsWith('0')
    ? getPrereleaseRemovalVersion(rootVersion)
    : getReleaseRemovalVersion(rootVersion);

const buildAnnotation = (rootVersion: string): string =>
  ` ${DEPRECATION_MESSAGE} ${rootVersion}. ${REMOVAL_MESSAGE} ${getRemovalVersion(rootVersion)}.`;

const annotate: TaskFunction = async () => {
  const rootVersion = (await getRootPackage()).version;
  src([
    `${RELEASE_CONFIG.PROJECT_PATH}/libs/**/*.ts`,
    `!${RELEASE_CONFIG.PROJECT_PATH}/libs/**/*.spec.ts`,
  ], {
    encoding: 'utf8',
    base: RELEASE_CONFIG.PROJECT_PATH,
  })
    .pipe(
      replace(/@deprecated([^*\n]*)(\n\*\/)?$/gm, (match, summary, end) =>
        match.match(HAS_ANNOTATION_REGEX)
          ? match
          : `@deprecated${summary || ''}${buildAnnotation(rootVersion)}${end || ''}`),
    )
    .pipe(
      dest(RELEASE_CONFIG.PROJECT_PATH),
    );
};

export const annotateDeprecationMessages = series(
  annotate,
);

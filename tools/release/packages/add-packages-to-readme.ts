import {
  dest,
  series,
  src,
} from 'gulp';
import reduce from 'gulp-reduce-async';
import replace from 'gulp-replace';
import * as path from 'node:path';
import * as through2 from 'through2';

import { RELEASE_CONFIG } from '../config';

const README_PATH = path.resolve(RELEASE_CONFIG.PROJECT_PATH, 'README.md');
const PACKAGES_PATH = path.resolve(RELEASE_CONFIG.PROJECT_PATH, 'libs/*/package.json');

const getPackageTable = async () => {
  const packages = await new Promise<void>((resolve, reject) =>
    src(PACKAGES_PATH, { encoding: 'utf8' })
      .pipe(reduce((memo, content, file, cb) => {
        const packageJson = JSON.parse(content);
        const packageName = packageJson.name.replace('@daffodil/', '');

        cb(null, packageJson.private ? memo : `${memo}
| [@daffodil/${packageName}](/libs/${packageName}/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2F${packageName}/latest.svg)](https://npmjs.com/package/@daffodil/${packageName}) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)`);
      }, `<!-- AUTOGENERATE_PACKAGE_START -->
| Package | Version | Stability |
|---|---|---|`))
      .pipe(through2.obj((file) => {
        resolve(file.contents.toString());
      })),
  );

  return `${packages}
<!-- AUTOGENERATE_PACKAGE_END -->`;
};

// generate table in readme
const addPackages = async () => {
  const packageTable = await getPackageTable();
  await new Promise((resolve, reject) =>
    src(README_PATH, { encoding: 'utf8' })
      .pipe(replace(/<!-- AUTOGENERATE_PACKAGE_START -->.*<!-- AUTOGENERATE_PACKAGE_END -->/s, packageTable))
      .pipe(dest(RELEASE_CONFIG.PROJECT_PATH, { overwrite: true }))
      .on('end', resolve)
      .on('error', reject));
};

export const addPackagesToReadme = series(
  addPackages,
);

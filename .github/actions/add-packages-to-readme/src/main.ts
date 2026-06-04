import {
  existsSync,
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';
import { join } from 'path';

import {
  buildPackageTable,
  PackageInfo,
  replacePackageTable,
} from './package-table';

const workspace = process.env.GITHUB_WORKSPACE || process.cwd();
const libsPath = join(workspace, 'libs');
const readmePath = join(workspace, 'README.md');

const packages: PackageInfo[] = readdirSync(libsPath, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => join(libsPath, entry.name, 'package.json'))
  .filter((path) => existsSync(path))
  .sort()
  .map((path) => JSON.parse(readFileSync(path, 'utf-8')));

writeFileSync(readmePath, replacePackageTable(readFileSync(readmePath, 'utf-8'), buildPackageTable(packages)));

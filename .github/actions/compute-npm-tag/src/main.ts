import {
  appendFileSync,
  readFileSync,
} from 'fs';
import { join } from 'path';

import { computeNpmTag } from './compute-npm-tag';

const workspace = process.env.GITHUB_WORKSPACE || process.cwd();
const pkgJson = JSON.parse(readFileSync(join(workspace, 'package.json'), 'utf-8'));
const tag = computeNpmTag(pkgJson.version);

const outputFile = process.env.GITHUB_OUTPUT;
if (outputFile) {
  appendFileSync(outputFile, `npm_tag=${tag}\n`);
}

import {
  appendFileSync,
} from 'fs';
import { join } from 'path';

import { computeMatrix } from './compute-matrix';
import { derivePathConfig } from './path-config';

const repoRoot = join(__dirname, '..', '..', '..', '..');
const config = derivePathConfig(repoRoot);
const changedFiles = (process.env['INPUT_CHANGED-FILES'] || '').split('\n');
const nodeVersions = (process.env['INPUT_NODE-VERSIONS'] || '').split(',').filter(Boolean);
const angularVersions = (process.env['INPUT_ANGULAR-VERSIONS'] || '').split(',').filter(Boolean);
const matrix = computeMatrix(changedFiles, config, nodeVersions, angularVersions);
const json = JSON.stringify(matrix);

const outputFile = process.env.GITHUB_OUTPUT;
if (outputFile) {
  appendFileSync(outputFile, `matrix=${json}\n`);
  appendFileSync(outputFile, `has-entries=${matrix.length > 0}\n`);
}

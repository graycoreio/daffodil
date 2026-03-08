import {
  appendFileSync,
} from 'fs';
import { join } from 'path';

import { computeMatrix } from './compute-matrix';
import { derivePathConfig } from './path-config';

const repoRoot = join(__dirname, '..', '..', '..', '..');
const config = derivePathConfig(repoRoot);
const changedFiles = (process.env['INPUT_CHANGED-FILES'] || '').split('\n');
const angularVersions: string[] = JSON.parse(process.env['INPUT_ANGULAR-VERSIONS'] || '[]');
const matrix = computeMatrix(changedFiles, config, angularVersions);
const json = JSON.stringify(matrix);

const outputFile = process.env.GITHUB_OUTPUT;
if (outputFile) {
  appendFileSync(outputFile, `matrix=${json}\n`);
  appendFileSync(outputFile, `has-entries=${matrix.length > 0}\n`);
}

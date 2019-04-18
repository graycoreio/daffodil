import { resolve } from 'path';
import { readdirSync } from 'fs';

export const PROJECT_ROOT = resolve(__dirname, '../../..');
export const DGENI_DIR = resolve(__dirname, '../');
export const DAFFIO_PATH = resolve(PROJECT_ROOT, 'apps/daffio');
export const TEMPLATES_PATH = resolve(DGENI_DIR, 'templates');
export const API_TEMPLATES_PATH = resolve(TEMPLATES_PATH, 'api');
export const SRC_PATH = resolve(DAFFIO_PATH, 'src');
export const DIST_PATH = resolve(PROJECT_ROOT, 'dist');
export const OUTPUT_PATH = resolve(DIST_PATH, '');
export const DOCS_OUTPUT_PATH = resolve(OUTPUT_PATH, 'docs');
export const API_SOURCE_PATH = resolve(PROJECT_ROOT, 'libs');

export const requireFolder = (dirname, folderPath) => {
    const absolutePath = resolve(dirname, folderPath);
    return readdirSync(absolutePath)
      .filter(p => !/[._]spec\.js$/.test(p))  // ignore spec files
      .map(p => require(resolve(absolutePath, p)));
}
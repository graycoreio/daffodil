import {
  readdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';
import { join } from 'path';

import {
  annotateDeprecations,
  getStableVersion,
  hasRemovalMarker,
} from './deprecation';

const workspace = process.env.GITHUB_WORKSPACE || process.cwd();
const mode = process.env['INPUT_MODE'];
const libsPath = join(workspace, 'libs');
const rootVersion = getStableVersion(JSON.parse(readFileSync(join(workspace, 'package.json'), 'utf-8')).version);

const sourceFiles = readdirSync(libsPath, { recursive: true, encoding: 'utf-8' })
  .filter((path) => path.endsWith('.ts') && !path.endsWith('.spec.ts'))
  .map((path) => join(libsPath, path));

switch (mode) {
  case 'annotate':
    for (const path of sourceFiles) {
      const content = readFileSync(path, 'utf-8');
      const annotated = annotateDeprecations(content, rootVersion);
      if (annotated !== content) {
        writeFileSync(path, annotated);
      }
    }
    break;

  case 'check': {
    const removals = sourceFiles.filter((path) => hasRemovalMarker(readFileSync(path, 'utf-8'), rootVersion));
    for (const path of removals) {
      console.error(`${path} contains a symbol that is marked for removal in this version (${rootVersion})`);
    }
    if (removals.length > 0) {
      process.exit(1);
    }
    break;
  }

  default:
    console.error(`Unknown mode: ${mode}`);
    process.exit(1);
}

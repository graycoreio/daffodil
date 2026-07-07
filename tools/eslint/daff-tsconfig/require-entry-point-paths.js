/**
 * require-entry-point-paths.js
 *
 * Every ng-packagr entry point (a directory with an `ng-package.json`) must be
 * registered in its library's `tsconfig.json` `compilerOptions.paths` so that
 * `@daffodil/<lib>/<entry-point>` resolves to source during development.
 *
 * When a new component/package is added without a matching path mapping,
 * imports silently fall back to the compiled `dist` output (or fail), which is
 * exactly the class of bug this rule prevents.
 *
 * The rule runs on each entry point's *entry file* (the `lib.entryFile` declared
 * in its `ng-package.json`, e.g. `src/index.ts` or `src/public_api.ts`) — those
 * files are already linted as TypeScript, so no tsconfig.json JSON parsing or
 * `lintFilePatterns` changes are needed.
 */
'use strict';

const fs = require('fs');
const path = require('path');

// Cache reads across the many files a single lint run visits.
const textCache = new Map();
const jsonCache = new Map();

function readText(filePath) {
  if (textCache.has(filePath)) {
    return textCache.get(filePath);
  }
  let text = null;
  try {
    text = fs.readFileSync(filePath, 'utf8');
  } catch {
    text = null;
  }
  textCache.set(filePath, text);
  return text;
}

function readJson(filePath) {
  if (jsonCache.has(filePath)) {
    return jsonCache.get(filePath);
  }
  const text = readText(filePath);
  let value = null;
  if (text != null) {
    try {
      value = JSON.parse(text);
    } catch {
      value = null;
    }
  }
  jsonCache.set(filePath, value);
  return value;
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Nearest ancestor directory (inclusive) that contains an `ng-package.json`.
 */
function findEntryPointDir(startDir) {
  let dir = startDir;
  for (let i = 0; i < 20; i++) {
    if (fs.existsSync(path.join(dir, 'ng-package.json'))) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) {
      break;
    }
    dir = parent;
  }
  return null;
}

/**
 * The library root is the ancestor directory whose parent is `libs`
 * (e.g. `libs/design`, `libs/product`).
 */
function findLibRoot(startDir) {
  let dir = startDir;
  for (let i = 0; i < 20; i++) {
    if (path.basename(path.dirname(dir)) === 'libs') {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) {
      break;
    }
    dir = parent;
  }
  return null;
}

function toPosix(p) {
  return p.split(path.sep).join('/');
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Require every ng-packagr entry point to be registered in its library tsconfig paths',
    },
    schema: [],
    messages: {
      missingPath:
        'Entry point "{{importPath}}" is not registered in {{tsconfig}}. Add `"{{importPath}}": ["{{target}}"]` to compilerOptions.paths.',
    },
  },

  create(context) {
    const filename = context.filename || context.getFilename();
    if (!filename || !filename.endsWith('.ts')) {
      return {};
    }
    const absFile = path.resolve(filename);

    const entryPointDir = findEntryPointDir(path.dirname(absFile));
    if (!entryPointDir) {
      return {};
    }

    // Only lint the declared entry file of the entry point, so each entry point
    // is reported exactly once (not per file within it).
    const ngPackage = readJson(path.join(entryPointDir, 'ng-package.json'));
    const entryFile =
      (ngPackage && ngPackage.lib && ngPackage.lib.entryFile) ||
      'src/public_api.ts';
    if (path.resolve(entryPointDir, entryFile) !== absFile) {
      return {};
    }

    const libRoot = findLibRoot(entryPointDir);
    if (!libRoot) {
      return {};
    }

    // Libraries without a path-mapped tsconfig (e.g. those that resolve only
    // through the root `@daffodil/* -> dist/*` mapping) have nothing to enforce.
    const tsconfigPath = path.join(libRoot, 'tsconfig.json');
    const tsconfigText = readText(tsconfigPath);
    if (!tsconfigText || !/"paths"\s*:/.test(tsconfigText)) {
      return {};
    }

    const libPackage = readJson(path.join(libRoot, 'package.json'));
    const scope =
      (libPackage && libPackage.name) || `@daffodil/${path.basename(libRoot)}`;

    const subPath = toPosix(path.relative(libRoot, entryPointDir));
    const importPath = subPath === '' ? scope : `${scope}/${subPath}`;

    // Already registered — nothing to do.
    if (new RegExp(`"${escapeRegExp(importPath)}"\\s*:`).test(tsconfigText)) {
      return {};
    }

    // Path values are relative to `baseUrl` (the repo root, the parent of `libs`).
    const repoRoot = path.dirname(path.dirname(libRoot));
    const target = toPosix(
      path.relative(repoRoot, path.join(entryPointDir, 'src')),
    );

    return {
      Program(node) {
        context.report({
          node,
          messageId: 'missingPath',
          data: {
            importPath,
            tsconfig: toPosix(path.relative(repoRoot, tsconfigPath)),
            target,
          },
        });
      },
    };
  },
};

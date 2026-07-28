/**
 * magento-driver-versions.js
 *
 * Asserts that every @daffodil/* package exposing a Magento driver via
 * `exports["./driver/magento/auto"]` declares the same complete set of
 * `magento-X.Y.Z` conditions. Set of conditions is derived from union
 *  of all Magento driver versions across all packages.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const AUTO_EXPORT_KEY = './driver/magento/auto';
const MAGENTO_KEY_RE = /^magento-\d+\.\d+\.\d+$/;
const VERSION_FROM_KEY_RE = /^magento-(\d+\.\d+\.\d+)$/;

const unionCache = new Map();

function readAutoExport(pkgJsonPath) {
  try {
    const raw = fs.readFileSync(pkgJsonPath, 'utf8');
    const json = JSON.parse(raw);
    return json?.exports?.[AUTO_EXPORT_KEY] ?? null;
  } catch {
    return null;
  }
}

function computeUnion(repoRoot) {
  if (unionCache.has(repoRoot)) {
    return unionCache.get(repoRoot);
  }
  const libsDir = path.join(repoRoot, 'libs');
  const union = new Set();
  for (const entry of fs.readdirSync(libsDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) {
      continue;
    }
    const auto = readAutoExport(path.join(libsDir, entry.name, 'package.json'));
    if (!auto || typeof auto !== 'object') {
      continue;
    }
    for (const key of Object.keys(auto)) {
      if (MAGENTO_KEY_RE.test(key)) {
        union.add(key);
      }
    }
  }
  unionCache.set(repoRoot, union);
  return union;
}

function getPropKeyName(prop) {
  const k = prop.key;
  if (k && k.type === 'JSONLiteral' && typeof k.value === 'string') {
    return k.value;
  }
  return null;
}

function findProp(objNode, keyName) {
  if (!objNode || objNode.type !== 'JSONObjectExpression') {
    return null;
  }
  for (const prop of objNode.properties) {
    if (getPropKeyName(prop) === keyName) {
      return prop;
    }
  }
  return null;
}

function getStringValue(node) {
  if (node && node.type === 'JSONLiteral' && typeof node.value === 'string') {
    return node.value;
  }
  return null;
}

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Enforce that every @daffodil package exposing a versioned Magento driver declares the complete, consistent set of magento-X.Y.Z conditions under exports["./driver/magento/auto"]',
    },
    schema: [],
    messages: {
      invalidKey:
        'Key `{{key}}` is not a valid Magento version condition. Expected `magento-<major>.<minor>.<patch>`.',
      missingVersion:
        'Missing Magento version condition `{{key}}`. All @daffodil packages exposing a Magento driver must declare the same set of versions.',
      entryNotObject:
        'Condition `{{key}}` must be an object with `types` and `default` fields.',
      missingField:
        'Condition `{{key}}` is missing required field `{{field}}`.',
      typesPathMismatch:
        'Condition `{{key}}` has a `types` path that does not reference `./driver/magento/{{version}}/`.',
      defaultPathMismatch:
        'Condition `{{key}}` has a `default` path that does not end with `-magento-{{version}}.mjs`.',
    },
  },

  create(context) {
    const filename = context.physicalFilename || context.filename;
    if (!filename || path.basename(filename) !== 'package.json') {
      return {};
    }
    const repoRoot = context.cwd;
    if (!repoRoot) {
      return {};
    }

    return {
      Program(node) {
        const root = node.body?.[0]?.expression;
        if (!root || root.type !== 'JSONObjectExpression') {
          return;
        }

        const exportsProp = findProp(root, 'exports');
        if (!exportsProp) {
          return;
        }
        const autoProp = findProp(exportsProp.value, AUTO_EXPORT_KEY);
        if (!autoProp) {
          return;
        }
        const autoObj = autoProp.value;
        if (autoObj.type !== 'JSONObjectExpression') {
          return;
        }

        const union = computeUnion(repoRoot);
        const seenVersions = new Set();

        function checkEntryShape(prop, keyName, version) {
          if (prop.value.type !== 'JSONObjectExpression') {
            context.report({
              node: prop.value,
              messageId: 'entryNotObject',
              data: { key: keyName },
            });
            return;
          }

          const typesProp = findProp(prop.value, 'types');
          const defaultProp = findProp(prop.value, 'default');

          if (!typesProp) {
            context.report({
              node: prop.value,
              messageId: 'missingField',
              data: { key: keyName, field: 'types' },
            });
          } else {
            const typesVal = getStringValue(typesProp.value);
            if (typesVal === null) {
              context.report({
                node: typesProp.value,
                messageId: 'missingField',
                data: { key: keyName, field: 'types' },
              });
            } else if (version && !typesVal.includes(`./driver/magento/${version}/`)) {
              context.report({
                node: typesProp.value,
                messageId: 'typesPathMismatch',
                data: { key: keyName, version },
              });
            }
          }

          if (!defaultProp) {
            context.report({
              node: prop.value,
              messageId: 'missingField',
              data: { key: keyName, field: 'default' },
            });
          } else {
            const defaultVal = getStringValue(defaultProp.value);
            if (defaultVal === null) {
              context.report({
                node: defaultProp.value,
                messageId: 'missingField',
                data: { key: keyName, field: 'default' },
              });
            } else if (version && !defaultVal.endsWith(`-magento-${version}.mjs`)) {
              context.report({
                node: defaultProp.value,
                messageId: 'defaultPathMismatch',
                data: { key: keyName, version },
              });
            }
          }
        }

        for (const prop of autoObj.properties) {
          const keyName = getPropKeyName(prop);
          if (keyName === null) {
            continue;
          }

          if (keyName === 'default') {
            checkEntryShape(prop, keyName, null);
            continue;
          }

          if (!MAGENTO_KEY_RE.test(keyName)) {
            context.report({
              node: prop.key,
              messageId: 'invalidKey',
              data: { key: keyName },
            });
            continue;
          }

          seenVersions.add(keyName);
          const version = keyName.match(VERSION_FROM_KEY_RE)[1];
          checkEntryShape(prop, keyName, version);
        }

        for (const expected of union) {
          if (!seenVersions.has(expected)) {
            context.report({
              node: autoProp.key,
              messageId: 'missingVersion',
              data: { key: expected },
            });
          }
        }
      },
    };
  },
};

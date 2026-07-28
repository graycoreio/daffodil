/**
 * magento-driver-versions.js
 *
 * Asserts that a @daffodil/* package exposing a Magento driver via
 * `exports["./driver/magento/auto"]` declares a `magento-X.Y.Z` condition
 * for every versioned driver directory found under `driver/magento/`.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const AUTO_EXPORT_KEY = './driver/magento/auto';
const MAGENTO_KEY_RE = /^magento-\d+\.\d+\.\d+$/;
const VERSION_FROM_KEY_RE = /^magento-(\d+\.\d+\.\d+)$/;
const VERSION_DIR_RE = /^\d+\.\d+\.\d+$/;

function readPackageVersions(pkgDir) {
  const magentoDir = path.join(pkgDir, 'driver', 'magento');
  const versions = new Set();
  let entries;
  try {
    entries = fs.readdirSync(magentoDir, { withFileTypes: true });
  } catch {
    return versions;
  }
  for (const entry of entries) {
    if (entry.isDirectory() && VERSION_DIR_RE.test(entry.name)) {
      versions.add(`magento-${entry.name}`);
    }
  }
  return versions;
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
        'Enforce that a @daffodil package exposing a versioned Magento driver declares a magento-X.Y.Z condition under exports["./driver/magento/auto"] for every version directory present under driver/magento/',
    },
    schema: [],
    messages: {
      invalidKey:
        'Key `{{key}}` is not a valid Magento version condition. Expected `magento-<major>.<minor>.<patch>`.',
      missingVersion:
        'Missing Magento version condition `{{key}}`. A `driver/magento/{{version}}/` directory exists in this package but has no matching export condition.',
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
    const pkgDir = path.dirname(filename);

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

        const expectedVersions = readPackageVersions(pkgDir);
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

        for (const expected of expectedVersions) {
          if (!seenVersions.has(expected)) {
            context.report({
              node: autoProp.key,
              messageId: 'missingVersion',
              data: {
                key: expected,
                version: expected.match(VERSION_FROM_KEY_RE)[1],
              },
            });
          }
        }
      },
    };
  },
};

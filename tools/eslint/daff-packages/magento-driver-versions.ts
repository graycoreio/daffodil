/**
 * magento-driver-versions.ts
 *
 * Asserts that a @daffodil/* package exposing a Magento driver via
 * `exports["./driver/magento/auto"]` declares a `<pkg>-magento-X.Y.Z`
 * condition for every versioned driver directory found under `driver/magento/`.
 */

import type { Rule } from 'eslint';
import type {
  AST,
  RuleListener,
} from 'jsonc-eslint-parser';
import * as fs from 'node:fs';
import * as path from 'node:path';

const AUTO_EXPORT_KEY = './driver/magento/auto';
const AUTO_TESING_EXPORT_KEY = './driver/magento/auto/testing';
const VERSION_DIR_RE = /^\d+\.\d+\.\d+(-p\d+)?$/;

function readPackageVersions(pkgDir: string): Set<string> {
  const packageName = path.basename(pkgDir);
  const magentoDir = path.join(pkgDir, 'driver', 'magento');
  const versions = new Set<string>();
  try {
    const entries = fs.readdirSync(magentoDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory() && VERSION_DIR_RE.test(entry.name)) {
        versions.add(`${packageName}-magento-${entry.name}`);
      }
    }
  } catch {
    // directory doesn't exist or can't be read — return empty set
  }
  return versions;
}

function getPropKeyName(prop: AST.JSONProperty): string | null {
  const k = prop.key;
  if (k.type === 'JSONLiteral' && typeof k.value === 'string') {
    return k.value;
  }
  return null;
}

function findProp(
  objNode: AST.JSONExpression | null | undefined,
  keyName: string,
): AST.JSONProperty | null {
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

function getStringValue(node: AST.JSONExpression): string | null {
  if (node.type === 'JSONLiteral' && typeof node.value === 'string') {
    return node.value;
  }
  return null;
}

export const rule: Rule.RuleModule = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Enforce that a @daffodil package exposing a versioned Magento driver declares a <pkg>-magento-X.Y.Z condition under exports["./driver/magento/auto"] for every version directory present under driver/magento/',
    },
    schema: [],
    messages: {
      invalidKey:
        'Key `{{key}}` is not a valid Magento version condition. Expected `{{packageName}}-magento-<major>.<minor>.<patch>`.',
      missingVersion:
        'Missing Magento version condition `{{key}}`. A `driver/magento/{{version}}/` directory exists in this package but has no matching export condition.',
      entryNotObject:
        'Condition `{{key}}` must be an object with `types` and `default` fields.',
      missingField:
        'Condition `{{key}}` is missing required field `{{field}}`.',
      typesPathMismatch:
        'Condition `{{key}}` has a `types` path that does not reference `./driver/magento/{{version}}/`.',
      defaultPathMismatch:
        'Condition `{{key}}` has a `default` path that does not end with `-magento-{{version}}{{suffix}}.mjs`.',
    },
  },

  create(context): Rule.RuleListener {
    if (path.basename(context.physicalFilename) !== 'package.json') {
      return {};
    }

    const pkgDir = path.dirname(context.physicalFilename);
    const expectedVersions = readPackageVersions(pkgDir);
    const packageName = path.basename(pkgDir);
    const MAGENTO_KEY_RE = new RegExp(`^${packageName}-magento-(\\d+\\.\\d+\\.\\d+(-p\\d+)?)$`);

    function checkEntryShape(
      prop: AST.JSONProperty,
      keyName: string,
      version: string | null | undefined,
      suffix = '',
    ): void {
      if (prop.value.type !== 'JSONObjectExpression') {
        context.report({
          loc: prop.value.loc,
          messageId: 'entryNotObject',
          data: { key: keyName },
        });
        return;
      }

      const typesProp = findProp(prop.value, 'types');
      const defaultProp = findProp(prop.value, 'default');

      if (!typesProp) {
        context.report({
          loc: prop.value.loc,
          messageId: 'missingField',
          data: { key: keyName, field: 'types' },
        });
      } else {
        const typesVal = getStringValue(typesProp.value);
        if (typesVal === null) {
          context.report({
            loc: typesProp.value.loc,
            messageId: 'missingField',
            data: { key: keyName, field: 'types' },
          });
        } else if (version !== null && !typesVal.includes(`./driver/magento/${version}/`)) {
          context.report({
            loc: typesProp.value.loc,
            messageId: 'typesPathMismatch',
            data: { key: keyName, version },
          });
        }
      }

      if (!defaultProp) {
        context.report({
          loc: prop.value.loc,
          messageId: 'missingField',
          data: { key: keyName, field: 'default' },
        });
      } else {
        const defaultVal = getStringValue(defaultProp.value);
        if (defaultVal === null) {
          context.report({
            loc: defaultProp.value.loc,
            messageId: 'missingField',
            data: { key: keyName, field: 'default' },
          });
        } else if (version !== null && !defaultVal.endsWith(`-magento-${version}${suffix}.mjs`)) {
          context.report({
            loc: defaultProp.value.loc,
            messageId: 'defaultPathMismatch',
            data: {
              key: keyName,
              version,
              suffix,
            },
          });
        }
      }
    }

    const listener: RuleListener = {
      Program(node: AST.JSONProgram): void {
        const root = node.body[0].expression;
        if (root.type !== 'JSONObjectExpression') {
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
        if (autoProp.value.type !== 'JSONObjectExpression') {
          return;
        }
        const objs: Record<string, [AST.JSONProperty, AST.JSONObjectExpression]> = {
          '': [autoProp, autoProp.value],
        };
        const autoTestingProp = findProp(exportsProp.value, AUTO_TESING_EXPORT_KEY);
        if (!autoTestingProp) {
          return;
        }
        if (autoTestingProp.value.type === 'JSONObjectExpression') {
          objs['-testing'] = [autoTestingProp, autoTestingProp.value];
        }

        Object.entries(objs).forEach(([suffix, [aProp, autoObj]]) => {
          const seenVersions = new Set<string>();

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
                loc: prop.key.loc,
                messageId: 'invalidKey',
                data: {
                  key: keyName,
                  packageName,
                },
              });
              continue;
            }

            seenVersions.add(keyName);
            const version = MAGENTO_KEY_RE.exec(keyName)?.[1];
            checkEntryShape(prop, keyName, version, suffix);
          }

          for (const expected of expectedVersions) {
            if (!seenVersions.has(expected)) {
              const version = MAGENTO_KEY_RE.exec(expected)?.[1];
              context.report({
                loc: aProp.key.loc,
                messageId: 'missingVersion',
                data: { key: expected, version },
              });
            }
          }
        });
      },
    };

    return <Rule.RuleListener><unknown>listener;
  },
};

export default rule;

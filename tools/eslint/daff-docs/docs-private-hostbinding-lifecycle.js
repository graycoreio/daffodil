/**
 * docs-private-hostbinding-lifecycle.js
 *
 * Inserts and enforces
 *
 *   /**
 *    * @docs-private
 *    *\/
 *
 * above every @HostBinding() member and Angular lifecycle method.
 */
'use strict';

const LIFECYCLE_HOOKS = new Set([
  'ngOnChanges', 'ngOnInit', 'ngDoCheck',
  'ngAfterContentInit', 'ngAfterContentChecked',
  'ngAfterViewInit', 'ngAfterViewChecked',
]);

/**
 * Returns true if any leading block comment on `node` already has @docs-private 
 */
function hasDocsPrivate(src, node) {
  return src
    .getCommentsBefore(node)
    .some((c) => c.type === 'Block' && /@docs-private\b/i.test(c.value));
}

/**
 * Returns (`indent`, `eol`) for the line where `node` starts
 * - indenting should be irrelevant as there are existing eslint rules that can resolve indenting issues
*/
function indentAndEol(src, node) {
  const full = src.getText();
  const start = node.range[0];

  const eol = /\r\n/.test(full.slice(0, start)) ? '\r\n' : '\n';

  const indent = ' '.repeat(node.loc.start.column);

  return { indent, eol };
}

/**
 * Returns true if the decorators array contains a @HostBinding() decorator.
 */
function isHostBinding(decorators = []) {
  if (decorators.length === 0) return false;
  return decorators.every(
    (d) =>
      d.expression.type === 'CallExpression' &&
      d.expression.callee.type === 'Identifier' &&
      d.expression.callee.name === 'HostBinding'
  );
}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Require /** @docs-private */ above HostBinding members and Angular lifecycle hooks',
    },
    fixable: 'code',
    schema: [],
    messages: {
      missing:
        '`{{id}}` must be preceded by a JSDoc block containing @docs-private',
    },
  },

  create(context) {
    const src = context.getSourceCode();

    function ensure(node, id) {
      if (hasDocsPrivate(src, node)) return;

      context.report({
        node,
        messageId: 'missing',
        data: { id },
        fix(fixer) {
          const { indent, eol } = indentAndEol(src, node);

          const block =
            `${indent}/**${eol}` +
            `${indent} * @docs-private${eol}` +
            `${indent} */${eol}`;

          return fixer.insertTextBefore(node, block);
        },
      });
    }

    const selector =
      'PropertyDefinition, ClassProperty, MethodDefinition';

    return {
      [selector](node) {
        if (isHostBinding(node.decorators)) {
          ensure(node, '@HostBinding member');
        }

        if (
          node.type === 'MethodDefinition' &&
          node.key.type === 'Identifier' &&
          LIFECYCLE_HOOKS.has(node.key.name)
        ) {
          ensure(node, node.key.name);
        }
      },
    };
  },
};

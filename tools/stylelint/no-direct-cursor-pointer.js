const stylelint = require('stylelint');

const ruleName = 'daffodil/no-direct-cursor-pointer';
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: 'Use the `clickable()` mixin instead of directly setting `cursor: pointer;`.',
});

module.exports = stylelint.createPlugin(ruleName, (primaryOption) => {
  return (postcssRoot, postcssResult) => {
    postcssRoot.walkDecls((decl) => {
      if (decl.prop === 'cursor' && decl.value === 'pointer') {
        stylelint.utils.report({
          message: messages.rejected,
          node: decl,
          result: postcssResult,
          ruleName,
        });
      }
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
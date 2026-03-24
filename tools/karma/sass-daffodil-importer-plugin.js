var path = require('path');
var url = require('url');
var fs = require('fs');

var DIST_DIR = path.resolve(__dirname, '../../dist');

/**
 * Webpack plugin that adds a Sass importer resolving `@daffodil/*` to `dist/*`.
 * Needed because @ngtools/webpack's TypeScriptPathsPlugin only applies tsconfig
 * path mapping to JS/TS issuers, skipping .scss files entirely.
 */
function DaffodilSassPlugin() {}

DaffodilSassPlugin.prototype.apply = function(compiler) {
  var importer = {
    findFileUrl: function(importUrl) {
      if (importUrl.indexOf('@daffodil/') !== 0) return null;
      var mapped = path.join(DIST_DIR, importUrl.slice('@daffodil/'.length));
      var candidates = [
        mapped + '.scss',
        path.join(path.dirname(mapped), '_' + path.basename(mapped) + '.scss'),
        path.join(mapped, '_index.scss'),
        path.join(mapped, 'index.scss'),
      ];
      for (var i = 0; i < candidates.length; i++) {
        if (fs.existsSync(candidates[i])) return url.pathToFileURL(candidates[i]);
      }
      return null;
    },
  };

  (function patch(rules) {
    if (!rules) return;
    rules.forEach(function(rule) {
      if (!rule) return;
      patch(rule.rules);
      patch(rule.oneOf);
      (Array.isArray(rule.use) ? rule.use : []).forEach(function(loader) {
        if (!loader || !loader.loader || loader.loader.indexOf('sass-loader') === -1) return;
        if (!loader.options || typeof loader.options.sassOptions !== 'function') return;
        var orig = loader.options.sassOptions;
        loader.options.sassOptions = function(ctx) {
          var opts = orig(ctx);
          opts.importers = (opts.importers || []).concat(importer);
          return opts;
        };
      });
    });
  })(compiler.options.module && compiler.options.module.rules);
};

module.exports = DaffodilSassPlugin;

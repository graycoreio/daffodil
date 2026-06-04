/**
 * Intercepts the moment Angular's Karma builder assigns `config.buildWebpack`,
 * calling `callback(compiler)` with the webpack compiler so you can modify it
 * before the first compilation run.
 *
 * In Angular v21+, `buildWebpack` is set as `{ compiler, options, logger }` —
 * the webpack compiler is already created at assignment time, so we pass it
 * directly to the callback.
 */
export const interceptNgBuildWebpack = (config, callback) => {
  let _buildWebpack;
  Object.defineProperty(config, 'buildWebpack', {
    get() { return _buildWebpack; },
    set(value) {
      if (value?.compiler) {
        callback(value.compiler);
      }
      _buildWebpack = value;
    },
    enumerable: true,
    configurable: true,
  });
};

/**
 * Intercepts the moment Angular's Karma builder assigns `config.buildWebpack`,
 * calling `callback(webpackConfig)` so you can modify it before the build runs.
 */
export const interceptNgBuildWebpack = (config, callback) => {
  let _buildWebpack;
  Object.defineProperty(config, 'buildWebpack', {
    get() { return _buildWebpack; },
    set(value) {
      if (value?.webpackConfig) {
        callback(value.webpackConfig);
      }
      _buildWebpack = value;
    },
    enumerable: true,
    configurable: true,
  });
};

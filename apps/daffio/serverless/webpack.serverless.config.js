const path = require('path');

const PATHS = {
  src: path.join(__dirname, './'),
  dist: path.join(__dirname, '../../../dist/apps/daffio'),
};


module.exports = {
  mode: 'none',
  entry: { serverless: path.join(PATHS.src, 'serverless.js') },
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(PATHS.dist, 'api'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.mjs', '.js'],
    modules: [path.resolve(__dirname, './../../../node_modules')]
  },
  target: 'node',
  node: {
    __dirname: false,
  },
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [/(node_modules|main\..*\.js|.*\.txt|.*\.map)/]
}
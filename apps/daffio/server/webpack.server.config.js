const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  entry: {  server: './server/server.ts' },
  resolve: { 
    extensions: ['.js', '.ts'],
    modules: [path.resolve(__dirname, './../../../node_modules')]
  },
  target: 'node',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    path: path.join(__dirname, '../../../dist/apps/daffio'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, 
        loader: 'ts-loader', 
        options: {
          configFile: '../tsconfig.app.json'
        } 
      },
      {
        // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
        // Removing this will cause deprecation warnings to appear.
        test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
        parser: { system: true },
      },
    ]
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for "WARNING Critical dependency: the request of a dependency is an expression"
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, '../src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, '../src'),
      {}
    )
  ]
}
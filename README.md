# Daffodil
[![Build Status](https://travis-ci.com/graycoreio/daffodil.svg?branch=master)](https://travis-ci.com/graycoreio/daffodil)
[![npm version](https://badge.fury.io/js/%40daffodil%2Fcore.svg)](https://www.npmjs.com/@daffodil/core)

## Getting started

### Using Daffodil in Your Own Project
1. `npm install @daffodil/core`

### Running the example foundation-app

- Ensure that lerna is installed in your local environment `npm install --global lerna`.
- Clone this repository and run `cd daffodil`.
- Run `lerna bootstrap`. This will basically run `npm install` in all required packages within the project. 
- Compile the `@daffodil/core` project by running `npm run-script build:lib`. This will compile the `@daffodil/core` module into an npm package in the `dist` folder, identical to the one located in the npm `@daffodil/core` repository. 
- To run the foundation-app that points to the built `@daffodil/core` module, run `ng serve --app=foundation-demo`. This will serve the foundation-app to `localhost:4200`.

## Contributing

Please read the [contributing guidelines here](https://github.com/graycore/daffodil/blob/master/CONTRIBUTING.md).

## Build

Run `npm run-script build:lib` to build the `@daffodil/core` project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Release

After updating the version and navigating to the dist folder, run `npm publish` to publish the current version of @daffodil/core to npm.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

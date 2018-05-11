# Daffodil

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

## Getting started

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Running the example foundation-app**

- After cloning this repository and running `npm install`, 
- compile the `@daffodil/core` project by running `npm run-script build:lib`. This will compile the `@daffodil/core` module into an npm package in the `dist` folder, identical to the one located in the npm `@daffodil/core` repository. 
- To run the foundation-app that points to the built `@daffodil/core` module, run `ng serve --app=foundation-demo`. This will serve the foundation-app to `localhost:4200`.

## Contributing
Please read the [contributing guidelines here](https://github.com/graycore/daffodil/blob/master/CONTRIBUTING.md).

## Development server

Run `ng serve --app=myapp` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm build:lib` to build the @daffodil/core project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Release

After updating the version and navigating to the dist folder, run `npm publish` to publish the current version of @daffodil/core to npm.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

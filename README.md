# Daffodil
[![Build Status](https://travis-ci.com/graycoreio/daffodil.svg?branch=master)](https://travis-ci.com/graycoreio/daffodil)
[![npm version](https://badge.fury.io/js/%40daffodil%2Fcore.svg)](https://www.npmjs.com/@daffodil/core)

## Using Daffodil To Build an Ecommerce Store
1. Setup a new `@angular/cli` project
2. `npm install @daffodil/core` - Install Core Daffodil Module
3. `npm install @ngrx/store @ngrx/effects @ngrx/entity` - Install Necessary Peer Dependencies
4. Add the following to your application's root `AppModule`.
    ```
    @NgModule({
        ...
        imports: [
            ...
            StoreModule.forRoot({}),
            EffectsModule.forRoot([]),
            DaffodilModule.forRoot({BASE_URL: "YOUR_STORE_URL_GOES_HERE"}),
            ...
        ],
        ...
    })
    export class FoundationModule { }
    ```
5. Replace default with your store's url in your `AppModule`
6. Check out Daffodil's `Foundation Theme` for code examples.

### Running the example foundation-app
1. Ensure that lerna is installed in your local environment `npm install --global lerna`.
2. Run `lerna bootstrap`. This will basically run `npm install` in all required packages within the project. 
3. Compile the `@daffodil/core` project by running `npm run-script build:lib`
    * This will compile the `@daffodil/core` module into an npm package in the `dist` folder, identical to the one located in the npm `@daffodil/core` repository. 
4. `ng serve --app=foundation-demo`
5. Navigate to `localhost:4200` in your browser of choice

## Contributing

Please read the [contributing guidelines here](https://github.com/graycore/daffodil/blob/master/CONTRIBUTING.md).

### Build

Run `npm run-script build:lib` to build the `@daffodil/core` project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Release

After updating the version and navigating to the dist folder, run `npm publish` to publish the current version of @daffodil/core to npm.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

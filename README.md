# Daffodil
[![Build Status](https://travis-ci.com/graycoreio/daffodil.svg?branch=master)](https://travis-ci.com/graycoreio/daffodil)
[![npm version](https://badge.fury.io/js/%40daffodil%2Fcore.svg)](https://www.npmjs.com/@daffodil/core)

## What is Daffodil?

## Example Stores

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

## Contributing
Please read the [contributing guidelines here](https://github.com/graycore/daffodil/blob/master/CONTRIBUTING.md).

## Build

Run `ng build core` to build the @daffodil/core project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Release

After updating the version and navigating to the dist folder, run `npm publish` to publish the current version of @daffodil/core to npm.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

To run an individual suite:

```
ng test core
ng test foundation-demo
```

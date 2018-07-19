# Daffodil
[![Join the chat at https://gitter.im/graycoreio/daffodil](https://badges.gitter.im/graycoreio/daffodil.svg)](https://gitter.im/graycoreio/daffodil?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.com/graycoreio/daffodil.svg?branch=master)](https://travis-ci.com/graycoreio/daffodil)
[![npm version](https://badge.fury.io/js/%40daffodil%2Fcore.svg)](https://www.npmjs.com/@daffodil/core)

## Current Stability - Alpha

## What is Daffodil?
Daffodil is a set of frontend libraries that intends to accomplish three things:
1. Improve the developer workflow when writing frontend software for online stores.
2. Provide a consistent frontend developer tool-chain regardless of a business's chosen Ecommerce platform
3. Drastically improve the end-user experience of online-shopping.

Daffodil provides several modules to improve different aspects of developer workflow:

1. `@daffodil/state` (partially complete) - An extendable Ecommerce redux store
2. `@daffodil/driver` (todo) - An extendable API interface with configurable drivers for different Ecommerce platforms.
3. `@daffodil/model` (partially complete) - An extendable set of models for Ecommerce.

Additionally, we plan on providing additional sample implementations of the `@daffodil` modules
in the style of some of the major frontend libraries. To date, we're focusing only on:
1. [Foundation](https://foundation.zurb.com/)

### Benefits For Developers

* Daffodil builds upon state-of-the-art development tools like Angular (6+) and Redux
* Daffodil seamlessly integrates with the major Ecommerce platforms Shopify and Magento (2.3+)
* Daffodil's codebase is fully-tested and CI covered (Unit, Integration, and E2E).
* Daffodil's core team reviews every pull-request individually to ensure code quality remains high.
* Daffodil's `foundation-demo` provides a sample for implementing technologies like:
   * Server Side Rendering
   * Progressive Web Apps
* Daffodil is easily extensible so that you can:
  * Append your own redux state 
  * Add your own custom routing
  * Add your own custom design

### For End-users

* Daffodil (with the help of Angular) is written with Progressive Web Apps in mind, this means:
  * Offline Support
  * Service Worker Caching
  * App-like UX
  * Mobile App-like Installation
* Daffodil (with the help of Angular) supports simple Server Side Rendering for fantastic SEO

## Example Stores
Currently none, but you can check our progress by following the steps [here](https://github.com/graycoreio/daffodil/blob/develop/docs/DEVELOPER.md#running-the-example-foundation-demo).

## Using Daffodil To Build Your own Ecommerce Store
1. Setup a new `@angular/cli` project
2. `npm install --save @daffodil/core` - Install Core Daffodil Module
3. `npm install --save @ngrx/store @ngrx/effects @ngrx/entity` - Install Necessary Peer Dependencies
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
    export class AppModule { }
    ```
5. Replace the defaults with your store's url in your `AppModule`
6. Check out Daffodil's `Foundation Theme` for code examples.

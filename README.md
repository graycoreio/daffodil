# Daffodil
[![Join the chat at https://gitter.im/graycoreio/daffodil](https://badges.gitter.im/graycoreio/daffodil.svg)](https://gitter.im/graycoreio/daffodil?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://graycore.visualstudio.com/Daffodil/_apis/build/status/Daffodil-CI?branchName=develop)](https://graycore.visualstudio.com/Daffodil/_build/latest?definitionId=6&branchName=develop)
[![npm version](https://badge.fury.io/js/%40daffodil%2Fcore.svg)](https://www.npmjs.com/@daffodil/checkout)

## Current Stability - Alpha

## Packages
* @daffodil/core
* @daffodil/product
* @daffodil/cart
* @daffodil/checkout
* @daffodil/driver

## What is Daffodil?
Daffodil is a set of frontend libraries that intends to accomplish three things:
1. Improve the developer workflow when writing frontend software for online stores.
2. Provide a consistent frontend developer tool-chain regardless of a business's chosen Ecommerce platform
3. Drastically improve the end-user experience of online-shopping.

Currently, Daffodil provides several modules to improve different aspects of developer workflow:

1. `@daffodil/core` (partially complete) - Daffodil's core - a set of interfaces and factories for Ecommerce.
2. `@daffodil/product` (partially complete) - An extendable redux store for Ecommerce products.
2. `@daffodil/cart` (partially complete) - An extendable redux store for an Ecommerce cart.
2. `@daffodil/checkout` (partially complete) - An extendable redux store for Ecommerce checkout.
3. `@daffodil/driver` (todo) - An extendable API interface with configurable drivers for different Ecommerce platforms.

### Benefits For Developers

* Daffodil builds upon state-of-the-art development tools like Angular (6+) and Redux
* Daffodil seamlessly integrates with the major Ecommerce platforms Shopify and Magento (2.3+)
* Daffodil's codebase is fully-tested and CI covered (Unit, Integration, and E2E).
* Daffodil's core team reviews every pull-request individually to ensure code quality remains high.
* Daffodil's `demo` provides a sample for implementing technologies like:
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
Currently none, but you can check our progress by following the steps [here](https://github.com/graycoreio/daffodil/blob/develop/docs/DEVELOPER.md#running-the-example-demo).

## Using Daffodil To Build Your own Ecommerce Store
1. Setup a new `@angular/cli` project
2. Install Daffodil Modules
    
    a. `npm install --save @daffodil/product` - Install Product Daffodil Module
    
    b. `npm install --save @daffodil/cart` - Install Cart Daffodil Module
    
    c. `npm install --save @daffodil/checkout` - Install Checkout Daffodil Module
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
6. Check out Daffodil's `Demo Theme` for code examples.

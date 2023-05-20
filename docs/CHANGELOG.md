# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.59.2](https://github.com/graycoreio/daffodil/compare/v0.59.1...v0.59.2) (2023-05-20)


### Features

* **cart:** change address update action payload to `Partial` ([#2443](https://github.com/graycoreio/daffodil/issues/2443)) ([c5374c2](https://github.com/graycoreio/daffodil/commit/c5374c250df8bc957562805449fad6041196e9ac))

## [0.59.1](https://github.com/graycoreio/daffodil/compare/v0.59.0...v0.59.1) (2023-05-16)


### Features

* **authorizenet:** only dispatch success when accept.js actually loads ([#2436](https://github.com/graycoreio/daffodil/issues/2436)) ([37e0548](https://github.com/graycoreio/daffodil/commit/37e0548d330c64decc7ff807b3df107c758db168))
* **daffio:** update theming and utilities module implementation ([#2181](https://github.com/graycoreio/daffodil/issues/2181)) ([0ef4921](https://github.com/graycoreio/daffodil/commit/0ef4921ae1603f9d8918ee355a44c847e4b3f0ce))
* **design-land:** update theming and utilities module implementation ([#2184](https://github.com/graycoreio/daffodil/issues/2184)) ([fa594ca](https://github.com/graycoreio/daffodil/commit/fa594ca4093e25471ec48a44209a7ba4bd7b7475))
* **design:** create skeleton state UI ([#2206](https://github.com/graycoreio/daffodil/issues/2206)) ([aceb06c](https://github.com/graycoreio/daffodil/commit/aceb06ce53c5fdbddeeb36f7e28839d4a04ccb1c))
* **design:** implement skeleton UI for DaffImageComponent ([#2207](https://github.com/graycoreio/daffodil/issues/2207)) ([b430efa](https://github.com/graycoreio/daffodil/commit/b430efa897ee40a453ddc4e6325c7c909f417ebb))
* **design:** implement skeleton UI for DaffMediaGalleryComponent ([#2208](https://github.com/graycoreio/daffodil/issues/2208)) ([964d0ce](https://github.com/graycoreio/daffodil/commit/964d0cea90054072de949e3411d6e0725e3cb8ce))


### Bug Fixes

* **order:** order total factory creating mock objects with static `type` ([#2438](https://github.com/graycoreio/daffodil/issues/2438)) ([d6bfc05](https://github.com/graycoreio/daffodil/commit/d6bfc05bd2fb69e617a369ebbba084ca16ca8c97))
* **product-composite:** fix and extract query param ([#2437](https://github.com/graycoreio/daffodil/issues/2437)) ([98d5272](https://github.com/graycoreio/daffodil/commit/98d5272e48c4e52517d7f7a7c62065b9a80710ea))

## [0.59.0](https://github.com/graycoreio/daffodil/compare/v0.58.10...v0.59.0) (2023-05-10)


### ⚠ BREAKING CHANGES

* **cart,payment:** `DaffPaymentStateReducerAdapter#storeError` now accepts an array of errors

### Features

* **authorizenet,payment:** set anet errors for apply failure ([#2432](https://github.com/graycoreio/daffodil/issues/2432)) ([f902c64](https://github.com/graycoreio/daffodil/commit/f902c6412f04640816e09f1db98fdf29acf10a24))
* **cart,payment:** set payment errors instead of concating ([#2433](https://github.com/graycoreio/daffodil/issues/2433)) ([130a9f9](https://github.com/graycoreio/daffodil/commit/130a9f996361152969cec71b02a05cc23fbd6ceb))
* **paypal:** shallow spread Magento driver config ([#2434](https://github.com/graycoreio/daffodil/issues/2434)) ([56f474e](https://github.com/graycoreio/daffodil/commit/56f474e52194a7e5e34d18974db3c812d3837cd7))
* **product-composite:** add item and option factories ([#2429](https://github.com/graycoreio/daffodil/issues/2429)) ([d70bf3d](https://github.com/graycoreio/daffodil/commit/d70bf3d9e92c52fcbd3f320e9f6f59150783762d))
* **product-composite:** add service for generating share codes ([#2431](https://github.com/graycoreio/daffodil/issues/2431)) ([cc00ed9](https://github.com/graycoreio/daffodil/commit/cc00ed9edf0a6b78b006ada3ae473e1f81c2a949))


### Bug Fixes

* **cart:** add a missing peer dep on payment ([#2419](https://github.com/graycoreio/daffodil/issues/2419)) ([decf6fd](https://github.com/graycoreio/daffodil/commit/decf6fd14d36a2ea995213afbfb04d52bdf867e9))
* **product-composite:** preselect item options based on configurable query param ([#2001](https://github.com/graycoreio/daffodil/issues/2001)) ([48514c4](https://github.com/graycoreio/daffodil/commit/48514c4a681b4cfac05c593641cd498f0db2d0f2))

### [0.58.10](https://github.com/graycoreio/daffodil/compare/v0.58.9...v0.58.10) (2023-05-05)


### Bug Fixes

* **cart-store-credit, magento:** handle guest store credit ([#2413](https://github.com/graycoreio/daffodil/issues/2413)) ([8556e84](https://github.com/graycoreio/daffodil/commit/8556e84bf30a9f2599acdfe6d7243e2834560a06))

### [0.58.9](https://github.com/graycoreio/daffodil/compare/v0.58.8...v0.58.9) (2023-05-03)


### Features

* add `@daffodil/customer-store-credit` and `@daffodil/cart-store-credit`  ([#2395](https://github.com/graycoreio/daffodil/issues/2395)) ([f86bfb3](https://github.com/graycoreio/daffodil/commit/f86bfb3ecdae8ebfcd3f7240c218a01c052d1770))
* **customer-order:** support injectable Magento fragments and transforms ([#2410](https://github.com/graycoreio/daffodil/issues/2410)) ([8e3ecee](https://github.com/graycoreio/daffodil/commit/8e3ecee1e437a3428b5c745d94d4cd8379eb2828))
* **order:** allow arbitrary total types ([#2409](https://github.com/graycoreio/daffodil/issues/2409)) ([82b9c4b](https://github.com/graycoreio/daffodil/commit/82b9c4b4f04110e4a1d8678815d2f8afec6cfb83))
* **order:** reorder totals in Magento driver ([#2411](https://github.com/graycoreio/daffodil/issues/2411)) ([2d271dc](https://github.com/graycoreio/daffodil/commit/2d271dc879f5ccd1cce924f38e422d60fe4f6505))

### [0.58.8](https://github.com/graycoreio/daffodil/compare/v0.58.7...v0.58.8) (2023-05-02)


### Features

* **auth:** redirect to query param value when present ([#2408](https://github.com/graycoreio/daffodil/issues/2408)) ([e57bcf0](https://github.com/graycoreio/daffodil/commit/e57bcf0fd0b9043db7f71bcd3fe29875085db657))
* **category:** add injectable reducer support ([#2404](https://github.com/graycoreio/daffodil/issues/2404)) ([52b6412](https://github.com/graycoreio/daffodil/commit/52b6412b0d1170f0257fa833331145388c4f5b59))
* **core,product:** support product filters in discrete query params ([#2407](https://github.com/graycoreio/daffodil/issues/2407)) ([0b6b843](https://github.com/graycoreio/daffodil/commit/0b6b84332dffdc01e45a582bb317750f92e9a66b))
* **product:** spread routing config ([#2405](https://github.com/graycoreio/daffodil/issues/2405)) ([6883424](https://github.com/graycoreio/daffodil/commit/6883424a6169087bb2c98ba49e9530224a76c8ec))

### [0.58.7](https://github.com/graycoreio/daffodil/compare/v0.58.6...v0.58.7) (2023-04-27)


### Features

* **cart,magento:** full cart on update coupon ([b62fea7](https://github.com/graycoreio/daffodil/commit/b62fea754c555da6da88fb757c32d480ac2ba436))
* **paypal:** add `DaffPaypalApplyPayment` to `DaffPaypalActions` ([#2401](https://github.com/graycoreio/daffodil/issues/2401)) ([34c2efe](https://github.com/graycoreio/daffodil/commit/34c2efe5a8a5a4b21d144a7d4a62fb09c95dccef))

### [0.58.6](https://github.com/graycoreio/daffodil/compare/v0.58.5...v0.58.6) (2023-04-27)


### Features

* **authorizenet:** add injectable reducers ([#2400](https://github.com/graycoreio/daffodil/issues/2400)) ([c086e6d](https://github.com/graycoreio/daffodil/commit/c086e6d2f098b0dceda7a7b7fa06c71446898691))
* **cart, magento:** always load shipping methods on cart ([#2402](https://github.com/graycoreio/daffodil/issues/2402)) ([9f1c4d8](https://github.com/graycoreio/daffodil/commit/9f1c4d8ebedb83d0b1db2ef2a47009cdd190cf4c))
* **cart:** add free shipping payment method injection token ([#2398](https://github.com/graycoreio/daffodil/issues/2398)) ([bcce413](https://github.com/graycoreio/daffodil/commit/bcce4134606ffb80de83d61e160fab6846de1b7b))

### [0.58.5](https://github.com/graycoreio/daffodil/compare/v0.58.4...v0.58.5) (2023-04-25)


### Features

* **order:** add injectable reducers ([#2399](https://github.com/graycoreio/daffodil/issues/2399)) ([cd9619e](https://github.com/graycoreio/daffodil/commit/cd9619eefe3942c8912a4244d483c5ccbc213370))

### [0.58.4](https://github.com/graycoreio/daffodil/compare/v0.58.3...v0.58.4) (2023-04-14)


### Features

* **cart-customer, magento:** allow undefined billing address ([#2396](https://github.com/graycoreio/daffodil/issues/2396)) ([c2fe6af](https://github.com/graycoreio/daffodil/commit/c2fe6af49ee2bfca7f651b32feca7f6388f7483f))


### Bug Fixes

* **cart:** cart resolved state stuck on failed ([#2394](https://github.com/graycoreio/daffodil/issues/2394)) ([935a627](https://github.com/graycoreio/daffodil/commit/935a62749ca12f708348a294e223d04b50daeb14))
* **cart:** preventing ordering when grand total is 0 ([#2393](https://github.com/graycoreio/daffodil/issues/2393)) ([8c0453a](https://github.com/graycoreio/daffodil/commit/8c0453a26894734bd6dbfe81303914993170289f))

### [0.58.3](https://github.com/graycoreio/daffodil/compare/v0.58.2...v0.58.3) (2023-04-12)


### Bug Fixes

* **cart-customer:** magento driver errors for address update ([#2392](https://github.com/graycoreio/daffodil/issues/2392)) ([f3759f3](https://github.com/graycoreio/daffodil/commit/f3759f3af2efbb97b5ddc6b297c3be3e3bf7bc29))

### [0.58.2](https://github.com/graycoreio/daffodil/compare/v0.58.1...v0.58.2) (2023-04-11)


### Bug Fixes

* **product*:** product extensions missing required fields in state ([#2391](https://github.com/graycoreio/daffodil/issues/2391)) ([815311f](https://github.com/graycoreio/daffodil/commit/815311f9363b3013ba161c569efae4bc52176b6a))
* **product:** meta reducers not injecting into state ([#2389](https://github.com/graycoreio/daffodil/issues/2389)) ([28245cc](https://github.com/graycoreio/daffodil/commit/28245ccf72c5be29797477609540abb1751a9c9e))
* **related,upsell:** dedupe meta reducers crashing product state ([#2390](https://github.com/graycoreio/daffodil/issues/2390)) ([25dabd7](https://github.com/graycoreio/daffodil/commit/25dabd7575b4f965ba52c8e28c95f9eec66e094b))

### [0.58.1](https://github.com/graycoreio/daffodil/compare/v0.58.0...v0.58.1) (2023-04-11)


### Bug Fixes

* **product*:** pieces of products in state get nulled when fields are missing ([#2388](https://github.com/graycoreio/daffodil/issues/2388)) ([196200b](https://github.com/graycoreio/daffodil/commit/196200ba34c816c8d5204d84b39523ea450b9307))

## [0.58.0](https://github.com/graycoreio/daffodil/compare/v0.57.0...v0.58.0) (2023-04-06)


### ⚠ BREAKING CHANGES

* **auth,cart-customer,customer-auth:** `DaffAuthRevoke` and `DaffAuthComplete` have been removed
* **core:** `daffBuildFragmentNameSpread` now only uses the first fragment name from each passed definition

this is to allow additional fragments to be interpolated into injected fragments.

### Features

* **auth,cart-customer,customer-auth:** don't call driver for missing token ([#2387](https://github.com/graycoreio/daffodil/issues/2387)) ([273b332](https://github.com/graycoreio/daffodil/commit/273b332b9811fb2d3828dee2810312c9d3024cf7))
* **cart:** add generics to magento cart transformer ([#2379](https://github.com/graycoreio/daffodil/issues/2379)) ([72dfa99](https://github.com/graycoreio/daffodil/commit/72dfa992b00395e3c82a61ed928c999903b75875))
* **cart:** don't add contextual cart item errors to global state ([#2377](https://github.com/graycoreio/daffodil/issues/2377)) ([c6db207](https://github.com/graycoreio/daffodil/commit/c6db2077c961cd07c957d90c77bf9848d2172414))
* **cart:** export mock classes ([#2382](https://github.com/graycoreio/daffodil/issues/2382)) ([84224e9](https://github.com/graycoreio/daffodil/commit/84224e9444f12cfb6a6d0eadd754f7ac4b2cb9a5))
* **cart:** use `user_errors` for Magento add to cart errors ([#2378](https://github.com/graycoreio/daffodil/issues/2378)) ([41aa023](https://github.com/graycoreio/daffodil/commit/41aa023845459397c6a89b6171c9a474e87d197c))
* **core:** arithmetic corrections ([#2381](https://github.com/graycoreio/daffodil/issues/2381)) ([61bd6ab](https://github.com/graycoreio/daffodil/commit/61bd6ab4d96b21f2f44fda671781b74d1a3efb4e))
* **core:** change fragment name spread to only get first fragment ([#2380](https://github.com/graycoreio/daffodil/issues/2380)) ([95fa1dc](https://github.com/graycoreio/daffodil/commit/95fa1dcbf987815fe449ef36e163049eb3d38201))
* **driver,auth:** clear Apollo cache when customer is logged out ([#2385](https://github.com/graycoreio/daffodil/issues/2385)) ([aad083d](https://github.com/graycoreio/daffodil/commit/aad083d595ef3eccf8815e278e4385299d34c3fc))
* **driver:** reload window to clear cache ([#2386](https://github.com/graycoreio/daffodil/issues/2386)) ([75e7ada](https://github.com/graycoreio/daffodil/commit/75e7ada90b4448fba2c8965075e630732bfec57c))

## [0.57.0](https://github.com/graycoreio/daffodil/compare/v0.56.1...v0.57.0) (2023-03-24)


### ⚠ BREAKING CHANGES

* **category:** removes `MagentoCategory#products`

### Features

* **category:** remove nested products query in Magento driver ([#2375](https://github.com/graycoreio/daffodil/issues/2375)) ([fb8019a](https://github.com/graycoreio/daffodil/commit/fb8019ae2e5bfa5ec4a1f1fe0094227a96cf5856))

### [0.56.1](https://github.com/graycoreio/daffodil/compare/v0.56.0...v0.56.1) (2023-03-22)


### Bug Fixes

* **category:** info persists when loading new category ([#2373](https://github.com/graycoreio/daffodil/issues/2373)) ([bd166dd](https://github.com/graycoreio/daffodil/commit/bd166dd57eceb4d99fa9865f245dc0a5c8835c36))

## [0.56.0](https://github.com/graycoreio/daffodil/compare/v0.55.0...v0.56.0) (2023-03-22)


### ⚠ BREAKING CHANGES

* **product:** product reducer state, selectors, and facade have been changed to `@daffodil/core/state`'s operation state interfaces
* **category:** category page reducer state, selectors, and facade have been changed to `@daffodil/core/state`'s operation state interfaces

### Features

* **category:** add injectable product reducer ([#2371](https://github.com/graycoreio/daffodil/issues/2371)) ([8958c5d](https://github.com/graycoreio/daffodil/commit/8958c5d0b29d9c1e32adaf56bc7782a2cd4f6576))
* **category:** use operation state ([#2369](https://github.com/graycoreio/daffodil/issues/2369)) ([8dbfc3c](https://github.com/graycoreio/daffodil/commit/8dbfc3c162426314fe8cce3365170ddc60f511f9))
* **product:** use operation state ([#2370](https://github.com/graycoreio/daffodil/issues/2370)) ([816f186](https://github.com/graycoreio/daffodil/commit/816f18657b1f9c086104f85657c63f198ee5bd21))


### Bug Fixes

* **product:** incorrect typing for injectable extra reducers ([#2372](https://github.com/graycoreio/daffodil/issues/2372)) ([d0bc28b](https://github.com/graycoreio/daffodil/commit/d0bc28b6e922c174a4de47f35bdc52bbb7aa9550))

## [0.55.0](https://github.com/graycoreio/daffodil/compare/v0.54.0...v0.55.0) (2023-03-22)


### ⚠ BREAKING CHANGES

* **cart:** `DaffStatefulCartItem#errors` has been removed in favor of `DaffStatefulCartItem#daffErrors`
* **order:** order reducer state and selectors have been changed to `@daffodil/core/state`'s operation state interfaces
* **core, customer:** consolidate errors and loading in operation state (#2363)

### Features

* **cart:** use `DaffErrorable` in stateful cart item ([#2365](https://github.com/graycoreio/daffodil/issues/2365)) ([fdf6fce](https://github.com/graycoreio/daffodil/commit/fdf6fce4cb1e94032cef680878818b36e52ce719))
* **category:** add service for build category URL requests ([#2368](https://github.com/graycoreio/daffodil/issues/2368)) ([ddf6eab](https://github.com/graycoreio/daffodil/commit/ddf6eabac45f84f2aefebb8603e9f2a7b2e99dfe))
* **core, customer:** consolidate errors and loading in operation state ([#2363](https://github.com/graycoreio/daffodil/issues/2363)) ([ccf8231](https://github.com/graycoreio/daffodil/commit/ccf8231158704137637c79e1eb03a30fc544d10a))
* **customer:** don't store contextual entity errors in global state ([#2366](https://github.com/graycoreio/daffodil/issues/2366)) ([36a9d3a](https://github.com/graycoreio/daffodil/commit/36a9d3a33b1949592b0c0ff5d8f64867f2655928))
* **driver:** handle network errors in Magento error transform ([#2367](https://github.com/graycoreio/daffodil/issues/2367)) ([c566354](https://github.com/graycoreio/daffodil/commit/c566354f228cf61b9b4ab316d73d986e0385b090))
* **order:** use operation state ([#2364](https://github.com/graycoreio/daffodil/issues/2364)) ([b8abe38](https://github.com/graycoreio/daffodil/commit/b8abe381f47c48a86ac55332732ba6e0128863dc))

## [0.54.0](https://github.com/graycoreio/daffodil/compare/v0.53.1...v0.54.0) (2023-03-17)


### ⚠ BREAKING CHANGES

* **auth:** moves some state config to routing config

### Features

* **auth:** move redirect effects to routing ([#2362](https://github.com/graycoreio/daffodil/issues/2362)) ([c618188](https://github.com/graycoreio/daffodil/commit/c61818820f662c60b4a9be01a9182d03965c5afc))
* **core:** shallow-compare works with disjoint unions ([#2351](https://github.com/graycoreio/daffodil/issues/2351)) ([e35d45a](https://github.com/graycoreio/daffodil/commit/e35d45ab48d2fe9bdcbc8cb439d75e039f21624a))
* **design:** UI updates to menu component ([#2360](https://github.com/graycoreio/daffodil/issues/2360)) ([e37f6fa](https://github.com/graycoreio/daffodil/commit/e37f6fa6bff4413a66737dde28796af464da4c29))


### Bug Fixes

* **customer:** magento driver not transforming `street2` ([#2361](https://github.com/graycoreio/daffodil/issues/2361)) ([37036e9](https://github.com/graycoreio/daffodil/commit/37036e95ade45df786185a9094537b33bfd63be3))

### [0.53.1](https://github.com/graycoreio/daffodil/compare/v0.53.0...v0.53.1) (2023-03-11)


### Features

* **all:** upgrade to faker v7 ([#2358](https://github.com/graycoreio/daffodil/issues/2358)) ([8f8e876](https://github.com/graycoreio/daffodil/commit/8f8e87668157f4a90b6d618c04352f6c4316bf65))
* **design:** create menu component ([#2353](https://github.com/graycoreio/daffodil/issues/2353)) ([264a4df](https://github.com/graycoreio/daffodil/commit/264a4df5fbf963b29a3c3d64daf07c117fc1a9a2))

## [0.53.0](https://github.com/graycoreio/daffodil/compare/v0.52.0...v0.53.0) (2023-03-11)


### ⚠ BREAKING CHANGES

* **paypal:** removes `DaffPaypalPaymentResponse` and `DaffPaypalPaymentRequest` types

### Features

* **paypal:** narrow paypal types to be specific to express ([#2357](https://github.com/graycoreio/daffodil/issues/2357)) ([3558c7a](https://github.com/graycoreio/daffodil/commit/3558c7a10e779da4d650dc4bad2642e77dd71dfe))

## [0.52.0](https://github.com/graycoreio/daffodil/compare/v0.51.1...v0.52.0) (2023-03-10)


### ⚠ BREAKING CHANGES

* **cart,driver:** renamed `moneyFragment` to `magentoMoneyFragment` and moved export to `@daffodil/driver/magento`
* **customer-order,order:** `DaffOrder#email` is a new required field
* Previously, we compiled in partial mode. With the advent of Angular 13 (our specified peer dep), we no longer support the view engine, as a result we can fix many build errors caused by NGCC as we no longer need to ngcc!

### Features

* **all:** upgrade faker to v6 ([#2339](https://github.com/graycoreio/daffodil/issues/2339)) ([a88ddda](https://github.com/graycoreio/daffodil/commit/a88dddabd7320de29682716c6e38e873d0204f14))
* **authorizenet,payment:** allow for setting address by ID ([#2342](https://github.com/graycoreio/daffodil/issues/2342)) ([edc4c12](https://github.com/graycoreio/daffodil/commit/edc4c1250502d96b879a995d394bbd8b7dfbc2ac))
* **authorizenet:** export Magento driver services ([#2340](https://github.com/graycoreio/daffodil/issues/2340)) ([428cf60](https://github.com/graycoreio/daffodil/commit/428cf60a67207bf415f6366b0de7bbb4ff714859))
* **auth:** redirect to logout path for `DaffAuthRevoke` ([#2347](https://github.com/graycoreio/daffodil/issues/2347)) ([d696e73](https://github.com/graycoreio/daffodil/commit/d696e73cc5cd8792dbc80db6dc634027d82c2c85))
* **cart,driver:** move magento money fragment to driver ([#2354](https://github.com/graycoreio/daffodil/issues/2354)) ([63541b2](https://github.com/graycoreio/daffodil/commit/63541b2bdc6871428dc84c2c3ecbfbe0794f4a00))
* **cart:** add support for extra cart transforms in Magento driver ([#2343](https://github.com/graycoreio/daffodil/issues/2343)) ([3512894](https://github.com/graycoreio/daffodil/commit/351289448330c42f962e40fe94613d02ffe28bd1))
* compile in "full" mode ([9e0469a](https://github.com/graycoreio/daffodil/commit/9e0469ac2313f963aa57d976876fc057070e33b3))
* **core:** add reducers for clearing error when navigation completes ([#2335](https://github.com/graycoreio/daffodil/issues/2335)) ([ccd46cf](https://github.com/graycoreio/daffodil/commit/ccd46cfaf1aedf2494fe69db89401106dbf8b802))
* **customer-order,order:** add `email` to `DaffOrder` ([#2346](https://github.com/graycoreio/daffodil/issues/2346)) ([8bc240f](https://github.com/graycoreio/daffodil/commit/8bc240feb99606f9d089263b1514b279e5e52ec5))
* **customer-order:** send requests as POST ([#2356](https://github.com/graycoreio/daffodil/issues/2356)) ([91db7f7](https://github.com/graycoreio/daffodil/commit/91db7f7d8565d26d1fcb98ba95649165c9b089e6))
* **customer:** send magento queries as POST ([#2336](https://github.com/graycoreio/daffodil/issues/2336)) ([d5eea7e](https://github.com/graycoreio/daffodil/commit/d5eea7ec27cad74a355f969835b8ed37956c099d))

### [0.51.1](https://github.com/graycoreio/daffodil/compare/v0.51.0...v0.51.1) (2023-02-03)


### Features

* **customer:** add mock address facade and export testing helpers ([#2333](https://github.com/graycoreio/daffodil/issues/2333)) ([2391938](https://github.com/graycoreio/daffodil/commit/23919383bde0bd3da4325d2bcdf544399ebf2a30))

## [0.51.0](https://github.com/graycoreio/daffodil/compare/v0.50.0...v0.51.0) (2023-02-01)


### ⚠ BREAKING CHANGES

* **order:** orders are now stored as collections. driver responses and action payloads have been change accordingly
* `MagentoProductPageInfo` -> `MagentoSearchResultPageInfo`, `magentoProductPageInfoFragment` -> `magentoSearchResultPageInfoFragment`

### Features

* **cart:** add `customer_address_id` to Magento address ([#2330](https://github.com/graycoreio/daffodil/issues/2330)) ([ec89214](https://github.com/graycoreio/daffodil/commit/ec8921459980436a710bccf418f99b628518bf66))
* **core:** add `shallowCompare` ([#2323](https://github.com/graycoreio/daffodil/issues/2323)) ([cee9e8a](https://github.com/graycoreio/daffodil/commit/cee9e8a71a268b74f33f869c7de5aebd90ea0aea))
* **core:** add operation entity state ([#2318](https://github.com/graycoreio/daffodil/issues/2318)) ([83ebfcb](https://github.com/graycoreio/daffodil/commit/83ebfcb5beb4b9d00979fb7dae37cfa733e3910b))
* **customer-order:** add `@daffodil/customer-order/driver/magento/testing` ([#2328](https://github.com/graycoreio/daffodil/issues/2328)) ([e4f15c5](https://github.com/graycoreio/daffodil/commit/e4f15c578540c885e93d1a287a58492c887c5d92))
* **customer-order:** add `@daffodil/customer-order/driver/magento` ([#2328](https://github.com/graycoreio/daffodil/issues/2328)) ([d911c69](https://github.com/graycoreio/daffodil/commit/d911c6939eecec488d1f8ca7ff8661b8a52a8ac5))
* **customer-order:** add `@daffodil/customer-order/driver` ([#2328](https://github.com/graycoreio/daffodil/issues/2328)) ([fc64ede](https://github.com/graycoreio/daffodil/commit/fc64edea83c2f6c2e749b21cabe5f59dedad358e))
* **customer-order:** add `@daffodil/customer-order` ([#2328](https://github.com/graycoreio/daffodil/issues/2328)) ([c60d484](https://github.com/graycoreio/daffodil/commit/c60d48458203fdcf8d381cc3b5407478131c6a7c))
* **customer,customer-auth:** add address support ([#2319](https://github.com/graycoreio/daffodil/issues/2319)) ([486e775](https://github.com/graycoreio/daffodil/commit/486e775ad97ff5b248fef560008031465f538d1c))
* **driver:** add magento filter input model ([#2325](https://github.com/graycoreio/daffodil/issues/2325)) ([722807b](https://github.com/graycoreio/daffodil/commit/722807b943f191215a0cb3477ff0c6f8e28a3227))
* **forms:** add `daffFormsPasswordValidator` ([#2313](https://github.com/graycoreio/daffodil/issues/2313)) ([f944740](https://github.com/graycoreio/daffodil/commit/f94474032199332f63b93fb47f1c7415d6b22b9c))
* **geography:** implement comparators with `shallowCompare` ([#2324](https://github.com/graycoreio/daffodil/issues/2324)) ([b206c26](https://github.com/graycoreio/daffodil/commit/b206c2646d863bee848ebeb6deda73dac951e8cb))
* move magento page info from product to driver ([#2320](https://github.com/graycoreio/daffodil/issues/2320)) ([08e2b35](https://github.com/graycoreio/daffodil/commit/08e2b35e8d82b5c4a90f8a3b2dd80c5fbca9ab36))
* **order:** add support for order collection ([#2326](https://github.com/graycoreio/daffodil/issues/2326)) ([2e6de81](https://github.com/graycoreio/daffodil/commit/2e6de81ed8826be940ab88b87cb33776f5248779))


### Bug Fixes

* **customer-auth:** customer state persists after logout ([#2327](https://github.com/graycoreio/daffodil/issues/2327)) ([b8f7e7b](https://github.com/graycoreio/daffodil/commit/b8f7e7be62f2d3d291c4115e531cd7f03492662a))

## [0.50.0](https://github.com/graycoreio/daffodil/compare/v0.49.0...v0.50.0) (2023-01-24)


### ⚠ BREAKING CHANGES

* **cart:** removes `DaffCartAddress#address_id` in favor of `DaffCartAddress#id`

### Features

* **authorizenet:** allow updating billing address by partial ([#2316](https://github.com/graycoreio/daffodil/issues/2316)) ([4177f32](https://github.com/graycoreio/daffodil/commit/4177f32ede1859c15c09c42d31a3c26b12f5f3d3))
* **auth:** set `loggedIn` state for auth check ([#2314](https://github.com/graycoreio/daffodil/issues/2314)) ([51aed3b](https://github.com/graycoreio/daffodil/commit/51aed3bde5b9f565022e7fca9029acc7b78bbe85))
* **auth:** track logged in status in state ([#2306](https://github.com/graycoreio/daffodil/issues/2306)) ([37efc65](https://github.com/graycoreio/daffodil/commit/37efc6522637999a4978f09434e96108cd2f975f))
* **cart-customer:** add magento payment driver ([#2312](https://github.com/graycoreio/daffodil/issues/2312)) ([6ad6497](https://github.com/graycoreio/daffodil/commit/6ad64974d5cf15752169b7ad523488667f07ff94))
* **cart:** extend `DaffCartAddress` from `DaffIdentifiable` ([#2315](https://github.com/graycoreio/daffodil/issues/2315)) ([eac86f9](https://github.com/graycoreio/daffodil/commit/eac86f967a79a9b4885f3710c4d749b7f84a8788))


### Bug Fixes

* **cart,geography:** ambiguous regions in Magento driver ([#2293](https://github.com/graycoreio/daffodil/issues/2293)) ([04282e2](https://github.com/graycoreio/daffodil/commit/04282e21777e22efcd44b7c030303ced3d91883b))
* **cart:** `street2` value not getting transformed in Magento driver ([#2302](https://github.com/graycoreio/daffodil/issues/2302)) ([2536869](https://github.com/graycoreio/daffodil/commit/253686975e0799825dc7ce180a811d1e55949145))

## [0.49.0](https://github.com/graycoreio/daffodil/compare/v0.48.2...v0.49.0) (2023-01-04)


### ⚠ BREAKING CHANGES

* **auth:** adds required fields to `DaffAuthStateConfig`
* **customer:** changes the name of the publicly exported `DaffClearErrorsGuard`

### Features

* **auth:** add `DaffAuthRedirectEffects` ([#2288](https://github.com/graycoreio/daffodil/issues/2288)) ([548be2e](https://github.com/graycoreio/daffodil/commit/548be2e272b287b934e86d297d0c1d3e03980a18))
* **auth:** do not crash when token is inaccessible ([#2299](https://github.com/graycoreio/daffodil/issues/2299)) ([4af5618](https://github.com/graycoreio/daffodil/commit/4af56185e3fd07d7d1e6706391061ce9c08b6dc5))
* **cart,cart-customer:** fallback to loading cart on merge failure ([#2289](https://github.com/graycoreio/daffodil/issues/2289)) ([6a14754](https://github.com/graycoreio/daffodil/commit/6a14754d1f622763b9ccc66a061692490f07797d))
* **customer:** `DaffClearErrorsGuard` -> `DaffCustomerClearErrorsGuard` ([#2286](https://github.com/graycoreio/daffodil/issues/2286)) ([ec10abe](https://github.com/graycoreio/daffodil/commit/ec10abe1b1984378e79cf53786814e41aa25d0b6))
* **geography:** send Magento driver calls as `GET` ([#2294](https://github.com/graycoreio/daffodil/issues/2294)) ([1189eb2](https://github.com/graycoreio/daffodil/commit/1189eb2eb90f4c143141eada444b730b55e1d595))


### Bug Fixes

* **cart-customer:** Magento driver always makes customer cart query ([#2290](https://github.com/graycoreio/daffodil/issues/2290)) ([545e5e3](https://github.com/graycoreio/daffodil/commit/545e5e392fa51d50f2b90af96208ef45bce292ef))

### [0.48.2](https://github.com/graycoreio/daffodil/compare/v0.48.1...v0.48.2) (2022-12-23)


### Features

* **core:** add `daffClearErrors` ([#2284](https://github.com/graycoreio/daffodil/issues/2284)) ([2c1a95a](https://github.com/graycoreio/daffodil/commit/2c1a95ac0b0515e726a74c65581f5d7b9ee5fd6d))
* **core:** add operation state ([#2256](https://github.com/graycoreio/daffodil/issues/2256)) ([cc25f3b](https://github.com/graycoreio/daffodil/commit/cc25f3bc6fd930a1e693b41c9933c1d32c01c209))
* **customer:** add `@daffodil/customer/driver/in-memory` ([#2248](https://github.com/graycoreio/daffodil/issues/2248)) ([1ad50aa](https://github.com/graycoreio/daffodil/commit/1ad50aaa3a61c548ff54a2044ed49115034e120e))
* **customer:** add `@daffodil/customer/driver/magento` ([#2248](https://github.com/graycoreio/daffodil/issues/2248)) ([a22d11b](https://github.com/graycoreio/daffodil/commit/a22d11b9628ed54e26cb7a6c6297543707c660e0))
* **customer:** add `@daffodil/customer/driver/testing` ([#2248](https://github.com/graycoreio/daffodil/issues/2248)) ([73597c4](https://github.com/graycoreio/daffodil/commit/73597c47c8aab3badc3a1694f908a4b37bf63f51))
* **customer:** add `@daffodil/customer/driver` ([#2248](https://github.com/graycoreio/daffodil/issues/2248)) ([00da76b](https://github.com/graycoreio/daffodil/commit/00da76bf8b87889c3d3b377f3d2816e4919dd555))
* **customer:** add `@daffodil/customer/routing` ([#2248](https://github.com/graycoreio/daffodil/issues/2248)) ([c5460d6](https://github.com/graycoreio/daffodil/commit/c5460d63fb395da9a029671923e59bb36132df3e))
* **customer:** add `@daffodil/customer/state` ([#2248](https://github.com/graycoreio/daffodil/issues/2248)) ([ba0993e](https://github.com/graycoreio/daffodil/commit/ba0993e3c30464b76aaaddf87310833fc0f23998))
* **customer:** add `@daffodil/customer/testing` ([#2248](https://github.com/graycoreio/daffodil/issues/2248)) ([6695ace](https://github.com/graycoreio/daffodil/commit/6695acebd2ab6d36fb4e4ea6f7966a1703e127e1))
* **customer:** add `@daffodil/customer` ([#2248](https://github.com/graycoreio/daffodil/issues/2248)) ([b0df641](https://github.com/graycoreio/daffodil/commit/b0df6419260b316624e58e8862fcf566f4cf55e4))
* **customer:** add clear errors action and guard ([#2285](https://github.com/graycoreio/daffodil/issues/2285)) ([d29b17a](https://github.com/graycoreio/daffodil/commit/d29b17ae09f5f672e8390ae692dca966b83fc7bf))
* **customer:** add newsletter subscription support ([#2283](https://github.com/graycoreio/daffodil/issues/2283)) ([32289a2](https://github.com/graycoreio/daffodil/commit/32289a24061965f144d59af1145e88a5e73e2ee9))
* **customer:** add update, change email, and change password ([#2282](https://github.com/graycoreio/daffodil/issues/2282)) ([dbe65b8](https://github.com/graycoreio/daffodil/commit/dbe65b81fcc04e031ab520ec3b34152327a042fc))
* **external-router:** improve the typing of `daffExtractDaffPathData` ([#2271](https://github.com/graycoreio/daffodil/issues/2271)) ([63b5629](https://github.com/graycoreio/daffodil/commit/63b5629efd16b0e86cc590b3bc29ca830fd110c8))
* **forms:** add `@daffodil/forms` and `daffFormNotEmptyValidator` ([#2254](https://github.com/graycoreio/daffodil/issues/2254)) ([a9ebada](https://github.com/graycoreio/daffodil/commit/a9ebada8f03adb4e919009898555df1e6ef66999))


### Bug Fixes

* **auth:** SSR storage errors break apps ([#2250](https://github.com/graycoreio/daffodil/issues/2250)) ([87dff58](https://github.com/graycoreio/daffodil/commit/87dff58279f49e7fd25077f1dfef3fb7478735f3))
* **cart,cart-customer:** address update fails for logged-in customers ([#2274](https://github.com/graycoreio/daffodil/issues/2274)) ([117adcd](https://github.com/graycoreio/daffodil/commit/117adcd5cc6fb591fa108a43f704dffb2e5c2113))
* **seo:** `DaffRestoreableMetaService#restore` not updating upsert cache ([#2264](https://github.com/graycoreio/daffodil/issues/2264)) ([e1da365](https://github.com/graycoreio/daffodil/commit/e1da3652f23250e55a4b9251e4b451173d28f309))

### [0.48.1](https://github.com/graycoreio/daffodil/compare/v0.48.0...v0.48.1) (2022-12-12)


### Features

* **reviews:** export mock models and change private to protected ([#2262](https://github.com/graycoreio/daffodil/issues/2262)) ([f570d32](https://github.com/graycoreio/daffodil/commit/f570d3227deb6a632c909390f2896657437fee0a))


### Bug Fixes

* **driver:** incorrect Magento Breadcrumb type policy key field ([#2258](https://github.com/graycoreio/daffodil/issues/2258)) ([f07377b](https://github.com/graycoreio/daffodil/commit/f07377bca96598e88be8ccef10f020a131d4c255))

## [0.48.0](https://github.com/graycoreio/daffodil/compare/v0.47.3...v0.48.0) (2022-12-08)


### ⚠ BREAKING CHANGES

* **product:** all filter related features have been moved to `@daffodil/core`
* **core:** add required filter fields to `DaffCollectionMetadata` and `DaffCollectionRequest`
* **category:** The `category` and `products` api calls made by this driver are now a single call. If you were previously leveraging fragments aggressively and relying on the queries to be split for query complexity reasons, you will need to revisit your queries.

Co-authored-by: Damien Retzinger <damienwebdev@gmail.com>

### Features

* **auth:** add `firstName` and `lastName` to `DaffAccountRegistration` ([#2249](https://github.com/graycoreio/daffodil/issues/2249)) ([6449486](https://github.com/graycoreio/daffodil/commit/644948641beb162f734c1af6702722f046ae0bf8))
* **authorizenet:** ensure config is present in Magento driver ([#2008](https://github.com/graycoreio/daffodil/issues/2008)) ([5f2e64a](https://github.com/graycoreio/daffodil/commit/5f2e64ac5577ad2956c835220b29a52644dd3fd7))
* **category:** fix filter move breaking changes ([#2198](https://github.com/graycoreio/daffodil/issues/2198)) ([2beacd0](https://github.com/graycoreio/daffodil/commit/2beacd0527d943c00bf207b3775b0af8e966fe72))
* **category:** use `route` query in Magento driver ([#2141](https://github.com/graycoreio/daffodil/issues/2141)) ([fe8fa32](https://github.com/graycoreio/daffodil/commit/fe8fa323a812cb43e9c0fe225c6e6f8973c1849e))
* **core:** add filters to collection ([#2198](https://github.com/graycoreio/daffodil/issues/2198)) ([2a4c2cc](https://github.com/graycoreio/daffodil/commit/2a4c2cc7b74d8ca8e4e9a93352f304b9fa71ff7c))
* **driver:** add type policies injection point for magento drivers ([#2255](https://github.com/graycoreio/daffodil/issues/2255)) ([9e7a4ab](https://github.com/graycoreio/daffodil/commit/9e7a4ab2ddef45702839684b53fab1330133f5d6))
* **product:** remove filter features ([#2198](https://github.com/graycoreio/daffodil/issues/2198)) ([4abb68e](https://github.com/graycoreio/daffodil/commit/4abb68ef26d983bd3e84e661168f2c2bffe5e524))
* **reviews:** use `@daffodil/core` filters ([#2198](https://github.com/graycoreio/daffodil/issues/2198)) ([3f8d17d](https://github.com/graycoreio/daffodil/commit/3f8d17d40f4d464e1778bc9806177c7f609e968e))
* **search-product:** fix filter move breaking changes ([#2198](https://github.com/graycoreio/daffodil/issues/2198)) ([454eadd](https://github.com/graycoreio/daffodil/commit/454eadd1f53f183703ac45d4923ac554205e237e))


### Bug Fixes

* **auth:** skip Apollo cache on Magento auth check ([#2260](https://github.com/graycoreio/daffodil/issues/2260)) ([b6cdd68](https://github.com/graycoreio/daffodil/commit/b6cdd68a2745b229897b5b488489c9e05b76a12f))

### [0.47.3](https://github.com/graycoreio/daffodil/compare/v0.47.2...v0.47.3) (2022-11-04)


### Features

* **auth:** add newsletter subscription to account registration ([#2242](https://github.com/graycoreio/daffodil/issues/2242)) ([3d12201](https://github.com/graycoreio/daffodil/commit/3d122010a05f234ae4e1b8033050154377d86e55))

### [0.47.2](https://github.com/graycoreio/daffodil/compare/v0.47.1...v0.47.2) (2022-11-02)


### Features

* **auth:** reset errors after success ([#2240](https://github.com/graycoreio/daffodil/issues/2240)) ([35cdbcc](https://github.com/graycoreio/daffodil/commit/35cdbcccc1eb0c6516e1d3c4817f3e91c42fa2b5))
* **auth:** use `DaffQueuedApollo` in Magento driver ([#2239](https://github.com/graycoreio/daffodil/issues/2239)) ([9781ec6](https://github.com/graycoreio/daffodil/commit/9781ec63055eaf38aff00734a840e6bb21ec39c5))


### Bug Fixes

* **auth:** magento driver not throwing errors ([#2241](https://github.com/graycoreio/daffodil/issues/2241)) ([a056010](https://github.com/graycoreio/daffodil/commit/a056010019ff4498c4d4a60496d1fb2a4a7768aa))

### [0.47.1](https://github.com/graycoreio/daffodil/compare/v0.47.0...v0.47.1) (2022-11-01)

## [0.47.0](https://github.com/graycoreio/daffodil/compare/v0.46.0...v0.47.0) (2022-11-01)


### ⚠ BREAKING CHANGES

* **core,driver:** `DaffApolloCacheableOperationLinkGenerator` has been renamed to `DaffApolloLinkGenerator`
* **paypal:** - removes `DaffPaypalTokenResponse` and `DaffPaypalTokenRequest`
- `DaffPaypalServiceInterface` -> `DaffPaypalExpressServiceInterface`
- removes `DaffPaypalTransformerInterface`
- removes token storing from state and associated selectors/facade fields

### Features

* **all:** type action reducer maps ([#2220](https://github.com/graycoreio/daffodil/issues/2220)) ([2691d6c](https://github.com/graycoreio/daffodil/commit/2691d6c2b1c6bb3de6cb5831d6ac26b63c1cced1))
* **auth,demo:** add non-login register driver call ([#2223](https://github.com/graycoreio/daffodil/issues/2223)) ([8309f95](https://github.com/graycoreio/daffodil/commit/8309f95671ee999ed85ca659641f6477d63a4d54))
* **auth:** add `MagentoAuthApolloBearerTokenLinkGenerator` ([#2227](https://github.com/graycoreio/daffodil/issues/2227)) ([24c9077](https://github.com/graycoreio/daffodil/commit/24c90771cd5ab74cd7ffe2cf5685a63157e68029))
* **auth:** add redirect URLs for member and guest only guards ([#2233](https://github.com/graycoreio/daffodil/issues/2233)) ([793344a](https://github.com/graycoreio/daffodil/commit/793344a9246cc9a5586f31bc96dbf6093d69cc9f))
* **auth:** add reset password feature ([#2225](https://github.com/graycoreio/daffodil/issues/2225)) ([0d2ea8e](https://github.com/graycoreio/daffodil/commit/0d2ea8e7af1501ebcb570d5de9c50b95269a3f42))
* **auth:** dispatch auth complete when storing auth token ([#2232](https://github.com/graycoreio/daffodil/issues/2232)) ([ae10429](https://github.com/graycoreio/daffodil/commit/ae104293b2a11bd02e42bb61b08c7f5ae5e7373d))
* **authorizenet:** add payment actions and reducer ([#2216](https://github.com/graycoreio/daffodil/issues/2216)) ([0a6fe90](https://github.com/graycoreio/daffodil/commit/0a6fe90b4404a9bd4c6b4c38e0dcc87a08ea90cd))
* **authorizenet:** add payment driver ([#2215](https://github.com/graycoreio/daffodil/issues/2215)) ([5a2ecea](https://github.com/graycoreio/daffodil/commit/5a2ecea23f24efe2646833e9df339d9fee3d83d5))
* **authorizenet:** add payment models ([#2214](https://github.com/graycoreio/daffodil/issues/2214)) ([6e4bee0](https://github.com/graycoreio/daffodil/commit/6e4bee092b32ce234202f759e19ba15a21e43fb8))
* **auth:** remove auth token from storage on logout ([#2231](https://github.com/graycoreio/daffodil/issues/2231)) ([5b79c6d](https://github.com/graycoreio/daffodil/commit/5b79c6d26cfb24285e80fd9be19087a8ea0d18d2))
* **auth:** remove auth token from storage when check fails ([#2229](https://github.com/graycoreio/daffodil/issues/2229)) ([42ccc40](https://github.com/graycoreio/daffodil/commit/42ccc404188e7772c7d0adc8ebb45219156179f3))
* **auth:** run auth check on a configurable interval ([#2236](https://github.com/graycoreio/daffodil/issues/2236)) ([a3d4d14](https://github.com/graycoreio/daffodil/commit/a3d4d14e0c3af1987982a837b605d5ee8f071ccd))
* **auth:** use customer email for auth check instead of ID ([#2230](https://github.com/graycoreio/daffodil/issues/2230)) ([67494ef](https://github.com/graycoreio/daffodil/commit/67494efa859dd948548abec72b4dd41cd83abdff))
* **cart,cart-customer:** add `@daffodil/cart-customer` ([#2235](https://github.com/graycoreio/daffodil/issues/2235)) ([af3f000](https://github.com/graycoreio/daffodil/commit/af3f00044817da4630c23a57772921216422a9b2))
* **cart:** add `@daffodil/payment` support ([#2212](https://github.com/graycoreio/daffodil/issues/2212)) ([944b823](https://github.com/graycoreio/daffodil/commit/944b82398a1ed8b58bf18ad3aa9cc559ad102571))
* **cart:** add `DaffCartServiceInterface#merge` ([#2224](https://github.com/graycoreio/daffodil/issues/2224)) ([bd6050f](https://github.com/graycoreio/daffodil/commit/bd6050f7d353eb62f5a93fe95a2cf11a439b23c3))
* **cart:** add optional `billingAddress` param to `DaffCartPaymentServiceInterface#update` ([#2213](https://github.com/graycoreio/daffodil/issues/2213)) ([7831a16](https://github.com/graycoreio/daffodil/commit/7831a16e67f361358b68f80033fdfa0ceac1eff5))
* **cart:** create cart when user is unauthorized ([#2234](https://github.com/graycoreio/daffodil/issues/2234)) ([8e7242a](https://github.com/graycoreio/daffodil/commit/8e7242a82fa55ac46dfc6b3ad928c0055b419f47))
* **cart:** handle auth flow ([#2226](https://github.com/graycoreio/daffodil/issues/2226)) ([7917cc0](https://github.com/graycoreio/daffodil/commit/7917cc08f8505f29dd8c24514c57f0e44c94e8d9))
* **core,driver:** rename `DaffApolloCacheableOperationLinkGenerator` -> `DaffApolloLinkGenerator` ([#2222](https://github.com/graycoreio/daffodil/issues/2222)) ([979dc94](https://github.com/graycoreio/daffodil/commit/979dc94a8f0d86e97cfe6ff3cac6276d6e4c4c91))
* **demo:** prevent lib imports on demo ([#2202](https://github.com/graycoreio/daffodil/issues/2202)) ([519393d](https://github.com/graycoreio/daffodil/commit/519393d7afcadcdcab0135b8a0e1e3d1b8ce8606))
* **design-land:** prevent lib imports ([#2209](https://github.com/graycoreio/daffodil/issues/2209)) ([6dafaff](https://github.com/graycoreio/daffodil/commit/6dafaffcbcd160d85a5e1664221df45674cc91fb))
* **payment:** add `@daffodil/payment` ([#2200](https://github.com/graycoreio/daffodil/issues/2200)) ([3402649](https://github.com/graycoreio/daffodil/commit/3402649888a5b02b7116e56e9cdb80b244fb8311))
* **paypal:** add support for `@daffodil/payment` ([#2217](https://github.com/graycoreio/daffodil/issues/2217)) ([c96251e](https://github.com/graycoreio/daffodil/commit/c96251e017acfacf0765d66821a9f87ae4e486d2))

## [0.46.0](https://github.com/graycoreio/daffodil/compare/v0.45.1...v0.46.0) (2022-09-28)


### ⚠ BREAKING CHANGES

* **product*,category,reviews:** `DaffMagentoProductPreviewExtraTransform` -> `DaffMagentoProductExtraTransform`, `DaffMagentoProductPreviewTransform` -> `DaffMagentoProductTransform`

### Features

* **core:** add collection filters ([#2197](https://github.com/graycoreio/daffodil/issues/2197)) ([a2ee656](https://github.com/graycoreio/daffodil/commit/a2ee656680682e2069bd29f725eb2d7c64c5c6d5))
* **product*,category,reviews:** rework product previews ([#2199](https://github.com/graycoreio/daffodil/issues/2199)) ([716e340](https://github.com/graycoreio/daffodil/commit/716e340dc9d2b7f8b90dd5605f0854cfcb5e6ed6))


### Bug Fixes

* **order:** magento driver not setting `email` ([#2196](https://github.com/graycoreio/daffodil/issues/2196)) ([e289a77](https://github.com/graycoreio/daffodil/commit/e289a77505bba97f2902d68986cfc5857e8e2bd8))

### [0.45.1](https://github.com/graycoreio/daffodil/compare/v0.45.0...v0.45.1) (2022-09-09)


### Features

* **design:** export typography classes for external usage and update usage documentation ([#2180](https://github.com/graycoreio/daffodil/issues/2180)) ([ef4bb96](https://github.com/graycoreio/daffodil/commit/ef4bb9623f5463efb7a5b05432ae36c436a2cf6e))
* **reviews:** export testing module ([#2183](https://github.com/graycoreio/daffodil/issues/2183)) ([0a4fa9a](https://github.com/graycoreio/daffodil/commit/0a4fa9a60de48786c61d156c5517b21dc3c28d5c))


### Bug Fixes

* **design:** remove double slash in card theme module imports ([#2185](https://github.com/graycoreio/daffodil/issues/2185)) ([f14ff9e](https://github.com/graycoreio/daffodil/commit/f14ff9efd1e716bb30e972659c2367ab818ea7c5))

## [0.45.0](https://github.com/graycoreio/daffodil/compare/v0.44.1...v0.45.0) (2022-09-08)


### ⚠ BREAKING CHANGES

* **reviews:** `DaffProductReviews#metadata` has a new required field: `filter`
* We have upgraded our build deps to Node 16. This may
have downstream side-effects to consumers that we can't predict.

### Features

* **design:** add default theme and update getting started ([#2157](https://github.com/graycoreio/daffodil/issues/2157)) ([db2d002](https://github.com/graycoreio/daffodil/commit/db2d0027e7d35ad0f102d47fc255fa5eabfbc176))
* **design:** remove `daff-` prefix from main scss files ([#2175](https://github.com/graycoreio/daffodil/issues/2175)) ([8d15b3b](https://github.com/graycoreio/daffodil/commit/8d15b3b039e8f2c51bb37afb02d2a3a8ae276dfc))
* **reviews:** add filter support ([#2171](https://github.com/graycoreio/daffodil/issues/2171)) ([5dac268](https://github.com/graycoreio/daffodil/commit/5dac2686b3ec97783ca9381d945c8ae9b55ea048))
* **reviews:** export validators and errors from Magento driver ([#2182](https://github.com/graycoreio/daffodil/issues/2182)) ([bd890ee](https://github.com/graycoreio/daffodil/commit/bd890ee5cecd0ec5830f646a05f29171c4d89e47))


### Bug Fixes

* **core:** change base64 type for Node 16 ([4cd0780](https://github.com/graycoreio/daffodil/commit/4cd07805e93d3c81fcabf2681435844c583b145c))
* **design:** add exports for external usage ([#2173](https://github.com/graycoreio/daffodil/issues/2173)) ([5e2700c](https://github.com/graycoreio/daffodil/commit/5e2700cb5f4157d197c848eb199f5a4d00858850))
* **design:** add missing peer dependencies ([#2174](https://github.com/graycoreio/daffodil/issues/2174)) ([ba9c582](https://github.com/graycoreio/daffodil/commit/ba9c58256deea73dc891617fcfc54d5b4a6f20a6))
* **design:** handle root theme variables ([#2179](https://github.com/graycoreio/daffodil/issues/2179)) ([fb54393](https://github.com/graycoreio/daffodil/commit/fb54393abdd451332dd3377c5a8e12f16a38b9d6))
* **design:** remove tilde from cdk and modern normalize module imports ([#2178](https://github.com/graycoreio/daffodil/issues/2178)) ([9c956c8](https://github.com/graycoreio/daffodil/commit/9c956c8eeb5d9a9025155c0fe8e1f1aaeb8ce7da))
* **reviews:** collection actions don't change loading state ([#2170](https://github.com/graycoreio/daffodil/issues/2170)) ([5e15933](https://github.com/graycoreio/daffodil/commit/5e15933010ececa068b0c4ce49717193b306576a))
* **reviews:** magento query not cacheable ([#2169](https://github.com/graycoreio/daffodil/issues/2169)) ([bec37a0](https://github.com/graycoreio/daffodil/commit/bec37a0e7317c71328e39d44aae2dfc827e74bb9))


* feat!(deps): upgrade to node16 ([89fbede](https://github.com/graycoreio/daffodil/commit/89fbedec35479ae2fe13081ab718e1dc4cde5d05))

### [0.44.1](https://github.com/graycoreio/daffodil/compare/v0.44.0...v0.44.1) (2022-09-01)


### Features

* **category:** remove old fields from  `MockDaffCategoryFacade` ([#2163](https://github.com/graycoreio/daffodil/issues/2163)) ([df175b0](https://github.com/graycoreio/daffodil/commit/df175b07f929aeb176fe9efa5683eb47c3c91852))
* **design:** update root theme css variables implmentation ([#2164](https://github.com/graycoreio/daffodil/issues/2164)) ([79ae505](https://github.com/graycoreio/daffodil/commit/79ae505ec15ebb070cfef43e5ddcaa8f0bc844d1))
* **reviews:** provide `DaffReviewedProductFactory` in product factory ([#2165](https://github.com/graycoreio/daffodil/issues/2165)) ([2ef135c](https://github.com/graycoreio/daffodil/commit/2ef135c7d9d86a6b2c739f5d1e912ff326bf2752))


### Bug Fixes

* **design:** fix module path in theme-css-variables and update token mixin name ([#2167](https://github.com/graycoreio/daffodil/issues/2167)) ([cccd94b](https://github.com/graycoreio/daffodil/commit/cccd94bcb135b47502b1d206b4e21ec8f29c6636))

## [0.44.0](https://github.com/graycoreio/daffodil/compare/v0.43.1...v0.44.0) (2022-08-23)


### ⚠ BREAKING CHANGES

* **category:** - `DaffCategoryPageFilterActionTypes` has been renamed to `DaffCategoryPageProductCollectionActionTypes`
- `CategoryPageChangeSizeAction`, `CategoryPageChangeCurrentPageAction`, and `CategoryPageChangeSortingOptionAction` have been moved to `DaffCategoryPageProductCollectionActionTypes`
- all product collection related selectors and facade fields have been moved to `DaffCategoryPageProductCollectionSelectors` and `DaffCategoryProductCollectionFacade` repsectively

### Features

* **category:** set applied sort option and direction ([#2160](https://github.com/graycoreio/daffodil/issues/2160)) ([5ed70ae](https://github.com/graycoreio/daffodil/commit/5ed70ae7886c67d14fb8b9ca5119af82016c278e))
* **category:** use product collection routing ([#2162](https://github.com/graycoreio/daffodil/issues/2162)) ([597ab41](https://github.com/graycoreio/daffodil/commit/597ab4132f0e679fdc4975dca19a376d42fd17bc))
* **category:** use product collection state ([#2161](https://github.com/graycoreio/daffodil/issues/2161)) ([9eb3089](https://github.com/graycoreio/daffodil/commit/9eb30895bde6427e35793461833353e285e2d2dc))
* **core:** ensure `currentPage` value is greater than 0 ([#2159](https://github.com/graycoreio/daffodil/issues/2159)) ([0d8c4aa](https://github.com/graycoreio/daffodil/commit/0d8c4aa9ca2333ab0de47b0c08f9024a7d15fd9b))
* **reviews:** add `@daffodil/reviews/driver/in-memory` ([#2139](https://github.com/graycoreio/daffodil/issues/2139)) ([1ca8e80](https://github.com/graycoreio/daffodil/commit/1ca8e809c0e6498bedb4bdb922c0a568051aef57))
* **reviews:** add `@daffodil/reviews/driver/magento/testing` ([#2139](https://github.com/graycoreio/daffodil/issues/2139)) ([89ea154](https://github.com/graycoreio/daffodil/commit/89ea154fe3615bdc20a70b49ad37b3d9a3824fe3))
* **reviews:** add `@daffodil/reviews/driver/magento` ([#2139](https://github.com/graycoreio/daffodil/issues/2139)) ([85d8eef](https://github.com/graycoreio/daffodil/commit/85d8eeffeaa7b5c4ed67470fc1c21601753879f8))
* **reviews:** add `@daffodil/reviews/driver/testing` ([#2139](https://github.com/graycoreio/daffodil/issues/2139)) ([a2ce36b](https://github.com/graycoreio/daffodil/commit/a2ce36b58c1530a00d9abf54e3eb7f1c9df24ab4))
* **reviews:** add `@daffodil/reviews/driver` ([#2139](https://github.com/graycoreio/daffodil/issues/2139)) ([e8c2865](https://github.com/graycoreio/daffodil/commit/e8c2865466e546cd13159654cf2084b816751dfa))
* **reviews:** add `@daffodil/reviews/state/testing` ([#2139](https://github.com/graycoreio/daffodil/issues/2139)) ([3977744](https://github.com/graycoreio/daffodil/commit/3977744d05aaf1082fe24eb18606c5dbdb9fb05a))
* **reviews:** add `@daffodil/reviews/state` ([#2139](https://github.com/graycoreio/daffodil/issues/2139)) ([0a201c5](https://github.com/graycoreio/daffodil/commit/0a201c5a9bbf37947216cda04213f0905d5192f6))
* **reviews:** add `@daffodil/reviews/testing` ([#2139](https://github.com/graycoreio/daffodil/issues/2139)) ([9b7d9cc](https://github.com/graycoreio/daffodil/commit/9b7d9ccbca801a4c070f72924a0911e0b3a09472))
* **reviews:** add `@daffodil/reviews` ([#2139](https://github.com/graycoreio/daffodil/issues/2139)) ([bb95672](https://github.com/graycoreio/daffodil/commit/bb956724dc7fe0f06ffcf1173cfe4ca5367bb187))

### [0.43.1](https://github.com/graycoreio/daffodil/compare/v0.43.0...v0.43.1) (2022-08-09)


### Features

* **search:** reset results state when a search begins ([#2155](https://github.com/graycoreio/daffodil/issues/2155)) ([2394f16](https://github.com/graycoreio/daffodil/commit/2394f167a48a85aceb4f69d518306c435ff1738d))

## [0.43.0](https://github.com/graycoreio/daffodil/compare/v0.42.4...v0.43.0) (2022-08-06)


### ⚠ BREAKING CHANGES

* **product:** removes `DaffProductCollectionResponse`
* **category,product:** `DaffProductCollectionRequest` and `DaffProductCollectionMetadata` now extend from collection interfaces in `@daffodil/core`. snake_cased keys have been changed to camelCase and `total_products` has been changed to `count`. A required `ids` field has been added to `DaffProductCollectionMetadata`. `DaffCategoryPageMetadata#product_ids` has been removed; use the extended `DaffCollectionMetadata#ids`.
* **core:** collection related fields have been changed from snake_case to camelCase
* **design:** dependents must use the new `@forward` and `@use` syntax of sass.

See https://sass-lang.com/documentation/at-rules/use#:~:text=Sass%20also%20provides%20built%2Din,times%20those%20styles%20are%20loaded.
* **design:** sass import path has changed from @daffodil/design/* to @daffodil/design/scss/*
* **category,product:** all product filter, sorting, and pagination related features have been renamed and moved to `@daffodil/product`
* **core,category:** `DaffNumericallyPaginable`, `DaffSortable`, `DaffSortOption`, `DaffSortOptions`, and `DaffSortDirectionEnum` have all been moved to `@daffodil/core`

* feat(category): fix breaking changes

### Features

* **all:** remove `Dict` and replace with `Record` ([#2120](https://github.com/graycoreio/daffodil/issues/2120)) ([590b5e1](https://github.com/graycoreio/daffodil/commit/590b5e19d6f6b376c4566b3a4d5a41a67cba57e3))
* **branding:** update  to sass module system ([#2117](https://github.com/graycoreio/daffodil/issues/2117)) ([ddf8e78](https://github.com/graycoreio/daffodil/commit/ddf8e78eea634de72afb31d39ac2a2db28f0f27b))
* **cart,product:** add `DaffProductNotFoundError` ([#2136](https://github.com/graycoreio/daffodil/issues/2136)) ([ba56a15](https://github.com/graycoreio/daffodil/commit/ba56a15ae65ec2ee163097d75eda5855eefcd1f3))
* **cart:** do not cache magento driver apollo queries ([#2099](https://github.com/graycoreio/daffodil/issues/2099)) ([ab6bb46](https://github.com/graycoreio/daffodil/commit/ab6bb464e3ade6cbfd5982311a188f092e77d7f8))
* **category,product:** add `total_products` to `DaffProductCollectionMetadata` ([#2107](https://github.com/graycoreio/daffodil/issues/2107)) ([8f71ae8](https://github.com/graycoreio/daffodil/commit/8f71ae8d974f19e75e2b36edded8c806693e0f36))
* **category,product:** move product collection to `@daffodil/product` ([#2053](https://github.com/graycoreio/daffodil/issues/2053)) ([7a571b7](https://github.com/graycoreio/daffodil/commit/7a571b7dfc792541029451f98333eb33bd23bd5a))
* **category,product:** use collection models and fix breaking changes ([#2123](https://github.com/graycoreio/daffodil/issues/2123)) ([04c9627](https://github.com/graycoreio/daffodil/commit/04c9627b294e4ede67e382010e07eef9642e14d5))
* **category:** use parent factories ([#2134](https://github.com/graycoreio/daffodil/issues/2134)) ([3caf02e](https://github.com/graycoreio/daffodil/commit/3caf02eb11fd24be0353be2fd41ff415a6268ecc))
* **core,category:** move collection models to root and add factories ([#2103](https://github.com/graycoreio/daffodil/issues/2103)) ([5df3bb8](https://github.com/graycoreio/daffodil/commit/5df3bb8dd64975ca536a0c45dd4e924bf540c807))
* **core:** add `DaffCollectionPageOutOfBoundsError` ([#2118](https://github.com/graycoreio/daffodil/issues/2118)) ([a6cba18](https://github.com/graycoreio/daffodil/commit/a6cba18a96f129a731b07e8b4b97f7b8f2e30651))
* **core:** add `daffIdentifiableArrayToDict` ([#2119](https://github.com/graycoreio/daffodil/issues/2119)) ([eba0ce7](https://github.com/graycoreio/daffodil/commit/eba0ce7342a4c03b10b85d17747d324f331d79d4))
* **core:** add `daffIdentityReducer` ([#2100](https://github.com/graycoreio/daffodil/issues/2100)) ([4459ea0](https://github.com/graycoreio/daffodil/commit/4459ea095a7d5ffc1b894580147f2009568b2316))
* **core:** add additional collection interfaces and factories ([#2122](https://github.com/graycoreio/daffodil/issues/2122)) ([d1bc9b3](https://github.com/graycoreio/daffodil/commit/d1bc9b357233a4f9d18e2aede0b67f45f22a0a66))
* **core:** add collection action interfaces ([#2133](https://github.com/graycoreio/daffodil/issues/2133)) ([a6d1eb2](https://github.com/graycoreio/daffodil/commit/a6d1eb280ba089cd93bb820623526a2f5768bb7d))
* **core:** add collection facade ([#2142](https://github.com/graycoreio/daffodil/issues/2142)) ([6a84c2b](https://github.com/graycoreio/daffodil/commit/6a84c2bbd6038bf732477d447e2c84174dcbe1ce))
* **core:** add collection initial state and adapter ([#2137](https://github.com/graycoreio/daffodil/issues/2137)) ([93a6757](https://github.com/graycoreio/daffodil/commit/93a67577d4f0bed47c3052fc95a8e9bfd7b56e51))
* **core:** add collection metadata and request builders ([#2135](https://github.com/graycoreio/daffodil/issues/2135)) ([3033abd](https://github.com/graycoreio/daffodil/commit/3033abd96853944607a736f1af83bf1c2c74ac06))
* **core:** add collection selector factory ([#2140](https://github.com/graycoreio/daffodil/issues/2140)) ([23aa4ac](https://github.com/graycoreio/daffodil/commit/23aa4ac26666e190fd520c9414286400236cd895))
* **core:** camelCase `DaffNumericallyPaginable` and `DaffSortable` fields ([#2123](https://github.com/graycoreio/daffodil/issues/2123)) ([e429279](https://github.com/graycoreio/daffodil/commit/e429279b16acd91c47fe01c837fe3da808230788))
* **daffio, design-land:** update daff.io and design-land to use the theme switch package ([#2073](https://github.com/graycoreio/daffodil/issues/2073)) ([0956adc](https://github.com/graycoreio/daffodil/commit/0956adc23d1b8cc63d00bac6a5e13fda2bfe29eb))
* **daffio:** update  to sass module system ([#2117](https://github.com/graycoreio/daffodil/issues/2117)) ([1b38d66](https://github.com/graycoreio/daffodil/commit/1b38d66ddaff1fdc1096bd1b669c912331638f78))
* **demo:** update  to sass module system ([#2117](https://github.com/graycoreio/daffodil/issues/2117)) ([3142bea](https://github.com/graycoreio/daffodil/commit/3142bea6956ac7ea8d22d9de7f5d97f6bd5981ed))
* **design-land:** update design land to sass module system ([#2117](https://github.com/graycoreio/daffodil/issues/2117)) ([6436b2f](https://github.com/graycoreio/daffodil/commit/6436b2fc263e1f5bfb87e51af53ad09f6b7fb6be))
* **design:** allow root css variables to be used with or without theme switching ([#2126](https://github.com/graycoreio/daffodil/issues/2126)) ([a7c3493](https://github.com/graycoreio/daffodil/commit/a7c3493e18e70e8af8510ed27af8386c7c5a5c61))
* **design:** change import path for daffodil sass files ([b79dfe1](https://github.com/graycoreio/daffodil/commit/b79dfe1c32b6ba687111d9e4bca25a719e1324a5))
* **design:** update theming to sass module system ([#2117](https://github.com/graycoreio/daffodil/issues/2117)) ([421288d](https://github.com/graycoreio/daffodil/commit/421288da9476a37a1afd5c7155e491b829a63949))
* **design:** use sass module system ([#2113](https://github.com/graycoreio/daffodil/issues/2113)) ([5dbec30](https://github.com/graycoreio/daffodil/commit/5dbec304757fcdbe13be8a3135ff45de9fc7bed5))
* **product-composite,configurable:** change reducers to adapter pattern ([#2114](https://github.com/graycoreio/daffodil/issues/2114)) ([35cb6e9](https://github.com/graycoreio/daffodil/commit/35cb6e9419d638fb78b134485ca8b82e17f12d91))
* **product:** add `DaffProductCollectionRequestFactory` ([#2130](https://github.com/graycoreio/daffodil/issues/2130)) ([a8d4ef6](https://github.com/graycoreio/daffodil/commit/a8d4ef6d91fb8db648be1188d3d8772a221e7ade))
* **product:** add `DaffProductGetCollectionRequestFromRoute` ([#2106](https://github.com/graycoreio/daffodil/issues/2106)) ([147142d](https://github.com/graycoreio/daffodil/commit/147142db686bf3e6f6dbd7d808bf47877440cff7))
* **product:** add `DaffProductRoutingCollectionEffects` ([#2147](https://github.com/graycoreio/daffodil/issues/2147)) ([f836fb0](https://github.com/graycoreio/daffodil/commit/f836fb00e104cea8951eada17a28e72c936d7491))
* **product:** add `DaffProductRoutingModule` ([#2148](https://github.com/graycoreio/daffodil/issues/2148)) ([0d5d06b](https://github.com/graycoreio/daffodil/commit/0d5d06bdd0d1d6e7628589b60160101801eae897))
* **product:** add collection metadata and request builders and organize ([#2138](https://github.com/graycoreio/daffodil/issues/2138)) ([c684cc0](https://github.com/graycoreio/daffodil/commit/c684cc00c68b11955de3ee87fa2043e90acae1aa))
* **product:** add collection metadata state ([#2105](https://github.com/graycoreio/daffodil/issues/2105)) ([1c2205b](https://github.com/graycoreio/daffodil/commit/1c2205b8728188b9e3c4b3720a295212a3fe6afd))
* **product:** add support for injectable reducers ([#2116](https://github.com/graycoreio/daffodil/issues/2116)) ([a18ae31](https://github.com/graycoreio/daffodil/commit/a18ae316d6823aab2f2fb468fcf2bf005b9661ab))
* **product:** default filters to `{}` in collection adapter ([#2150](https://github.com/graycoreio/daffodil/issues/2150)) ([1932bcf](https://github.com/graycoreio/daffodil/commit/1932bcfc357cb7553130dfdd2ff4ade9ffbeaea9))
* **product:** move collection request fields to constant ([#2145](https://github.com/graycoreio/daffodil/issues/2145)) ([ef1fadb](https://github.com/graycoreio/daffodil/commit/ef1fadb71cb52856742b51d0e1fd3566c31af420))
* **product:** replace `DaffProductCollectionResponse` with `DaffProductCollection` ([#2132](https://github.com/graycoreio/daffodil/issues/2132)) ([59f6f50](https://github.com/graycoreio/daffodil/commit/59f6f50c21c38163c7cabd3cbb88b5319e561447))
* **product:** replace query param tokens with config ([#2144](https://github.com/graycoreio/daffodil/issues/2144)) ([0003e65](https://github.com/graycoreio/daffodil/commit/0003e65d02640894b382661f189d3a145c78e4af))
* **product:** transform sort option and direction in Magento driver ([#2108](https://github.com/graycoreio/daffodil/issues/2108)) ([d33cf62](https://github.com/graycoreio/daffodil/commit/d33cf62c2c8d774c9e0a23ce78c4f0bf4273969b))
* **product:** use `MockCollectionMetadata` in factory ([#2129](https://github.com/graycoreio/daffodil/issues/2129)) ([59f1783](https://github.com/graycoreio/daffodil/commit/59f178345ef731bdda493b178427bef14c1f1e86))
* **release:** list remaining placeholder deps in leaf version error ([#2154](https://github.com/graycoreio/daffodil/issues/2154)) ([c9097cd](https://github.com/graycoreio/daffodil/commit/c9097cdbfc96f7b2a1c248f32ba875fd0ce7c37b))
* **search-category:** add `@daffodil/search-category/driver/in-memory` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([708348d](https://github.com/graycoreio/daffodil/commit/708348d63274f75c6529205a54dbcc473c29f66e))
* **search-category:** add `@daffodil/search-category/driver/magento` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([50a6f8c](https://github.com/graycoreio/daffodil/commit/50a6f8cde240fedcf4259b9dea61cd04c433c08e))
* **search-category:** add `@daffodil/search-category/driver/testing` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([6687a8d](https://github.com/graycoreio/daffodil/commit/6687a8d7619d91c857fef0c99c2273441519abf8))
* **search-category:** add `@daffodil/search-category/driver` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([7218809](https://github.com/graycoreio/daffodil/commit/721880904fcfab38ecb4631e32f551f7582f8274))
* **search-category:** add `@daffodil/search-category/testing` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([498b3ff](https://github.com/graycoreio/daffodil/commit/498b3ffe5f4fe12b99fe84140ce27d038ba4bf45))
* **search-category:** add `@daffodil/search-category` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([9e4eb3f](https://github.com/graycoreio/daffodil/commit/9e4eb3fdddae2b420f834d895a566a9fb22d3d5c))
* **search-product-composite:** add `@daffodil/search-product-composite/state` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([43ea26f](https://github.com/graycoreio/daffodil/commit/43ea26f426ad34e6501abb91fd56ad442fe24026))
* **search-product-composite:** add `@daffodil/search-product-composite` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([3e2b395](https://github.com/graycoreio/daffodil/commit/3e2b39504043b1824065ffea27568a46b2c463cb))
* **search-product-configurable:** add `@daffodil/search-product-configurable/state` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([93d9c20](https://github.com/graycoreio/daffodil/commit/93d9c209f8d223564c92041d28b205adadb64c64))
* **search-product-configurable:** add `@daffodil/search-product-configurable` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([f17caad](https://github.com/graycoreio/daffodil/commit/f17caadd24aec24464c55f489909d30e7a35154b))
* **search-product:** add `@daffodil/search-product/driver/in-memory` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([212b3e6](https://github.com/graycoreio/daffodil/commit/212b3e649e5fa1a47c064c2a8b260bc273ce53a4))
* **search-product:** add `@daffodil/search-product/driver/magento` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([0ab53dc](https://github.com/graycoreio/daffodil/commit/0ab53dc3ff202e6533daf546bfa7b8aabdb11794))
* **search-product:** add `@daffodil/search-product/driver/testing` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([3612e99](https://github.com/graycoreio/daffodil/commit/3612e99aa6fb06a7cf668dd6294964fa669ef155))
* **search-product:** add `@daffodil/search-product/driver` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([d995677](https://github.com/graycoreio/daffodil/commit/d9956777ffb36cbe6d193942f310eb26dd26f0ac))
* **search-product:** add `@daffodil/search-product/routing` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([9e549a8](https://github.com/graycoreio/daffodil/commit/9e549a880c3e5fbfcae51f1066ed9dc8aa465f0a))
* **search-product:** add `@daffodil/search-product/state/testing` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([42b0cf8](https://github.com/graycoreio/daffodil/commit/42b0cf8e0fe039aaf94e10b2ba8bd865907cfd65))
* **search-product:** add `@daffodil/search-product/state` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([a5a84ee](https://github.com/graycoreio/daffodil/commit/a5a84ee288db4c14f788a0c66114ba196fcca3b5))
* **search-product:** add `@daffodil/search-product/testing` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([5a837ca](https://github.com/graycoreio/daffodil/commit/5a837ca36e66107b253a84fd736af8903f54d50d))
* **search-product:** add `@daffodil/search-product` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([b3ec86d](https://github.com/graycoreio/daffodil/commit/b3ec86d1f62d8b7899337c3bc0fd552f86d0be10))
* **search:** add `@daffodil/search/driver/federated` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([703db7a](https://github.com/graycoreio/daffodil/commit/703db7afdfb8a22737c7bc9c88d83350366a6594))
* **search:** add `@daffodil/search/driver/in-memory` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([282d6e4](https://github.com/graycoreio/daffodil/commit/282d6e4c5098483a491c24fd0b4cd8b99131a5f1))
* **search:** add `@daffodil/search/driver/testing` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([aba5790](https://github.com/graycoreio/daffodil/commit/aba579041ee3ceb0974524ebac67c41d626a121c))
* **search:** add `@daffodil/search/driver` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([7b00ccc](https://github.com/graycoreio/daffodil/commit/7b00ccc33485be776723bba83fff170e623c72c5))
* **search:** add `@daffodil/search/routing` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([01652e3](https://github.com/graycoreio/daffodil/commit/01652e3a195652792bac8bd5e7f8fda020382ada))
* **search:** add `@daffodil/search/state/testing` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([7f096b0](https://github.com/graycoreio/daffodil/commit/7f096b05af0feee5cd195ecfb18a8636656dbbf0))
* **search:** add `@daffodil/search/state` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([a4fb2a8](https://github.com/graycoreio/daffodil/commit/a4fb2a84bfcfbc021d4317aa74090688843174cc))
* **search:** add `@daffodil/search/testing` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([b95f944](https://github.com/graycoreio/daffodil/commit/b95f944018b6552725b8df0dfaa9557434b74741))
* **search:** add `@daffodil/search` ([#2149](https://github.com/graycoreio/daffodil/issues/2149)) ([021d74b](https://github.com/graycoreio/daffodil/commit/021d74b6659a1c71c3a2372c3cc7482ab4deb5c7))
* **theme-switch:** create theme switch package ([#2073](https://github.com/graycoreio/daffodil/issues/2073)) ([db0e6aa](https://github.com/graycoreio/daffodil/commit/db0e6aad51f4e60e8bdda177533a5c7bfbee883a))


### Bug Fixes

* **cart:** magento driver not passing street2 value ([#2127](https://github.com/graycoreio/daffodil/issues/2127)) ([28da523](https://github.com/graycoreio/daffodil/commit/28da523cf827763345009bce0ad27826182bd1a3))
* **category,product:** magento driver setting wrong collection count ([#2151](https://github.com/graycoreio/daffodil/issues/2151)) ([231e33d](https://github.com/graycoreio/daffodil/commit/231e33df9b7f2bb1ed3ca18c7358ef46eccd4f0e))
* **design-land:** fix style file variable ([#2124](https://github.com/graycoreio/daffodil/issues/2124)) ([aee9d2d](https://github.com/graycoreio/daffodil/commit/aee9d2d1dfadf0490b046ec12315a15f1f03e47a))

### [0.42.4](https://github.com/graycoreio/daffodil/compare/v0.42.3...v0.42.4) (2022-05-11)

### [0.42.3](https://github.com/graycoreio/daffodil/compare/v0.42.2...v0.42.3) (2022-05-11)


### Features

* **content:** add `@daffodil/content` ([#2097](https://github.com/graycoreio/daffodil/issues/2097)) ([d22e91c](https://github.com/graycoreio/daffodil/commit/d22e91c4058c996a0b1f337696fe5547d0f38288))
* **content:** send Magento blocks request as GET ([#2098](https://github.com/graycoreio/daffodil/issues/2098)) ([89ee013](https://github.com/graycoreio/daffodil/commit/89ee0139ee4e4ec87c4a662cf9c80b66253a4100))
* **design:** clean up button styles and update docs ([#2092](https://github.com/graycoreio/daffodil/issues/2092)) ([18a5306](https://github.com/graycoreio/daffodil/commit/18a5306f8cf14b9b1b8ab2b410f24fe44585bc8e))

### [0.42.2](https://github.com/graycoreio/daffodil/compare/v0.42.1...v0.42.2) (2022-05-03)


### Features

* **analytics:** add cart pageview type ([#2094](https://github.com/graycoreio/daffodil/issues/2094)) ([fb717ee](https://github.com/graycoreio/daffodil/commit/fb717ee6f69b8ef68310f4804a82fb2c27badfdb))


### Bug Fixes

* **cart:** cart resolver not listening for new resolve actions ([#2093](https://github.com/graycoreio/daffodil/issues/2093)) ([769c4fe](https://github.com/graycoreio/daffodil/commit/769c4fec5b0c43f49c7aa633d08007d6e95164f6))

### [0.42.1](https://github.com/graycoreio/daffodil/compare/v0.42.0...v0.42.1) (2022-04-25)


### Features

* **cart:** reset order errors when cart is successfully mutated ([#2089](https://github.com/graycoreio/daffodil/issues/2089)) ([18335e4](https://github.com/graycoreio/daffodil/commit/18335e441a303b64a979c58caa05bfca226ce1b0))
* **demo:** add product ID resolver ([#2087](https://github.com/graycoreio/daffodil/issues/2087)) ([0810ef5](https://github.com/graycoreio/daffodil/commit/0810ef57f2def17046f72bb8abd931bb99e3dddc))
* **design-land:** update code preview UI ([#2072](https://github.com/graycoreio/daffodil/issues/2072)) ([af8465b](https://github.com/graycoreio/daffodil/commit/af8465ba5cbd7320635f05d7a732da16d33253bb))
* **driver:** export error codes ([#2091](https://github.com/graycoreio/daffodil/issues/2091)) ([4781400](https://github.com/graycoreio/daffodil/commit/478140065514decc1861747556d3f7d8febbd6f5))

## [0.42.0](https://github.com/graycoreio/daffodil/compare/v0.41.0...v0.42.0) (2022-04-18)


### ⚠ BREAKING CHANGES

* **external-router:** previously, the value of an individual daffPath key was a string. This was nonsensical, so we broke it.

### Features

* **external-router:** add a new Magento v2.4.3 driver ([#2085](https://github.com/graycoreio/daffodil/issues/2085)) ([802bb79](https://github.com/graycoreio/daffodil/commit/802bb79956a1e3623da463bda8884ff42419716f))
* **external-router:** allow for additional data to be stored on daffPaths in externally routed Routes. ([#2084](https://github.com/graycoreio/daffodil/issues/2084)) ([aecf893](https://github.com/graycoreio/daffodil/commit/aecf893e94277f236a05e96521dde4afe53dc739))
* **seo:** add a native @angular/router tracking layer ([#2083](https://github.com/graycoreio/daffodil/issues/2083)) ([ae4e4a0](https://github.com/graycoreio/daffodil/commit/ae4e4a0dae862770a345c2e382e528e444a2ad65))

## [0.41.0](https://github.com/graycoreio/daffodil/compare/v0.40.1...v0.41.0) (2022-04-06)


### ⚠ BREAKING CHANGES

* **all:** `apollo-angular` is now required for graphql drivers instead of `@damienwebdev/apollo-angular`
* rxjs v7 is now a peer dependency

### Features

* **analytics:** add `@daffodil/analytics` and `@daffodil/analytics-provider-data-layer` ([#2076](https://github.com/graycoreio/daffodil/issues/2076)) ([ada398f](https://github.com/graycoreio/daffodil/commit/ada398fd9ea69d778ac99e3db43f44544e7d8917))
* **daffio:** clean up 404 page ([#2060](https://github.com/graycoreio/daffodil/issues/2060)) ([cf4c6a3](https://github.com/graycoreio/daffodil/commit/cf4c6a309271a29889a9ac9faee158567f575e37))
* **design-land:** add highlight.js a11y themes to dark and light mode ([#2064](https://github.com/graycoreio/daffodil/issues/2064)) ([4d20670](https://github.com/graycoreio/daffodil/commit/4d206708064500d63d3fe9ecd35073ad69b0e43c))
* **design-land:** add theme switch functionality to design land ([#2059](https://github.com/graycoreio/daffodil/issues/2059)) ([c51d9b4](https://github.com/graycoreio/daffodil/commit/c51d9b4f7231c110c09c9e317c83268192cf7f7f))
* **design:** clean up article styles ([#2062](https://github.com/graycoreio/daffodil/issues/2062)) ([309e4c6](https://github.com/graycoreio/daffodil/commit/309e4c689a0ebfea573cb900386a3078348ccc96))
* **design:** update disabled button colors to switch correctly in dark mode ([#2074](https://github.com/graycoreio/daffodil/issues/2074)) ([49e4baf](https://github.com/graycoreio/daffodil/commit/49e4baf3af7012a2bf74cf93a4ead8dc62cd91f2))
* **design:** update quantity field focus functionality ([#1716](https://github.com/graycoreio/daffodil/issues/1716)) ([f312c35](https://github.com/graycoreio/daffodil/commit/f312c355ac3aedaf28d30a554b26a480c229b941))
* **tools-dgeni:** add a markdown processor that highlights code blocks ([d1b442d](https://github.com/graycoreio/daffodil/commit/d1b442dfce81dea6d40572cf4f6b1541041410e3))


### Bug Fixes

* **daffio:** update platform logos to work in dark mode ([#2054](https://github.com/graycoreio/daffodil/issues/2054)) ([8a43fb8](https://github.com/graycoreio/daffodil/commit/8a43fb808dfd36443c5bab47a1dc9ee7f58d012b))


* **all:** use new `apollo-angular` version and replace workaround p… ([#2071](https://github.com/graycoreio/daffodil/issues/2071)) ([f54d537](https://github.com/graycoreio/daffodil/commit/f54d537da780ead108eaa0faa7bdb6d4f6c9d27b))
* upgrade `rxjs` and `jasmine-marbles` ([#2065](https://github.com/graycoreio/daffodil/issues/2065)) ([c0781be](https://github.com/graycoreio/daffodil/commit/c0781be05de38132540e64cffdb2257a75fa2468)), closes [/github.com/ReactiveX/rxjs/blob/467c4e89ce6f3fcedcf6127ea38d7ce79d32d0f6/spec/observables/fromEvent-spec.ts#L183-L192](https://github.com/graycoreio//github.com/ReactiveX/rxjs/blob/467c4e89ce6f3fcedcf6127ea38d7ce79d32d0f6/spec/observables/fromEvent-spec.ts/issues/L183-L192)

### [0.40.1](https://github.com/graycoreio/daffodil/compare/v0.40.0...v0.40.1) (2022-03-23)

## [0.40.0](https://github.com/graycoreio/daffodil/compare/v0.39.13...v0.40.0) (2022-03-23)


### ⚠ BREAKING CHANGES

* dependents should upgrade to Angular 13, including ngrx 13 and TS 4.4

### Features

* **all:** @angular/cli migration - update-angular-config-v12 ([#2013](https://github.com/graycoreio/daffodil/issues/2013)) ([6a9aa84](https://github.com/graycoreio/daffodil/commit/6a9aa84ba86e471ea7ab67b0cd3701bded600dba))
* **all:** @angular/cli migration - update-zonejs ([#2013](https://github.com/graycoreio/daffodil/issues/2013)) ([dcac357](https://github.com/graycoreio/daffodil/commit/dcac35728792fd70bbbe7579c3f9cb44b9510106)), closes [/github.com/angular/angular/blob/master/packages/zone.js/CHANGELOG.md#breaking-changes-since-zonejs-v0111](https://github.com/graycoreio//github.com/angular/angular/blob/master/packages/zone.js/CHANGELOG.md/issues/breaking-changes-since-zonejs-v0111)
* **all:** Angular CLI update for packages - @angular/core@^12, @angular/cli@^12, @angular/cdk@^12, @ngrx/store@^12, @angular-devkit/build-angular@^12, @angular-eslint/builder@^12, @fortawesome/angular-fontawesome@^0.9.0, @nguniversal/express-engine@^12, @nguniversal/builders@^12 ([#2013](https://github.com/graycoreio/daffodil/issues/2013)) ([50db140](https://github.com/graycoreio/daffodil/commit/50db140f64318613b6e3e8b94f2974867a261da0))
* **all:** replace `apollo-angular` with `@damienwebdev/apollo-angular` ([#2013](https://github.com/graycoreio/daffodil/issues/2013)) ([700a53c](https://github.com/graycoreio/daffodil/commit/700a53cad809396c53e0e1cb8527361accae1f12))
* **all:** upgrade dependencies to Angular 13 ([#2013](https://github.com/graycoreio/daffodil/issues/2013)) ([222b66a](https://github.com/graycoreio/daffodil/commit/222b66a879709580db4d814b16cf351cfc701a44))
* **category,product,product-composite,product-configurable:** specify selectors type params ([#2013](https://github.com/graycoreio/daffodil/issues/2013)) ([2589608](https://github.com/graycoreio/daffodil/commit/258960859a9d2a48a5fdf590596afd6e40e92cd6))
* **core:** remove ref to `EmptyObject` ([#2030](https://github.com/graycoreio/daffodil/issues/2030)) ([66a45f6](https://github.com/graycoreio/daffodil/commit/66a45f6d8923c9cb396afb26027aa8a15685c166))
* **daffio:** add theme switch functionality to daff.io ([#2016](https://github.com/graycoreio/daffodil/issues/2016)) ([ef415fd](https://github.com/graycoreio/daffodil/commit/ef415fd63ed9de06db9416d6fe848f892a2ae6c5))
* **daffio:** update footer UI ([#2020](https://github.com/graycoreio/daffodil/issues/2020)) ([84dc80d](https://github.com/graycoreio/daffodil/commit/84dc80d399796aed4ce019aef4d0555d55d7d074))
* **demo:** default import possible types json ([#2013](https://github.com/graycoreio/daffodil/issues/2013)) ([bd59a37](https://github.com/graycoreio/daffodil/commit/bd59a373443b82b0d7e8ac23855f43c1fd779491))
* **demo:** import `ApolloModule` in Magento module ([#2013](https://github.com/graycoreio/daffodil/issues/2013)) ([7093fdb](https://github.com/graycoreio/daffodil/commit/7093fdb8d2b6385f59382cf254b9039badf5eb2b))
* **design:** add Daffodil theming service ([#1967](https://github.com/graycoreio/daffodil/issues/1967)) ([73658a2](https://github.com/graycoreio/daffodil/commit/73658a2b7941005cb304dbd4f0a8a62e6bbe8918))
* **design:** export design example components ([#2036](https://github.com/graycoreio/daffodil/issues/2036)) ([b427334](https://github.com/graycoreio/daffodil/commit/b42733463929b69ce7e5df87f10c5048b109db87))
* **design:** remove wcag requirements on button ([#2021](https://github.com/graycoreio/daffodil/issues/2021)) ([c72a9a3](https://github.com/graycoreio/daffodil/commit/c72a9a3ebd7837b8532dc08f11a584047625e93d))
* **design:** update icon button sizes to meet wcag touch target requirements ([#2019](https://github.com/graycoreio/daffodil/issues/2019)) ([798453d](https://github.com/graycoreio/daffodil/commit/798453dc088c7eb64ea093dcd5413fdd0be85e6c))
* **design:** workaround decorator issue in mixins ([#2037](https://github.com/graycoreio/daffodil/issues/2037)) ([07cfb33](https://github.com/graycoreio/daffodil/commit/07cfb339d10f497d1d743d1eb21214204aee50c5))
* **docs:** clean up api list page ([#1966](https://github.com/graycoreio/daffodil/issues/1966)) ([bf0f68e](https://github.com/graycoreio/daffodil/commit/bf0f68e975acda3e6682377d853de18d0b7448e5))
* upgrade to Angular 13 ([a791b49](https://github.com/graycoreio/daffodil/commit/a791b4930f8edd29af28793609d5fe0bdea3bbc3))


### Bug Fixes

* **cart:** server side cart resolution completes cart loading ([#2027](https://github.com/graycoreio/daffodil/issues/2027)) ([8c01f37](https://github.com/graycoreio/daffodil/commit/8c01f371b51b02b5a3c8e8d527ac4fcb219139ae))
* **daffio:** broken assets paths on server ([#2028](https://github.com/graycoreio/daffodil/issues/2028)) ([c7c061b](https://github.com/graycoreio/daffodil/commit/c7c061bea6e4cae9efced327b2baed978d898bf9))
* **design-land:** fix paginator import path ([#2046](https://github.com/graycoreio/daffodil/issues/2046)) ([8cb0325](https://github.com/graycoreio/daffodil/commit/8cb0325aaf3a2894e7145436ac82f79a7c986ef8))
* **design:** DAFF_THEME_INITIALIZER not exported properly ([cb89c5a](https://github.com/graycoreio/daffodil/commit/cb89c5a841c60d9cd0fcd3c260e7422eb3ff6dce))
* **design:** NPE when input element cannot be found ([#2043](https://github.com/graycoreio/daffodil/issues/2043)) ([2f7cf39](https://github.com/graycoreio/daffodil/commit/2f7cf39320ee047a0ea90121494c534c9ef9deb2))

### [0.39.13](https://github.com/graycoreio/daffodil/compare/v0.39.12...v0.39.13) (2022-02-28)


### Features

* **core:** add server safe base64 service ([#2007](https://github.com/graycoreio/daffodil/issues/2007)) ([afe000a](https://github.com/graycoreio/daffodil/commit/afe000aed64aa436c23706b49bc57893fa7c205c))
* **order:** use Magento `region_code` for `region` ([#1995](https://github.com/graycoreio/daffodil/issues/1995)) ([8812417](https://github.com/graycoreio/daffodil/commit/8812417d1280885e911de1692b41b37213a29c83))


### Bug Fixes

* **composite-product:** magento item options in wrong order ([#1997](https://github.com/graycoreio/daffodil/issues/1997)) ([04b72fa](https://github.com/graycoreio/daffodil/commit/04b72fa7e350d68895ee3dfb03ec325fe570dc59))
* **contact, newsletter:** allow hubspot drivers to be used together ([#2002](https://github.com/graycoreio/daffodil/issues/2002)) ([d97179e](https://github.com/graycoreio/daffodil/commit/d97179ec1add4d9fc2efe28be0adcc92dc70b7b1))
* **contact,newsletter:** correct dependency listings ([#2003](https://github.com/graycoreio/daffodil/issues/2003)) ([736118e](https://github.com/graycoreio/daffodil/commit/736118e75071db80f4152ca40117b2e13191bc25))
* **product-composite:** magento driver tries to sort immutable array ([#1999](https://github.com/graycoreio/daffodil/issues/1999)) ([e79ccdf](https://github.com/graycoreio/daffodil/commit/e79ccdf65c7ab75c00ec905fbb368f979871b8f1))

### [0.39.12](https://github.com/graycoreio/daffodil/compare/v0.39.11...v0.39.12) (2022-02-16)


### Features

* **cart,demo:** use DaffDriverResponse for get call and handle partial success ([#1988](https://github.com/graycoreio/daffodil/issues/1988)) ([6ce9b2f](https://github.com/graycoreio/daffodil/commit/6ce9b2fe1d5f8d4389e38d03c1022a54ca228b55))
* **cart:** add remove out of stock state ([#1956](https://github.com/graycoreio/daffodil/issues/1956)) ([5ac115f](https://github.com/graycoreio/daffodil/commit/5ac115ff9be130a0311789231675a8eed4397194))
* **cart:** fix infinite recurse on subsequent delete OOS calls ([#1991](https://github.com/graycoreio/daffodil/issues/1991)) ([e2751d1](https://github.com/graycoreio/daffodil/commit/e2751d12c16b6dfb2a7d8b734c9faa23670a2a6f))
* **cart:** set recoverable on OOS error in Magento get call ([#1990](https://github.com/graycoreio/daffodil/issues/1990)) ([c22f3b5](https://github.com/graycoreio/daffodil/commit/c22f3b54edd2601acb0154f724a2dae8c2fc7851))
* **core,driver:** return generic error as a fallback ([#1986](https://github.com/graycoreio/daffodil/issues/1986)) ([9a36be1](https://github.com/graycoreio/daffodil/commit/9a36be1406bb5e0f76040f30b3b6bf78e656d049))
* **core:** add `recoverable` field to `DaffError` and `DaffStateError` ([#1982](https://github.com/graycoreio/daffodil/issues/1982)) ([b7d39b7](https://github.com/graycoreio/daffodil/commit/b7d39b73c5a745cdadd5e377a7b4931bb15c8664))
* **driver:** add `DaffDriverResponse` ([#1983](https://github.com/graycoreio/daffodil/issues/1983)) ([ef7992c](https://github.com/graycoreio/daffodil/commit/ef7992cd1789b084686bce41e376c834fb2020cb))


### Bug Fixes

* **cart:** items removed by delete oos not removed from entity state ([#1981](https://github.com/graycoreio/daffodil/issues/1981)) ([4cfe920](https://github.com/graycoreio/daffodil/commit/4cfe9202360b550b1e71450237dd8195adab9dc1))
* **cart:** out of stock cart errors persist after successful delete oos ([#1980](https://github.com/graycoreio/daffodil/issues/1980)) ([b064d33](https://github.com/graycoreio/daffodil/commit/b064d3344a532da5bf5788394ac25d5c2bdbffd6))

### [0.39.11](https://github.com/graycoreio/daffodil/compare/v0.39.10...v0.39.11) (2022-02-06)


### Features

* **cart:** add `itemEntities$` field to the cart facade ([#1975](https://github.com/graycoreio/daffodil/issues/1975)) ([9dc15af](https://github.com/graycoreio/daffodil/commit/9dc15af75abb0968a4aaa265cfef660df6ded1eb))
* **cart:** export magento mock model classes ([#1973](https://github.com/graycoreio/daffodil/issues/1973)) ([c210584](https://github.com/graycoreio/daffodil/commit/c21058430be3bc46c94098a840cd8bf52b307573))


### Bug Fixes

* **cart:** creating a cart does not clear the cart in state ([#1972](https://github.com/graycoreio/daffodil/issues/1972)) ([b282b34](https://github.com/graycoreio/daffodil/commit/b282b342bccc655b9ab2dc8a3504d34f70fc74b5))
* **tools:** release script ignoring dep versions from root dev deps ([#1978](https://github.com/graycoreio/daffodil/issues/1978)) ([86f6432](https://github.com/graycoreio/daffodil/commit/86f6432a84c9742fea370a790b2d195bdbd44618))

### [0.39.10](https://github.com/graycoreio/daffodil/compare/v0.39.9...v0.39.10) (2022-02-01)


### Features

* **cart:** add `DaffCartInStockItemsGuard` ([#1960](https://github.com/graycoreio/daffodil/issues/1960)) ([9f21c97](https://github.com/graycoreio/daffodil/commit/9f21c97d7e4f2f09be054b7d0f3ff82723f70080))
* **cart:** add `selectOutOfStockCartItems` and `selectInStockCartItems` ([#1959](https://github.com/graycoreio/daffodil/issues/1959)) ([cb8d8c8](https://github.com/graycoreio/daffodil/commit/cb8d8c8ac67ed0e2a86ab5108d8a117ca90db9d5))
* **cart:** add extra cart item transforms token ([#1965](https://github.com/graycoreio/daffodil/issues/1965)) ([3a6f98e](https://github.com/graycoreio/daffodil/commit/3a6f98e8c0d6c970528bad457a1441933c18ceaa))
* **cart:** transform no source items Magento error as OOS error ([#1954](https://github.com/graycoreio/daffodil/issues/1954)) ([2d5ac96](https://github.com/graycoreio/daffodil/commit/2d5ac9686d22698082a4e1e3f4e2a522210c0451))
* **category:** move magento category query fields to fragment ([#1936](https://github.com/graycoreio/daffodil/issues/1936)) ([a1cbca4](https://github.com/graycoreio/daffodil/commit/a1cbca4b39f1bbe0e3136539707a901200ad3cfe))
* **core:** add `DaffKindable` interface ([#1941](https://github.com/graycoreio/daffodil/issues/1941)) ([46405fd](https://github.com/graycoreio/daffodil/commit/46405fd390e440bb6a7d2ef6aa55ea82f660e63d))
* **core:** make the `type` param of `DaffModelFactory` optional ([#1942](https://github.com/graycoreio/daffodil/issues/1942)) ([d0873aa](https://github.com/graycoreio/daffodil/commit/d0873aa8deb74ea8a2dd644e716e19c8b542a4bb))
* **daffio:** clean up support page UI ([#1938](https://github.com/graycoreio/daffodil/issues/1938)) ([b4d970b](https://github.com/graycoreio/daffodil/commit/b4d970bb5f557b16484ab79d4fc3de360c45c7f4))
* **design:** clean up color palettes ([#1964](https://github.com/graycoreio/daffodil/issues/1964)) ([a8aa089](https://github.com/graycoreio/daffodil/commit/a8aa089dcafe8c547829ecd23d3a4bc3bb308edd))
* **design:** create daffArticleEncapsulatedMixin to prevent article styles from cascading down to nested @daffodil/design components ([#1917](https://github.com/graycoreio/daffodil/issues/1917)) ([0e517ff](https://github.com/graycoreio/daffodil/commit/0e517ff54ad0a0033f91e7c4174a1add8c3df153))
* **design:** deprecate DaffFeatureComponent ([#1928](https://github.com/graycoreio/daffodil/issues/1928)) ([9b398ad](https://github.com/graycoreio/daffodil/commit/9b398ad3ed432c5c65d9861dadbd860dedbc098a))
* **design:** implement daffArticleEncapsulatedMixin ([#1917](https://github.com/graycoreio/daffodil/issues/1917)) ([cfa4718](https://github.com/graycoreio/daffodil/commit/cfa471844449c69535eda8b30fcf07fa4e0d9c79))
* **design:** update card title font size on mobile devices ([#1937](https://github.com/graycoreio/daffodil/issues/1937)) ([68eebf3](https://github.com/graycoreio/daffodil/commit/68eebf380198cca24886792e36b8c3f5be8e6c06))
* **design:** update navbar component ([#1926](https://github.com/graycoreio/daffodil/issues/1926)) ([640141d](https://github.com/graycoreio/daffodil/commit/640141df698a6262c6d016a04020664d987ff001))


### Bug Fixes

* **cart,category,product:** unsafe chars in model factory URLs ([#1931](https://github.com/graycoreio/daffodil/issues/1931)) ([753e272](https://github.com/graycoreio/daffodil/commit/753e272284f43a7f4e241f30c9f91ed7ddc5b2d2))
* **cart:** magento driver returns `null` cart items ([#1953](https://github.com/graycoreio/daffodil/issues/1953)) ([ef0e2bc](https://github.com/graycoreio/daffodil/commit/ef0e2bca3730c028c2efc08d70706c6428446d18))
* **category:** magento driver misreferencing category products in response ([#1934](https://github.com/graycoreio/daffodil/issues/1934)) ([f084cfa](https://github.com/graycoreio/daffodil/commit/f084cfa0e4f6b1e3be4c303c4dea970e0b3d1efd))
* **design:** add missing coma to icon button's theme contrast style ([#1957](https://github.com/graycoreio/daffodil/issues/1957)) ([a330107](https://github.com/graycoreio/daffodil/commit/a33010704e8a3c2b5b710af130cc46c861b1a563))

### [0.39.9](https://github.com/graycoreio/daffodil/compare/v0.39.8...v0.39.9) (2021-12-06)


### Features

* **cart:** add errors to cart item entity ([#1927](https://github.com/graycoreio/daffodil/issues/1927)) ([3bb32b3](https://github.com/graycoreio/daffodil/commit/3bb32b33bdeb5884e5cd6f19ff390310b068ee77))
* **cart:** persist driver error in resolver effects ([#1923](https://github.com/graycoreio/daffodil/issues/1923)) ([34f7c25](https://github.com/graycoreio/daffodil/commit/34f7c250bb1240c091f62e16432def22546e89a1))
* **daffio:** update card usage in daff.io ([#1902](https://github.com/graycoreio/daffodil/issues/1902)) ([0366757](https://github.com/graycoreio/daffodil/commit/0366757dc75adfbe7308aeb75d5a0a92e1fa03d0))
* **daffio:** update home page copy and UI ([#1918](https://github.com/graycoreio/daffodil/issues/1918)) ([97005b8](https://github.com/graycoreio/daffodil/commit/97005b833443ce57c4f632095c135731e84c267e))
* **daffio:** update subfooter UI ([#1904](https://github.com/graycoreio/daffodil/issues/1904)) ([e43164b](https://github.com/graycoreio/daffodil/commit/e43164bc04f0aee5d11482d213540d78ae045e2c))
* **daffio:** update why pwa page ([#1921](https://github.com/graycoreio/daffodil/issues/1921)) ([334cffa](https://github.com/graycoreio/daffodil/commit/334cffaaba778825bc1f09f63f5f2de9d02df179))
* **design:** create manage container layout mixin ([#1906](https://github.com/graycoreio/daffodil/issues/1906)) ([6aa51b0](https://github.com/graycoreio/daffodil/commit/6aa51b080e5840dbc1d4af1fffd930ac71d11d06))
* **design:** implement manage container layout mixin in hero, callout, and navbar components ([#1906](https://github.com/graycoreio/daffodil/issues/1906)) ([46f89dd](https://github.com/graycoreio/daffodil/commit/46f89dd704697293d86c2042897c97bfce94a932))
* **design:** make image component lazy loaded by default ([13db3da](https://github.com/graycoreio/daffodil/commit/13db3da4bd62f0095585cf0dd92c5456100d15b3))
* **design:** refactor card component ([#1902](https://github.com/graycoreio/daffodil/issues/1902)) ([642c5ce](https://github.com/graycoreio/daffodil/commit/642c5ce64885f3d7051948c758f9e87815fe215b))

### [0.39.8](https://github.com/graycoreio/daffodil/compare/v0.39.7...v0.39.8) (2021-11-18)


### Features

* **cart:** add `DaffCartItemExceedsMaxQtyError` ([#1901](https://github.com/graycoreio/daffodil/issues/1901)) ([94c7ef0](https://github.com/graycoreio/daffodil/commit/94c7ef017914594caa8a87bd0874df7f4879860b))
* **cart:** add invalid email error ([#1905](https://github.com/graycoreio/daffodil/issues/1905)) ([c149387](https://github.com/graycoreio/daffodil/commit/c1493874a3191bfc4ab7c6169a0d1645c47dac17))
* **cart:** transform expired payment token error in magento driver ([#1881](https://github.com/graycoreio/daffodil/issues/1881)) ([03e9bbc](https://github.com/graycoreio/daffodil/commit/03e9bbce96af98b95a39648725df814d9b5ca81c))
* **daffio:** enforce ChangeDetectionStrategy.OnPush ([#1888](https://github.com/graycoreio/daffodil/issues/1888)) ([d009695](https://github.com/graycoreio/daffodil/commit/d00969577fb582ca26ecf17050f2598dee29d33c))
* **daffio:** update daff.io home page ([#1884](https://github.com/graycoreio/daffodil/issues/1884)) ([41fd407](https://github.com/graycoreio/daffodil/commit/41fd407ffce72c926375c97055704bcdb2f128a2))
* **design:** deprecate DaffImageGalleryComponent in favor of DaffMediaGalleryComponent ([#1893](https://github.com/graycoreio/daffodil/issues/1893)) ([9b96cc1](https://github.com/graycoreio/daffodil/commit/9b96cc1c412d6e6e85da96f44825197e589d8bde))
* **design:** deprecate DaffQtyDropdownComponent in favor of DaffQuantityFieldComponent ([#1897](https://github.com/graycoreio/daffodil/issues/1897)) ([0811abc](https://github.com/graycoreio/daffodil/commit/0811abcd3a5b04a047dc45021299c3fe4596c190))
* **design:** enforce ChangeDetectionStrategy.OnPush ([#1888](https://github.com/graycoreio/daffodil/issues/1888)) ([4f70378](https://github.com/graycoreio/daffodil/commit/4f70378d1a17ed29c9ed9f5371c71516ee5547cd))
* **design:** update typography size mixins ([#1898](https://github.com/graycoreio/daffodil/issues/1898)) ([20a48ea](https://github.com/graycoreio/daffodil/commit/20a48ea978abf1779a531a7424b36de7dd40520e))


### Bug Fixes

* **design:** allow media gallery to be registered when they are initialized ([#1668](https://github.com/graycoreio/daffodil/issues/1668)) ([8fa58b8](https://github.com/graycoreio/daffodil/commit/8fa58b8279dafc01eb6a5508f396e699daf3ffda))

### [0.39.7](https://github.com/graycoreio/daffodil/compare/v0.39.6...v0.39.7) (2021-10-26)


### Features

* **cart:** add action to clear coupon errors ([#1875](https://github.com/graycoreio/daffodil/issues/1875)) ([7bcf190](https://github.com/graycoreio/daffodil/commit/7bcf190957ada3055465127c5235a9597365f38e))
* **design:** add `daffCalloutBody` and `daffCalloutIcon` transcludables ([#1870](https://github.com/graycoreio/daffodil/issues/1870)) ([f7c4318](https://github.com/graycoreio/daffodil/commit/f7c4318ab44cd97df4d89e1d2e0c2223f4ef84a1))
* **design:** add `daffHeroBody` and `daffHeroIcon` transcludables ([#1806](https://github.com/graycoreio/daffodil/issues/1806)) ([e066eb6](https://github.com/graycoreio/daffodil/commit/e066eb6b5d253f0b863cc2e7224d7bde6738d12d))
* **design:** create mixin for DaffCompactable interface ([#1874](https://github.com/graycoreio/daffodil/issues/1874)) ([853546d](https://github.com/graycoreio/daffodil/commit/853546dea7276eaccbd2fae053761322e0784d87))
* **design:** implement DaffCompactable interface for DaffCalloutComponent ([#1878](https://github.com/graycoreio/daffodil/issues/1878)) ([8fbcff9](https://github.com/graycoreio/daffodil/commit/8fbcff9d77c799b4901cc459a1db53708d15335e))
* **design:** implement DaffCompactable interface for DaffHeroComponent ([#1877](https://github.com/graycoreio/daffodil/issues/1877)) ([77a1157](https://github.com/graycoreio/daffodil/commit/77a11578bab7d83c20d29624a152b78faab949c7))
* **docs:** update design guides verbiage ([#1879](https://github.com/graycoreio/daffodil/issues/1879)) ([e931718](https://github.com/graycoreio/daffodil/commit/e9317182bb65bf10f3a4bf310f019bf468341e3e))

### [0.39.6](https://github.com/graycoreio/daffodil/compare/v0.39.5...v0.39.6) (2021-10-14)


### Features

* **core:** only ensure uniqueness for GraphQL fragment names ([#1868](https://github.com/graycoreio/daffodil/issues/1868)) ([379ca1f](https://github.com/graycoreio/daffodil/commit/379ca1f246ea023296142a6ed9bf9475929f9b78))

### [0.39.5](https://github.com/graycoreio/daffodil/compare/v0.39.4...v0.39.5) (2021-10-14)


### Features

* **core:** filter duplicate fragments in GraphQL functions ([#1867](https://github.com/graycoreio/daffodil/issues/1867)) ([50ecc50](https://github.com/graycoreio/daffodil/commit/50ecc507de00dfb989b7a33a97b49fc1b39fe72b))

### [0.39.4](https://github.com/graycoreio/daffodil/compare/v0.39.3...v0.39.4) (2021-10-14)


### Features

* **product,related-products,upsell-products:** add optional products to in-mem driver response ([#1864](https://github.com/graycoreio/daffodil/issues/1864)) ([db4eb60](https://github.com/graycoreio/daffodil/commit/db4eb60d3c268d488c55fc847b3b31202623733c))
* **product:** remove optional product features ([#1848](https://github.com/graycoreio/daffodil/issues/1848)) ([3a42280](https://github.com/graycoreio/daffodil/commit/3a422803c48839b72bcf36465809f1711550c749))


### Bug Fixes

* **cart:** items persisting after order success ([#1866](https://github.com/graycoreio/daffodil/issues/1866)) ([caaf77e](https://github.com/graycoreio/daffodil/commit/caaf77e3e6c1b90068cecbdcfcbd450a27af5d26))

### [0.39.3](https://github.com/graycoreio/daffodil/compare/v0.39.2...v0.39.3) (2021-10-09)


### Bug Fixes

* **core:** `randomSlice` doesn't include the last element of the array ([#1857](https://github.com/graycoreio/daffodil/issues/1857)) ([ed67972](https://github.com/graycoreio/daffodil/commit/ed67972684b517a7db8c2192b8e123e19e9cd779))
* **product:** extra extension factory fields overwritten ([#1859](https://github.com/graycoreio/daffodil/issues/1859)) ([4ac753a](https://github.com/graycoreio/daffodil/commit/4ac753a3ce2c2e3ce9a83287ccc51c0d5c47a497))

### [0.39.2](https://github.com/graycoreio/daffodil/compare/v0.39.1...v0.39.2) (2021-10-09)


### Bug Fixes

* **category:** in-memory driver can't get by URL ([#1856](https://github.com/graycoreio/daffodil/issues/1856)) ([b15af9f](https://github.com/graycoreio/daffodil/commit/b15af9f532d097f47a36c7384d523a6990b8d5f8))
* **external-router:** in-memory driver returns URLs with leading slashes ([#1854](https://github.com/graycoreio/daffodil/issues/1854)) ([c7aee32](https://github.com/graycoreio/daffodil/commit/c7aee322fb2e7700e4491830e12c4868acbf07c1))

### [0.39.1](https://github.com/graycoreio/daffodil/compare/v0.39.0...v0.39.1) (2021-10-05)


### Features

* **category:** prefix category URLs with a leading slash ([#1850](https://github.com/graycoreio/daffodil/issues/1850)) ([bc9ca11](https://github.com/graycoreio/daffodil/commit/bc9ca112f7f7e71a6e30d39b27ace90424d17264))
* **external-router:** don't truncate leading slash for in-memory driver resolution ([#1851](https://github.com/graycoreio/daffodil/issues/1851)) ([94e3392](https://github.com/graycoreio/daffodil/commit/94e3392e1bff383b007bfff380f10e96f6d16006))


### Bug Fixes

* **cart:** wrong configurable product import paths ([#1847](https://github.com/graycoreio/daffodil/issues/1847)) ([91a24fe](https://github.com/graycoreio/daffodil/commit/91a24fed15d0a497d2d80b1bc2476522be609a52))

## [0.39.0](https://github.com/graycoreio/daffodil/compare/v0.38.9...v0.39.0) (2021-10-03)


### ⚠ BREAKING CHANGES

* **category:** removes the writable `category` field on `DaffInMemoryBackendCategoryService` and replaced it with readonly `categories`

* category protected

* overload category get with url check

* truncate leading slash from category request URL

* category  set total products on metadata

### Features

* **category:** create categories on init in in-memory backend ([#1842](https://github.com/graycoreio/daffodil/issues/1842)) ([1e556c3](https://github.com/graycoreio/daffodil/commit/1e556c355742858fd5e0f1444c57ab302cc20959))
* **category:** pull `current_page` request field from query params ([#1831](https://github.com/graycoreio/daffodil/issues/1831)) ([8b12a4c](https://github.com/graycoreio/daffodil/commit/8b12a4c024aab918b0bbd1e39061c91370f5d604))
* **design:** create theming CSS custom properties ([#1836](https://github.com/graycoreio/daffodil/issues/1836)) ([1ee580e](https://github.com/graycoreio/daffodil/commit/1ee580ebf1e278c452099a49dfdd496a9b8bac86))
* **external-router:** add in-memory driver ([#1838](https://github.com/graycoreio/daffodil/issues/1838)) ([9ec846c](https://github.com/graycoreio/daffodil/commit/9ec846ca0579106572befd9570e67f53bf357fc0))
* **product:** expose products in in-memory backend ([#1841](https://github.com/graycoreio/daffodil/issues/1841)) ([5118892](https://github.com/graycoreio/daffodil/commit/511889293a23a1a9e56a00d2e7fe05df9a53ecbf))


### Bug Fixes

* **core:** guard against divide by 0, Infinity, and NaN in `daffDivide` ([#1845](https://github.com/graycoreio/daffodil/issues/1845)) ([03aaca4](https://github.com/graycoreio/daffodil/commit/03aaca4016668a524976cba9cdd97f8ade8f7ca2))
* **product:** in-memory driver does not allow URLs beginning with slashes ([#1846](https://github.com/graycoreio/daffodil/issues/1846)) ([3b62a26](https://github.com/graycoreio/daffodil/commit/3b62a262fcedb97e14e6228c5d00ce41d9ae42f9))
* **related-products,upsell-products:** mock facade field not initialized ([#1828](https://github.com/graycoreio/daffodil/issues/1828)) ([ac68012](https://github.com/graycoreio/daffodil/commit/ac680124b8426543431199553a8cb15bbf78e89b))

### [0.38.9](https://github.com/graycoreio/daffodil/compare/v0.38.4...v0.38.9) (2021-09-15)


### Features

* **cart:** throw out of stock error in the item update call ([#1791](https://github.com/graycoreio/daffodil/issues/1791)) ([faf714b](https://github.com/graycoreio/daffodil/commit/faf714bfd12950584e49b5bc34badcbf649901a5))
* **category:** add extra preview fragments to category products query ([#1747](https://github.com/graycoreio/daffodil/issues/1747)) ([4b760e7](https://github.com/graycoreio/daffodil/commit/4b760e7dd8ea6c3f7ede5f6abb21bf14e4ff6c20))
* **category:** fix factory partial types ([#1792](https://github.com/graycoreio/daffodil/issues/1792)) ([3499657](https://github.com/graycoreio/daffodil/commit/3499657f1e6d97e8b80f297e76c7f1c32b49f4d0))
* **composite-product:** copy composite product features into a new package ([#1690](https://github.com/graycoreio/daffodil/issues/1690)) ([fe5b99d](https://github.com/graycoreio/daffodil/commit/fe5b99d89ffc40f9c37f8a2e79cd6e6e9110c641))
* **configurable-product:** copy configurable product features into a new package ([#1681](https://github.com/graycoreio/daffodil/issues/1681)) ([0f11fa6](https://github.com/graycoreio/daffodil/commit/0f11fa6bc518e1b7136dc07a8648adbb182e8f3c))
* **core:** accept mock class instantiation args in constructor ([#1777](https://github.com/graycoreio/daffodil/issues/1777)) ([04c0d37](https://github.com/graycoreio/daffodil/commit/04c0d37cf31ca5de0e5f602d62a1b3da2feb4c0c))
* **core:** add `sample` ([#1786](https://github.com/graycoreio/daffodil/issues/1786)) ([69706a4](https://github.com/graycoreio/daffodil/commit/69706a4ccd787dc6961f11d59d1300351654f63e))
* **core:** add length param to `randomSlice` ([#1789](https://github.com/graycoreio/daffodil/issues/1789)) ([0465b21](https://github.com/graycoreio/daffodil/commit/0465b21f8a5762ad1518c83327d00289b7e529bf))
* **daffio:** update members table in docs to use article tables ([#1687](https://github.com/graycoreio/daffodil/issues/1687)) ([09642d4](https://github.com/graycoreio/daffodil/commit/09642d4e991295b39717f49626b0c0b0db3b3f00))
* **design:** add article table styles ([#1686](https://github.com/graycoreio/daffodil/issues/1686)) ([02a1f6f](https://github.com/graycoreio/daffodil/commit/02a1f6f4899c0e104e4e609e4548206460468308))
* **design:** make @daffodil/design compatible with typescript@^4.0.0 ([#1783](https://github.com/graycoreio/daffodil/issues/1783)) ([7ef031e](https://github.com/graycoreio/daffodil/commit/7ef031ee0c25bb7bb8ab8a7c3492aef46f5e092d))
* **docs-gen:** compute the docGroup of an example from the folder path, not the filename ([#1711](https://github.com/graycoreio/daffodil/issues/1711)) ([c4d2494](https://github.com/graycoreio/daffodil/commit/c4d249487ba33fa88da1c1c358331dda3cb9aa22))
* **external-router:** add `daffInsertDataPathStrategy` and `daffDataPathUrlMatcher` ([#1767](https://github.com/graycoreio/daffodil/issues/1767)) ([d148a51](https://github.com/graycoreio/daffodil/commit/d148a51967cec4877e0cdc83600be7ea1978c43d))
* **product:** add kind and extension factories ([#1785](https://github.com/graycoreio/daffodil/issues/1785)) ([0ac027b](https://github.com/graycoreio/daffodil/commit/0ac027b8df6f283152d3137864584fa8f27f105e))
* **product:** add product factory tokens ([#1781](https://github.com/graycoreio/daffodil/issues/1781)) ([f56e1e1](https://github.com/graycoreio/daffodil/commit/f56e1e109d3fcda01f6e027d8d2fc3a5f863e121))
* **product:** remove extraneous configurable product fields ([#1738](https://github.com/graycoreio/daffodil/issues/1738)) ([adcb2ce](https://github.com/graycoreio/daffodil/commit/adcb2cea86326782087559af0ef8e9ede3b8e3ad))
* **product:** use random factory kind in in-memory and testing drivers ([#1811](https://github.com/graycoreio/daffodil/issues/1811)) ([2a4c4ea](https://github.com/graycoreio/daffodil/commit/2a4c4ea5f883875acbd0abf4546f33551f8812eb))
* **product-composite:** add in-memory driver ([#1816](https://github.com/graycoreio/daffodil/issues/1816)) ([84caaf0](https://github.com/graycoreio/daffodil/commit/84caaf0b66f9efe03e07a6bebb9cd9ce3f8d9d2b))
* **product-composite:** add testing driver package ([#1815](https://github.com/graycoreio/daffodil/issues/1815)) ([fb2957b](https://github.com/graycoreio/daffodil/commit/fb2957b02d783040b3e7d4a1b3f00db1912b1f2e))
* **product-configurable:** add feature and all selector ([#1807](https://github.com/graycoreio/daffodil/issues/1807)) ([9eee1d9](https://github.com/graycoreio/daffodil/commit/9eee1d953118ec38fdcca9bec8e5fdb41a775f12))
* **product-configurable:** add in-memory driver ([#1817](https://github.com/graycoreio/daffodil/issues/1817)) ([5734b91](https://github.com/graycoreio/daffodil/commit/5734b91b03e7506cc60c164efee4004aa9d030f8))
* **product-configurable:** add testing driver package ([#1818](https://github.com/graycoreio/daffodil/issues/1818)) ([6538e52](https://github.com/graycoreio/daffodil/commit/6538e521e19a6e3f24dedd8e8b8674d435183046))
* **related-products:** add in-memory driver module ([#1813](https://github.com/graycoreio/daffodil/issues/1813)) ([09d3d5e](https://github.com/graycoreio/daffodil/commit/09d3d5eddc4eaf570fd97fc384a5a69765b3c221))
* **related-products:** add testing driver module ([#1821](https://github.com/graycoreio/daffodil/issues/1821)) ([9112bfd](https://github.com/graycoreio/daffodil/commit/9112bfdcea391e7ff1cce137937562aa0e1cb3c3))
* **related-products:** DI product kind factory into related products factory ([#1812](https://github.com/graycoreio/daffodil/issues/1812)) ([998e3e0](https://github.com/graycoreio/daffodil/commit/998e3e065e0dc8669d710b4c1825db4f27aca5ca))
* **seo:** add `daffProvideCanonicalUrlUpdates` and `DAFF_SEO_CANONICAL_URL_UPDATES` token ([#1762](https://github.com/graycoreio/daffodil/issues/1762)) ([da5cb84](https://github.com/graycoreio/daffodil/commit/da5cb847672eae0c428b2399755bc4d4bd1f0346))
* **seo:** add `daffProvideMetaUpdates` and `DAFF_SEO_META_UPDATES` token ([#1757](https://github.com/graycoreio/daffodil/issues/1757)) ([3354033](https://github.com/graycoreio/daffodil/commit/335403385a08d2cc825a9f04cc30536a598373d1))
* **seo:** add `DaffSeoCanonicalUrlEffects` ([#1763](https://github.com/graycoreio/daffodil/issues/1763)) ([04dd8f8](https://github.com/graycoreio/daffodil/commit/04dd8f8d770a19b2ccfb3f921ab63b869263589d))
* **seo:** add `DaffSeoMetaEffects` ([#1761](https://github.com/graycoreio/daffodil/issues/1761)) ([926008d](https://github.com/graycoreio/daffodil/commit/926008d55c90f4795864c110c4475b7eb2883919))
* **seo:** add `DaffSeoTitleEffects` ([#1759](https://github.com/graycoreio/daffodil/issues/1759)) ([fd9f615](https://github.com/graycoreio/daffodil/commit/fd9f615aaa7a326ded4ca733b37122ff25e63529))
* **seo:** add canonical URL update model ([#1742](https://github.com/graycoreio/daffodil/issues/1742)) ([b24e110](https://github.com/graycoreio/daffodil/commit/b24e11079c458a400788fef3ccc2b01ee1e359c4))
* **seo:** add meta definition models ([#1744](https://github.com/graycoreio/daffodil/issues/1744)) ([5c1d735](https://github.com/graycoreio/daffodil/commit/5c1d735b430e80a9d78179279c1fbee65a49df61))
* **seo:** add meta update model ([#1739](https://github.com/graycoreio/daffodil/issues/1739)) ([00c33a5](https://github.com/graycoreio/daffodil/commit/00c33a5cb4ae981a9a497742c2709061ebb0dd86))
* **seo:** add page hook effects abstract class ([#1740](https://github.com/graycoreio/daffodil/issues/1740)) ([9c11f98](https://github.com/graycoreio/daffodil/commit/9c11f98f0e6c954e66eeda4f3cf0c2c8cc71de46))
* **seo:** add restoreable meta service ([#1749](https://github.com/graycoreio/daffodil/issues/1749)) ([b66fe24](https://github.com/graycoreio/daffodil/commit/b66fe2477ddb2322c5d648f1eaa0fb993b2ad0b9))
* **seo:** add restoreable service interface ([#1736](https://github.com/graycoreio/daffodil/issues/1736)) ([f624f00](https://github.com/graycoreio/daffodil/commit/f624f005b4710a6c57b0b6803dc0430a86edcd96))
* **seo:** add restoreable title service ([#1743](https://github.com/graycoreio/daffodil/issues/1743)) ([fde1635](https://github.com/graycoreio/daffodil/commit/fde1635200c817d09a6557368d2f96c5946c02b0))
* **seo:** add seo/state and update action pair ([#1708](https://github.com/graycoreio/daffodil/issues/1708)) ([9fb78cb](https://github.com/graycoreio/daffodil/commit/9fb78cbeb97628ff43ea3f7f7f3ceed93c9d0217))
* **seo:** add title update model ([#1741](https://github.com/graycoreio/daffodil/issues/1741)) ([5fe73fb](https://github.com/graycoreio/daffodil/commit/5fe73fba9a5f5c1e1ad3ce072e6bc4dca042f1c6))
* **seo:** add title updates multi token and provider ([#1752](https://github.com/graycoreio/daffodil/issues/1752)) ([333401a](https://github.com/graycoreio/daffodil/commit/333401a86e1eae0f35229f525cdac62cdff8ebd3))
* **seo:** change canonical service to restoreable ([#1745](https://github.com/graycoreio/daffodil/issues/1745)) ([2f3389d](https://github.com/graycoreio/daffodil/commit/2f3389d070ae9fe989119aec75aac93cec752acd))
* **upsell-products:** add upsell products package ([#1820](https://github.com/graycoreio/daffodil/issues/1820)) ([63448ad](https://github.com/graycoreio/daffodil/commit/63448ad4770dc798ac5963c0afc575a3b1286e66))


### Bug Fixes

* **cart:** cart item state prematurely resetting after update ([#1753](https://github.com/graycoreio/daffodil/issues/1753)) ([160a7b2](https://github.com/graycoreio/daffodil/commit/160a7b254f23e14c4465d5301bd9e04919044358))
* **cart:** public class members in magento driver ([#1801](https://github.com/graycoreio/daffodil/issues/1801)) ([e8dd8a1](https://github.com/graycoreio/daffodil/commit/e8dd8a1034eb81b5c9f1b2bd8095c12ed6eff09d))
* **checkout:** improper creation of partial in testing driver ([#1776](https://github.com/graycoreio/daffodil/issues/1776)) ([62cfc93](https://github.com/graycoreio/daffodil/commit/62cfc9353609d932581239bb82977a7b0aa49dfe))
* **design-land:** fix design-land tsconfig paths ([#1754](https://github.com/graycoreio/daffodil/issues/1754)) ([8e68fd4](https://github.com/graycoreio/daffodil/commit/8e68fd49527f132e85f80cac4a2bb34161b49f65))
* **product:** hardcoded search value for getAll query ([#1802](https://github.com/graycoreio/daffodil/issues/1802)) ([e664dbb](https://github.com/graycoreio/daffodil/commit/e664dbbe6f3bd00d2591339aa039c9d3a30ff946))
* **product-composite:** wrong imports and paths ([#1808](https://github.com/graycoreio/daffodil/issues/1808)) ([e77d255](https://github.com/graycoreio/daffodil/commit/e77d25579b0eb9c63db0937bf3f3dc32dde4c8b3))
* **product-configurable:** wrong imports and paths ([#1809](https://github.com/graycoreio/daffodil/issues/1809)) ([3203297](https://github.com/graycoreio/daffodil/commit/3203297b84cd56173d0d50acc486fbd71a082c78))
* **tools:** release build task fails ([#1766](https://github.com/graycoreio/daffodil/issues/1766)) ([2766234](https://github.com/graycoreio/daffodil/commit/2766234b594a90a9a277d750d611881c9c1e8b38))
* **tools-dgeni:** add devDependencies to package.json ([#1805](https://github.com/graycoreio/daffodil/issues/1805)) ([a1bcbd8](https://github.com/graycoreio/daffodil/commit/a1bcbd869043dcb9438f97820cbe943034b5b31b))

### [0.38.8](https://github.com/graycoreio/daffodil/compare/v0.38.4...v0.38.8) (2021-09-15)


### Features

* **cart:** throw out of stock error in the item update call ([#1791](https://github.com/graycoreio/daffodil/issues/1791)) ([faf714b](https://github.com/graycoreio/daffodil/commit/faf714bfd12950584e49b5bc34badcbf649901a5))
* **category:** add extra preview fragments to category products query ([#1747](https://github.com/graycoreio/daffodil/issues/1747)) ([4b760e7](https://github.com/graycoreio/daffodil/commit/4b760e7dd8ea6c3f7ede5f6abb21bf14e4ff6c20))
* **category:** fix factory partial types ([#1792](https://github.com/graycoreio/daffodil/issues/1792)) ([3499657](https://github.com/graycoreio/daffodil/commit/3499657f1e6d97e8b80f297e76c7f1c32b49f4d0))
* **composite-product:** copy composite product features into a new package ([#1690](https://github.com/graycoreio/daffodil/issues/1690)) ([fe5b99d](https://github.com/graycoreio/daffodil/commit/fe5b99d89ffc40f9c37f8a2e79cd6e6e9110c641))
* **configurable-product:** copy configurable product features into a new package ([#1681](https://github.com/graycoreio/daffodil/issues/1681)) ([0f11fa6](https://github.com/graycoreio/daffodil/commit/0f11fa6bc518e1b7136dc07a8648adbb182e8f3c))
* **core:** accept mock class instantiation args in constructor ([#1777](https://github.com/graycoreio/daffodil/issues/1777)) ([04c0d37](https://github.com/graycoreio/daffodil/commit/04c0d37cf31ca5de0e5f602d62a1b3da2feb4c0c))
* **core:** add `sample` ([#1786](https://github.com/graycoreio/daffodil/issues/1786)) ([69706a4](https://github.com/graycoreio/daffodil/commit/69706a4ccd787dc6961f11d59d1300351654f63e))
* **core:** add length param to `randomSlice` ([#1789](https://github.com/graycoreio/daffodil/issues/1789)) ([0465b21](https://github.com/graycoreio/daffodil/commit/0465b21f8a5762ad1518c83327d00289b7e529bf))
* **daffio:** update members table in docs to use article tables ([#1687](https://github.com/graycoreio/daffodil/issues/1687)) ([09642d4](https://github.com/graycoreio/daffodil/commit/09642d4e991295b39717f49626b0c0b0db3b3f00))
* **design:** add article table styles ([#1686](https://github.com/graycoreio/daffodil/issues/1686)) ([02a1f6f](https://github.com/graycoreio/daffodil/commit/02a1f6f4899c0e104e4e609e4548206460468308))
* **design:** make @daffodil/design compatible with typescript@^4.0.0 ([#1783](https://github.com/graycoreio/daffodil/issues/1783)) ([7ef031e](https://github.com/graycoreio/daffodil/commit/7ef031ee0c25bb7bb8ab8a7c3492aef46f5e092d))
* **docs-gen:** compute the docGroup of an example from the folder path, not the filename ([#1711](https://github.com/graycoreio/daffodil/issues/1711)) ([c4d2494](https://github.com/graycoreio/daffodil/commit/c4d249487ba33fa88da1c1c358331dda3cb9aa22))
* **external-router:** add `daffInsertDataPathStrategy` and `daffDataPathUrlMatcher` ([#1767](https://github.com/graycoreio/daffodil/issues/1767)) ([d148a51](https://github.com/graycoreio/daffodil/commit/d148a51967cec4877e0cdc83600be7ea1978c43d))
* **product:** add kind and extension factories ([#1785](https://github.com/graycoreio/daffodil/issues/1785)) ([0ac027b](https://github.com/graycoreio/daffodil/commit/0ac027b8df6f283152d3137864584fa8f27f105e))
* **product:** add product factory tokens ([#1781](https://github.com/graycoreio/daffodil/issues/1781)) ([f56e1e1](https://github.com/graycoreio/daffodil/commit/f56e1e109d3fcda01f6e027d8d2fc3a5f863e121))
* **product:** remove extraneous configurable product fields ([#1738](https://github.com/graycoreio/daffodil/issues/1738)) ([adcb2ce](https://github.com/graycoreio/daffodil/commit/adcb2cea86326782087559af0ef8e9ede3b8e3ad))
* **product:** use random factory kind in in-memory and testing drivers ([#1811](https://github.com/graycoreio/daffodil/issues/1811)) ([2a4c4ea](https://github.com/graycoreio/daffodil/commit/2a4c4ea5f883875acbd0abf4546f33551f8812eb))
* **product-composite:** add in-memory driver ([#1816](https://github.com/graycoreio/daffodil/issues/1816)) ([84caaf0](https://github.com/graycoreio/daffodil/commit/84caaf0b66f9efe03e07a6bebb9cd9ce3f8d9d2b))
* **product-composite:** add testing driver package ([#1815](https://github.com/graycoreio/daffodil/issues/1815)) ([fb2957b](https://github.com/graycoreio/daffodil/commit/fb2957b02d783040b3e7d4a1b3f00db1912b1f2e))
* **product-configurable:** add feature and all selector ([#1807](https://github.com/graycoreio/daffodil/issues/1807)) ([9eee1d9](https://github.com/graycoreio/daffodil/commit/9eee1d953118ec38fdcca9bec8e5fdb41a775f12))
* **product-configurable:** add in-memory driver ([#1817](https://github.com/graycoreio/daffodil/issues/1817)) ([5734b91](https://github.com/graycoreio/daffodil/commit/5734b91b03e7506cc60c164efee4004aa9d030f8))
* **product-configurable:** add testing driver package ([#1818](https://github.com/graycoreio/daffodil/issues/1818)) ([6538e52](https://github.com/graycoreio/daffodil/commit/6538e521e19a6e3f24dedd8e8b8674d435183046))
* **related-products:** add in-memory driver module ([#1813](https://github.com/graycoreio/daffodil/issues/1813)) ([09d3d5e](https://github.com/graycoreio/daffodil/commit/09d3d5eddc4eaf570fd97fc384a5a69765b3c221))
* **related-products:** add testing driver module ([#1821](https://github.com/graycoreio/daffodil/issues/1821)) ([9112bfd](https://github.com/graycoreio/daffodil/commit/9112bfdcea391e7ff1cce137937562aa0e1cb3c3))
* **related-products:** DI product kind factory into related products factory ([#1812](https://github.com/graycoreio/daffodil/issues/1812)) ([998e3e0](https://github.com/graycoreio/daffodil/commit/998e3e065e0dc8669d710b4c1825db4f27aca5ca))
* **seo:** add `daffProvideCanonicalUrlUpdates` and `DAFF_SEO_CANONICAL_URL_UPDATES` token ([#1762](https://github.com/graycoreio/daffodil/issues/1762)) ([da5cb84](https://github.com/graycoreio/daffodil/commit/da5cb847672eae0c428b2399755bc4d4bd1f0346))
* **seo:** add `daffProvideMetaUpdates` and `DAFF_SEO_META_UPDATES` token ([#1757](https://github.com/graycoreio/daffodil/issues/1757)) ([3354033](https://github.com/graycoreio/daffodil/commit/335403385a08d2cc825a9f04cc30536a598373d1))
* **seo:** add `DaffSeoCanonicalUrlEffects` ([#1763](https://github.com/graycoreio/daffodil/issues/1763)) ([04dd8f8](https://github.com/graycoreio/daffodil/commit/04dd8f8d770a19b2ccfb3f921ab63b869263589d))
* **seo:** add `DaffSeoMetaEffects` ([#1761](https://github.com/graycoreio/daffodil/issues/1761)) ([926008d](https://github.com/graycoreio/daffodil/commit/926008d55c90f4795864c110c4475b7eb2883919))
* **seo:** add `DaffSeoTitleEffects` ([#1759](https://github.com/graycoreio/daffodil/issues/1759)) ([fd9f615](https://github.com/graycoreio/daffodil/commit/fd9f615aaa7a326ded4ca733b37122ff25e63529))
* **seo:** add canonical URL update model ([#1742](https://github.com/graycoreio/daffodil/issues/1742)) ([b24e110](https://github.com/graycoreio/daffodil/commit/b24e11079c458a400788fef3ccc2b01ee1e359c4))
* **seo:** add meta definition models ([#1744](https://github.com/graycoreio/daffodil/issues/1744)) ([5c1d735](https://github.com/graycoreio/daffodil/commit/5c1d735b430e80a9d78179279c1fbee65a49df61))
* **seo:** add meta update model ([#1739](https://github.com/graycoreio/daffodil/issues/1739)) ([00c33a5](https://github.com/graycoreio/daffodil/commit/00c33a5cb4ae981a9a497742c2709061ebb0dd86))
* **seo:** add page hook effects abstract class ([#1740](https://github.com/graycoreio/daffodil/issues/1740)) ([9c11f98](https://github.com/graycoreio/daffodil/commit/9c11f98f0e6c954e66eeda4f3cf0c2c8cc71de46))
* **seo:** add restoreable meta service ([#1749](https://github.com/graycoreio/daffodil/issues/1749)) ([b66fe24](https://github.com/graycoreio/daffodil/commit/b66fe2477ddb2322c5d648f1eaa0fb993b2ad0b9))
* **seo:** add restoreable service interface ([#1736](https://github.com/graycoreio/daffodil/issues/1736)) ([f624f00](https://github.com/graycoreio/daffodil/commit/f624f005b4710a6c57b0b6803dc0430a86edcd96))
* **seo:** add restoreable title service ([#1743](https://github.com/graycoreio/daffodil/issues/1743)) ([fde1635](https://github.com/graycoreio/daffodil/commit/fde1635200c817d09a6557368d2f96c5946c02b0))
* **seo:** add seo/state and update action pair ([#1708](https://github.com/graycoreio/daffodil/issues/1708)) ([9fb78cb](https://github.com/graycoreio/daffodil/commit/9fb78cbeb97628ff43ea3f7f7f3ceed93c9d0217))
* **seo:** add title update model ([#1741](https://github.com/graycoreio/daffodil/issues/1741)) ([5fe73fb](https://github.com/graycoreio/daffodil/commit/5fe73fba9a5f5c1e1ad3ce072e6bc4dca042f1c6))
* **seo:** add title updates multi token and provider ([#1752](https://github.com/graycoreio/daffodil/issues/1752)) ([333401a](https://github.com/graycoreio/daffodil/commit/333401a86e1eae0f35229f525cdac62cdff8ebd3))
* **seo:** change canonical service to restoreable ([#1745](https://github.com/graycoreio/daffodil/issues/1745)) ([2f3389d](https://github.com/graycoreio/daffodil/commit/2f3389d070ae9fe989119aec75aac93cec752acd))
* **upsell-products:** add upsell products package ([#1820](https://github.com/graycoreio/daffodil/issues/1820)) ([63448ad](https://github.com/graycoreio/daffodil/commit/63448ad4770dc798ac5963c0afc575a3b1286e66))


### Bug Fixes

* **cart:** cart item state prematurely resetting after update ([#1753](https://github.com/graycoreio/daffodil/issues/1753)) ([160a7b2](https://github.com/graycoreio/daffodil/commit/160a7b254f23e14c4465d5301bd9e04919044358))
* **cart:** public class members in magento driver ([#1801](https://github.com/graycoreio/daffodil/issues/1801)) ([e8dd8a1](https://github.com/graycoreio/daffodil/commit/e8dd8a1034eb81b5c9f1b2bd8095c12ed6eff09d))
* **checkout:** improper creation of partial in testing driver ([#1776](https://github.com/graycoreio/daffodil/issues/1776)) ([62cfc93](https://github.com/graycoreio/daffodil/commit/62cfc9353609d932581239bb82977a7b0aa49dfe))
* **design-land:** fix design-land tsconfig paths ([#1754](https://github.com/graycoreio/daffodil/issues/1754)) ([8e68fd4](https://github.com/graycoreio/daffodil/commit/8e68fd49527f132e85f80cac4a2bb34161b49f65))
* **product:** hardcoded search value for getAll query ([#1802](https://github.com/graycoreio/daffodil/issues/1802)) ([e664dbb](https://github.com/graycoreio/daffodil/commit/e664dbbe6f3bd00d2591339aa039c9d3a30ff946))
* **product-composite:** wrong imports and paths ([#1808](https://github.com/graycoreio/daffodil/issues/1808)) ([e77d255](https://github.com/graycoreio/daffodil/commit/e77d25579b0eb9c63db0937bf3f3dc32dde4c8b3))
* **product-configurable:** wrong imports and paths ([#1809](https://github.com/graycoreio/daffodil/issues/1809)) ([3203297](https://github.com/graycoreio/daffodil/commit/3203297b84cd56173d0d50acc486fbd71a082c78))
* **tools:** release build task fails ([#1766](https://github.com/graycoreio/daffodil/issues/1766)) ([2766234](https://github.com/graycoreio/daffodil/commit/2766234b594a90a9a277d750d611881c9c1e8b38))
* **tools-dgeni:** add devDependencies to package.json ([#1805](https://github.com/graycoreio/daffodil/issues/1805)) ([a1bcbd8](https://github.com/graycoreio/daffodil/commit/a1bcbd869043dcb9438f97820cbe943034b5b31b))

### [0.38.7](https://github.com/graycoreio/daffodil/compare/v0.38.4...v0.38.7) (2021-09-14)


### Features

* **cart:** throw out of stock error in the item update call ([#1791](https://github.com/graycoreio/daffodil/issues/1791)) ([faf714b](https://github.com/graycoreio/daffodil/commit/faf714bfd12950584e49b5bc34badcbf649901a5))
* **category:** add extra preview fragments to category products query ([#1747](https://github.com/graycoreio/daffodil/issues/1747)) ([4b760e7](https://github.com/graycoreio/daffodil/commit/4b760e7dd8ea6c3f7ede5f6abb21bf14e4ff6c20))
* **category:** fix factory partial types ([#1792](https://github.com/graycoreio/daffodil/issues/1792)) ([3499657](https://github.com/graycoreio/daffodil/commit/3499657f1e6d97e8b80f297e76c7f1c32b49f4d0))
* **composite-product:** copy composite product features into a new package ([#1690](https://github.com/graycoreio/daffodil/issues/1690)) ([fe5b99d](https://github.com/graycoreio/daffodil/commit/fe5b99d89ffc40f9c37f8a2e79cd6e6e9110c641))
* **configurable-product:** copy configurable product features into a new package ([#1681](https://github.com/graycoreio/daffodil/issues/1681)) ([0f11fa6](https://github.com/graycoreio/daffodil/commit/0f11fa6bc518e1b7136dc07a8648adbb182e8f3c))
* **core:** accept mock class instantiation args in constructor ([#1777](https://github.com/graycoreio/daffodil/issues/1777)) ([04c0d37](https://github.com/graycoreio/daffodil/commit/04c0d37cf31ca5de0e5f602d62a1b3da2feb4c0c))
* **core:** add `sample` ([#1786](https://github.com/graycoreio/daffodil/issues/1786)) ([69706a4](https://github.com/graycoreio/daffodil/commit/69706a4ccd787dc6961f11d59d1300351654f63e))
* **core:** add length param to `randomSlice` ([#1789](https://github.com/graycoreio/daffodil/issues/1789)) ([0465b21](https://github.com/graycoreio/daffodil/commit/0465b21f8a5762ad1518c83327d00289b7e529bf))
* **daffio:** update members table in docs to use article tables ([#1687](https://github.com/graycoreio/daffodil/issues/1687)) ([09642d4](https://github.com/graycoreio/daffodil/commit/09642d4e991295b39717f49626b0c0b0db3b3f00))
* **design:** add article table styles ([#1686](https://github.com/graycoreio/daffodil/issues/1686)) ([02a1f6f](https://github.com/graycoreio/daffodil/commit/02a1f6f4899c0e104e4e609e4548206460468308))
* **design:** make @daffodil/design compatible with typescript@^4.0.0 ([#1783](https://github.com/graycoreio/daffodil/issues/1783)) ([7ef031e](https://github.com/graycoreio/daffodil/commit/7ef031ee0c25bb7bb8ab8a7c3492aef46f5e092d))
* **docs-gen:** compute the docGroup of an example from the folder path, not the filename ([#1711](https://github.com/graycoreio/daffodil/issues/1711)) ([c4d2494](https://github.com/graycoreio/daffodil/commit/c4d249487ba33fa88da1c1c358331dda3cb9aa22))
* **external-router:** add `daffInsertDataPathStrategy` and `daffDataPathUrlMatcher` ([#1767](https://github.com/graycoreio/daffodil/issues/1767)) ([d148a51](https://github.com/graycoreio/daffodil/commit/d148a51967cec4877e0cdc83600be7ea1978c43d))
* **product:** add kind and extension factories ([#1785](https://github.com/graycoreio/daffodil/issues/1785)) ([0ac027b](https://github.com/graycoreio/daffodil/commit/0ac027b8df6f283152d3137864584fa8f27f105e))
* **product:** add product factory tokens ([#1781](https://github.com/graycoreio/daffodil/issues/1781)) ([f56e1e1](https://github.com/graycoreio/daffodil/commit/f56e1e109d3fcda01f6e027d8d2fc3a5f863e121))
* **product:** remove extraneous configurable product fields ([#1738](https://github.com/graycoreio/daffodil/issues/1738)) ([adcb2ce](https://github.com/graycoreio/daffodil/commit/adcb2cea86326782087559af0ef8e9ede3b8e3ad))
* **product:** use random factory kind in in-memory and testing drivers ([#1811](https://github.com/graycoreio/daffodil/issues/1811)) ([2a4c4ea](https://github.com/graycoreio/daffodil/commit/2a4c4ea5f883875acbd0abf4546f33551f8812eb))
* **product-composite:** add in-memory driver ([#1816](https://github.com/graycoreio/daffodil/issues/1816)) ([84caaf0](https://github.com/graycoreio/daffodil/commit/84caaf0b66f9efe03e07a6bebb9cd9ce3f8d9d2b))
* **product-composite:** add testing driver package ([#1815](https://github.com/graycoreio/daffodil/issues/1815)) ([fb2957b](https://github.com/graycoreio/daffodil/commit/fb2957b02d783040b3e7d4a1b3f00db1912b1f2e))
* **product-configurable:** add feature and all selector ([#1807](https://github.com/graycoreio/daffodil/issues/1807)) ([9eee1d9](https://github.com/graycoreio/daffodil/commit/9eee1d953118ec38fdcca9bec8e5fdb41a775f12))
* **product-configurable:** add in-memory driver ([#1817](https://github.com/graycoreio/daffodil/issues/1817)) ([5734b91](https://github.com/graycoreio/daffodil/commit/5734b91b03e7506cc60c164efee4004aa9d030f8))
* **product-configurable:** add testing driver package ([#1818](https://github.com/graycoreio/daffodil/issues/1818)) ([6538e52](https://github.com/graycoreio/daffodil/commit/6538e521e19a6e3f24dedd8e8b8674d435183046))
* **related-products:** add in-memory driver module ([#1813](https://github.com/graycoreio/daffodil/issues/1813)) ([09d3d5e](https://github.com/graycoreio/daffodil/commit/09d3d5eddc4eaf570fd97fc384a5a69765b3c221))
* **related-products:** add testing driver module ([#1821](https://github.com/graycoreio/daffodil/issues/1821)) ([9112bfd](https://github.com/graycoreio/daffodil/commit/9112bfdcea391e7ff1cce137937562aa0e1cb3c3))
* **related-products:** DI product kind factory into related products factory ([#1812](https://github.com/graycoreio/daffodil/issues/1812)) ([998e3e0](https://github.com/graycoreio/daffodil/commit/998e3e065e0dc8669d710b4c1825db4f27aca5ca))
* **seo:** add `daffProvideCanonicalUrlUpdates` and `DAFF_SEO_CANONICAL_URL_UPDATES` token ([#1762](https://github.com/graycoreio/daffodil/issues/1762)) ([da5cb84](https://github.com/graycoreio/daffodil/commit/da5cb847672eae0c428b2399755bc4d4bd1f0346))
* **seo:** add `daffProvideMetaUpdates` and `DAFF_SEO_META_UPDATES` token ([#1757](https://github.com/graycoreio/daffodil/issues/1757)) ([3354033](https://github.com/graycoreio/daffodil/commit/335403385a08d2cc825a9f04cc30536a598373d1))
* **seo:** add `DaffSeoCanonicalUrlEffects` ([#1763](https://github.com/graycoreio/daffodil/issues/1763)) ([04dd8f8](https://github.com/graycoreio/daffodil/commit/04dd8f8d770a19b2ccfb3f921ab63b869263589d))
* **seo:** add `DaffSeoMetaEffects` ([#1761](https://github.com/graycoreio/daffodil/issues/1761)) ([926008d](https://github.com/graycoreio/daffodil/commit/926008d55c90f4795864c110c4475b7eb2883919))
* **seo:** add `DaffSeoTitleEffects` ([#1759](https://github.com/graycoreio/daffodil/issues/1759)) ([fd9f615](https://github.com/graycoreio/daffodil/commit/fd9f615aaa7a326ded4ca733b37122ff25e63529))
* **seo:** add canonical URL update model ([#1742](https://github.com/graycoreio/daffodil/issues/1742)) ([b24e110](https://github.com/graycoreio/daffodil/commit/b24e11079c458a400788fef3ccc2b01ee1e359c4))
* **seo:** add meta definition models ([#1744](https://github.com/graycoreio/daffodil/issues/1744)) ([5c1d735](https://github.com/graycoreio/daffodil/commit/5c1d735b430e80a9d78179279c1fbee65a49df61))
* **seo:** add meta update model ([#1739](https://github.com/graycoreio/daffodil/issues/1739)) ([00c33a5](https://github.com/graycoreio/daffodil/commit/00c33a5cb4ae981a9a497742c2709061ebb0dd86))
* **seo:** add page hook effects abstract class ([#1740](https://github.com/graycoreio/daffodil/issues/1740)) ([9c11f98](https://github.com/graycoreio/daffodil/commit/9c11f98f0e6c954e66eeda4f3cf0c2c8cc71de46))
* **seo:** add restoreable meta service ([#1749](https://github.com/graycoreio/daffodil/issues/1749)) ([b66fe24](https://github.com/graycoreio/daffodil/commit/b66fe2477ddb2322c5d648f1eaa0fb993b2ad0b9))
* **seo:** add restoreable service interface ([#1736](https://github.com/graycoreio/daffodil/issues/1736)) ([f624f00](https://github.com/graycoreio/daffodil/commit/f624f005b4710a6c57b0b6803dc0430a86edcd96))
* **seo:** add restoreable title service ([#1743](https://github.com/graycoreio/daffodil/issues/1743)) ([fde1635](https://github.com/graycoreio/daffodil/commit/fde1635200c817d09a6557368d2f96c5946c02b0))
* **seo:** add seo/state and update action pair ([#1708](https://github.com/graycoreio/daffodil/issues/1708)) ([9fb78cb](https://github.com/graycoreio/daffodil/commit/9fb78cbeb97628ff43ea3f7f7f3ceed93c9d0217))
* **seo:** add title update model ([#1741](https://github.com/graycoreio/daffodil/issues/1741)) ([5fe73fb](https://github.com/graycoreio/daffodil/commit/5fe73fba9a5f5c1e1ad3ce072e6bc4dca042f1c6))
* **seo:** add title updates multi token and provider ([#1752](https://github.com/graycoreio/daffodil/issues/1752)) ([333401a](https://github.com/graycoreio/daffodil/commit/333401a86e1eae0f35229f525cdac62cdff8ebd3))
* **seo:** change canonical service to restoreable ([#1745](https://github.com/graycoreio/daffodil/issues/1745)) ([2f3389d](https://github.com/graycoreio/daffodil/commit/2f3389d070ae9fe989119aec75aac93cec752acd))
* **upsell-products:** add upsell products package ([#1820](https://github.com/graycoreio/daffodil/issues/1820)) ([63448ad](https://github.com/graycoreio/daffodil/commit/63448ad4770dc798ac5963c0afc575a3b1286e66))


### Bug Fixes

* **cart:** cart item state prematurely resetting after update ([#1753](https://github.com/graycoreio/daffodil/issues/1753)) ([160a7b2](https://github.com/graycoreio/daffodil/commit/160a7b254f23e14c4465d5301bd9e04919044358))
* **cart:** public class members in magento driver ([#1801](https://github.com/graycoreio/daffodil/issues/1801)) ([e8dd8a1](https://github.com/graycoreio/daffodil/commit/e8dd8a1034eb81b5c9f1b2bd8095c12ed6eff09d))
* **checkout:** improper creation of partial in testing driver ([#1776](https://github.com/graycoreio/daffodil/issues/1776)) ([62cfc93](https://github.com/graycoreio/daffodil/commit/62cfc9353609d932581239bb82977a7b0aa49dfe))
* **design-land:** fix design-land tsconfig paths ([#1754](https://github.com/graycoreio/daffodil/issues/1754)) ([8e68fd4](https://github.com/graycoreio/daffodil/commit/8e68fd49527f132e85f80cac4a2bb34161b49f65))
* **product:** hardcoded search value for getAll query ([#1802](https://github.com/graycoreio/daffodil/issues/1802)) ([e664dbb](https://github.com/graycoreio/daffodil/commit/e664dbbe6f3bd00d2591339aa039c9d3a30ff946))
* **product-composite:** wrong imports and paths ([#1808](https://github.com/graycoreio/daffodil/issues/1808)) ([e77d255](https://github.com/graycoreio/daffodil/commit/e77d25579b0eb9c63db0937bf3f3dc32dde4c8b3))
* **product-configurable:** wrong imports and paths ([#1809](https://github.com/graycoreio/daffodil/issues/1809)) ([3203297](https://github.com/graycoreio/daffodil/commit/3203297b84cd56173d0d50acc486fbd71a082c78))
* **tools:** release build task fails ([#1766](https://github.com/graycoreio/daffodil/issues/1766)) ([2766234](https://github.com/graycoreio/daffodil/commit/2766234b594a90a9a277d750d611881c9c1e8b38))
* **tools-dgeni:** add devDependencies to package.json ([#1805](https://github.com/graycoreio/daffodil/issues/1805)) ([a1bcbd8](https://github.com/graycoreio/daffodil/commit/a1bcbd869043dcb9438f97820cbe943034b5b31b))

### [0.38.6](https://github.com/graycoreio/daffodil/compare/v0.38.4...v0.38.6) (2021-09-14)


### Features

* **cart:** throw out of stock error in the item update call ([#1791](https://github.com/graycoreio/daffodil/issues/1791)) ([faf714b](https://github.com/graycoreio/daffodil/commit/faf714bfd12950584e49b5bc34badcbf649901a5))
* **category:** add extra preview fragments to category products query ([#1747](https://github.com/graycoreio/daffodil/issues/1747)) ([4b760e7](https://github.com/graycoreio/daffodil/commit/4b760e7dd8ea6c3f7ede5f6abb21bf14e4ff6c20))
* **category:** fix factory partial types ([#1792](https://github.com/graycoreio/daffodil/issues/1792)) ([3499657](https://github.com/graycoreio/daffodil/commit/3499657f1e6d97e8b80f297e76c7f1c32b49f4d0))
* **composite-product:** copy composite product features into a new package ([#1690](https://github.com/graycoreio/daffodil/issues/1690)) ([fe5b99d](https://github.com/graycoreio/daffodil/commit/fe5b99d89ffc40f9c37f8a2e79cd6e6e9110c641))
* **configurable-product:** copy configurable product features into a new package ([#1681](https://github.com/graycoreio/daffodil/issues/1681)) ([0f11fa6](https://github.com/graycoreio/daffodil/commit/0f11fa6bc518e1b7136dc07a8648adbb182e8f3c))
* **core:** accept mock class instantiation args in constructor ([#1777](https://github.com/graycoreio/daffodil/issues/1777)) ([04c0d37](https://github.com/graycoreio/daffodil/commit/04c0d37cf31ca5de0e5f602d62a1b3da2feb4c0c))
* **core:** add `sample` ([#1786](https://github.com/graycoreio/daffodil/issues/1786)) ([69706a4](https://github.com/graycoreio/daffodil/commit/69706a4ccd787dc6961f11d59d1300351654f63e))
* **core:** add length param to `randomSlice` ([#1789](https://github.com/graycoreio/daffodil/issues/1789)) ([0465b21](https://github.com/graycoreio/daffodil/commit/0465b21f8a5762ad1518c83327d00289b7e529bf))
* **daffio:** update members table in docs to use article tables ([#1687](https://github.com/graycoreio/daffodil/issues/1687)) ([09642d4](https://github.com/graycoreio/daffodil/commit/09642d4e991295b39717f49626b0c0b0db3b3f00))
* **design:** add article table styles ([#1686](https://github.com/graycoreio/daffodil/issues/1686)) ([02a1f6f](https://github.com/graycoreio/daffodil/commit/02a1f6f4899c0e104e4e609e4548206460468308))
* **design:** make @daffodil/design compatible with typescript@^4.0.0 ([#1783](https://github.com/graycoreio/daffodil/issues/1783)) ([7ef031e](https://github.com/graycoreio/daffodil/commit/7ef031ee0c25bb7bb8ab8a7c3492aef46f5e092d))
* **docs-gen:** compute the docGroup of an example from the folder path, not the filename ([#1711](https://github.com/graycoreio/daffodil/issues/1711)) ([c4d2494](https://github.com/graycoreio/daffodil/commit/c4d249487ba33fa88da1c1c358331dda3cb9aa22))
* **external-router:** add `daffInsertDataPathStrategy` and `daffDataPathUrlMatcher` ([#1767](https://github.com/graycoreio/daffodil/issues/1767)) ([d148a51](https://github.com/graycoreio/daffodil/commit/d148a51967cec4877e0cdc83600be7ea1978c43d))
* **product:** add kind and extension factories ([#1785](https://github.com/graycoreio/daffodil/issues/1785)) ([0ac027b](https://github.com/graycoreio/daffodil/commit/0ac027b8df6f283152d3137864584fa8f27f105e))
* **product:** add product factory tokens ([#1781](https://github.com/graycoreio/daffodil/issues/1781)) ([f56e1e1](https://github.com/graycoreio/daffodil/commit/f56e1e109d3fcda01f6e027d8d2fc3a5f863e121))
* **product:** remove extraneous configurable product fields ([#1738](https://github.com/graycoreio/daffodil/issues/1738)) ([adcb2ce](https://github.com/graycoreio/daffodil/commit/adcb2cea86326782087559af0ef8e9ede3b8e3ad))
* **product:** use random factory kind in in-memory and testing drivers ([#1811](https://github.com/graycoreio/daffodil/issues/1811)) ([2a4c4ea](https://github.com/graycoreio/daffodil/commit/2a4c4ea5f883875acbd0abf4546f33551f8812eb))
* **product-composite:** add in-memory driver ([#1816](https://github.com/graycoreio/daffodil/issues/1816)) ([84caaf0](https://github.com/graycoreio/daffodil/commit/84caaf0b66f9efe03e07a6bebb9cd9ce3f8d9d2b))
* **product-composite:** add testing driver package ([#1815](https://github.com/graycoreio/daffodil/issues/1815)) ([fb2957b](https://github.com/graycoreio/daffodil/commit/fb2957b02d783040b3e7d4a1b3f00db1912b1f2e))
* **product-configurable:** add feature and all selector ([#1807](https://github.com/graycoreio/daffodil/issues/1807)) ([9eee1d9](https://github.com/graycoreio/daffodil/commit/9eee1d953118ec38fdcca9bec8e5fdb41a775f12))
* **product-configurable:** add in-memory driver ([#1817](https://github.com/graycoreio/daffodil/issues/1817)) ([5734b91](https://github.com/graycoreio/daffodil/commit/5734b91b03e7506cc60c164efee4004aa9d030f8))
* **product-configurable:** add testing driver package ([#1818](https://github.com/graycoreio/daffodil/issues/1818)) ([6538e52](https://github.com/graycoreio/daffodil/commit/6538e521e19a6e3f24dedd8e8b8674d435183046))
* **related-products:** add in-memory driver module ([#1813](https://github.com/graycoreio/daffodil/issues/1813)) ([09d3d5e](https://github.com/graycoreio/daffodil/commit/09d3d5eddc4eaf570fd97fc384a5a69765b3c221))
* **related-products:** add testing driver module ([#1821](https://github.com/graycoreio/daffodil/issues/1821)) ([9112bfd](https://github.com/graycoreio/daffodil/commit/9112bfdcea391e7ff1cce137937562aa0e1cb3c3))
* **related-products:** DI product kind factory into related products factory ([#1812](https://github.com/graycoreio/daffodil/issues/1812)) ([998e3e0](https://github.com/graycoreio/daffodil/commit/998e3e065e0dc8669d710b4c1825db4f27aca5ca))
* **seo:** add `daffProvideCanonicalUrlUpdates` and `DAFF_SEO_CANONICAL_URL_UPDATES` token ([#1762](https://github.com/graycoreio/daffodil/issues/1762)) ([da5cb84](https://github.com/graycoreio/daffodil/commit/da5cb847672eae0c428b2399755bc4d4bd1f0346))
* **seo:** add `daffProvideMetaUpdates` and `DAFF_SEO_META_UPDATES` token ([#1757](https://github.com/graycoreio/daffodil/issues/1757)) ([3354033](https://github.com/graycoreio/daffodil/commit/335403385a08d2cc825a9f04cc30536a598373d1))
* **seo:** add `DaffSeoCanonicalUrlEffects` ([#1763](https://github.com/graycoreio/daffodil/issues/1763)) ([04dd8f8](https://github.com/graycoreio/daffodil/commit/04dd8f8d770a19b2ccfb3f921ab63b869263589d))
* **seo:** add `DaffSeoMetaEffects` ([#1761](https://github.com/graycoreio/daffodil/issues/1761)) ([926008d](https://github.com/graycoreio/daffodil/commit/926008d55c90f4795864c110c4475b7eb2883919))
* **seo:** add `DaffSeoTitleEffects` ([#1759](https://github.com/graycoreio/daffodil/issues/1759)) ([fd9f615](https://github.com/graycoreio/daffodil/commit/fd9f615aaa7a326ded4ca733b37122ff25e63529))
* **seo:** add canonical URL update model ([#1742](https://github.com/graycoreio/daffodil/issues/1742)) ([b24e110](https://github.com/graycoreio/daffodil/commit/b24e11079c458a400788fef3ccc2b01ee1e359c4))
* **seo:** add meta definition models ([#1744](https://github.com/graycoreio/daffodil/issues/1744)) ([5c1d735](https://github.com/graycoreio/daffodil/commit/5c1d735b430e80a9d78179279c1fbee65a49df61))
* **seo:** add meta update model ([#1739](https://github.com/graycoreio/daffodil/issues/1739)) ([00c33a5](https://github.com/graycoreio/daffodil/commit/00c33a5cb4ae981a9a497742c2709061ebb0dd86))
* **seo:** add page hook effects abstract class ([#1740](https://github.com/graycoreio/daffodil/issues/1740)) ([9c11f98](https://github.com/graycoreio/daffodil/commit/9c11f98f0e6c954e66eeda4f3cf0c2c8cc71de46))
* **seo:** add restoreable meta service ([#1749](https://github.com/graycoreio/daffodil/issues/1749)) ([b66fe24](https://github.com/graycoreio/daffodil/commit/b66fe2477ddb2322c5d648f1eaa0fb993b2ad0b9))
* **seo:** add restoreable service interface ([#1736](https://github.com/graycoreio/daffodil/issues/1736)) ([f624f00](https://github.com/graycoreio/daffodil/commit/f624f005b4710a6c57b0b6803dc0430a86edcd96))
* **seo:** add restoreable title service ([#1743](https://github.com/graycoreio/daffodil/issues/1743)) ([fde1635](https://github.com/graycoreio/daffodil/commit/fde1635200c817d09a6557368d2f96c5946c02b0))
* **seo:** add seo/state and update action pair ([#1708](https://github.com/graycoreio/daffodil/issues/1708)) ([9fb78cb](https://github.com/graycoreio/daffodil/commit/9fb78cbeb97628ff43ea3f7f7f3ceed93c9d0217))
* **seo:** add title update model ([#1741](https://github.com/graycoreio/daffodil/issues/1741)) ([5fe73fb](https://github.com/graycoreio/daffodil/commit/5fe73fba9a5f5c1e1ad3ce072e6bc4dca042f1c6))
* **seo:** add title updates multi token and provider ([#1752](https://github.com/graycoreio/daffodil/issues/1752)) ([333401a](https://github.com/graycoreio/daffodil/commit/333401a86e1eae0f35229f525cdac62cdff8ebd3))
* **seo:** change canonical service to restoreable ([#1745](https://github.com/graycoreio/daffodil/issues/1745)) ([2f3389d](https://github.com/graycoreio/daffodil/commit/2f3389d070ae9fe989119aec75aac93cec752acd))
* **upsell-products:** add upsell products package ([#1820](https://github.com/graycoreio/daffodil/issues/1820)) ([63448ad](https://github.com/graycoreio/daffodil/commit/63448ad4770dc798ac5963c0afc575a3b1286e66))


### Bug Fixes

* **cart:** cart item state prematurely resetting after update ([#1753](https://github.com/graycoreio/daffodil/issues/1753)) ([160a7b2](https://github.com/graycoreio/daffodil/commit/160a7b254f23e14c4465d5301bd9e04919044358))
* **cart:** public class members in magento driver ([#1801](https://github.com/graycoreio/daffodil/issues/1801)) ([e8dd8a1](https://github.com/graycoreio/daffodil/commit/e8dd8a1034eb81b5c9f1b2bd8095c12ed6eff09d))
* **checkout:** improper creation of partial in testing driver ([#1776](https://github.com/graycoreio/daffodil/issues/1776)) ([62cfc93](https://github.com/graycoreio/daffodil/commit/62cfc9353609d932581239bb82977a7b0aa49dfe))
* **design-land:** fix design-land tsconfig paths ([#1754](https://github.com/graycoreio/daffodil/issues/1754)) ([8e68fd4](https://github.com/graycoreio/daffodil/commit/8e68fd49527f132e85f80cac4a2bb34161b49f65))
* **product:** hardcoded search value for getAll query ([#1802](https://github.com/graycoreio/daffodil/issues/1802)) ([e664dbb](https://github.com/graycoreio/daffodil/commit/e664dbbe6f3bd00d2591339aa039c9d3a30ff946))
* **product-composite:** wrong imports and paths ([#1808](https://github.com/graycoreio/daffodil/issues/1808)) ([e77d255](https://github.com/graycoreio/daffodil/commit/e77d25579b0eb9c63db0937bf3f3dc32dde4c8b3))
* **product-configurable:** wrong imports and paths ([#1809](https://github.com/graycoreio/daffodil/issues/1809)) ([3203297](https://github.com/graycoreio/daffodil/commit/3203297b84cd56173d0d50acc486fbd71a082c78))
* **tools:** release build task fails ([#1766](https://github.com/graycoreio/daffodil/issues/1766)) ([2766234](https://github.com/graycoreio/daffodil/commit/2766234b594a90a9a277d750d611881c9c1e8b38))
* **tools-dgeni:** add devDependencies to package.json ([#1805](https://github.com/graycoreio/daffodil/issues/1805)) ([a1bcbd8](https://github.com/graycoreio/daffodil/commit/a1bcbd869043dcb9438f97820cbe943034b5b31b))

### [0.38.5](https://github.com/griest024/daffodil/compare/v0.38.4...v0.38.5) (2021-08-23)


### Features

* **category:** add extra preview fragments to category products query ([#1747](https://github.com/griest024/daffodil/issues/1747)) ([4b760e7](https://github.com/griest024/daffodil/commit/4b760e7dd8ea6c3f7ede5f6abb21bf14e4ff6c20))
* **docs-gen:** compute the docGroup of an example from the folder path, not the filename ([#1711](https://github.com/griest024/daffodil/issues/1711)) ([c4d2494](https://github.com/griest024/daffodil/commit/c4d249487ba33fa88da1c1c358331dda3cb9aa22))
* **external-router:** add `daffInsertDataPathStrategy` and `daffDataPathUrlMatcher` ([#1767](https://github.com/griest024/daffodil/issues/1767)) ([d148a51](https://github.com/griest024/daffodil/commit/d148a51967cec4877e0cdc83600be7ea1978c43d))
* **product:** remove extraneous configurable product fields ([#1738](https://github.com/griest024/daffodil/issues/1738)) ([adcb2ce](https://github.com/griest024/daffodil/commit/adcb2cea86326782087559af0ef8e9ede3b8e3ad))
* **seo:** add `daffProvideCanonicalUrlUpdates` and `DAFF_SEO_CANONICAL_URL_UPDATES` token ([#1762](https://github.com/griest024/daffodil/issues/1762)) ([da5cb84](https://github.com/griest024/daffodil/commit/da5cb847672eae0c428b2399755bc4d4bd1f0346))
* **seo:** add `daffProvideMetaUpdates` and `DAFF_SEO_META_UPDATES` token ([#1757](https://github.com/griest024/daffodil/issues/1757)) ([3354033](https://github.com/griest024/daffodil/commit/335403385a08d2cc825a9f04cc30536a598373d1))
* **seo:** add `DaffSeoCanonicalUrlEffects` ([#1763](https://github.com/griest024/daffodil/issues/1763)) ([04dd8f8](https://github.com/griest024/daffodil/commit/04dd8f8d770a19b2ccfb3f921ab63b869263589d))
* **seo:** add `DaffSeoMetaEffects` ([#1761](https://github.com/griest024/daffodil/issues/1761)) ([926008d](https://github.com/griest024/daffodil/commit/926008d55c90f4795864c110c4475b7eb2883919))
* **seo:** add `DaffSeoTitleEffects` ([#1759](https://github.com/griest024/daffodil/issues/1759)) ([fd9f615](https://github.com/griest024/daffodil/commit/fd9f615aaa7a326ded4ca733b37122ff25e63529))
* **seo:** add canonical URL update model ([#1742](https://github.com/griest024/daffodil/issues/1742)) ([b24e110](https://github.com/griest024/daffodil/commit/b24e11079c458a400788fef3ccc2b01ee1e359c4))
* **seo:** add meta definition models ([#1744](https://github.com/griest024/daffodil/issues/1744)) ([5c1d735](https://github.com/griest024/daffodil/commit/5c1d735b430e80a9d78179279c1fbee65a49df61))
* **seo:** add meta update model ([#1739](https://github.com/griest024/daffodil/issues/1739)) ([00c33a5](https://github.com/griest024/daffodil/commit/00c33a5cb4ae981a9a497742c2709061ebb0dd86))
* **seo:** add page hook effects abstract class ([#1740](https://github.com/griest024/daffodil/issues/1740)) ([9c11f98](https://github.com/griest024/daffodil/commit/9c11f98f0e6c954e66eeda4f3cf0c2c8cc71de46))
* **seo:** add restoreable meta service ([#1749](https://github.com/griest024/daffodil/issues/1749)) ([b66fe24](https://github.com/griest024/daffodil/commit/b66fe2477ddb2322c5d648f1eaa0fb993b2ad0b9))
* **seo:** add restoreable service interface ([#1736](https://github.com/griest024/daffodil/issues/1736)) ([f624f00](https://github.com/griest024/daffodil/commit/f624f005b4710a6c57b0b6803dc0430a86edcd96))
* **seo:** add restoreable title service ([#1743](https://github.com/griest024/daffodil/issues/1743)) ([fde1635](https://github.com/griest024/daffodil/commit/fde1635200c817d09a6557368d2f96c5946c02b0))
* **seo:** add seo/state and update action pair ([#1708](https://github.com/griest024/daffodil/issues/1708)) ([9fb78cb](https://github.com/griest024/daffodil/commit/9fb78cbeb97628ff43ea3f7f7f3ceed93c9d0217))
* **seo:** add title update model ([#1741](https://github.com/griest024/daffodil/issues/1741)) ([5fe73fb](https://github.com/griest024/daffodil/commit/5fe73fba9a5f5c1e1ad3ce072e6bc4dca042f1c6))
* **seo:** add title updates multi token and provider ([#1752](https://github.com/griest024/daffodil/issues/1752)) ([333401a](https://github.com/griest024/daffodil/commit/333401a86e1eae0f35229f525cdac62cdff8ebd3))
* **seo:** change canonical service to restoreable ([#1745](https://github.com/griest024/daffodil/issues/1745)) ([2f3389d](https://github.com/griest024/daffodil/commit/2f3389d070ae9fe989119aec75aac93cec752acd))


### Bug Fixes

* **cart:** cart item state prematurely resetting after update ([#1753](https://github.com/griest024/daffodil/issues/1753)) ([160a7b2](https://github.com/griest024/daffodil/commit/160a7b254f23e14c4465d5301bd9e04919044358))
* **design-land:** fix design-land tsconfig paths ([#1754](https://github.com/griest024/daffodil/issues/1754)) ([8e68fd4](https://github.com/griest024/daffodil/commit/8e68fd49527f132e85f80cac4a2bb34161b49f65))
* **tools:** release build task fails ([#1766](https://github.com/griest024/daffodil/issues/1766)) ([2766234](https://github.com/griest024/daffodil/commit/2766234b594a90a9a277d750d611881c9c1e8b38))

### [0.38.4](https://github.com/graycoreio/daffodil/compare/v0.38.3...v0.38.4) (2021-08-06)


### Features

* **category:** add `canonicalUrl` to category ([#1718](https://github.com/graycoreio/daffodil/issues/1718)) ([0ba26dd](https://github.com/graycoreio/daffodil/commit/0ba26dd95cffde963fdff444a9c24bdc3ada380d))
* **core:** add canonically locatable interface ([#1715](https://github.com/graycoreio/daffodil/issues/1715)) ([a459492](https://github.com/graycoreio/daffodil/commit/a459492117f2f715846932ab6169c725d9856bec))
* **design:** add quantity field component ([#1307](https://github.com/graycoreio/daffodil/issues/1307)) ([7cf1741](https://github.com/graycoreio/daffodil/commit/7cf1741cbf637b5242e877efe1fa503168efb0f9))
* **design:** adds docs example for DaffModalComponent ([#1717](https://github.com/graycoreio/daffodil/issues/1717)) ([7942f63](https://github.com/graycoreio/daffodil/commit/7942f6349da1a6abf21b08180ced8101ff29ab19))
* **design:** define a type for an exported component example ([#1712](https://github.com/graycoreio/daffodil/issues/1712)) ([cecb833](https://github.com/graycoreio/daffodil/commit/cecb833ed3e720c69aaf9997e05abcb5f5d36373))
* **product:** add `canonicalUrl` to product ([#1719](https://github.com/graycoreio/daffodil/issues/1719)) ([60162c1](https://github.com/graycoreio/daffodil/commit/60162c144b9fb0fcca4b43a14039afce23093dc1))
* **product:** DaffProduct.images is a required field ([#1713](https://github.com/graycoreio/daffodil/issues/1713)) ([f7a7b8f](https://github.com/graycoreio/daffodil/commit/f7a7b8fc2c5ec587fd2e437fe10ac543c5bdff29))
* **product:** remove unused magento bundled product field ([#1705](https://github.com/graycoreio/daffodil/issues/1705)) ([8bc77d0](https://github.com/graycoreio/daffodil/commit/8bc77d0656fd036a01b6baafc6d482478f22bfbe))
* **related-products:** add Magento driver ([#1700](https://github.com/graycoreio/daffodil/issues/1700)) ([30294c3](https://github.com/graycoreio/daffodil/commit/30294c39d801327c52851c171233bf5a2087f746))
* **related-products:** add reducers and meta-reducers ([#1707](https://github.com/graycoreio/daffodil/issues/1707)) ([ed363c9](https://github.com/graycoreio/daffodil/commit/ed363c94be846bf30705b857009830c6910181a9))
* **related-products:** add selectors and facade ([#1722](https://github.com/graycoreio/daffodil/issues/1722)) ([b1d251b](https://github.com/graycoreio/daffodil/commit/b1d251b92a33196ea358aefe044a3e112f01c391))
* **related-products:** cast main product from product response ([#1728](https://github.com/graycoreio/daffodil/issues/1728)) ([ea26b4d](https://github.com/graycoreio/daffodil/commit/ea26b4d4bbcee3eb5aa6b78423c7a1344d1ad10a))
* **seo:** cache upserted canonical URL and provide in root ([#1710](https://github.com/graycoreio/daffodil/issues/1710)) ([42883b1](https://github.com/graycoreio/daffodil/commit/42883b1fc2f8ed722aacb2a8598102b8e0e46be3))


### Bug Fixes

* **product:** magento product previews need to transform stock status ([#1733](https://github.com/graycoreio/daffodil/issues/1733)) ([2c852ee](https://github.com/graycoreio/daffodil/commit/2c852ee0fe8325cffe755cae347b057241ef6f72))
* **related-products:** arrow functions in provider factory ([#1727](https://github.com/graycoreio/daffodil/issues/1727)) ([72ea8a3](https://github.com/graycoreio/daffodil/commit/72ea8a371040f27ce4f03c82b36845e05ccff543))
* **related-products:** wrong mock class in factory ([#1729](https://github.com/graycoreio/daffodil/issues/1729)) ([36a0a8b](https://github.com/graycoreio/daffodil/commit/36a0a8b01a3939a47ee386a683a75b4007adcd44))

### [0.38.3](https://github.com/graycoreio/daffodil/compare/v0.38.2...v0.38.3) (2021-07-28)


### Bug Fixes

* **product:** add workaround for magento not returning bundled product items in related/upsell products ([#1706](https://github.com/graycoreio/daffodil/issues/1706)) ([da5cc32](https://github.com/graycoreio/daffodil/commit/da5cc3262c41b301a666466bd011caf0ff9daba9))

### [0.38.2](https://github.com/graycoreio/daffodil/compare/v0.38.1...v0.38.2) (2021-07-23)


### Bug Fixes

* **product:** Magento driver prefixing thumbnail URL ([#1703](https://github.com/graycoreio/daffodil/issues/1703)) ([dc9bef0](https://github.com/graycoreio/daffodil/commit/dc9bef00f72bc4249bae966879ff487594904559))

### [0.38.1](https://github.com/graycoreio/daffodil/compare/v0.38.0...v0.38.1) (2021-07-23)


### Features

* **product:** add product page facade ([#1702](https://github.com/graycoreio/daffodil/issues/1702)) ([3f62774](https://github.com/graycoreio/daffodil/commit/3f62774b38b85a31586ce461f0ee624e2c1d8fb3))

## [0.38.0](https://github.com/graycoreio/daffodil/compare/v0.37.0...v0.38.0) (2021-07-22)


### ⚠ BREAKING CHANGES

* **product:** magento product transformers are no longer pure functions but are injectable services
* **core,cart:** daffCreateMetaReducer has changed to daffComposeReducers
* **category:** the api around the "selected" category has changed to "current" category.
* **product:** selectors and facade fields called selectedProduct* have changed or have been removed
* **cart:** DaffCartCoupon has a new required field, id.
* **category:** selector types have changed
* **demo,product:** selector types have changed

### Features

* **cart:** add dependency injectable reducers ([#1655](https://github.com/graycoreio/daffodil/issues/1655)) ([e64422f](https://github.com/graycoreio/daffodil/commit/e64422f98a7909c1027fddb46a315da486e8ca2a))
* **cart:** deprecate DaffCartCoupon.coupon_id and extend the DaffIdentifiable interface ([#1659](https://github.com/graycoreio/daffodil/issues/1659)) ([8f58d35](https://github.com/graycoreio/daffodil/commit/8f58d359a7ebce729f260fbb7e8066798604b554))
* **cart:** deprecate DaffCompositeCartItemOption.option_id in favor of DaffIdentifiable ([#1635](https://github.com/graycoreio/daffodil/issues/1635)) ([732a71a](https://github.com/graycoreio/daffodil/commit/732a71af5b1552ba01b7cc76e9261853d75c25bf))
* **cart:** remove magento object spread in driver transforms ([#1674](https://github.com/graycoreio/daffodil/issues/1674)) ([a51570c](https://github.com/graycoreio/daffodil/commit/a51570c14f8dc5e59db2d830a07382e01e9a18c6))
* **category:** add root state slice interface ([#1639](https://github.com/graycoreio/daffodil/issues/1639)) ([c8e1fb5](https://github.com/graycoreio/daffodil/commit/c8e1fb5a0e7813984d0421bfafd8d2e187eb5cb2))
* **category:** change wording of selectedCategory to currentCategory ([#1658](https://github.com/graycoreio/daffodil/issues/1658)) ([c39fd27](https://github.com/graycoreio/daffodil/commit/c39fd273f9910e8d3bf12920f8b4516bdaa937ba))
* **core,cart:** daffCreateMetaReducer -> daffComposeReducers ([#1680](https://github.com/graycoreio/daffodil/issues/1680)) ([6c15ef1](https://github.com/graycoreio/daffodil/commit/6c15ef142a78d42765fb5d90c968990412547f91))
* **daffio:** add table of contents for guide docs ([#1607](https://github.com/graycoreio/daffodil/issues/1607)) ([86f644c](https://github.com/graycoreio/daffodil/commit/86f644c4d2fd202425cb375c0d8d55c639d4fa2c))
* **demo,product:** add root state slice interface ([#1615](https://github.com/graycoreio/daffodil/issues/1615)) ([3e227ac](https://github.com/graycoreio/daffodil/commit/3e227acf695d44c8ec233a5c42db2e69f7ec3363))
* **design:** add focus control to form-field ([#1647](https://github.com/graycoreio/daffodil/issues/1647)) ([64f853e](https://github.com/graycoreio/daffodil/commit/64f853eb57ac7ea2803bb36ecccd6aa44ee25c14))
* **order:** add state root slice ([#1620](https://github.com/graycoreio/daffodil/issues/1620)) ([d206b40](https://github.com/graycoreio/daffodil/commit/d206b40cb30accb60482eb41b0343c6876e30428))
* **order:** deprecate DaffOrderCreditCardPayment.payment_id in favor of DaffIdentifiable interface ([#1636](https://github.com/graycoreio/daffodil/issues/1636)) ([aad131d](https://github.com/graycoreio/daffodil/commit/aad131d51161eaad55fb4f44a3a3994fe3c1768e))
* **order:** deprecate DaffOrderItem.item_id in favor of the DaffIdentifiable interface ([#1637](https://github.com/graycoreio/daffodil/issues/1637)) ([db8d758](https://github.com/graycoreio/daffodil/commit/db8d75804263359efe74b8ccb93e32106c480d40))
* **product:** add dependency injectable meta-reducers ([#1671](https://github.com/graycoreio/daffodil/issues/1671)) ([39c110c](https://github.com/graycoreio/daffodil/commit/39c110c2dc04a57dbaa12d12f33661ef0c8e0517))
* **product:** add magento get product response model ([#1679](https://github.com/graycoreio/daffodil/issues/1679)) ([37ae04d](https://github.com/graycoreio/daffodil/commit/37ae04d0a24851ac6bb99ee31cc41a91bcc1a876))
* **product:** add product preview fragment injection token to magento driver ([#1692](https://github.com/graycoreio/daffodil/issues/1692)) ([03c293d](https://github.com/graycoreio/daffodil/commit/03c293dbd0acf90fbd7eaa0191191c0965f3f4cd))
* **product:** add support for extra product fragments for Magento ([#1665](https://github.com/graycoreio/daffodil/issues/1665)) ([5223e8f](https://github.com/graycoreio/daffodil/commit/5223e8f3390df96388e7ce03051cdaddcd5e254f))
* **product:** add upsell and related products ([#1626](https://github.com/graycoreio/daffodil/issues/1626)) ([713701d](https://github.com/graycoreio/daffodil/commit/713701d464724b5c5ef6e119d8b306cdee5b6010))
* **product:** change instances of selectedProduct to currentProduct and remove instances of selectedProduct that are deprecated ([#1657](https://github.com/graycoreio/daffodil/issues/1657)) ([3b346a0](https://github.com/graycoreio/daffodil/commit/3b346a09df0562c0792a7ba34ffe87626dd77caf))
* **product:** enable injection of product preview transformers ([#1684](https://github.com/graycoreio/daffodil/issues/1684)) ([21b217e](https://github.com/graycoreio/daffodil/commit/21b217ee43bb1d7b5cf5404e160206ba8e21f830))
* **product:** export magento preview fragment ([#1693](https://github.com/graycoreio/daffodil/issues/1693)) ([91efecb](https://github.com/graycoreio/daffodil/commit/91efecb66967f5cbe336ba9fd2903a0d84c622fd))
* **product:** export mock models ([#1696](https://github.com/graycoreio/daffodil/issues/1696)) ([0a926ef](https://github.com/graycoreio/daffodil/commit/0a926ef504f4f6cf6fd63f9aba85f3a8720ec5db))
* **product:** inject extra product driver response transforms ([#1669](https://github.com/graycoreio/daffodil/issues/1669)) ([d018425](https://github.com/graycoreio/daffodil/commit/d0184259ce473738e31ea991aa01e1abe70be9e6))
* **related-products:** add related product model ([#1699](https://github.com/graycoreio/daffodil/issues/1699)) ([9a26c10](https://github.com/graycoreio/daffodil/commit/9a26c1021eb6e71a1fb9c3c307010da9ccf20a7d))
* **related-products:** add related products package scaffold ([#1698](https://github.com/graycoreio/daffodil/issues/1698)) ([d0e1b7b](https://github.com/graycoreio/daffodil/commit/d0e1b7bb34ccec4c7602b793727fd8fa29f8d231))
* **seo:** add canonical service ([#1643](https://github.com/graycoreio/daffodil/issues/1643)) ([0ead503](https://github.com/graycoreio/daffodil/commit/0ead503a18fc8d4e840d12f95b717289a0bd8f20))
* **seo:** add initial package scaffold ([#1633](https://github.com/graycoreio/daffodil/issues/1633)) ([36a01b8](https://github.com/graycoreio/daffodil/commit/36a01b8e9c323a70f178eec35478d2f1761d5977))


### Bug Fixes

* **product:** the DaffConfigurableProductFacade.hasDiscount test is incorrect ([#1641](https://github.com/graycoreio/daffodil/issues/1641)) ([c7cea5a](https://github.com/graycoreio/daffodil/commit/c7cea5ab7d72942b5a8d100a141d9193c1e52f1c))
* **tools-dgeni:** the generated guide list should not include the toc ([#1640](https://github.com/graycoreio/daffodil/issues/1640)) ([36219d9](https://github.com/graycoreio/daffodil/commit/36219d9cc2a6eea599a617bdb8d2412cb5c89da1))

## [0.37.0](https://github.com/graycoreio/daffodil/compare/v0.36.1...v0.37.0) (2021-06-25)


### ⚠ BREAKING CHANGES

* **product:** changes the return type of get and getByUrl

### Features

* **all:** use identifiable interface ([#1625](https://github.com/graycoreio/daffodil/issues/1625)) ([8924758](https://github.com/graycoreio/daffodil/commit/892475869dbbc4da5212cd8a022cad9a399995e4))
* **cart:** deprecate DaffCartItem.item_id and extend DaffIdentifiabl… ([#1634](https://github.com/graycoreio/daffodil/issues/1634)) ([370dd5d](https://github.com/graycoreio/daffodil/commit/370dd5de6b9d8abc971b1ea6c80024ed28d4dec2))
* **order:** fix parameterized selectors ([#1623](https://github.com/graycoreio/daffodil/issues/1623)) ([b38f3df](https://github.com/graycoreio/daffodil/commit/b38f3dfb0260e559c48ec60273d7b78bc6dce626))
* **product:** add short_description to DaffProduct ([#1631](https://github.com/graycoreio/daffodil/issues/1631)) ([c57c006](https://github.com/graycoreio/daffodil/commit/c57c00662e9a99a0fb04925d4468635119ef8413))
* **product:** change driver interface to return response object ([#1618](https://github.com/graycoreio/daffodil/issues/1618)) ([e0e8c33](https://github.com/graycoreio/daffodil/commit/e0e8c337c908919ff4a7afcfbaec76657169cfdc))


### Bug Fixes

* **daffio:** the routing around api and guide docs is not correct ([#1606](https://github.com/graycoreio/daffodil/issues/1606)) ([f5af449](https://github.com/graycoreio/daffodil/commit/f5af44982e07b60b7c45f766dffefb87266dc3c6))

### [0.36.1](https://github.com/graycoreio/daffodil/compare/v0.36.0...v0.36.1) (2021-06-21)


### Features

* **core,cart:** add meta reducer factory and use it for cart ([#1605](https://github.com/graycoreio/daffodil/issues/1605)) ([565f8ba](https://github.com/graycoreio/daffodil/commit/565f8ba0669349bfa054b1b8715d8bc30971b8a8))
* **navigation:** add root state slice interface ([#1612](https://github.com/graycoreio/daffodil/issues/1612)) ([a8495aa](https://github.com/graycoreio/daffodil/commit/a8495aa9ca2ccade8391df8d2190edbec6596509))


### Bug Fixes

* **product, category:** product images from category calls have a bad url ([#1624](https://github.com/graycoreio/daffodil/issues/1624)) ([8e7be90](https://github.com/graycoreio/daffodil/commit/8e7be90dbc942c78c82e97ddf23cb2d2cadf6afc))

## [0.36.0](https://github.com/graycoreio/daffodil/compare/v0.35.0...v0.36.0) (2021-06-21)


### ⚠ BREAKING CHANGES

* **product:** type and name are required fields on DaffProduct

### Features

* **authorizenet:** add root state slice interface ([#1617](https://github.com/graycoreio/daffodil/issues/1617)) ([bbd696a](https://github.com/graycoreio/daffodil/commit/bbd696a5b08b0830497df53d7a3993eefec9ac86))
* **cart,demo:** add root state slice interface ([#1614](https://github.com/graycoreio/daffodil/issues/1614)) ([5ea23eb](https://github.com/graycoreio/daffodil/commit/5ea23eb24af8e41e6c887463e8c72ce3e45037f8))
* **category:** add meta_name and meta_description to DaffCategory ([#1609](https://github.com/graycoreio/daffodil/issues/1609)) ([e18b9fa](https://github.com/graycoreio/daffodil/commit/e18b9fabcb6167514301084d214a765772540c58))
* **contact:** add root state slice interface ([#1616](https://github.com/graycoreio/daffodil/issues/1616)) ([071b0d6](https://github.com/graycoreio/daffodil/commit/071b0d6004b0a9f77d1b100b67e6affbb7e95e9d))
* **core:** add DaffIdentifiable interface ([#1603](https://github.com/graycoreio/daffodil/issues/1603)) ([21fac9c](https://github.com/graycoreio/daffodil/commit/21fac9c3d3fe485c92242096cdc946480be30b83))
* **daffio:** update guides sidebar with nested accordions ([#1557](https://github.com/graycoreio/daffodil/issues/1557)) ([210cde2](https://github.com/graycoreio/daffodil/commit/210cde290e80a0aac667a52c6946e20e039bedc3))
* **geography:** add root state slice interface ([#1611](https://github.com/graycoreio/daffodil/issues/1611)) ([31e83e8](https://github.com/graycoreio/daffodil/commit/31e83e802ad0f490f987e6a336b7d0ed81939360))
* **newsletter:** add root state slice interface ([#1610](https://github.com/graycoreio/daffodil/issues/1610)) ([31651c8](https://github.com/graycoreio/daffodil/commit/31651c8b765cd19fb228e98fff64e366b831e55f))
* **paypal:** add root state slice interface ([#1613](https://github.com/graycoreio/daffodil/issues/1613)) ([37d813a](https://github.com/graycoreio/daffodil/commit/37d813aa8504b63a88e4359fe2909c152e3e35af))
* **product:** add driver response model ([#1604](https://github.com/graycoreio/daffodil/issues/1604)) ([88ac1ae](https://github.com/graycoreio/daffodil/commit/88ac1aefd646138617d05220573cb07741af0a89))
* **product:** add meta data fields for DaffProduct ([#1619](https://github.com/graycoreio/daffodil/issues/1619)) ([e297d51](https://github.com/graycoreio/daffodil/commit/e297d518440399f1217ab1fa40c5d8be7ce52f45))
* **product:** add thumbnail field ([#1599](https://github.com/graycoreio/daffodil/issues/1599)) ([db49419](https://github.com/graycoreio/daffodil/commit/db49419951bbe46828e85fc936b11d7474e6b941))
* **product:** make type and name required on product model ([#1602](https://github.com/graycoreio/daffodil/issues/1602)) ([94ad4e6](https://github.com/graycoreio/daffodil/commit/94ad4e6de46ff9237dc5b7e3a46a492178f5e41b))
* **tools-dgeni:** add table of contents array to guides list ([#1560](https://github.com/graycoreio/daffodil/issues/1560)) ([9ed9bdf](https://github.com/graycoreio/daffodil/commit/9ed9bdf04c55eec5787d93a764d5dde5fb380776))


### Bug Fixes

* **product:** magento driver returning duplicate images ([#1598](https://github.com/graycoreio/daffodil/issues/1598)) ([e607a1e](https://github.com/graycoreio/daffodil/commit/e607a1eb8421a724d0f0c6dd02813016d9683dad))

## [0.35.0](https://github.com/graycoreio/daffodil/compare/v0.34.0...v0.35.0) (2021-06-09)


### ⚠ BREAKING CHANGES

* **order:** Guards and `DaffPlacedOrderGuardRedirectUrl` have moved to @daffodil/order/routing and 

### Features

* **all:** update all apps to use system fonts ([#1518](https://github.com/graycoreio/daffodil/issues/1518)) ([86d42c0](https://github.com/graycoreio/daffodil/commit/86d42c0046f869a9c838eba7bae4f64ed9f7c99e))
* **cart:** properly memoize parameterized selectors ([#1590](https://github.com/graycoreio/daffodil/issues/1590)) ([61b2a2c](https://github.com/graycoreio/daffodil/commit/61b2a2cd5bbf0d642f66c62f52e4575fdef535a0))
* **core,category:** add array to dict function and use it for filters ([#1578](https://github.com/graycoreio/daffodil/issues/1578)) ([a9ec23e](https://github.com/graycoreio/daffodil/commit/a9ec23e80bb174650eec3bf4645512f88669c4ef))
* **demo,product:** properly memoize parameterized selectors ([#1588](https://github.com/graycoreio/daffodil/issues/1588)) ([de89665](https://github.com/graycoreio/daffodil/commit/de896656bb19ba9f4e1c81e840d195b8bc18e386))
* **design:** add nav-accordion-item component ([#1555](https://github.com/graycoreio/daffodil/issues/1555)) ([1ac300f](https://github.com/graycoreio/daffodil/commit/1ac300f6db90d84473e9428dc17253cae68e1a03))
* **geography:** properly memoize parameterized selectors ([#1587](https://github.com/graycoreio/daffodil/issues/1587)) ([125dcb3](https://github.com/graycoreio/daffodil/commit/125dcb3ddef54211e097132f397518a02cb38dfb))
* **order:** add routing subpackage ([#1554](https://github.com/graycoreio/daffodil/issues/1554)) ([62da8ba](https://github.com/graycoreio/daffodil/commit/62da8ba1125af4f6b2d90f2b9a823889ce360d98))
* **tools-dgeni:** add processor for the [@inheritdoc](https://github.com/inheritdoc) tag ([#1568](https://github.com/graycoreio/daffodil/issues/1568)) ([a91bbdb](https://github.com/graycoreio/daffodil/commit/a91bbdb33751d79d304e7b22195ce4c7c9356f3c))
* **tools-dgeni:** enable links generation for api docs ([#1550](https://github.com/graycoreio/daffodil/issues/1550)) ([907fa86](https://github.com/graycoreio/daffodil/commit/907fa86aa368422b166eb6d31c528f745ed0c310))


### Bug Fixes

* **category:** parameterized selectors not properly memoized ([#1589](https://github.com/graycoreio/daffodil/issues/1589)) ([6cccc53](https://github.com/graycoreio/daffodil/commit/6cccc53736a8410559f8c1e1cb2e1d75006cda70))
* **tools-dgeni:** correct the processing of inherited docs ([#1584](https://github.com/graycoreio/daffodil/issues/1584)) ([20e5cd3](https://github.com/graycoreio/daffodil/commit/20e5cd334c393cd03f1e0bd27f53ace96215d661))

## [0.34.0](https://github.com/graycoreio/daffodil/compare/v0.33.0...v0.34.0) (2021-05-19)


### ⚠ BREAKING CHANGES

* **cart:** DaffCartItem#url is a new required field
* **category:** category config and default page size token have been removed
* **category,navigation:** DaffNavigationBreadcrumb field names have changed
* **product:** URI has been changed to URL
* **category:** Many new API member names have changed from URI to URL

### Features

* **cart:** locatable cart items ([#1545](https://github.com/graycoreio/daffodil/issues/1545)) ([c38815d](https://github.com/graycoreio/daffodil/commit/c38815dc34dd1910852b142841c965229c46ebd0))
* **category:** remove category config and default page size token ([#1520](https://github.com/graycoreio/daffodil/issues/1520)) ([8fa13b2](https://github.com/graycoreio/daffodil/commit/8fa13b2470042c17bd31eb291f4fda3a4bebb170))
* **category:** remove the category ID filter from response ([#1528](https://github.com/graycoreio/daffodil/issues/1528)) ([0d75e75](https://github.com/graycoreio/daffodil/commit/0d75e75f547d73a1eeb2b80fa1954fea1b89de94))
* **category:** reset category state ID on load, add LoadByUri state computation ([#1512](https://github.com/graycoreio/daffodil/issues/1512)) ([e440a4e](https://github.com/graycoreio/daffodil/commit/e440a4e57a98bd3ac6992575ec911b1498e3c0ed))
* **category:** use locatable interface and change URI to URL ([#1514](https://github.com/graycoreio/daffodil/issues/1514)) ([bde7fad](https://github.com/graycoreio/daffodil/commit/bde7fadcb1f6207c74d3d30a1ab3c17de06a2cb8))
* **category,navigation:** use locatable and remove category prefix from breadcrumbs ([#1519](https://github.com/graycoreio/daffodil/issues/1519)) ([dc500dc](https://github.com/graycoreio/daffodil/commit/dc500dc72eadcecd925d6a3bb1ba13ce3278b57d))
* **design:** add active style to stroked button ([#1521](https://github.com/graycoreio/daffodil/issues/1521)) ([5a4767a](https://github.com/graycoreio/daffodil/commit/5a4767a3321d6f6db1837459ed16095a9222f68c))
* **design:** add embolden mixin to callout title ([#1546](https://github.com/graycoreio/daffodil/issues/1546)) ([7cf1337](https://github.com/graycoreio/daffodil/commit/7cf1337f9fb4cb1389c8f23c7c7922f07061d829))
* **design:** create DaffTextAlignable interface and implement DaffCalloutComponent ([#1502](https://github.com/graycoreio/daffodil/issues/1502)) ([d0c8a53](https://github.com/graycoreio/daffodil/commit/d0c8a5338583b7785ae64b58b3f2895273cf7c15))
* **design:** implement DaffTextAlignable in DaffHeroComponent ([#1532](https://github.com/graycoreio/daffodil/issues/1532)) ([db9787b](https://github.com/graycoreio/daffodil/commit/db9787b7df5c49c9bc5d93f4d7e7e1e4d8cc47b2))
* **design:** update daff-util paths in component files ([#1533](https://github.com/graycoreio/daffodil/issues/1533)) ([77ea3d7](https://github.com/graycoreio/daffodil/commit/77ea3d7a76b926a91ceb515783444980927c1ffd))
* **external-router:** add HTTP code to resolvable route ([#1524](https://github.com/graycoreio/daffodil/issues/1524)) ([1010a14](https://github.com/graycoreio/daffodil/commit/1010a14f7f0ebbcd49f6ca4c63092fbdaf977869))
* **external-router:** cache magento 2 urlResolver queries ([#1552](https://github.com/graycoreio/daffodil/issues/1552)) ([8d552c7](https://github.com/graycoreio/daffodil/commit/8d552c781f98aa20602cbeda5572c61d853e8622))
* **external-router:** export some models ([#1510](https://github.com/graycoreio/daffodil/issues/1510)) ([800c00f](https://github.com/graycoreio/daffodil/commit/800c00f1a977326eff6a1fb60df53a0aad47f635))
* **external-router:** process redirects and errors ([#1516](https://github.com/graycoreio/daffodil/issues/1516)) ([2d107c6](https://github.com/graycoreio/daffodil/commit/2d107c61b8ec266ca76ae8fb0d508237ae99577e))
* **external-router:** provide full type route in providers ([#1513](https://github.com/graycoreio/daffodil/issues/1513)) ([156f3a4](https://github.com/graycoreio/daffodil/commit/156f3a429e6034a73c28ed292c46e55b469d612f))
* **product:** add magento productByUri query to the cached query set ([#1551](https://github.com/graycoreio/daffodil/issues/1551)) ([b453604](https://github.com/graycoreio/daffodil/commit/b4536048bc2fc2648d8e2f9b8757064a94627d2f))
* **product:** reset product ID on load and set on load success ([#1511](https://github.com/graycoreio/daffodil/issues/1511)) ([8169a4e](https://github.com/graycoreio/daffodil/commit/8169a4e9c58949d6197963acb8d182d1a2ece333))
* **product:** use locatable interface and change URI to URL ([#1517](https://github.com/graycoreio/daffodil/issues/1517)) ([9bf5593](https://github.com/graycoreio/daffodil/commit/9bf559353d1281c264fcdded1d6bccdd28ed729d))
* **tools-dgeni:** generate documentation for subpackages ([#1548](https://github.com/graycoreio/daffodil/issues/1548)) ([5825018](https://github.com/graycoreio/daffodil/commit/5825018e2c2532c5e80bb5afabc409741067c7f9))


### Bug Fixes

* **cart:** cannot add composite products to cart ([#1540](https://github.com/graycoreio/daffodil/issues/1540)) ([258e2a0](https://github.com/graycoreio/daffodil/commit/258e2a050c42ddde8c932f52fbf15d210728df06))
* **cart:** faker method not called for URL ([#1547](https://github.com/graycoreio/daffodil/issues/1547)) ([3c955ff](https://github.com/graycoreio/daffodil/commit/3c955ff4d1df4071b2ab67d5fd30400a1d797229))
* **category:** non-filter page effects not applying filters ([#1530](https://github.com/graycoreio/daffodil/issues/1530)) ([53f709c](https://github.com/graycoreio/daffodil/commit/53f709c569a5fe4195cf64e9fa61345fdcfce593))
* **category,navigation:** breadcrumb URL not locatable ([#1542](https://github.com/graycoreio/daffodil/issues/1542)) ([6c32c54](https://github.com/graycoreio/daffodil/commit/6c32c54ebb825e2762cd2b444a73e9d366ddea5f))
* **design:** media-gallery fails to render properly in aot compiled code ([#1508](https://github.com/graycoreio/daffodil/issues/1508)) ([d8e7363](https://github.com/graycoreio/daffodil/commit/d8e7363799eabc8b4b18df2d85751116879af487))
* **product:** factory URLs not locatable ([#1549](https://github.com/graycoreio/daffodil/issues/1549)) ([7c6ebd5](https://github.com/graycoreio/daffodil/commit/7c6ebd57cceb31c60ed7329a28db30932fd96c9b))
* **product:** product URL not locatable ([#1541](https://github.com/graycoreio/daffodil/issues/1541)) ([6d97cc9](https://github.com/graycoreio/daffodil/commit/6d97cc97744ddfab47a69b13c95433e3438eee59))

## [0.33.0](https://github.com/graycoreio/daffodil/compare/v0.32.0...v0.33.0) (2021-05-06)


### ⚠ BREAKING CHANGES

* **product:** product resolvers have moved to a new @daffodil/product/routing subpackage.

### Features

* **core:** add locatable interface ([#1501](https://github.com/graycoreio/daffodil/issues/1501)) ([3487233](https://github.com/graycoreio/daffodil/commit/3487233f435ec932e995074c91bf525f60907533))
* **navigation:** add url to DaffGenericNavigationTree ([#1503](https://github.com/graycoreio/daffodil/issues/1503)) ([d1f5abf](https://github.com/graycoreio/daffodil/commit/d1f5abfb6cd1fe77a5fbb71639ffa189a1d78e3c))
* **product:** add routing subpackage ([#1504](https://github.com/graycoreio/daffodil/issues/1504)) ([0d904a5](https://github.com/graycoreio/daffodil/commit/0d904a5521bbef35c4312fdb498e490928601025))


### Bug Fixes

* **category:** magento driver setting wrong ID filter key ([#1500](https://github.com/graycoreio/daffodil/issues/1500)) ([d559bfe](https://github.com/graycoreio/daffodil/commit/d559bfef52c01220d5aa2f16747e5bf2391a758e))

## [0.32.0](https://github.com/graycoreio/daffodil/compare/v0.31.1...v0.32.0) (2021-05-05)


### ⚠ BREAKING CHANGES

* **category:** The `DaffCategoryMagentoDriverConfig#uriTruncationStrategy` now uses a function instead of a regex. 
* **category:** The `DaffCategoryPageConfigurationState` was changed to `DaffCategoryPageMetadata`, and many models around category filtering have changed.

Co-authored-by: Damien Retzinger <damienwebdev@gmail.com>
Co-authored-by: Peter Lauck <griest024@gmail.com>
* **design:** A default color from DaffPalette is no longer enforced on hero
* **design:** Errors will be shown if user updates palettes that don't pass WCAG accessibility guidelines
* **design:** base UI of buttons is gray set by base styles instead of the theme-contrast color
* **design:** The icon button's hover and focus state colors have been updated so they only increment by one step
* **design:** color has been added to the focus and active state UI
* **design:** A default color from DaffPalette is no longer enforced on callout
* **design:** The basic button's hover and focus state colors have been updated so they only increment by one step
* **category,navigation:** DaffCategoryBreadcrumb#categoryId is now a string
* **design:** Daffodil's original "green" palette is changed to `turquoise` to accommodate a more common green palette.
* **category:** URI is now a required field on DaffCategory
* DaffCategoryRequest is now a union. The old DaffCategoryRequest is now DaffCategoryIdRequest. This change impacts the `DaffCategoryServiceInterface` as well.
* **category:** Many model names around category filters have changed.
* **design:** stroked button's hover UI now has an opaque background

### Features

* **cart:** move guards and resolvers to a new routing subpackage ([#1497](https://github.com/graycoreio/daffodil/issues/1497)) ([be8d9e8](https://github.com/graycoreio/daffodil/commit/be8d9e82cfa3db6cff6ef1ca93cb00ddcd0ac189))
* **category:** add category filter models, category page metadata model, errors, and factories ([#1448](https://github.com/graycoreio/daffodil/issues/1448)) ([bbf62f1](https://github.com/graycoreio/daffodil/commit/bbf62f130a803633dcc8344663f47fc657cc7523))
* **category:** add filter type field query to replacement driver ([#1454](https://github.com/graycoreio/daffodil/issues/1454)) ([9f75983](https://github.com/graycoreio/daffodil/commit/9f75983f1b3499b247bf9187c5972f14dd3a743f))
* **category:** add functions to manage category filters ([#1449](https://github.com/graycoreio/daffodil/issues/1449)) ([9d1478b](https://github.com/graycoreio/daffodil/commit/9d1478b254c83801ad99366a4a2359e981d7003f))
* **category:** add get by URI action and effect ([#1469](https://github.com/graycoreio/daffodil/issues/1469)) ([4934357](https://github.com/graycoreio/daffodil/commit/4934357e87a52fe0cc1a86be9ff2667590102c60))
* **category:** add getByUri driver call ([#1461](https://github.com/graycoreio/daffodil/issues/1461)) ([60d58b0](https://github.com/graycoreio/daffodil/commit/60d58b0e57cddd5b60f1e797ea605da8c9d3de83))
* **category:** add URI field to category model ([#1462](https://github.com/graycoreio/daffodil/issues/1462)) ([e1a8799](https://github.com/graycoreio/daffodil/commit/e1a87998746217691939f33d1e064a92dd1cf078))
* **category:** add URI resolver ([#1477](https://github.com/graycoreio/daffodil/issues/1477)) ([a8ede25](https://github.com/graycoreio/daffodil/commit/a8ede25c6b95b0e3f8054a96baf25b6a755d0081))
* **category:** add url suffix and URI truncation to Magento driver ([#1468](https://github.com/graycoreio/daffodil/issues/1468)) ([df57ddd](https://github.com/graycoreio/daffodil/commit/df57ddd4f66a9459d3fa3a87249b6d477ddb5c36))
* **category:** append url_suffix to category url key ([#1464](https://github.com/graycoreio/daffodil/issues/1464)) ([6f99abd](https://github.com/graycoreio/daffodil/commit/6f99abdfc4c715c23e5912c521fdb250cfd86cde))
* **category:** change driver and state subpackages to use the new category filter changes ([#1451](https://github.com/graycoreio/daffodil/issues/1451)) ([a706ffc](https://github.com/graycoreio/daffodil/commit/a706ffc3bdfa0232acd19a88ec46e1d4db6963d7))
* **category:** normalize URI in resolver before dispatching ([#1490](https://github.com/graycoreio/daffodil/issues/1490)) ([edd02cb](https://github.com/graycoreio/daffodil/commit/edd02cbeb973f17906f26fafa8767f5e859b20b5))
* **category:** remove 'Replacement' suffix from any category models … ([#1457](https://github.com/graycoreio/daffodil/issues/1457)) ([e5472d7](https://github.com/graycoreio/daffodil/commit/e5472d79483784c58139c47a20657369255f2730))
* **category:** truncate URI with function ([#1489](https://github.com/graycoreio/daffodil/issues/1489)) ([ebd0446](https://github.com/graycoreio/daffodil/commit/ebd04463a562347c8dbd6d52013e3eec0e8e6f58))
* **category,navigation:** replace category ID with UID in magento driver ([#1475](https://github.com/graycoreio/daffodil/issues/1475)) ([90455aa](https://github.com/graycoreio/daffodil/commit/90455aac5cdcd03979116514385a6bd1ad0c1d70))
* **core:** add URI truncation functions and normalizer service ([#1488](https://github.com/graycoreio/daffodil/issues/1488)) ([bd07f7a](https://github.com/graycoreio/daffodil/commit/bd07f7a7828e990020cc3be12d669b08c3a47b2b))
* **core:** handle missing leading slash in query fragment truncation ([#1493](https://github.com/graycoreio/daffodil/issues/1493)) ([411c3ff](https://github.com/graycoreio/daffodil/commit/411c3ff0a3680844d3194f45def467e09b17ca63))
* **daffio, branding:** update daffio to use discord information ([#1445](https://github.com/graycoreio/daffodil/issues/1445)) ([64928fb](https://github.com/graycoreio/daffodil/commit/64928fb4ec0821fe4a67bd20a80c9d4e6dc27b52))
* **design:** add a media-gallery component ([#1206](https://github.com/graycoreio/daffodil/issues/1206)) ([a131764](https://github.com/graycoreio/daffodil/commit/a1317644a80d2f1033c92490d6877109685b9427))
* **design:** add statusable interface to button ([#1478](https://github.com/graycoreio/daffodil/issues/1478)) ([f0dd613](https://github.com/graycoreio/daffodil/commit/f0dd6136e75f87d0bf075f378dec563e00a5f7a7))
* **design:** adjust primary palette to scale the same way as rest of palettes ([#1480](https://github.com/graycoreio/daffodil/issues/1480)) ([bf1304f](https://github.com/graycoreio/daffodil/commit/bf1304f60dee23af0eff73feff8b7b890c9c2c6f))
* **design:** enforce WCAG accessibility guidelines for buttons ([#1478](https://github.com/graycoreio/daffodil/issues/1478)) ([9e6101a](https://github.com/graycoreio/daffodil/commit/9e6101a4ee43bc7cae207f7a008df642de179ef8))
* **design:** remove animation on raised button and update state UI ([#1478](https://github.com/graycoreio/daffodil/issues/1478)) ([fb08aa2](https://github.com/graycoreio/daffodil/commit/fb08aa244cb11808f74d841f50c66bb05e9d2893))
* **design:** remove default theme and template file on callout component ([#1486](https://github.com/graycoreio/daffodil/issues/1486)) ([9bef4cc](https://github.com/graycoreio/daffodil/commit/9bef4cc73f3357af48f183d4797c7087c8287e87))
* **design:** remove default theme and template file on hero component ([#1463](https://github.com/graycoreio/daffodil/issues/1463)) ([70ef58b](https://github.com/graycoreio/daffodil/commit/70ef58baae824ef0610c5d7c02dc8d30b1e60322))
* **design:** remove enforcement of default color and add styles to base button styles ([#1478](https://github.com/graycoreio/daffodil/issues/1478)) ([63d0768](https://github.com/graycoreio/daffodil/commit/63d07685f120699fcf55199ef368abeb900abd84))
* **design:** update DaffCardComponent ([#1420](https://github.com/graycoreio/daffodil/issues/1420)) ([8ea9f2e](https://github.com/graycoreio/daffodil/commit/8ea9f2e581f1a7f6a9c4cbcd011964be80f30a11))
* **design:** update daffodil's "green" palette to turqoise and create green palette ([#1460](https://github.com/graycoreio/daffodil/issues/1460)) ([b42e2d2](https://github.com/graycoreio/daffodil/commit/b42e2d20034ad415aeb0cd06273a9c369550055c))
* **design:** update default card theme to a gray rather than 'theme' ([#1467](https://github.com/graycoreio/daffodil/issues/1467)) ([7558fb8](https://github.com/graycoreio/daffodil/commit/7558fb8ea69f8050adf35a14753358904aeadeb5))
* **design:** update error status to danger ([#1481](https://github.com/graycoreio/daffodil/issues/1481)) ([98254e8](https://github.com/graycoreio/daffodil/commit/98254e8f5e92f2e62273bc2d5be59f7604978631))
* **design:** update gray palette ([#1479](https://github.com/graycoreio/daffodil/issues/1479)) ([ee0c8ce](https://github.com/graycoreio/daffodil/commit/ee0c8ce4803ddac819d971e53928c7d86b6d9a56))
* **design:** update stroked button's background to be fully opaque ([#1478](https://github.com/graycoreio/daffodil/issues/1478)) ([d7b82d3](https://github.com/graycoreio/daffodil/commit/d7b82d385d2b6896b0abf766d5795094341e8ca4))
* **design:** update the basic button's UI ([#1478](https://github.com/graycoreio/daffodil/issues/1478)) ([a5068a0](https://github.com/graycoreio/daffodil/commit/a5068a0f748451402b329f1fe9e72df2acc5f20f))
* **design:** update the icon button's UI ([#1478](https://github.com/graycoreio/daffodil/issues/1478)) ([0f0b5f4](https://github.com/graycoreio/daffodil/commit/0f0b5f4e691e4bec6d113887fa2fa5e9ab5e7452))
* **design:** update underline button's UI for theme-contrast and disabled to ensure they work in dark mode ([#1478](https://github.com/graycoreio/daffodil/issues/1478)) ([fd52572](https://github.com/graycoreio/daffodil/commit/fd5257278df34bebd0291d3c9826c93fa9989bfa))
* **external-router:** truncate driver request and response per driver ([#1495](https://github.com/graycoreio/daffodil/issues/1495)) ([5f228ab](https://github.com/graycoreio/daffodil/commit/5f228abb46838761a550d82bd6ebe5dca53735e7))
* **product:** add uri resolver ([#1472](https://github.com/graycoreio/daffodil/issues/1472)) ([555d911](https://github.com/graycoreio/daffodil/commit/555d91197894db5601de16efcc3cb8d02fa07ddc))
* **product:** add url suffix and URI truncation to Magento driver ([#1466](https://github.com/graycoreio/daffodil/issues/1466)) ([f0da6ee](https://github.com/graycoreio/daffodil/commit/f0da6ee915083b400adbe9e6814f7fa2ad624a5c))
* **product:** normalize URI in resolver before dispatching ([#1492](https://github.com/graycoreio/daffodil/issues/1492)) ([465176d](https://github.com/graycoreio/daffodil/commit/465176d335286e057351f512f1a05e484e679f64))
* **product:** truncate URI with function in Magento driver ([#1491](https://github.com/graycoreio/daffodil/issues/1491)) ([3d20145](https://github.com/graycoreio/daffodil/commit/3d201453f556c1903446d494af1f3d51bdbbc533))
* **tools-jasmine:** add a new jasmine tool with idempotence matchers ([#1438](https://github.com/graycoreio/daffodil/issues/1438)) ([3a3f8f3](https://github.com/graycoreio/daffodil/commit/3a3f8f3bfec8feeb3f3bc646db53b8da70dbf0ce))


### Bug Fixes

* **daffio:** widens the api doc name and ellipsis the ref, instead of squishing the label ([#1444](https://github.com/graycoreio/daffodil/issues/1444)) ([2eb1d59](https://github.com/graycoreio/daffodil/commit/2eb1d593be3256622ff627c01dab130623aea82f))


*  feat(category): add kinded category requests (#1459) ([c820965](https://github.com/graycoreio/daffodil/commit/c82096546fa2771ad76cf170b6dacc9c6f516328)), closes [#1459](https://github.com/graycoreio/daffodil/issues/1459)

### [0.31.1](https://github.com/graycoreio/daffodil/compare/v0.31.0...v0.31.1) (2021-04-02)


### Features

* **core:** add dictionary type ([#1396](https://github.com/graycoreio/daffodil/issues/1396)) ([1f95c6e](https://github.com/graycoreio/daffodil/commit/1f95c6eb27cfd1414a27f8291d49b1f4578edd76))
* **product:** add getByUrl actions and effects ([#1400](https://github.com/graycoreio/daffodil/issues/1400)) ([163f761](https://github.com/graycoreio/daffodil/commit/163f761760bc46826a9f28429dbaa5ca46094ed4))
* **product:** add getByUrl to drivers ([#1397](https://github.com/graycoreio/daffodil/issues/1397)) ([ae12e7d](https://github.com/graycoreio/daffodil/commit/ae12e7db903cfcf95fa09d7dddb9c16f549758c7))
* **product:** add selector and facade field for composite product di… ([#1398](https://github.com/graycoreio/daffodil/issues/1398)) ([c2b0716](https://github.com/graycoreio/daffodil/commit/c2b071617a3eb0183cb60144d7d17fd2d3ebe771))

## [0.31.0](https://github.com/graycoreio/daffodil/compare/v0.30.0...v0.31.0) (2021-03-26)


### ⚠ BREAKING CHANGES

* **category:** Category filter action types are now contained in the DaffCategoryPageFilterActionTypes object.
* **auth,demo:** Many imports have moved to various subpackages.

### Features

* **auth,demo:** shard auth package ([#1387](https://github.com/graycoreio/daffodil/issues/1387)) ([f604158](https://github.com/graycoreio/daffodil/commit/f6041582fc73311734f21c9032e1aabdfaa67eca))
* **category:** add additional filter actions ([#1393](https://github.com/graycoreio/daffodil/issues/1393)) ([8eeb4cd](https://github.com/graycoreio/daffodil/commit/8eeb4cdc02cacab23c2b49012831d423ff5f120f))
* **category:** separate filter actions and effects ([#1389](https://github.com/graycoreio/daffodil/issues/1389)) ([c49033f](https://github.com/graycoreio/daffodil/commit/c49033ffd749475ae8378366f0516ec2deee2fe5))
* **design:** add support for `daffCalloutTagline` in Callout ([#1351](https://github.com/graycoreio/daffodil/issues/1351)) ([184eb0e](https://github.com/graycoreio/daffodil/commit/184eb0e1d2f6a0605b72af5025e8221ae26ffcab))
* **design:** create disableable and focusable interfaces for form field behaviors ([#1308](https://github.com/graycoreio/daffodil/issues/1308)) ([4d0e4e6](https://github.com/graycoreio/daffodil/commit/4d0e4e695a925228a69180e41891295ce0622c88))
* **external-router:** add route insertionStrategy ([#1390](https://github.com/graycoreio/daffodil/issues/1390)) ([50db98d](https://github.com/graycoreio/daffodil/commit/50db98d783919cd9b860135ef1df169afb1d88ce))
* **product:** add a selector and facade field for composite product … ([#1392](https://github.com/graycoreio/daffodil/issues/1392)) ([18b8a88](https://github.com/graycoreio/daffodil/commit/18b8a884dff5eb4582a11daf39b27b7dbc9a1df1))


### Bug Fixes

* **design:** fix linting errors ([#1391](https://github.com/graycoreio/daffodil/issues/1391)) ([6a8f10e](https://github.com/graycoreio/daffodil/commit/6a8f10eafd8dd98b2ec52ca851d5c5d2e3d80aca))

## [0.30.0](https://github.com/graycoreio/daffodil/compare/v0.29.0...v0.30.0) (2021-03-24)


### ⚠ BREAKING CHANGES

* **paypal:** Many imports have moved to various subpackages.
* **geography:** Errors in state have changed type from `string[]` to `DaffStateError[]`
* **category:** The error type in state has changed from `string` to `DaffStateError`
* **auth:** error types in state have changed from `string` to `DaffStateError`
* **product:** Errors in state have changed type from `string` to `DaffStateError`
* **demo,newsletter:** Many imports have moved to various subpackages. The DaffNewsletterModule has been renamed to DaffNewsletterStateModule
* **contact:** Errors in state have changed type from `string[]` to `DaffStateError[]`
* **navigation:** Errors in state have changed type from `string[]` to `DaffStateError[]`
* **newsletter:** The error type in state has changed from `string` to `DaffStateError`
* **order:** Errors in state have changed type from `string[]` to `DaffStateError[]`
* **paypal:** An error in state has changed type from `string` to `DaffStateError`

### Features

* **auth:** use daff state error ([#1374](https://github.com/graycoreio/daffodil/issues/1374)) ([baa1985](https://github.com/graycoreio/daffodil/commit/baa1985b4d5757b0bb38c80b1220c685f98cbea7))
* **cart:** set coupon code on invalid coupon error ([#1364](https://github.com/graycoreio/daffodil/issues/1364)) ([608374a](https://github.com/graycoreio/daffodil/commit/608374a8b0978638d5aca787a3b46f4433e4987d))
* **category:** introduce DaffCategoryPageMetadata ([#1372](https://github.com/graycoreio/daffodil/issues/1372)) ([6e23c66](https://github.com/graycoreio/daffodil/commit/6e23c661f83e1362e7a304b7e67fffc7e7403ecb))
* **category:** replace DaffCategorySortOption with DaffSortOption from core. ([#1363](https://github.com/graycoreio/daffodil/issues/1363)) ([e74b3d6](https://github.com/graycoreio/daffodil/commit/e74b3d682345db9baaf3d15555092e7483cbf42a))
* **category:** use daff state error ([#1378](https://github.com/graycoreio/daffodil/issues/1378)) ([95489b0](https://github.com/graycoreio/daffodil/commit/95489b08092007b0c64392470e55b39eb7fc6c6d))
* **contact:** use daff state error ([#1369](https://github.com/graycoreio/daffodil/issues/1369)) ([07d08da](https://github.com/graycoreio/daffodil/commit/07d08da64aaef5aec302d7fa016b54f9e55b4af7))
* **core:** use DaffSortOptions in DaffSortable ([#1384](https://github.com/graycoreio/daffodil/issues/1384)) ([a57f4a1](https://github.com/graycoreio/daffodil/commit/a57f4a12736567d6aceb88aa12e0b251710c3184))
* **demo,newsletter:** shard newsletter package ([#1385](https://github.com/graycoreio/daffodil/issues/1385)) ([93c0669](https://github.com/graycoreio/daffodil/commit/93c06697ef8f7cb28ecc83bef1381554965f6d4a))
* **design:** add support for `daffHeroTagline` in Hero ([#1256](https://github.com/graycoreio/daffodil/issues/1256)) ([6628584](https://github.com/graycoreio/daffodil/commit/6628584f7b5e8794df9c2d28c5bd80cbb3c6da11))
* **external-router:** add a magento driver ([#1278](https://github.com/graycoreio/daffodil/issues/1278)) ([6a782ec](https://github.com/graycoreio/daffodil/commit/6a782ec2e70711f29dc948453432b5c156e14664))
* **external-router:** add id to resolvable route ([#1379](https://github.com/graycoreio/daffodil/issues/1379)) ([d0a8bc5](https://github.com/graycoreio/daffodil/commit/d0a8bc50987594e7555ae0e3cf47eebfa4640acb))
* **geography:** use daff state errors from failure actions ([#1365](https://github.com/graycoreio/daffodil/issues/1365)) ([8144a39](https://github.com/graycoreio/daffodil/commit/8144a39ed8b4ab2366e831a867cce29667bc0d92))
* **navigation:** use daff state error ([#1368](https://github.com/graycoreio/daffodil/issues/1368)) ([805a90f](https://github.com/graycoreio/daffodil/commit/805a90f36e1f36ebfb36a2f4085726912a37df6d))
* **newsletter:** use daff state error ([#1367](https://github.com/graycoreio/daffodil/issues/1367)) ([945167c](https://github.com/graycoreio/daffodil/commit/945167c4b6d4fd9c5aa6e837c73ebf776f985d14))
* **order:** use daff state error ([#1366](https://github.com/graycoreio/daffodil/issues/1366)) ([cc87e4b](https://github.com/graycoreio/daffodil/commit/cc87e4bdb3f296d63d47931dce2892ac4264aab5))
* **paypal:** shard package ([#1386](https://github.com/graycoreio/daffodil/issues/1386)) ([f2d6bcb](https://github.com/graycoreio/daffodil/commit/f2d6bcbfdde41bf9d46cbe5c611972aff0fcbf61))
* **paypal:** use daff state error ([#1370](https://github.com/graycoreio/daffodil/issues/1370)) ([f15eb24](https://github.com/graycoreio/daffodil/commit/f15eb2422e5b29f3554df556794695070bd4efa0))
* **product:** move base media URL to driver config ([#1377](https://github.com/graycoreio/daffodil/issues/1377)) ([982fb86](https://github.com/graycoreio/daffodil/commit/982fb86322f0ad069f009276360e558224a1fc8a))
* **product:** use daff state error ([#1373](https://github.com/graycoreio/daffodil/issues/1373)) ([4a9e48b](https://github.com/graycoreio/daffodil/commit/4a9e48b070dc5271badbcc2c380539104b240113))


### Bug Fixes

* **design:** fix linting warnings in design package ([#1357](https://github.com/graycoreio/daffodil/issues/1357)) ([5ecf903](https://github.com/graycoreio/daffodil/commit/5ecf9032bc0ad993530a0d8d12a0c8c3a0d5731a))

## [0.29.0](https://github.com/graycoreio/daffodil/compare/v0.28.1...v0.29.0) (2021-03-17)


### ⚠ BREAKING CHANGES

* **category:** The DaffCategoryPageConfigurationState.sort_options model has changed to include a default option field.

### Features

* **authorizenet:** add in-memory backend ([#1358](https://github.com/graycoreio/daffodil/issues/1358)) ([1cb377b](https://github.com/graycoreio/daffodil/commit/1cb377b83becd508f3196dbc4f385ae22796fcc0))
* **cart:** add in-memory extra_attributes hook token ([#1360](https://github.com/graycoreio/daffodil/issues/1360)) ([a8a3859](https://github.com/graycoreio/daffodil/commit/a8a3859c172b6ac39c26bbc6e20758deb8e5f4a9))
* **cart:** init available shipping methods in in-memory driver ([#1356](https://github.com/graycoreio/daffodil/issues/1356)) ([98079ff](https://github.com/graycoreio/daffodil/commit/98079ff6b30ed2644e808a617021a0ea2a6c2ee4))
* **cart,demo,order:** add cart store feature key ([#1334](https://github.com/graycoreio/daffodil/issues/1334)) ([3f72365](https://github.com/graycoreio/daffodil/commit/3f723651b3f752730197d3a25ced03e228147d4f))
* **category:** add stateful category page configuration state model ([#1362](https://github.com/graycoreio/daffodil/issues/1362)) ([c4e346d](https://github.com/graycoreio/daffodil/commit/c4e346d987c96410123c2acc52ac770077081d8c))
* **category:** add store feature key ([#1346](https://github.com/graycoreio/daffodil/issues/1346)) ([f34da80](https://github.com/graycoreio/daffodil/commit/f34da80cbe9aaa5996fe3cd2054a601e76149e55))
* **category:** expose a configuration object for `@daffodil/category/state` ([#1353](https://github.com/graycoreio/daffodil/issues/1353)) ([1adcc16](https://github.com/graycoreio/daffodil/commit/1adcc16dc87c3a2af6a5682524c2ad8380f46aaa))
* **category:** remove generics on PageConfiguration and Request ([#1347](https://github.com/graycoreio/daffodil/issues/1347)) ([0639052](https://github.com/graycoreio/daffodil/commit/06390525919ab12b3ca77b64401b0f641ba0874f))
* **core,cart:** extend and clarify DaffStates and DaffStateable ([#1302](https://github.com/graycoreio/daffodil/issues/1302)) ([a1567c0](https://github.com/graycoreio/daffodil/commit/a1567c0618d92ec072bbfaa6290876f392ae7a01))
* **design:** create skeleton mixin ([#1354](https://github.com/graycoreio/daffodil/issues/1354)) ([11ad6ab](https://github.com/graycoreio/daffodil/commit/11ad6aba24e63c0f269eb4b7ecedff1f22b10bfe))
* **tools:** add eslint shareable config ([#1359](https://github.com/graycoreio/daffodil/issues/1359)) ([843827e](https://github.com/graycoreio/daffodil/commit/843827eeadde7e7c1d20fa6ead6cadba2c79244b))


### Bug Fixes

* **authorizenet:** null injector error when using in-memory api ([#1355](https://github.com/graycoreio/daffodil/issues/1355)) ([140eb22](https://github.com/graycoreio/daffodil/commit/140eb223b74000360e4f486c3857094ebf3b2ee1))
* **category:** the applied_sort_option is not being set to the defaul… ([#1352](https://github.com/graycoreio/daffodil/issues/1352)) ([0cef523](https://github.com/graycoreio/daffodil/commit/0cef523d3d12d067a76c46bbec8c9d2ce6ef7abe))
* **design-land:** fix example viewers not using the container ([#1350](https://github.com/graycoreio/daffodil/issues/1350)) ([f701100](https://github.com/graycoreio/daffodil/commit/f701100e0831f1cc3bca58c99af8b3b0832d5a94))
* **design-land:** fix merge conflict in design-land app routing ([#1348](https://github.com/graycoreio/daffodil/issues/1348)) ([c9612db](https://github.com/graycoreio/daffodil/commit/c9612db29c4e4240c2a1fbf9f9cb708ec097267d))

### [0.28.1](https://github.com/graycoreio/daffodil/compare/v0.28.0...v0.28.1) (2021-03-10)


### Bug Fixes

* **category:** export DaffCategoryStateModule ([#1345](https://github.com/graycoreio/daffodil/issues/1345)) ([f4b786e](https://github.com/graycoreio/daffodil/commit/f4b786eb4cbb03d7a805ac172b6eed356c10f26e))

## [0.28.0](https://github.com/graycoreio/daffodil/compare/v0.27.0...v0.28.0) (2021-03-10)


### ⚠ BREAKING CHANGES

* **category:** many imports have moved and DaffCategoryModule has been removed.
Use DaffCategoryRoutingModule and DaffCategoryStateModule for the previous behavior.

### Features

* **category:** shard category package ([#1333](https://github.com/graycoreio/daffodil/issues/1333)) ([1643d18](https://github.com/graycoreio/daffodil/commit/1643d1824553fd65883985f8ac77ac85b2b9470b))
* **category,demo,product:** add product store feature key ([#1338](https://github.com/graycoreio/daffodil/issues/1338)) ([3e8571c](https://github.com/graycoreio/daffodil/commit/3e8571c89f5862b231594d8c25bda9873f3471f5))
* **contact:** add store feature key ([#1335](https://github.com/graycoreio/daffodil/issues/1335)) ([18ebe25](https://github.com/graycoreio/daffodil/commit/18ebe25775e436c768587700d287a01dfff6cfd9))
* **core, category:** introduce DaffSortable for collections of elements ([#1325](https://github.com/graycoreio/daffodil/issues/1325)) ([accf735](https://github.com/graycoreio/daffodil/commit/accf7352e818bb370cae0b2e029ccbe812f51a2f))
* **newsletter:** add store feature key ([#1336](https://github.com/graycoreio/daffodil/issues/1336)) ([c79a611](https://github.com/graycoreio/daffodil/commit/c79a6115d75a3dfdd32f87611ced91f52328ecda))
* **paypal:** add store feature key ([#1337](https://github.com/graycoreio/daffodil/issues/1337)) ([0dded9e](https://github.com/graycoreio/daffodil/commit/0dded9e181dddc81468be3e4f4109d9ba7371e2f))


### Bug Fixes

* **product:** product page actions do not initialize composite and configurable product state ([#1330](https://github.com/graycoreio/daffodil/issues/1330)) ([4d0bed4](https://github.com/graycoreio/daffodil/commit/4d0bed4475f1816a7b5d1484164e3abb5df5f30b))

## [0.27.0](https://github.com/graycoreio/daffodil/compare/v0.26.0...v0.27.0) (2021-03-09)


### ⚠ BREAKING CHANGES

* **core, product:** the interface name changed, the above swap is sufficient to breakfix.
* **category:** In an attempt to improve legibility, we've migrated the action names to begin with the prefix "CategoryPage". Users will need to update their types.
* **product:** many references to @daffodil/product have changed to various subpackages
* **category:** The types related to category page actions have been moved to "DaffCategoryPageActions" and "DaffCategoryPageActionTypes"
* **cart:** The DaffResolveCartServerSide action now requires an argument to its constructor

### Features

* **authorizenet:** add driver error code enum ([#1190](https://github.com/graycoreio/daffodil/issues/1190)) ([740be99](https://github.com/graycoreio/daffodil/commit/740be99f04298dddeb948eb6cfb9338f98ce85a2))
* **cart:** set an error cart-item daffState on failure ([#1321](https://github.com/graycoreio/daffodil/issues/1321)) ([903f803](https://github.com/graycoreio/daffodil/commit/903f803779382ca37dd47627dd7f9e39e3f48f15))
* **cart:** use cart resolution specific error in resolve effect ([#1306](https://github.com/graycoreio/daffodil/issues/1306)) ([b1d8695](https://github.com/graycoreio/daffodil/commit/b1d86953138f745f808c588b892a62c0f93a6ec5))
* **category:** move page actions to "DaffCategoryPageActions" and "DaffCategoryPageActionTypes" ([#1310](https://github.com/graycoreio/daffodil/issues/1310)) ([32fcb7c](https://github.com/graycoreio/daffodil/commit/32fcb7cb93397e2af8aadebf97530b173a760261))
* **category:** rename category actions ([#1315](https://github.com/graycoreio/daffodil/issues/1315)) ([5504fcc](https://github.com/graycoreio/daffodil/commit/5504fccd526a9a421d9a4550ac1f869576ddade3))
* **core:** introduce DaffNumericallyPaginable for collections ([#1324](https://github.com/graycoreio/daffodil/issues/1324)) ([91e0af2](https://github.com/graycoreio/daffodil/commit/91e0af2905df0ef94fca9e062f7af36f34d0c95b))
* **core, product:** rename DaffSortable to DaffOrderable ([#1323](https://github.com/graycoreio/daffodil/issues/1323)) ([d2afe9a](https://github.com/graycoreio/daffodil/commit/d2afe9ae625263b749daa7719a57dc3a0ad218ae))
* **product:** split package into more specific subpackages ([#1145](https://github.com/graycoreio/daffodil/issues/1145)) ([b7e353f](https://github.com/graycoreio/daffodil/commit/b7e353f5324a5fe88a8be0bae69f5494b3c994ba))


### Bug Fixes

* **design:** fix article directive file names ([#1265](https://github.com/graycoreio/daffodil/issues/1265)) ([facf7cc](https://github.com/graycoreio/daffodil/commit/facf7cc55458caf91edd432dbec2424f03800586))
* **navigation:** magento sometimes returns null in place of arrays ([#1312](https://github.com/graycoreio/daffodil/issues/1312)) ([7df43c5](https://github.com/graycoreio/daffodil/commit/7df43c58bb94f7bbb2c89bcd2f88e1dbf176eee8))

## [0.26.0](https://github.com/graycoreio/daffodil/compare/v0.25.2...v0.26.0) (2021-02-25)


### ⚠ BREAKING CHANGES

* **product:** the actions for product pages have changed type. They are now held on the DaffProductPageActionTypes.

### Bug Fixes

* **product:** add DaffProductPageEffects in the DaffProductStateModule ([#1305](https://github.com/graycoreio/daffodil/issues/1305)) ([a766c8e](https://github.com/graycoreio/daffodil/commit/a766c8e6889313ac6fdcfd9e24112c2f1d87f2f2))

### [0.25.2](https://github.com/graycoreio/daffodil/compare/v0.25.1...v0.25.2) (2021-02-25)


### Features

* **design:** create DaffMutatable interface ([#1301](https://github.com/graycoreio/daffodil/issues/1301)) ([2bbe805](https://github.com/graycoreio/daffodil/commit/2bbe8055f566e14bd274e67d2f0f06d119c99f09))
* **design:** make DaffSkeletonable interface public ([#1300](https://github.com/graycoreio/daffodil/issues/1300)) ([6e2cfa2](https://github.com/graycoreio/daffodil/commit/6e2cfa29fa5304ce874594bccecb11ee2605fac0))
* **design:** update mutable interface name ([#1304](https://github.com/graycoreio/daffodil/issues/1304)) ([6eb4ed4](https://github.com/graycoreio/daffodil/commit/6eb4ed4b64dd13fbe560d097d8978af54d3c3870))
* **external-router:** add external-router ([#1240](https://github.com/graycoreio/daffodil/issues/1240)) ([afa92fd](https://github.com/graycoreio/daffodil/commit/afa92fd8f399dd3b6fa99506924de814b654e162))
* **product:** add product page actions and effects ([#1303](https://github.com/graycoreio/daffodil/issues/1303)) ([0d1c0ff](https://github.com/graycoreio/daffodil/commit/0d1c0ffca43d1bc562227f679deb2179e4a6af11))

### [0.25.1](https://github.com/graycoreio/daffodil/compare/v0.25.0...v0.25.1) (2021-02-18)


### Bug Fixes

* **cart:** magento cart item transformer crashes when discounts is null ([#1297](https://github.com/graycoreio/daffodil/issues/1297)) ([5976e5e](https://github.com/graycoreio/daffodil/commit/5976e5ec66129af718d3499ff317bd30dc813fe1))
* **category:** magento cacheable queries are not being added to the list of cacheable queries ([#1296](https://github.com/graycoreio/daffodil/issues/1296)) ([5e3a3cd](https://github.com/graycoreio/daffodil/commit/5e3a3cd53fbe3e39a2c770451504c42039a98260))

## [0.25.0](https://github.com/graycoreio/daffodil/compare/v0.24.0...v0.25.0) (2021-02-18)


### ⚠ BREAKING CHANGES

* **design:** this drops support for the old heading-* verions and additionally drops the support for the -xs variant. We've determined that attempting to make text smaller tends to lead to illeginle text, and as such we've shifted all the text flavors up from xs -> sm ... and added a new -xl variant.

### Features

* **all:** add cacheable queries to the magento cacheable queries list ([#1270](https://github.com/graycoreio/daffodil/issues/1270)) ([f86eb48](https://github.com/graycoreio/daffodil/commit/f86eb48752fbcc06d33269fc96ad86e92bfe0f30))
* **all:** use optional chaining ([#1263](https://github.com/graycoreio/daffodil/issues/1263)) ([b92039f](https://github.com/graycoreio/daffodil/commit/b92039f8d8a00c528995d3722965939c3bb7d73f))
* **cart:** add cart item price selectors ([#1283](https://github.com/graycoreio/daffodil/issues/1283)) ([45739b6](https://github.com/graycoreio/daffodil/commit/45739b63fd64014c4ab6651bd432017b7ff33fa3))
* **cart:** remove cart item discount fields ([#1280](https://github.com/graycoreio/daffodil/issues/1280)) ([c343680](https://github.com/graycoreio/daffodil/commit/c3436809ebd4ebd9aa0e7e5a88082c88c98fc659))
* **core, driver:** add infrastructure for making cacheable apollo queries per platform ([#1264](https://github.com/graycoreio/daffodil/issues/1264)) ([233f42b](https://github.com/graycoreio/daffodil/commit/233f42bdf414defc164c6ad3c77df7b27c4376c3))
* **demo:** init ngrx booleans to false ([#1261](https://github.com/graycoreio/daffodil/issues/1261)) ([3846ff3](https://github.com/graycoreio/daffodil/commit/3846ff3b50c943c1f75160c78983eaaaba5a099f))
* **design:** add caption mixin from daff-typography ([#1186](https://github.com/graycoreio/daffodil/issues/1186)) ([3237df1](https://github.com/graycoreio/daffodil/commit/3237df1fd8f13649a60c0001f8c02a2c3b3d33f4))
* **design:** add new body mixin to daff-typography ([#1186](https://github.com/graycoreio/daffodil/issues/1186)) ([bc5d9b1](https://github.com/graycoreio/daffodil/commit/bc5d9b160f41a5562e4e43426fb6a2483dfb6513))
* **design:** create compactable interface ([#1258](https://github.com/graycoreio/daffodil/issues/1258)) ([db6b0bc](https://github.com/graycoreio/daffodil/commit/db6b0bc6963ed90f31193d5d678bd4e7315d276a))
* **design:** create DaffSkeletonable interface ([#1285](https://github.com/graycoreio/daffodil/issues/1285)) ([eccd790](https://github.com/graycoreio/daffodil/commit/eccd790cf5ea0952eb580c5492c512f6cd7bdcf2))
* **design:** provide Radio Registry at the root ([#1252](https://github.com/graycoreio/daffodil/issues/1252)) ([740ea7d](https://github.com/graycoreio/daffodil/commit/740ea7dc0b390bcd429008cd0da4a0add66c51e7))
* **design:** rename heading-* mixins to headline-* ([#1186](https://github.com/graycoreio/daffodil/issues/1186)) ([aa003b8](https://github.com/graycoreio/daffodil/commit/aa003b8629cb649023ce8219e390fe3cbf0c08c6))
* **design:** updates the font sizes on typography mixins ([#1186](https://github.com/graycoreio/daffodil/issues/1186)) ([2daf9c9](https://github.com/graycoreio/daffodil/commit/2daf9c9b2f6b30fd84f0d7d02fc6584e730fa734))
* **navigation:** sort magento navigation categories by position ([#1254](https://github.com/graycoreio/daffodil/issues/1254)) ([441fbca](https://github.com/graycoreio/daffodil/commit/441fbca49d025a9e57a02a8d38e6e9d916294ad0))


### Bug Fixes

* **cart:** in-memory api does not update collection of carts as expected ([#1255](https://github.com/graycoreio/daffodil/issues/1255)) ([6ac660e](https://github.com/graycoreio/daffodil/commit/6ac660e3a25e92675f83e2ee9f5a64eb336db203))
* **category:** multiple category load requests are no longer canceled ([#1287](https://github.com/graycoreio/daffodil/issues/1287)) ([d7aceef](https://github.com/graycoreio/daffodil/commit/d7aceef703e3e2f50c0e0d00006d9e563e07557a))

## [0.24.0](https://github.com/graycoreio/daffodil/compare/v0.23.1...v0.24.0) (2021-01-26)


### ⚠ BREAKING CHANGES

* **all:** The types of all ID-related fields are now type string
* **all:** Dropped support for Angular v8 and v9

### Features

* **all:** change ID type to string and generate IDs with uuid ([#1245](https://github.com/graycoreio/daffodil/issues/1245)) ([362f6e1](https://github.com/graycoreio/daffodil/commit/362f6e1d0271d801f9c8fe5e8a0d1cced653d9d6))
* **all:** pass generic type to ModuleWithProviders ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([d958ee4](https://github.com/graycoreio/daffodil/commit/d958ee4815006ceaeb4844f5c635de89e79cbcb1))
* **all:** provide mock facade in root and with useExisting ([#1217](https://github.com/graycoreio/daffodil/issues/1217)) ([90db80c](https://github.com/graycoreio/daffodil/commit/90db80c9ba8bb2385b74a71fac02446b5cb94d0d))
* **auth:** add injection token types ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([f8f8756](https://github.com/graycoreio/daffodil/commit/f8f8756dc183416462d25e3acdef8ca8bd5f9518))
* **authorizenet:** add injection token types ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([ebec1bc](https://github.com/graycoreio/daffodil/commit/ebec1bcce8d77f9a573aa2a5ee628155be57c514))
* **cart:** add default value for extra cart fragments token ([#1239](https://github.com/graycoreio/daffodil/issues/1239)) ([c6a1de1](https://github.com/graycoreio/daffodil/commit/c6a1de1e2613bca38f073d85e653667fd1b07697))
* **cart:** add injection token types ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([9e7289e](https://github.com/graycoreio/daffodil/commit/9e7289ee580d8a82b12b78800cba092f4f91a1dd))
* **cart:** add typename on all Magento responses ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([a9b01b8](https://github.com/graycoreio/daffodil/commit/a9b01b817c5e1aa2bcdbb3d3433ffda4c5e0ad03))
* **cart:** provide cart item testing driver service ([#1218](https://github.com/graycoreio/daffodil/issues/1218)) ([07a6a10](https://github.com/graycoreio/daffodil/commit/07a6a1029af25d8b6e2644f505c9944cacdccb36))
* **cart:** provide magento transformers in root ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([b2187dc](https://github.com/graycoreio/daffodil/commit/b2187dcfbd61b13846826f66b0d35aa39a2dfe78))
* **cart:** transform invalid coupon code error from message ([#1199](https://github.com/graycoreio/daffodil/issues/1199)) ([2e59eeb](https://github.com/graycoreio/daffodil/commit/2e59eebdd968c6e7e95f881188413dfb3dd817d7))
* **cart:** update to support @apollo/client 3 and apollo-angular ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([7837d80](https://github.com/graycoreio/daffodil/commit/7837d80b02970df143e421b656ed54fdac899225))
* **category:** add injection token types ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([3fd50a3](https://github.com/graycoreio/daffodil/commit/3fd50a3943e3b2aacea754036429c008627d397b))
* **checkout:** add export ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([cf4e942](https://github.com/graycoreio/daffodil/commit/cf4e942862462bff1fa3202675bd5c3932dcadfc))
* **contact:** add injection token types ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([f8c313b](https://github.com/graycoreio/daffodil/commit/f8c313b6e88bdfb44553ad60cf1fb2599fae794c))
* **core:** add scan generic in substream ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([2759927](https://github.com/graycoreio/daffodil/commit/27599274ffe68d898f9c9ae5d19b9534e8c12d48))
* **core:** update to support @apollo/client 3 and apollo-angular 2 ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([8bbf1fe](https://github.com/graycoreio/daffodil/commit/8bbf1fee66e49ba16b7615a3a3a403fc8ac8642a))
* **demo:** update to support @apollo/client 3 and apollo-angular 2 ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([578476c](https://github.com/graycoreio/daffodil/commit/578476ce4f7adba5fd38cdca11af0a0921bc6ab6))
* **design:** add checkbox CVA export ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([0e32e9a](https://github.com/graycoreio/daffodil/commit/0e32e9a5d26562db732989021662141d58767dd0))
* **design:** add Directive decorator to mixin ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([01e1ef6](https://github.com/graycoreio/daffodil/commit/01e1ef65a676bef4fd885b1efafd35c4aa258edd))
* **design:** add form error messages export ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([a8922d1](https://github.com/graycoreio/daffodil/commit/a8922d16cab2a056d811fbfe423be120f80ee3b2))
* **design:** add modal exports ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([a78a8d5](https://github.com/graycoreio/daffodil/commit/a78a8d58b8fe8b31654654746c38c8ca9a648464))
* **design:** add radio CVA export ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([9720278](https://github.com/graycoreio/daffodil/commit/9720278052bec17f0ed40ee34a0008514818b56c))
* **design-land:** remove unused entryComponents ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([c874fba](https://github.com/graycoreio/daffodil/commit/c874fbaafec9416680f022639b8d4c33aa9f3541))
* **driver:** add typename to Magento models ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([1f81c64](https://github.com/graycoreio/daffodil/commit/1f81c64677e7acb5ad1785d6d72039ce41ef28e3))
* **external-router:** add new external routing package scaffold ([#1216](https://github.com/graycoreio/daffodil/issues/1216)) ([de7af27](https://github.com/graycoreio/daffodil/commit/de7af27991487d49861b61b102b81035d4690eb6))
* **geography:** add injection token types ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([08010e9](https://github.com/graycoreio/daffodil/commit/08010e9965d29a116f4d2bb026a5b9bf449dfdbf))
* **geography:** add typename to Magento models ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([2adbdc3](https://github.com/graycoreio/daffodil/commit/2adbdc3047e60f5051f0774f32df063a4be3ab80))
* **geography:** update to support @apollo/client 3 and apollo-angular 2 ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([f7717ad](https://github.com/graycoreio/daffodil/commit/f7717ad3abc913712a01c972c92e24da050c84b3))
* **navigation:** update to support @apollo/client 3 and apollo-angular 2 ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([6d00c08](https://github.com/graycoreio/daffodil/commit/6d00c08f4e00f7760305ba3dcd0289220976c244))
* **newsletter:** add injection token types ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([525434f](https://github.com/graycoreio/daffodil/commit/525434f8b912981ebe82f5583582c85ff6ae7eb6))
* **order:** add default value for extra order fragments token ([#1238](https://github.com/graycoreio/daffodil/issues/1238)) ([c1409af](https://github.com/graycoreio/daffodil/commit/c1409aff4a6d92d6e041413e12be43215e384428))
* **order:** add order payment to invoice fragment ([#1234](https://github.com/graycoreio/daffodil/issues/1234)) ([62375cd](https://github.com/graycoreio/daffodil/commit/62375cd227fbe0f45d00f0d21be26a8fbe7bfe8c))
* **order:** add typename to driver response models ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([86dfb7f](https://github.com/graycoreio/daffodil/commit/86dfb7f496fdb8571a8204cecb47ba3e21780ca2))
* **order:** randomly generate product name and SKU in order item fac… ([#1222](https://github.com/graycoreio/daffodil/issues/1222)) ([0b7de2c](https://github.com/graycoreio/daffodil/commit/0b7de2c1f5b954d48e0c23095bfeb7076997845c))
* **order:** update to support @apollo/client 3 and apollo-angular 2 ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([64a941d](https://github.com/graycoreio/daffodil/commit/64a941d860c43056dcee90b72807335a5a240407))
* **paypal:** add default generic types to transformer interface ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([a94557f](https://github.com/graycoreio/daffodil/commit/a94557f2f6578bcac000e7b45035c0d08d2554af))
* **paypal:** add injection token types ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([043a8db](https://github.com/graycoreio/daffodil/commit/043a8dbf0d8bc85b6068fae6bf25a2b20c862471))
* **paypal:** update to support @apollo/client 3 and apollo-angular 2 ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([81c605d](https://github.com/graycoreio/daffodil/commit/81c605d83f29cd72022d9243977318200cbe3c6d))
* **product:** add injection token types ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([8e0e776](https://github.com/graycoreio/daffodil/commit/8e0e776916178aa0307eea3bc14d23b7c132a7ec))
* **product:** add typename to driver response models ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([7a7c2c6](https://github.com/graycoreio/daffodil/commit/7a7c2c6e35f82b6345facfc60f0906cd49d85d10))
* **product:** update to support @apollo/client 3 and apollo-angular 2 ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([714f63c](https://github.com/graycoreio/daffodil/commit/714f63cf73bc6b216e7944a6266bfeed54854885))


### Bug Fixes

* **category:** default sort option transformer cannot set read only property '0' ([#1237](https://github.com/graycoreio/daffodil/issues/1237)) ([38b9959](https://github.com/graycoreio/daffodil/commit/38b995992b35870e7f07c4e8b616785f27c9fe07))
* **demo:** aot compatible driver map ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([6f20d90](https://github.com/graycoreio/daffodil/commit/6f20d90b044de09b368094c758e8f5125fea9760))
* **design:** handle edge case with [@self](https://github.com/self) injected control ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([81b245b](https://github.com/graycoreio/daffodil/commit/81b245bfd8e971abf42994781e71a9b8ada47992))


* **all:** upgrade Angular to v10 package and dependencies ([#1229](https://github.com/graycoreio/daffodil/issues/1229)) ([7e15e0a](https://github.com/graycoreio/daffodil/commit/7e15e0aad0acd7a12528254e5af9ac385a4155cc))

### [0.23.1](https://github.com/graycoreio/daffodil/compare/v0.23.0...v0.23.1) (2021-01-11)


### Features

* **navigation:** export the MagentoBreadcrumb interface ([#1215](https://github.com/graycoreio/daffodil/issues/1215)) ([5fddf83](https://github.com/graycoreio/daffodil/commit/5fddf83c4a18b8a2827a519036b8f6934cf884a2))

## [0.23.0](https://github.com/graycoreio/daffodil/compare/v0.22.1...v0.23.0) (2021-01-11)


### ⚠ BREAKING CHANGES

* **cart:** this token has been renamed to `DAFF_CART_MAGENTO_EXTRA_CART_FRAGMENTS`, simply swap your existing token with the new one.

### Features

* **cart:** rename extra cart fragments token ([#1208](https://github.com/graycoreio/daffodil/issues/1208)) ([83c87fd](https://github.com/graycoreio/daffodil/commit/83c87fd0be1d60daab7bbbd16a34a672fe341b64))
* **navigation:** get breadcrumbs with navigation queries ([#1210](https://github.com/graycoreio/daffodil/issues/1210)) ([00542a7](https://github.com/graycoreio/daffodil/commit/00542a7c4478c132261f495d58f11f7840acaf4d))

### [0.22.1](https://github.com/graycoreio/daffodil/compare/v0.22.0...v0.22.1) (2021-01-06)


### Bug Fixes

* **cart:** cart item states get reset when DaffCartItemUpdateSuccess actions are dispatched ([#1205](https://github.com/graycoreio/daffodil/issues/1205)) ([f4a7ea4](https://github.com/graycoreio/daffodil/commit/f4a7ea4d19d5f485639bfcf47dc9ee37d61af35a))

## [0.22.0](https://github.com/graycoreio/daffodil/compare/v0.21.3...v0.22.0) (2021-01-05)


### ⚠ BREAKING CHANGES

* **cart:** The selectItemMutating selector is now a derived selector of all cart item states and is called selectCartItemMutating

### Features

* **cart:** add more driver errors ([#1198](https://github.com/graycoreio/daffodil/issues/1198)) ([05a0a15](https://github.com/graycoreio/daffodil/commit/05a0a15e28a1a621c539607ef10125a30ae3a73b))
* **cart/state:** add specification for server-side cart resolution ([#1193](https://github.com/graycoreio/daffodil/issues/1193)) ([e21f1cd](https://github.com/graycoreio/daffodil/commit/e21f1cd580445e8c370b4b0b086a95d5869b417e))
* **core:** swap persistence to server error on server by default ([#1200](https://github.com/graycoreio/daffodil/issues/1200)) ([9184640](https://github.com/graycoreio/daffodil/commit/9184640c57bcab16c49251464a44cac65bd4ddaf))


### Bug Fixes

* **cart:** fix bug where concurrent cart item updates would result in… ([#1203](https://github.com/graycoreio/daffodil/issues/1203)) ([486dda7](https://github.com/graycoreio/daffodil/commit/486dda79e6dc05f510a51c00d701281f9691da6b))
* **core:** queued apollo mutation errors prevent subsequent requests ([#1196](https://github.com/graycoreio/daffodil/issues/1196)) ([cc43940](https://github.com/graycoreio/daffodil/commit/cc439406943fc94af81498ef56c6646e6bca138c))

### [0.21.3](https://github.com/graycoreio/daffodil/compare/v0.21.2...v0.21.3) (2020-12-22)


### Features

* **cart:** transform cart errors with injectable error matcher ([#1147](https://github.com/graycoreio/daffodil/issues/1147)) ([98f894d](https://github.com/graycoreio/daffodil/commit/98f894d2ade0abd049f98e72784a9831e13004e3))
* **product:** make DaffProduct.images a required field ([#1195](https://github.com/graycoreio/daffodil/issues/1195)) ([d4b5e43](https://github.com/graycoreio/daffodil/commit/d4b5e43179bd397ec54ab430b25539c41fc83a8c))

### [0.21.2](https://github.com/graycoreio/daffodil/compare/v0.21.1...v0.21.2) (2020-12-18)


### Features

* **cart:** queue mutations in magento driver ([#1191](https://github.com/graycoreio/daffodil/issues/1191)) ([100bbc0](https://github.com/graycoreio/daffodil/commit/100bbc0a2d246f07cc95d1e5d197aa080818474f))
* **core:** add queued apollo service ([#1187](https://github.com/graycoreio/daffodil/issues/1187)) ([c125b7c](https://github.com/graycoreio/daffodil/commit/c125b7cb8988b97c726172cc5271cdad0d320714))


### Bug Fixes

* **category:** category breadcrumbs return from magento in alphabetic… ([#1188](https://github.com/graycoreio/daffodil/issues/1188)) ([4eeb037](https://github.com/graycoreio/daffodil/commit/4eeb03741d65a3d3f9609d55911f647f9f2e0871))
* **product:** configurable product selectable attributes include out of stock variants ([#1189](https://github.com/graycoreio/daffodil/issues/1189)) ([2248754](https://github.com/graycoreio/daffodil/commit/224875404d693c187b37473429c090059bded6ea))

### [0.21.1](https://github.com/graycoreio/daffodil/compare/v0.21.0...v0.21.1) (2020-12-16)


### Features

* **authorizenet:** add driver errors ([#1171](https://github.com/graycoreio/daffodil/issues/1171)) ([bf893f4](https://github.com/graycoreio/daffodil/commit/bf893f4afe896bd269fac350f0b040f7c7c5b5f7))
* **authorizenet:** map errors in magento driver ([#1183](https://github.com/graycoreio/daffodil/issues/1183)) ([64882a1](https://github.com/graycoreio/daffodil/commit/64882a1b01508d6aa58c1dc16ed86dc8969ab570))
* **authorizenet:** transform errors to state with injected error matcher ([#1182](https://github.com/graycoreio/daffodil/issues/1182)) ([d305410](https://github.com/graycoreio/daffodil/commit/d3054102f5df93a7b994f8069adf4ab594c1cc6e))
* **core:** add storage service that errors on the server ([#1180](https://github.com/graycoreio/daffodil/issues/1180)) ([3f47e76](https://github.com/graycoreio/daffodil/commit/3f47e76ba437eee3919f204b62df0098c9170684))
* **navigation:** shard packages ([#1181](https://github.com/graycoreio/daffodil/issues/1181)) ([05d67e7](https://github.com/graycoreio/daffodil/commit/05d67e7d6f74f01808654a43beb5d8faf40f5f1f))


### Bug Fixes

* **cart:** some cart fields disappear during mutations that do not retrieve the entire cart ([#1184](https://github.com/graycoreio/daffodil/issues/1184)) ([1c9e0e5](https://github.com/graycoreio/daffodil/commit/1c9e0e551a47d653817c5f867cc8674543a90ba9))

## [0.21.0](https://github.com/graycoreio/daffodil/compare/v0.20.3...v0.21.0) (2020-12-07)


### ⚠ BREAKING CHANGES

* **cart:** The type of the `selectCartResolved` has changed to `DaffCartResolvedState` enum. The type of the `resolved$` facade field has changed in the same way

### Features

* **cart:** add selector for total cart items ([#1178](https://github.com/graycoreio/daffodil/issues/1178)) ([b1d3d69](https://github.com/graycoreio/daffodil/commit/b1d3d693bab21a36e764ef57014499728bca395c))
* **cart:** improve CartResolution action hygiene, change resolved state to enum ([#1176](https://github.com/graycoreio/daffodil/issues/1176)) ([d0cbf78](https://github.com/graycoreio/daffodil/commit/d0cbf788b0e55ca1aa2971e2410dd324f18afc5c))
* **product:** add selectors for product prices and discounted prices ([#1177](https://github.com/graycoreio/daffodil/issues/1177)) ([f966124](https://github.com/graycoreio/daffodil/commit/f96612442b11c1357f131f5264e978134edf1592))

### [0.20.3](https://github.com/graycoreio/daffodil/compare/v0.20.2...v0.20.3) (2020-12-02)


### Features

* **authorizenet:** add error matcher injection token ([#1172](https://github.com/graycoreio/daffodil/issues/1172)) ([56baf73](https://github.com/graycoreio/daffodil/commit/56baf7368a60c86649896d0f996b7e05072064e8))
* **product:** add a selector for getting all variants of a configurable product ([#1174](https://github.com/graycoreio/daffodil/issues/1174)) ([429d7a2](https://github.com/graycoreio/daffodil/commit/429d7a25fb904686ea16b1ccbcacb08e27886cd4))

### [0.20.2](https://github.com/graycoreio/daffodil/compare/v0.20.1...v0.20.2) (2020-11-30)


### Features

* **cart:** add resolved cart guard ([#1170](https://github.com/graycoreio/daffodil/issues/1170)) ([7e747af](https://github.com/graycoreio/daffodil/commit/7e747afb9dfe6bb6d17c002cbed4869ac152d593))
* **order:** add a selector for whether an order has a discount ([#1169](https://github.com/graycoreio/daffodil/issues/1169)) ([818d919](https://github.com/graycoreio/daffodil/commit/818d919bb3fa3e75bb3d2355e4e3ed0b649a2240))


### Bug Fixes

* **navigation:** the getCategoryNodeFragment magento query does not work ([#1168](https://github.com/graycoreio/daffodil/issues/1168)) ([0b44bd6](https://github.com/graycoreio/daffodil/commit/0b44bd636be77780536696f5760be74f5ab9436f))

### [0.20.1](https://github.com/graycoreio/daffodil/compare/v0.20.0...v0.20.1) (2020-11-28)


### Features

* **authorizenet:** shard packages and add store feature key ([#1160](https://github.com/graycoreio/daffodil/issues/1160)) ([2919188](https://github.com/graycoreio/daffodil/commit/29191882a845feb65ed9834e83f981e14aaaa1f3))
* **cart:** add cart item guard ([#1164](https://github.com/graycoreio/daffodil/issues/1164)) ([d4237a4](https://github.com/graycoreio/daffodil/commit/d4237a4fa066020549a5d5f0c7b6d7cdfc7c9003))


### Bug Fixes

* **cart:** cart item state is set incorrectly in cart item reducers ([#1165](https://github.com/graycoreio/daffodil/issues/1165)) ([9789d92](https://github.com/graycoreio/daffodil/commit/9789d925f3fa2be01c7cdf99281b9699437d6699))

## [0.20.0](https://github.com/graycoreio/daffodil/compare/v0.19.2...v0.20.0) (2020-11-25)


### ⚠ BREAKING CHANGES

* **authorizenet:** This used to depend on a configuration setting in the driver. This didn't make sense and was widely regarded as a bad move. Instead, we've shifted the configuration setting to its own token that you can toggle at the root as you'd like.

### Features

* **authorizenet:** add new production token to authorizenet package  ([#1161](https://github.com/graycoreio/daffodil/issues/1161)) ([2cd04c2](https://github.com/graycoreio/daffodil/commit/2cd04c234a6c0b097c7ab8d01d47b2d3f98de38c))
* **cart:** add state to each cart item to indicate if it is new, mutating, etc ([#1126](https://github.com/graycoreio/daffodil/issues/1126)) ([e65ec68](https://github.com/graycoreio/daffodil/commit/e65ec683fb0baaaa23676a458bb3232f492c05e1))
* **navigation:** injectable category tree query depth in magento driver ([#1150](https://github.com/graycoreio/daffodil/issues/1150)) ([a2ce44d](https://github.com/graycoreio/daffodil/commit/a2ce44db475bbd6bbff482eec831f7017c12a1a2))


### Bug Fixes

* **product:** out of stock item options result in a price bug for non… ([#1158](https://github.com/graycoreio/daffodil/issues/1158)) ([a3dd189](https://github.com/graycoreio/daffodil/commit/a3dd1890a09e610958e54054566fd3f09eaaec46))

### [0.19.2](https://github.com/graycoreio/daffodil/compare/v0.19.1...v0.19.2) (2020-11-21)


### Bug Fixes

* **category:** add category page effects to DaffCategoryStateModule ([#1157](https://github.com/graycoreio/daffodil/issues/1157)) ([79ce0cb](https://github.com/graycoreio/daffodil/commit/79ce0cbb53bd0f8a9856400e107410007f8837dc))

### [0.19.1](https://github.com/graycoreio/daffodil/compare/v0.19.0...v0.19.1) (2020-11-21)


### Bug Fixes

* **category:** stop category load on DaffCategoryLoadSuccess ([#1156](https://github.com/graycoreio/daffodil/issues/1156)) ([24bbcce](https://github.com/graycoreio/daffodil/commit/24bbcceea500df2819f6f4913b951c058c9f03fc))

## [0.19.0](https://github.com/graycoreio/daffodil/compare/v0.18.0...v0.19.0) (2020-11-20)


### ⚠ BREAKING CHANGES

* **product:** The selectCompositeProductPricesForConfiguration selector is now selectCompositeProductRequiredItemPricesForConfiguration, and selectCompositeProductPrices is now selectCompositeProductOptionalItemPricesForConfiguration

### Features

* **category:** add page load action ([#1151](https://github.com/graycoreio/daffodil/issues/1151)) ([4c726b2](https://github.com/graycoreio/daffodil/commit/4c726b263d4ad4cf34c5feb56a24d6f3fa0dfec6))
* **product:** allow selectCompositeProductPricesForConfiguration tak… ([#1153](https://github.com/graycoreio/daffodil/issues/1153)) ([bfa55c6](https://github.com/graycoreio/daffodil/commit/bfa55c6b1b869e169707b29fbcacf1d078a2df82))

## [0.18.0](https://github.com/graycoreio/daffodil/compare/v0.17.2...v0.18.0) (2020-11-18)


### ⚠ BREAKING CHANGES

* **geography:** DaffGeographyModule is removed. Use DaffGeographyStateModule instead.
* **order:** The order testing package has been split into @daffodil/order/state/testing, @daffodil/order/driver/testing, and @daffodil/order/driver/in-memory

### Features

* **cart:** add error matcher injection token ([#1132](https://github.com/graycoreio/daffodil/issues/1132)) ([00c9fe6](https://github.com/graycoreio/daffodil/commit/00c9fe623279d0a5a784ceb79d7cc459cc5f925d))
* **cart:** cart items now have an Adding state ([#1140](https://github.com/graycoreio/daffodil/issues/1140)) ([86af522](https://github.com/graycoreio/daffodil/commit/86af5227cebf0141b826554ece58f5fa5b08fd08))
* **order:** shard testing packages ([#1138](https://github.com/graycoreio/daffodil/issues/1138)) ([9794c70](https://github.com/graycoreio/daffodil/commit/9794c701a894058f2c8e4c471ae6c621393c61c6))


### Bug Fixes

* **category:** category page resolver should dispatch a category load action regardless of environment ([#1148](https://github.com/graycoreio/daffodil/issues/1148)) ([565cd96](https://github.com/graycoreio/daffodil/commit/565cd96b69a73a235a2936795c97861bb26ea908))
* **product:** product page resolver should dispatch a product load regardless of environment ([#1149](https://github.com/graycoreio/daffodil/issues/1149)) ([a434df3](https://github.com/graycoreio/daffodil/commit/a434df313d01cc5d76fc05a44f5b5b6e20df09c1))


* **geography:** remove useless DaffGeographyModule ([#1146](https://github.com/graycoreio/daffodil/issues/1146)) ([1ff48f2](https://github.com/graycoreio/daffodil/commit/1ff48f25bafcdf9d9d54f6bb85e0c8a829422e81))

### [0.17.2](https://github.com/graycoreio/daffodil/compare/v0.17.1...v0.17.2) (2020-11-15)


### Features

* **cart:** add invalid API response error ([#1133](https://github.com/graycoreio/daffodil/issues/1133)) ([d572f46](https://github.com/graycoreio/daffodil/commit/d572f462900ac0671b1b0ff00c8b3e5a8dc1729a))
* **cart:** shard packages  ([#1137](https://github.com/graycoreio/daffodil/issues/1137)) ([463c9bc](https://github.com/graycoreio/daffodil/commit/463c9bc1bd096aac3e945736e1299332b74bec9e))
* **category:** add resolvers for category page server-side rendering ([#1142](https://github.com/graycoreio/daffodil/issues/1142)) ([42c31cf](https://github.com/graycoreio/daffodil/commit/42c31cff5036f3d58791767814b0e9410ff06462))
* **geography:** shard packages ([#1113](https://github.com/graycoreio/daffodil/issues/1113)) ([cfefedc](https://github.com/graycoreio/daffodil/commit/cfefedccb6cd92ecbf8e99344a2e344ba933c6ca))
* **product:** add resolvers for product page server-side rendering ([#1143](https://github.com/graycoreio/daffodil/issues/1143)) ([bd8cbb6](https://github.com/graycoreio/daffodil/commit/bd8cbb6293b6d533f26a41b821b010051d653e51))


### Bug Fixes

* **builders:** generate-fragment-types builder was built into the wrong directory for demo ([#1136](https://github.com/graycoreio/daffodil/issues/1136)) ([48c4bad](https://github.com/graycoreio/daffodil/commit/48c4bad30fca98bd56bfbe36b33b2312e7d57315))
* **order:** using wrong item quantity ([#1144](https://github.com/graycoreio/daffodil/issues/1144)) ([a2f79fa](https://github.com/graycoreio/daffodil/commit/a2f79fa44df244914770afeb56dd78d4d0bb0ea9))
* **product:** fix some return types in the MockDaffCompositeProductFacade ([#1134](https://github.com/graycoreio/daffodil/issues/1134)) ([dde203e](https://github.com/graycoreio/daffodil/commit/dde203ef19bb2404f40e3ee6a81a71f557c71363))

### [0.17.1](https://github.com/graycoreio/daffodil/compare/v0.17.0...v0.17.1) (2020-11-09)


### Bug Fixes

* **order:** bad bundle item fragments and query field ([#1119](https://github.com/graycoreio/daffodil/issues/1119)) ([a42b561](https://github.com/graycoreio/daffodil/commit/a42b5611cb1eac89ebbc0313eb64c977fe410e1f))

## [0.17.0](https://github.com/graycoreio/daffodil/compare/v0.16.1...v0.17.0) (2020-11-09)


### ⚠ BREAKING CHANGES

* **product:** The composite product selectors are now replaced with
selectCompositeProductPricesForConfiguration,
selectCompositeProductPrices,
selectCompositeProductPricesAsCurrentlyConfigured

### Features

* **all:** swap error names to compile-safe static codes ([#1127](https://github.com/graycoreio/daffodil/issues/1127)) ([58185af](https://github.com/graycoreio/daffodil/commit/58185af420c78a4bc0a749ca3c16a620211e664f))
* **core:** add error models and transform ([#1125](https://github.com/graycoreio/daffodil/issues/1125)) ([ede2170](https://github.com/graycoreio/daffodil/commit/ede217035af1a778ed9e38f235943db2f2be40f4))
* **product:** change the api for composite product facade and selectors ([#1120](https://github.com/graycoreio/daffodil/issues/1120)) ([516b541](https://github.com/graycoreio/daffodil/commit/516b54171085592f52d355c44d05adf135f384b7))


### Bug Fixes

* **core:** null or undefined values cause an infinite loop in arithmetic functions ([#1128](https://github.com/graycoreio/daffodil/issues/1128)) ([65724c2](https://github.com/graycoreio/daffodil/commit/65724c2813cc958bbfe03e5e1f6ebd21e0dc03b4))

### [0.16.1](https://github.com/graycoreio/daffodil/compare/v0.16.0...v0.16.1) (2020-11-03)


### Bug Fixes

* **cart:** composite cart item option id points to the wrong field in… ([#1124](https://github.com/graycoreio/daffodil/issues/1124)) ([ec7a3ae](https://github.com/graycoreio/daffodil/commit/ec7a3aeecc0aa7cb4b9f5951b2c15fac87191ac6))

## [0.16.0](https://github.com/graycoreio/daffodil/compare/v0.15.0...v0.16.0) (2020-11-02)


### ⚠ BREAKING CHANGES

* **cart:** The DaffCartFacade.totalDiscount is now DaffCartFacade.discountTotals and is an array of DaffCartTotal instead of a single number. Similarly the getDaffCartSelectors.selectCartTotalDiscount is now selectCartDiscountTotals.

### Features

* **cart:** add option_id to the DaffCompositeCartItemOption ([#1123](https://github.com/graycoreio/daffodil/issues/1123)) ([f3d37b5](https://github.com/graycoreio/daffodil/commit/f3d37b517a94c85351c1dca68333a74961e5643b))
* **cart:** make cart discounts separate ([#1121](https://github.com/graycoreio/daffodil/issues/1121)) ([2b7ecbf](https://github.com/graycoreio/daffodil/commit/2b7ecbf59793992f41a2b0d4ad42c258b79ebfde))
* **order:** add extra order fragment extensions ([#1117](https://github.com/graycoreio/daffodil/issues/1117)) ([e3dcbb7](https://github.com/graycoreio/daffodil/commit/e3dcbb73e85c861d0455dd9c957e6b1be3df405d))
* **order:** add magento 2.4.1 driver models and transforms ([#1112](https://github.com/graycoreio/daffodil/issues/1112)) ([26dca6f](https://github.com/graycoreio/daffodil/commit/26dca6f61685ac60e73ff9b1dcd3bdba4774c7cd))
* **order:** add magento 2.4.1 driver queries ([#1114](https://github.com/graycoreio/daffodil/issues/1114)) ([0ac5fc0](https://github.com/graycoreio/daffodil/commit/0ac5fc0f4675216fa74fbf1d899925ab1d75739a))
* **order:** add magento 2.4.1 driver service ([#1116](https://github.com/graycoreio/daffodil/issues/1116)) ([0a6053e](https://github.com/graycoreio/daffodil/commit/0a6053e3f9cf0b3c8db479e256adc82b299a1dcb))
* **order:** add order item types ([#1110](https://github.com/graycoreio/daffodil/issues/1110)) ([24c8cbb](https://github.com/graycoreio/daffodil/commit/24c8cbb66d9e5b602744ebc934c80bd83f15dca6))


### Bug Fixes

* **demo:** update tsconfig with core subpackages ([#1122](https://github.com/graycoreio/daffodil/issues/1122)) ([0abbda7](https://github.com/graycoreio/daffodil/commit/0abbda7bd8f2b54d1c1790336e50afc3442d1395))
* **order:** email field present on order ([#1118](https://github.com/graycoreio/daffodil/issues/1118)) ([ac7e306](https://github.com/graycoreio/daffodil/commit/ac7e30664f8bb15fad31caff5a6da310a0ead53d))

## [0.15.0](https://github.com/graycoreio/daffodil/compare/v0.14.0...v0.15.0) (2020-10-23)


### ⚠ BREAKING CHANGES

* **order:** this requires dependents to use the new entry points as old entry points are removed.
* **all:** @daffodil/core package import paths changed, you will need to update imports.

### Features

* **all:** split core into graphql and state packages ([#1091](https://github.com/graycoreio/daffodil/issues/1091)) ([bf689e1](https://github.com/graycoreio/daffodil/commit/bf689e168cf270f396a5dd33618f345bd2da6de9))
* **cart, magento:** removes shipping methods from main cart fragement ([#1080](https://github.com/graycoreio/daffodil/issues/1080)) ([f9743a7](https://github.com/graycoreio/daffodil/commit/f9743a742182a194ada2a9e18311580ce9a040ec))
* **design:** update color palettes ([#1054](https://github.com/graycoreio/daffodil/issues/1054)) ([4e91d60](https://github.com/graycoreio/daffodil/commit/4e91d6038fa982635f225fd28df78df237b0eb48))
* **order:** define image in order item factory ([#1101](https://github.com/graycoreio/daffodil/issues/1101)) ([f79eedb](https://github.com/graycoreio/daffodil/commit/f79eedb576d669a98ec33edc16838cad6d7512a5))
* **order:** fragement package into separate entrypoints ([#1105](https://github.com/graycoreio/daffodil/issues/1105)) ([4790c80](https://github.com/graycoreio/daffodil/commit/4790c8078f8807f539b251ffba7dcbd660d6a88c))
* **tools-dgeni:** remove internal properties from generated docs ([#1098](https://github.com/graycoreio/daffodil/issues/1098)) ([7a3e14a](https://github.com/graycoreio/daffodil/commit/7a3e14ade178e32543e0020bdb5ec1ddf4d573e9))
* **tools, daffio:** generate interface docs with dgeni; generate docs for all public fields ([#1094](https://github.com/graycoreio/daffodil/issues/1094)) ([5dd6239](https://github.com/graycoreio/daffodil/commit/5dd6239a160085e36dc7c964ab10bdd97a767ba4))


### Bug Fixes

* **product:** make any product percentages a whole number to avoid re… ([#1108](https://github.com/graycoreio/daffodil/issues/1108)) ([e89ee4d](https://github.com/graycoreio/daffodil/commit/e89ee4dcc283d372bdd2f7b3efd0f11f83236071))
* **product:** set the price and discount of the primary product of magento composite products to zero ([#1109](https://github.com/graycoreio/daffodil/issues/1109)) ([f8ba0cb](https://github.com/graycoreio/daffodil/commit/f8ba0cb37de7d86e9d527a5369475822a8dafe2e))
* **tools-dgeni:** make types for properties HTML compatible ([#1097](https://github.com/graycoreio/daffodil/issues/1097)) ([d09b2aa](https://github.com/graycoreio/daffodil/commit/d09b2aad53ffb838aa3d85977575ecd89812fc99))

## [0.14.0](https://github.com/graycoreio/daffodil/compare/v0.13.0...v0.14.0) (2020-10-13)


### ⚠ BREAKING CHANGES

* **cart:** creates no longer store the original cart state, but instead reset it, you may need to reload your cart data.

### Features

* **cart:** cart create success action should reset the cart state ([#1089](https://github.com/graycoreio/daffodil/issues/1089)) ([c2172bc](https://github.com/graycoreio/daffodil/commit/c2172bc1d6f03cad617731a28b58a0c875bd6bd7))
* **order:** add all invoice and order totals ([#1087](https://github.com/graycoreio/daffodil/issues/1087)) ([92e96f9](https://github.com/graycoreio/daffodil/commit/92e96f9fd7cd729342ae2958f9cb5a60613583b4))
* **order:** add order total selectors ([#1090](https://github.com/graycoreio/daffodil/issues/1090)) ([de8724e](https://github.com/graycoreio/daffodil/commit/de8724e106c9b6a2e6efbdbb3fc4d16c8ddfe984))


### Bug Fixes

* **product:** the min possible composite product price should not include prices for optional items ([#1086](https://github.com/graycoreio/daffodil/issues/1086)) ([13bb953](https://github.com/graycoreio/daffodil/commit/13bb953306ebbd979d6a0ce11ba53c530f303ec5))

## [0.13.0](https://github.com/graycoreio/daffodil/compare/v0.12.1...v0.13.0) (2020-10-06)


### ⚠ BREAKING CHANGES

* **product:** Some of the composite product price selectors have been renamed, because they were incorrect/misleading.

* **product:** fix the facade and selector names for composite product prices ([#1085](https://github.com/graycoreio/daffodil/issues/1085)) ([5766ad9](https://github.com/graycoreio/daffodil/commit/5766ad9b48ddf7b9a4bf402190be58968cacbff4))

### [0.12.1](https://github.com/graycoreio/daffodil/compare/v0.12.0...v0.12.1) (2020-10-06)


### Features

* **authorizenet:** remove name as type from DaffAuthorizeNetCreditCard interface ([#1081](https://github.com/graycoreio/daffodil/issues/1081)) ([a7931df](https://github.com/graycoreio/daffodil/commit/a7931dfa8b4dee12f7d38f0ff53c0d2af02d72e0))

## [0.12.0](https://github.com/graycoreio/daffodil/compare/v0.11.3...v0.12.0) (2020-10-06)


### ⚠ BREAKING CHANGES

* **product:** nearly all of the DaffCompositeProductFacade fields and the DaffCompositeProductMemoizedSelectors have changed
* **core, cart:** The loading$ facade field is now called featureLoading$, and the selectCartLoading selector is now selectCartFeatureLoading

### Features

* **core, cart:** segregate loading state into cart subfields ([#1084](https://github.com/graycoreio/daffodil/issues/1084)) ([daabdb8](https://github.com/graycoreio/daffodil/commit/daabdb85696799f04f610ca87ed235f36e8e1707))
* **product:** finalize the composite product price selectors and fac… ([#1083](https://github.com/graycoreio/daffodil/issues/1083)) ([f7fcddf](https://github.com/graycoreio/daffodil/commit/f7fcddf72fd92456b806479c6045b0087afd2a02))

### [0.11.3](https://github.com/graycoreio/daffodil/compare/v0.11.2...v0.11.3) (2020-10-01)


### Features

* **product:** add min and max discounted price selectors for composi… ([#1079](https://github.com/graycoreio/daffodil/issues/1079)) ([e0310f4](https://github.com/graycoreio/daffodil/commit/e0310f4c233fa50868a181072a41400652cac0b7))
* **product:** add selectors for configurable and simple product perc… ([#1078](https://github.com/graycoreio/daffodil/issues/1078)) ([c16b153](https://github.com/graycoreio/daffodil/commit/c16b15393c469be6542da798968a191786658f0d))


### Bug Fixes

* **authorizenet:** incorrectly passing error message to failure action ([#1076](https://github.com/graycoreio/daffodil/issues/1076)) ([82b9290](https://github.com/graycoreio/daffodil/commit/82b929056e52c0dc4f0dee2799f9e9274b14b9ff))

### [0.11.2](https://github.com/graycoreio/daffodil/compare/v0.11.1...v0.11.2) (2020-09-22)


### Features

* **cart:** add platform agnostic payment method ID facade field ([#1065](https://github.com/graycoreio/daffodil/issues/1065)) ([dbd9463](https://github.com/graycoreio/daffodil/commit/dbd94638858749a9892320ebeb168ae8d7848417))
* **cart:** export order result guard ([#1073](https://github.com/graycoreio/daffodil/issues/1073)) ([cc697c8](https://github.com/graycoreio/daffodil/commit/cc697c8270d5e6353fa19d6387d8ab7f8ea95c9c))
* **product:** update the composite product option price and add disc… ([#1070](https://github.com/graycoreio/daffodil/issues/1070)) ([6cdf80e](https://github.com/graycoreio/daffodil/commit/6cdf80e150cc6d00855512dce4914afd193b5cdf))


### Bug Fixes

* **cart:** a null shipping total should be null instead of zero ([#1071](https://github.com/graycoreio/daffodil/issues/1071)) ([1656271](https://github.com/graycoreio/daffodil/commit/1656271732f97e9c1c4c947f9892cad612f0e3d3))
* **cart:** cart totals transformer crashes for no shipping addresses ([#1066](https://github.com/graycoreio/daffodil/issues/1066)) ([c1582ce](https://github.com/graycoreio/daffodil/commit/c1582ce28cb47ff1c67748f673992a42e087d860))
* **order:** driver errors cause effect observables to complete ([#1072](https://github.com/graycoreio/daffodil/issues/1072)) ([4ef1521](https://github.com/graycoreio/daffodil/commit/4ef15218265cc6e2b81f6608c66fc3ae585a93cc))
* **order:** wrong cart ID GraphQL variable type ([#1067](https://github.com/graycoreio/daffodil/issues/1067)) ([5007cb6](https://github.com/graycoreio/daffodil/commit/5007cb636ef0a081c9d8c805bdb7a0ef024252c4))

### [0.11.1](https://github.com/graycoreio/daffodil/compare/v0.11.0...v0.11.1) (2020-09-14)


### Features

* **cart:** add selector for whether the cart has out of stock items ([#1064](https://github.com/graycoreio/daffodil/issues/1064)) ([138fb19](https://github.com/graycoreio/daffodil/commit/138fb1962a9d2b57fe361ea1a384483de361fbd8))

## [0.11.0](https://github.com/graycoreio/daffodil/compare/v0.10.0...v0.11.0) (2020-09-07)


### ⚠ BREAKING CHANGES

* **cart, product:** stock_status is now a boolean called in_stock
* **cart, product:** cart item stock_status is now an in_stock boolean field

### Features

* **authorizenet:** add error for authorizenet config ([#1055](https://github.com/graycoreio/daffodil/issues/1055)) ([0f7bcd9](https://github.com/graycoreio/daffodil/commit/0f7bcd95ed18310e8ab2a766c70727f1a398b10a))
* **cart, product:** add in_stock field for products and cart items ([#1061](https://github.com/graycoreio/daffodil/issues/1061)) ([15a4039](https://github.com/graycoreio/daffodil/commit/15a403980f8a96e5a655fd27accacf3426972777))
* **product:** add selector for whether a composite product item is r… ([#1062](https://github.com/graycoreio/daffodil/issues/1062)) ([6509e26](https://github.com/graycoreio/daffodil/commit/6509e26152ffe445a3384c853c3bcc258655a6d3))
* **product:** default composite product item options are completely determined by the platform ([#1059](https://github.com/graycoreio/daffodil/issues/1059)) ([6e747bf](https://github.com/graycoreio/daffodil/commit/6e747bf44ec33205ab5ab246ab4af2ab3b658a1c))


### Bug Fixes

* **cart:** not all available shipping methods returned by update ([#1057](https://github.com/graycoreio/daffodil/issues/1057)) ([3559d10](https://github.com/graycoreio/daffodil/commit/3559d10657cbb2419c4ae09c0458a4b33bb98a27))

## [0.10.0](https://github.com/graycoreio/daffodil/compare/v0.9.4...v0.10.0) (2020-08-29)


### ⚠ BREAKING CHANGES

* **product:** selectCompositeProductAppliedOptions selector now returns Dictionary<DaffCompositeProductItemOption>

### Features

* **cart:** add extra_attributes field on cart model ([#1052](https://github.com/graycoreio/daffodil/issues/1052)) ([ead9eca](https://github.com/graycoreio/daffodil/commit/ead9ecaa516a517e59e5fa8a4158f9cdf535c70d))
* **product:** composite product applied options selector returns  a dictionary of DaffCompositeProductItemOption instead of DaffCompositeProductEntityItem ([#1051](https://github.com/graycoreio/daffodil/issues/1051)) ([1fed7dc](https://github.com/graycoreio/daffodil/commit/1fed7dc36945cf243f05898fe465fb5cb5804a22))


### Bug Fixes

* **cart:** fix bug where a null value caused a crash ([#1053](https://github.com/graycoreio/daffodil/issues/1053)) ([0db25d8](https://github.com/graycoreio/daffodil/commit/0db25d8b04d8c8f32ac8082157b53997b599f1f9))

### [0.9.4](https://github.com/graycoreio/daffodil/compare/v0.9.3...v0.9.4) (2020-08-28)


### Features

* **cart:** add a cart total for shipping cost ([#1049](https://github.com/graycoreio/daffodil/issues/1049)) ([09ca283](https://github.com/graycoreio/daffodil/commit/09ca2835da54fa5de19c50ba01ecd75b348aed98))
* **cart:** make cart totals individually selectable ([#1048](https://github.com/graycoreio/daffodil/issues/1048)) ([9f5a33c](https://github.com/graycoreio/daffodil/commit/9f5a33c447a5e58c97e174f5b30cac221429fc9a))
* **cart:** provide extra cart fragments ([#1050](https://github.com/graycoreio/daffodil/issues/1050)) ([2f8bc20](https://github.com/graycoreio/daffodil/commit/2f8bc20dadcc88e5e211c51561614968ce64abe6))
* **core:** add GraphQL fragment utils ([#1045](https://github.com/graycoreio/daffodil/issues/1045)) ([d4663aa](https://github.com/graycoreio/daffodil/commit/d4663aaf8db3a9fd365431f5e01c768718a616f7))
* **product:** make composite product items have a default option if … ([#1046](https://github.com/graycoreio/daffodil/issues/1046)) ([2b9c37d](https://github.com/graycoreio/daffodil/commit/2b9c37d699e752a514fda9290ef475a1864ff185))


### Bug Fixes

* **cart:** fix bug where selected shipping methods were not included … ([#1047](https://github.com/graycoreio/daffodil/issues/1047)) ([74e1e81](https://github.com/graycoreio/daffodil/commit/74e1e818d63969cda8910ca2c34be23143d983a3))

### [0.9.3](https://github.com/graycoreio/daffodil/compare/v0.9.2...v0.9.3) (2020-08-24)


### Features

* **product:** stock_status data is now available for composite product item options ([#1044](https://github.com/graycoreio/daffodil/issues/1044)) ([c371e63](https://github.com/graycoreio/daffodil/commit/c371e63e6a76ae9e81f3ea6175eddce59275a860))

### [0.9.2](https://github.com/graycoreio/daffodil/compare/v0.9.1...v0.9.2) (2020-08-22)


### Features

* **cart:** add cart item out of stock state ([#1043](https://github.com/graycoreio/daffodil/issues/1043)) ([7dc34e6](https://github.com/graycoreio/daffodil/commit/7dc34e6b23d0aa8040c9b8cbb88fd92062d95137))
* **cart:** add stock_status field to cart items ([#1041](https://github.com/graycoreio/daffodil/issues/1041)) ([2a6d411](https://github.com/graycoreio/daffodil/commit/2a6d411bc37901a49cc6ae5e72b96bb363da7740))
* **product:** add out_of_stock state for products ([#1042](https://github.com/graycoreio/daffodil/issues/1042)) ([7af5f24](https://github.com/graycoreio/daffodil/commit/7af5f2489fa3c9293ed9f4db787809497d739c84))
* **product:** add stock_status field to product model ([#1039](https://github.com/graycoreio/daffodil/issues/1039)) ([2d746d7](https://github.com/graycoreio/daffodil/commit/2d746d72d1bf63f63ccb94095040f0232b105039))

### [0.9.1](https://github.com/graycoreio/daffodil/compare/v0.9.0...v0.9.1) (2020-08-20)


### Features

* **authorizenet:** add state for verifying acceptJs has loaded ([#965](https://github.com/graycoreio/daffodil/issues/965)) ([efc24ae](https://github.com/graycoreio/daffodil/commit/efc24ae0c87ed5d3ca8475eef5e1dcb671370aad))
* **cart:** export all cart item input models ([#1035](https://github.com/graycoreio/daffodil/issues/1035)) ([188eeb7](https://github.com/graycoreio/daffodil/commit/188eeb79aa6d2e5fed98930dafeb907e3c4bbf2c))
* **core:** add backoff operator ([#965](https://github.com/graycoreio/daffodil/issues/965)) ([e76b58d](https://github.com/graycoreio/daffodil/commit/e76b58d31a822011a977a64a9aa65bbb5684e589))
* **core:** add ID type ([#1034](https://github.com/graycoreio/daffodil/issues/1034)) ([62ef210](https://github.com/graycoreio/daffodil/commit/62ef21034a0cfe6e0bfc24a3146c44dfc81541ad))
* **core:** create memory storage service ([#1036](https://github.com/graycoreio/daffodil/issues/1036)) ([95fbdea](https://github.com/graycoreio/daffodil/commit/95fbdea9f0f9ec41f51522874949d9c7a791873b))
* **core:** create noop storage service ([#1032](https://github.com/graycoreio/daffodil/issues/1032)) ([bba42bc](https://github.com/graycoreio/daffodil/commit/bba42bccf39b94a35da20f25dc340df7561eb30b))
* **design:** add theme and theme-contrast styles to button ([#1038](https://github.com/graycoreio/daffodil/issues/1038)) ([7f22a4b](https://github.com/graycoreio/daffodil/commit/7f22a4b5a96428183823832ca784ba439d7f11a8))
* **product:** add facade field for hasDiscount ([#1037](https://github.com/graycoreio/daffodil/issues/1037)) ([e14ec27](https://github.com/graycoreio/daffodil/commit/e14ec27de2c1a2c34f6297d834c3f563715205f8))

## [0.9.0](https://github.com/graycoreio/daffodil/compare/v0.8.4...v0.9.0) (2020-08-14)


### ⚠ BREAKING CHANGES

* **order:** - addresses field has been removed
- order addresses selector has been removed
- order addresses facade field has been removed
* **cart:** DaffCompositeCartItemOption model has changed to DaffCompositeCartItemInputOption to avoid a naming collision

### Features

* **cart:** add cart item entities state ([#1020](https://github.com/graycoreio/daffodil/issues/1020)) ([94a489e](https://github.com/graycoreio/daffodil/commit/94a489efdddd0826efdbffe4c658ab4638bc6252))
* **cart:** add magento cart item transformers and factories for different types ([#1025](https://github.com/graycoreio/daffodil/issues/1025)) ([bd25b36](https://github.com/graycoreio/daffodil/commit/bd25b3664fb6328f3123e2e3c23e8a203fa09540))
* **cart:** add models and queries for configurable and composite cart items ([#1024](https://github.com/graycoreio/daffodil/issues/1024)) ([71b49df](https://github.com/graycoreio/daffodil/commit/71b49df305612f2bf26e665cef2231152ad32814))
* **cart:** add state for different cart item type attributes ([#1027](https://github.com/graycoreio/daffodil/issues/1027)) ([7e68415](https://github.com/graycoreio/daffodil/commit/7e6841515d558d2c302b9e54d718b661e477956a))
* **cart:** change the DaffCompositeCartItemOption model to DaffCompositeCartItemInputOption ([#1026](https://github.com/graycoreio/daffodil/issues/1026)) ([cc29f6e](https://github.com/graycoreio/daffodil/commit/cc29f6e7e5fbccbad2c2f737295c2878c4189e7a))
* **cart:** listen for resolve success and failure in cart guards ([#1028](https://github.com/graycoreio/daffodil/issues/1028)) ([8ef16dc](https://github.com/graycoreio/daffodil/commit/8ef16dc1442212ef2578773d61e626ddf3b94acb))
* **cart:** wait for cart resolution in cart guards ([#1023](https://github.com/graycoreio/daffodil/issues/1023)) ([1a65ae0](https://github.com/graycoreio/daffodil/commit/1a65ae0412d383a48b130ba7604cf5ee8392953b))
* **order:** separate billing and shipping address ([#1033](https://github.com/graycoreio/daffodil/issues/1033)) ([65da510](https://github.com/graycoreio/daffodil/commit/65da510ff0af4a284bec040dd43ddc0abd175447))
* **order:** update cart ID input key ([#1029](https://github.com/graycoreio/daffodil/issues/1029)) ([85f7cda](https://github.com/graycoreio/daffodil/commit/85f7cda33eaaa5d7d6f491b81964a3ee8f84047a))
* **order:** use magento order_number for daffodil order ID ([#1031](https://github.com/graycoreio/daffodil/issues/1031)) ([0a7a380](https://github.com/graycoreio/daffodil/commit/0a7a380fd65ffc23ddd1acc9da1964686ab2d85e))

### [0.8.4](https://github.com/graycoreio/daffodil/compare/v0.8.3...v0.8.4) (2020-08-06)


### Features

* **order:** add facade methods for order subfields ([#1021](https://github.com/graycoreio/daffodil/issues/1021)) ([40100c9](https://github.com/graycoreio/daffodil/commit/40100c9e5fdbb1f8fc535479e8fa2edbbfe8e840))

### [0.8.3](https://github.com/graycoreio/daffodil/compare/v0.8.2...v0.8.3) (2020-08-03)


### Features

* **order:** add order subfield selectors ([#1018](https://github.com/graycoreio/daffodil/issues/1018)) ([c36f7a7](https://github.com/graycoreio/daffodil/commit/c36f7a75c0bd31edf04fe96971c6894c7c617406))


### Bug Fixes

* **authorizenet:** export a needed injection token ([#1019](https://github.com/graycoreio/daffodil/issues/1019)) ([284cc85](https://github.com/graycoreio/daffodil/commit/284cc852c35087f194e5dfdc716aaaaf534a06fb))
* **cart:** set payment method with billing has high query complexity ([#1016](https://github.com/graycoreio/daffodil/issues/1016)) ([3f99aa9](https://github.com/graycoreio/daffodil/commit/3f99aa964412ecfecdea4d48536a3bab1f00b86a))

### [0.8.2](https://github.com/graycoreio/daffodil/compare/v0.8.1...v0.8.2) (2020-07-29)


### Features

* **product:** add ranged price selectors for composite products ([#1012](https://github.com/graycoreio/daffodil/issues/1012)) ([cfe758c](https://github.com/graycoreio/daffodil/commit/cfe758cf8d2b0b3edc02745e5e83e4a988dbdcb1))


### Bug Fixes

* **authorizenet:** cannot read code of undefined on driver error ([#1014](https://github.com/graycoreio/daffodil/issues/1014)) ([b1fdb0c](https://github.com/graycoreio/daffodil/commit/b1fdb0c902678f9c6ec288c84187e0889b00c009))
* **cart:** driver failures cause effect obsevables to complete ([#1013](https://github.com/graycoreio/daffodil/issues/1013)) ([f98a759](https://github.com/graycoreio/daffodil/commit/f98a7596365a8664fa3cb1b381fad8413b6b0ca0))

### [0.8.1](https://github.com/graycoreio/daffodil/compare/v0.8.0...v0.8.1) (2020-07-24)


### Features

* **cart:** add isBillingSameAsShipping selector ([#1011](https://github.com/graycoreio/daffodil/issues/1011)) ([1f10da4](https://github.com/graycoreio/daffodil/commit/1f10da4c582920c5b8b6462e69894058a8ece1c3))
* **geography:** add personal address and address comparators ([#1010](https://github.com/graycoreio/daffodil/issues/1010)) ([de575b6](https://github.com/graycoreio/daffodil/commit/de575b6c21beae81f659566a3cd77ec5d7f76aa1))
* **order:** add placed order selectors and guard ([#1009](https://github.com/graycoreio/daffodil/issues/1009)) ([c32091c](https://github.com/graycoreio/daffodil/commit/c32091cb8a503708f47f9b7499054826d855295f))


### Bug Fixes

* **cart:** Magento cart address query fails from parameter type and complexity ([#1007](https://github.com/graycoreio/daffodil/issues/1007)) ([86569e3](https://github.com/graycoreio/daffodil/commit/86569e30df6bd8c8253c06cd6f60e5aedb5d4e06))

## [0.8.0](https://github.com/graycoreio/daffodil/compare/v0.7.2...v0.8.0) (2020-07-20)


### ⚠ BREAKING CHANGES

* **cart:** the DaffCartItemAdd for composite products has changed

### Features

* **cart:** change DaffCartItemAdd payload for composite products ([#1006](https://github.com/graycoreio/daffodil/issues/1006)) ([e49b1e4](https://github.com/graycoreio/daffodil/commit/e49b1e4d638fa307015a56d0dd97f202d6d46541))
* **cart:** create new cart after successful order ([#993](https://github.com/graycoreio/daffodil/issues/993)) ([17f7563](https://github.com/graycoreio/daffodil/commit/17f7563b7decf879602902fc930b6c7b71e795b9))
* **cart:** provide in-memory cart address driver ([#1004](https://github.com/graycoreio/daffodil/issues/1004)) ([f63d583](https://github.com/graycoreio/daffodil/commit/f63d583a23af605eb24e8ab9b2ef9cd6ee3ae9af))
* **design:** add optional components to modal for consistent modal UI ([#921](https://github.com/graycoreio/daffodil/issues/921)) ([489f9a9](https://github.com/graycoreio/daffodil/commit/489f9a9638465248edb39f146f731dc15d99496a))
* **order:** pass cart ID into state layer ([#996](https://github.com/graycoreio/daffodil/issues/996)) ([f84ecc6](https://github.com/graycoreio/daffodil/commit/f84ecc6c97cfc60f8207484447cb3d910dbc2240))
* **product:** add qty to composite product option state ([#1005](https://github.com/graycoreio/daffodil/issues/1005)) ([e20e3a5](https://github.com/graycoreio/daffodil/commit/e20e3a53a7e3e440bcccb9f058c47859e6e0e1de))
* **product:** add state for composite products ([#986](https://github.com/graycoreio/daffodil/issues/986)) ([817e146](https://github.com/graycoreio/daffodil/commit/817e146ffb68ea2f8bf58453afd4d8c86a2c82f0))

### [0.7.2](https://github.com/graycoreio/daffodil/compare/v0.7.1...v0.7.2) (2020-07-14)


### Features

* **cart:** provide for cart address service in magento driver ([#1002](https://github.com/graycoreio/daffodil/issues/1002)) ([18a8dca](https://github.com/graycoreio/daffodil/commit/18a8dca9410175191c30b12e15f34c9d43158c23))

### [0.7.1](https://github.com/graycoreio/daffodil/compare/v0.7.0...v0.7.1) (2020-07-14)


### Features

* **authorizenet:** use the @daffodil/cart CartPaymentUpdateWithBilli… ([#988](https://github.com/graycoreio/daffodil/issues/988)) ([4586ac6](https://github.com/graycoreio/daffodil/commit/4586ac699b541ee19b512e4a05119e77b985b2e6))
* **cart:** add cart address driver ([#977](https://github.com/graycoreio/daffodil/issues/977)) ([02e6239](https://github.com/graycoreio/daffodil/commit/02e623920056966bdf66cbec4ec8307bef2e6669))
* **cart:** add cart address testing drivers ([#983](https://github.com/graycoreio/daffodil/issues/983)) ([b7e6a3e](https://github.com/graycoreio/daffodil/commit/b7e6a3e3a75935790208ebc82c583906304b0261))
* **cart:** add cart address update state ([#954](https://github.com/graycoreio/daffodil/issues/954)) ([7ec3edf](https://github.com/graycoreio/daffodil/commit/7ec3edf897ab3a4ef719ec36d6dc253d1e0441be))
* **cart:** add order result guard ([#999](https://github.com/graycoreio/daffodil/issues/999)) ([fa9ae6a](https://github.com/graycoreio/daffodil/commit/fa9ae6a498df4501e2e2384732114b0c633839dd))
* **cart:** add payment updateWithBilling state ([#984](https://github.com/graycoreio/daffodil/issues/984)) ([1adae8a](https://github.com/graycoreio/daffodil/commit/1adae8a62a01f9a8c722413d92bdb1caee77aea5))
* **cart:** add updateWithBilling method to payment driver ([#981](https://github.com/graycoreio/daffodil/issues/981)) ([2589e2a](https://github.com/graycoreio/daffodil/commit/2589e2a1a4a1cf318dc61a5818cc678a97915406))
* **cart:** store cartId in order result ([#995](https://github.com/graycoreio/daffodil/issues/995)) ([9ae460e](https://github.com/graycoreio/daffodil/commit/9ae460ecb01fd4bde275111780d583e4a0eb2c72))
* **cart:** update email with Magento shipping address update ([#976](https://github.com/graycoreio/daffodil/issues/976)) ([cb4dcd3](https://github.com/graycoreio/daffodil/commit/cb4dcd35029187e95201810cbd09ec2d8eaac5b4))
* **core:** add long arithmetic functions ([#997](https://github.com/graycoreio/daffodil/issues/997)) ([a99ed27](https://github.com/graycoreio/daffodil/commit/a99ed277d4b2d8ecadf97129fc2e8a7efc70ad3d))
* **design:** add `daff-nav-list` variant of a list ([#891](https://github.com/graycoreio/daffodil/issues/891)) ([941c2c4](https://github.com/graycoreio/daffodil/commit/941c2c4f3f5e7080f22323e8ebba0c386ac2516f))
* **design:** add accesibility role to DaffListItemComponent ([#964](https://github.com/graycoreio/daffodil/issues/964)) ([ad31dbb](https://github.com/graycoreio/daffodil/commit/ad31dbb96befe53160d55c75400cd51bda6e1850))
* **design:** add focus styles to button and update general styles ([#973](https://github.com/graycoreio/daffodil/issues/973)) ([5d37747](https://github.com/graycoreio/daffodil/commit/5d37747e578ad6b63de8ad5a43f3e8e4fbc6fbef))
* **design:** add statusable as a core interface ([#982](https://github.com/graycoreio/daffodil/issues/982)) ([226b80d](https://github.com/graycoreio/daffodil/commit/226b80d7db4341340f6515edede6183f2e867ac8))
* **design:** added new modes, focus, and escape key closing to sidebar ([#949](https://github.com/graycoreio/daffodil/issues/949)) ([b5745df](https://github.com/graycoreio/daffodil/commit/b5745df94dccc905e82214e6702804f231f912b5))
* **design:** implement sizeable interface on the button component ([#903](https://github.com/graycoreio/daffodil/issues/903)) ([3d4d778](https://github.com/graycoreio/daffodil/commit/3d4d778b8b644e27099bf46bdaaa1140d4a038bc))
* **design:** update list-item to work with anchor tags ([#990](https://github.com/graycoreio/daffodil/issues/990)) ([fb1658d](https://github.com/graycoreio/daffodil/commit/fb1658d795465ceacb8e043e7cb130a293e103f6))
* **order:** add Magento guest orders driver ([#972](https://github.com/graycoreio/daffodil/issues/972)) ([cfee4c9](https://github.com/graycoreio/daffodil/commit/cfee4c9bea7724faeac20fc6a54359bedc0d5f43))
* **order:** support guest orders in effects ([#975](https://github.com/graycoreio/daffodil/issues/975)) ([a837d2b](https://github.com/graycoreio/daffodil/commit/a837d2be8d06921c7a244629f1fb5b500020ab61))
* **product:** add is_default to the composite product model ([#980](https://github.com/graycoreio/daffodil/issues/980)) ([d7eeab8](https://github.com/graycoreio/daffodil/commit/d7eeab80517a0d18e79519307f1a2bdf686932c4))


### Bug Fixes

* **all:** helper function returns false on ID of 0 ([#979](https://github.com/graycoreio/daffodil/issues/979)) ([27caa4e](https://github.com/graycoreio/daffodil/commit/27caa4ef185cd1ad5081b932d0ac78124a987297))
* **cart:** fix bug where DaffCartStorageFailure was passed the wrong argument ([#1001](https://github.com/graycoreio/daffodil/issues/1001)) ([db48693](https://github.com/graycoreio/daffodil/commit/db48693f75c6595e1ac7105b1abc1921109fd33b))
* **cart:** trigger load state on DaffCartResolve action ([#992](https://github.com/graycoreio/daffodil/issues/992)) ([8648496](https://github.com/graycoreio/daffodil/commit/8648496bc32105e9b15eaf059e88562072aa30b2))
* **design-land:** update component names in list imports ([#991](https://github.com/graycoreio/daffodil/issues/991)) ([7545b24](https://github.com/graycoreio/daffodil/commit/7545b24fe73364c9afccb94098fb69e7db17ba63))
* **product:** fix bug where the wrong magento field was assign to a Daffodil object ([#978](https://github.com/graycoreio/daffodil/issues/978)) ([d895b23](https://github.com/graycoreio/daffodil/commit/d895b2317b3402f2ddbd5db084de6bff200a73a3))

## [0.7.0](https://github.com/graycoreio/daffodil/compare/v0.6.5...v0.7.0) (2020-07-02)


### ⚠ BREAKING CHANGES

* **order:** adds a peer dep

### Features

* **cart:** update the cart payment with the payment package-specific info object ([#969](https://github.com/graycoreio/daffodil/issues/969)) ([f21f97b](https://github.com/graycoreio/daffodil/commit/f21f97b9828843707574ac60646341eb98c379b9))
* **geography:** add optional fields to address factories ([#966](https://github.com/graycoreio/daffodil/issues/966)) ([064eed7](https://github.com/graycoreio/daffodil/commit/064eed7df2040ab3a8feb1b554fa6e76bc470a14))
* **order:** add magento queries and models for guest orders ([#968](https://github.com/graycoreio/daffodil/issues/968)) ([7441c55](https://github.com/graycoreio/daffodil/commit/7441c554f68117c9ca73c9694a4f2ae4a2e8f762))
* **order:** add optional cartId parameters to support guest orders ([#967](https://github.com/graycoreio/daffodil/issues/967)) ([64c8419](https://github.com/graycoreio/daffodil/commit/64c84198c00a044d7ffed8a48ecc27168d89feac))
* **order:** add order not found error ([#971](https://github.com/graycoreio/daffodil/issues/971)) ([8da48b8](https://github.com/graycoreio/daffodil/commit/8da48b8c80839b93cb0c4bdea52442c020c21fc4))


### Bug Fixes

* **cart:** fix bug where an invalid cart id would result in unresolvable errors ([#970](https://github.com/graycoreio/daffodil/issues/970)) ([bd6db11](https://github.com/graycoreio/daffodil/commit/bd6db11666fa7e079b4ce38fd8a772cd92c61fcc))

### [0.6.5](https://github.com/graycoreio/daffodil/compare/v0.6.4...v0.6.5) (2020-07-01)


### Features

* **core:** add substream operator ([#960](https://github.com/graycoreio/daffodil/issues/960)) ([a28325d](https://github.com/graycoreio/daffodil/commit/a28325d0d644e9b00005afc9cf48849416513581))


### Bug Fixes

* **cart:** hasPaymentMethod returns false for empty string method ([#958](https://github.com/graycoreio/daffodil/issues/958)) ([2542813](https://github.com/graycoreio/daffodil/commit/2542813486e7908b41ff34b136825d81aff803f0))

### [0.6.4](https://github.com/graycoreio/daffodil/compare/v0.6.3...v0.6.4) (2020-06-26)


### Features

* **authorizenet:** export all actions from authorizenet ([#959](https://github.com/graycoreio/daffodil/issues/959)) ([3c76454](https://github.com/graycoreio/daffodil/commit/3c764549b113be7e4cf85ae94255e2c4bb412c3d))
* **design:** added checkbox examples ([#915](https://github.com/graycoreio/daffodil/issues/915)) ([100e5dd](https://github.com/graycoreio/daffodil/commit/100e5ddcee6c5b15d09ad01a6a13cf39ab974064))

### [0.6.3](https://github.com/graycoreio/daffodil/compare/v0.6.2...v0.6.3) (2020-06-25)


### Features

* **authorizenet:** add inmemory and testing drivers ([#956](https://github.com/graycoreio/daffodil/issues/956)) ([19a6cc6](https://github.com/graycoreio/daffodil/commit/19a6cc6446457a9d116145d9da1f25c403be04e9))
* **authorizenet:** overhaul the authorizenet module to be platform agnostic and useable with @daffodil/cart ([#952](https://github.com/graycoreio/daffodil/issues/952)) ([8062c47](https://github.com/graycoreio/daffodil/commit/8062c478c6af3fac9bb551564cf96a22ebb12593))
* **cart:** add an action that payment modules can use to add payment info ([#951](https://github.com/graycoreio/daffodil/issues/951)) ([9be0c51](https://github.com/graycoreio/daffodil/commit/9be0c51f4218cf461fface5d920ccd1c8c0847e5))

### [0.6.2](https://github.com/graycoreio/daffodil/compare/v0.6.1...v0.6.2) (2020-06-18)


### Features

* **cart:** add default urls for guard injection token urls ([#947](https://github.com/graycoreio/daffodil/issues/947)) ([fc1a5c1](https://github.com/graycoreio/daffodil/commit/fc1a5c1b39ddc9a1f70d4f091d4fe5cdff9801fe))
* **cart:** add testing drivers ([#946](https://github.com/graycoreio/daffodil/issues/946)) ([7d89739](https://github.com/graycoreio/daffodil/commit/7d89739a9585a58cecf1bdba6e8667c7bf900566))
* **product:** add facade fields for configurable product discounts ([#950](https://github.com/graycoreio/daffodil/issues/950)) ([d311995](https://github.com/graycoreio/daffodil/commit/d311995db08e5cd60e2c7487a7639c53926937fb))

### [0.6.1](https://github.com/graycoreio/daffodil/compare/v0.6.0...v0.6.1) (2020-06-11)


### Features

* **cart:** add redirect url tokens for guards ([#939](https://github.com/graycoreio/daffodil/issues/939)) ([5ac9607](https://github.com/graycoreio/daffodil/commit/5ac9607ebf172853e509a6c294365251105712a1))
* **cart:** add resolvers for loading the cart and checking if the cart is empty before navigation occurs ([9e378c4](https://github.com/graycoreio/daffodil/commit/9e378c4fe965a588d4ec9a1244c6d58e2d14f649))
* **cart:** include cart coupon effects ([e92f37a](https://github.com/graycoreio/daffodil/commit/e92f37ae509d9135d46de3f9b3cc7acd7f1b1e9c))
* **cart:** transform region to string for cart address input ([27b0784](https://github.com/graycoreio/daffodil/commit/27b0784d88fbff3d25db54c95ca5ef40406a755f))
* **design-land:** added card-examples using the code preview component ([#894](https://github.com/graycoreio/daffodil/issues/894)) ([bce31f9](https://github.com/graycoreio/daffodil/commit/bce31f9e15c557aaa9bcc5b6e97a1c3c3e28aa38))
* **geography:** deprecate region_id ([5fa7823](https://github.com/graycoreio/daffodil/commit/5fa7823fbe328d5ea866849d9d47e9af69c43dc2))
* **product:** expose the selectMatchingVariants selector to the DaffConfigurableProductFacade ([#940](https://github.com/graycoreio/daffodil/issues/940)) ([a786f75](https://github.com/graycoreio/daffodil/commit/a786f7576ded5f113cbd7f8715b7f4dc0fc6a978))


### Bug Fixes

* **cart:** incorrect coupon action names ([404e01d](https://github.com/graycoreio/daffodil/commit/404e01d73eec1b2044acf3e71b253fe295aed765))

## [0.6.0](https://github.com/graycoreio/daffodil/compare/v0.5.6...v0.6.0) (2020-06-08)


### ⚠ BREAKING CHANGES

* **product:** the getPrice function on the DaffConfigurableProductFacade is now split into getMinimumPrice, getMaximumPrice, and isPriceRanged.

### Features

* **cart:** add empty cart guard ([#933](https://github.com/graycoreio/daffodil/issues/933)) ([959e70f](https://github.com/graycoreio/daffodil/commit/959e70f343823935d67eb870171ea45923ddd584))
* **geography:** track the fully loaded countries in state ([#931](https://github.com/graycoreio/daffodil/issues/931)) ([122e537](https://github.com/graycoreio/daffodil/commit/122e53784d8784153bd6e9105895f4fe04c3258b))
* **product:** change configurable product prices to be a min and max price ([#932](https://github.com/graycoreio/daffodil/issues/932)) ([fe1069b](https://github.com/graycoreio/daffodil/commit/fe1069b82e2bde9a1937be634989ee3011d4f0d0))


### Bug Fixes

* **navigation:** add action argument to mock facade dispatch function ([226b34e](https://github.com/graycoreio/daffodil/commit/226b34e2ed94421c221a0d7119527d1b7a8edc27))
* **product:** add action argument to mock facade dispatch function ([58a2c94](https://github.com/graycoreio/daffodil/commit/58a2c94f5178370aa888d2e10d6ef7bf336b75e0))
* **product:** export all mocked product facades ([394e1b5](https://github.com/graycoreio/daffodil/commit/394e1b5cf506c3c41041c12a18956a7683896f69))

### [0.5.6](https://github.com/graycoreio/daffodil/compare/v0.5.5...v0.5.6) (2020-06-03)


### Features

* **cart:** add angular guards for usage in checkout ([#926](https://github.com/graycoreio/daffodil/issues/926)) ([5be33ce](https://github.com/graycoreio/daffodil/commit/5be33cee6721e4d7ad91c7d7e8b50e25db5280ab))
* **cart:** add billing and shipping address in-memory backends ([#906](https://github.com/graycoreio/daffodil/issues/906)) ([bea8769](https://github.com/graycoreio/daffodil/commit/bea8769e182b9145ca5752058a16586e28395234))
* **cart:** add canPlaceOrder selector ([#908](https://github.com/graycoreio/daffodil/issues/908)) ([fe06c8c](https://github.com/graycoreio/daffodil/commit/fe06c8ccfae35a2f724379be2a60e8abc006cd30))
* **cart:** add payment and shipping information in-memory backends ([#922](https://github.com/graycoreio/daffodil/issues/922)) ([ccf0fb7](https://github.com/graycoreio/daffodil/commit/ccf0fb7935179094f906b8bc0b9d1e8b5c66a088))
* **cart:** add resolver action and effect for loading the cart ([#923](https://github.com/graycoreio/daffodil/issues/923)) ([ddf84a4](https://github.com/graycoreio/daffodil/commit/ddf84a42693be5d801518554c27b3ccf1a9b8a9a))
* **cart:** add shipping and payment methods in-memory backends ([#917](https://github.com/graycoreio/daffodil/issues/917)) ([296ecca](https://github.com/graycoreio/daffodil/commit/296ecca4edcdb889a4f12778736374c098b9c946))
* **design:** add Code Preview Component for demoing components in design-land ([#892](https://github.com/graycoreio/daffodil/issues/892)) ([cf0bb70](https://github.com/graycoreio/daffodil/commit/cf0bb7050f6ac01b8d42e3aca0c3a7fd9ed733a5))
* **design:** added article component examples ([#893](https://github.com/graycoreio/daffodil/issues/893)) ([4021c4e](https://github.com/graycoreio/daffodil/commit/4021c4e0f3952a6eb5d3e3b12122bce9ae00e702))
* **design:** created DaffCheckbox and DaffCheckboxSet components ([#864](https://github.com/graycoreio/daffodil/issues/864)) ([b21e47e](https://github.com/graycoreio/daffodil/commit/b21e47e038cb361d6db502f3318a56297b93684e))
* **design:** initialized DaffRadioComponent ([#815](https://github.com/graycoreio/daffodil/issues/815)) ([86b0894](https://github.com/graycoreio/daffodil/commit/86b089411e106c467bd42c88678a2e6f7b029b5e))
* **design:** move design examples docs gen to libs/design ([#918](https://github.com/graycoreio/daffodil/issues/918)) ([ef5c780](https://github.com/graycoreio/daffodil/commit/ef5c7808764f0fffedfe5b947c258e6e8e1fc3a5))
* **design:** update container to use size interface ([#897](https://github.com/graycoreio/daffodil/issues/897)) ([5f8a8b1](https://github.com/graycoreio/daffodil/commit/5f8a8b13f20175ee60b9771f8b0b816e379c4a23))
* **design:** use highlightjs at build time during docs gen ([#919](https://github.com/graycoreio/daffodil/issues/919)) ([0d5792e](https://github.com/graycoreio/daffodil/commit/0d5792e6e6c6f35c1d7259d4eed4318cc686e4ac))
* **geography:** add testing driver ([#911](https://github.com/graycoreio/daffodil/issues/911)) ([85b3b37](https://github.com/graycoreio/daffodil/commit/85b3b37d73b43bf1ee0246201d02be9f395b4a61))
* **order:** add facade ([#927](https://github.com/graycoreio/daffodil/issues/927)) ([bc1c67b](https://github.com/graycoreio/daffodil/commit/bc1c67b3c3f3a4dbc5509165595ade565682bf3f))
* **order:** add in-memory driver and backend ([#909](https://github.com/graycoreio/daffodil/issues/909)) ([9f390db](https://github.com/graycoreio/daffodil/commit/9f390dbbe379995767588ad6665ed90d7055637b))
* **order:** add reducers ([#881](https://github.com/graycoreio/daffodil/issues/881)) ([588492b](https://github.com/graycoreio/daffodil/commit/588492ba8aaee8ab632f0c4e9aecd0b0a352e6e8))
* **order:** add selectors ([#925](https://github.com/graycoreio/daffodil/issues/925)) ([0e56603](https://github.com/graycoreio/daffodil/commit/0e56603439b94990c2ca6c4655374d0c2eba99e3))
* **order:** add testing driver ([#912](https://github.com/graycoreio/daffodil/issues/912)) ([782bbf5](https://github.com/graycoreio/daffodil/commit/782bbf5d079368e657276b7da1606ebcb8ac34aa))
* **product:** Add configurable product selectors and facade ([#887](https://github.com/graycoreio/daffodil/issues/887)) ([b22dd1c](https://github.com/graycoreio/daffodil/commit/b22dd1cb5160af4ad240553225b5af0efa2de8e3))
* **product:** change the type of DaffProduct.price to number ([#898](https://github.com/graycoreio/daffodil/issues/898)) ([1e28dc6](https://github.com/graycoreio/daffodil/commit/1e28dc6e831777f07269b9fe15dec8a5cf9e517e))
* **product:** cover edge cases for configurable product state ([#914](https://github.com/graycoreio/daffodil/issues/914)) ([3b0d47a](https://github.com/graycoreio/daffodil/commit/3b0d47aaf65a052f362c4a0bc000e7acdc261c4b))

### [0.5.5](https://github.com/graycoreio/daffodil/compare/v0.5.4...v0.5.5) (2020-05-21)


### Features

* **product:** add discount field to DaffProduct ([#905](https://github.com/graycoreio/daffodil/issues/905)) ([d92b07c](https://github.com/graycoreio/daffodil/commit/d92b07cc309644c92d5ae21b31db35f0e0d6d2ef))

### [0.5.4](https://github.com/graycoreio/daffodil/compare/v0.5.3...v0.5.4) (2020-05-19)


### Bug Fixes

* **product:** fix configurable product query ([#904](https://github.com/graycoreio/daffodil/issues/904)) ([f258560](https://github.com/graycoreio/daffodil/commit/f25856080c2b9eeb1be5e07b2224470129503910))

### [0.5.3](https://github.com/graycoreio/daffodil/compare/v0.5.2...v0.5.3) (2020-05-19)


### Features

* **cart:** add selector for cart item discounted total ([#900](https://github.com/graycoreio/daffodil/issues/900)) ([5a5b65a](https://github.com/graycoreio/daffodil/commit/5a5b65a829381aa470ce58b8ebd77451b4b5d1ae))
* **design:** add sizeable as a core interface ([#896](https://github.com/graycoreio/daffodil/issues/896)) ([20b5b39](https://github.com/graycoreio/daffodil/commit/20b5b39a357eb21d0c4d18423b70e318f054e3b0))
* **geography:** add country and subdivision selectors ([#902](https://github.com/graycoreio/daffodil/issues/902)) ([674c09a](https://github.com/graycoreio/daffodil/commit/674c09a41b56cc1deb1ecb2bc059b5292355cbb1))
* **order:** add effects for loading and listing orders ([#899](https://github.com/graycoreio/daffodil/issues/899)) ([8e28e29](https://github.com/graycoreio/daffodil/commit/8e28e290858dcddd94b7bb7c7ca319f515e88f58))

### [0.5.2](https://github.com/graycoreio/daffodil/compare/v0.5.1...v0.5.2) (2020-05-15)


### Bug Fixes

* **product:** fix magento configurable product query ([#895](https://github.com/graycoreio/daffodil/issues/895)) ([3e1528d](https://github.com/graycoreio/daffodil/commit/3e1528da11266e11751f3299756cfe6afcb6f485))

### [0.5.1](https://github.com/graycoreio/daffodil/compare/v0.5.0...v0.5.1) (2020-05-14)


### Features

* **cart:** add coupon in-memory driver and backend ([#886](https://github.com/graycoreio/daffodil/issues/886)) ([5bcc80c](https://github.com/graycoreio/daffodil/commit/5bcc80c6fad7e87eb2c8005a8852ccd03d53d34b))
* **cart:** add order in-memory driver ([#880](https://github.com/graycoreio/daffodil/issues/880)) ([085bcc0](https://github.com/graycoreio/daffodil/commit/085bcc0f7b290e1a73ccde357e279e26f9a698e0))
* **cart:** implement adding configurable products to cart ([#877](https://github.com/graycoreio/daffodil/issues/877)) ([a537365](https://github.com/graycoreio/daffodil/commit/a53736538744d0b585e28ccdda25a1aeb2de7df1))
* **checkout:** deprecate checkout/order ([#868](https://github.com/graycoreio/daffodil/issues/868)) ([3b75e0c](https://github.com/graycoreio/daffodil/commit/3b75e0c75158a33fec1d447e64823684625b8bb3))
* **demo:** add auth module ([#866](https://github.com/graycoreio/daffodil/issues/866)) ([38de3fd](https://github.com/graycoreio/daffodil/commit/38de3fdab094cb55cc1e234fbf4f3f63737e20aa))
* **geography:** add in-memory driver and backend ([#888](https://github.com/graycoreio/daffodil/issues/888)) ([ef996cb](https://github.com/graycoreio/daffodil/commit/ef996cbeebdd273046bd30f0aa9fd6f2c834612b))
* **geography:** add personal address factory ([#873](https://github.com/graycoreio/daffodil/issues/873)) ([1e48abd](https://github.com/graycoreio/daffodil/commit/1e48abde35b1cdc81b7945e10c10c348f7a05288))
* **order:** add actions for loading many and individual orders ([#879](https://github.com/graycoreio/daffodil/issues/879)) ([5adf0c0](https://github.com/graycoreio/daffodil/commit/5adf0c042a9b8de2934931dee513cf7f53b8c38d))
* **order:** add basic driver interface ([#878](https://github.com/graycoreio/daffodil/issues/878)) ([8f08415](https://github.com/graycoreio/daffodil/commit/8f084154bb097009f96a7683a37b42b912906d8a))
* **order:** add models and model factories ([#872](https://github.com/graycoreio/daffodil/issues/872)) ([d0f8558](https://github.com/graycoreio/daffodil/commit/d0f855897bc2af5f3c8f39c7d52245a2aaa0c25b))
* **order:** add order package and module ([#870](https://github.com/graycoreio/daffodil/issues/870)) ([5199d6b](https://github.com/graycoreio/daffodil/commit/5199d6b3bdfdd4053ab2c447aa8293d7f7560a77))
* **product:** add configurable product actions and reducers ([#884](https://github.com/graycoreio/daffodil/issues/884)) ([49165e5](https://github.com/graycoreio/daffodil/commit/49165e5bf785e448856d9ee337e5e42f524fdc45))
* **product:** add configurable product transformer and factories ([#876](https://github.com/graycoreio/daffodil/issues/876)) ([fd761d8](https://github.com/graycoreio/daffodil/commit/fd761d87c17afb4c004de0909a000e9c13f3a2b1))
* **product:** add DaffProductFacade.getProduct method ([#889](https://github.com/graycoreio/daffodil/issues/889)) ([dd4c777](https://github.com/graycoreio/daffodil/commit/dd4c7774b0ce68d8c0d00221f10ebd1c33bdc6b1))
* **product:** add models for magento and daffodil configurable produ… ([#874](https://github.com/graycoreio/daffodil/issues/874)) ([5d3fa52](https://github.com/graycoreio/daffodil/commit/5d3fa52ecfbc9badeb65aeab0258d753cddcbe94))
* **product:** add query fragments for magento configurable products ([#875](https://github.com/graycoreio/daffodil/issues/875)) ([820bd44](https://github.com/graycoreio/daffodil/commit/820bd44cbf98d698e3db50280168e79e51eeba47))


### Bug Fixes

* **cart:** default available shipping methods value to an array ([#871](https://github.com/graycoreio/daffodil/issues/871)) ([d2729c0](https://github.com/graycoreio/daffodil/commit/d2729c081c4247ac068f49af76b312fbd112fc71))

## [0.5.0](https://github.com/graycoreio/daffodil/compare/v0.4.22...v0.5.0) (2020-05-04)


### ⚠ BREAKING CHANGES

* **product, demo:** This removes containers from the `@daffodil/product` library. Please use the associated facade instead.

### Features

* **auth:** add actions ([#758](https://github.com/graycoreio/daffodil/issues/758)) ([218d016](https://github.com/graycoreio/daffodil/commit/218d016d3edfc452faa9b378335cece996f658ad))
* **auth:** add auth token storage service ([#865](https://github.com/graycoreio/daffodil/issues/865)) ([ec9ff81](https://github.com/graycoreio/daffodil/commit/ec9ff8167cfe8485b6d75efcaa641a5ba3eec648))
* **auth:** add effects ([#789](https://github.com/graycoreio/daffodil/issues/789)) ([64b165f](https://github.com/graycoreio/daffodil/commit/64b165f806b2200f09a5d8db802789558a06b2c5))
* **auth:** add error handling to Magento drivers ([#782](https://github.com/graycoreio/daffodil/issues/782)) ([c73c264](https://github.com/graycoreio/daffodil/commit/c73c26450e620814449457cdf1ce540bb826903d))
* **auth:** add facade ([#799](https://github.com/graycoreio/daffodil/issues/799)) ([6ea4b93](https://github.com/graycoreio/daffodil/commit/6ea4b93362de4e9212ac432ca0702a1625c42406))
* **auth:** add magento GraphQL driver ([#623](https://github.com/graycoreio/daffodil/issues/623)) ([560b82d](https://github.com/graycoreio/daffodil/commit/560b82d78fd8afa2dc628326ad99f5f23025eaff))
* **auth:** add reducers ([#760](https://github.com/graycoreio/daffodil/issues/760)) ([596cc75](https://github.com/graycoreio/daffodil/commit/596cc75345de966b7bd880c2cf04eed8d36e5d35))
* **auth:** add route guards for guests and members ([#822](https://github.com/graycoreio/daffodil/issues/822)) ([e92a7bd](https://github.com/graycoreio/daffodil/commit/e92a7bd45c37683568000e8fb51fcc8f70de1962))
* **auth:** add selectors ([#790](https://github.com/graycoreio/daffodil/issues/790)) ([53bff5d](https://github.com/graycoreio/daffodil/commit/53bff5d8d75646107227e8bbd03ef3ccc378370b))
* **auth:** remove transformer interfaces and move injection tokens to interface files ([#774](https://github.com/graycoreio/daffodil/issues/774)) ([5f4257e](https://github.com/graycoreio/daffodil/commit/5f4257e73a785d87862a26983094e4e00128261c))
* **authorizenet:** add authorizenet testing module to test facade usage ([#812](https://github.com/graycoreio/daffodil/issues/812)) ([ebba457](https://github.com/graycoreio/daffodil/commit/ebba4578fe6be8d2570bc22e1a913a7056bd8524))
* **authorizenet:** update selectors to be actually memoized ([#773](https://github.com/graycoreio/daffodil/issues/773)) ([9f03cc2](https://github.com/graycoreio/daffodil/commit/9f03cc2ea96e9aaba0fd2abf231331f267134815))
* **cart:** add apply/remove coupon magento mutation ([#825](https://github.com/graycoreio/daffodil/issues/825)) ([e1c2591](https://github.com/graycoreio/daffodil/commit/e1c2591173cedde8d4a43d9250e62a2d0b6c3cfc))
* **cart:** add cart coupon actions ([#839](https://github.com/graycoreio/daffodil/issues/839)) ([b338be2](https://github.com/graycoreio/daffodil/commit/b338be25b450c97028b3804d01decf035e73ca60))
* **cart:** add cart coupon driver service interface ([#824](https://github.com/graycoreio/daffodil/issues/824)) ([5a61abd](https://github.com/graycoreio/daffodil/commit/5a61abdffb55814f775e52ef6e1ddaf8160bf038))
* **cart:** add cart list coupons query ([#832](https://github.com/graycoreio/daffodil/issues/832)) ([ef17e46](https://github.com/graycoreio/daffodil/commit/ef17e460a84542648cb23112e66199f9158a514b))
* **cart:** add cart order result model ([#830](https://github.com/graycoreio/daffodil/issues/830)) ([e04c3c4](https://github.com/graycoreio/daffodil/commit/e04c3c4b40d84b4ca7937d62e99a968f75f72aeb))
* **cart:** add cart-order service interface ([#814](https://github.com/graycoreio/daffodil/issues/814)) ([b1cc992](https://github.com/graycoreio/daffodil/commit/b1cc992708f763a4682bac5af2891b48004cef96))
* **cart:** Add Composite Product to Cart ([#834](https://github.com/graycoreio/daffodil/issues/834)) ([074cd0e](https://github.com/graycoreio/daffodil/commit/074cd0e6d81b13d52a5912d9d0cfde5d82a03f46))
* **cart:** add coupon effects ([#845](https://github.com/graycoreio/daffodil/issues/845)) ([553ee65](https://github.com/graycoreio/daffodil/commit/553ee6595060050bd82bcfba477a4d9e0aa91bdb))
* **cart:** add coupon errors selector and facade field ([#846](https://github.com/graycoreio/daffodil/issues/846)) ([a0b0409](https://github.com/graycoreio/daffodil/commit/a0b04096525070342b80325043f5c6aad3f4099d))
* **cart:** add coupon reducer ([#840](https://github.com/graycoreio/daffodil/issues/840)) ([35d49df](https://github.com/graycoreio/daffodil/commit/35d49dfca9b83d662af32e0e20b95b30ad1be98a))
* **cart:** add Magento cart coupon driver ([#862](https://github.com/graycoreio/daffodil/issues/862)) ([f805d74](https://github.com/graycoreio/daffodil/commit/f805d749ce29407a158a6f473282aeb624183cf5))
* **cart:** add Magento cart coupon transformer ([#860](https://github.com/graycoreio/daffodil/issues/860)) ([1e9f516](https://github.com/graycoreio/daffodil/commit/1e9f516ca0901f0f9e815813dadb0ec1a44811a0))
* **cart:** add Magento GraphQL response models ([#855](https://github.com/graycoreio/daffodil/issues/855)) ([7913704](https://github.com/graycoreio/daffodil/commit/7913704598d394e04f767470ed93a51860e13b2a))
* **cart:** add place order actions ([#826](https://github.com/graycoreio/daffodil/issues/826)) ([e5a0bdf](https://github.com/graycoreio/daffodil/commit/e5a0bdf924b04ebe37b7485064dc63514ca83976))
* **cart:** add place order effects ([#828](https://github.com/graycoreio/daffodil/issues/828)) ([28b3d89](https://github.com/graycoreio/daffodil/commit/28b3d89d3f0b163906806eaf37712e396154e0eb))
* **cart:** add place order facade fields ([#835](https://github.com/graycoreio/daffodil/issues/835)) ([56382f1](https://github.com/graycoreio/daffodil/commit/56382f15b52505932e017a9f72c1b4c1b002452b))
* **cart:** add place order Magento driver ([#823](https://github.com/graycoreio/daffodil/issues/823)) ([97e3391](https://github.com/graycoreio/daffodil/commit/97e33918e8a090a76ee6dd6ff2ae24feb6760332))
* **cart:** add place order reducers ([#827](https://github.com/graycoreio/daffodil/issues/827)) ([35ee9e4](https://github.com/graycoreio/daffodil/commit/35ee9e41a72c3b66fb964f66d48d3921aad524fd))
* **cart:** add place order selectors ([#833](https://github.com/graycoreio/daffodil/issues/833)) ([b21e9c6](https://github.com/graycoreio/daffodil/commit/b21e9c662f617efbb497f561eb8dd124a7567f4a))
* **cart:** default known generic types to the base type ([#797](https://github.com/graycoreio/daffodil/issues/797)) ([421d55e](https://github.com/graycoreio/daffodil/commit/421d55ea72604b18c30f113dae2d56c71761855f))
* **cart:** make cart package generic ([#751](https://github.com/graycoreio/daffodil/issues/751)) ([d5f69f1](https://github.com/graycoreio/daffodil/commit/d5f69f1bf649414ff5b58b923d20d886dfc77dc7))
* **cart:** provide a testing module for mocking facade usage ([#808](https://github.com/graycoreio/daffodil/issues/808)) ([2ac278a](https://github.com/graycoreio/daffodil/commit/2ac278afe73f41fd5e6975b65ab8df6dc83b8eaf))
* **cart:** provide cart order driver ([#836](https://github.com/graycoreio/daffodil/issues/836)) ([54d5ecf](https://github.com/graycoreio/daffodil/commit/54d5ecf5e52577c4e4e837667c673bcfb28216ef))
* **cart:** remove some deprecated exports ([#796](https://github.com/graycoreio/daffodil/issues/796)) ([168a09e](https://github.com/graycoreio/daffodil/commit/168a09ed88b94d6db545930eb71a4c22b11c3db7))
* **cart,product:** add introspection for Magento driver apollo tests ([#858](https://github.com/graycoreio/daffodil/issues/858)) ([e516b90](https://github.com/graycoreio/daffodil/commit/e516b907eacce7c8c7283b12992732217021f6c5))
* **category:** add testing module for mocking facade ([#807](https://github.com/graycoreio/daffodil/issues/807)) ([d48556f](https://github.com/graycoreio/daffodil/commit/d48556feb6eaadffe096ffdda562b615001742f4))
* **category:** make category page configuration model generic ([#783](https://github.com/graycoreio/daffodil/issues/783)) ([6722e48](https://github.com/graycoreio/daffodil/commit/6722e48caf0388e6d9c2a9128264437dbee98d15))
* **category:** make the category package generic ([#759](https://github.com/graycoreio/daffodil/issues/759)) ([be3c3a0](https://github.com/graycoreio/daffodil/commit/be3c3a0fc6e9e84971271a50ad154b15288e2143))
* **category:** provide default values for generics ([#800](https://github.com/graycoreio/daffodil/issues/800)) ([32972e1](https://github.com/graycoreio/daffodil/commit/32972e19a08d0f724fb7fd6a007f2f2ccc8367ca))
* **checkout:** update order interface ([#861](https://github.com/graycoreio/daffodil/issues/861)) ([57d9df7](https://github.com/graycoreio/daffodil/commit/57d9df7f0429c6be2784ec3f194c0e44a99f346f))
* **contact:** add testing module with mock facades ([#811](https://github.com/graycoreio/daffodil/issues/811)) ([d768a51](https://github.com/graycoreio/daffodil/commit/d768a5186c9bf7ca0256124107a3851de2cf7eb5))
* **daffio:** add guides to left nav on docs ([#769](https://github.com/graycoreio/daffodil/issues/769)) ([218bd90](https://github.com/graycoreio/daffodil/commit/218bd901aaacf1d7fa33223cd277195bdb9b4580))
* **demo:** add driver variant environments ([#755](https://github.com/graycoreio/daffodil/issues/755)) ([ece596e](https://github.com/graycoreio/daffodil/commit/ece596e3af8f2d659ef06a4db898042d3b764e29))
* **demo:** implement IntrospectionFragmentMatcher ([#778](https://github.com/graycoreio/daffodil/issues/778)) ([de9cd28](https://github.com/graycoreio/daffodil/commit/de9cd2815bae18e35728c77b0efe8d40081ed81c))
* **design:** add heading mixin to set font standards ([#761](https://github.com/graycoreio/daffodil/issues/761)) ([bdf5d92](https://github.com/graycoreio/daffodil/commit/bdf5d92feb0d23a2fa2b3872c4eee05887345529))
* **design:** add theming option to card ([#768](https://github.com/graycoreio/daffodil/issues/768)) ([2cce96c](https://github.com/graycoreio/daffodil/commit/2cce96cbfb867ccb9af7f254559c7252cb52121c))
* **design:** create article component ([#777](https://github.com/graycoreio/daffodil/issues/777)) ([6566f45](https://github.com/graycoreio/daffodil/commit/6566f458ee781644fec9dfed59b4aa06db38848e))
* **design:** fix style rendering for container component ([#757](https://github.com/graycoreio/daffodil/issues/757)) ([e15a702](https://github.com/graycoreio/daffodil/commit/e15a702478ff43abc26ea307e4e3a3e981e45a7e))
* **design:** update callout to use heading mixin and typography variables ([#765](https://github.com/graycoreio/daffodil/issues/765)) ([7195968](https://github.com/graycoreio/daffodil/commit/719596889437e2c91493fac2f04a9d4cccde2661))
* **design:** update gray palette with accessibility considerations ([#767](https://github.com/graycoreio/daffodil/issues/767)) ([b0e270c](https://github.com/graycoreio/daffodil/commit/b0e270cd6ae37ba2e6fac993592a6fb4bd0bd1c3))
* **design:** update hero to use heading mixin ([#764](https://github.com/graycoreio/daffodil/issues/764)) ([54dcdde](https://github.com/graycoreio/daffodil/commit/54dcddef518801cd434128ce205c2949e18725f4))
* **dgeni:** expanded dgeni tools for to generate docs for examples in design-land ([#847](https://github.com/graycoreio/daffodil/issues/847)) ([8c00398](https://github.com/graycoreio/daffodil/commit/8c003985bda7d1a33759ddc12cc993b137f36348))
* **driver:** add introspection schema for Magento v2.3.4 GraphQl to exports ([#852](https://github.com/graycoreio/daffodil/issues/852)) ([7924851](https://github.com/graycoreio/daffodil/commit/79248512e6da215e90d1506e63dc54bd17c368a4))
* **driver:** add magento error transformer ([#785](https://github.com/graycoreio/daffodil/issues/785)) ([318a99b](https://github.com/graycoreio/daffodil/commit/318a99b2ea8ca24f2b540264950038ac1e61c07a))
* **driver:** hoist magento into subpackage ([#794](https://github.com/graycoreio/daffodil/issues/794)) ([2726dbb](https://github.com/graycoreio/daffodil/commit/2726dbbe85cb5d0cb4b0523fd9ae9a7bfe2ef6b5))
* **driver, cart:** move MagentoMoney from cart into driver/magento ([#664](https://github.com/graycoreio/daffodil/issues/664)) ([3549b12](https://github.com/graycoreio/daffodil/commit/3549b12a245bc76dff188907c8094d2af88b2b01))
* **geography:** add actions and reducers ([#735](https://github.com/graycoreio/daffodil/issues/735)) ([862e050](https://github.com/graycoreio/daffodil/commit/862e0500dc31c9035c97559b53b9c543bd86696b))
* **geography:** add effects ([#780](https://github.com/graycoreio/daffodil/issues/780)) ([14a22fc](https://github.com/graycoreio/daffodil/commit/14a22fc675cd58ca82415ac8a1d03adc68726fb7))
* **geography:** add error handling for unknown countries to Magento driver ([#791](https://github.com/graycoreio/daffodil/issues/791)) ([cd013dc](https://github.com/graycoreio/daffodil/commit/cd013dc39ee77c30fe6dcac9ecde0569f0cb6e6b))
* **geography:** add facade ([#792](https://github.com/graycoreio/daffodil/issues/792)) ([131e1f0](https://github.com/graycoreio/daffodil/commit/131e1f0bce1a64ff9e3a9bf0efbff369be1b8bfa))
* **geography:** add geography testing module to mock facade usage ([#810](https://github.com/graycoreio/daffodil/issues/810)) ([dbc7668](https://github.com/graycoreio/daffodil/commit/dbc7668f014082dea2776f00b269755526501a20))
* **geography:** add selectors ([#766](https://github.com/graycoreio/daffodil/issues/766)) ([51c3ce8](https://github.com/graycoreio/daffodil/commit/51c3ce863e6bdd4fead9a669a84f2dc85bdec819))
* **geography:** add street2 field to DaffAddress ([#712](https://github.com/graycoreio/daffodil/issues/712)) ([5ff4783](https://github.com/graycoreio/daffodil/commit/5ff4783ccf661b60b4405c497a6bca8849bfe4bc))
* **navigation:** make the navigation package generic ([#748](https://github.com/graycoreio/daffodil/issues/748)) ([d950044](https://github.com/graycoreio/daffodil/commit/d95004480a7b9609d8c1d32666190e6282eab8a4))
* **navigation:** prefix selectors implementation with "get" ([#776](https://github.com/graycoreio/daffodil/issues/776)) ([ec20c8c](https://github.com/graycoreio/daffodil/commit/ec20c8c886ce552011b810cd47b863055e70a1fd))
* **newsletter:** add newsletter testing module for mock facades ([#809](https://github.com/graycoreio/daffodil/issues/809)) ([fa75b94](https://github.com/graycoreio/daffodil/commit/fa75b94f5e274bd86c4fac0fb64741c0a71b9752))
* **paypal:** add paypal testing module to test facade usage ([#813](https://github.com/graycoreio/daffodil/issues/813)) ([78e1963](https://github.com/graycoreio/daffodil/commit/78e196319adc3d10493851406bd416fa5a2e935b))
* **paypal:** provide default values for generics ([#802](https://github.com/graycoreio/daffodil/issues/802)) ([9f89a6d](https://github.com/graycoreio/daffodil/commit/9f89a6d00cfabded2558b94461212c17085e3058))
* **paypal:** update selectors to be memoized ([#772](https://github.com/graycoreio/daffodil/issues/772)) ([5802dee](https://github.com/graycoreio/daffodil/commit/5802dee00321d17f1b5557e90b0e07f7337faf7a))
* **product:** add a testing module for easily mocking the facades ([#803](https://github.com/graycoreio/daffodil/issues/803)) ([759b81b](https://github.com/graycoreio/daffodil/commit/759b81b2d9b57276495cd3c92ed40afbf4714d42))
* **product:** add factories for different product types ([11b32a4](https://github.com/graycoreio/daffodil/commit/11b32a465e6f3a5407567ac1d3bef282bae77632))
* **product:** add transformers for Magento bundle and simple products ([#867](https://github.com/graycoreio/daffodil/issues/867)) ([4fc1a75](https://github.com/graycoreio/daffodil/commit/4fc1a751e2a2b36ec19c8ad767a6ff43461e939c))
* **product:** finalize composite product models ([#821](https://github.com/graycoreio/daffodil/issues/821)) ([01c16b1](https://github.com/graycoreio/daffodil/commit/01c16b164bbc64e513616c2ff523d580a88a3728))
* **product:** provide default values for generics ([#801](https://github.com/graycoreio/daffodil/issues/801)) ([b7c65c1](https://github.com/graycoreio/daffodil/commit/b7c65c108acf8b7e0e4710dc3202f938430ffc18))
* **product:** remove DaffProductUnion ([#798](https://github.com/graycoreio/daffodil/issues/798)) ([4004592](https://github.com/graycoreio/daffodil/commit/400459238b5f4edb55a3f7e10df4cbfa9821329c))
* **product:** remove deprecated __typename value from DaffProduct ([#817](https://github.com/graycoreio/daffodil/issues/817)) ([0299d51](https://github.com/graycoreio/daffodil/commit/0299d5102099ab0adb55b256bef6257a6669a3c5))
* **product:** rename product-node to magento-product ([#818](https://github.com/graycoreio/daffodil/issues/818)) ([fbd77f5](https://github.com/graycoreio/daffodil/commit/fbd77f5c0d366c2c2f98c08afab771be0b2220d6))
* **product:** support generics in state ([#762](https://github.com/graycoreio/daffodil/issues/762)) ([cf8bb63](https://github.com/graycoreio/daffodil/commit/cf8bb63b4f18a9c6adec6dd96f01151c5197df0f))
* **product:** update product type models ([9693ec2](https://github.com/graycoreio/daffodil/commit/9693ec2ae0856c99699cb00f63bda0090764eea0))
* **product, category:** remove unneeded and unused models ([#819](https://github.com/graycoreio/daffodil/issues/819)) ([2d7713a](https://github.com/graycoreio/daffodil/commit/2d7713a509d431dae4647023b10522b91b49dfff))
* **product, demo:** remove references to daff product template containers ([#756](https://github.com/graycoreio/daffodil/issues/756)) ([0c2b691](https://github.com/graycoreio/daffodil/commit/0c2b69181108a09919603ff75c4610eb5afae03d))
* **tools:** add generate fragment types builder ([#752](https://github.com/graycoreio/daffodil/issues/752)) ([7d7f1c5](https://github.com/graycoreio/daffodil/commit/7d7f1c53dbccea819f49ba9a0efc760e8cdb7472))


### Bug Fixes

* **cart:** fix a broken reference ([#843](https://github.com/graycoreio/daffodil/issues/843)) ([d4c5515](https://github.com/graycoreio/daffodil/commit/d4c551532e11d2ae228d4480723f5641bb895b08))
* **cart:** Magento GraphQL cart address update fails ([#857](https://github.com/graycoreio/daffodil/issues/857)) ([397fc35](https://github.com/graycoreio/daffodil/commit/397fc35cd406d681c6d8a87f9cad32cfe244b1c1))
* **cart:** malformed Magento place order and coupon queries ([#859](https://github.com/graycoreio/daffodil/issues/859)) ([3f6edca](https://github.com/graycoreio/daffodil/commit/3f6edcacd54cce3ae0de483cd4ecf0e400b88b05))
* **category:** fix bug where some effects would not properly make a get call with a generic request ([#784](https://github.com/graycoreio/daffodil/issues/784)) ([1d7ecad](https://github.com/graycoreio/daffodil/commit/1d7ecad408d40ca9339d0344c2da1030ebc3e820))
* **demo, design:** stylelint cannot find any files ([#754](https://github.com/graycoreio/daffodil/issues/754)) ([2434c3a](https://github.com/graycoreio/daffodil/commit/2434c3a82972c06c627134f642726df44e9414c3))
* **driver:** the driver package is failing the build locally because … ([#793](https://github.com/graycoreio/daffodil/issues/793)) ([8433666](https://github.com/graycoreio/daffodil/commit/843366660d556f2d8c9da25fe6e79b88bd32691d))

### [0.4.22](https://github.com/graycoreio/daffodil/compare/v0.4.21...v0.4.22) (2020-03-27)


### Bug Fixes

* **cart:** allow clearing a Magento cart with more than one item ([#745](https://github.com/graycoreio/daffodil/issues/745)) ([fd8dde1](https://github.com/graycoreio/daffodil/commit/fd8dde1a310bf15ea098c21d544603e4f4655d16))
* **cart, product:** magento cart item has bad image URL ([#744](https://github.com/graycoreio/daffodil/issues/744)) ([9db323b](https://github.com/graycoreio/daffodil/commit/9db323beabb6dfc7ccf887444d034af1d67e64a5))

### [0.4.21](https://github.com/graycoreio/daffodil/compare/v0.4.20...v0.4.21) (2020-03-26)


### Bug Fixes

* **category:** fix category product query ([#743](https://github.com/graycoreio/daffodil/issues/743)) ([d0b94ae](https://github.com/graycoreio/daffodil/commit/d0b94ae69ce497a4daee9cfe84e4c07d4812f7f4))

### [0.4.20](https://github.com/graycoreio/daffodil/compare/v0.4.19...v0.4.20) (2020-03-26)


### Features

* **cart:** throw error when in memory cart does not exist ([#737](https://github.com/graycoreio/daffodil/issues/737)) ([5c109e2](https://github.com/graycoreio/daffodil/commit/5c109e263379972611ef1ff178b8804a3f524f0d))
* **category:** add the isCategoryEmpty selector ([#741](https://github.com/graycoreio/daffodil/issues/741)) ([0c54e47](https://github.com/graycoreio/daffodil/commit/0c54e476559ccf46d1ea6960594538f1093700fe))
* **core, cart:** add interface for in memory angular web api services ([#739](https://github.com/graycoreio/daffodil/issues/739)) ([809debd](https://github.com/graycoreio/daffodil/commit/809debd9026b96b5981b17a86bf686f21474f3a9))
* **geography:** export magento driver ([#736](https://github.com/graycoreio/daffodil/issues/736)) ([5a1d65f](https://github.com/graycoreio/daffodil/commit/5a1d65f9bd4765df07d94614853062f98087616a))
* **product:** add price to magento product responses ([#742](https://github.com/graycoreio/daffodil/issues/742)) ([2decb85](https://github.com/graycoreio/daffodil/commit/2decb85fd02de533544c2ab0ad8037d12b032b5e))

### [0.4.19](https://github.com/graycoreio/daffodil/compare/v0.4.18...v0.4.19) (2020-03-25)


### Features

* **geography:** add Magento GraphQL driver ([#731](https://github.com/graycoreio/daffodil/issues/731)) ([2e29491](https://github.com/graycoreio/daffodil/commit/2e29491ebf5e6e893f6e25b102861b8f0291d8c9))

### [0.4.18](https://github.com/graycoreio/daffodil/compare/v0.4.17...v0.4.18) (2020-03-24)


### Features

* **cart:** add cart item in-memory driver and backend ([#718](https://github.com/graycoreio/daffodil/issues/718)) ([b8d3674](https://github.com/graycoreio/daffodil/commit/b8d367420fe65eb9e9f3ac4d13ad0bfde76c9edc))
* **cart:** add error handling and specific error for cart not found ([#717](https://github.com/graycoreio/daffodil/issues/717)) ([da06b44](https://github.com/graycoreio/daffodil/commit/da06b447a0f69b65e9e5f3fe9e7f4774accc1f1e))
* **cart:** add in-memory drivers ([#724](https://github.com/graycoreio/daffodil/issues/724)) ([08fef81](https://github.com/graycoreio/daffodil/commit/08fef81ebaccb513c8b1387c9b1ab42dda7dd5c6))
* **cart:** add total_discount to DaffCartItem ([#720](https://github.com/graycoreio/daffodil/issues/720)) ([5beb1ff](https://github.com/graycoreio/daffodil/commit/5beb1ff21e0735c6b12397ac5199b06b4c348bca))
* **core:** add DaffErrorCodeMap to enable error transformation and mapping ([#715](https://github.com/graycoreio/daffodil/issues/715)) ([d9dc4ca](https://github.com/graycoreio/daffodil/commit/d9dc4ca69beb9b19b22b5d0db02c219760c75a19))
* **geography:** add testing factories for subdivision and country ([#729](https://github.com/graycoreio/daffodil/issues/729)) ([75516a7](https://github.com/graycoreio/daffodil/commit/75516a741ec2370790f7ef28432e5ccc7f444684))
* **geography:** make driver service interface generic and observable ([#728](https://github.com/graycoreio/daffodil/issues/728)) ([d44ffb1](https://github.com/graycoreio/daffodil/commit/d44ffb14a803c4d9617737ef778bcb309b25467e))
* **geography:** outline basic driver model and types ([#716](https://github.com/graycoreio/daffodil/issues/716)) ([dcc4d69](https://github.com/graycoreio/daffodil/commit/dcc4d69cd2c08ca086c1af897447a8f75324c7fa))


### Bug Fixes

* **cart:** fix cart in-memory service ([#733](https://github.com/graycoreio/daffodil/issues/733)) ([e7ac069](https://github.com/graycoreio/daffodil/commit/e7ac069dd33e7bb26a4f63f2a256b2d222a1d326))
* **category:** allow categories to be sorted based on platform response ([#727](https://github.com/graycoreio/daffodil/issues/727)) ([39fc180](https://github.com/graycoreio/daffodil/commit/39fc1806774bb93387f793dbb9bdcd7e0d0288a6))
* **category:** allow magento price filters with a wildcard "*" ([#726](https://github.com/graycoreio/daffodil/issues/726)) ([9d5e7a9](https://github.com/graycoreio/daffodil/commit/9d5e7a98f2492c99becdb273befd9caa0fab10bb))
* **category:** applied filters are now an empty array instead of null ([#730](https://github.com/graycoreio/daffodil/issues/730)) ([dc9eed3](https://github.com/graycoreio/daffodil/commit/dc9eed3356f3d27f47fe125fdb0b138f9f38f339))

### [0.4.17](https://github.com/graycoreio/daffodil/compare/v0.4.16...v0.4.17) (2020-03-20)


### Features

* **cart:** add a selector for whether the cart is empty ([#714](https://github.com/graycoreio/daffodil/issues/714)) ([0ad387c](https://github.com/graycoreio/daffodil/commit/0ad387c27a06c89737c4fbb20148bfada66e856a))
* **cart:** add cart in-memory driver ([#645](https://github.com/graycoreio/daffodil/issues/645)) ([9464455](https://github.com/graycoreio/daffodil/commit/946445585dc6043687cebc9aa5d849d48ef2047a))

### [0.4.16](https://github.com/graycoreio/daffodil/compare/v0.4.15...v0.4.16) (2020-03-19)


### Features

* **category:** differentiate applied filters and filter requests ([#711](https://github.com/graycoreio/daffodil/issues/711)) ([8b1465b](https://github.com/graycoreio/daffodil/commit/8b1465b6aa36b41296c3753071383d2a85932980))
* **product, category:** add product type to DaffProduct ([#713](https://github.com/graycoreio/daffodil/issues/713)) ([fe39515](https://github.com/graycoreio/daffodil/commit/fe39515321aa9c000f740de03965a2009645beea))

### [0.4.15](https://github.com/graycoreio/daffodil/compare/v0.4.14...v0.4.15) (2020-03-18)


### Features

* **cart:** add image and abridged_description to the cart item ([#706](https://github.com/graycoreio/daffodil/issues/706)) ([bcf7ceb](https://github.com/graycoreio/daffodil/commit/bcf7ceb9fc5be9e1f06ff1a280970cf2a399b698))
* **core, cart:** add core storage service, catch storage errors in cart during SSR ([#710](https://github.com/graycoreio/daffodil/issues/710)) ([539bf43](https://github.com/graycoreio/daffodil/commit/539bf43b5e0208ce764074f987ce5981bc1a7a73))


### Bug Fixes

* **cart:** fix paths to use public_api instead of index ([#709](https://github.com/graycoreio/daffodil/issues/709)) ([6835e05](https://github.com/graycoreio/daffodil/commit/6835e0597626703a54dd15bb8a10759290a598c2))
* **cart:** return proper types to accommodate cart with no items ([#707](https://github.com/graycoreio/daffodil/issues/707)) ([ae7a640](https://github.com/graycoreio/daffodil/commit/ae7a6406051942c09cca66808328b0bc6c5edc13))

### [0.4.14](https://github.com/graycoreio/daffodil/compare/v0.4.13...v0.4.14) (2020-03-17)


### Features

* **category:** coerce Magento product attribute input types to DaffCategoryFilter types ([#704](https://github.com/graycoreio/daffodil/issues/704)) ([87921e1](https://github.com/graycoreio/daffodil/commit/87921e1a253c665083a17769149867ead608c025))

### [0.4.13](https://github.com/graycoreio/daffodil/compare/v0.4.12...v0.4.13) (2020-03-16)


### Features

* **cart:** add effects to state module and fix cart transformer ([#699](https://github.com/graycoreio/daffodil/issues/699)) ([ca8fb16](https://github.com/graycoreio/daffodil/commit/ca8fb16d7ff824b584f27324c40a7bed1b544a21))
* **category:** add a productsLoading state to category for when a fu… ([#702](https://github.com/graycoreio/daffodil/issues/702)) ([6898f9e](https://github.com/graycoreio/daffodil/commit/6898f9ef2d51c5ad6f059a248940e5c3cfc3ea3d))
* **category:** add description field to the category ([#705](https://github.com/graycoreio/daffodil/issues/705)) ([ccc22e9](https://github.com/graycoreio/daffodil/commit/ccc22e9afc20ffa42068dc1a7f7573c50afaa390))

### [0.4.12](https://github.com/graycoreio/daffodil/compare/v0.4.11...v0.4.12) (2020-03-12)


### Features

* **cart:** handle empty and null responses in Magento driver ([#696](https://github.com/graycoreio/daffodil/issues/696)) ([1423747](https://github.com/graycoreio/daffodil/commit/14237478d4ff15710fa47e34e945c14a294bf8c3))
* **category:** add product_ids and total_products to the category state ([#698](https://github.com/graycoreio/daffodil/issues/698)) ([a18dc01](https://github.com/graycoreio/daffodil/commit/a18dc01f9b6c4fa523c4677ca217b9bfa0b2c614))


### Bug Fixes

* **cart:** Magento GraphQL requests use wrong fragment types ([#695](https://github.com/graycoreio/daffodil/issues/695)) ([3d3dab1](https://github.com/graycoreio/daffodil/commit/3d3dab1717db8d8b3a0826e6d204d209097bc0ce))

### [0.4.11](https://github.com/graycoreio/daffodil/compare/v0.4.10...v0.4.11) (2020-03-12)


### Features

* **category:** export all selectors and actions ([#692](https://github.com/graycoreio/daffodil/issues/692)) ([0d1a95d](https://github.com/graycoreio/daffodil/commit/0d1a95dd2158f9ca90c74f0e2bfb1465143a3e44))


### Bug Fixes

* **cart:** importing magento driver module breaks builds ([#691](https://github.com/graycoreio/daffodil/issues/691)) ([6d7d40a](https://github.com/graycoreio/daffodil/commit/6d7d40a156cd5164ca490cca2dd47d301ef53014))
* **category:** set the product ids on the categoryPageConfigState instead of the category in the in memory api ([#693](https://github.com/graycoreio/daffodil/issues/693)) ([2a072b4](https://github.com/graycoreio/daffodil/commit/2a072b46fff5eda3100d4bd802c3060a2fea9295))

### [0.4.10](https://github.com/graycoreio/daffodil/compare/v0.4.9...v0.4.10) (2020-03-11)


### Features

* **category:** add ability to process range type filters ([#690](https://github.com/graycoreio/daffodil/issues/690)) ([814356a](https://github.com/graycoreio/daffodil/commit/814356a22fdc10e272b09e8d09fbf61ff397523f))
* **category:** add enums for CategoryFilterActions ([#689](https://github.com/graycoreio/daffodil/issues/689)) ([f929462](https://github.com/graycoreio/daffodil/commit/f9294628810700f7e8af2db2308336434e420a0c))

### [0.4.9](https://github.com/graycoreio/daffodil/compare/v0.4.8...v0.4.9) (2020-03-10)


### Features

* **cart:** add redux state ([#681](https://github.com/graycoreio/daffodil/issues/681)) ([ce0beb3](https://github.com/graycoreio/daffodil/commit/ce0beb3bb0f33bfd4d58d7016315bfb6f1debde4))
* **product, cart, category:** clean up magento models/factories/queries ([#682](https://github.com/graycoreio/daffodil/issues/682)) ([5647daa](https://github.com/graycoreio/daffodil/commit/5647daaffdc7376e9f030d91898628004e50fda6))

### [0.4.8](https://github.com/graycoreio/daffodil/compare/v0.4.7...v0.4.8) (2020-03-10)

### [0.4.7](https://github.com/graycoreio/daffodil/compare/v0.4.6...v0.4.7) (2020-03-09)


### Features

* **category:** add action for toggling a category filter ([#685](https://github.com/graycoreio/daffodil/issues/685)) ([85b6e78](https://github.com/graycoreio/daffodil/commit/85b6e7837b1b0164353e2d882a2a0cbab8d29b85))
* **category:** make category accessory actions dispatch DaffCategoryLoad ([#686](https://github.com/graycoreio/daffodil/issues/686)) ([360486e](https://github.com/graycoreio/daffodil/commit/360486e33cd809c88d12485a4cb4b354beeebefa))

### [0.4.6](https://github.com/graycoreio/daffodil/compare/v0.4.5...v0.4.6) (2020-03-09)


### Features

* **category:** add category actions for applying filters and a sorting option ([#684](https://github.com/graycoreio/daffodil/issues/684)) ([18efc8b](https://github.com/graycoreio/daffodil/commit/18efc8ba4c7257b48322948864c3085cb252f6d2))

### [0.4.5](https://github.com/graycoreio/daffodil/compare/v0.4.4...v0.4.5) (2020-03-08)


### Features

* **category:** add selectors for applied filters, sort option, and s… ([#683](https://github.com/graycoreio/daffodil/issues/683)) ([7ce06eb](https://github.com/graycoreio/daffodil/commit/7ce06eba7774a9cc2a9c2665b5668efbc6682065))

### [0.4.4](https://github.com/graycoreio/daffodil/compare/v0.4.3...v0.4.4) (2020-03-07)


### Features

* **cart:** add cart driver ([#677](https://github.com/graycoreio/daffodil/issues/677)) ([ae9f206](https://github.com/graycoreio/daffodil/commit/ae9f2066a86a9e2428295d55fbba3fecafee6c13))
* **cart:** add Magento GraphQL cart item driver ([#676](https://github.com/graycoreio/daffodil/issues/676)) ([946adb1](https://github.com/graycoreio/daffodil/commit/946adb1bb649dddde4819d38d93a520aa2d074e9))

### [0.4.3](https://github.com/graycoreio/daffodil/compare/v0.4.2...v0.4.3) (2020-03-06)


### Features

* **cart:** add Magento 2 GraphQl output models ([#651](https://github.com/graycoreio/daffodil/issues/651)) ([d735c2a](https://github.com/graycoreio/daffodil/commit/d735c2a3857e9cc90c51bce9bd1c927317db7e52))
* **cart:** add magento driver model factories ([#661](https://github.com/graycoreio/daffodil/issues/661)) ([c59db3d](https://github.com/graycoreio/daffodil/commit/c59db3dc04daef5d1785978d2bd0b616b1f0deb9))
* **cart:** add Magento GraphQL billing address driver ([#671](https://github.com/graycoreio/daffodil/issues/671)) ([e69ef34](https://github.com/graycoreio/daffodil/commit/e69ef3410f7b8b0a8217b29997a3c6e426f81d72))
* **cart:** add Magento GraphQL driver transformers ([#668](https://github.com/graycoreio/daffodil/issues/668)) ([60931ab](https://github.com/graycoreio/daffodil/commit/60931abd50fbec67c7af5899046db06495dac66b))
* **cart:** add Magento GraphQl payment methods driver ([#654](https://github.com/graycoreio/daffodil/issues/654)) ([ce98101](https://github.com/graycoreio/daffodil/commit/ce981018475bf8111b8ee770b02f15fdfbddefb1))
* **cart:** add Magento GraphQL shipping address driver ([#670](https://github.com/graycoreio/daffodil/issues/670)) ([aef1f16](https://github.com/graycoreio/daffodil/commit/aef1f164d467a06d74743da3c251a9204999e2fb))
* **cart:** add Magento GraphQL shipping information driver ([#673](https://github.com/graycoreio/daffodil/issues/673)) ([21abba3](https://github.com/graycoreio/daffodil/commit/21abba3b0ef8ef5f261d31291402bbfe433ee398))
* **cart:** add Magento GraphQL shipping methods driver ([#657](https://github.com/graycoreio/daffodil/issues/657)) ([3cc14aa](https://github.com/graycoreio/daffodil/commit/3cc14aa88df16a2b7ae2dff4d085552b33227fd4))
* **cart:** add payment driver ([#672](https://github.com/graycoreio/daffodil/issues/672)) ([cb802f3](https://github.com/graycoreio/daffodil/commit/cb802f3c6d96d292f9530fb3f0be1b8a114b0aa1))
* **cart:** add shipping address driver models ([#659](https://github.com/graycoreio/daffodil/issues/659)) ([05b4000](https://github.com/graycoreio/daffodil/commit/05b4000c0ec7f94ed5d5342dd3292c4c8045bb84))
* **cart:** add shipping and payment methods fields on cart ([#669](https://github.com/graycoreio/daffodil/issues/669)) ([0650cc8](https://github.com/graycoreio/daffodil/commit/0650cc8b6b38a04693838fcf45b6bfc6e220d0fb))
* **category:** add models for upcoming category queries ([#660](https://github.com/graycoreio/daffodil/issues/660)) ([cd08981](https://github.com/graycoreio/daffodil/commit/cd0898194a8a74fe33ce6df4f1bcb90a3987bb98))
* **category:** add transformers for a magento category request's sor… ([#662](https://github.com/graycoreio/daffodil/issues/662)) ([2ec7556](https://github.com/graycoreio/daffodil/commit/2ec75566cba3c3c3b74306043229c84d9ea989a6))
* **category:** replace deprecated magento category call; update mage… ([#663](https://github.com/graycoreio/daffodil/issues/663)) ([2cf962c](https://github.com/graycoreio/daffodil/commit/2cf962ca606c1598881267d2e0401c234e1924f0))
* **product:** add magento query fragment for retrieving bundled products ([#666](https://github.com/graycoreio/daffodil/issues/666)) ([b64677e](https://github.com/graycoreio/daffodil/commit/b64677ece04b9b33e5fdba99c5febcf5d5bc7160))
* **product:** add MagentoProduct testing factory ([#665](https://github.com/graycoreio/daffodil/issues/665)) ([495f7e9](https://github.com/graycoreio/daffodil/commit/495f7e95de100400cdb343fd612fc15640926c75))
* **product:** remove product transformer interface and injection token ([#667](https://github.com/graycoreio/daffodil/issues/667)) ([978df58](https://github.com/graycoreio/daffodil/commit/978df5869b2000d455c5304f49fc4048ed1a87a7))


### Bug Fixes

* **design:** fix daff-image padding-top calculation ([#655](https://github.com/graycoreio/daffodil/issues/655)) ([00cb54e](https://github.com/graycoreio/daffodil/commit/00cb54ea170f0f8af5a1277ed0d9a7e16f247672))

### [0.4.2](https://github.com/graycoreio/daffodil/compare/v0.4.1...v0.4.2) (2020-02-26)


### Features

* **cart:** add create method to cart driver ([#643](https://github.com/graycoreio/daffodil/issues/643)) ([0c3aade](https://github.com/graycoreio/daffodil/commit/0c3aadeda45019dbdb0882f727669150dd278e11))
* **cart:** make cart clear API return the new cart ([#573](https://github.com/graycoreio/daffodil/issues/573)) ([8c92a85](https://github.com/graycoreio/daffodil/commit/8c92a857e2ab3abfdd2bef4634930e5c1a08982d))


### Bug Fixes

* **contact, newsletter:** sets proper testing driver types  ([#647](https://github.com/graycoreio/daffodil/issues/647)) ([1715e83](https://github.com/graycoreio/daffodil/commit/1715e83a2f9c17755d2245d06a9486b5107bf0f8))

### [0.4.1](https://github.com/graycoreio/daffodil/compare/v0.4.0...v0.4.1) (2020-02-24)


### Features

* **auth:** add auth service interface with check method ([#636](https://github.com/graycoreio/daffodil/issues/636)) ([7107907](https://github.com/graycoreio/daffodil/commit/7107907984e61c09194d8f0fa6b67feeac19300a))
* **auth:** change register interface to return DaffLoginInfo ([#640](https://github.com/graycoreio/daffodil/issues/640)) ([2fef88b](https://github.com/graycoreio/daffodil/commit/2fef88b46c727ebafc72d7dd188e74590ba5aafd))
* **cart:** add interfaces to expand cart driver capabilities ([#616](https://github.com/graycoreio/daffodil/issues/616)) ([3fee926](https://github.com/graycoreio/daffodil/commit/3fee926624d49ffa6bac12c0c55965fc059dcd05))
* **design-land:** update theme file and import daff-util into design land ([#638](https://github.com/graycoreio/daffodil/issues/638)) ([af1be2b](https://github.com/graycoreio/daffodil/commit/af1be2b0e696cb4656cfa130a68d66d91e2878b0))
* **newsletter, hubspot, driver:** prefer composition over inheritance ([#635](https://github.com/graycoreio/daffodil/issues/635)) ([37388de](https://github.com/graycoreio/daffodil/commit/37388de79c099e043a2e57edfcb0942f855a665a))


### Bug Fixes

* **demo:** add @daffodil/geography module to demo-dev tsconfig ([#644](https://github.com/graycoreio/daffodil/issues/644)) ([1fdff76](https://github.com/graycoreio/daffodil/commit/1fdff76cdcd651fb379916e8bc3ab6418371a07d))

## [0.4.0](https://github.com/graycoreio/daffodil/compare/v0.3.3...v0.4.0) (2020-02-17)


### ⚠ BREAKING CHANGES

* **design:** This explicitly breaks the old `daff-modal` implementation and replaces it with a simpler service-based dynamically rendered version.

### Features

* **auth:** add logout method to login service ([#624](https://github.com/graycoreio/daffodil/issues/624)) ([696e3b5](https://github.com/graycoreio/daffodil/commit/696e3b572e177e41fa19a99970a7255813556dfc))
* **auth:** remove DaffAccountRegistration generic ([#634](https://github.com/graycoreio/daffodil/issues/634)) ([fc7b68d](https://github.com/graycoreio/daffodil/commit/fc7b68da4c0186677d6c029cfa0918932eac62e3))
* **design:** add image component ([#621](https://github.com/graycoreio/daffodil/issues/621)) ([0a48bbe](https://github.com/graycoreio/daffodil/commit/0a48bbe1e9d4b74cb85aaea4e89c756b9f5e249c))
* **design:** implement DaffFormFieldControl methods on input and select components ([#584](https://github.com/graycoreio/daffodil/issues/584)) ([249d249](https://github.com/graycoreio/daffodil/commit/249d2495af051c0a492b8862f974f509de9b142d))
* **design:** rework modal to be dynamically rendered ([#517](https://github.com/graycoreio/daffodil/issues/517)) ([54823c9](https://github.com/graycoreio/daffodil/commit/54823c999f1441d1edf986de8c6d43f25e9b6275))
* **geography:** publish new geography package! ([#632](https://github.com/graycoreio/daffodil/issues/632)) ([10fc31f](https://github.com/graycoreio/daffodil/commit/10fc31f4d698b2746187119a9d5e2c85b943e7c4))


### Bug Fixes

* **auth:** logout observables not emitting ([#628](https://github.com/graycoreio/daffodil/issues/628)) ([dbb79c7](https://github.com/graycoreio/daffodil/commit/dbb79c7e071384019c79621d2b381c70a7888dae))
* **contact:** exported contact backend service ([#630](https://github.com/graycoreio/daffodil/issues/630)) ([71cdf31](https://github.com/graycoreio/daffodil/commit/71cdf3154283c6e589de236e1a135a63c569e6db))
* **newsletter:** exported backend service and testing module ([#629](https://github.com/graycoreio/daffodil/issues/629)) ([3c51e7b](https://github.com/graycoreio/daffodil/commit/3c51e7bd7be0ef7f65af7a80dc005b4f7ca03ce4))

### [0.3.3](https://github.com/graycoreio/daffodil/compare/v0.3.2...v0.3.3) (2020-02-12)


### Features

* **auth:** add testing driver ([#592](https://github.com/graycoreio/daffodil/issues/592)) ([a684f82](https://github.com/graycoreio/daffodil/commit/a684f82979462c2e3720df5e9c89f533f5014f57))
* **auth:** add testing in-memory drivers ([#591](https://github.com/graycoreio/daffodil/issues/591)) ([c8ec452](https://github.com/graycoreio/daffodil/commit/c8ec4527baa21a7fb7ee1a79e87d1e4bd3bcf235))
* **auth:** remove aliased types ([#614](https://github.com/graycoreio/daffodil/issues/614)) ([c9f8a66](https://github.com/graycoreio/daffodil/commit/c9f8a66a07fee75cc403afb3d3c971ae4b1ff00a))
* **auth:** remove publish script from package.json ([#605](https://github.com/graycoreio/daffodil/issues/605)) ([8a6c24b](https://github.com/graycoreio/daffodil/commit/8a6c24b3664616571c3e34fe098a3209e660da84))
* **cart:** remodel DaffCart ([#610](https://github.com/graycoreio/daffodil/issues/610)) ([92775f6](https://github.com/graycoreio/daffodil/commit/92775f6e5b15a76b3bcabd45d1aa7c0fac8fc543))
* **checkout:** replace DaffCart type with Order type ([#608](https://github.com/graycoreio/daffodil/issues/608)) ([7ec003b](https://github.com/graycoreio/daffodil/commit/7ec003bfb1b7ecdda86c72552573ed0f43916948))
* **demo:** replace bad tax calculation code with stub ([#606](https://github.com/graycoreio/daffodil/issues/606)) ([3c54727](https://github.com/graycoreio/daffodil/commit/3c54727ad1fff81fe8ecc06bdd3d427f5825a17a))
* **design:** expand id type on qty-dropdown to allow for strings ([#607](https://github.com/graycoreio/daffodil/issues/607)) ([c563e2a](https://github.com/graycoreio/daffodil/commit/c563e2ad7dc79cd064af7793b18dbcba502eb595))
* **paypal:** add the paypal package ([#569](https://github.com/graycoreio/daffodil/issues/569)) ([faaf630](https://github.com/graycoreio/daffodil/commit/faaf630f62982acbf31c80dbc154dddf322a49b3))


### Bug Fixes

* **category, core:** fix bug where category inmemory service would delete produ... ([#611](https://github.com/graycoreio/daffodil/issues/611)) ([a94c146](https://github.com/graycoreio/daffodil/commit/a94c14610df5fef3f9a3e7933cbf4ead83fdc2b7))

### [0.3.2](https://github.com/graycoreio/daffodil/compare/v0.3.1...v0.3.2) (2020-02-05)


### Features

* **auth:** add driver interfaces ([#600](https://github.com/graycoreio/daffodil/issues/600)) ([c9a0548](https://github.com/graycoreio/daffodil/commit/c9a05484c3347b1baeb9a063eceda4050312ad36))
* **auth:** add testing factories ([#590](https://github.com/graycoreio/daffodil/issues/590)) ([ad3cd58](https://github.com/graycoreio/daffodil/commit/ad3cd588c9b9a9e93ea7cc76de03e7467f637538))
* **auth:** basic package w/ interfaces ([#599](https://github.com/graycoreio/daffodil/issues/599)) ([8eb8d29](https://github.com/graycoreio/daffodil/commit/8eb8d299aeec505bee414a6dd1019a28d52d1ebd))
* **authorizenet:** add Authorize.net Accept.js package ([#566](https://github.com/graycoreio/daffodil/issues/566)) ([8c081b1](https://github.com/graycoreio/daffodil/commit/8c081b1d1a55b12ab47bd293567a630e493a43cd))
* **category:** make inmemory api capable of taking page_size and current_page ([#588](https://github.com/graycoreio/daffodil/issues/588)) ([73185e0](https://github.com/graycoreio/daffodil/commit/73185e001240311875c352e44a77c9920cddc6cb))
* **demo:** add angular compiler options to the tsconfig and fix errors ([#586](https://github.com/graycoreio/daffodil/issues/586)) ([1dd9a49](https://github.com/graycoreio/daffodil/commit/1dd9a49b008634a74e4702d92b6b0bc7034f76b1))
* **design:** remove generic on DaffFormFieldControl ([#581](https://github.com/graycoreio/daffodil/issues/581)) ([9ed5a75](https://github.com/graycoreio/daffodil/commit/9ed5a75820cf152873d04b128539bfb46216cb50))
* **design:** remove hostbinding from input component ([#582](https://github.com/graycoreio/daffodil/issues/582)) ([a7135f4](https://github.com/graycoreio/daffodil/commit/a7135f4f311f4664e197c540a6cb3e2f51ff7377))
* **design:** update input styles ([#583](https://github.com/graycoreio/daffodil/issues/583)) ([b2e4c00](https://github.com/graycoreio/daffodil/commit/b2e4c00cf13d4f64bde98e619202734c1c2f9807))

### [0.3.1](https://github.com/graycoreio/daffodil/compare/v0.3.0...v0.3.1) (2020-02-01)


### Features

* **driver:** make driver module publishable ([#587](https://github.com/graycoreio/daffodil/issues/587)) ([a1b7a83](https://github.com/graycoreio/daffodil/commit/a1b7a83caff7296df32cf9873bb8cb7f928401bc))

## [0.3.0](https://github.com/graycoreio/daffodil/compare/v0.2.13...v0.3.0) (2020-01-31)


### ⚠ BREAKING CHANGES

* **cart, demo, checkout:** this makes the `DaffCartServiceInterface` generic, so client dependencies will need to implement the generic.

### Features

* **all:** automated release process for [@daffodil](https://github.com/daffodil) packages ([#502](https://github.com/graycoreio/daffodil/issues/502)) ([d50220c](https://github.com/graycoreio/daffodil/commit/d50220c540b88ace717c9365ec0203a985922113))
* **all:** bump dependencies for http-proxy-agent and handlebars security advisories ([5201744](https://github.com/graycoreio/daffodil/commit/520174415808e3cc15dc4f63b31e1ff17b53e9ba))
* **backdrop:** add fullscreen flag to backdrop ([#515](https://github.com/graycoreio/daffodil/issues/515)) ([16f7991](https://github.com/graycoreio/daffodil/commit/16f799112b04461fefacbffc3beb86d0b9d50fd9))
* **cart:** add cart id storage mechanism for persistent state ([#571](https://github.com/graycoreio/daffodil/issues/571)) ([9942cc3](https://github.com/graycoreio/daffodil/commit/9942cc3e7e1ad9ca973ef64f03086ad7bccd1ad2))
* **cart, demo, checkout:** make cart semi-generic ([#572](https://github.com/graycoreio/daffodil/issues/572)) ([6e83704](https://github.com/graycoreio/daffodil/commit/6e83704c33eba9c73182839b90433c55158782f8))
* **category:** add actions and effects for category pagination([#513](https://github.com/graycoreio/daffodil/issues/513)) ([05f0fd9](https://github.com/graycoreio/daffodil/commit/05f0fd94730af642ac3e2414bbd69fba869bd97b))
* **category:** add selectors for selecting multiple categories ([#578](https://github.com/graycoreio/daffodil/issues/578)) ([78baa59](https://github.com/graycoreio/daffodil/commit/78baa59f903d64c4149ed58e3a37ebddeea42044))
* **checkout:** add checkout order facade and update Daff prefix ([#535](https://github.com/graycoreio/daffodil/issues/535)) ([84b02e4](https://github.com/graycoreio/daffodil/commit/84b02e4c8631bcbeac6b680e41645f7b6912062b))
* **checkout:** add driver tokens, interfaces, and models for payments ([#549](https://github.com/graycoreio/daffodil/issues/549)) ([01f981f](https://github.com/graycoreio/daffodil/commit/01f981f6fb72cef6703b85f0d8d086a6d8835aad))
* **checkout:** drop unused containers and add facades ([#532](https://github.com/graycoreio/daffodil/issues/532)) ([e734683](https://github.com/graycoreio/daffodil/commit/e734683256bda6e3a70706bc318e54eaacbc5ce8))
* **checkout:** update action names and add facade ([#534](https://github.com/graycoreio/daffodil/issues/534)) ([eca3814](https://github.com/graycoreio/daffodil/commit/eca3814056ed281e6af0238cad5cc11222ef47b3))
* **contact:** added actions and reducers ([#519](https://github.com/graycoreio/daffodil/issues/519)) ([6dff579](https://github.com/graycoreio/daffodil/commit/6dff579e449e9577ddac65bb8a40d4891841eab1))
* **contact:** added driver interface layer and testing driver ([f0e4c8c](https://github.com/graycoreio/daffodil/commit/f0e4c8cc6249b49bab0f5ad64ee6ffd7fb978156))
* **contact:** added hubspot driver  ([#545](https://github.com/graycoreio/daffodil/issues/545)) ([9765dc0](https://github.com/graycoreio/daffodil/commit/9765dc0f9e98573e23324d665dc4ae1b9c4ff37e))
* **contact:** added in-memory backend and driver ([e3897c4](https://github.com/graycoreio/daffodil/commit/e3897c4194476cf684a18c3404bb8998d0dfe23e))
* **contact:** added ngrx effects to contact ([a16a8af](https://github.com/graycoreio/daffodil/commit/a16a8af1478186e3f3aeac068aa2fa614a822980))
* **contact:** added selectors and facades for @daffodil/contact ([#520](https://github.com/graycoreio/daffodil/issues/520)) ([95b17e3](https://github.com/graycoreio/daffodil/commit/95b17e362cdd3e27869481a35362cbdca53183c1))
* **contact:** created @daffodil/contact library ([#518](https://github.com/graycoreio/daffodil/issues/518)) ([8cf6b32](https://github.com/graycoreio/daffodil/commit/8cf6b3235b2d81cb9d21c4a9f68010c64deee132))
* **contact:** made contact library publishable ([#540](https://github.com/graycoreio/daffodil/issues/540)) ([80fa917](https://github.com/graycoreio/daffodil/commit/80fa917341b8e11236c8adf58d396140156a9d6f))
* **contact:** updated index and tsconfig ([70e8fdf](https://github.com/graycoreio/daffodil/commit/70e8fdf15e3ee49cc83544c655ec8ba60864a9c0))
* **core:** add daff persistence API with localstorage implementation ([#570](https://github.com/graycoreio/daffodil/issues/570)) ([460941b](https://github.com/graycoreio/daffodil/commit/460941b16d9d883f4e34b06a2111e855142cea68))
* **demo:** make demo AOT compatible by removing `getDriverVariant` ([#504](https://github.com/graycoreio/daffodil/issues/504)) ([dfe6db5](https://github.com/graycoreio/daffodil/commit/dfe6db5a18fbe2be3845950b8ad1da1867030702))
* **demo:** use @daffodil/newsletter in demo newsletter feature ([d7c74d8](https://github.com/graycoreio/daffodil/commit/d7c74d8dbfca1447f4594cf0c9a0e6bc3d23fb22))
* **design:** add form label directive ([#529](https://github.com/graycoreio/daffodil/issues/529)) ([a23b9ee](https://github.com/graycoreio/daffodil/commit/a23b9eef74de4a5d2e6430791a143242e5d87859))
* **design:** add prefix/suffix directives to @daffodil/design ([#527](https://github.com/graycoreio/daffodil/issues/527)) ([87f909c](https://github.com/graycoreio/daffodil/commit/87f909ccadcb190fb4520d80ec75fbd73a8a42d1))
* **design:** add prefix/suffix to button ([#539](https://github.com/graycoreio/daffodil/issues/539)) ([ab91736](https://github.com/graycoreio/daffodil/commit/ab917360e1065b9e6b6b298f38b62fca35ce4a79))
* **design:** add themablility to daff-modal ([#516](https://github.com/graycoreio/daffodil/issues/516)) ([c23d10c](https://github.com/graycoreio/daffodil/commit/c23d10cd1ad0625ef22d80c9ebe4949b99eddbd6))
* **design:** remove chevron mixin and update component usage ([#542](https://github.com/graycoreio/daffodil/issues/542)) ([3e400a3](https://github.com/graycoreio/daffodil/commit/3e400a3098f5ca8247c5f267f77cff94a5b2373f))
* **design:** remove error message dependency on form-field ([#553](https://github.com/graycoreio/daffodil/issues/553)) ([6c4ca03](https://github.com/graycoreio/daffodil/commit/6c4ca039ecd70d691c756c534067da67794ebfcd))
* **design:** update accordion class to use HostBinding ([#558](https://github.com/graycoreio/daffodil/issues/558)) ([b26fd72](https://github.com/graycoreio/daffodil/commit/b26fd7215ecb7055037377d5dafe02fc651cc6f2))
* **design:** update button-set class to use HostBinding ([#559](https://github.com/graycoreio/daffodil/issues/559)) ([4a7979f](https://github.com/graycoreio/daffodil/commit/4a7979f5760ad8ec2bc8c02a4f6429a9dd2f24f6))
* **design:** update card class to use HostBinding ([#560](https://github.com/graycoreio/daffodil/issues/560)) ([e50d0a5](https://github.com/graycoreio/daffodil/commit/e50d0a534c9cadee868c5ce613c03a10ac90504c))
* **design:** update container classes to use HostBinding ([#555](https://github.com/graycoreio/daffodil/issues/555)) ([d57a9cf](https://github.com/graycoreio/daffodil/commit/d57a9cf0a13c45f84f113ff141d42f5a0a1770ec))
* **design:** update feature class to use HostBinding ([#561](https://github.com/graycoreio/daffodil/issues/561)) ([7cb1d63](https://github.com/graycoreio/daffodil/commit/7cb1d6370aecddbee2d1ca7249a1af6402bd07e9))
* **design:** update image-list class to use HostBinding ([#562](https://github.com/graycoreio/daffodil/issues/562)) ([d1bffb6](https://github.com/graycoreio/daffodil/commit/d1bffb6f33f67e8e100f4791722e5ce2dcdb0f84))
* **design:** update list classes to use HostBinding ([#563](https://github.com/graycoreio/daffodil/issues/563)) ([68364ba](https://github.com/graycoreio/daffodil/commit/68364ba22e81778406d68b17e81aa4ac23e28ed3))
* **design:** update list icon implementation to use prefix/suffix ([#528](https://github.com/graycoreio/daffodil/issues/528)) ([09a073b](https://github.com/graycoreio/daffodil/commit/09a073b388c6e8e7e101055e660e5c7641d1761e))
* **design:** update loading icon to use HostBindings over `host` ([#556](https://github.com/graycoreio/daffodil/issues/556)) ([e3e49cf](https://github.com/graycoreio/daffodil/commit/e3e49cfe13b677c9a11f741fac919b8fa016490c))
* **design:** update progress indicator class to use HostBinding ([#557](https://github.com/graycoreio/daffodil/issues/557)) ([5b234f8](https://github.com/graycoreio/daffodil/commit/5b234f866b9820d58aab38ae34f1e5aec05a7a6a))
* **driver:** added driver base for interacting with Hubspot Forms ([#544](https://github.com/graycoreio/daffodil/issues/544)) ([ac33325](https://github.com/graycoreio/daffodil/commit/ac333252aa6378b2caf4f77f678fb62e65d91f08))
* **driver:** removed unused files from driver for repurposing of library ([#547](https://github.com/graycoreio/daffodil/issues/547)) ([2ab60b9](https://github.com/graycoreio/daffodil/commit/2ab60b92dad66dfb1d6e2f75ffe29d89a985f43b))
* **geography:** add  @daffodil/geography package ([#577](https://github.com/graycoreio/daffodil/issues/577)) ([27009a1](https://github.com/graycoreio/daffodil/commit/27009a197521cca5fd19e3ef9785a7bf9bec4444))
* **geography, core:** add DaffAddress types and deprecate core Types ([#585](https://github.com/graycoreio/daffodil/issues/585)) ([b17e983](https://github.com/graycoreio/daffodil/commit/b17e983b2b0613f8454890c1f73eab2b8ae25ec9))
* **newsletter:** add support for the @angular/in-memory-web-api ([#512](https://github.com/graycoreio/daffodil/issues/512)) ([c3c6d3f](https://github.com/graycoreio/daffodil/commit/c3c6d3fa3f09b99774592fcadc7564f33d009dea))
* **newsletter:** added hubspot driver ([#526](https://github.com/graycoreio/daffodil/issues/526)) ([7eda259](https://github.com/graycoreio/daffodil/commit/7eda259c151dce7b3a68f6fdfb27c820ba78ed7d))
* **newsletter:** hide unnecessarily exported tokens from api ([#543](https://github.com/graycoreio/daffodil/issues/543)) ([6aae3be](https://github.com/graycoreio/daffodil/commit/6aae3bed49b6b04cddd6c6e3e5a8c6b7751b8950))
* **newsletter:** updated newsletter hubspot driver to use @daffodil/driver ([#546](https://github.com/graycoreio/daffodil/issues/546)) ([f7645ee](https://github.com/graycoreio/daffodil/commit/f7645eece7cb80e58124565b75f4fa6d548a9744))


### Bug Fixes

* **all:** resync base package version with version in package.json ([b634db1](https://github.com/graycoreio/daffodil/commit/b634db114ffa5a8fe0560d8ad1a006265e5bf3ae))
* **category:** make in-memory backend work with a sensible current_page ([#510](https://github.com/graycoreio/daffodil/issues/510)) ([2c68d17](https://github.com/graycoreio/daffodil/commit/2c68d1729ee52ccddc90c60ea1d067dce25562b8))
* **category:** persists category configuration state on subsequent DaffCategoryLoad ([b399358](https://github.com/graycoreio/daffodil/commit/b399358ace95b54965640683b54474c38061ab49))
* **demo:** add a missing config path to the demo-dev tsconfig ([#552](https://github.com/graycoreio/daffodil/issues/552)) ([9c81a05](https://github.com/graycoreio/daffodil/commit/9c81a05c81eb09d2fa9b34c23259991ef464df36))
* **demo:** add proper deps for demo to build via lerna ([1a4ab4f](https://github.com/graycoreio/daffodil/commit/1a4ab4f289f5406a7e9e492291c1a574746f7371))

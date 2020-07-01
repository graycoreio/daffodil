# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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

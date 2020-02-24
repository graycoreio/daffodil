# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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

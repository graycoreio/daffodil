# Changelog

## [0.81.1](https://github.com/graycoreio/daffodil/compare/v0.81.0...v0.81.1) (2025-01-31)


### Bug Fixes

* widen supported angular range to ^19 ([#3468](https://github.com/graycoreio/daffodil/issues/3468)) ([8311107](https://github.com/graycoreio/daffodil/commit/831110747221c28782cc7d5e4ea0419897579ee7))

## [0.81.0](https://github.com/graycoreio/daffodil/compare/v0.80.0...v0.81.0) (2025-01-28)


### ⚠ BREAKING CHANGES

* remove deprecations ([#3464](https://github.com/graycoreio/daffodil/issues/3464))
* Angular has been upgraded to v19
* **dgeni,docs-utils:** the ToC types have been trimmed up to only have fields used

### Features

* **core:** add `daffMerge` ([#3441](https://github.com/graycoreio/daffodil/issues/3441)) ([b20b7ce](https://github.com/graycoreio/daffodil/commit/b20b7ceba79052528c1f665f35136744b6ef9f79))
* **daffio:** add safe html pipe ([#3413](https://github.com/graycoreio/daffodil/issues/3413)) ([128fa4a](https://github.com/graycoreio/daffodil/commit/128fa4a5b1e14c925d38d84b18aae67b6c01cbaf))
* **daffio:** clean up doc article template UI ([#3431](https://github.com/graycoreio/daffodil/issues/3431)) ([ef5254b](https://github.com/graycoreio/daffodil/commit/ef5254bb81e6d56ecc739e02636c749a0a5b680d))
* **daffio:** dynamically render doc views ([#3415](https://github.com/graycoreio/daffodil/issues/3415)) ([4edd95a](https://github.com/graycoreio/daffodil/commit/4edd95a1115c8e3cb12a26641aef00c592fe7370))
* **daffio:** fix duplicate selector names in docs components ([#3418](https://github.com/graycoreio/daffodil/issues/3418)) ([4c6e46a](https://github.com/graycoreio/daffodil/commit/4c6e46a598dc3bd359dd7caf80721cac0905596e))
* **daffio:** replace dynamic doc renderer with service in page component ([#3419](https://github.com/graycoreio/daffodil/issues/3419)) ([d3cee1e](https://github.com/graycoreio/daffodil/commit/d3cee1efdf07314cf91911b847be8ad0c1ed9fe6))
* **daffio:** split daffio nav into separate docs and marketing components ([#3436](https://github.com/graycoreio/daffodil/issues/3436)) ([91ac6ab](https://github.com/graycoreio/daffodil/commit/91ac6ab325ea7efbf5a41f21254d153918e2c46f))
* **daffio:** support always showing sidebar header and footer ([#3451](https://github.com/graycoreio/daffodil/issues/3451)) ([249b8f9](https://github.com/graycoreio/daffodil/commit/249b8f959fdd070b348c503a8700ee8a722edd10))
* **design:** add link mode to tabs component ([#3429](https://github.com/graycoreio/daffodil/issues/3429)) ([69d2859](https://github.com/graycoreio/daffodil/commit/69d28594e860ae69a1e0ea3cc93e6ad060fe4d35))
* **design:** clean up sidebar header UI ([#3453](https://github.com/graycoreio/daffodil/issues/3453)) ([814c33f](https://github.com/graycoreio/daffodil/commit/814c33f7454f18ec765d748f0bb3686121e2b7a9))
* **design:** clean up typography docs and update usage of font family base ([#3427](https://github.com/graycoreio/daffodil/issues/3427)) ([bfb40e4](https://github.com/graycoreio/daffodil/commit/bfb40e4f52e6b9eb402919e3784fa26e007bceb0))
* **design:** deprecate embolden mixin and class ([#3409](https://github.com/graycoreio/daffodil/issues/3409)) ([c339f7c](https://github.com/graycoreio/daffodil/commit/c339f7c09f9bc3c0b206223be6258e31203074b4))
* **design:** tabs component UI updates ([#3403](https://github.com/graycoreio/daffodil/issues/3403)) ([203f7e0](https://github.com/graycoreio/daffodil/commit/203f7e04388f5e7b229137c28e44aea68df53e1a))
* **design:** update root status tokens to use value retrieved from `daff-map-get` function ([#3428](https://github.com/graycoreio/daffodil/issues/3428)) ([f299a83](https://github.com/graycoreio/daffodil/commit/f299a839aba30f06f0521aa133be4741898d6aee))
* **dgeni,daffio:** implement ToC for package guide API symbols ([#3440](https://github.com/graycoreio/daffodil/issues/3440)) ([8c8d530](https://github.com/graycoreio/daffodil/commit/8c8d53041354442108a1812f13eb82e62c3cc565))
* **dgeni,docs-utils:** add kind to documents ([#3396](https://github.com/graycoreio/daffodil/issues/3396)) ([a26cde4](https://github.com/graycoreio/daffodil/commit/a26cde40ac29ce4805d3393805a63739eaff7d74))
* **dgeni,docs-utils:** extract out ToC type ([#3397](https://github.com/graycoreio/daffodil/issues/3397)) ([0db48b5](https://github.com/graycoreio/daffodil/commit/0db48b5e7b519c2ed90a8e22a2a5197460c876c6))
* **dgeni,docs-utils:** store API docs and symbols on package guides ([#3412](https://github.com/graycoreio/daffodil/issues/3412)) ([7a9f3d0](https://github.com/graycoreio/daffodil/commit/7a9f3d0afa84531f18b4920929b26bcd01577859))
* **dgeni,docs,daffio:** implement ToC for all doc kinds ([#3423](https://github.com/graycoreio/daffodil/issues/3423)) ([676e498](https://github.com/graycoreio/daffodil/commit/676e498c01aa42837bb9b21ff66b414bd9f38e10))
* **docs-utils,dgeni:** pull examples out of content and store in doc ([#3389](https://github.com/graycoreio/daffodil/issues/3389)) ([84a5def](https://github.com/graycoreio/daffodil/commit/84a5def17246eacaf073da6503dacd10ed292f5f))
* **docs-utils:** support component doc kinds in helper ([#3398](https://github.com/graycoreio/daffodil/issues/3398)) ([bd26e3d](https://github.com/graycoreio/daffodil/commit/bd26e3dca8473437be2f59bc269d56b54a0c701f))
* **product:** deprecate best sellers ([#3461](https://github.com/graycoreio/daffodil/issues/3461)) ([13f40a4](https://github.com/graycoreio/daffodil/commit/13f40a416062b8ee8bbbbe44572c1678f384676e))
* remove deprecations ([#3464](https://github.com/graycoreio/daffodil/issues/3464)) ([ff9d582](https://github.com/graycoreio/daffodil/commit/ff9d582a45d8db54b3b159695c330abc4ad7655a))
* **router:** add merge strategy config for route data service ([#3443](https://github.com/graycoreio/daffodil/issues/3443)) ([455e53b](https://github.com/graycoreio/daffodil/commit/455e53b6e65d6a2f555f3b36292a5a0dd8e618f2))
* **router:** deprecate `DaffRouterActivatedRoute` ([#3460](https://github.com/graycoreio/daffodil/issues/3460)) ([be722a7](https://github.com/graycoreio/daffodil/commit/be722a7a449c57d98b7fc40eb0a99f61334a3edb))
* upgrade to Angular v19 ([#3351](https://github.com/graycoreio/daffodil/issues/3351)) ([0275f41](https://github.com/graycoreio/daffodil/commit/0275f410b57d44815c73d278f3fb3c14e3dcc649))


### Bug Fixes

* **core:** mutating object merger ([#3454](https://github.com/graycoreio/daffodil/issues/3454)) ([71f5f6f](https://github.com/graycoreio/daffodil/commit/71f5f6f335066b54664e9fc43cd9c275ea329877))
* **daffio:** API package ToC missing error ([#3442](https://github.com/graycoreio/daffodil/issues/3442)) ([c461515](https://github.com/graycoreio/daffodil/commit/c461515bda6c2b118212fa98abc701559e37dc36))
* **daffio:** rendering empty toc ([#3416](https://github.com/graycoreio/daffodil/issues/3416)) ([7c57b80](https://github.com/graycoreio/daffodil/commit/7c57b8081d463671c39702a15a7c7efb25ec0d90))
* **daffio:** sidebars not registered on child docs routes ([#3444](https://github.com/graycoreio/daffodil/issues/3444)) ([2017cc8](https://github.com/graycoreio/daffodil/commit/2017cc8f66e7b0c9062f6ebb573f6ef2082c8c6c))
* **design:** fix sidebar flickering on SSR ([#3434](https://github.com/graycoreio/daffodil/issues/3434)) ([b3e10bd](https://github.com/graycoreio/daffodil/commit/b3e10bd082f01d5fb8d52f37e5e6368ebbd836ed))
* **design:** fix sticky element positioning by updating sidebar viewport overflow for opened over/under sidebars ([#3452](https://github.com/graycoreio/daffodil/issues/3452)) ([3f35296](https://github.com/graycoreio/daffodil/commit/3f352963124f5276a0294fb7c3db94b2db596e9a))
* **dgeni:** incorrect generation of design ToC ([#3411](https://github.com/graycoreio/daffodil/issues/3411)) ([cb8d631](https://github.com/graycoreio/daffodil/commit/cb8d6310a138cc3df5695cc8c42bc1c0f5a74d55))
* **docs-utils:** link computation missing for components ([#3410](https://github.com/graycoreio/daffodil/issues/3410)) ([4f2eaca](https://github.com/graycoreio/daffodil/commit/4f2eacae7b43dadefb4934614c1e619c19d181a6))

## [0.80.0](https://github.com/graycoreio/daffodil/compare/v0.79.0...v0.80.0) (2025-01-06)


### ⚠ BREAKING CHANGES

* upgrade node to `20.18` ([#3361](https://github.com/graycoreio/daffodil/issues/3361))

### Features

* **daffio:** add schema to homepage ([#3378](https://github.com/graycoreio/daffodil/issues/3378)) ([2c07c6f](https://github.com/graycoreio/daffodil/commit/2c07c6f8577b2b115ba33dbee9953120ce4d5630))
* **daffio:** only render root api nav items ([#3354](https://github.com/graycoreio/daffodil/issues/3354)) ([01dbb28](https://github.com/graycoreio/daffodil/commit/01dbb28f677886f4514f83977ab766cb79537706))
* **design:** add switch component ([#3143](https://github.com/graycoreio/daffodil/issues/3143)) ([8879733](https://github.com/graycoreio/daffodil/commit/8879733a5e7a2c0b1c52e3fec61246553eca3f6d))
* **design:** create `DaffSelectable` host directive ([#2910](https://github.com/graycoreio/daffodil/issues/2910)) ([9245bb6](https://github.com/graycoreio/daffodil/commit/9245bb614b16d531b243b3d7231e5daf3494842c))
* **design:** create daff-map-get function ([#3358](https://github.com/graycoreio/daffodil/issues/3358)) ([82045b7](https://github.com/graycoreio/daffodil/commit/82045b7861e80ce73ab76a44c0f67000a6166852))
* **design:** remove DaffArticleEncapsulatedDirective from tabs component ([#3387](https://github.com/graycoreio/daffodil/issues/3387)) ([db4e9ef](https://github.com/graycoreio/daffodil/commit/db4e9ef11eba9e0f6f7c5fac73472e0ebf61e0c7))
* **design:** tab style updates ([#3379](https://github.com/graycoreio/daffodil/issues/3379)) ([53d3a41](https://github.com/graycoreio/daffodil/commit/53d3a41e013c91c8e80c570faaf7925707ba20ef))
* **design:** update active style for list component ([#3356](https://github.com/graycoreio/daffodil/issues/3356)) ([95d2d31](https://github.com/graycoreio/daffodil/commit/95d2d3139063cf25b390a3d6701229f93c07e8f4))
* **eslint:** add linting rules for testing ([#3056](https://github.com/graycoreio/daffodil/issues/3056)) ([1f1f854](https://github.com/graycoreio/daffodil/commit/1f1f85482b0d5d5fbdc9c5f5ec5f06ad2ff022cc))
* **external-router:** add schema for magento v2.4.3.+ ([#3378](https://github.com/graycoreio/daffodil/issues/3378)) ([15e6dd9](https://github.com/graycoreio/daffodil/commit/15e6dd9f6538543d9a7cd053fa7893cd995e4182))
* **seo:** add schema support ([#3378](https://github.com/graycoreio/daffodil/issues/3378)) ([b249bc5](https://github.com/graycoreio/daffodil/commit/b249bc5129f14b7bde38d2b3c3de019e4547ad77))


### Bug Fixes

* **design-land:** add missing provideDaffToast provider inn root ([#3380](https://github.com/graycoreio/daffodil/issues/3380)) ([845d490](https://github.com/graycoreio/daffodil/commit/845d4908f2660082a647f1f044646e0f8c5e6bce))
* **dgeni:** breadcrumbs have relative paths ([#3355](https://github.com/graycoreio/daffodil/issues/3355)) ([4ec3743](https://github.com/graycoreio/daffodil/commit/4ec37437c8fe3328dd4f97ee409ce9217658cb4b))
* **router:** old route data is replayed for new routes ([#3352](https://github.com/graycoreio/daffodil/issues/3352)) ([ea2e75d](https://github.com/graycoreio/daffodil/commit/ea2e75d910b59adae4117d2e25d56ffee7b716ab))


### Miscellaneous Chores

* upgrade node to `20.18` ([#3361](https://github.com/graycoreio/daffodil/issues/3361)) ([d5524f1](https://github.com/graycoreio/daffodil/commit/d5524f152a14113957e85e2e44003b558f1c58e0))

## [0.79.0](https://github.com/graycoreio/daffodil/compare/v0.78.0...v0.79.0) (2024-11-26)


### ⚠ BREAKING CHANGES

* **design:** remove the diameter property of loading icon ([#3341](https://github.com/graycoreio/daffodil/issues/3341))
* **external-router:** This is a substantial overhaul to the `@daffodil/external-router`. The most important change is the removal of `DaffExternalRouterExistenceGuard` and supporting services in favor of `daffExternalMatcherTypeGuard`. See the docs for exactly how to change your `Routes`.
* **dgeni,daffio:** align dgeni and daffio doc types ([#3333](https://github.com/graycoreio/daffodil/issues/3333))
* **design:** the `danger` value in `DaffStatus` has been changed to `critical`.
* **all:** `SEARCH_FEDERATED_CONFIG_DEFAULT` -> `DAFF_SEARCH_FEDERATED_CONFIG_DEFAULT`, `SEARCH_FEDERATED_CONFIG_TOKEN` -> `DAFF_SEARCH_FEDERATED_CONFIG_TOKEN`
* **all:** rename provider functions to `provideDaff...` ([#3270](https://github.com/graycoreio/daffodil/issues/3270))

### Features

* **all:** export driver providers ([#3273](https://github.com/graycoreio/daffodil/issues/3273)) ([b833dc5](https://github.com/graycoreio/daffodil/commit/b833dc5834e7dd0aa9e233153e67a741253908fa))
* **all:** provide cacheable operations with function ([#3282](https://github.com/graycoreio/daffodil/issues/3282)) ([e9fc8dc](https://github.com/graycoreio/daffodil/commit/e9fc8dc2684f8478b2f416151b12186b90bee075))
* **all:** provide drivers with provider functions ([#3275](https://github.com/graycoreio/daffodil/issues/3275)) ([b69b8ec](https://github.com/graycoreio/daffodil/commit/b69b8ecc1609b7b83eea78300eecbec480cc5659))
* **all:** provide factories with function ([#3285](https://github.com/graycoreio/daffodil/issues/3285)) ([19f05b0](https://github.com/graycoreio/daffodil/commit/19f05b0bb8a9dd078bc4598953ec1401027be28e))
* **all:** rename provider functions to `provideDaff...` ([#3270](https://github.com/graycoreio/daffodil/issues/3270)) ([c098de0](https://github.com/graycoreio/daffodil/commit/c098de07f3e84b0bfadb85960d87c25158590ecd))
* **all:** use functions for providing configs ([#3283](https://github.com/graycoreio/daffodil/issues/3283)) ([4c3c9f1](https://github.com/graycoreio/daffodil/commit/4c3c9f16a025dbd924add251a2bed982e6f2794e))
* **all:** use provider functions ([#3288](https://github.com/graycoreio/daffodil/issues/3288)) ([166a876](https://github.com/graycoreio/daffodil/commit/166a876f250fe16a645bd720238b00398dbca2d2))
* **all:** use provider functions for providing configs ([#3280](https://github.com/graycoreio/daffodil/issues/3280)) ([ed7930f](https://github.com/graycoreio/daffodil/commit/ed7930fc6de5ff39e7e38cff39d2ed602e21302d))
* **all:** use singleton injection token factory for driver tokens ([#3268](https://github.com/graycoreio/daffodil/issues/3268)) ([2b16c62](https://github.com/graycoreio/daffodil/commit/2b16c62f8168fa3a7e2e4046518f5219c4ec99c2))
* **analytics:** create injection tokens with factory ([#3221](https://github.com/graycoreio/daffodil/issues/3221)) ([c3ea0bf](https://github.com/graycoreio/daffodil/commit/c3ea0bf4471ae4639cb928852280f72741e35362))
* **auth:** create injection tokens with factory ([#3233](https://github.com/graycoreio/daffodil/issues/3233)) ([8f078f5](https://github.com/graycoreio/daffodil/commit/8f078f5612e107b01a8817a0189a0ee07dd6c516))
* **authorizenet:** create injection tokens with factory ([#3234](https://github.com/graycoreio/daffodil/issues/3234)) ([f96294f](https://github.com/graycoreio/daffodil/commit/f96294f1ac87f8f76e18ad62afad175d7e97c770))
* **cart-customer:** create injection tokens with factory ([#3236](https://github.com/graycoreio/daffodil/issues/3236)) ([b07ab07](https://github.com/graycoreio/daffodil/commit/b07ab0723a1885e26cfc5ac31aa74e944751b52e))
* **cart-store-credit:** create injection tokens with factory ([#3237](https://github.com/graycoreio/daffodil/issues/3237)) ([0518d60](https://github.com/graycoreio/daffodil/commit/0518d602b8b2fce3601954d317a8d93028ea3685))
* **cart:** create injection tokens with factory ([#3235](https://github.com/graycoreio/daffodil/issues/3235)) ([e536798](https://github.com/graycoreio/daffodil/commit/e5367987031bc064ad862b0438aa37717d63104d))
* **category:** combine all metadata effects ([#3294](https://github.com/graycoreio/daffodil/issues/3294)) ([887c839](https://github.com/graycoreio/daffodil/commit/887c839c715b4482c62277e00960396c2b66b779))
* **category:** create injection tokens with factory ([#3238](https://github.com/graycoreio/daffodil/issues/3238)) ([2a9a32d](https://github.com/graycoreio/daffodil/commit/2a9a32d642e8d69888dceda7b094b22a4ffd01f1))
* **contact:** create injection tokens with factory ([#3239](https://github.com/graycoreio/daffodil/issues/3239)) ([0ae0282](https://github.com/graycoreio/daffodil/commit/0ae0282d90f6e35f885119608e06ac15dd88fe44))
* **content:** create injection tokens with factory ([#3265](https://github.com/graycoreio/daffodil/issues/3265)) ([5ac537a](https://github.com/graycoreio/daffodil/commit/5ac537a50f92de79dfea1b322565d1b18a3de108))
* **core:** add singleton injection token factory ([#3261](https://github.com/graycoreio/daffodil/issues/3261)) ([a454214](https://github.com/graycoreio/daffodil/commit/a4542144daf6a490f579051b6247481c486172c1))
* **core:** create injection tokens with factory ([#3240](https://github.com/graycoreio/daffodil/issues/3240)) ([615ccbc](https://github.com/graycoreio/daffodil/commit/615ccbcb813d527e6f685bce4ae3395f4027b00f))
* **core:** support injection token values to config provider ([#3277](https://github.com/graycoreio/daffodil/issues/3277)) ([c1de2d5](https://github.com/graycoreio/daffodil/commit/c1de2d55b5e3f785b88bb53ad3654f7cc9690292))
* **customer-order:** create injection tokens with factory ([#3242](https://github.com/graycoreio/daffodil/issues/3242)) ([31af2df](https://github.com/graycoreio/daffodil/commit/31af2df719572eaa5cfab9162e41f1bbc04d35df))
* **customer-order:** create injection tokens with factory ([#3263](https://github.com/graycoreio/daffodil/issues/3263)) ([87ff316](https://github.com/graycoreio/daffodil/commit/87ff31632465fd02d6799c6a7d9409e28be3195e))
* **customer-payment-authorizenet:** create injection tokens with factory ([#3244](https://github.com/graycoreio/daffodil/issues/3244)) ([c457f77](https://github.com/graycoreio/daffodil/commit/c457f776e38739ca45d655a6610477b31ae9520b))
* **customer-payment:** create injection tokens with factory ([#3243](https://github.com/graycoreio/daffodil/issues/3243)) ([81aecc5](https://github.com/graycoreio/daffodil/commit/81aecc5ce4232498bc25967bc0b843b5557a945d))
* **customer-store-credit:** create injection tokens with factory ([#3245](https://github.com/graycoreio/daffodil/issues/3245)) ([b54761b](https://github.com/graycoreio/daffodil/commit/b54761b18b02baaac3959b6790813bedfc38f71e))
* **customer:** create injection tokens with factory ([#3241](https://github.com/graycoreio/daffodil/issues/3241)) ([bd0421a](https://github.com/graycoreio/daffodil/commit/bd0421a8c48bbb7d1386fc5ba5e257268f7c755a))
* **daffio:** clean up design docs overview page ([#3272](https://github.com/graycoreio/daffodil/issues/3272)) ([0f359ce](https://github.com/graycoreio/daffodil/commit/0f359ce7f0918dd00180539e7516c74b9d6c50e9))
* **daffio:** create components overview page ([#3324](https://github.com/graycoreio/daffodil/issues/3324)) ([bbd2fa1](https://github.com/graycoreio/daffodil/commit/bbd2fa1a9c3d7d65482ebb327cc32ec551026baf))
* **daffio:** create injection tokens with factory ([#3267](https://github.com/graycoreio/daffodil/issues/3267)) ([46c8e96](https://github.com/graycoreio/daffodil/commit/46c8e96d8940ca26b5c0ef4576bb131913868ed6))
* **design:** add tabs to component index ([#3316](https://github.com/graycoreio/daffodil/issues/3316)) ([58ac162](https://github.com/graycoreio/daffodil/commit/58ac1625163020cc1cc35c86ae94425c2b978113))
* **design:** allow individual button type imports ([#3328](https://github.com/graycoreio/daffodil/issues/3328)) ([0af779d](https://github.com/graycoreio/daffodil/commit/0af779ddc2b5d6032589ccf42e6549f767551c55))
* **design:** configure defaults for status themes ([#3291](https://github.com/graycoreio/daffodil/issues/3291)) ([cf4d2f7](https://github.com/graycoreio/daffodil/commit/cf4d2f77a23551beb4fe04b92c1c9ba801cc5a78))
* **design:** create `DaffTextSnippetComponent` ([#2945](https://github.com/graycoreio/daffodil/issues/2945)) ([8656d7e](https://github.com/graycoreio/daffodil/commit/8656d7e376cd8924954cc8d4578813c61b5be05f))
* **design:** create DaffTabsComponent ([#3134](https://github.com/graycoreio/daffodil/issues/3134)) ([ffe6c19](https://github.com/graycoreio/daffodil/commit/ffe6c1935ebb5741445e66136702df0d48531afc))
* **design:** create injection tokens with factory ([#3246](https://github.com/graycoreio/daffodil/issues/3246)) ([7b28ecf](https://github.com/graycoreio/daffodil/commit/7b28ecfd6fe089e9e06167489a1a7b86cd351b42))
* **design:** create injection tokens with factory ([#3264](https://github.com/graycoreio/daffodil/issues/3264)) ([0f3bb0b](https://github.com/graycoreio/daffodil/commit/0f3bb0b972cf2b63f4d8ff31ba441deefd1ce386))
* **design:** remove the diameter property of loading icon ([#3341](https://github.com/graycoreio/daffodil/issues/3341)) ([f8f9e94](https://github.com/graycoreio/daffodil/commit/f8f9e94f46517e76a092135d50febd2af5e6c560))
* **design:** remove unnecessary styles in accordion animation ([#3338](https://github.com/graycoreio/daffodil/issues/3338)) ([6d635c8](https://github.com/graycoreio/daffodil/commit/6d635c871b551e1b35412608ca5f578200c7d435))
* **design:** update `DaffStatus` danger value to critical and add an info value ([#3293](https://github.com/graycoreio/daffodil/issues/3293)) ([e3365b2](https://github.com/graycoreio/daffodil/commit/e3365b2d174b35844abb3134a19ee5d978ba8baa))
* **design:** update status colors in statusable components to use the status themes ([#3297](https://github.com/graycoreio/daffodil/issues/3297)) ([2a0418f](https://github.com/graycoreio/daffodil/commit/2a0418f8640ed791e349e2b9e3855f22830054a2))
* **dgeni,daffio:** align dgeni and daffio doc types ([#3333](https://github.com/graycoreio/daffodil/issues/3333)) ([b6bafdd](https://github.com/graycoreio/daffodil/commit/b6bafddf89aaf7270bb162fa8b615294dd4e7d02))
* **dgeni,design:** hardcode nav list order with `index.json` ([#3311](https://github.com/graycoreio/daffodil/issues/3311)) ([158fd78](https://github.com/graycoreio/daffodil/commit/158fd78d490170f74a064a42d91d4da78214367e))
* **dgeni:** add doc descriptions from first section of README ([#3332](https://github.com/graycoreio/daffodil/issues/3332)) ([f5decfa](https://github.com/graycoreio/daffodil/commit/f5decfa00c135739195816fee105e8862e4b7b98))
* **dgeni:** allow missing hardcoded index files ([#3331](https://github.com/graycoreio/daffodil/issues/3331)) ([669e34e](https://github.com/graycoreio/daffodil/commit/669e34e0d44424006810e6b581cf2871bcbe417a))
* **dgeni:** instantiate `marked` for each pipeline ([#3308](https://github.com/graycoreio/daffodil/issues/3308)) ([5987d24](https://github.com/graycoreio/daffodil/commit/5987d24fed82328ed32049ff9262a225a22cee52))
* **docs-utils:** add docs models ([#3330](https://github.com/graycoreio/daffodil/issues/3330)) ([0a4a0d2](https://github.com/graycoreio/daffodil/commit/0a4a0d28b43e3e9285b84bf53a924c57e7d9e928))
* **driver:** create injection tokens with factory ([#3247](https://github.com/graycoreio/daffodil/issues/3247)) ([aba565c](https://github.com/graycoreio/daffodil/commit/aba565c1515de95cf9764fac07e02f2bd3cd7c3c))
* **external-router:** create injection tokens with factory ([#3248](https://github.com/graycoreio/daffodil/issues/3248)) ([fc3ba6f](https://github.com/graycoreio/daffodil/commit/fc3ba6f4b994b4be7a1658d9bc88155a29dded37))
* **external-router:** rework to use canMatchFn ([#2907](https://github.com/graycoreio/daffodil/issues/2907)) ([cc2a4e5](https://github.com/graycoreio/daffodil/commit/cc2a4e5a2b215ac5b2ea374c60d70c81d0bff6de))
* **geography:** create injection tokens with factory ([#3249](https://github.com/graycoreio/daffodil/issues/3249)) ([87f7c6f](https://github.com/graycoreio/daffodil/commit/87f7c6f0a0080aa2386519701b2d60171111739d))
* **navigation:** create injection tokens with factory ([#3250](https://github.com/graycoreio/daffodil/issues/3250)) ([4fc7be6](https://github.com/graycoreio/daffodil/commit/4fc7be680b75a03471db0ce6f9d2af2299236431))
* **newsletter:** create injection tokens with factory ([#3251](https://github.com/graycoreio/daffodil/issues/3251)) ([8533b66](https://github.com/graycoreio/daffodil/commit/8533b66b7a3d96caeb54311dc814bee33e6dfe7a))
* **order:** create injection tokens with factory ([#3252](https://github.com/graycoreio/daffodil/issues/3252)) ([7e971ea](https://github.com/graycoreio/daffodil/commit/7e971eae2a9e453c5c782b696e55a29a5a366ba2))
* **payment:** create injection tokens with factory ([#3253](https://github.com/graycoreio/daffodil/issues/3253)) ([c094225](https://github.com/graycoreio/daffodil/commit/c09422559bd0de2a02b7fe2a5e3c65f12512010e))
* **paypal:** create injection tokens with factory ([#3254](https://github.com/graycoreio/daffodil/issues/3254)) ([0a569dc](https://github.com/graycoreio/daffodil/commit/0a569dca128848b09afe0e9f0c7ceb08df43391f))
* **product-composite:** create injection tokens with factory ([#3256](https://github.com/graycoreio/daffodil/issues/3256)) ([b5e8729](https://github.com/graycoreio/daffodil/commit/b5e8729f0207e4b23bf49495692047b7591f81a4))
* **product-configurable:** create injection tokens with factory ([#3257](https://github.com/graycoreio/daffodil/issues/3257)) ([34b43bb](https://github.com/graycoreio/daffodil/commit/34b43bb88fb8e3aeebc81c4d0299ee25dc6e2b25))
* **product,product-composite:** use default config tokens ([#3278](https://github.com/graycoreio/daffodil/issues/3278)) ([d612544](https://github.com/graycoreio/daffodil/commit/d612544d083a1ee35b187411a7024fa2f72bd371))
* **product:** create injection tokens with factory ([#3255](https://github.com/graycoreio/daffodil/issues/3255)) ([91cf3e9](https://github.com/graycoreio/daffodil/commit/91cf3e9a89579bacd7fa120ce28810f5447bdb1c))
* **release:** add deprecation tasks and ci ([#3323](https://github.com/graycoreio/daffodil/issues/3323)) ([4c70b9a](https://github.com/graycoreio/daffodil/commit/4c70b9a2dbb1b21c15f5c192f4ad61d89f08fad1))
* **reviews:** create injection tokens with factory ([#3258](https://github.com/graycoreio/daffodil/issues/3258)) ([b2b24d7](https://github.com/graycoreio/daffodil/commit/b2b24d7f822fdbab01dfae4d0e84cc17eb915e56))
* **search:** create injection tokens with factory ([#3259](https://github.com/graycoreio/daffodil/issues/3259)) ([2fbd482](https://github.com/graycoreio/daffodil/commit/2fbd482df1734d8eff166cbcc94dffa3ff96115a))
* **seo:** create injection tokens with factory ([#3262](https://github.com/graycoreio/daffodil/issues/3262)) ([e3a6cc1](https://github.com/graycoreio/daffodil/commit/e3a6cc1904ea38fa6764387762a4357c31ccf8bd))
* **ssr:** add link asset preload header service ([#3343](https://github.com/graycoreio/daffodil/issues/3343)) ([df8ce2a](https://github.com/graycoreio/daffodil/commit/df8ce2ad14433bbd1284f2ee8650378bbbb4911e))


### Bug Fixes

* **daffio:** sidebars not loading in SSR ([#3312](https://github.com/graycoreio/daffodil/issues/3312)) ([a5feb39](https://github.com/graycoreio/daffodil/commit/a5feb39373eb4428eca483ed626a7dd4d1c81d14))
* **daffio:** wrong index loaded after 404 and back navigation ([#3339](https://github.com/graycoreio/daffodil/issues/3339)) ([618a630](https://github.com/graycoreio/daffodil/commit/618a630f987af51e6c848f351f49a48fcd360376))
* **design:** fix focus ordering within sidebar viewport ([#3317](https://github.com/graycoreio/daffodil/issues/3317)) ([1af2e67](https://github.com/graycoreio/daffodil/commit/1af2e671f19c66ee9e4f5d8acd838a202a73dee4))
* **dgeni:** API package breadcrumbs missing ([#3296](https://github.com/graycoreio/daffodil/issues/3296)) ([5dad812](https://github.com/graycoreio/daffodil/commit/5dad812428c625d629c160a211c593595b63cbf2))
* **dgeni:** design component guides missing components breadcrumb ([#3334](https://github.com/graycoreio/daffodil/issues/3334)) ([75426c1](https://github.com/graycoreio/daffodil/commit/75426c1930cc85a2a8911259223a847a01597061))
* **dgeni:** incorrect link generation for design guides ([#3292](https://github.com/graycoreio/daffodil/issues/3292)) ([f813a1e](https://github.com/graycoreio/daffodil/commit/f813a1eb3040bd7f19416efc9444fe2eeaee8b78))
* **dgeni:** package guides have relative paths ([#3335](https://github.com/graycoreio/daffodil/issues/3335)) ([45ead29](https://github.com/graycoreio/daffodil/commit/45ead29bb74d5d8aa493541d4ba6da8076f1beb6))
* **dgeni:** syntax highlighting broken for code blocks ([#3307](https://github.com/graycoreio/daffodil/issues/3307)) ([8b7df20](https://github.com/graycoreio/daffodil/commit/8b7df20ed60ce88fe31602c32cd9a70c57ee475f))

## [0.78.0](https://github.com/graycoreio/daffodil/compare/v0.77.0...v0.78.0) (2024-10-14)


### ⚠ BREAKING CHANGES

* **cart:** `COLLECTION_NAMES` has been removed. Use `canHandle` to check backend routing capabilities
* **core,driver:** `DaffInMemoryDataServiceInterface` is now exported from `@daffodil/driver/in-memory` and has been removed from `@daffodil/core/testing`

### Features

* **authorizenet:** support in-memory backend delegate ([#3178](https://github.com/graycoreio/daffodil/issues/3178)) ([1fa2825](https://github.com/graycoreio/daffodil/commit/1fa2825a7608f85d4487a44f2aeb62bd21aef092))
* **auth:** support in-memory backend delegate ([#3181](https://github.com/graycoreio/daffodil/issues/3181)) ([1f775f6](https://github.com/graycoreio/daffodil/commit/1f775f669c5a79830d4682dfd9586660af19569e))
* autogenerate package list in README ([#3109](https://github.com/graycoreio/daffodil/issues/3109)) ([7d7a2c8](https://github.com/graycoreio/daffodil/commit/7d7a2c857086acb61ed91abe0b3ba8f78b8316a3))
* **cart-store-credit:** support in-memory backend delegate ([#3179](https://github.com/graycoreio/daffodil/issues/3179)) ([edbb83f](https://github.com/graycoreio/daffodil/commit/edbb83fae10dab37d08040f1e69d74a89b31cc51))
* **cart:** support in-memory backend delegate ([#3180](https://github.com/graycoreio/daffodil/issues/3180)) ([a8360df](https://github.com/graycoreio/daffodil/commit/a8360dfc793cfd0e4a9c3f798b4b905c70ef1d21))
* **category:** support in-memory backend delegate ([#3182](https://github.com/graycoreio/daffodil/issues/3182)) ([3cd0c1f](https://github.com/graycoreio/daffodil/commit/3cd0c1fe79f7fad828dc836617a8fe0c8ee3e034))
* **contact:** support in-memory backend delegate ([#3183](https://github.com/graycoreio/daffodil/issues/3183)) ([06f29ef](https://github.com/graycoreio/daffodil/commit/06f29ef70ec1a722a24041879db63fd0abc09388))
* **core,driver:** move `DaffInMemoryDataServiceInterface` to `@daffodil/driver/in-memory` ([#3145](https://github.com/graycoreio/daffodil/issues/3145)) ([87277c6](https://github.com/graycoreio/daffodil/commit/87277c6c49afb3ed4e56a29ad7dac04ed3dabd8d))
* **customer-payment:** support in-memory backend delegate ([#3185](https://github.com/graycoreio/daffodil/issues/3185)) ([bc80e7e](https://github.com/graycoreio/daffodil/commit/bc80e7eaab07799b3c199188a03ba9c43911dacd))
* **customer-store-credit:** support in-memory backend delegate ([#3186](https://github.com/graycoreio/daffodil/issues/3186)) ([2a49d59](https://github.com/graycoreio/daffodil/commit/2a49d5936e7e8cece9f396963e4a8ab4c289d1de))
* **customer:** support in-memory backend delegate ([#3184](https://github.com/graycoreio/daffodil/issues/3184)) ([7be26e5](https://github.com/graycoreio/daffodil/commit/7be26e581e424739278ede988e2fd903fb8a5116))
* **daffio:** add active router styles to nav header items ([#3127](https://github.com/graycoreio/daffodil/issues/3127)) ([c03a737](https://github.com/graycoreio/daffodil/commit/c03a737fc8f351d20ad5bc6879e20fcc5e8df7b7))
* **daffio:** add design docs route ([#3113](https://github.com/graycoreio/daffodil/issues/3113)) ([a3bf15a](https://github.com/graycoreio/daffodil/commit/a3bf15a2e4090631a6554106b01c5bd10dd37417))
* **daffio:** render subpackages on package page ([#3094](https://github.com/graycoreio/daffodil/issues/3094)) ([4427fe1](https://github.com/graycoreio/daffodil/commit/4427fe1802c3c7021d0c6a2597b4da19f904d337))
* **demo:** migrate to new in-memory module ([#3197](https://github.com/graycoreio/daffodil/issues/3197)) ([e4c3725](https://github.com/graycoreio/daffodil/commit/e4c3725f7d1ba005195358541dd179cd1bab0bf8))
* **design, daffio:** move sidebar content pad and nav pad code to css ([56628da](https://github.com/graycoreio/daffodil/commit/56628dafe536e337214c5cb53381c48a5e52fc87))
* **design:** convert accordion component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([1e0a518](https://github.com/graycoreio/daffodil/commit/1e0a5182234b3f0c1caeb8c4db2ef601080b6ec4))
* **design:** convert article component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([4c004c6](https://github.com/graycoreio/daffodil/commit/4c004c6de66a1a030fed10ecb5a9ad7f165bb3dd))
* **design:** convert button component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([0205e92](https://github.com/graycoreio/daffodil/commit/0205e920a35743fa054ed5d1b36ca42b48d38870))
* **design:** convert callout component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([1de68ab](https://github.com/graycoreio/daffodil/commit/1de68ab6110a548e05e6322d99a065fcbc3c4cec))
* **design:** convert card component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([7f830b6](https://github.com/graycoreio/daffodil/commit/7f830b6b0ec944900c24522a0ad4a6855ec69d67))
* **design:** convert container component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([994f8bb](https://github.com/graycoreio/daffodil/commit/994f8bbefca92b1e7e0e89cbb3fd1a1846ba4b6a))
* **design:** convert hero to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([8fd50a6](https://github.com/graycoreio/daffodil/commit/8fd50a6fd01113130d4388d5c97be3b85906bfc8))
* **design:** convert image to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([19ca741](https://github.com/graycoreio/daffodil/commit/19ca74182812dcf90267a22e761946dffe8d21dc))
* **design:** convert link set component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([b54d941](https://github.com/graycoreio/daffodil/commit/b54d941e778d3e4b80e74735cd093569be69490e))
* **design:** convert list component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([328a70a](https://github.com/graycoreio/daffodil/commit/328a70a7217c36299bf5950c3c886434a8bb3539))
* **design:** convert media gallery component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([fd933cc](https://github.com/graycoreio/daffodil/commit/fd933ccac10e083b8c20dc22cf51bbfb045b6834))
* **design:** convert menu component to standalone ([#3130](https://github.com/graycoreio/daffodil/issues/3130)) ([1a0d1f5](https://github.com/graycoreio/daffodil/commit/1a0d1f5da1b64c7ef1e4fd0a821e6bc41150e1d3))
* **design:** convert modal component to standalone ([#3131](https://github.com/graycoreio/daffodil/issues/3131)) ([44112b7](https://github.com/graycoreio/daffodil/commit/44112b7faf996184968b07598c15878b05fdfb60))
* **design:** convert navbar component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([dcf8f5c](https://github.com/graycoreio/daffodil/commit/dcf8f5cad4fe2e154b025da8e9ad75d34cd08bb0))
* **design:** convert notification component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([7ca68fd](https://github.com/graycoreio/daffodil/commit/7ca68fd71fbd5f6d8ba0b013f003474b92203303))
* **design:** convert paginator component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([8caa5e1](https://github.com/graycoreio/daffodil/commit/8caa5e17d5523832ed04ab357e3c9d6fd7a71d2f))
* **design:** convert progress bar component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([0c1fc77](https://github.com/graycoreio/daffodil/commit/0c1fc77512780ab32620f861f40d3373851d8383))
* **design:** convert sidebar component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([ce058dd](https://github.com/graycoreio/daffodil/commit/ce058dd5c1995647fea578336e72b2fb8df5bda1))
* **design:** convert toast component to standalone ([#3132](https://github.com/graycoreio/daffodil/issues/3132)) ([8ccd628](https://github.com/graycoreio/daffodil/commit/8ccd62806fa4808266d5206a13419f6f735a8112))
* **design:** convert tree component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([d5cad9a](https://github.com/graycoreio/daffodil/commit/d5cad9aff372260566db8b129da227b36a80c9ad))
* **design:** create `DaffOpenableDirective` ([#2908](https://github.com/graycoreio/daffodil/issues/2908)) ([fa6f4db](https://github.com/graycoreio/daffodil/commit/fa6f4db0e9e69a82a28e7a75edf59b06c040c67f))
* **desing:** convert loading icon component to standalone ([#3054](https://github.com/graycoreio/daffodil/issues/3054)) ([708a6fa](https://github.com/graycoreio/daffodil/commit/708a6fac159776af1060b8dc9c3e4f84c99c4d0f))
* **dgeni:** hardcode design nav list sort order ([#3133](https://github.com/graycoreio/daffodil/issues/3133)) ([e893cb0](https://github.com/graycoreio/daffodil/commit/e893cb02b3c4b4abbbe086f7e1018c666f90947a))
* **docs-utils,dgeni:** generate breadcrumbs from doc path ([#3047](https://github.com/graycoreio/daffodil/issues/3047)) ([0e0ca5b](https://github.com/graycoreio/daffodil/commit/0e0ca5b0540bc73943c5ee4af95cacfce38ca7f7))
* **driver:** add backend delegate service ([#3146](https://github.com/graycoreio/daffodil/issues/3146)) ([8a616ee](https://github.com/graycoreio/daffodil/commit/8a616eea8f75d699d6b04a2be61618c3b79382c4))
* **driver:** add base in-memory driver ([#3147](https://github.com/graycoreio/daffodil/issues/3147)) ([e520410](https://github.com/graycoreio/daffodil/commit/e5204104f9fde1676fbdfd4a26ccf5bd198e845c))
* **driver:** add in-memory config ([#3175](https://github.com/graycoreio/daffodil/issues/3175)) ([b3a5a1a](https://github.com/graycoreio/daffodil/commit/b3a5a1a963411e036afe629cb179a9a3cee764ca))
* **driver:** add in-memory module ([#3177](https://github.com/graycoreio/daffodil/issues/3177)) ([9feffdc](https://github.com/graycoreio/daffodil/commit/9feffdce359cbd4e8453d033ddcba9a123759306))
* **driver:** separate in-memory root service and delegate ([#3174](https://github.com/graycoreio/daffodil/issues/3174)) ([b63c962](https://github.com/graycoreio/daffodil/commit/b63c962e15666771fe72613ea823e689b565af2c))
* **geography:** support in-memory backend delegate ([#3187](https://github.com/graycoreio/daffodil/issues/3187)) ([ea9bafd](https://github.com/graycoreio/daffodil/commit/ea9bafd038535c5bd1422d9f82355f6fa7dafd8f))
* **navigation:** support in-memory backend delegate ([#3188](https://github.com/graycoreio/daffodil/issues/3188)) ([6f1146e](https://github.com/graycoreio/daffodil/commit/6f1146e22cfaceb7977806a1814c9af92330cfd9))
* **newsletter:** support in-memory backend delegate ([#3189](https://github.com/graycoreio/daffodil/issues/3189)) ([4def358](https://github.com/graycoreio/daffodil/commit/4def35852f81f2713a3285f662464f109a5bd6a9))
* **order:** support in-memory backend delegate ([#3190](https://github.com/graycoreio/daffodil/issues/3190)) ([90a7798](https://github.com/graycoreio/daffodil/commit/90a7798ca8ae2404c7cfc9e3caa215bba10e352f))
* **payment:** support in-memory backend delegate ([#3191](https://github.com/graycoreio/daffodil/issues/3191)) ([7a5a49b](https://github.com/graycoreio/daffodil/commit/7a5a49b776e4550e28831d256ae446e02ea6d8e6))
* **paypal:** support in-memory backend delegate ([#3192](https://github.com/graycoreio/daffodil/issues/3192)) ([5e99edf](https://github.com/graycoreio/daffodil/commit/5e99edf370237d8495e089aa7a8b6c7e826caf4b))
* **product:** support in-memory backend delegate ([#3193](https://github.com/graycoreio/daffodil/issues/3193)) ([0fa5e12](https://github.com/graycoreio/daffodil/commit/0fa5e12a9b4ba593fc7f738ff263dc4b36743a49))
* **reviews:** support in-memory backend delegate ([#3194](https://github.com/graycoreio/daffodil/issues/3194)) ([1959c96](https://github.com/graycoreio/daffodil/commit/1959c96bda751e34dd40a6fe492eaf5a71938c18))
* **search:** support in-memory backend delegate ([#3195](https://github.com/graycoreio/daffodil/issues/3195)) ([93f1ab6](https://github.com/graycoreio/daffodil/commit/93f1ab6ce3493395ff1c6f514ed787bc1ad6967f))


### Bug Fixes

* **auth:** auth check interval prevents app from becoming stable ([#3200](https://github.com/graycoreio/daffodil/issues/3200)) ([b4d0619](https://github.com/graycoreio/daffodil/commit/b4d0619e579f2a4a97ef7a1e47b349fb5446c4a4))
* **core:** calling `resetState` when entity doesn't exist breaks state ([#3129](https://github.com/graycoreio/daffodil/issues/3129)) ([0d37f30](https://github.com/graycoreio/daffodil/commit/0d37f30e3afc8bae40cde662eb86129de0203534))
* **daffio:** API nav list not initially available ([#3136](https://github.com/graycoreio/daffodil/issues/3136)) ([cef6b06](https://github.com/graycoreio/daffodil/commit/cef6b06279dcd51241022e9d93bd6eb3241364e1))
* **daffio:** legacy `ServerModule` imported ([#3128](https://github.com/graycoreio/daffodil/issues/3128)) ([be67bae](https://github.com/graycoreio/daffodil/commit/be67baef976694a20e643808f20b928d17d63a78))
* **design:** update the property used to set a default alignment on callout ([#3118](https://github.com/graycoreio/daffodil/issues/3118)) ([839afbd](https://github.com/graycoreio/daffodil/commit/839afbd415775be2665b58eb00737599f2bf5624))
* **dgeni:** type alias symbols don't get link tag added ([#3110](https://github.com/graycoreio/daffodil/issues/3110)) ([5cb84f3](https://github.com/graycoreio/daffodil/commit/5cb84f30be13e750e072789d0aae9e75da49c37e))

## [0.77.0](https://github.com/graycoreio/daffodil/compare/v0.76.0...v0.77.0) (2024-09-18)


### ⚠ BREAKING CHANGES

* **all:** Angular has been upgraded to v18

### Features

* **all:** upgrade Angular to v18 ([#3052](https://github.com/graycoreio/daffodil/issues/3052)) ([8c58188](https://github.com/graycoreio/daffodil/commit/8c581885605d19ad6642c0630e7feb2a1aee4eca))
* **daffio:** redirect `api` and `packages` to new route ([#3076](https://github.com/graycoreio/daffodil/issues/3076)) ([3f1a93d](https://github.com/graycoreio/daffodil/commit/3f1a93db04dff1c9f1491a977664604759a6c596))
* **design:** add deep tree example ([#3067](https://github.com/graycoreio/daffodil/issues/3067)) ([04e1f4f](https://github.com/graycoreio/daffodil/commit/04e1f4f72dc72ba220089d420d98671d663a6ea5))


### Bug Fixes

* **all:** in-memory not overriding http client ([#3052](https://github.com/graycoreio/daffodil/issues/3052)) ([57d215b](https://github.com/graycoreio/daffodil/commit/57d215bc911c914c0b9d949aba87c9c6ac9a024e))
* **cart:** adjust Magento error handling for v2.4.6 removal of extensions ([#3088](https://github.com/graycoreio/daffodil/issues/3088)) ([0aba4a0](https://github.com/graycoreio/daffodil/commit/0aba4a085aef6ad43bcba50ac06ba14b2b0077a5))
* **core:** allow shuffle to return first element in first index ([#3070](https://github.com/graycoreio/daffodil/issues/3070)) ([7d07b8a](https://github.com/graycoreio/daffodil/commit/7d07b8aa848b18b3bc691c8f7a296dc3b12b4d60))
* **daffio:** index file cannot be found in SSR ([#3052](https://github.com/graycoreio/daffodil/issues/3052)) ([ef55e1d](https://github.com/graycoreio/daffodil/commit/ef55e1d94ededd7256627d287ab6d39b222976af))
* **demo:** in-memory driver never gets loaded ([#3051](https://github.com/graycoreio/daffodil/issues/3051)) ([d4df739](https://github.com/graycoreio/daffodil/commit/d4df739f904b8de770e5e10bba77cc40b8cdf994))
* **design:** tree item descendants are not hidden on ancestor collapse ([#3069](https://github.com/graycoreio/daffodil/issues/3069)) ([cb114f1](https://github.com/graycoreio/daffodil/commit/cb114f1c3219b20b33abd9de726d73a12ae7124d))
* **driver:** allow undefined extensions key in Magento graphql responses ([#3087](https://github.com/graycoreio/daffodil/issues/3087)) ([64e9ce3](https://github.com/graycoreio/daffodil/commit/64e9ce380731d94d062600ea03ba51593a7e2f76))

## [0.76.0](https://github.com/graycoreio/daffodil/compare/v0.75.0...v0.76.0) (2024-09-16)


### ⚠ BREAKING CHANGES

* **analytics-provider-data-layer,core:** `DataLayerTracker` return type is now `MaybeAsync`
* **dgeni:** design examples have moved from `/docs/design-examples` to `/docs/design/examples` ([#2968](https://github.com/graycoreio/daffodil/issues/2968))
* **design:** `--daff-base-background` has been renamed to `--daff-base-bg` in favor of shortened variable names.

### Features

* **analytics-provider-data-layer,core:** support async data layer trackers ([#3045](https://github.com/graycoreio/daffodil/issues/3045)) ([3e1c93f](https://github.com/graycoreio/daffodil/commit/3e1c93fe7a8e574a4910d300485dd4063f7b2b69))
* **daffio:** add `DaffioRoute` type ([#2984](https://github.com/graycoreio/daffodil/issues/2984)) ([86b0973](https://github.com/graycoreio/daffodil/commit/86b097332239d2f725a0d3e98fd6f908f2c13ddc))
* **daffio:** add `DaffioRouteWithSidebars` ([#3025](https://github.com/graycoreio/daffodil/issues/3025)) ([2960d51](https://github.com/graycoreio/daffodil/commit/2960d51af827b6ea15dd2ecd235834852896b8ad))
* **daffio:** add sidebar registrations ([#3026](https://github.com/graycoreio/daffodil/issues/3026)) ([7c34f2d](https://github.com/graycoreio/daffodil/commit/7c34f2d39ccacde04759f88fb386afd9c7ecf5cf))
* **daffio:** add sidebar service ([#3029](https://github.com/graycoreio/daffodil/issues/3029)) ([8273ef1](https://github.com/graycoreio/daffodil/commit/8273ef1dc9aed7340cd645d4fe6da691bed5db6d))
* **daffio:** consolidate docs list rendering ([#2989](https://github.com/graycoreio/daffodil/issues/2989)) ([4f2c4e6](https://github.com/graycoreio/daffodil/commit/4f2c4e626fb3893f796ae066042fc202494db88b))
* **daffio:** implement service-based sidebar ([#3030](https://github.com/graycoreio/daffodil/issues/3030)) ([5504966](https://github.com/graycoreio/daffodil/commit/55049662698b6f56d482b1badfb8a5d1ea526c44))
* **daffio:** render nav links from route data ([#3013](https://github.com/graycoreio/daffodil/issues/3013)) ([d2567fa](https://github.com/graycoreio/daffodil/commit/d2567fa0fa7191bb0e2f2bb43556328208d665e4))
* **design:** add extra right padding to parent tree items ([#3033](https://github.com/graycoreio/daffodil/issues/3033)) ([9d8d83c](https://github.com/graycoreio/daffodil/commit/9d8d83c728a90046ee75bfd7979676e635bd0aa2))
* **design:** add sidebar mode helpers ([#3015](https://github.com/graycoreio/daffodil/issues/3015)) ([43c762a](https://github.com/graycoreio/daffodil/commit/43c762a70bb7ec78ced405044a3a476970d7519b))
* **design:** add sidebar service ([#3014](https://github.com/graycoreio/daffodil/issues/3014)) ([35eda07](https://github.com/graycoreio/daffodil/commit/35eda07fc66fb7acdaf99de4014478be5f1f32bf))
* **design:** allow `aria-labelledby` to be set by the `DaffModalService` ([#2967](https://github.com/graycoreio/daffodil/issues/2967)) ([e381532](https://github.com/graycoreio/daffodil/commit/e381532e9302e636f7c4e70976bf073f8a005f7f))
* **design:** clean up link code styles within blockquote in DaffArticleComponent ([#2972](https://github.com/graycoreio/daffodil/issues/2972)) ([9302ee2](https://github.com/graycoreio/daffodil/commit/9302ee271ca1fb48e82f6ff97f48c12220a60f2c))
* **design:** create `DaffBreadcrumbComponent` ([#3028](https://github.com/graycoreio/daffodil/issues/3028)) ([aa5ec26](https://github.com/graycoreio/daffodil/commit/aa5ec2631066ccafc302fb7e32d311cd20cc46b6))
* **design:** rename base background token name ([#2969](https://github.com/graycoreio/daffodil/issues/2969)) ([4d91fb5](https://github.com/graycoreio/daffodil/commit/4d91fb5b9671e922790cc9c5b2ad1795e35050a3))
* **design:** update article code styles ([#2966](https://github.com/graycoreio/daffodil/issues/2966)) ([ab4aacc](https://github.com/graycoreio/daffodil/commit/ab4aacc352dd54d2a9288ada24c992ee90d35682))
* **design:** update doc viewer menu button colors ([#3023](https://github.com/graycoreio/daffodil/issues/3023)) ([de8b71b](https://github.com/graycoreio/daffodil/commit/de8b71b0c220a6d1174af699932a829ac8e4fed8))
* **dgeni,daffio:** render API package descriptions ([#3031](https://github.com/graycoreio/daffodil/issues/3031)) ([76cb889](https://github.com/graycoreio/daffodil/commit/76cb889ad132a7f9ea764cd787e013007b0a3a0e))
* **dgeni,daffio:** render package API doc exports ([#2991](https://github.com/graycoreio/daffodil/issues/2991)) ([c3131d8](https://github.com/graycoreio/daffodil/commit/c3131d87ef846ff02fc087f7c0f7d5d9eebde887))
* **dgeni,docs-utils:** centralize docs path segment ([#2962](https://github.com/graycoreio/daffodil/issues/2962)) ([5554fd0](https://github.com/graycoreio/daffodil/commit/5554fd0302c2317de1993236969c08a50a35b593))
* **dgeni:** add configable name computer to packages processor ([#2968](https://github.com/graycoreio/daffodil/issues/2968)) ([f7f7923](https://github.com/graycoreio/daffodil/commit/f7f792343e6f2ff9a5f6df333c3b42bc22ee4844))
* **dgeni:** add configurator type ([#2968](https://github.com/graycoreio/daffodil/issues/2968)) ([8bb271f](https://github.com/graycoreio/daffodil/commit/8bb271f7f6e945a201c25613a9cb6c82290ca1e6))
* **dgeni:** add design API package ([#2968](https://github.com/graycoreio/daffodil/issues/2968)) ([eb16f86](https://github.com/graycoreio/daffodil/commit/eb16f867bf9ace8047d0f0651b093c6c9a08bb5b))
* **dgeni:** add design guide packages ([#2968](https://github.com/graycoreio/daffodil/issues/2968)) ([af1ccb8](https://github.com/graycoreio/daffodil/commit/af1ccb8aa1de5667bdadfd38a4e32bd93ac5c47a))
* **dgeni:** add doc kind to document ([#3037](https://github.com/graycoreio/daffodil/issues/3037)) ([3988924](https://github.com/graycoreio/daffodil/commit/398892495c20402c3135b0cf641f281378e3965f))
* **dgeni:** add paths configurators ([#2968](https://github.com/graycoreio/daffodil/issues/2968)) ([fc81125](https://github.com/graycoreio/daffodil/commit/fc81125e51c208612cbedea57f1316641d363b92))
* **dgeni:** add remove duplicates processor ([#2968](https://github.com/graycoreio/daffodil/issues/2968)) ([3a3df2a](https://github.com/graycoreio/daffodil/commit/3a3df2a2fb03127f0e352c0f26058f01a92d36fd))
* **dgeni:** add support for extra fields in JSON ([#3038](https://github.com/graycoreio/daffodil/issues/3038)) ([d830f75](https://github.com/graycoreio/daffodil/commit/d830f7592f56230a5716c518452f6cf7f5da03ab))
* **dgeni:** automatically generate API doc links for code span in markdown ([#2964](https://github.com/graycoreio/daffodil/issues/2964)) ([c3a1ad3](https://github.com/graycoreio/daffodil/commit/c3a1ad331fe8a0417f78a3528c520f1ba5135968))
* **dgeni:** consolidate docs nav list generation ([#2989](https://github.com/graycoreio/daffodil/issues/2989)) ([b2f33c5](https://github.com/graycoreio/daffodil/commit/b2f33c570bd4053688e706b8a73a0ac22629bb9b))
* **dgeni:** exclude design from base docsgen ([#2968](https://github.com/graycoreio/daffodil/issues/2968)) ([dec7dca](https://github.com/graycoreio/daffodil/commit/dec7dcad3ab01710d4d32a4351009811ce7414cd))
* **dgeni:** move design examples under `design/` subpath ([887a515](https://github.com/graycoreio/daffodil/commit/887a515dfb6c3a71363f796287b53c2847c70e38))
* **dgeni:** process API doc descriptions through markdown ([#2961](https://github.com/graycoreio/daffodil/issues/2961)) ([5ffbb6f](https://github.com/graycoreio/daffodil/commit/5ffbb6f6f2deb4eae14bb06c14221b969c4b7ee5))
* **dgeni:** remove `atoms` and `molecules` from design doc IDs ([#3041](https://github.com/graycoreio/daffodil/issues/3041)) ([d6e9058](https://github.com/graycoreio/daffodil/commit/d6e90588f7dda9552841cd02b5e2641fc0040c76))
* **dgeni:** render subpackages under root package ([#3063](https://github.com/graycoreio/daffodil/issues/3063)) ([ccf41f6](https://github.com/graycoreio/daffodil/commit/ccf41f6e313141154434ad71a65ee30c99afe448))
* **dgeni:** run design packages ([#2968](https://github.com/graycoreio/daffodil/issues/2968)) ([9753072](https://github.com/graycoreio/daffodil/commit/975307283f3dd739032202db412fa43df4506fb0))
* **docs-utils,dgeni:** extract docsgen pathing helpers ([#3039](https://github.com/graycoreio/daffodil/issues/3039)) ([525ce39](https://github.com/graycoreio/daffodil/commit/525ce39746c7b1ff47205f2d3f8afa2e09011eb0))
* **docs-utils:** add design path ([#2968](https://github.com/graycoreio/daffodil/issues/2968)) ([995241a](https://github.com/graycoreio/daffodil/commit/995241ae6d561ff752b02cfbd082895de814fbca))
* **docs-utils:** add example kind ([#2968](https://github.com/graycoreio/daffodil/issues/2968)) ([4cac3f9](https://github.com/graycoreio/daffodil/commit/4cac3f9627da86c2a0a6672b3e5992382512652b))
* **eslint-config:** restrict `window` global access ([#3053](https://github.com/graycoreio/daffodil/issues/3053)) ([8b278ae](https://github.com/graycoreio/daffodil/commit/8b278ae04958d57fef32f61eebe0f9bedd2c64ba))
* **router:** add activated route provider ([#2988](https://github.com/graycoreio/daffodil/issues/2988)) ([3b6103c](https://github.com/graycoreio/daffodil/commit/3b6103c32a313e6270aad25044c4a841520f1643))


### Bug Fixes

* **daffio:** trailing slash missing from docs path ([#2976](https://github.com/graycoreio/daffodil/issues/2976)) ([5392e37](https://github.com/graycoreio/daffodil/commit/5392e376929e351313e7180e757773eda717561b))
* **daffio:** unable to resolve assets in dev server ([#2977](https://github.com/graycoreio/daffodil/issues/2977)) ([c061885](https://github.com/graycoreio/daffodil/commit/c0618851f17c5fb9d4bce6d7bdfef9dc597318d8))
* **design-land:** wrong design examples path ([#2968](https://github.com/graycoreio/daffodil/issues/2968)) ([4858161](https://github.com/graycoreio/daffodil/commit/4858161d8542704ae4725a4f7c45de82280eac56))
* **design:** sidebar appears expanded before animation completes ([#3024](https://github.com/graycoreio/daffodil/issues/3024)) ([5d58cd0](https://github.com/graycoreio/daffodil/commit/5d58cd0b6702fae42432aefb106f1ceeb11495fd))
* **dgeni:** api list links include duplicate prefix ([#2960](https://github.com/graycoreio/daffodil/issues/2960)) ([1858e22](https://github.com/graycoreio/daffodil/commit/1858e22f7dc3650ee40ec6e5bb2113bb910c39b0))
* **dgeni:** API packages are not grouped in nav list ([#2993](https://github.com/graycoreio/daffodil/issues/2993)) ([3e1fe98](https://github.com/graycoreio/daffodil/commit/3e1fe98ad7642cf0e9d7eb8f0a6e735d44c1a635))
* **dgeni:** correctly prefix API doc link paths ([#2956](https://github.com/graycoreio/daffodil/issues/2956)) ([9e95dd3](https://github.com/graycoreio/daffodil/commit/9e95dd3d2113ef390916b2d24e236e40df9e0cd4))
* **dgeni:** wrong package exports name ([#3036](https://github.com/graycoreio/daffodil/issues/3036)) ([1798c89](https://github.com/graycoreio/daffodil/commit/1798c89a2af384b54bca4e40a2c6b7658fea8f43))

## [0.75.0](https://github.com/graycoreio/daffodil/compare/v0.74.0...v0.75.0) (2024-08-07)


### ⚠ BREAKING CHANGES

* **design:** daffColorMixin has been removed in favor of DaffColorableDirective. Update usage by using the hostDirective feature.
* **design:** daffStatusMixin has been removed in favor of DaffStatusableDirective. Update usage by using the hostDirective feature.
* **design:** daffCompactableMixin has been removed in favor of DaffCompactableDirective. Update usage by using the hostDirective feature.
* **design:** daffSkeletonMixin has been removed in favor of DaffSkeletonableDirective. Update usage by using the hostDirective feature.
* **design:** daffTextAlignmentMixin has been removed in favor of DaffTextAlignableDirective. Update usage by using the hostDirective feature.
* **design:** daffManageContainerLayoutMixin has been removed in favor of DaffManageContainerLayoutDirective. Update usage by using the hostDirective feature.
* **design:** daffArticleEncapsulatedMixin has been removed in favor of DaffArticleEncapsulatedDirective. Update usage by using the hostDirective instead.
* **seo:** The following tokens are now exported from `@daffodil/seo/router`:
* **design:** This removes the ComponentExampleWithModule and ComponentExample that were unintentionally exported from `@daffodil/design`. These types were never meant to be used by consumers.

### Features

* **daffio:** add scrollOffset so headings are not covered by the navbar ([#2929](https://github.com/graycoreio/daffodil/issues/2929)) ([bf21aab](https://github.com/graycoreio/daffodil/commit/bf21aabd1958cc3d1f44a57233bc2f01535adde2))
* **daffio:** highlight active tree item in sidebar ([#2926](https://github.com/graycoreio/daffodil/issues/2926)) ([d59140a](https://github.com/graycoreio/daffodil/commit/d59140a3873584173024f1356cfe072ff717b380))
* **design:** add ARIA features to modal ([#2832](https://github.com/graycoreio/daffodil/issues/2832)) ([fd838fd](https://github.com/graycoreio/daffodil/commit/fd838fd7a2b09f09cf386f9fb5f84d5ec74d22c3))
* **design:** add server safe breakpoint observer token ([#2952](https://github.com/graycoreio/daffodil/issues/2952)) ([9d7eb6f](https://github.com/graycoreio/daffodil/commit/9d7eb6f5fede1e4493154ec1b883fbc9567a6377))
* **design:** change `daffArticleEncapsulatedMixin` to a directive ([#2913](https://github.com/graycoreio/daffodil/issues/2913)) ([b00d1e1](https://github.com/graycoreio/daffodil/commit/b00d1e1aaf17fc15b8a890ad6e5607b6a8845c07))
* **design:** change daffColorMixin to a directive ([#2942](https://github.com/graycoreio/daffodil/issues/2942)) ([f9bd6b5](https://github.com/graycoreio/daffodil/commit/f9bd6b5a24b8238de66dda24b924fc8389e4ae61))
* **design:** change daffCompactableMixin to a directive ([#2937](https://github.com/graycoreio/daffodil/issues/2937)) ([#2937](https://github.com/graycoreio/daffodil/issues/2937)) ([d39a0fb](https://github.com/graycoreio/daffodil/commit/d39a0fbccb4c9b1a54ce2ce2c494d0657b2cc476))
* **design:** change daffManageContainerLayoutMixin to a directive ([#2919](https://github.com/graycoreio/daffodil/issues/2919)) ([98f19c8](https://github.com/graycoreio/daffodil/commit/98f19c823b43f9959d9950281827c8675113a824))
* **design:** change daffSizeMixin to a directive ([#2925](https://github.com/graycoreio/daffodil/issues/2925)) ([aa77469](https://github.com/graycoreio/daffodil/commit/aa774698a1c07027869c72c64234c1e6b240b71b))
* **design:** change daffSkeletonMixin to a directive ([#2923](https://github.com/graycoreio/daffodil/issues/2923)) ([d6a37c9](https://github.com/graycoreio/daffodil/commit/d6a37c9a862479971a89be4ac46206218c9227cd))
* **design:** change daffStatusMixin to a directive ([#2941](https://github.com/graycoreio/daffodil/issues/2941)) ([688b92d](https://github.com/graycoreio/daffodil/commit/688b92dc4927c942d9098e26f0ed68c70d28e260))
* **design:** change daffTextAlignmentMixin to a directive ([#2922](https://github.com/graycoreio/daffodil/issues/2922)) ([ae6cb7e](https://github.com/graycoreio/daffodil/commit/ae6cb7e6ace6cbed7c5aaff1059441b8560f62f9))
* **design:** create DaffModalCloseDirective ([#2832](https://github.com/graycoreio/daffodil/issues/2832)) ([3140fee](https://github.com/graycoreio/daffodil/commit/3140feee4d93dacf99abbbb633d2c3a73080ef44))
* **design:** remove examples API ([#2924](https://github.com/graycoreio/daffodil/issues/2924)) ([6ded37e](https://github.com/graycoreio/daffodil/commit/6ded37ed5ce0e2a4156f4ac02b4b8542bc3a9454))
* **dgeni,docs-utils:** centralize paths for different doc kinds ([#2950](https://github.com/graycoreio/daffodil/issues/2950)) ([d907c13](https://github.com/graycoreio/daffodil/commit/d907c13a565484070913078d4d49adb29a19894b))
* **router:** add `DaffRouterActivatedRoute` service ([#2949](https://github.com/graycoreio/daffodil/issues/2949)) ([21acdca](https://github.com/graycoreio/daffodil/commit/21acdca573c3901e75af3ab74794f19d3a92a72f))
* **router:** add generic to router data ([#2951](https://github.com/graycoreio/daffodil/issues/2951)) ([35738d4](https://github.com/graycoreio/daffodil/commit/35738d4824f5e627ce4dd09ac7b279d8aae6e5a3))
* **seo:** remove explicit dep on ngrx/router-store ([#2817](https://github.com/graycoreio/daffodil/issues/2817)) ([e953dca](https://github.com/graycoreio/daffodil/commit/e953dca5aaae2de3fd805f421b97064cebacb6ee))


### Bug Fixes

* **design:** update createCustomElementFromExample for API break ([#2924](https://github.com/graycoreio/daffodil/issues/2924)) ([f52244f](https://github.com/graycoreio/daffodil/commit/f52244f50fc0d68d55597732b8784b32a5e565c1))
* **dgeni:** heading IDs using HTML encoded string ([#2940](https://github.com/graycoreio/daffodil/issues/2940)) ([b0770ef](https://github.com/graycoreio/daffodil/commit/b0770efffb7318aa723a428b8bc046166a195f10))
* **external-router:** extract daff paths ignoring full path ([#2955](https://github.com/graycoreio/daffodil/issues/2955)) ([961512d](https://github.com/graycoreio/daffodil/commit/961512dc5b028fdffe8d61dcf8b70e2a242c857e))
* **search:** SSR gets stuck in resolver when query is empty ([#2954](https://github.com/graycoreio/daffodil/issues/2954)) ([16b6000](https://github.com/graycoreio/daffodil/commit/16b600099a125e76fecf8b58596353c8bf5f3df4))

## [0.74.0](https://github.com/graycoreio/daffodil/compare/v0.73.0...v0.74.0) (2024-07-22)


### ⚠ BREAKING CHANGES

* **driver,customer-order:** `@daffodil/customer/driver/magento` has been renamed to `@daffodil/customer/driver/magento/2-4-5`

### Features

* **daffio:** clean up docs table of contents UI ([#2899](https://github.com/graycoreio/daffodil/issues/2899)) ([484ae74](https://github.com/graycoreio/daffodil/commit/484ae744e04f7086d77f037078ac345a5a7cedbb))
* **design-land:** remove feature from nav json ([#2906](https://github.com/graycoreio/daffodil/issues/2906)) ([06aeb4b](https://github.com/graycoreio/daffodil/commit/06aeb4b3514bc0523c2ae0b6dc9cad0d00c626de))
* **design:** add accessibility considerations to the notification component ([#2900](https://github.com/graycoreio/daffodil/issues/2900)) ([8b5130a](https://github.com/graycoreio/daffodil/commit/8b5130adf5a7b5945cb70b695548ac95f1e5493c))
* **design:** allow the whole typography subpackaged to be exported and allow font family variables to be assignable ([#2762](https://github.com/graycoreio/daffodil/issues/2762)) ([36dbfe8](https://github.com/graycoreio/daffodil/commit/36dbfe88ccd43da1bf76064607c1a07a8f034045))
* **dgeni:** render headings with slugified IDs ([#2927](https://github.com/graycoreio/daffodil/issues/2927)) ([e6d1b35](https://github.com/graycoreio/daffodil/commit/e6d1b3524d765df997561a151d3f93ce5d802ab0))
* **driver,customer-order:** add Magento 2.4.6 support ([#2896](https://github.com/graycoreio/daffodil/issues/2896)) ([265d54a](https://github.com/graycoreio/daffodil/commit/265d54a623aea3cf703c520b2e26f2d06253ea7f))


### Bug Fixes

* **core:** undefined operation entity from `operationFailed` ([#2897](https://github.com/graycoreio/daffodil/issues/2897)) ([db8afb6](https://github.com/graycoreio/daffodil/commit/db8afb6b9d006907d48472b87dee0ac2b63b04da))
* **design:** update links in design package markdowns to absolute paths ([#2893](https://github.com/graycoreio/daffodil/issues/2893)) ([93a9656](https://github.com/graycoreio/daffodil/commit/93a96566adf0ff0ea9af217d90826ac3ae679ccf))

## [0.73.0](https://github.com/graycoreio/daffodil/compare/v0.72.0...v0.73.0) (2024-06-21)


### ⚠ BREAKING CHANGES

* **design:**
* **design:**

### Features

* **design:** remove all deprecated scss files and mixins in `@daffodil/design` ([#2875](https://github.com/graycoreio/daffodil/issues/2875)) ([10bd1e9](https://github.com/graycoreio/daffodil/commit/10bd1e9f7cec283c3d85d613854b083e769ef524))
* **design:** remove DaffArticleTitleDirective and DaffArticleLeadDirective and set styles directly on &lt;h1&gt; and first <p> of an article ([#2887](https://github.com/graycoreio/daffodil/issues/2887)) ([223b304](https://github.com/graycoreio/daffodil/commit/223b304fdb1960aaa6e616a1856c4a032290d583))


### Bug Fixes

* **design:** only add the aria expanded attribute when tree item has children ([#2886](https://github.com/graycoreio/daffodil/issues/2886)) ([3d1796f](https://github.com/graycoreio/daffodil/commit/3d1796fb8247445992ca1d805d331a91e27c95a9))
* **navgiation:** deep fragment fields might not get data ([#2889](https://github.com/graycoreio/daffodil/issues/2889)) ([44d16d7](https://github.com/graycoreio/daffodil/commit/44d16d7451337653154b05b68d973bcab3f2829f))

## [0.72.0](https://github.com/graycoreio/daffodil/compare/v0.71.0...v0.72.0) (2024-06-19)


### ⚠ BREAKING CHANGES

* **design:** The `color` property has been removed from the codebase. Paginators are no longer themable.
* **design:** `mode` and `daffListSubheader` have been removed from the codebase. use `<daff-list>` and `<daff-nav-list>` for modes, and subheader styles will automatically apply to the first child item within a list item.
* **design:** `layout` and `size` have been removed from the codebase. Use `textAlignment` and `compact` instead.
* **checkout,demo:** all checkout code has been removed expect for placed order features. Migrate to features in `@daffodil/cart` and `@daffodil/order`
* **design:** `layout` and `size` have been removed from the codebase. Use `textAlignment` and `compact` instead.
* **design:** `[daffAccordionItemContent]` is no longer needed to place content inside the accordion item. `initiallyActive` has been removed in favor of `initiallyExpanded`.
* **design:** `DaffQtyDropdownComponent` has been removed from `@daffodil/design`. Use the `DaffQuantityFieldComponent` instead.
* **design:** `DaffImageGalleryComponent` has been removed from `@daffodil/design`. Use the `DaffMediaGalleryComponent` instead.
* **design:** `DaffProgressIndicatorComponent` has been removed from `@daffodil/design`. Use the `DaffProgressBarComponent` instead.
* **design:** DaffFeatureComponent has been removed from @daffodil/design. Use the DaffCardComponent instead.
* **design:** DaffButtonSetComponent has been removed from @daffodil/design. You should add your own custom styling for groups of buttons.
* **design:** The `dismissable` property in DaffNotificationComponent has been renamed to `dismissible`

### Features

* **authorizenet:** add credit card factory ([#2843](https://github.com/graycoreio/daffodil/issues/2843)) ([a46e3f6](https://github.com/graycoreio/daffodil/commit/a46e3f6f69554575871251061b977fc537f51c2c))
* **cart:** set shipping method `id` in magento driver ([#2839](https://github.com/graycoreio/daffodil/issues/2839)) ([cd823ad](https://github.com/graycoreio/daffodil/commit/cd823ad7e8cd3174dc382dbaa45b759c2d8557df))
* **checkout,demo:** remove legacy and deprecated checkout code ([#2752](https://github.com/graycoreio/daffodil/issues/2752)) ([7e78c50](https://github.com/graycoreio/daffodil/commit/7e78c50d8cb06ab854931c17aaf0b34b28392b42))
* **daffio,dgeni:** move guides around and docsgen guides and explanations separately ([300ecf5](https://github.com/graycoreio/daffodil/commit/300ecf5c4b13c4159fa2a6edd6e0695edb2cedfc))
* **daffio:** add `packages` and `api` redirects ([e55ce88](https://github.com/graycoreio/daffodil/commit/e55ce887d8b7d8f9f24bd2ead4a33d78619d674b))
* **demo:** add magento and venia environments ([#2866](https://github.com/graycoreio/daffodil/issues/2866)) ([3876145](https://github.com/graycoreio/daffodil/commit/387614594c4e11498309563537f588b442424aac))
* **demo:** load navigation tree on init ([#2867](https://github.com/graycoreio/daffodil/issues/2867)) ([546fbe3](https://github.com/graycoreio/daffodil/commit/546fbe3d1c1fc43de0b900e0edb15ac74066b8ad))
* **design-land:** update they way open is set for the design land sidebar ([#2837](https://github.com/graycoreio/daffodil/issues/2837)) ([91738c4](https://github.com/graycoreio/daffodil/commit/91738c4e417d11643578018912d6dac3be98743e))
* **design:** add id property to quantity field to be passed into quantity select and quantity input ([#2859](https://github.com/graycoreio/daffodil/issues/2859)) ([2a18308](https://github.com/graycoreio/daffodil/commit/2a18308af3df448fb99ae105aacb136840757e63))
* **design:** remove `color` property from `DaffPaginatorComponent` ([#2873](https://github.com/graycoreio/daffodil/issues/2873)) ([5c91c6e](https://github.com/graycoreio/daffodil/commit/5c91c6e8d06f475cb0c5b4e6a0050833b866113d))
* **design:** remove `DaffImageGalleryComponent` and `DaffImageListComponent` from `@daffodil/design` ([#2863](https://github.com/graycoreio/daffodil/issues/2863)) ([c71d6ad](https://github.com/graycoreio/daffodil/commit/c71d6add624410c1b4ebd71a04b3fd6ccd55081c))
* **design:** remove `DaffQtyDropdownComponent` from `@daffodil/design` ([#2864](https://github.com/graycoreio/daffodil/issues/2864)) ([1ade870](https://github.com/graycoreio/daffodil/commit/1ade8701ac72ae4b8cddfa4fae1010ac41535293))
* **design:** remove deprecated `layout` and `size` properties in `DaffCalloutComponent` ([#2869](https://github.com/graycoreio/daffodil/issues/2869)) ([4bc8ec8](https://github.com/graycoreio/daffodil/commit/4bc8ec8deba8483df3306b14c7b1c61cef9b9cd8))
* **design:** remove deprecated `layout` and `size` properties in `DaffHeroComponent` ([#2870](https://github.com/graycoreio/daffodil/issues/2870)) ([ddf13a8](https://github.com/graycoreio/daffodil/commit/ddf13a851b4a2a5022c46dae3e2c1853033ce752))
* **design:** remove deprecated DaffButtonSetComponent from @daffodil/design ([#2861](https://github.com/graycoreio/daffodil/issues/2861)) ([dc22055](https://github.com/graycoreio/daffodil/commit/dc22055e98f22b1719bbf1d0b384cb77d2759f20))
* **design:** remove deprecated DaffFeatureComponent from @daffodil/design ([#2860](https://github.com/graycoreio/daffodil/issues/2860)) ([26f13a5](https://github.com/graycoreio/daffodil/commit/26f13a5e55b697cf03a90881230442dda2974ef1))
* **design:** remove deprecated properties and directives from `DaffListComponent` ([#2871](https://github.com/graycoreio/daffodil/issues/2871)) ([c246289](https://github.com/graycoreio/daffodil/commit/c246289e73a43b3edfc0d0c62920a4b0e7c2de60))
* **design:** remove deprecated properties and directives in `DaffAccordionComponent` and update usage ([#2868](https://github.com/graycoreio/daffodil/issues/2868)) ([198d326](https://github.com/graycoreio/daffodil/commit/198d326e7d3a12fb1fac792d75146944295a47e2))
* **design:** remove deprecated`DaffProgressIndicatorComponent` from `@daffodil/design` ([#2862](https://github.com/graycoreio/daffodil/issues/2862)) ([87e6d41](https://github.com/graycoreio/daffodil/commit/87e6d415adb201661d526d6f41954b319f4153f5))
* **design:** rename notification's dismissable property to dismissible ([#2844](https://github.com/graycoreio/daffodil/issues/2844)) ([ecd0db5](https://github.com/graycoreio/daffodil/commit/ecd0db515fc87b45feb5a2e01564cef057b584be))
* **dgeni,daffio:** `guides-list.json` -&gt; `index.json` ([#2881](https://github.com/graycoreio/daffodil/issues/2881)) ([bea169f](https://github.com/graycoreio/daffodil/commit/bea169f0726d52c550ff8464de20a00ba72bf905))
* **dgeni:** add `theme-switch` to list of ignored packages ([#2878](https://github.com/graycoreio/daffodil/issues/2878)) ([4df7eb9](https://github.com/graycoreio/daffodil/commit/4df7eb9aa23a939d1de807b3303986ab99d3f026))
* **dgeni:** hardcode design link and remove nav list children ([#2879](https://github.com/graycoreio/daffodil/issues/2879)) ([7659261](https://github.com/graycoreio/daffodil/commit/76592616a82dd82674d48f4f6e9b9a73878ce4d9))
* **docs:** reorganize docs folder ([#2834](https://github.com/graycoreio/daffodil/issues/2834)) ([a60d70c](https://github.com/graycoreio/daffodil/commit/a60d70c7694fb8a4ff068711410cf64933d847df))
* **navigation:** add injectable fragment support to magento driver ([#2884](https://github.com/graycoreio/daffodil/issues/2884)) ([53e45f6](https://github.com/graycoreio/daffodil/commit/53e45f6edaa056c5bd06ebb3051771f100654085))


### Bug Fixes

* **daffio:** `Docss` -&gt; `Docs` ([d04d3ad](https://github.com/graycoreio/daffodil/commit/d04d3ad2078401fb0e8392cf535e1041f3980e1e))
* **demo:** missing anet config ([#2872](https://github.com/graycoreio/daffodil/issues/2872)) ([31b2555](https://github.com/graycoreio/daffodil/commit/31b2555629816ea154bfff8b600e6b41fb85ca83))
* **dgeni:** API doc link URLs missing `docs` prefix ([#2876](https://github.com/graycoreio/daffodil/issues/2876)) ([489ed7c](https://github.com/graycoreio/daffodil/commit/489ed7c57227ad8e0861048a820cdf609006e985))
* **dgeni:** markdown highlight ([9981f5e](https://github.com/graycoreio/daffodil/commit/9981f5eb9497f3569f664da9230a02e74aadc738))
* package guide links broken on daff.io ([#2877](https://github.com/graycoreio/daffodil/issues/2877)) ([2a141cb](https://github.com/graycoreio/daffodil/commit/2a141cb0424b2a2b806a0b051806f8c662fda856))

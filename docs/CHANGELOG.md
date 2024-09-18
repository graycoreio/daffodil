# Changelog

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

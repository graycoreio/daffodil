# Changelog

## [0.94.1](https://github.com/graycoreio/daffodil/compare/v0.94.1-rc.0...v0.94.1) (2026-08-21)


### Miscellaneous Chores

* graduate 0.94.1-rc.0 to 0.94.1 ([#4676](https://github.com/graycoreio/daffodil/issues/4676)) ([a32158b](https://github.com/graycoreio/daffodil/commit/a32158b87ba902bee218e24d443c0b1b41bf25f6))

## [0.94.1-rc.0](https://github.com/graycoreio/daffodil/compare/v0.94.0...v0.94.1-rc.0) (2026-08-21)


### Bug Fixes

* **dgeni:** const functions don't show params ([#4638](https://github.com/graycoreio/daffodil/issues/4638)) ([ded3c9e](https://github.com/graycoreio/daffodil/commit/ded3c9e565efdcd3bef22a1072dd272e692e109e))
* **eslint:** linting dep tree ([#4675](https://github.com/graycoreio/daffodil/issues/4675)) ([ddfaa72](https://github.com/graycoreio/daffodil/commit/ddfaa72afe3545b4a813a404a79aff3b8b892a40))

## [0.94.0](https://github.com/graycoreio/daffodil/compare/v0.93.1...v0.94.0) (2026-08-19)


### ⚠ BREAKING CHANGES

* **design:** The `daff-illuminate` mixin has been removed from `@daffodil/design`. Update your code to use the `light`/`dark` mixins.
* **design:** `@daffodil/design/scss/theme` no longer forwards the default theme variables. `$theme`, `$theme-dark`, `$primary`, `$secondary`, `$tertiary`, `$primary-dark`, `$secondary-dark`, and `$tertiary-dark` now come from the new `@daffodil/design/scss/theme/default` export, so `@use '@daffodil/design/scss/theme/default' as daff-default-theme;` and read them from there (`daff-theme.$theme` -> `daff-default-theme.$theme`).
* **design:** loading icon component has been removed
* **content:** `DaffContentMagentoDriverModule` has been removed
* **driver:** `DaffMagentoCacheHeaderApolloLinkGenerator` and `DaffMagentoApolloCacheableOperationsLinkGenerator` have been removed
* **customer-order:** `@daffodil/customer-order/driver/magento/2-4-5` -> `@daffodil/customer-order/driver/magento/2.4.5`; `@daffodil/customer-order/driver/magento/2-4-5/testing` -> `@daffodil/customer-order/driver/magento/2.4.5/testing`; `@daffodil/customer-order/driver/magento/2-4-6` -> `@daffodil/customer-order/driver/magento/2.4.6`; `@daffodil/customer-order/driver/magento/2-4-6/testing` -> `@daffodil/customer-order/driver/magento/2.4.6/testing` this aligns with our current conventions
* **order:** `@daffodil/order/driver/magento/2-4-0` -> `@daffodil/order/driver/magento/2.4.0`; `@daffodil/order/driver/magento/2-4-1` -> `@daffodil/order/driver/magento/2.4.1`; `@daffodil/order/driver/magento/2-4-1/testing` -> `@daffodil/order/driver/magento/2.4.1/testing`
* **design:** `DaffCalloutComponent` no longer resets the margins of paragraphs nested inside child components within `[daffCalloutBody]`. Previously the first and last `<p>` under the body received `margin-top: 0` and `margin-bottom: 0` at any depth. The reset now applies only to paragraphs that are direct children of `[daffCalloutBody]`. If you relied on the old behavior to flatten spacing in nested content, apply those margins in your own styles.
* **design:** `@daffodil/design/menu` now exposes the `DaffMenuActivatorDirective` `daffMenuActivator` input as a signal rather than a plain property. Template bindings (`[daffMenuActivator]="..."`) continue to work unchanged. Programmatic reads must invoke the signal: `activator.daffMenuActivator` → `activator.daffMenuActivator()`. `daffMenuActivator` is now read-only and can no longer be assigned imperatively (`activator.daffMenuActivator = menu` is no longer supported).
* **design:** `DaffToastComponent.toast` is now a required signal input. Read its value by calling it as a function (`toast()`) instead of accessing the property directly, and provide it via `[toast]` binding as it is now required.
* **design:** `@daffodil/design/text-snippet` now exposes the `DaffTextSnippetComponent` inputs as signals rather than plain properties, and renames the `toggle` output to `toggled`. Template bindings (`[condensed]="..."`, `[html]="..."`) continue to work unchanged.
* **design:** `@daffodil/design/switch` now exposes the `DaffSwitchComponent` inputs as signals rather than plain properties. Template bindings (`[checked]="..."`, `[labelPosition]="..."`, `[id]="..."`, `[disabled]="..."`) continue to work unchanged.
* **design:** `@daffodil/design/tabs` now exposes its inputs as signals rather than plain properties. Template bindings (`[initiallySelected]="..."`, `[linkMode]="..."`, `aria-label="..."`, `[id]="..."`, etc.) continue to work unchanged.
* **design:** `@daffodil/design/tag` now exposes the `DaffTagComponent` `dismissible` input as a signal rather than a plain property. Template bindings (`[dismissible]="..."`) continue to work unchanged. Programmatic reads must invoke the signal: `tag.dismissible` → `tag.dismissible()`. `dismissible` is now read-only and can no longer be assigned imperatively (`tag.dismissible = true` is no longer supported).
* **design:** `DaffDisableableDirective` now exposes `disabled` as a signal (`model`) rather than a plain property. Template bindings (`[disabled]="..."`) continue to work unchanged. Programmatic reads must invoke the signal: `directive.disabled` → `directive.disabled()`. Imperative writes must use `set`: `directive.disabled = true` → `directive.disabled.set(true)`.
* **design:** `@daffodil/design/progress-bar` now exposes the `DaffProgressBarComponent` inputs `percentage`, `aria-label`, and `indeterminate` as signals rather than plain properties. Template bindings (`[percentage]="..."`, `[indeterminate]="..."`, etc.) continue to work unchanged. Programmatic reads must invoke the signal: `progressBar.percentage` → `progressBar.percentage()`, `progressBar.ariaLabel` → `progressBar.ariaLabel()`. These inputs are now read-only and can no longer be assigned imperatively (`progressBar.percentage = 50` is no longer supported).
* **design:** `@daffodil/design/paginator` now exposes the `DaffPaginatorComponent` inputs `numberOfPages`, `currentPage`, `linkMode`, `url`, and `queryParam` as signals rather than plain properties. Template bindings (`[numberOfPages]="..."`, etc.) continue to work unchanged. Programmatic reads must invoke the signal: `paginator.currentPage` → `paginator.currentPage()`, `paginator.numberOfPages` → `paginator.numberOfPages()`, etc. These inputs are now read-only and can no longer be assigned imperatively.
* **design:** `@daffodil/design/notification` now exposes the `DaffNotificationComponent` `dismissible` input as a signal rather than a plain property. Template bindings (`[dismissible]="..."`) continue to work unchanged. Programmatic reads must invoke the signal: `notification.dismissible` → `notification.dismissible()`. `dismissible` is now read-only and can no longer be assigned imperatively (`notification.dismissible = true` is no longer supported).
* **design:** `@daffodil/design/list` now exposes the `DaffListItemComponent` `active` input as a signal rather than a plain property. Template bindings (`[active]="..."`) continue to work unchanged. Programmatic reads must invoke the signal: `listItem.active` → `listItem.active()`. `active` is now read-only and can no longer be assigned imperatively (`listItem.active = true` is no longer supported).
* **design:** `@daffodil/design/image` now exposes the `DaffImageComponent` inputs `src`, `alt`, `width`, and `height` as signals rather than plain properties, and renames the `load` output to `loaded`. Input template bindings (`[src]`, `[alt]`, etc.) continue to work unchanged. Programmatic reads must invoke the signal: `image.src` → `image.src()`, `image.width` → `image.width()`, etc. Inputs are now read-only and can no longer be assigned imperatively (`image.src = '/image/test.jpg'` is no longer supported).
* **design:** `@daffodil/design/form-field` now exposes all `DaffFormFieldComponent` inputs (`appearance` and `id`) as signals rather than plain properties. Template bindings continue to work, but any programmatic access must go through the signal API:

### Features

* **cart:** distinguish between out of stock and insufficient stock errors ([#4664](https://github.com/graycoreio/daffodil/issues/4664)) ([8ab0cce](https://github.com/graycoreio/daffodil/commit/8ab0cce0d8e6577e7e7a519c1129c95336ebe949))
* **content:** remove `DaffContentMagentoDriverModule` ([2f41dec](https://github.com/graycoreio/daffodil/commit/2f41deca0455fdff9504291f0b8c37f135b8a8fe))
* **core:** add injectable reducer factory ([#4631](https://github.com/graycoreio/daffodil/issues/4631)) ([ca3c74a](https://github.com/graycoreio/daffodil/commit/ca3c74ae17ad644251721b6f682942fbc80540f5))
* **customer-order:** rename magento driver packages to dot versions ([#4624](https://github.com/graycoreio/daffodil/issues/4624)) ([22288b6](https://github.com/graycoreio/daffodil/commit/22288b6e13e679cd3bc9d1cc9ec5e8bc9e5c850c))
* **design:** add configurable menu position and scrollable overflow ([#4541](https://github.com/graycoreio/daffodil/issues/4541)) ([cf4f135](https://github.com/graycoreio/daffodil/commit/cf4f1354c73d7bfed4b3b11d153d2d296dccc5a3))
* **design:** add new export for the default theme ([#4641](https://github.com/graycoreio/daffodil/issues/4641)) ([9668c98](https://github.com/graycoreio/daffodil/commit/9668c984c632eacd99c1d507af1fe4f6ee904d67))
* **design:** convert @daffodil/design/media-gallery to use signals ([#4599](https://github.com/graycoreio/daffodil/issues/4599)) ([0ef5ba2](https://github.com/graycoreio/daffodil/commit/0ef5ba21d02346862c03adfae6fc3c97967bf5d7))
* **design:** convert `@daffodil/design/accordion` to use signals ([#4586](https://github.com/graycoreio/daffodil/issues/4586)) ([9923025](https://github.com/graycoreio/daffodil/commit/99230255a485f3fed3646051ab492b6ac1b6ae28))
* **design:** convert `@daffodil/design/card` to use signals ([#4587](https://github.com/graycoreio/daffodil/issues/4587)) ([b0b3f7c](https://github.com/graycoreio/daffodil/commit/b0b3f7ce240fc9706097b8f076340a9a20a2ab67))
* **design:** convert `@daffodil/design/form-field` to use signals ([#4591](https://github.com/graycoreio/daffodil/issues/4591)) ([f993bf9](https://github.com/graycoreio/daffodil/commit/f993bf9abaf493d04aadc00d7ff8cd91132bbf22))
* **design:** convert `@daffodil/design/form` to use signals ([#4588](https://github.com/graycoreio/daffodil/issues/4588)) ([ac4cb20](https://github.com/graycoreio/daffodil/commit/ac4cb20fcb84ef597f005d032dfc31906ff44620))
* **design:** convert `@daffodil/design/image` to use signals ([#4597](https://github.com/graycoreio/daffodil/issues/4597)) ([8ae04ce](https://github.com/graycoreio/daffodil/commit/8ae04ce2ba79805e8f06c26049a8965563f84d84))
* **design:** convert `@daffodil/design/list` to use signals ([#4598](https://github.com/graycoreio/daffodil/issues/4598)) ([56e3240](https://github.com/graycoreio/daffodil/commit/56e3240de1308c5341af96c800e908d4a943b2d0))
* **design:** convert `@daffodil/design/menu` to use signals ([#4611](https://github.com/graycoreio/daffodil/issues/4611)) ([49d0680](https://github.com/graycoreio/daffodil/commit/49d068015fdb60f99dbd4a2cbf930e5b9bc53679))
* **design:** convert `@daffodil/design/notification` to use signals ([#4601](https://github.com/graycoreio/daffodil/issues/4601)) ([2605219](https://github.com/graycoreio/daffodil/commit/26052195ee172766d9dcdd799ed56e48d943407e))
* **design:** convert `@daffodil/design/paginator` to use signals ([#4602](https://github.com/graycoreio/daffodil/issues/4602)) ([c789c0b](https://github.com/graycoreio/daffodil/commit/c789c0b6ee94617cf8181114868f214bb870f437))
* **design:** convert `@daffodil/design/progress-bar` to use signals ([#4603](https://github.com/graycoreio/daffodil/issues/4603)) ([c09aeb1](https://github.com/graycoreio/daffodil/commit/c09aeb13a94597757ca33d05f3fe8839a5093542))
* **design:** convert `@daffodil/design/spinner` to use signals ([#4604](https://github.com/graycoreio/daffodil/issues/4604)) ([7ccfba9](https://github.com/graycoreio/daffodil/commit/7ccfba9f9ad66494e7fb5ef4aaf58d48b10f2a89))
* **design:** convert `@daffodil/design/switch` to use signals ([#4608](https://github.com/graycoreio/daffodil/issues/4608)) ([889ea85](https://github.com/graycoreio/daffodil/commit/889ea85733d2c09a0e87dc3e5d001daa5e82987a))
* **design:** convert `@daffodil/design/tabs` to use signals ([#4607](https://github.com/graycoreio/daffodil/issues/4607)) ([dfcb254](https://github.com/graycoreio/daffodil/commit/dfcb254bf322b0e607fa958f83cc4f8e64f65d93))
* **design:** convert `@daffodil/design/tag` to use signals ([#4606](https://github.com/graycoreio/daffodil/issues/4606)) ([f449db4](https://github.com/graycoreio/daffodil/commit/f449db4c8ab5f621251d84c29a27315ed0e76a22))
* **design:** convert `@daffodil/design/text-snippet` to use signals ([#4609](https://github.com/graycoreio/daffodil/issues/4609)) ([0680453](https://github.com/graycoreio/daffodil/commit/0680453bf26a57559f5102d2e3411a161c8a423a))
* **design:** convert `@daffodil/design/toast` to use signals ([#4610](https://github.com/graycoreio/daffodil/issues/4610)) ([955d46d](https://github.com/graycoreio/daffodil/commit/955d46d533b4fb1853f740c2da1d942417fbf9c0))
* **design:** convert `DaffDisableableDirective` to use signals ([#4605](https://github.com/graycoreio/daffodil/issues/4605)) ([abdddbd](https://github.com/graycoreio/daffodil/commit/abdddbd67508e88f92c9e73fcde83aee56e0b3f0))
* **design:** create `daff-color-shift` function ([#4661](https://github.com/graycoreio/daffodil/issues/4661)) ([47284a7](https://github.com/graycoreio/daffodil/commit/47284a7973ad35171a9293b450a83afe4cb402c6))
* **design:** create `DaffBadgeComponent` ([#4585](https://github.com/graycoreio/daffodil/issues/4585)) ([fe6b1dc](https://github.com/graycoreio/daffodil/commit/fe6b1dcadd2354bf34b269d47dfd17a54e55d155))
* **design:** remove `daff-illuminate` mixin ([#4653](https://github.com/graycoreio/daffodil/issues/4653)) ([7d74229](https://github.com/graycoreio/daffodil/commit/7d74229f6f6d2faa1729e82acb26a0c971a1d835))
* **design:** remove default theme variables from scss 'theme' export ([#4641](https://github.com/graycoreio/daffodil/issues/4641)) ([8a57a53](https://github.com/graycoreio/daffodil/commit/8a57a53f269c1003877eaed3570c013c72c5d81d))
* **design:** remove loading icon component ([4a40119](https://github.com/graycoreio/daffodil/commit/4a401194aeb2f635f4b5b87486478f46509f43ad))
* **design:** rename light and dark mode mixins ([#4650](https://github.com/graycoreio/daffodil/issues/4650)) ([93811da](https://github.com/graycoreio/daffodil/commit/93811daf8a4d89533898e3c04f24c987aea6e663))
* **design:** support `light` and `dark` colors in callout and hero ([#4632](https://github.com/graycoreio/daffodil/issues/4632)) ([147cbc7](https://github.com/graycoreio/daffodil/commit/147cbc71c01fdd7f33acacfe50299274b6a50c00))
* **docs:** update `@daffodil/docs` to use full design import paths ([#4645](https://github.com/graycoreio/daffodil/issues/4645)) ([be8eda0](https://github.com/graycoreio/daffodil/commit/be8eda0338bd379c7eae6ee67c84b297bea6cfd0))
* **driver:** remove `DaffMagentoCacheHeaderApolloLinkGenerator` and `DaffMagentoApolloCacheableOperationsLinkGenerator` ([f42531f](https://github.com/graycoreio/daffodil/commit/f42531f3ddadfa9ed5749c6616f4ecb770851285))
* Eslint for Magento driver `exports` in package.json ([#4447](https://github.com/graycoreio/daffodil/issues/4447)) ([b5b14b7](https://github.com/graycoreio/daffodil/commit/b5b14b7ddf38f7908eecb160b2cbcce84318d8c6))
* **eslint-config:** remove daff-packages config ([#4654](https://github.com/graycoreio/daffodil/issues/4654)) ([b200a06](https://github.com/graycoreio/daffodil/commit/b200a06b11d3ff468ef950d38c216dd615453172))
* **order:** rename version packages to dot separator ([#4623](https://github.com/graycoreio/daffodil/issues/4623)) ([fa1a17c](https://github.com/graycoreio/daffodil/commit/fa1a17cccb27f28d4ec7b4a29a0f92283c3291d4))


### Bug Fixes

* **design-examples:** bind hero text alignment to selected option value ([#4600](https://github.com/graycoreio/daffodil/issues/4600)) ([fa428b0](https://github.com/graycoreio/daffodil/commit/fa428b0dbcae01824542dd2b4eda39002fc67975))
* **design:** apply article styles to articles nested in encapsulated components ([#4663](https://github.com/graycoreio/daffodil/issues/4663)) ([db6f43b](https://github.com/graycoreio/daffodil/commit/db6f43ba3ecf0153de253bba4bccef3234d156dc))
* **design:** apply card and select hover styles only on hover ([#4648](https://github.com/graycoreio/daffodil/issues/4648)) ([8f3ddf4](https://github.com/graycoreio/daffodil/commit/8f3ddf46f17a1e94be1c636683ddf51abe57946b))
* **design:** break dependency cycle in DaffRovingTabIndexDirective ([#4594](https://github.com/graycoreio/daffodil/issues/4594)) ([840e653](https://github.com/graycoreio/daffodil/commit/840e653d7cc2f137fcf43e5f80523940c21ae11a))
* **design:** correct `DaffFormFieldAppearance` type name spelling ([#4637](https://github.com/graycoreio/daffodil/issues/4637)) ([be45956](https://github.com/graycoreio/daffodil/commit/be459560d6e1f0ac8bbaa904a5eeb9c0850e8f39))
* **design:** isolate menu open state to activator ([#4550](https://github.com/graycoreio/daffodil/issues/4550)) ([5560c90](https://github.com/graycoreio/daffodil/commit/5560c90836285ab896015545abf27f5f3d4cf990))
* **design:** let the card body fill the card ([#4615](https://github.com/graycoreio/daffodil/issues/4615)) ([49eceaa](https://github.com/graycoreio/daffodil/commit/49eceaa3d5fb3b12e56cdc650401d1f94744d1fb))
* **design:** remove duplicate component theme injections ([#4636](https://github.com/graycoreio/daffodil/issues/4636)) ([a145c13](https://github.com/graycoreio/daffodil/commit/a145c13209d798ad67df69c7ef29cc8ba41c142b))
* **design:** resolve card image border radius specificity ([#4613](https://github.com/graycoreio/daffodil/issues/4613)) ([98bdd4f](https://github.com/graycoreio/daffodil/commit/98bdd4ff0e07ecdd93f2a77457dce4fe4af3f9da))
* **design:** scope callout body paragraph margins to direct children ([#4617](https://github.com/graycoreio/daffodil/issues/4617)) ([fedce39](https://github.com/graycoreio/daffodil/commit/fedce39b8dc7bf3e4928869406d46c30ed54e5f4))
* **navigation:** ensure fragment fields on leaf nodes in magento ([#4621](https://github.com/graycoreio/daffodil/issues/4621)) ([732c082](https://github.com/graycoreio/daffodil/commit/732c082d07b63a57687502f47960fc49c9ab6356))

## [0.93.1](https://github.com/graycoreio/daffodil/compare/v0.93.0...v0.93.1) (2026-07-09)


### Features

* **design, design-examples:** migrate sidebar styles to examples ([#4555](https://github.com/graycoreio/daffodil/issues/4555)) ([fe9c81b](https://github.com/graycoreio/daffodil/commit/fe9c81ba969fd18a1fcd80b6436a89314cc91b26))
* **design, design-examples:** reposition tag as a filter and selection component ([#4566](https://github.com/graycoreio/daffodil/issues/4566)) ([4f02429](https://github.com/graycoreio/daffodil/commit/4f02429e06a76387fc5b8f65cf28b17cebe224ec))
* **design:** create DaffBeaconComponent ([#4564](https://github.com/graycoreio/daffodil/issues/4564)) ([39ef0ec](https://github.com/graycoreio/daffodil/commit/39ef0ec23fb95e10f235de056eefedadfa793a4e))
* **design:** update css animations to use the prefers-reduced-motion feature ([#4562](https://github.com/graycoreio/daffodil/issues/4562)) ([0f0eaa3](https://github.com/graycoreio/daffodil/commit/0f0eaa3ba6636e2c0c9f34416fb14179262ba988))
* **storefront:** convert the theme toggle from a light/dark switch into a menu offering system, light, and dark options ([#4520](https://github.com/graycoreio/daffodil/issues/4520)) ([51921b6](https://github.com/graycoreio/daffodil/commit/51921b6d6354448465eaad6e41ae0aad84f86099))


### Bug Fixes

* **core:** `provideDaffApolloHeaderProviders` doesn't return new headers ([#4576](https://github.com/graycoreio/daffodil/issues/4576)) ([004d67e](https://github.com/graycoreio/daffodil/commit/004d67e2516c720f678766662bdec74db0407d5d))
* **design:** add missing native-select and tag path mappings to tsconfig ([#4569](https://github.com/graycoreio/daffodil/issues/4569)) ([dc2e5de](https://github.com/graycoreio/daffodil/commit/dc2e5de15975fc1565fca016165d278e2e2aa7ce))

## [0.93.0](https://github.com/graycoreio/daffodil/compare/v0.92.3...v0.93.0) (2026-06-24)


### ⚠ BREAKING CHANGES

* **navigation:** `DaffNavigationInMemoryDriverModule` has been removed, use `provideDaffNavigationInMemoryDriver` instead. `DaffNavigationMagentoDriverModule` has been removed, use `provideDaffNavigationMagentoDriver` instead.
* **design:** `DaffOpenableDirective` now exposes `open` as a signal rather than a plain property. Template bindings ([open]="true / false") continue to work, but any programmatic access must go through the signal API. You must now invoke the signal: `directive.open` -> `directive.open()`.
* **core,content,category,product:** `GraphQlApolloValidator` now requires 2 type params
* **core,auth,driver:** `DaffApolloHeaderProvider` now returns `HttpHeaders`
* upgrade to angular 21 ([#4442](https://github.com/graycoreio/daffodil/issues/4442))

### Features

* **cart,product:** export meta reducer factory providers ([#4545](https://github.com/graycoreio/daffodil/issues/4545)) ([e74bdea](https://github.com/graycoreio/daffodil/commit/e74bdea6e2d54e1bad137dca61411cde64e86fcb))
* **cart:** export magento driver extension factory providers ([#4546](https://github.com/graycoreio/daffodil/issues/4546)) ([5cdc2b0](https://github.com/graycoreio/daffodil/commit/5cdc2b0d035da5157d343f3c1dcb15976a4b3975))
* **core,auth,driver:** return headers from `DaffApolloHeaderProvider` ([#4544](https://github.com/graycoreio/daffodil/issues/4544)) ([0c0c29f](https://github.com/graycoreio/daffodil/commit/0c0c29fbe2ea8d326a985108dd579ed92f777814))
* **core,content,category,product:** allow validators to narrow type ([#4548](https://github.com/graycoreio/daffodil/issues/4548)) ([f0f9d99](https://github.com/graycoreio/daffodil/commit/f0f9d99c384adc1b7e81d147f3fa2d1b0b6fa1ec))
* **demo:** use zone change detection ([#4442](https://github.com/graycoreio/daffodil/issues/4442)) ([292176c](https://github.com/graycoreio/daffodil/commit/292176c0bfd556c62cfe4c1606cfd593e2538148))
* **design:** add deprecate tag to orientable and text alignable ([#4487](https://github.com/graycoreio/daffodil/issues/4487)) ([531b0d0](https://github.com/graycoreio/daffodil/commit/531b0d0d8201d1db42f15a809b1a77025c2cfd10))
* **design:** add global scrollbar styling ([#4526](https://github.com/graycoreio/daffodil/issues/4526)) ([cdf9be7](https://github.com/graycoreio/daffodil/commit/cdf9be724e51723ebc151e1255a621b5c6470127))
* **design:** convert `@daffodil/design/button` to use signals ([#4542](https://github.com/graycoreio/daffodil/issues/4542)) ([c9071d8](https://github.com/graycoreio/daffodil/commit/c9071d88df0d4cbc098e26e013b39f0d405e4d00))
* **design:** convert `DaffOpenableDirective` to use signals ([#4553](https://github.com/graycoreio/daffodil/issues/4553)) ([dcc6959](https://github.com/graycoreio/daffodil/commit/dcc695941c368e7305297d070740c743752c7a51))
* **design:** deprecate `DaffSizableEnum` and `DaffSizable` and update documentation ([#4465](https://github.com/graycoreio/daffodil/issues/4465)) ([b3f880c](https://github.com/graycoreio/daffodil/commit/b3f880c239cd02027a1245a461990b644f92dcd4))
* **design:** implement hover media query in design components ([#4493](https://github.com/graycoreio/daffodil/issues/4493)) ([922e73f](https://github.com/graycoreio/daffodil/commit/922e73fdc9f7505823150e6a7a994420e056c557))
* **design:** move global scrollbar style to body only ([#4527](https://github.com/graycoreio/daffodil/issues/4527)) ([2f48ca9](https://github.com/graycoreio/daffodil/commit/2f48ca9d5bc709f1220c7ae76a871b943ef57da7))
* **design:** relabel formerly private properties to [@docs-private](https://github.com/docs-private) so that angular host can access them ([#4442](https://github.com/graycoreio/daffodil/issues/4442)) ([72bd274](https://github.com/graycoreio/daffodil/commit/72bd2742cb4929e009b21d57e900296d86d51461))
* **navigation:** remove driver modules ([#4554](https://github.com/graycoreio/daffodil/issues/4554)) ([2c7d3a7](https://github.com/graycoreio/daffodil/commit/2c7d3a79e8e2b0c6f1fbe4b4b5dea5301e89fee3))
* **search-product:** make magento incremental seach query cacheable ([#4502](https://github.com/graycoreio/daffodil/issues/4502)) ([ce51864](https://github.com/graycoreio/daffodil/commit/ce5186417d3fa79bc7a4e29e2adb68e626caa651))
* support @apollo/client@^4 ([#4442](https://github.com/graycoreio/daffodil/issues/4442)) ([70d354e](https://github.com/graycoreio/daffodil/commit/70d354e5554e5f40d8bbea016c7f5954e9e4441f))
* upgrade to angular 21 ([#4442](https://github.com/graycoreio/daffodil/issues/4442)) ([b4e5c3d](https://github.com/graycoreio/daffodil/commit/b4e5c3d0a4db5ea2653d3a795ea71e2e8d6d3742))


### Bug Fixes

* **daffio:** `DaffioActiveHeaderService` zombies event listener ([#4556](https://github.com/graycoreio/daffodil/issues/4556)) ([a6c5011](https://github.com/graycoreio/daffodil/commit/a6c5011615491790144fbc894cb3f01d9fe0ddd7))
* **design:** apply form field control right padding removal only when action is present ([#4492](https://github.com/graycoreio/daffodil/issues/4492)) ([bc34302](https://github.com/graycoreio/daffodil/commit/bc34302962050521dfb4b158f08709b168fdabf2))
* **design:** use DaffDisableableDirective in tag component ([#4538](https://github.com/graycoreio/daffodil/issues/4538)) ([8cfa69a](https://github.com/graycoreio/daffodil/commit/8cfa69a05c25ee59310363bf7af30ad5e7673ae5))
* **external-router:** magento driver does not request product key fields ([#4488](https://github.com/graycoreio/daffodil/issues/4488)) ([89ec493](https://github.com/graycoreio/daffodil/commit/89ec493f12879149cf8a6dab7cde551431035a01))

## [0.92.3](https://github.com/graycoreio/daffodil/compare/v0.92.3-rc.2...v0.92.3) (2026-05-15)


### Miscellaneous Chores

* graduate 0.92.3-rc.2 to 0.92.3 ([#4485](https://github.com/graycoreio/daffodil/issues/4485)) ([44b8f4a](https://github.com/graycoreio/daffodil/commit/44b8f4a10e65c57c87f290674b9d11565ac79921))

## [0.92.3-rc.2](https://github.com/graycoreio/daffodil/compare/v0.92.3-rc.1...v0.92.3-rc.2) (2026-05-13)


### Features

* **design:** add render mode default to tree ([#4470](https://github.com/graycoreio/daffodil/issues/4470)) ([62bd527](https://github.com/graycoreio/daffodil/commit/62bd527443df09d011d4238120303be8620d967c))

## [0.92.3-rc.1](https://github.com/graycoreio/daffodil/compare/v0.92.3-rc.0...v0.92.3-rc.1) (2026-05-13)


### Features

* **storefront:** make publishable ([#4479](https://github.com/graycoreio/daffodil/issues/4479)) ([dd189ad](https://github.com/graycoreio/daffodil/commit/dd189ad733bd32529512e77a6dca2306c999adee))

## [0.92.3-rc.0](https://github.com/graycoreio/daffodil/compare/v0.92.2...v0.92.3-rc.0) (2026-05-12)


### Bug Fixes

* noop release commit ([5357430](https://github.com/graycoreio/daffodil/commit/5357430b07716103d11ad17aa17a441e84dbda27))

## [0.92.2](https://github.com/graycoreio/daffodil/compare/v0.92.1...v0.92.2) (2026-05-12)


### Features

* **demo:** Add SSR support ([#4426](https://github.com/graycoreio/daffodil/issues/4426)) ([c88915f](https://github.com/graycoreio/daffodil/commit/c88915fd5499b5239eda531e8e8558046cb470ea))
* **design:** implement hover media query in button component ([#4467](https://github.com/graycoreio/daffodil/issues/4467)) ([ba8786a](https://github.com/graycoreio/daffodil/commit/ba8786a989ef14d8a1c75a0d27afee2f879fdaf9))

## [0.92.1](https://github.com/graycoreio/daffodil/compare/v0.92.0...v0.92.1) (2026-05-01)


### Features

* **daffio:** remove unused `hasDefaults` input ([#4454](https://github.com/graycoreio/daffodil/issues/4454)) ([4dba9b5](https://github.com/graycoreio/daffodil/commit/4dba9b576765408c49648d457b5fdb6880da0704))
* **design:** deprecate `DaffOrientable` and `DaffOrientationEnum` and update documentation ([#4464](https://github.com/graycoreio/daffodil/issues/4464)) ([5350a02](https://github.com/graycoreio/daffodil/commit/5350a024c0b96d3c05104f10964ec4a591ab4a12))
* **design:** deprecate `DaffTextAlignableEnum` and `DaffTextAlignable` and update documentation ([#4459](https://github.com/graycoreio/daffodil/issues/4459)) ([bdfb53f](https://github.com/graycoreio/daffodil/commit/bdfb53fb921b6672f5a22b236e937085c2eaa768))
* **dgeni:** strip input signal factory from  prop default ([#4457](https://github.com/graycoreio/daffodil/issues/4457)) ([9a5f8cb](https://github.com/graycoreio/daffodil/commit/9a5f8cb0a050486a084c779b45ba51193ea84093))


### Bug Fixes

* **daffio:** apply correct label class for multi-word api roles ([#4463](https://github.com/graycoreio/daffodil/issues/4463)) ([20bc9c1](https://github.com/graycoreio/daffodil/commit/20bc9c1c5a5f7d3c5a6d45b1161897dcfd2a90d2))
* **dgeni:** canonical path broken for design behaviors ([#4453](https://github.com/graycoreio/daffodil/issues/4453)) ([b40b38c](https://github.com/graycoreio/daffodil/commit/b40b38c5e05e364bee6c3e7987343d1197f8540c))
* **dgeni:** generics not appearing in prop types ([#4456](https://github.com/graycoreio/daffodil/issues/4456)) ([616baa0](https://github.com/graycoreio/daffodil/commit/616baa08a6dc4b7a5c0cd1d30703a1b1774ea3d9))

## [0.92.0](https://github.com/graycoreio/daffodil/compare/v0.91.0...v0.92.0) (2026-04-20)


### ⚠ BREAKING CHANGES

* **design:** `DaffTreeComponent` and `DaffTreeItemDirective` now expose their inputs (`tree`, `renderMode`, `node`, `selected`), content queries (`withChildrenTemplate`, `treeItemTemplate`), and the public `flatTree` field as signals rather than plain properties. Template bindings (`[tree]="data"`) continue to work, but any programmatic reads must invoke the signal: `component.flatTree` → `component.flatTree()`, `component.tree` → `component.tree()`,`directive.node` → `directive.node()`, and so on. Consumers that read these fields from tests or component code must update accordingly.
* **cart,demo:** remove deprecated `DaffCartAddress.address_type` field
* **product,driver:** `provideShopifyApolloDriver` and `DaffProductShopifyDriverModule` have been removed after their deprecation window. There is a replacement `provideShopifyDriver`.
* **driver:** add feature support to magento driver provider ([#4251](https://github.com/graycoreio/daffodil/issues/4251))
* **design, storefront:** move `DaffQuantityFieldComponent` into the storefront package ([#4121](https://github.com/graycoreio/daffodil/issues/4121))
* **design-land:** `design-land` has been deleted from the codebase.
* **design:** `DaffMutable` has been removed from `@daffodil/design`.
* **design:** `DaffErrorStateMatcher` has been removed from `@daffodil/design`.
* **design:** `$daff-primary` and `$daff-accent` color palette maps have been removed.
* **design:** Navbar inputs now use signals. If you were setting `raised`, update to use `elevated` signal input.

### Features

* **auth:** add SSR handling and redirect behavior to `DaffAuthResetPasswordGuard` ([#4413](https://github.com/graycoreio/daffodil/issues/4413)) ([d30b888](https://github.com/graycoreio/daffodil/commit/d30b8880b92e0743c1f5fe04e09db6af04b9b37a))
* **builders,daffio:** generate sitemap ([#4152](https://github.com/graycoreio/daffodil/issues/4152)) ([c6b9e65](https://github.com/graycoreio/daffodil/commit/c6b9e65a4393f6041eb99c0f06fe5abc97b68fd0))
* **cart,demo:** remove deprecated `DaffCartAddress.address_type` field ([ec5baac](https://github.com/graycoreio/daffodil/commit/ec5baac021ca4ccad44a9dc4e84621ef0f236768))
* **category:** add shopify category driver ([#4395](https://github.com/graycoreio/daffodil/issues/4395)) ([040951d](https://github.com/graycoreio/daffodil/commit/040951db4120bc7f47efe80e5e38e951a9900588))
* **core:** add createable ([#4412](https://github.com/graycoreio/daffodil/issues/4412)) ([2d19c34](https://github.com/graycoreio/daffodil/commit/2d19c341584c765478a1c8d82317b6a866f5afe4))
* **daffio, docs:** add color palette generator to color docs page ([#4379](https://github.com/graycoreio/daffodil/issues/4379)) ([4eff32e](https://github.com/graycoreio/daffodil/commit/4eff32e5e5c290bb07f3011e4394b46818b6c683))
* **daffio, docs:** enable rendering of example code output in design docs ([#4274](https://github.com/graycoreio/daffodil/issues/4274)) ([4c88b0f](https://github.com/graycoreio/daffodil/commit/4c88b0f74e8a67a58c95307dce122020dd2089e7))
* **daffio, storefront-examples:** register quantity field examples in docs ([#4389](https://github.com/graycoreio/daffodil/issues/4389)) ([1f3902a](https://github.com/graycoreio/daffodil/commit/1f3902a7c5419e6ebb400d98782444c766582459))
* **daffio, storefront-examples:** render storefront component examples in docs ([#4361](https://github.com/graycoreio/daffodil/issues/4361)) ([259bd52](https://github.com/graycoreio/daffodil/commit/259bd520c916b7d97fcdbc30262ba518ad5bc56c))
* **daffio:** allow API fragments to control rendering ([#4381](https://github.com/graycoreio/daffodil/issues/4381)) ([29ea24b](https://github.com/graycoreio/daffodil/commit/29ea24b5657f746a6042f2685b84f51f4261ccd9))
* **daffio:** clarify example viewer UI ([#4404](https://github.com/graycoreio/daffodil/issues/4404)) ([eea2336](https://github.com/graycoreio/daffodil/commit/eea23369bd7417671531dc5a5714cce5f4327e2f))
* **daffio:** force relative links to use angular navigation ([#4392](https://github.com/graycoreio/daffodil/issues/4392)) ([78ba7e6](https://github.com/graycoreio/daffodil/commit/78ba7e6be4e6191c5ce21c8586df2d2dd24691e6))
* **daffio:** redirect get started links to docs instead of github ([#4341](https://github.com/graycoreio/daffodil/issues/4341)) ([5bc707e](https://github.com/graycoreio/daffodil/commit/5bc707e38c17716ada5c379a98ae38ab255e99c5))
* **daffio:** update main docs and marketing mobile sidebar to appear on the right side ([#4329](https://github.com/graycoreio/daffodil/issues/4329)) ([1797c1c](https://github.com/graycoreio/daffodil/commit/1797c1c2a9fb96b6ba2777c62cf984d25eb774ad))
* **daffio:** update mobile toc to use the DaffMenuModule ([#4328](https://github.com/graycoreio/daffodil/issues/4328)) ([48eb887](https://github.com/graycoreio/daffodil/commit/48eb8878fb8b09af7f08d5fd223fb86cb1aa9344))
* **demo:** migrate to magento driver provider ([#4406](https://github.com/graycoreio/daffodil/issues/4406)) ([b36bb69](https://github.com/graycoreio/daffodil/commit/b36bb696f8e8acbdf328edfc45856d64b5a2a63c))
* **design-land:** remove design-land app from codebase ([#4353](https://github.com/graycoreio/daffodil/issues/4353)) ([dd739c5](https://github.com/graycoreio/daffodil/commit/dd739c5e51ab7b3feef4e25e1556b716dc0a9b4e))
* **design, demo:** deprecate `@daffodil/design/link-set` and replace usage ([#4295](https://github.com/graycoreio/daffodil/issues/4295)) ([d75d063](https://github.com/graycoreio/daffodil/commit/d75d06365c81924b1351df84f01f876e9e7069f0))
* **design, storefront:** move `DaffQuantityFieldComponent` into the storefront package ([#4121](https://github.com/graycoreio/daffodil/issues/4121)) ([df6d19d](https://github.com/graycoreio/daffodil/commit/df6d19dd67d5d506a36468ccfdce55eed5b6ba8f))
* **design:** add `aria-controls` support to `DaffMenuComponent` ([#4315](https://github.com/graycoreio/daffodil/issues/4315)) ([daf9a0a](https://github.com/graycoreio/daffodil/commit/daf9a0ae27964b4c3f724bfd241290528d3df8cd))
* **design:** add `isOpen` property to menu activator to track the menu's open state ([#4299](https://github.com/graycoreio/daffodil/issues/4299)) ([465180b](https://github.com/graycoreio/daffodil/commit/465180b80bc1c6838327fd07c93450d848e00627))
* **design:** add focus method to input and native select components ([#4348](https://github.com/graycoreio/daffodil/issues/4348)) ([77893c4](https://github.com/graycoreio/daffodil/commit/77893c4bef4c8711eb14256790a1f5f725ace1fa))
* **design:** add keyboard support and basic aria roles for menu ([#3998](https://github.com/graycoreio/daffodil/issues/3998)) ([8100a38](https://github.com/graycoreio/daffodil/commit/8100a38eb8cb9241ee21ceb7a5187a863c5bc4bc))
* **design:** add loading property to button ([#4343](https://github.com/graycoreio/daffodil/issues/4343)) ([252c33e](https://github.com/graycoreio/daffodil/commit/252c33e91f6949f31263d2b2d8caa0b11972fcca))
* **design:** add roving tab index ([#4174](https://github.com/graycoreio/daffodil/issues/4174)) ([d90d967](https://github.com/graycoreio/daffodil/commit/d90d967eff5bc50033d19f2dfe92971a7ef6f652))
* **design:** add truncated design to `DaffBreadcrumbComponent` ([#4278](https://github.com/graycoreio/daffodil/issues/4278)) ([a5dd535](https://github.com/graycoreio/daffodil/commit/a5dd535c3cb22a143161c2be9a34af7135de707a))
* **design:** allow `DaffModalService.open` to return a reference instead of a modal instance ([#4321](https://github.com/graycoreio/daffodil/issues/4321)) ([0d57886](https://github.com/graycoreio/daffodil/commit/0d578865d7d3c242819907202102758998c01116))
* **design:** automatically add anchor link and copy URL button to article headings ([#4260](https://github.com/graycoreio/daffodil/issues/4260)) ([39cfdd4](https://github.com/graycoreio/daffodil/commit/39cfdd46b72e2e1635aa40e68210575953ea7a82))
* **design:** clean up article copy button and heading link styles ([#4345](https://github.com/graycoreio/daffodil/issues/4345)) ([d66b478](https://github.com/graycoreio/daffodil/commit/d66b478c2662362f8664c1b50d5a49ffd420f388))
* **design:** convert tree to signals ([#4408](https://github.com/graycoreio/daffodil/issues/4408)) ([03cfe38](https://github.com/graycoreio/daffodil/commit/03cfe380faaf046fb7e6751c945f733cce5f0ba2))
* **design:** create `DaffLoadableDirective` ([#4335](https://github.com/graycoreio/daffodil/issues/4335)) ([59c55b8](https://github.com/graycoreio/daffodil/commit/59c55b88e31bd1bf916dc48b143cbe0fada891d8))
* **design:** create `DaffSpinnerComponent` to replace `DaffLoadingIconComponent` ([#4316](https://github.com/graycoreio/daffodil/issues/4316)) ([4a14372](https://github.com/graycoreio/daffodil/commit/4a14372b705b0bdcbcbb565f222ceb86e4e78337))
* **design:** create DaffDisableable interface and clean up documentation ([#4427](https://github.com/graycoreio/daffodil/issues/4427)) ([8a1d313](https://github.com/graycoreio/daffodil/commit/8a1d313417cc6c8b6ffe5574483091a7a2c6ef6b))
* **design:** deprecate DaffColorable and clean up documentation ([#4422](https://github.com/graycoreio/daffodil/issues/4422)) ([86cd9cd](https://github.com/graycoreio/daffodil/commit/86cd9cd40178c21821d4484d7749619986f965e5))
* **design:** deprecate DaffCompactable and clean up documentation ([#4423](https://github.com/graycoreio/daffodil/issues/4423)) ([e57e807](https://github.com/graycoreio/daffodil/commit/e57e807b78c82740f0508e302fadf0090dc46869))
* **design:** deprecated `DaffUnderlineButtonComponent` ([#4337](https://github.com/graycoreio/daffodil/issues/4337)) ([b576e04](https://github.com/graycoreio/daffodil/commit/b576e04965c5d0caa96dfe5f6745c298b8ad1ff7))
* **design:** fix form field label styles ([#4347](https://github.com/graycoreio/daffodil/issues/4347)) ([1072f16](https://github.com/graycoreio/daffodil/commit/1072f1620d0c0f7163e4b02904ce157513eb4bac))
* **design:** remove `DaffErrorStateMatcher` ([#4349](https://github.com/graycoreio/daffodil/issues/4349)) ([9e18f18](https://github.com/graycoreio/daffodil/commit/9e18f185e78388e9760f686b24b73992ccec0889))
* **design:** remove `DaffMutable` from `@daffodil/design` ([#4350](https://github.com/graycoreio/daffodil/issues/4350)) ([6cb81c9](https://github.com/graycoreio/daffodil/commit/6cb81c9f94884da50af8179d595c0fd5e86fa7db))
* **design:** remove deprecated variables from color palettes ([#4346](https://github.com/graycoreio/daffodil/issues/4346)) ([edede5d](https://github.com/graycoreio/daffodil/commit/edede5db41f6a40af596d1570b11607bcee1558e))
* **design:** set default spinner color to `currentColor` ([#4336](https://github.com/graycoreio/daffodil/issues/4336)) ([905aed8](https://github.com/graycoreio/daffodil/commit/905aed8cdc9293b2f598002ca93eb74720824e44))
* **design:** set nocopy on example viewer code block ([#4397](https://github.com/graycoreio/daffodil/issues/4397)) ([ad4574c](https://github.com/graycoreio/daffodil/commit/ad4574c2791f6cb184708dc68bec9f0ba991308c))
* **design:** update navbar UI ([#4324](https://github.com/graycoreio/daffodil/issues/4324)) ([15f4803](https://github.com/graycoreio/daffodil/commit/15f4803b5f6982f347c51d5160bafd55799a5ab7))
* **design:** update text snippet toggle button style ([#4338](https://github.com/graycoreio/daffodil/issues/4338)) ([5331cb6](https://github.com/graycoreio/daffodil/commit/5331cb6facaafd754a9b317e1205364eee7c66fc))
* **dgeni:** support core design behaviors as components ([#4387](https://github.com/graycoreio/daffodil/issues/4387)) ([6c8790f](https://github.com/graycoreio/daffodil/commit/6c8790fa7fe49c6a44211613210e3cdee6935fdb))
* **dgeni:** support signal forms of inputs and outputs ([#4382](https://github.com/graycoreio/daffodil/issues/4382)) ([d5ce93e](https://github.com/graycoreio/daffodil/commit/d5ce93e77c43bcae2cc8edec9749054f782c0aa0))
* **docs-util,daffio:** group API symbols by role in list ([#4262](https://github.com/graycoreio/daffodil/issues/4262)) ([5103bbc](https://github.com/graycoreio/daffodil/commit/5103bbc8b948f992eedfd48abfe7a970750d58ad))
* **docs-utils:** add API role factories ([#3911](https://github.com/graycoreio/daffodil/issues/3911)) ([cac42f6](https://github.com/graycoreio/daffodil/commit/cac42f69be1a51dab051ca1a286a2d09532535cc))
* **docs,dgeni,daffio:** add storefront design docs ([#4269](https://github.com/graycoreio/daffodil/issues/4269)) ([bd33c14](https://github.com/graycoreio/daffodil/commit/bd33c1466ffa3c13b96ce19e30256a40a16cd1e3))
* **docs:** create reusable color strip component ([#4383](https://github.com/graycoreio/daffodil/issues/4383)) ([5c31652](https://github.com/graycoreio/daffodil/commit/5c316525f894631cd89c282298157ed66d498a4a))
* **docs:** Move `DaffioExampleViewerComponent` and `DaffioDocRendererComponent` to `@daffodil/docs` ([#4407](https://github.com/graycoreio/daffodil/issues/4407)) ([fedf075](https://github.com/graycoreio/daffodil/commit/fedf0759d1056390b381a711df1c6ba92e18a9e1))
* **driver:** add feature support to magento driver provider ([#4251](https://github.com/graycoreio/daffodil/issues/4251)) ([cff479e](https://github.com/graycoreio/daffodil/commit/cff479ed4618840133874818a2bcfe77c2e468fe))
* **external-router:** integrate automatic URL resolution from in-memory routable objects ([#4145](https://github.com/graycoreio/daffodil/issues/4145)) ([4fc4df3](https://github.com/graycoreio/daffodil/commit/4fc4df3ef45501edca3be4f054dd22e21c6719e4))
* **product,driver:** remove old providers and module ([#4411](https://github.com/graycoreio/daffodil/issues/4411)) ([27e2ac3](https://github.com/graycoreio/daffodil/commit/27e2ac337956c9c544dcaa79410600cc1c0cdc75))
* **product:** transfer in-memory state when hydrating backend  ([#4148](https://github.com/graycoreio/daffodil/issues/4148)) ([fcc04e4](https://github.com/graycoreio/daffodil/commit/fcc04e4b6272637e83dfd8abc1d14a66188027d4))
* **sassdoc:** output files by symbol group ([#4340](https://github.com/graycoreio/daffodil/issues/4340)) ([13a61db](https://github.com/graycoreio/daffodil/commit/13a61db23e9d11b69c50babfdb3d990da0407aeb))
* **sassdoc:** separate items by group ([#4300](https://github.com/graycoreio/daffodil/issues/4300)) ([836b998](https://github.com/graycoreio/daffodil/commit/836b998730843f12b99d222b30e67a0d051178e2))
* **storefront, theme-switch:** move experimental `@daffodil/theme-switch` components into `@daffodil/storefront` ([#4326](https://github.com/graycoreio/daffodil/issues/4326)) ([cb45379](https://github.com/graycoreio/daffodil/commit/cb453794ed1b375029d11cd23b8de1fa40a9bf1e))


### Bug Fixes

* **ci:** PRs cannot specify commerce schematic angular version ([#4445](https://github.com/graycoreio/daffodil/issues/4445)) ([01e332a](https://github.com/graycoreio/daffodil/commit/01e332ae450572c28b5a6220f8038cb8860243e5))
* **daffio:** dedupe `activeRegistration$` by sidebar id ([#4408](https://github.com/graycoreio/daffodil/issues/4408)) ([eaa0d7c](https://github.com/graycoreio/daffodil/commit/eaa0d7ce7f3309f39d990c3f54a51dd41474caa6))
* **daffio:** fix `DaffioExampleViewerPreviewComponent` to always apply the viewport class ([#4362](https://github.com/graycoreio/daffodil/issues/4362)) ([6123bd9](https://github.com/graycoreio/daffodil/commit/6123bd9d4cb80b3ca87427eedf268cf74e3b591e))
* **daffio:** Replace `[@use](https://github.com/use) 'utilities'` with `[@use](https://github.com/use) '@daffodil/design/scss/utilities'` ([#4375](https://github.com/graycoreio/daffodil/issues/4375)) ([f6c42f0](https://github.com/graycoreio/daffodil/commit/f6c42f0f33dce59bcddfa29bf11a10649507fafd))
* **daffio:** resolve docs nav `index` via `DaffRouterDataService` ([#4408](https://github.com/graycoreio/daffodil/issues/4408)) ([028fa0a](https://github.com/graycoreio/daffodil/commit/028fa0a75cab110badcb68f5bad779ef79ac08d0))
* **demo:** newsletter not using form field component ([#4405](https://github.com/graycoreio/daffodil/issues/4405)) ([1f7b7bb](https://github.com/graycoreio/daffodil/commit/1f7b7bbb8312a94d08f4e4c2aeef31ce8b218079))
* **design:** button hover and active state styling ([#4380](https://github.com/graycoreio/daffodil/issues/4380)) ([8de0f73](https://github.com/graycoreio/daffodil/commit/8de0f7310ecf359bb4d0d00647b7321be8780a3b))
* **design:** close menu on menu item click ([#4297](https://github.com/graycoreio/daffodil/issues/4297)) ([bd579a1](https://github.com/graycoreio/daffodil/commit/bd579a1634303bfc7da96093a437976dc78e859f))
* **design:** menu backdrop click doesn't update state ([#4298](https://github.com/graycoreio/daffodil/issues/4298)) ([d72f004](https://github.com/graycoreio/daffodil/commit/d72f00441e8f53e1b2a2d446940e7b4e68d6819f))
* **design:** set disabled attribute from ngControl in form field controls ([#4372](https://github.com/graycoreio/daffodil/issues/4372)) ([3c79c2e](https://github.com/graycoreio/daffodil/commit/3c79c2e6c550cf2b7de4e318289020f84757b7fa))
* **design:** skip code copy button for article encapsulated components ([#4277](https://github.com/graycoreio/daffodil/issues/4277)) ([d625359](https://github.com/graycoreio/daffodil/commit/d625359e75186b55ef2a162e121fdf982dfdd6af))
* **dgeni:** `[@docs-private](https://github.com/docs-private)` symbols appear in API list ([#4293](https://github.com/graycoreio/daffodil/issues/4293)) ([4d0fce6](https://github.com/graycoreio/daffodil/commit/4d0fce6870750b500e617458c3dbe70136aed210))
* **dgeni:** members deeply nested in inheritance chain not hoisted ([#4240](https://github.com/graycoreio/daffodil/issues/4240)) ([7139f8c](https://github.com/graycoreio/daffodil/commit/7139f8c80c4fb596684b571db2cf490ccfd320ea))
* **docs:** colors with spaces caused color-palette tests to fail ([e50e349](https://github.com/graycoreio/daffodil/commit/e50e349efe776fcb0ab0b3683f8eba6b12c1f150))
* **docs:** support storefront paths ([#4357](https://github.com/graycoreio/daffodil/issues/4357)) ([4a8f1c8](https://github.com/graycoreio/daffodil/commit/4a8f1c848a30570af931138dae9dfefcf1ba509a))
* **driver:** provideMagentoDriver crashes when options is an InjectionToken ([#4421](https://github.com/graycoreio/daffodil/issues/4421)) ([f9c012d](https://github.com/graycoreio/daffodil/commit/f9c012deb6da4e752763350adf4a16871df4e221))

## [0.91.0](https://github.com/graycoreio/daffodil/compare/v0.90.0...v0.91.0) (2026-01-05)


### ⚠ BREAKING CHANGES

* **driver:** `DaffDriverMagentoModule` has been removed. Use `provideMagentoDriver` instead.
* **design:** `DaffSidebarHeaderActionDirective` has been removed. Use the `dismissible` property of `DaffSidebarHeaderComponent` instead.
* **design:** `DaffNotificationSubtitleDirective` has been removed. Use the `DaffNotificationMessageDirective` instead.
* **design:** `DaffRaisedCardComponent` has been removed. Use the `elevated` property of `daff-card` instead.
* **design:** move hint, error message, and label to a `@daffodil/design/form` package ([#4230](https://github.com/graycoreio/daffodil/issues/4230))
* **content:** Many interfaces have changed. DaffContentPage -> DaffContentHtmlPage, DaffContentPageServiceInterface -> DaffContentPageHtmlServiceInterface, provideDaffContentPageDriver -> provideDaffContentHtmlPageDriver, daffContentPageResolver -> daffContentPageHtmlResolver, DaffContentPageFactory -> DaffContentHtmlPageFactory
* **design-examples, design, design-land:** If you're using the design examples in your app (you probably aren't) you should now import them from `@daffodil/design-examples`.
* **design:** refactor switch component ([#3818](https://github.com/graycoreio/daffodil/issues/3818))
* **driver:** 
* **design:** The 0 and 110 hues have been removed from the $daff-neutral palette.
* **external-router:** Drivers will now directly throw errors in response to platform responses where they wouldn't previously. Direct driver dependents should adjust driver calls to better handle these errors.
* **design:** Checkbox components have been moved to their own package and need to be imported from `@daffodil/design/checkbox`.
* **design:** Modal behavior now restricts to a single open modal at any time. When a new modal is opened, any previously open modal will be automatically closed. Previously, multiple modals could be stacked and displayed simultaneously.

### Features

* **auth:** add `withMagentoAuthApolloBearerToken` ([#4252](https://github.com/graycoreio/daffodil/issues/4252)) ([d9b76a9](https://github.com/graycoreio/daffodil/commit/d9b76a9b9d7879dee99142988177566862a5eb56))
* **content:** add iframe renderer ([36b0718](https://github.com/graycoreio/daffodil/commit/36b071818e9ba25e9c33dd55e2adeb7fc76fa2a1))
* **content:** add new daffContentPageSchemaResolver ([3b74199](https://github.com/graycoreio/daffodil/commit/3b74199e74236207b5ce181f3f427f2e38cb3f9a))
* **content:** add schema driver for magento ([198bef6](https://github.com/graycoreio/daffodil/commit/198bef64e0236bdb9a7fa4941b98fcaa3cc6fac4))
* **content:** add style generator utilities for content editing ([#4211](https://github.com/graycoreio/daffodil/issues/4211)) ([5649d7e](https://github.com/graycoreio/daffodil/commit/5649d7efbe40faa771af4a240237fdff98c2a77c))
* **content:** add visual ai content schema editor ([347b973](https://github.com/graycoreio/daffodil/commit/347b9739318780bb52053de698fbf534c30a6826))
* **content:** adjust renderer and css generation to properly use [@container](https://github.com/container) queries ([3549586](https://github.com/graycoreio/daffodil/commit/3549586a4eba87995fb0c9f2b97f52930b213e41))
* **content:** create provideDaffContentMagentoDriver ([f673816](https://github.com/graycoreio/daffodil/commit/f673816cce074a64fea3a6b4d97b970a809a92a8))
* **content:** create schema renderer ([8f18996](https://github.com/graycoreio/daffodil/commit/8f18996df09ba77f1cadf85c4994f79393d3dc20))
* **content:** expose DaffContentEditableRenderer as standalone component ([49bb0b9](https://github.com/graycoreio/daffodil/commit/49bb0b9009dd8f823910e69c1105aee0651a478d))
* **content:** expose providers for making components schema-renderable ([#4210](https://github.com/graycoreio/daffodil/issues/4210)) ([28b4210](https://github.com/graycoreio/daffodil/commit/28b42106146e4510553d8fb7d897f4db9a9f397b))
* **content:** introduce new page schema driver ([def075c](https://github.com/graycoreio/daffodil/commit/def075c8a9700ce32369bfb159e062c35419908a))
* **content:** introduce schema types ([#4209](https://github.com/graycoreio/daffodil/issues/4209)) ([47b792a](https://github.com/graycoreio/daffodil/commit/47b792a088674773eb4a90787273e6164b8c94ff))
* **content:** rename DaffContentPage to DaffContentHtmlPage ([72d3da0](https://github.com/graycoreio/daffodil/commit/72d3da0367ef0d4c3775457fdba53659ec8f8805))
* **content:** use iframe renderer inside editor ([370a2fb](https://github.com/graycoreio/daffodil/commit/370a2fbae9e26bf2a28bfd3bc2457f609ab96d5f))
* **core:** add factory providers to injection token factories ([#4217](https://github.com/graycoreio/daffodil/issues/4217)) ([1228a09](https://github.com/graycoreio/daffodil/commit/1228a099585e4363b856106f105f244f1218b483))
* **core:** add providers for apollo request handlers and headers ([#4218](https://github.com/graycoreio/daffodil/issues/4218)) ([b9c861d](https://github.com/graycoreio/daffodil/commit/b9c861da6cb40d06938f4dff1f968acffbd2de4e))
* **daffio:** add sponsors to home page ([#4194](https://github.com/graycoreio/daffodil/issues/4194)) ([a46aa91](https://github.com/graycoreio/daffodil/commit/a46aa91772fd29b9672b101667baf5972d0d8081))
* **daffio:** convert all modules to standalone ([#4215](https://github.com/graycoreio/daffodil/issues/4215)) ([99dc925](https://github.com/graycoreio/daffodil/commit/99dc925263e03df1212ce9e5623816dbf57530af))
* **daffio:** enforce home page commerce video to autoplay ([#4199](https://github.com/graycoreio/daffodil/issues/4199)) ([2860f45](https://github.com/graycoreio/daffodil/commit/2860f45c1234770fbe6c5278eb8570cc279389f6))
* **daffio:** remove `docs` from docs path token ([#4241](https://github.com/graycoreio/daffodil/issues/4241)) ([9088371](https://github.com/graycoreio/daffodil/commit/9088371c6542a74f9ec0712012477e35af2e6c34))
* **daffio:** update home hero title ([#4205](https://github.com/graycoreio/daffodil/issues/4205)) ([c3131bb](https://github.com/graycoreio/daffodil/commit/c3131bb33a2134cc2317fd341ec58f0759e8b162))
* **daffio:** update marketing pages ([#4198](https://github.com/graycoreio/daffodil/issues/4198)) ([1b0c038](https://github.com/graycoreio/daffodil/commit/1b0c03814ed38e6c8a4c1451fc7b38a26a1b3d54))
* **design-examples, design, design-land:** move design examples to `@daffodil/design-examples` package ([#4200](https://github.com/graycoreio/daffodil/issues/4200)) ([b24706b](https://github.com/graycoreio/daffodil/commit/b24706bdb9a66e3e6c987dcfdad8990a6e9e9f3d))
* **design-examples:** init new design-examples package ([#4197](https://github.com/graycoreio/daffodil/issues/4197)) ([2d782c7](https://github.com/graycoreio/daffodil/commit/2d782c74800357d6caf5543c1e985204646bbb0a))
* **design-examples:** remove test script ([#4206](https://github.com/graycoreio/daffodil/issues/4206)) ([5f3c233](https://github.com/graycoreio/daffodil/commit/5f3c2337c2c2d0f49e48a3b5a44e51d1f8fad072))
* **design:** `daff-get-font-colors` can retrieve theme font colors ([#4141](https://github.com/graycoreio/daffodil/issues/4141)) ([89c9c9b](https://github.com/graycoreio/daffodil/commit/89c9c9b49bcab7167b2183357d0984b7e6e71082))
* **design:** allow modal's vertical position to be configurable ([#4162](https://github.com/graycoreio/daffodil/issues/4162)) ([c5c08d3](https://github.com/graycoreio/daffodil/commit/c5c08d357a1a279f8a52b3955c3e3da7d3a64517))
* **design:** automatically add copy button to article code blocks ([#4176](https://github.com/graycoreio/daffodil/issues/4176)) ([cedb550](https://github.com/graycoreio/daffodil/commit/cedb5500c9682bd525a471240e4415687f604b36))
* **design:** create `daff-create-theme` function ([#4132](https://github.com/graycoreio/daffodil/issues/4132)) ([263d13d](https://github.com/graycoreio/daffodil/commit/263d13d41d4e8ca29bf28038bd541f207c743033))
* **design:** create `daff-get-font-colors` function ([#4118](https://github.com/graycoreio/daffodil/issues/4118)) ([b6aca33](https://github.com/graycoreio/daffodil/commit/b6aca33f54a283c54ef202d6a7e90924f1a6cd0d))
* **design:** create `DaffDisableableDirective` ([#3753](https://github.com/graycoreio/daffodil/issues/3753)) ([d5c9fb7](https://github.com/graycoreio/daffodil/commit/d5c9fb7fd2308999db206922babd9e2953794256))
* **design:** create `DaffOrientableDirective` and update implementations in design components ([#4133](https://github.com/graycoreio/daffodil/issues/4133)) ([e8c217e](https://github.com/graycoreio/daffodil/commit/e8c217e14b56e907b37e6dc6f7030a76fa96739c))
* **design:** deprecate `DaffPrefixSuffixModule` and add component array option ([#4273](https://github.com/graycoreio/daffodil/issues/4273)) ([7e79665](https://github.com/graycoreio/daffodil/commit/7e79665aeed39446273369fb49139b1dc550cd24))
* **design:** move hint, error message, and label to a `@daffodil/design/form` package ([#4230](https://github.com/graycoreio/daffodil/issues/4230)) ([ebfe38f](https://github.com/graycoreio/daffodil/commit/ebfe38fd8303d01f1ca3086496535f15a732d282))
* **design:** move host decorators to host properties in core components ([#4272](https://github.com/graycoreio/daffodil/issues/4272)) ([69fbc83](https://github.com/graycoreio/daffodil/commit/69fbc83cc030cd3b643e6256115f0a6f76318622))
* **design:** only allow one modal to be open at a time ([#4110](https://github.com/graycoreio/daffodil/issues/4110)) ([68c36e5](https://github.com/graycoreio/daffodil/commit/68c36e5309f1cd7c43815b2dc8149a7930617d78))
* **design:** refactor switch component ([#3818](https://github.com/graycoreio/daffodil/issues/3818)) ([5282b3e](https://github.com/graycoreio/daffodil/commit/5282b3ef52d4e91d06434743e66ad4e127af489b))
* **design:** remove `DaffNotificationSubtitleDirective` ([#4271](https://github.com/graycoreio/daffodil/issues/4271)) ([77403f7](https://github.com/graycoreio/daffodil/commit/77403f79da8ae1e123f7cc6f658f9f6b40426ba2))
* **design:** remove `DaffRaisedCardComponent` ([#4271](https://github.com/graycoreio/daffodil/issues/4271)) ([b220165](https://github.com/graycoreio/daffodil/commit/b2201654a1c2c2c4339fe60a03a4a089cca1365d))
* **design:** remove `DaffSidebarHeaderActionDirective` ([#4271](https://github.com/graycoreio/daffodil/issues/4271)) ([a966178](https://github.com/graycoreio/daffodil/commit/a96617893b5976818aeac5280491e4fe78a77c26))
* **design:** remove 0 and 110 from neutral palette ([#3761](https://github.com/graycoreio/daffodil/issues/3761)) ([b08cc48](https://github.com/graycoreio/daffodil/commit/b08cc48e289b89371c97740e5ea4ca3ddfe7d028))
* **design:** shard and convert checkbox components to standalone ([#4127](https://github.com/graycoreio/daffodil/issues/4127)) ([e7fc3bd](https://github.com/graycoreio/daffodil/commit/e7fc3bd30ca3f33f31694c4e74c2f0facd3939c8))
* **design:** update `daff-text-contrast` function ([#4122](https://github.com/graycoreio/daffodil/issues/4122)) ([4559ebd](https://github.com/graycoreio/daffodil/commit/4559ebd9599dfd03cd6f5167c5d6fbaf3169f80a))
* **design:** update `DaffImageComponent` to use `NgOptimizedImage` ([#4134](https://github.com/graycoreio/daffodil/issues/4134)) ([9478a45](https://github.com/graycoreio/daffodil/commit/9478a45bd27109a19446eb274ca81a95b4478747))
* **dgeni,docs:** add `package` to package guide ([#4179](https://github.com/graycoreio/daffodil/issues/4179)) ([ac63184](https://github.com/graycoreio/daffodil/commit/ac63184721a671512bba9e7e0908ab016dcf0e6f))
* **docs,daffio:** use role labels in API tags ([#4244](https://github.com/graycoreio/daffodil/issues/4244)) ([39b82d4](https://github.com/graycoreio/daffodil/commit/39b82d422b132708bc20ec2667a09520f53c3053))
* **docs,dgeni,daffio:** add edit button to docs pages ([#4137](https://github.com/graycoreio/daffodil/issues/4137)) ([4b5be2d](https://github.com/graycoreio/daffodil/commit/4b5be2d11798cc556a9901af376f08e82270371f))
* **docs,dgeni:** add `package` to API docs ([#4178](https://github.com/graycoreio/daffodil/issues/4178)) ([933b6c9](https://github.com/graycoreio/daffodil/commit/933b6c938f65e13b91d4337d2e1b44ba6c4ad723))
* **docs,dgeni:** set root package guides title to overview ([#4181](https://github.com/graycoreio/daffodil/issues/4181)) ([3339515](https://github.com/graycoreio/daffodil/commit/33395157c9028b4c0d1e8cbe2e043b12afeb4079))
* **docs:** add color palette component ([#4238](https://github.com/graycoreio/daffodil/issues/4238)) ([22b4938](https://github.com/graycoreio/daffodil/commit/22b4938ab047479b63c72e4fdbf490924dc9fbc7))
* **driver,builders:** generate new possible types ([#4216](https://github.com/graycoreio/daffodil/issues/4216)) ([8efbe50](https://github.com/graycoreio/daffodil/commit/8efbe509c54fb807406adc00ade7c60ed3603272))
* **driver:** add magento cache feature providers ([#4222](https://github.com/graycoreio/daffodil/issues/4222)) ([6781768](https://github.com/graycoreio/daffodil/commit/6781768d41661bfdc08813a922e2a01e91fbdd22))
* **driver:** add magento driver features ([#4224](https://github.com/graycoreio/daffodil/issues/4224)) ([dd8cb5b](https://github.com/graycoreio/daffodil/commit/dd8cb5b653ea30f7af490ec671a3d38fef59f5fb))
* **driver:** add routable objects system for in-memory drivers ([#4144](https://github.com/graycoreio/daffodil/issues/4144)) ([c212f46](https://github.com/graycoreio/daffodil/commit/c212f46ea991e4de9b4af0119d1f3f7f4a098b6b))
* **driver:** prefix shopify generated types ([#4175](https://github.com/graycoreio/daffodil/issues/4175)) ([6faa41f](https://github.com/graycoreio/daffodil/commit/6faa41f3bfb6ffc753a4faf6131da51522b3ac02))
* **driver:** remove `DaffDriverMagentoModule` ([#4271](https://github.com/graycoreio/daffodil/issues/4271)) ([d58a932](https://github.com/graycoreio/daffodil/commit/d58a932107d1def0fecd020636e5449593848b5e))
* **external-router:** remove unnecessary `processErrors` function ([#4117](https://github.com/graycoreio/daffodil/issues/4117)) ([5bb0976](https://github.com/graycoreio/daffodil/commit/5bb0976ba63553964afc8403e2d64b9e2ee3d37e))
* hoist module disable into controllers ([#4261](https://github.com/graycoreio/daffodil/issues/4261)) ([29521ad](https://github.com/graycoreio/daffodil/commit/29521ad52e1f84a5e6340ababdc22cc179fe2782))
* **plugins/magento/cms-ai-builder:** add new iframe rendering pipeline ([a6fc724](https://github.com/graycoreio/daffodil/commit/a6fc7249a65252699126327945bc87bedec1a601))
* **plugins/magento/cms-ai-builder:** classify known exceptions ([#4261](https://github.com/graycoreio/daffodil/issues/4261)) ([a91a033](https://github.com/graycoreio/daffodil/commit/a91a033475b42869e59b93e6e109d64fed3aa412))
* **plugins/magento/cms-ai-builder:** init package ([7fba53a](https://github.com/graycoreio/daffodil/commit/7fba53a6b17a347be05a6240a44764d00e76b86b))
* **plugins/magento/cms-ai-builder:** iron out patch type ([a87cae7](https://github.com/graycoreio/daffodil/commit/a87cae74eb186da6ebe38544203f328495d33f52))
* **plugins/magento/cms-ai-builder:** normalize json for php handling of empty assoc arrays ([584997c](https://github.com/graycoreio/daffodil/commit/584997ce0abb28a00901a9318e9691fc463031ca))
* **plugins/magento/cms-ai-builder:** prevent bad interpretations of components ([7beebc4](https://github.com/graycoreio/daffodil/commit/7beebc49cb87fade74c1110a8944ae82c80f166f))
* **plugins/magento/cms-ai-builder:** rebuild editor with DaffArticleComponent ([3fa7ed0](https://github.com/graycoreio/daffodil/commit/3fa7ed053920cbb75efe59ac46f7a5cc20e0301c))
* **plugins/magento/cms-ai-builder:** standardize llm call/response format ([31d5046](https://github.com/graycoreio/daffodil/commit/31d5046a1f8e566d61c34df41ec119b49947f2e9))
* **plugins/magento/cms-ai-builder:** update editor version ([960cb43](https://github.com/graycoreio/daffodil/commit/960cb4375e53aa96f8e4b8a34f2840482bd7fc2c))
* **plugins/magento/cms-ai-builder:** use EntityManager APIs for getting/saving page data. ([d6edd88](https://github.com/graycoreio/daffodil/commit/d6edd881a0cc9a6f226e399fb1647f97ecaa9c2d))
* **plugins/magento/cms-ai-builder:** use new renderer in admin panel ([#4247](https://github.com/graycoreio/daffodil/issues/4247)) ([0f3df47](https://github.com/graycoreio/daffodil/commit/0f3df47d8be5c813c7dea0e6eea60bcabd27afdc))
* **plugins/magento/cms-ai-daff-components:** add all compatible @daffodil/design components ([1a2d0b3](https://github.com/graycoreio/daffodil/commit/1a2d0b3aa58c201eacefb106330438771466d2a7))
* **plugins/magento/cms-ai-daff-components:** add support for daff-article ([b6a4fac](https://github.com/graycoreio/daffodil/commit/b6a4facfaddcce82a0e3584df71f02b9c8555d3c))
* **plugins/magento/cms-ai-daff-components:** extract all daffodil specific features to separate package ([ab334b3](https://github.com/graycoreio/daffodil/commit/ab334b38119babd47437ec808102164acab09eef))
* **plugins/magento/cms-ai-daff-components:** init new package ([b488193](https://github.com/graycoreio/daffodil/commit/b488193ba8d756faf6719e84073e95bac4bce87a))
* **product:** register products as routable objects for automatic URL resolution ([#4146](https://github.com/graycoreio/daffodil/issues/4146)) ([aebfad1](https://github.com/graycoreio/daffodil/commit/aebfad10ea5de1a5bfca11df2b46e181f04edba0))
* **storefront-examples:** init new storefront-examples package ([#4207](https://github.com/graycoreio/daffodil/issues/4207)) ([8e6b8c7](https://github.com/graycoreio/daffodil/commit/8e6b8c7a87d3a6197b47f849a845ead466f197c1))
* **storefront:** create carousel component ([#4204](https://github.com/graycoreio/daffodil/issues/4204)) ([e158195](https://github.com/graycoreio/daffodil/commit/e158195bddc2c78d3903fa580beb2996b4bb92a1))
* **storefront:** init new storefront package ([#4173](https://github.com/graycoreio/daffodil/issues/4173)) ([7322867](https://github.com/graycoreio/daffodil/commit/732286712f422736b683d9f4f294025128ba2a1a))
* **storefront:** update storefront configs ([#4203](https://github.com/graycoreio/daffodil/issues/4203)) ([337d946](https://github.com/graycoreio/daffodil/commit/337d946ef05700765bd73b4a4e11a6b740dedfe1))
* **tools:** add SassDocs tool for documentation generation ([#3841](https://github.com/graycoreio/daffodil/issues/3841)) ([a6f30b8](https://github.com/graycoreio/daffodil/commit/a6f30b827a3ada35129966f1282df6a95794abf3))


### Bug Fixes

* **authorizenet:** default state config not provided ([#4220](https://github.com/graycoreio/daffodil/issues/4220)) ([7b81ca8](https://github.com/graycoreio/daffodil/commit/7b81ca8deefface695aec73b22473084223923c2))
* **commerce:** add missing provideDaffExternalRouterInMemoryDriver ([1c0ea4b](https://github.com/graycoreio/daffodil/commit/1c0ea4b47afe872949e1d0a25fb31b81e560360c))
* **daffio:** edit button initially doesn't appear on usage tab ([#4183](https://github.com/graycoreio/daffodil/issues/4183)) ([a3e036b](https://github.com/graycoreio/daffodil/commit/a3e036be236c401d05e997031db7d8f2091dc49c))
* **daffio:** fix wrong link in getting started doc ([#4231](https://github.com/graycoreio/daffodil/issues/4231)) ([6ba3940](https://github.com/graycoreio/daffodil/commit/6ba39404fd9033792f674cda55be34523cb2cf2d))
* **design:** correct `DaffOrientableDirective` orientation input handling ([#4169](https://github.com/graycoreio/daffodil/issues/4169)) ([ac89962](https://github.com/graycoreio/daffodil/commit/ac89962eb9c576cbffa8458e872942328bcace75))
* **design:** correct `DaffStatusableDirective` default status logic ([#4171](https://github.com/graycoreio/daffodil/issues/4171)) ([319041f](https://github.com/graycoreio/daffodil/commit/319041f23d92584e41ee380db48278e2c8938e86))
* **design:** fix duplicate track keys in DaffTreeComponent by using unique node IDs ([#4115](https://github.com/graycoreio/daffodil/issues/4115)) ([2f849d7](https://github.com/graycoreio/daffodil/commit/2f849d7417e574ebe2a2c177411b51234a0ee9a5))
* **design:** fix form imports in form field ([#4236](https://github.com/graycoreio/daffodil/issues/4236)) ([06061ab](https://github.com/graycoreio/daffodil/commit/06061ab1f3a0fbc9688ccab882f89a5b0c7844a7))
* **design:** fix orientable class names in notification component ([#4229](https://github.com/graycoreio/daffodil/issues/4229)) ([6f68bb9](https://github.com/graycoreio/daffodil/commit/6f68bb982a24739cdc7940e9c6cfe1cae5c545d5))
* **design:** paginator is hydration incompatible ([#4142](https://github.com/graycoreio/daffodil/issues/4142)) ([85c449d](https://github.com/graycoreio/daffodil/commit/85c449ddabeef8087da5e5b97486984a9b63ee80))
* **dgeni:** design search index not generated or uploaded ([#4136](https://github.com/graycoreio/daffodil/issues/4136)) ([ce18be2](https://github.com/graycoreio/daffodil/commit/ce18be2dfa43b08eb0597104769beb612ba74e0b))
* magento drivers not querying key fields ([#4223](https://github.com/graycoreio/daffodil/issues/4223)) ([c3bfccf](https://github.com/graycoreio/daffodil/commit/c3bfccfddb6901af46d13916f682fe736b4077d0))
* **plugins/magento/cms-ai-builder:** correct ContentSchema compilation error on 8.4 ([#4261](https://github.com/graycoreio/daffodil/issues/4261)) ([2c3da47](https://github.com/graycoreio/daffodil/commit/2c3da47e02e77599ccd4e36ab8c4c3384eb68ea5))
* **plugins/magento/cms-ai-daff-components:** drastically simplify prompt ([f0fa760](https://github.com/graycoreio/daffodil/commit/f0fa760c93510aabbd8b3ce8393eb82458dbe962))
* **plugins/magento/cms-ai-daff-components:** fix bad namespace ([875e778](https://github.com/graycoreio/daffodil/commit/875e778ee871c54b7e74172b8a95e842e8aa5c10))
* **plugins/magento/cms-ai-daff-components:** remove unused article input schema ([8bb64ff](https://github.com/graycoreio/daffodil/commit/8bb64ff8afd455493c95c5ae5bc96bfc8334ae22))
* prevent errors when components are empty ([261f2e3](https://github.com/graycoreio/daffodil/commit/261f2e3b5d297bb8bf8772dc4e06a81eaa3f21e2))
* **product:** getByUrl on DaffInMemoryProductService works with urls ([#4147](https://github.com/graycoreio/daffodil/issues/4147)) ([a29cdab](https://github.com/graycoreio/daffodil/commit/a29cdab625a7f2a08c4349ffda0c3ec6ff76270c))
* tests fail on node 22 ([#4188](https://github.com/graycoreio/daffodil/issues/4188)) ([92fb925](https://github.com/graycoreio/daffodil/commit/92fb9253545a9defbaa4f98e2f639442cca99bb0))
* **tools-dgeni:** form API symbols not being generated ([#4245](https://github.com/graycoreio/daffodil/issues/4245)) ([45a9359](https://github.com/graycoreio/daffodil/commit/45a9359833635f40537cf99f1b59ef30e4378d1f))

## [0.90.0](https://github.com/graycoreio/daffodil/compare/v0.89.0...v0.90.0) (2025-10-07)


### ⚠ BREAKING CHANGES

* **design:** Radio components have been moved to their own package and need to be imported from `@daffodil/design/radio`.

### Features

* **commerce:** rework and add navigation support ([a63497a](https://github.com/graycoreio/daffodil/commit/a63497ae5f6b1f3366071706e47739bc0ddce250))
* **core:** add `DaffMemoryStorageService` to public api [#4054](https://github.com/graycoreio/daffodil/issues/4054) ([bc01144](https://github.com/graycoreio/daffodil/commit/bc01144ba0ca5a9ecfb9c7cfb1feffa2703077f9))
* **deps:** pin rxjs to ^v7.0.0 ([#4100](https://github.com/graycoreio/daffodil/issues/4100)) ([f12a201](https://github.com/graycoreio/daffodil/commit/f12a20130aa51e8f03f91918e8d18e932c425f9c))
* **design:** create `daff-max-contrast` function ([#4081](https://github.com/graycoreio/daffodil/issues/4081)) ([7cc225a](https://github.com/graycoreio/daffodil/commit/7cc225a83a848ae073d6c084fc40a4ac2afff16e))
* **design:** create `DaffTagComponent` ([#4007](https://github.com/graycoreio/daffodil/issues/4007)) ([834ed92](https://github.com/graycoreio/daffodil/commit/834ed920737a35f22690ccde0452fb2e81b8ce40))
* **design:** shard and convert radio components to standalone ([#4069](https://github.com/graycoreio/daffodil/issues/4069)) ([d13ccee](https://github.com/graycoreio/daffodil/commit/d13ccee65154866ab9c3e08e31abe1588ee04337))
* **design:** update native and custom select arrow UI ([#4092](https://github.com/graycoreio/daffodil/issues/4092)) ([0ffcad6](https://github.com/graycoreio/daffodil/commit/0ffcad61ce67db11de7139f41337ed8cdd7afb3d))
* **dev-tools:** remove extraneous methods ([#4029](https://github.com/graycoreio/daffodil/issues/4029)) ([9fdfd32](https://github.com/graycoreio/daffodil/commit/9fdfd32ce042078902c229a6e5546e2d4604ead6))
* **driver:** allow shopify config as injection token ([#4041](https://github.com/graycoreio/daffodil/issues/4041)) ([0659522](https://github.com/graycoreio/daffodil/commit/0659522068087680d1bf16c15408a52899c8097a))
* **driver:** expose shopify route prefixes ([#4040](https://github.com/graycoreio/daffodil/issues/4040)) ([a51dbef](https://github.com/graycoreio/daffodil/commit/a51dbefb717343a8da4620c09f282819515e8072))
* **external-router:** add initial shopify driver ([#4043](https://github.com/graycoreio/daffodil/issues/4043)) ([c190e01](https://github.com/graycoreio/daffodil/commit/c190e01cb99d671402c739d55ba929c0f9339e5c))
* **navigation:** add provideDaffNavigationMagentoDriver ([#4028](https://github.com/graycoreio/daffodil/issues/4028)) ([93c2a5f](https://github.com/graycoreio/daffodil/commit/93c2a5f9164fa85829257435680ca9950dd0e76b))
* **navigation:** add shopify driver ([#4030](https://github.com/graycoreio/daffodil/issues/4030)) ([f70249e](https://github.com/graycoreio/daffodil/commit/f70249ef23d9d7868151ed9fe9383771b900e367))
* **navigation:** create provideDaffNavigationInMemoryDriver ([#4031](https://github.com/graycoreio/daffodil/issues/4031)) ([eed59d9](https://github.com/graycoreio/daffodil/commit/eed59d96126b28af17bb022c58e10d0c49982824))
* **product-configurable:** add magento driver extensions for variants ([#4051](https://github.com/graycoreio/daffodil/issues/4051)) ([e2d2e98](https://github.com/graycoreio/daffodil/commit/e2d2e98b0142d900175adf4b69b07bb53c9775b1))
* **product-configurable:** use child field of generic in selectors ([#4056](https://github.com/graycoreio/daffodil/issues/4056)) ([fae4b5d](https://github.com/graycoreio/daffodil/commit/fae4b5d167a35b6174acfeddd02f370ce5d1b9a1))
* **product:** use route prefixes to calculate shopify url ([#4042](https://github.com/graycoreio/daffodil/issues/4042)) ([2e060af](https://github.com/graycoreio/daffodil/commit/2e060afd0fba45725c87e28a40707ce37e0e73fd))


### Bug Fixes

* **analytics:** mark analytics/driver as a public package ([#4112](https://github.com/graycoreio/daffodil/issues/4112)) ([8775835](https://github.com/graycoreio/daffodil/commit/87758350c0fda447dcde9320a7eadf7f2e67b8b5))
* **design:** add blur event to select's button field ([#4077](https://github.com/graycoreio/daffodil/issues/4077)) ([6a0beb4](https://github.com/graycoreio/daffodil/commit/6a0beb4a0914380a7fad57da544c44677565010b))
* **design:** remove `ngControl.touched` from valid state in `DaffFormFieldState` ([#4078](https://github.com/graycoreio/daffodil/issues/4078)) ([15e6940](https://github.com/graycoreio/daffodil/commit/15e6940ecafffe93bcdc785aff0047ca624d980e))
* **design:** set cursor to not-allowed when select is disabled ([#4080](https://github.com/graycoreio/daffodil/issues/4080)) ([661f151](https://github.com/graycoreio/daffodil/commit/661f1513ed81d813f94dcaebded63bb9edfb3057))
* **dev-tools:** update discord url ([#4038](https://github.com/graycoreio/daffodil/issues/4038)) ([98b94db](https://github.com/graycoreio/daffodil/commit/98b94db71f5e1288322104419d4214ac97fe11ec))
* **navigation:** add store code to Magento navigation query ([#4032](https://github.com/graycoreio/daffodil/issues/4032)) ([20753b2](https://github.com/graycoreio/daffodil/commit/20753b2f6c59a8142edd017f12052d6c30c370c3))

## [0.89.0](https://github.com/graycoreio/daffodil/compare/v0.88.1...v0.89.0) (2025-09-29)


### ⚠ BREAKING CHANGES

* Angular has been upgraded to v20
* **design:** Form field components have been moved to its own package and need to be imported from `@daffodil/design/form-field`.
* **design:** `DaffNativeSelectComponent` has been moved to its own package and needs to be imported from `@daffodil/design/native-select`
* **design:** `daffMenuCreateOverlay` is no longer part of the public api.

### Features

* **cart:** deprecate `address_type` for `DaffCartAddress` ([#3969](https://github.com/graycoreio/daffodil/issues/3969)) ([04aba4b](https://github.com/graycoreio/daffodil/commit/04aba4b17966146ea0556c6bd9cefaebc846e48c))
* **core:** add new vercel image loader for dynamically resizing asse… ([#3946](https://github.com/graycoreio/daffodil/issues/3946)) ([cc76a5d](https://github.com/graycoreio/daffodil/commit/cc76a5dd33f5ce308a8f035e38fe2ba7393be574))
* **core:** export provideVercelImageLoader ([#3950](https://github.com/graycoreio/daffodil/issues/3950)) ([47caec9](https://github.com/graycoreio/daffodil/commit/47caec99c1c7b5d9cad538399f1ce03461241231))
* **daffio,branding:** update marketing home hero design ([#3967](https://github.com/graycoreio/daffodil/issues/3967)) ([9e65d46](https://github.com/graycoreio/daffodil/commit/9e65d4621610988b1c63895e224e32f76734af62))
* **daffio:** clean up API reference page UI ([#3942](https://github.com/graycoreio/daffodil/issues/3942)) ([ec10a52](https://github.com/graycoreio/daffodil/commit/ec10a52aad54c4899e75f4f0195060eaa5a16ae4))
* **daffio:** set widths on doc viewer grid content ([#3954](https://github.com/graycoreio/daffodil/issues/3954)) ([d7129a2](https://github.com/graycoreio/daffodil/commit/d7129a26dfd2833176553721fbd79396ef728916))
* **design:** create native select component ([#3383](https://github.com/graycoreio/daffodil/issues/3383)) ([fae81df](https://github.com/graycoreio/daffodil/commit/fae81dfa564e80c248d31d5a69fc3e402ef57233))
* **design:** shard and convert `DaffNativeSelectComponent` to standalone ([#4005](https://github.com/graycoreio/daffodil/issues/4005)) ([7375abe](https://github.com/graycoreio/daffodil/commit/7375abea04d6accb49ad3c588a36c8600a4a21b5))
* **design:** shard form field component ([#4012](https://github.com/graycoreio/daffodil/issues/4012)) ([e3c2499](https://github.com/graycoreio/daffodil/commit/e3c2499c517d4907780d84a2b294e7414084660a))
* **design:** update article and headline styles ([#3955](https://github.com/graycoreio/daffodil/issues/3955)) ([741d9b1](https://github.com/graycoreio/daffodil/commit/741d9b1b494f4119b2803cf1daef21b327848bb3))
* **dev-tools:** add link to drivers guides ([d7f674b](https://github.com/graycoreio/daffodil/commit/d7f674b0558b5be1f4befd243ea5eae08322b16b))
* **dev-tools:** remove unused registerDriver function ([308eb0d](https://github.com/graycoreio/daffodil/commit/308eb0d96e340b1468f7c6a129a086ec588dc2d8))
* **dev-tools:** remove unused status on DaffDriverConfig ([cf1b9e8](https://github.com/graycoreio/daffodil/commit/cf1b9e8b0415d205736d1ace848efa45962151d3))
* **dev-tools:** rework driver configuration storage for persistent driver configurations ([fede6b7](https://github.com/graycoreio/daffodil/commit/fede6b7dc46431ca549f36b1e1a625e37357eae7))
* **dev-tools:** rework ui ([350560e](https://github.com/graycoreio/daffodil/commit/350560eff1b4bdaba20efdc0381e034d88dc3202))
* **dgeni:** skip private packages during docs generation ([c943c01](https://github.com/graycoreio/daffodil/commit/c943c0140849c01eddbd75d065dd8fb05b55dd4a))
* **docs-utils:** add doc model factories ([#3907](https://github.com/graycoreio/daffodil/issues/3907)) ([cfec8df](https://github.com/graycoreio/daffodil/commit/cfec8dfd05c959ef7aab463d7095a951d3277e82))
* **docs,dgeni,.daffio:** add anchors to API members ([#3965](https://github.com/graycoreio/daffodil/issues/3965)) ([2bd213b](https://github.com/graycoreio/daffodil/commit/2bd213bc066a3019a40b2f7b840bead08b99be49))
* **docs:** remove server routing causing 404 on homepage ([37a0d28](https://github.com/graycoreio/daffodil/commit/37a0d28859d7593ea2327f6fbecf3b033d3b8521))
* **driver:** deprecate provideShopifyApolloDriver in favor of provideShopifyDriver ([#3964](https://github.com/graycoreio/daffodil/issues/3964)) ([5b1d0d2](https://github.com/graycoreio/daffodil/commit/5b1d0d26db37483612c0f455689e4275a5ba2c08))
* **product:** create provideDaffProductShopifyDriver ([#3962](https://github.com/graycoreio/daffodil/issues/3962)) ([6be30b0](https://github.com/graycoreio/daffodil/commit/6be30b078df3950a435a3470e6f6ce63cffd9619))
* **shopify,product:** use named apollo client ([#3963](https://github.com/graycoreio/daffodil/issues/3963)) ([743910d](https://github.com/graycoreio/daffodil/commit/743910d2a2a8c2f9a20d32211982b0bcfe14fc9f))
* upgrade to Angular 20 ([#4013](https://github.com/graycoreio/daffodil/issues/4013)) ([9965d8e](https://github.com/graycoreio/daffodil/commit/9965d8e1e390faf3a4515de07821d9ed4b23025f))


### Bug Fixes

* **daffio,tools-dgeni:** stop @daffodil/docs clobbering dgeni output ([#3951](https://github.com/graycoreio/daffodil/issues/3951)) ([7ecbe2d](https://github.com/graycoreio/daffodil/commit/7ecbe2d0dd92656b082c9270f977b3e3c4885682))
* **daffio:** fix docs footer support link ([#3944](https://github.com/graycoreio/daffodil/issues/3944)) ([da04a04](https://github.com/graycoreio/daffodil/commit/da04a04e4415876efad9a2f727b8dfbb6a9bab8f))
* **daffio:** reconfigure how docs are loaded for ssr ([#3947](https://github.com/graycoreio/daffodil/issues/3947)) ([baa203a](https://github.com/graycoreio/daffodil/commit/baa203a3fe3364f06ad70e691b0657e5d49d930a))
* **dgeni:** API search index docs have extra content ([#4019](https://github.com/graycoreio/daffodil/issues/4019)) ([966fd04](https://github.com/graycoreio/daffodil/commit/966fd04a0889775ebcd70b8145a471bba8d70303))
* **dgeni:** API search indices don't get `id` set to `path` ([#3960](https://github.com/graycoreio/daffodil/issues/3960)) ([85d5234](https://github.com/graycoreio/daffodil/commit/85d5234f4091b45fd87e53dcbe7d70fdb7dc252d))
* **product:** correct getByUrl and get for shopify ([#3966](https://github.com/graycoreio/daffodil/issues/3966)) ([0b70a62](https://github.com/graycoreio/daffodil/commit/0b70a62dc8a6c598f963a42612e39535b9f24d1f))
* **product:** incorrect type in `MagentoProductAppliedFiltersTransformService` ([#4018](https://github.com/graycoreio/daffodil/issues/4018)) ([296c10c](https://github.com/graycoreio/daffodil/commit/296c10c8fb669dc56735ace2cba34b4272e25b5d))


### Code Refactoring

* **design:** remove `daffMenuCreateOverlay` from the public api ([#3997](https://github.com/graycoreio/daffodil/issues/3997)) ([8154e16](https://github.com/graycoreio/daffodil/commit/8154e16e8fda0bf3a4873c32ec35a324aa4122c1))

## [0.88.1](https://github.com/graycoreio/daffodil/compare/v0.88.0...v0.88.1) (2025-09-08)


### Bug Fixes

* **eslint:** remove unused eslint-plugin-prefer-arrow ([b9f7a48](https://github.com/graycoreio/daffodil/commit/b9f7a48b60ee233b77cda73bcfaf23e34739cbca))

## [0.88.0](https://github.com/graycoreio/daffodil/compare/v0.87.2...v0.88.0) (2025-09-05)


### ⚠ BREAKING CHANGES

* **router-store,core:** `daffRouterStateNavigatedClearErrorsReducer`, `daffRouterStateNavigatedClearEntityErrorsReducerFactory` are now a part of the `@daffodil/router-store` package.
* **driver:** Any code that relies on DaffInMemoryBackendDelegate must now also inject the DaffInMemoryDriverConfig as a constructor arg.
* **design:** add required and disabled property to form field ([#3782](https://github.com/graycoreio/daffodil/issues/3782))
* **design:** Label changed from using directive `<label daffProgressBarLabel>` to a `<daff-progress-bar-label>` element. Update existing usages accordingly.
* **design:** DaffSelectComponent is required to be used with the DaffFormFieldComponent.
* **design:** `DaffSidebarHeaderActionDirective` has been deprecated. Use `<daff-sidebar-header [dismissible]="true">` instead.
* **design:** `DaffNotificationSubtitleDirective` has been deprecated. Use `DaffNotificationMessageDirective` instead.
* **design:** `DaffRaisedCardComponent` has been deprecated in favor of the elevated property. Replace `<daff-raised-card>` with `<daff-card [elevated]="true">`.
* **tools-eslint:** upgrade to eslint 9 ([#3846](https://github.com/graycoreio/daffodil/issues/3846))
* **design:** allow individual list type imports and add a title directive for multiline lists ([#3832](https://github.com/graycoreio/daffodil/issues/3832))

### Features

* **cart:** reload cart when place order fails due to product OoS ([#3847](https://github.com/graycoreio/daffodil/issues/3847)) ([cc126d6](https://github.com/graycoreio/daffodil/commit/cc126d63ef55e141739c3e9cdd2f2d3336e48d19))
* **commerce:** add configurable Magento endpoint to demo ([8e62b7d](https://github.com/graycoreio/daffodil/commit/8e62b7d6d72d6224616bc3527fc386cbe3ac1191))
* **commerce:** add loading and error states to the product-list ([79b92be](https://github.com/graycoreio/daffodil/commit/79b92bec812913c4eaf4774d13418702be7003c7))
* **commerce:** add new @daffodil/commerce package! ([b6a83ee](https://github.com/graycoreio/daffodil/commit/b6a83eea7753bb4afb5160b26eea340d75509021))
* **commerce:** automatically bump version with release-please ([8790118](https://github.com/graycoreio/daffodil/commit/8790118c83479138bc92ff5a7cff99d75ac54d4b))
* **core:** add debounce decorator ([#3868](https://github.com/graycoreio/daffodil/issues/3868)) ([6f1ec7a](https://github.com/graycoreio/daffodil/commit/6f1ec7aff46f4fbc7aab7870f101e88d1686d705))
* **core:** widen constructable type slightly ([#3914](https://github.com/graycoreio/daffodil/issues/3914)) ([073e788](https://github.com/graycoreio/daffodil/commit/073e78850febb36ed0b4eab4575b1fc2c6e2ad02))
* **daffio:** activate ToC link when header is at the top ([#3896](https://github.com/graycoreio/daffodil/issues/3896)) ([35e3011](https://github.com/graycoreio/daffodil/commit/35e3011dc56db8c41899cfa28c418989a6c02340))
* **daffio:** add `[@debounce](https://github.com/debounce)` decorator to `DaffioDocsScrollToTopComponent` ([#3837](https://github.com/graycoreio/daffodil/issues/3837)) ([337bd20](https://github.com/graycoreio/daffodil/commit/337bd20a8d680330cff7e6e21de538c9ba767915))
* **daffio:** create and implement doc heading component ([#3897](https://github.com/graycoreio/daffodil/issues/3897)) ([1ea4162](https://github.com/graycoreio/daffodil/commit/1ea416294a8954f73c6d25911c6977a3a78a0e2d))
* **daffio:** update height and scroll style in table of contents ([#3920](https://github.com/graycoreio/daffodil/issues/3920)) ([17f2777](https://github.com/graycoreio/daffodil/commit/17f277795ca4c5fedf2bf8668d9ff534353c38b9))
* **daffio:** update parameters and method block style ([#3930](https://github.com/graycoreio/daffodil/issues/3930)) ([aee104c](https://github.com/graycoreio/daffodil/commit/aee104ca6dbc3b074f575d766a70813706a24f82))
* **design, daffio, demo:** replace deprecated typography variables with new ones ([#3917](https://github.com/graycoreio/daffodil/issues/3917)) ([8f7f2dc](https://github.com/graycoreio/daffodil/commit/8f7f2dc3fb0f14e15395deb26e89123c6d6ca3e8))
* **design:** add `elevated` property to card and deprecate `DaffRaisedCardComponent` ([#3882](https://github.com/graycoreio/daffodil/issues/3882)) ([ce78c47](https://github.com/graycoreio/daffodil/commit/ce78c477da42e8b02f642238e46167503e2d4a78))
* **design:** add accessibility features to text snippet component and update docs ([#3916](https://github.com/graycoreio/daffodil/issues/3916)) ([2da5b4f](https://github.com/graycoreio/daffodil/commit/2da5b4f35bdb92f0822f9b36b3ffeb84c4a8ef68))
* **design:** add required and disabled property to form field ([#3782](https://github.com/graycoreio/daffodil/issues/3782)) ([d99e1bd](https://github.com/graycoreio/daffodil/commit/d99e1bd12932daf9b867914d55c577137f6838f3))
* **design:** allow individual list type imports and add a title directive for multiline lists ([#3832](https://github.com/graycoreio/daffodil/issues/3832)) ([14adffd](https://github.com/graycoreio/daffodil/commit/14adffd5a5c6b394e066ff6bb7aca0e97e900ba4))
* **design:** create a DaffStickyTracker to track when an element is pinned ([#3785](https://github.com/graycoreio/daffodil/issues/3785)) ([e00f451](https://github.com/graycoreio/daffodil/commit/e00f4517c8c686e0f02888c6dd294055b500b991))
* **design:** deprecate `DaffNotificationSubtitleDirective` in favor of `DaffNotificationMessageDirective` ([#3883](https://github.com/graycoreio/daffodil/issues/3883)) ([ecf8e61](https://github.com/graycoreio/daffodil/commit/ecf8e618e4e789f98a48fab26f4f7df9e1bd2bcf))
* **design:** deprecate `DaffSidebarHeaderActionDirective` in favor of the `dismissible` property ([#3886](https://github.com/graycoreio/daffodil/issues/3886)) ([5c855c0](https://github.com/graycoreio/daffodil/commit/5c855c0558aefb0f506da989082a2e8d24d56595))
* **design:** remove open input from accordion item ([#3842](https://github.com/graycoreio/daffodil/issues/3842)) ([5542bd5](https://github.com/graycoreio/daffodil/commit/5542bd57730877c595e1dac45c3203dceee86a0f))
* **design:** remove usage of `@angular/animations` from `DaffSelectComponent` ([#3902](https://github.com/graycoreio/daffodil/issues/3902)) ([008e947](https://github.com/graycoreio/daffodil/commit/008e947ce60b76f3cca310470a2dbc7cd4181cb9))
* **design:** throw error when DaffFormFieldComponent is not used with DaffSelectComponent ([#3901](https://github.com/graycoreio/daffodil/issues/3901)) ([c823e15](https://github.com/graycoreio/daffodil/commit/c823e157a83047a0950f8afa05f23f60ac9b8476))
* **design:** update label support and accessibility features in the progress bar component ([#3905](https://github.com/graycoreio/daffodil/issues/3905)) ([ab5dc14](https://github.com/graycoreio/daffodil/commit/ab5dc1468994f05e344d33454ce56feb6609796d))
* **design:** update toast to use native CSS animations instead of `@angular/animations` ([#3843](https://github.com/graycoreio/daffodil/issues/3843)) ([de3c1b9](https://github.com/graycoreio/daffodil/commit/de3c1b9baffbde052495dda66da0d71ceea8be26))
* **dev-tools:** add new dev-tools package ([2f93d28](https://github.com/graycoreio/daffodil/commit/2f93d28f4fefadae01a2ed95ac3991ffddd01881))
* **dev-tools:** rework to make drivers more configurable ([e2e23b9](https://github.com/graycoreio/daffodil/commit/e2e23b93bd0ffb163597117cfe922cad0474852d))
* **docs,daffio:** add `path` to doc ([#3915](https://github.com/graycoreio/daffodil/issues/3915)) ([62748a6](https://github.com/graycoreio/daffodil/commit/62748a69c5a1d9a863c054069b17ca29a95e9a6a))
* **docs:** add docs package ([#3898](https://github.com/graycoreio/daffodil/issues/3898)) ([7518b6a](https://github.com/graycoreio/daffodil/commit/7518b6abfb7d2d398712b09339aed12e8a3e0c3d))
* **driver:** add provideMagentoDriver to replace DaffDriverMagentoModule ([90746ec](https://github.com/graycoreio/daffodil/commit/90746ecc03883490b9780dbf452e6fad427ff02b))
* **driver:** allow in-memory api to pass-through unhandled requests ([3dbb59e](https://github.com/graycoreio/daffodil/commit/3dbb59e6426c39ab831d60115fc574bce5907a1d))
* **driver:** allow magento endpoint to be computed via function or injection token ([3c10337](https://github.com/graycoreio/daffodil/commit/3c103373ef087f941ddc56355c7fe300fdfea86c))
* **driver:** introduce new provideDaffInMemoryDriver provider ([11edbbb](https://github.com/graycoreio/daffodil/commit/11edbbbd72c19bd36f7f6275ce2fd9fd954c6f39))
* **product:** add provideDaffProductInMemoryDriver provider ([6d617de](https://github.com/graycoreio/daffodil/commit/6d617def7c0750ff7f2d10273672782559ee213d))
* **product:** appropriately inject InMemoryBackendConfig ([853b10e](https://github.com/graycoreio/daffodil/commit/853b10ea4b05aeaad131d16abce102e55278b87d))
* **product:** replace package photography with assets.daff.io ([c2c2ac1](https://github.com/graycoreio/daffodil/commit/c2c2ac18f1922410031c5364a9dc9fee01bec72e))
* **router-store,core:** extract routing reducers to @daffodil/router-store ([a8ac4a4](https://github.com/graycoreio/daffodil/commit/a8ac4a482a93aec8542e1ec985d0cc197bac94e9))
* **tools-eslint:** add jasmine recommendations to jest config ([#3908](https://github.com/graycoreio/daffodil/issues/3908)) ([1bdb012](https://github.com/graycoreio/daffodil/commit/1bdb012e7c59d3a3594dd16c19e587e935e98a98))
* **tools-eslint:** upgrade to eslint 9 ([#3846](https://github.com/graycoreio/daffodil/issues/3846)) ([79b09aa](https://github.com/graycoreio/daffodil/commit/79b09aaf0fb791a19c0de9474c6da3129fedab47))


### Bug Fixes

* **cart:** adjust DaffInMemoryBackendCartRootService for DaffInMemoryBackendDelegate config usage ([101d66d](https://github.com/graycoreio/daffodil/commit/101d66d8394277784fbdc0dce88a334b546a5536))
* **core:** add missing enforce-unique package dependency ([bf01b71](https://github.com/graycoreio/daffodil/commit/bf01b7135ebb7affc539f4a3cb684f9b318f43d8))
* **daffio:** all outputs active in ToC ([#3889](https://github.com/graycoreio/daffodil/issues/3889)) ([7b415bb](https://github.com/graycoreio/daffodil/commit/7b415bb6d2f081b1b104ac564461692d122c8ffc))
* **daffio:** update docsPath to remove '../../' in dev environment configuration ([#3860](https://github.com/graycoreio/daffodil/issues/3860)) ([c0977c1](https://github.com/graycoreio/daffodil/commit/c0977c1ad9f42196efd4d57e2fd7708be84ad939))
* **design:** add deferred option to emitState method in the form field control ([#3923](https://github.com/graycoreio/daffodil/issues/3923)) ([66587e8](https://github.com/graycoreio/daffodil/commit/66587e8f8a11a9653cb51423b5d676442a9351a7))
* **design:** call CVA methods for selectOption in DaffSelectComponent ([#3900](https://github.com/graycoreio/daffodil/issues/3900)) ([1499a59](https://github.com/graycoreio/daffodil/commit/1499a59432b83929e83ccbcbd52981392058892a))
* **design:** replace `coerceBooleanProperty` with `booleanAttribute` for progress bar's indeterminate input transform ([#3887](https://github.com/graycoreio/daffodil/issues/3887)) ([b1042d1](https://github.com/graycoreio/daffodil/commit/b1042d112da6fda04b9a2fa44afff98a2c3783f3))
* **design:** update tsconfig with missing components ([#3848](https://github.com/graycoreio/daffodil/issues/3848)) ([311b032](https://github.com/graycoreio/daffodil/commit/311b0322c72ee5d3270f52d3b6d698b6f7832c4b))
* **dgeni:** API symbols are linked in html code blocks ([#3890](https://github.com/graycoreio/daffodil/issues/3890)) ([117d7c3](https://github.com/graycoreio/daffodil/commit/117d7c3ae012925e953abdf49f14bac5ef321ce9))
* **order:** prevent throw when the number of invoices and number of payments mismatch ([#3871](https://github.com/graycoreio/daffodil/issues/3871)) ([f1fd514](https://github.com/graycoreio/daffodil/commit/f1fd5142ed22ae93e4effb47f6f27fbc35cf3db5))

## [0.87.2](https://github.com/graycoreio/daffodil/compare/v0.87.1...v0.87.2) (2025-07-16)


### Features

* **category,product:** resolve entity with `route` query ([#3777](https://github.com/graycoreio/daffodil/issues/3777)) ([9324259](https://github.com/graycoreio/daffodil/commit/9324259031070ae0de2e378e2b865afcaf99bf75))
* **content:** add support for CMS pages ([#3835](https://github.com/graycoreio/daffodil/issues/3835)) ([f75a48f](https://github.com/graycoreio/daffodil/commit/f75a48f2f8fe029ad4e4d1aaabb2846528ec7f9f))

## [0.87.1](https://github.com/graycoreio/daffodil/compare/v0.87.0...v0.87.1) (2025-07-15)


### Features

* **core:** make `daffFilterArrayToDict` generic ([#3824](https://github.com/graycoreio/daffodil/issues/3824)) ([55ce87f](https://github.com/graycoreio/daffodil/commit/55ce87f0cd91b17b3433ad188caa0db6eabc77cd))
* **core:** strongly type extensions in factory partials ([#3828](https://github.com/graycoreio/daffodil/issues/3828)) ([e234000](https://github.com/graycoreio/daffodil/commit/e234000711ff622bef82b0a25569dc51bf372ec6))
* **customer-payment:** allow extensions to factory model ([#3829](https://github.com/graycoreio/daffodil/issues/3829)) ([767c83f](https://github.com/graycoreio/daffodil/commit/767c83f428eb0e36db7860276c5bf5225e448f50))
* **navigation:** move tree generation to mock constructor ([#3827](https://github.com/graycoreio/daffodil/issues/3827)) ([d5da624](https://github.com/graycoreio/daffodil/commit/d5da624874c4ed1c259ad18e4c721fd8cbca0b44))
* **navigation:** widen the magento transform type ([#3826](https://github.com/graycoreio/daffodil/issues/3826)) ([83e24d2](https://github.com/graycoreio/daffodil/commit/83e24d25816b78f2ab2944660b86df18e05ec2c8))
* **search-product:** return `DaffSearchProductResult` from state ([#3830](https://github.com/graycoreio/daffodil/issues/3830)) ([3b3a1b0](https://github.com/graycoreio/daffodil/commit/3b3a1b075ee96d0843581915829bc7560f299461))

## [0.87.0](https://github.com/graycoreio/daffodil/compare/v0.86.0...v0.87.0) (2025-07-10)


### ⚠ BREAKING CHANGES

* **design, daffio:** The `daff-illuminate` function has been deprecated and will be removed in version 0.90.0. Update usage of the function with the `light` and `dark` mixins.
* **design:** `DaffTextareaComponent` has been moved to its own package and needs to be imported from `@daffodil/design/textarea`.

### Features

* **cart:** widen cart total name type ([#3813](https://github.com/graycoreio/daffodil/issues/3813)) ([09f275b](https://github.com/graycoreio/daffodil/commit/09f275b7c7bb28a29c25f9a105a044daaca2206e))
* **core:** add `HTML` type ([#3778](https://github.com/graycoreio/daffodil/issues/3778)) ([fb4844d](https://github.com/graycoreio/daffodil/commit/fb4844d1e24289e9ff588cf83a2bc602c0baa647))
* **core:** add graphql validator type and helper ([#3781](https://github.com/graycoreio/daffodil/issues/3781)) ([5ad2e0e](https://github.com/graycoreio/daffodil/commit/5ad2e0e54778f65af38f4433dfba43049758f536))
* **daffio:** move scroll to top button to table of contents ([#3801](https://github.com/graycoreio/daffodil/issues/3801)) ([e954a1d](https://github.com/graycoreio/daffodil/commit/e954a1dd738a29983b0c7afbb9489f245a3db3c5))
* **daffio:** render ToC from page contents ([#3637](https://github.com/graycoreio/daffodil/issues/3637)) ([4602e2a](https://github.com/graycoreio/daffodil/commit/4602e2aba414c0b274f6f0727e2b03fa842fabff))
* **design, daffio:** deprecate `daff-illuminate` function and replace usage with light and dark mixins ([#3815](https://github.com/graycoreio/daffodil/issues/3815)) ([30733b4](https://github.com/graycoreio/daffodil/commit/30733b4188fd4b8d8d7046bc757e640e981aa486))
* **design:** add `defaultStatus` as a property in DaffStatusableDirective ([#3788](https://github.com/graycoreio/daffodil/issues/3788)) ([9ad3c35](https://github.com/graycoreio/daffodil/commit/9ad3c353ba6e5076f2447f55e1bd9ea16427dc03))
* **design:** add `info` as a status option in DaffNotificationComponent ([#3787](https://github.com/graycoreio/daffodil/issues/3787)) ([2d73e2d](https://github.com/graycoreio/daffodil/commit/2d73e2dcc2afe16346769a2204203cc9d457904f))
* **design:** add accessibility considerations to `DaffTextareaComponent` ([#3780](https://github.com/graycoreio/daffodil/issues/3780)) ([c30b308](https://github.com/graycoreio/daffodil/commit/c30b3081c8f61a0048cb6c34a8ad2256e3fdcb9e))
* **design:** add array imports for each button type and update docs ([#3820](https://github.com/graycoreio/daffodil/issues/3820)) ([1f62c72](https://github.com/graycoreio/daffodil/commit/1f62c7236c27f90e3113497a469d01b007c2422e))
* **design:** clean up article styles ([#3786](https://github.com/graycoreio/daffodil/issues/3786)) ([fa1df00](https://github.com/graycoreio/daffodil/commit/fa1df00a3508637738c7faf0e3e8f509b121a85e))
* **design:** create `DaffTextareaComponent` ([#3382](https://github.com/graycoreio/daffodil/issues/3382)) ([7d15a3f](https://github.com/graycoreio/daffodil/commit/7d15a3f2e87586a21337760106e014ac884d7a98))
* **design:** create select component ([#2458](https://github.com/graycoreio/daffodil/issues/2458)) ([d6d2fb3](https://github.com/graycoreio/daffodil/commit/d6d2fb3cc3b019d56de416c09c63e4bfc89d2b78))
* **design:** only show console warnings in dev mode for design components ([#3816](https://github.com/graycoreio/daffodil/issues/3816)) ([b19d4fa](https://github.com/graycoreio/daffodil/commit/b19d4faa21e9bdf48d196fa240f1243da6a16a09))
* **design:** remove extra text-truncate style in button ([#3774](https://github.com/graycoreio/daffodil/issues/3774)) ([7d2ff57](https://github.com/graycoreio/daffodil/commit/7d2ff57d517dd54b2ee670671100ef669cc47ddc))
* **design:** shard `DaffTextareaComponent` ([#3789](https://github.com/graycoreio/daffodil/issues/3789)) ([404e5b2](https://github.com/graycoreio/daffodil/commit/404e5b28420c7a7b558e0cae4b18dccedc757608))
* **design:** throw an error if the `DaffInputComponent` is not used with the `DaffFormFieldComponent` ([#3779](https://github.com/graycoreio/daffodil/issues/3779)) ([200dfcf](https://github.com/graycoreio/daffodil/commit/200dfcf29fa84dcf93093536c8183ad205adfb2e))
* **design:** update form field UI to support actions and add fluid appearance ([#3773](https://github.com/graycoreio/daffodil/issues/3773)) ([2283bba](https://github.com/graycoreio/daffodil/commit/2283bbabc3dc5ae191bd078fcb7c235fe6e04460))
* **design:** update modal styles so a custom width can be set on the attached modal content component ([#3798](https://github.com/graycoreio/daffodil/issues/3798)) ([69283f8](https://github.com/graycoreio/daffodil/commit/69283f8ad5ba01bc9582c7f98bbac9b9e13479f5))
* **dgeni:** generate search index ([#3809](https://github.com/graycoreio/daffodil/issues/3809)) ([a512232](https://github.com/graycoreio/daffodil/commit/a5122320df148635dc185ce41d2c52bc0d7fe4e0))
* **dgeni:** include tools in package guide generation ([#3792](https://github.com/graycoreio/daffodil/issues/3792)) ([22bea32](https://github.com/graycoreio/daffodil/commit/22bea32f55b13663de48f578774fb720eabc67ca))
* **order:** support extra transforms in magento driver ([#3814](https://github.com/graycoreio/daffodil/issues/3814)) ([7ba0b0c](https://github.com/graycoreio/daffodil/commit/7ba0b0c47d6d594b27ba91cef41318a407c72c59))


### Bug Fixes

* **daffio:** outputs ToC label ([#3791](https://github.com/graycoreio/daffodil/issues/3791)) ([649a429](https://github.com/graycoreio/daffodil/commit/649a4294e195908cf44125ddc4aeebd300736e1e))
* **design:** fix input id not updating when form field's id changes ([#3784](https://github.com/graycoreio/daffodil/issues/3784)) ([9a8d19c](https://github.com/graycoreio/daffodil/commit/9a8d19c9f20365de30e218358f3bd9660fcf2de4))
* **design:** return focus to activator after modal is closed ([#3741](https://github.com/graycoreio/daffodil/issues/3741)) ([b2f71bb](https://github.com/graycoreio/daffodil/commit/b2f71bbae5a7d65fb74bf2e86b0bf6721ea584d4))

## [0.86.0](https://github.com/graycoreio/daffodil/compare/v0.85.0...v0.86.0) (2025-06-09)


### ⚠ BREAKING CHANGES

* **design:** The `loading` property and its associated UI has been removed because design components should not have state management UI. This will eventually be handled by an ecommerce design package.
* **analytics:** The package `@daffodil/analytics-provider-data-layer` no longer exists. Users of `@daffodil/analytics-provider-data-layer` package must change their imports to `@daffodil/analytics/driver/data-layer`.
* **design:** `DaffSkeletonable` has been removed from the public api
* **design:** move toast position configuration to `provideDaffToast` provider ([#3732](https://github.com/graycoreio/daffodil/issues/3732))
* **analytics-provider-data-layer:** daff prefix types, classes, and interfaces ([#3745](https://github.com/graycoreio/daffodil/issues/3745))

### Features

* **analytics-provider-data-layer:** daff prefix types, classes, and interfaces ([#3745](https://github.com/graycoreio/daffodil/issues/3745)) ([a85cbdc](https://github.com/graycoreio/daffodil/commit/a85cbdc3c02da67da283b37c869853fba811ff79))
* **analytics:** move `@daffodil/analytics-provider-data-layer` to `@daffodil/analytics` ([#3747](https://github.com/graycoreio/daffodil/issues/3747)) ([9ddc312](https://github.com/graycoreio/daffodil/commit/9ddc31204d1ae20fc7abd05926ba79f6c9a3918d))
* **daffio:** update component themes to use new theming functions ([#3762](https://github.com/graycoreio/daffodil/issues/3762)) ([4ee576c](https://github.com/graycoreio/daffodil/commit/4ee576c1aa12f9c174fce5d72655b6d843bafa3c))
* **daffio:** update subfooter button colors ([#3757](https://github.com/graycoreio/daffodil/issues/3757)) ([5162da0](https://github.com/graycoreio/daffodil/commit/5162da0fb8e6010a23ecd9db2d60ae6396ac2a98))
* **design:** move toast position configuration to `provideDaffToast` provider ([#3732](https://github.com/graycoreio/daffodil/issues/3732)) ([4933390](https://github.com/graycoreio/daffodil/commit/4933390936a21641e5f7cdc7b1610c4d0881e7b5))
* **design:** remove loading property from the button components ([#3769](https://github.com/graycoreio/daffodil/issues/3769)) ([b2d4cf0](https://github.com/graycoreio/daffodil/commit/b2d4cf016edf76c8fe39925368135dbfe1383cdb))
* **design:** remove unnecessary `DaffSkeletonable` interface and update `skeleton-screen` mixin style ([#3754](https://github.com/graycoreio/daffodil/issues/3754)) ([aaf2ce1](https://github.com/graycoreio/daffodil/commit/aaf2ce1f7bb47f3408d112749676b4c6a02fe691))
* **design:** update form field label implementation and add accessibility features ([#3749](https://github.com/graycoreio/daffodil/issues/3749)) ([7e50772](https://github.com/graycoreio/daffodil/commit/7e50772d6c0082f4a861f6fe8bfaabf303622b33))
* **product-composite:** add extension points for magento item and option ([#3759](https://github.com/graycoreio/daffodil/issues/3759)) ([25c088c](https://github.com/graycoreio/daffodil/commit/25c088c5f1c7dfe766124ad0fd805cca07182557))


### Bug Fixes

* **design:** fix sass breaking changes in design components ([#3755](https://github.com/graycoreio/daffodil/issues/3755)) ([739172c](https://github.com/graycoreio/daffodil/commit/739172ce3130ed9e6462f3996dab0a9a9f4257c4))
* **design:** set `defaultAlignment` as the `textAlignment` value ([#3767](https://github.com/graycoreio/daffodil/issues/3767)) ([c7c58ff](https://github.com/graycoreio/daffodil/commit/c7c58ff038a121e9218f5a83afdca4db8bc9c2f9))
* **dgeni:** hoisted host directive fields are not typed correctly ([#3743](https://github.com/graycoreio/daffodil/issues/3743)) ([54bd812](https://github.com/graycoreio/daffodil/commit/54bd81243d51a823b671fe6adae8dca07fd4d8ae))
* **dgeni:** regex matching on windows ([#3738](https://github.com/graycoreio/daffodil/issues/3738)) ([5dd90c6](https://github.com/graycoreio/daffodil/commit/5dd90c62a65e714857bebf496d50aabda8cfd727))

## [0.85.0](https://github.com/graycoreio/daffodil/compare/v0.84.0...v0.85.0) (2025-05-20)


### ⚠ BREAKING CHANGES

* **design:** `DaffInputComponent` has been moved to its own package and needs to be imported from `@daffodil/design/input`.
* **design:** `DaffQuantityFieldComponent` has been moved to its own package and needs to be imported from `@daffodil/design/quantity-field`

### Features

* **daffio:** implement transfer state for asset fetching ([#3718](https://github.com/graycoreio/daffodil/issues/3718)) ([b6d9a81](https://github.com/graycoreio/daffodil/commit/b6d9a818c21b1969f1b315d7091c157a0e1a6ea1))
* **daffio:** prerender docs and content routes ([#3720](https://github.com/graycoreio/daffodil/issues/3720)) ([1a6ca77](https://github.com/graycoreio/daffodil/commit/1a6ca779956a6058f5b649fc7d600656842f5b0c))
* **design:** add `EcommerceDataLayerImpression` to the public api ([#3701](https://github.com/graycoreio/daffodil/issues/3701)) ([bb6cc22](https://github.com/graycoreio/daffodil/commit/bb6cc22c626d18c046da9e6fb4f065e8e0c9b689))
* **design:** add specific theme retrieval functions for Daffodil ([#3707](https://github.com/graycoreio/daffodil/issues/3707)) ([1c6306b](https://github.com/graycoreio/daffodil/commit/1c6306be9e5652148102b79f072920f0c0082647))
* **design:** convert `DaffQuantityFieldComponent` to standalone ([#3698](https://github.com/graycoreio/daffodil/issues/3698)) ([c800052](https://github.com/graycoreio/daffodil/commit/c800052b5494d81807bee4010c116ff5486dcdab))
* **design:** delay `0.85.0` deprecations ([#3736](https://github.com/graycoreio/daffodil/issues/3736)) ([28933e4](https://github.com/graycoreio/daffodil/commit/28933e4d54ea7a70b89dad53d8cf25e27b161ee7))
* **design:** rename `$type` param to `$mode` in `daff-configure-theme` ([#3708](https://github.com/graycoreio/daffodil/issues/3708)) ([38bd4b3](https://github.com/graycoreio/daffodil/commit/38bd4b38bf599a083218bcc87933973f28dac7f4))
* **design:** shard `DaffInputComponent` ([#3703](https://github.com/graycoreio/daffodil/issues/3703)) ([dc4201e](https://github.com/graycoreio/daffodil/commit/dc4201e315bc89b8b1ba2e8e364f53d87ed8eeff))
* **design:** shard `DaffQuantityFieldComponent` ([#3700](https://github.com/graycoreio/daffodil/issues/3700)) ([2abaddb](https://github.com/graycoreio/daffodil/commit/2abaddb20f048fb70174e707e5a812f420acc6d9))
* **design:** update component themes to use new theming functions ([#3714](https://github.com/graycoreio/daffodil/issues/3714)) ([8b9225e](https://github.com/graycoreio/daffodil/commit/8b9225eba2f636a87cd8d165f891a2178f16ae02))
* **design:** update form field UI to accommodate custom select component ([#3735](https://github.com/graycoreio/daffodil/issues/3735)) ([e91c518](https://github.com/graycoreio/daffodil/commit/e91c518c6f8e5ddade46b2be79d43225add144e7))
* **dgeni:** implement canonical path for design API docs ([#3724](https://github.com/graycoreio/daffodil/issues/3724)) ([e5eb38f](https://github.com/graycoreio/daffodil/commit/e5eb38f881b2fbbd8d4b8bdb805929ec8235598f))
* upgrade faker to v9 ([#3734](https://github.com/graycoreio/daffodil/issues/3734)) ([7954a52](https://github.com/graycoreio/daffodil/commit/7954a526600c303691a8e6ebd47ea6fcd1a53c0b))


### Bug Fixes

* **daffio:** prerender incompatible legacy redirects ([#3719](https://github.com/graycoreio/daffodil/issues/3719)) ([a653a10](https://github.com/graycoreio/daffodil/commit/a653a10d488dadb33e680fea9e94cfc09ed8a374))
* **design:** fix media gallery a11y role ([#3702](https://github.com/graycoreio/daffodil/issues/3702)) ([3113992](https://github.com/graycoreio/daffodil/commit/3113992804e15d2ef682e73e0cae194b006fd50b))
* **dgeni:** parent host directives not hoisted into child ([#3731](https://github.com/graycoreio/daffodil/issues/3731)) ([a5834eb](https://github.com/graycoreio/daffodil/commit/a5834ebca79d4c6bcc799ad658cfdd95374951b9))

## [0.84.0](https://github.com/graycoreio/daffodil/compare/v0.83.0...v0.84.0) (2025-05-12)


### ⚠ BREAKING CHANGES

* **seo:** `DAFF_SEO_TITLE_ROUTER_UPDATES` and `provideDaffTitleRouterUpdates` have been removed. Use native Angular features as a replacement
* **router,product:** `DaffRouterActivatedRoute` and `provideDaffRouterActivatedRoute` has been removed from the API. The functionality of this service can be replaced with `inject(ChildrenOutletContexts).getContext(PRIMARY_OUTLET).route`. all best sellers features have been removed from `@daffodil/product`. Use `@daffodil/related-products` and `@daffodil/upsell-products` instead.
* **design:** `DaffPrefixDirective` has been removed from the `DAFF_NOTIFICATION_COMPONENTS` array. To continue using the `daffPrefix` selector for displaying icons, you must now import `DaffPrefixDirective` directly into your custom component.
* apps using `apollo-angular` should upgrade to v10
* **design:** `daffPrefixableMixin`, `DaffPrefixable`, `daffSuffixableMixin` and `DaffSuffixable` no longer exist.

### Features

* **daffio:** remove `type-label` mixin in favor of `DaffioDocsApiItemLabelComponent` ([#3667](https://github.com/graycoreio/daffodil/issues/3667)) ([3420320](https://github.com/graycoreio/daffodil/commit/34203202d9059b65af445f7247a90223d1b0dfef))
* **design:** button theme updates ([#3680](https://github.com/graycoreio/daffodil/issues/3680)) ([2ffb5d3](https://github.com/graycoreio/daffodil/commit/2ffb5d374c7512b4e7f2b69b1c27631bab07a40b))
* **design:** convert `DaffErrorMessageComponent` to standalone ([#3695](https://github.com/graycoreio/daffodil/issues/3695)) ([1b9848c](https://github.com/graycoreio/daffodil/commit/1b9848c93a13999e251ddf54a7a489ba5cfb7ab0))
* **design:** convert `DaffFormFieldComponent` to standalone ([#3694](https://github.com/graycoreio/daffodil/issues/3694)) ([4e10047](https://github.com/graycoreio/daffodil/commit/4e100474cc7d1a4339f083dcf3b35d9982cd2299))
* **design:** convert `DaffFormLabelDirective` to standalone ([#3696](https://github.com/graycoreio/daffodil/issues/3696)) ([86228f6](https://github.com/graycoreio/daffodil/commit/86228f693c00615b29cc3dc0fbd95df40a31ca3b))
* **design:** convert `DaffInputComponent` to standalone ([#3692](https://github.com/graycoreio/daffodil/issues/3692)) ([5e41e98](https://github.com/graycoreio/daffodil/commit/5e41e989668b3f291b7d5769d762bb1523d251c7))
* **design:** convert prefix and suffix directives to standalone ([#3384](https://github.com/graycoreio/daffodil/issues/3384)) ([5615fba](https://github.com/graycoreio/daffodil/commit/5615fba4e423bca995b088e96259bdb3f6a410fe))
* **design:** remove `DaffPrefixDirective` import from `DaffNotificationComponent` and update usage docs ([#3688](https://github.com/graycoreio/daffodil/issues/3688)) ([c1bdc87](https://github.com/graycoreio/daffodil/commit/c1bdc879e2fa00a79ae5fc4587b3aff27f0571aa))
* **design:** remove `DaffPrefixSuffixModule` import from `DaffMenuItemComponent` ([#3685](https://github.com/graycoreio/daffodil/issues/3685)) ([ce1c315](https://github.com/graycoreio/daffodil/commit/ce1c315041bd7f7274d0e0d37ef95baf60ca3a51))
* **design:** remove daff-illuminate functions in skeleton theme ([#3677](https://github.com/graycoreio/daffodil/issues/3677)) ([3609050](https://github.com/graycoreio/daffodil/commit/3609050ea149440decd11885334ceec775002a2c))
* **design:** update `DaffInputComponent` implementation ([#3381](https://github.com/graycoreio/daffodil/issues/3381)) ([8755a98](https://github.com/graycoreio/daffodil/commit/8755a98336b8df6f5ec5bbed0e974bbbe7e7712d))
* **design:** update breadcrumb theme to include light and dark modes ([#3673](https://github.com/graycoreio/daffodil/issues/3673)) ([e293817](https://github.com/graycoreio/daffodil/commit/e2938174209039f663b79e77750a19dd02d8be87))
* **design:** update callout theme to include light and dark modes ([#3675](https://github.com/graycoreio/daffodil/issues/3675)) ([ec23673](https://github.com/graycoreio/daffodil/commit/ec2367320d00e3d1afa90fc275ad513d11d00634))
* **design:** update hero theme to include light and dark modes ([#3674](https://github.com/graycoreio/daffodil/issues/3674)) ([a52d202](https://github.com/graycoreio/daffodil/commit/a52d202f9457e6f0301a2d41e9ee79da53ad6930))
* **design:** update list theme to include light and dark modes ([#3672](https://github.com/graycoreio/daffodil/issues/3672)) ([00ee21f](https://github.com/graycoreio/daffodil/commit/00ee21fa65631a7e2d9e9382edaf01386fc207df))
* **design:** update menu theme to include light and dark modes ([#3671](https://github.com/graycoreio/daffodil/issues/3671)) ([4690b2b](https://github.com/graycoreio/daffodil/commit/4690b2b06e3b3a43544ae18f17255be2970c79a7))
* **design:** update navbar theme to include light and dark modes ([#3670](https://github.com/graycoreio/daffodil/issues/3670)) ([3b0fc5f](https://github.com/graycoreio/daffodil/commit/3b0fc5f7e905c6f23eda690518bd6c971b7dc032))
* **design:** update paginator theme to support light and dark modes ([#3666](https://github.com/graycoreio/daffodil/issues/3666)) ([54ae66f](https://github.com/graycoreio/daffodil/commit/54ae66f6475a4463569b55ad3f042b17fba2ded9))
* **dgeni:** hoist private parent members ([#3683](https://github.com/graycoreio/daffodil/issues/3683)) ([7716868](https://github.com/graycoreio/daffodil/commit/7716868f0502805cf4591e07470b7be8181a0170))
* **docs,dgeni:** add inputs and outputs from host directives ([#3544](https://github.com/graycoreio/daffodil/issues/3544)) ([96ffe71](https://github.com/graycoreio/daffodil/commit/96ffe71428d4378309aa1506d2e33b1ea3382a7f))
* **router,product:** remove best sellers and `DaffRouterActivatedRoute` ([#3693](https://github.com/graycoreio/daffodil/issues/3693)) ([631af57](https://github.com/graycoreio/daffodil/commit/631af57edd793491c8bebafd4dd55a78e074c6d3))
* **seo:** remove route title updates ([#3697](https://github.com/graycoreio/daffodil/issues/3697)) ([7fe01e9](https://github.com/graycoreio/daffodil/commit/7fe01e9eeb52f2c9923ebd8e130bc9c51381b155))
* upgrade `apollo-angular` to v10 ([#3686](https://github.com/graycoreio/daffodil/issues/3686)) ([e51d34a](https://github.com/graycoreio/daffodil/commit/e51d34a50423c63e0b20ef0c5b1bd067fd9f7082))


### Bug Fixes

* **daffio:** update styles file to fix mixed declaration breaking change ([#3682](https://github.com/graycoreio/daffodil/issues/3682)) ([f583065](https://github.com/graycoreio/daffodil/commit/f583065f9f8de468100496e29416ab78745b2d37))

## [0.83.0](https://github.com/graycoreio/daffodil/compare/v0.82.0...v0.83.0) (2025-05-02)


### ⚠ BREAKING CHANGES

* **design:** `DaffSidebarViewportBackdropComponent` has been removed from the public api since it component for internal use only.

### Features

* **daffio,dgeni:** route same origin navigation with angular ([#3648](https://github.com/graycoreio/daffodil/issues/3648)) ([fdf253e](https://github.com/graycoreio/daffodil/commit/fdf253e9929efd365662e8abf352779926053b0f))
* **daffio:** add `DaffioDocsDesignApiSortSectionLabels` ([#3630](https://github.com/graycoreio/daffodil/issues/3630)) ([fccbe25](https://github.com/graycoreio/daffodil/commit/fccbe259929103771e21d1e31d888b904c78923b))
* **daffio:** add deprecated label to api list section and docType to api base content ([#3651](https://github.com/graycoreio/daffodil/issues/3651)) ([9ad4490](https://github.com/graycoreio/daffodil/commit/9ad44904ac3bfa4ac9b4e28a89521a483c02de55))
* **daffio:** add dynamic API components ([#3631](https://github.com/graycoreio/daffodil/issues/3631)) ([1244f49](https://github.com/graycoreio/daffodil/commit/1244f49d2500f6491815dd1561db0b2eb63fa9fa))
* **daffio:** clean up api item label theming for light and dark modes ([#3650](https://github.com/graycoreio/daffodil/issues/3650)) ([3cb5598](https://github.com/graycoreio/daffodil/commit/3cb559862adb6ceda650cf0a86ab9fca2b3529b7))
* **daffio:** move generic of docs service to method ([#3632](https://github.com/graycoreio/daffodil/issues/3632)) ([17c521a](https://github.com/graycoreio/daffodil/commit/17c521a95d088538f0479f9cecfe035cb9186848))
* **design:** remove DaffSidebarViewportBackdropComponent from the public api ([#3656](https://github.com/graycoreio/daffodil/issues/3656)) ([2d4e094](https://github.com/graycoreio/daffodil/commit/2d4e09403eebf623951e51accbaf540e97485bd5))
* **design:** replace daff-illuminate function in button themes ([#3618](https://github.com/graycoreio/daffodil/issues/3618)) ([acd1bd5](https://github.com/graycoreio/daffodil/commit/acd1bd59f263d0f22610368ab29546b735502bcb))
* **design:** update accordion theme to support light and dark mode ([#3612](https://github.com/graycoreio/daffodil/issues/3612)) ([618ad41](https://github.com/graycoreio/daffodil/commit/618ad41e881e9a8672e357dc5e7748f09fa1a0a4))
* **design:** update article theme to support light and dark mode ([#3615](https://github.com/graycoreio/daffodil/issues/3615)) ([7477fc5](https://github.com/graycoreio/daffodil/commit/7477fc5fe477845f2e0a71b5341e920d9874e41e))
* **design:** update button loading icon sizes ([#3619](https://github.com/graycoreio/daffodil/issues/3619)) ([b03f4c3](https://github.com/graycoreio/daffodil/commit/b03f4c3f4ef0f5816d5b0b9cba1b54a82989a075))
* **design:** update card theme to support light and dark mode ([#3634](https://github.com/graycoreio/daffodil/issues/3634)) ([43dfe63](https://github.com/graycoreio/daffodil/commit/43dfe63bd429b3cf27fd66273f5e5b8345fb844a))
* **design:** update notification theme to support light and dark mode ([#3611](https://github.com/graycoreio/daffodil/issues/3611)) ([18b942d](https://github.com/graycoreio/daffodil/commit/18b942d00a79c71c1a86adf950055d465b41254e))
* **design:** update progress bar theme to support light and dark modes ([#3663](https://github.com/graycoreio/daffodil/issues/3663)) ([bd3a9b9](https://github.com/graycoreio/daffodil/commit/bd3a9b9a4c049d1a9001a22205e7b3d1efb7d3dc))
* **design:** update switch theme to support light and dark mode ([#3659](https://github.com/graycoreio/daffodil/issues/3659)) ([7465690](https://github.com/graycoreio/daffodil/commit/7465690a752e17ccd093d49a14a31aeca0337bd6))
* **design:** update tabs component to support light and dark mode ([#3617](https://github.com/graycoreio/daffodil/issues/3617)) ([7c66cd6](https://github.com/graycoreio/daffodil/commit/7c66cd6818b51e6053eac65072a9b7f025686159))
* **design:** update toast theme to support light and dark mode ([#3603](https://github.com/graycoreio/daffodil/issues/3603)) ([5334c11](https://github.com/graycoreio/daffodil/commit/5334c116612d8f75a85d2ce908cb42e42b37b4ad))
* **design:** update tree theme to support light and dark mode ([#3602](https://github.com/graycoreio/daffodil/issues/3602)) ([fc75ca2](https://github.com/graycoreio/daffodil/commit/fc75ca24a77c5b34938cc813303f65e55b13e492))
* **dgeni,daffio:** move docs rendering to daffio ([#3550](https://github.com/graycoreio/daffodil/issues/3550)) ([206e4f8](https://github.com/graycoreio/daffodil/commit/206e4f881edd7e8baf3b26e67a2b670e5b5e579e))
* **dgeni:** add deprecated field to API doc ([#3543](https://github.com/graycoreio/daffodil/issues/3543)) ([00ed925](https://github.com/graycoreio/daffodil/commit/00ed925b2842bfbe05026ee7b345b00f03f5fa2a))
* **docs,daffio:** set full API docs in design component doc ([#3635](https://github.com/graycoreio/daffodil/issues/3635)) ([aa764bb](https://github.com/graycoreio/daffodil/commit/aa764bb054eed234ee2be96658c647aca54035cd))
* **docs,dgeni:** add `deprecated` to API nav list ([#3649](https://github.com/graycoreio/daffodil/issues/3649)) ([f898e43](https://github.com/graycoreio/daffodil/commit/f898e43796f2cf73d5a95a3cfa931baadb150cd8))
* **docs:** add `DaffDocsRenderedContent` ([#3625](https://github.com/graycoreio/daffodil/issues/3625)) ([e9bb12b](https://github.com/graycoreio/daffodil/commit/e9bb12b826c6a7cf36920fb815c8e0310614c9f8))
* **docs:** add `role` to API nav doc ([#3629](https://github.com/graycoreio/daffodil/issues/3629)) ([d6a9d98](https://github.com/graycoreio/daffodil/commit/d6a9d9809ec5bc3fad1d4d38868c00217e5ea521))
* **docs:** add API models and helpers ([#3627](https://github.com/graycoreio/daffodil/issues/3627)) ([1a386d1](https://github.com/graycoreio/daffodil/commit/1a386d12f11c361cc002b9334126d67e14822aca))
* **docs:** add API role docs ([#3628](https://github.com/graycoreio/daffodil/issues/3628)) ([f99a240](https://github.com/graycoreio/daffodil/commit/f99a240c091bfe6ec705d9ceed649d532f2e4677))
* **docs:** add design example models ([#3626](https://github.com/graycoreio/daffodil/issues/3626)) ([addba71](https://github.com/graycoreio/daffodil/commit/addba717e6333a6770fcc55b5ad9f264aca82fb1))
* **docs:** add TS doc models ([#3624](https://github.com/graycoreio/daffodil/issues/3624)) ([743ccde](https://github.com/graycoreio/daffodil/commit/743ccdec1e31dca323ee56213ae42a28119e7a29))


### Bug Fixes

* **design:** fix media gallery functions and id bugs ([#3614](https://github.com/graycoreio/daffodil/issues/3614)) ([902a09d](https://github.com/graycoreio/daffodil/commit/902a09dc5125e7f602810794e081e33d453f4aa4))
* **dgeni:** incorrectly inferred const types ([#3657](https://github.com/graycoreio/daffodil/issues/3657)) ([3672752](https://github.com/graycoreio/daffodil/commit/3672752826db110ac0927d2b21e7ea359f4de5d1))
* **dgeni:** render inputs and outputs in the source block ([#3647](https://github.com/graycoreio/daffodil/issues/3647)) ([e78100d](https://github.com/graycoreio/daffodil/commit/e78100d2cb681ba4606f6ca9a5eead73ddd5fa81))
* **ssr:** response token scope ([#3665](https://github.com/graycoreio/daffodil/issues/3665)) ([4538a89](https://github.com/graycoreio/daffodil/commit/4538a8969f08264bdc5676afeaf1cefb206d0465))

## [0.82.0](https://github.com/graycoreio/daffodil/compare/v0.81.1...v0.82.0) (2025-04-10)


### ⚠ BREAKING CHANGES

* **external-router:** `DaffExternalRouterDriverInMemoryModule` has been removed
* **design:** update breadcrumb active state implementation ([#3523](https://github.com/graycoreio/daffodil/issues/3523))
* **design:** `DaffPrefixSuffixModule` is no longer exported through `DAFF_TABS_COMPONENTS`. If you are using tabs with a prefix or suffix, make sure to import `DaffPrefixSuffixModule` in your usage component.
* **design:** `DaffPrefixSuffixModule` is no longer exported through `DAFF_BUTTON_COMPONENTS`. If you are using a button with a prefix or suffix, make sure to import `DaffPrefixSuffixModule` in your usage component.
* **design:** `DAFF_CARD_COMPONENTS` now only exports the `DaffCardComponent`. To use `DaffRaisedComponent` or `DaffStrokedComponent`, used `DAFF_RAISED_CARD_COMPONENTS` and `DAFF_STROKED_CARD_COMPONENTS`. `DAFF_ALL_CARD_COMPONENTS` can be used if all card types are needed.

### Features

* **customer-order:** sort newest first by default ([#3582](https://github.com/graycoreio/daffodil/issues/3582)) ([c3d70e1](https://github.com/graycoreio/daffodil/commit/c3d70e1ba71cf70789cac6350ae9626e02c7739f))
* **daffio:** add sidebar section strategy support ([#3459](https://github.com/graycoreio/daffodil/issues/3459)) ([9d90ad0](https://github.com/graycoreio/daffodil/commit/9d90ad089a9ff1fa37672322b0538520882736dc))
* **daffio:** add table of contents sidebar for mobile view ([#3458](https://github.com/graycoreio/daffodil/issues/3458)) ([fe07b27](https://github.com/graycoreio/daffodil/commit/fe07b27eb715e80771faf7b59992b29375b24f49))
* **daffio:** clean up mobile menu button UI ([#3522](https://github.com/graycoreio/daffodil/issues/3522)) ([63af378](https://github.com/graycoreio/daffodil/commit/63af378831578ed094e1080567fd29afd90f8e54))
* **daffio:** create docs footer ([#3516](https://github.com/graycoreio/daffodil/issues/3516)) ([7039c7f](https://github.com/graycoreio/daffodil/commit/7039c7fb07ee87520521d2a0a626d6a4c71ed91e))
* **daffio:** rename `DaffioDocArticleComponent` to `DaffioDocViewerComponent` ([#3570](https://github.com/graycoreio/daffodil/issues/3570)) ([00e1724](https://github.com/graycoreio/daffodil/commit/00e17249049b15735fe52ceb75794299b5a50ff4))
* **daffio:** render design component guide and API docs with tabs ([#3377](https://github.com/graycoreio/daffodil/issues/3377)) ([0a8daf3](https://github.com/graycoreio/daffodil/commit/0a8daf3dd9c3eed5a8c6638f8bf5b8702d0ff5fe))
* **daffio:** reorder docs nav ([#3510](https://github.com/graycoreio/daffodil/issues/3510)) ([73f8d86](https://github.com/graycoreio/daffodil/commit/73f8d869f1c2535fd41efd58bdbd641fbdd42800))
* **daffio:** truncate table of content links ([#3532](https://github.com/graycoreio/daffodil/issues/3532)) ([4972581](https://github.com/graycoreio/daffodil/commit/49725819821df22ab5014f09a5bb1c38e50b095f))
* **demo:** add shopify configuration for demo ([#3576](https://github.com/graycoreio/daffodil/issues/3576)) ([8a99876](https://github.com/graycoreio/daffodil/commit/8a9987688e8cf9d1589300c73d7ea384aa936a5d))
* **design, daffio:** add sidebar viewport footer content slot ([#3484](https://github.com/graycoreio/daffodil/issues/3484)) ([095d781](https://github.com/graycoreio/daffodil/commit/095d781e8965cb15d2ac1f22f439bedfb9e3be68))
* **design:** add `elevated` property to button and deprecated `DaffRaisedButtonComponent` ([#3575](https://github.com/graycoreio/daffodil/issues/3575)) ([b76b0ab](https://github.com/graycoreio/daffodil/commit/b76b0abc65a6b9af29b1797d0119c2e17df24ddd))
* **design:** add accessibility considerations and disabled prop to accordion ([#3511](https://github.com/graycoreio/daffodil/issues/3511)) ([929bc45](https://github.com/graycoreio/daffodil/commit/929bc45f8b8ca8941cf20280bc5c4fb51d58c606))
* **design:** add dark and light mixins for theme handling ([#3524](https://github.com/graycoreio/daffodil/issues/3524)) ([b947db2](https://github.com/graycoreio/daffodil/commit/b947db2abfe0c91be36511088c25d9280477f3a0))
* **design:** add new youtube player component ([#3579](https://github.com/graycoreio/daffodil/issues/3579)) ([e17e63c](https://github.com/graycoreio/daffodil/commit/e17e63ca3fa93bded1e656709ecf2d2a122ea9d8))
* **design:** add video support to media gallery ([#3580](https://github.com/graycoreio/daffodil/issues/3580)) ([cc685b0](https://github.com/graycoreio/daffodil/commit/cc685b0e88616c53d0e30e3ad00cfa2216e09948))
* **design:** allow individual card type imports ([#3474](https://github.com/graycoreio/daffodil/issues/3474)) ([ce27b32](https://github.com/graycoreio/daffodil/commit/ce27b3276b77badb34b9f44000ea12e80490783f))
* **design:** clean up article styles ([#3536](https://github.com/graycoreio/daffodil/issues/3536)) ([99a116d](https://github.com/graycoreio/daffodil/commit/99a116d03594696c25a2438cf347428beed2b27b))
* **design:** deprecate white and black options in favor of light and dark ([#3577](https://github.com/graycoreio/daffodil/issues/3577)) ([83d9792](https://github.com/graycoreio/daffodil/commit/83d9792e9aa7bf18b8ec8bf88fc77e8673bf9d38))
* **design:** move toast action button style and size values into separate types ([#3581](https://github.com/graycoreio/daffodil/issues/3581)) ([02f910d](https://github.com/graycoreio/daffodil/commit/02f910d6a126bfe73d71d4bb411f57de629c08db))
* **design:** refine `onUrlChange` behavior for tabs component ([#3567](https://github.com/graycoreio/daffodil/issues/3567)) ([f004546](https://github.com/graycoreio/daffodil/commit/f004546d1ff95453fc922ed4d7e22ce0ff9eac69))
* **design:** remove DaffPrefixSuffixModule imports from button components and update usage docs ([#3503](https://github.com/graycoreio/daffodil/issues/3503)) ([14d92d1](https://github.com/graycoreio/daffodil/commit/14d92d1bc39b7321b1a6eabc68fbb740e2521bfe))
* **design:** remove prefix suffix import from tabs and udpdate docs ([#3506](https://github.com/graycoreio/daffodil/issues/3506)) ([352ca08](https://github.com/graycoreio/daffodil/commit/352ca0868ba7885e81fa62a76c5759d7158a5b2d))
* **design:** rename `daff-theme` mixin to `daff-component-themes` ([#3564](https://github.com/graycoreio/daffodil/issues/3564)) ([5b4ffad](https://github.com/graycoreio/daffodil/commit/5b4ffad273df75f325731c9125dfcbf54a9c9a61))
* **design:** update article heading and table styles ([#3584](https://github.com/graycoreio/daffodil/issues/3584)) ([c8c0824](https://github.com/graycoreio/daffodil/commit/c8c0824fc32dfd85b37243e3c288d0d0fd93edc5))
* **design:** update breadcrumb active state implementation ([#3523](https://github.com/graycoreio/daffodil/issues/3523)) ([b3e6efa](https://github.com/graycoreio/daffodil/commit/b3e6efa14223def6c08657ed4e0275af475b88a9))
* **design:** update button themes to support light and dark mode ([#3571](https://github.com/graycoreio/daffodil/issues/3571)) ([fdb4490](https://github.com/graycoreio/daffodil/commit/fdb4490a1643a82511de8aef56b30bdf70a2fee4))
* **design:** update loading icon theme to support light and dark mode ([#3572](https://github.com/graycoreio/daffodil/issues/3572)) ([6b67713](https://github.com/graycoreio/daffodil/commit/6b677136e703cdc1b08d95c66b9295320378ca94))
* **dgeni:** add an import example to API docs ([#3542](https://github.com/graycoreio/daffodil/issues/3542)) ([5b1c3f1](https://github.com/graycoreio/daffodil/commit/5b1c3f1c554a58dc872088170e90440dd7d13a72))
* **dgeni:** ensure unique slug in heading IDs ([#3547](https://github.com/graycoreio/daffodil/issues/3547)) ([59209f0](https://github.com/graycoreio/daffodil/commit/59209f050f6ddc68f6b3a61ee63a0e46a48f6159))
* **dgeni:** render API source block ([#3385](https://github.com/graycoreio/daffodil/issues/3385)) ([3fb4350](https://github.com/graycoreio/daffodil/commit/3fb4350ab533d94c2817fcc03e0d48b126f19f78))
* **driver, product:** add Shopify product driver and supporting code ([#3529](https://github.com/graycoreio/daffodil/issues/3529)) ([50f2b4c](https://github.com/graycoreio/daffodil/commit/50f2b4c1a4dc8b4e6d3fdfae2ba04c068bb5b6ee))
* **driver:** add shopify driver with models + graphql config + codegen ([#3519](https://github.com/graycoreio/daffodil/issues/3519)) ([68e6289](https://github.com/graycoreio/daffodil/commit/68e6289dc5a3c270aac45a09ac9de568e541ef37))
* **external-router:** remove `DaffExternalRouterDriverInMemoryModule` ([#3592](https://github.com/graycoreio/daffodil/issues/3592)) ([f964cab](https://github.com/graycoreio/daffodil/commit/f964cabb9189ec193277328b6f092811e905af8a))
* **shop:** add scroll to top button to docs ([#3509](https://github.com/graycoreio/daffodil/issues/3509)) ([452606b](https://github.com/graycoreio/daffodil/commit/452606be576b981e996a10c2d995f39012098b84))
* **tools-dgeni:** clean up API templates ([#3495](https://github.com/graycoreio/daffodil/issues/3495)) ([4edba98](https://github.com/graycoreio/daffodil/commit/4edba98f39630d0b594538d5826726154f177613))


### Bug Fixes

* **design,dgeni:** link tags don't work in child API descriptions ([#3537](https://github.com/graycoreio/daffodil/issues/3537)) ([7808631](https://github.com/graycoreio/daffodil/commit/78086315aa8b3e555ee8b52acbc9a1340573ef66))
* **design:** tab consumers not notified of tab reset on location change ([#3540](https://github.com/graycoreio/daffodil/issues/3540)) ([b577827](https://github.com/graycoreio/daffodil/commit/b57782703cd45c175a563251913cece11e675fb9))
* **design:** tabs reset on same page navigation ([#3548](https://github.com/graycoreio/daffodil/issues/3548)) ([10ca503](https://github.com/graycoreio/daffodil/commit/10ca50391bb591f67613dd1ab231f1cd0e111249))
* **dgeni:** API docs include private members ([#3535](https://github.com/graycoreio/daffodil/issues/3535)) ([66ae18e](https://github.com/graycoreio/daffodil/commit/66ae18e929110ca9bf97a02f87943f71857a9471))
* **dgeni:** design component API ToC has examples ([#3539](https://github.com/graycoreio/daffodil/issues/3539)) ([82f9f6d](https://github.com/graycoreio/daffodil/commit/82f9f6d0a61be5bb845efeae278ca74b70dabd55))
* **dgeni:** examples without captions are misrendered ([#3530](https://github.com/graycoreio/daffodil/issues/3530)) ([86cad3a](https://github.com/graycoreio/daffodil/commit/86cad3a520ee26ffc45d055f59bc411ce3b94766))
* **dgeni:** interface property heading tags don't respect child mode ([#3538](https://github.com/graycoreio/daffodil/issues/3538)) ([c2bd2df](https://github.com/graycoreio/daffodil/commit/c2bd2df885d6fa837c63922e0c28699df0f9f9a2))
* **dgeni:** linking API member descriptions that aren't codespans ([#3527](https://github.com/graycoreio/daffodil/issues/3527)) ([3523701](https://github.com/graycoreio/daffodil/commit/3523701c51c4af9b58d5a3c3c1061681fa8b608f))
* **dgeni:** non-alphabetic characters don't get linked ([#3551](https://github.com/graycoreio/daffodil/issues/3551)) ([7231562](https://github.com/graycoreio/daffodil/commit/7231562c13424801c3af9b33999082b5d68766c6))
* **dgeni:** package is skipped during breadcrumb generation ([#3533](https://github.com/graycoreio/daffodil/issues/3533)) ([be3a0e1](https://github.com/graycoreio/daffodil/commit/be3a0e109b5fde7b026787326da5887fb8d8e977))
* **external-router:** `meta_description` missing from magento categories ([#3585](https://github.com/graycoreio/daffodil/issues/3585)) ([7fb8539](https://github.com/graycoreio/daffodil/commit/7fb8539caffd8e1e5004a9055249bc32e1877ab5))
* **product:** improve getByUrl url param docs ([#3518](https://github.com/graycoreio/daffodil/issues/3518)) ([c609ab5](https://github.com/graycoreio/daffodil/commit/c609ab5b9c910b8e1d53d8ee01ad20c63e66554b))

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

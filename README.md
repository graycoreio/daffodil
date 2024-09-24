# Daffodil
[![Chat on Discord](https://img.shields.io/discord/777920696583454740)](https://discord.gg/BdaJVZ53sR)
[![Build Status](https://graycore.visualstudio.com/Daffodil/_apis/build/status/graycoreio.daffodil?branchName=develop)](https://graycore.visualstudio.com/Daffodil/_build/latest?definitionId=6&branchName=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/1b331aa9dd107c168250/maintainability)](https://codeclimate.com/github/graycoreio/daffodil/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1b331aa9dd107c168250/test_coverage)](https://codeclimate.com/github/graycoreio/daffodil/test_coverage)
[![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)

## Table of contents
- [Introduction](#whatisdaff)
  - [Features](#features)
  - [Prerequisites](#prereqs)
  - [Getting started](#getstarted)
- [Uses](#whowhydaff)
- [Packages](#whatpackages)
  - [PWAs](#pwapackages)
  - [Angular and Ecommerce](#angularecompackages)
  - [Better Frontend UX](#frontendpackages)
  - [Less Re-Platforming](#replatformpackages)
  - [Table of Packages](#packages)

## What is Daffodil? <a id="whatisdaff"></a>
In general, Daffodil is a frontend Ecommerce framework that allows developers to build complex Ecommerce stores.

Specifically, Daffodil is a frontend toolkit that accomplishes three things:

1. Improve developer workflow when writing frontend software for Ecommerce stores.
2. Provide a consistent frontend developer tool-chain regardless of a business's chosen ecommerce platform.
3. Drastically improve the end-user experience of online-shopping.

## What are Daffodil's features? <a id="features"></a>
Daffodil's features include the following:
* :free: Forever Free, Open Source, and MIT Licensed
* :hammer: Platform Agnostic Drivers for your platform of choice
    * Shopify
    * Magento 2
    * In-Memory Backend
        * Prebuilt
        * :zap: Great for lightning fast iteration and concepting
* :cake: Decoupled and Composable Packages for your use case
    * Product
    * Cart
    * Checkout
* :books: Well Documented
    * Example Implementation
    * API References
    * Tutorials
* :bulb: Component Kit
    * Purely Functional
    * Themeable
    * Accessible
    * Supports Server-side Rendering
    * Well Tested
    * Fantastic Performance
    * IE 11+ Support

## What do I need before I start using Daffodil? <a id="prereqs"></a>
Daffodil was developed so you can get started without connecting to a platform. Because of its driver-like nature, all you need is the following:

1. [Node.js v18+](https://nodejs.org/en/)
2. [npm](https://www.npmjs.com/)
3. [An Angular 17 project](https://angular.dev)

## How do I start using Daffodil? <a id="getstarted"></a>
After installing the [prerequisites](#prereqs), you can choose the packages that you want and get started using Daffodil with your new or existing Ecommerce store.

- To use Daffodil to build your own Ecommerce store, follow the steps in the [Installation instructions](/docs/guides/introduction/getting-started.md).
- To view our progress of an example store or contribute one of your own, see the [Developer documentation](/docs/internal/DEVELOPER.md#running-the-example-demo).

## Who uses Daffodil and why? <a id="whowhydaff"></a>
The target devopers for Daffodil include, but are not limited to, the following:

1. Developers who want to explore and experiment with Progressive Web Apps (PWAs).
2. Developers who are comfortable with Angular and are interested in job opportunities in Ecommerce.
3. Developers who work with businesses that have existing websites but want a better user interface and experience.
4. Developers who are forward-thinking, have gone through a re-platforming, and want to deflect future re-platforming.

## What packages do I use? <a id="whatpackages"></a>
For a basic Ecommerce site, you need all of the most commonly used packages (common packages), which are the following:
- [@daffodil/cart](/libs/cart/README.md)
- [@daffodil/category](/libs/category/README.md)
- [@daffodil/geography](/libs/geography/README.md)
- [@daffodil/navigation](/libs/navigation/README.md)
- [@daffodil/product](/libs/product/README.md)
- [@daffodil/core](/libs/order/README.md)
- [@daffodil/driver](/libs/driver/README.md)

**Note:** Both the `core` and `driver` packages are dependencies for most other packages. Developers do not interact with these packages directly.

Referring to the aforementioned [use cases](#whowhydaff), here are some lists and explanations of recommended Daffodil packages.

### **1. To explore and experiment with PWAs**<a id="pwapackages"></a>

 If you don't have a project in mind and want to see something in Daffodil working, then use:
- [@daffodil/core](/libs/order/README.md)
- [@daffodil/driver](/libs/driver/README.md)
- [@daffodil/product](/libs/product/README.md)

### **2. To expand Ecommerce opportunities**<a id="angularecompackages"></a>

If you want to expand your portfolio for more Ecommerce opportunities, then use the [common packages](#whatpackages) and optionally include:
- [@daffodil/design](/libs/design/README.md) (optional)

You won't need to use more than the aforementioned common packages(#pwapackages) until you have a specific business use or requirement. However, if you are design-focused, then you can either use your own design framework or use the `design` package.

### **3. To improve the user experience for existing business sites**<a id="frontendpackages"></a>
If you have an existing site, either your own or backed by a business, then there are a few working assumptions about the site: it has SEO and specific URLs, and the product pages need to show lists of related products.
 So, in addition to the [common packages](#whatpackages), you may need the following packages:
- [@daffodil/external-router](/libs/external-router/README.md)
- [@daffodil/seo](/libs/seo/README.md)
- [@daffodil/related-products](/libs/related-products/README.md)****
- [@daffodil/upsell-products](/libs/upsell-products/README.md)
- [@daffodil/design](/libs/design/README.md)
- [@daffodil/contact](/libs/contact/README.md)

### **4. To prevent future re-platforming**<a id="replatformpackages"></a>
If you want to prevent future re-platforming of your Ecommerce site, there are a few assumed advanced requirements. For example, the business has complex product configurations and has marketing email campaigns. So, in addition to the [common packages](#whatpackages) and the packages for [improving user experiences](#frontendpackages), you may also need the following packages:

- [@daffodil/newsletter](/libs/newsletter/README.md)
- [@daffodil/product-composite](/libs/product-composite/README.md)
- [@daffodil/product-configurable](/libs/product-configurable/README.md)

## Packages <a id="packages"></a>
Below is a table of currently available Daffodil packages.
<!-- AUTOGENERATE_PACKAGE_START -->
| Package | Version | Stability |
|---|---|---|
| [@daffodil/analytics](/libs/analytics/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fanalytics/latest.svg)](https://npmjs.com/package/@daffodil/analytics) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/analytics-provider-data-layer](/libs/analytics-provider-data-layer/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fanalytics-provider-data-layer/latest.svg)](https://npmjs.com/package/@daffodil/analytics-provider-data-layer) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/auth](/libs/auth/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fauth/latest.svg)](https://npmjs.com/package/@daffodil/auth) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/authorizenet](/libs/authorizenet/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fauthorizenet/latest.svg)](https://npmjs.com/package/@daffodil/authorizenet) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/cart](/libs/cart/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcart/latest.svg)](https://npmjs.com/package/@daffodil/cart) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/cart-customer](/libs/cart-customer/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcart-customer/latest.svg)](https://npmjs.com/package/@daffodil/cart-customer) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/cart-store-credit](/libs/cart-store-credit/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcart-store-credit/latest.svg)](https://npmjs.com/package/@daffodil/cart-store-credit) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/category](/libs/category/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcategory/latest.svg)](https://npmjs.com/package/@daffodil/category) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/checkout](/libs/checkout/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcheckout/latest.svg)](https://npmjs.com/package/@daffodil/checkout) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/contact](/libs/contact/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcontact/latest.svg)](https://npmjs.com/package/@daffodil/contact) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/content](/libs/content/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcontent/latest.svg)](https://npmjs.com/package/@daffodil/content) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/core](/libs/core/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcore/latest.svg)](https://npmjs.com/package/@daffodil/core) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/customer](/libs/customer/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcustomer/latest.svg)](https://npmjs.com/package/@daffodil/customer) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/customer-auth](/libs/customer-auth/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcustomer-auth/latest.svg)](https://npmjs.com/package/@daffodil/customer-auth) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/customer-order](/libs/customer-order/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcustomer-order/latest.svg)](https://npmjs.com/package/@daffodil/customer-order) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/customer-payment](/libs/customer-payment/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcustomer-payment/latest.svg)](https://npmjs.com/package/@daffodil/customer-payment) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/customer-payment-authorizenet](/libs/customer-payment-authorizenet/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcustomer-payment-authorizenet/latest.svg)](https://npmjs.com/package/@daffodil/customer-payment-authorizenet) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/customer-store-credit](/libs/customer-store-credit/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcustomer-store-credit/latest.svg)](https://npmjs.com/package/@daffodil/customer-store-credit) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/design](/libs/design/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fdesign/latest.svg)](https://npmjs.com/package/@daffodil/design) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/driver](/libs/driver/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fdriver/latest.svg)](https://npmjs.com/package/@daffodil/driver) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/external-router](/libs/external-router/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fexternal-router/latest.svg)](https://npmjs.com/package/@daffodil/external-router) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/forms](/libs/forms/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fforms/latest.svg)](https://npmjs.com/package/@daffodil/forms) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/geography](/libs/geography/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fgeography/latest.svg)](https://npmjs.com/package/@daffodil/geography) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/navigation](/libs/navigation/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fnavigation/latest.svg)](https://npmjs.com/package/@daffodil/navigation) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/newsletter](/libs/newsletter/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fnewsletter/latest.svg)](https://npmjs.com/package/@daffodil/newsletter) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/order](/libs/order/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Forder/latest.svg)](https://npmjs.com/package/@daffodil/order) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/payment](/libs/payment/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fpayment/latest.svg)](https://npmjs.com/package/@daffodil/payment) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/paypal](/libs/paypal/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fpaypal/latest.svg)](https://npmjs.com/package/@daffodil/paypal) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/product](/libs/product/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fproduct/latest.svg)](https://npmjs.com/package/@daffodil/product) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/product-composite](/libs/product-composite/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fproduct-composite/latest.svg)](https://npmjs.com/package/@daffodil/product-composite) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/product-configurable](/libs/product-configurable/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fproduct-configurable/latest.svg)](https://npmjs.com/package/@daffodil/product-configurable) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/related-products](/libs/related-products/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Frelated-products/latest.svg)](https://npmjs.com/package/@daffodil/related-products) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/reviews](/libs/reviews/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Freviews/latest.svg)](https://npmjs.com/package/@daffodil/reviews) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/router](/libs/router/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Frouter/latest.svg)](https://npmjs.com/package/@daffodil/router) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/search](/libs/search/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fsearch/latest.svg)](https://npmjs.com/package/@daffodil/search) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/search-category](/libs/search-category/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fsearch-category/latest.svg)](https://npmjs.com/package/@daffodil/search-category) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/search-product](/libs/search-product/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fsearch-product/latest.svg)](https://npmjs.com/package/@daffodil/search-product) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/search-product-composite](/libs/search-product-composite/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fsearch-product-composite/latest.svg)](https://npmjs.com/package/@daffodil/search-product-composite) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/search-product-configurable](/libs/search-product-configurable/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fsearch-product-configurable/latest.svg)](https://npmjs.com/package/@daffodil/search-product-configurable) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/seo](/libs/seo/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fseo/latest.svg)](https://npmjs.com/package/@daffodil/seo) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| [@daffodil/upsell-products](/libs/upsell-products/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fupsell-products/latest.svg)](https://npmjs.com/package/@daffodil/upsell-products) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
<!-- AUTOGENERATE_PACKAGE_END -->

**Note:** About the `checkout` package, it is currently a legacy package; there is no reason to use it. However, the `checkout` package eventually may be filled with extracts from the `cart` and `order` packages.

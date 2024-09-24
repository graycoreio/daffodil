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

<!-- AUTOGENERATE_PACKAGE_END -->

**Note:** About the `checkout` package, it is currently a legacy package; there is no reason to use it. However, the `checkout` package eventually may be filled with extracts from the `cart` and `order` packages.

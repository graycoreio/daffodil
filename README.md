# Daffodil
[![Chat on Discord](https://img.shields.io/discord/777920696583454740)](https://discord.gg/BdaJVZ53sR)
[![Build Status](https://graycore.visualstudio.com/Daffodil/_apis/build/status/graycoreio.daffodil?branchName=develop)](https://graycore.visualstudio.com/Daffodil/_build/latest?definitionId=6&branchName=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/1b331aa9dd107c168250/maintainability)](https://codeclimate.com/github/graycoreio/daffodil/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1b331aa9dd107c168250/test_coverage)](https://codeclimate.com/github/graycoreio/daffodil/test_coverage)
[![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)

## Table of contents
- [Introduction](#whatisdaff)
  - [Features](#features)
  - [Pre-requisites](#prereqs)
  - [Getting started](#getstarted)
- [Uses](#whowhydaff)
- [Packages](#whatpackages)
  - [PWAs](#pwapackages)
  - [Angular and Ecommerce](#angularecompackages)
  - [Better Frontend UX](#frontendpackages)
  - [Less Re-Platforming](#replatformpackages)
  - [Table of Packages](#packages) 

## What is Daffodil? <a name="whatisdaff"></a>
In general, Daffodil is a frontend Ecommerce framework that allows developers to build complex Ecommerce stores. 

Specifically, Daffodil is a frontend toolkit that accomplishes three things:

1. Improve developer workflow when writing frontend software for online, Ecommerce stores.
2. Provide a consistent frontend developer tool-chain regardless of a business's chosen ecommerce platform.
3. Drastically improve the end-user experience of online-shopping.

## What are Daffodil's features? <a name="features"></a>
Daffodil's features include the following:
* :free: Forever Free, Open Source, and MIT Licensed
* :hammer: Platform Agnostic Drivers for your platform of choice
    * Shopify
    * Magento 2
    * In-Memory Backend
        * Prebuilt
        * :zap: Great for lightning fast iteration and concepting.
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
    * Well-tested
    * Fantastic Performance
    * IE 11+ Support

## What do I need before I start using Daffodil? <a name="prereqs"></a>
Daffodil was developed so that you can get started working on your ecommerce store without connecting to a platform. As a result of our drivers, all you need is the following:

1. [NodeJS v12+](https://nodejs.org/en/)
2. [NPM](https://www.npmjs.com/)
3. [An Angular project](https://angular.io/cli)

## How do I start using Daffodil? <a name="getstarted"></a>
After installing the [pre-requisites](#prereqs), you can choose the packages that you want and get started using Daffodil with your new or existing Ecommerce store. 

- To use Daffodil to build your own Ecommerce store, follow the steps in the [Installation instructions](./docs/INSTALLATION.md).

## Who uses Daffodil and why? <a name="whowhydaff"></a>
Daffodil is right for you if you are a:

1. Developer who wants to explore and experiment with Progressive Web Apps (PWAs).
2. Developer who is comfortable with Angular and are interested in job opportunities in Ecommerce.
3. Developer who works with businesses that have existing websites but want a better frontend user experience (UX).
4. Developer who is forward-thinking, have gone through a re-platforming, and want to deflect future re-platforming. 

## What packages do I use? <a name="whatpackages"></a>
For a basic Ecommerce site, you need all of the most commonly used packages (common packages), which are the following:
- [@daffodil/cart](./libs/cart/README.md)
- [@daffodil/category](./libs/category/README.md)
- [@daffodil/geography](./libs/geography/README.md)
- [@daffodil/navigation](./libs/navigation/README.md)
- [@daffodil/product](./libs/product/README.md)
- [@daffodil/order](./libs/order/README.md)

**Note:** Both the `@daffodil/core` and `@daffodil/driver` packages are dependencies for most other packages. Developers do not interact with these packages directly.

Referring to the aforementioned [use cases](#whowhydaff), here are some lists and explanations of recommended Daffodil packages.

### **1. To explore and experiment with PWAs**<a name="pwapackages"></a>

 If you don't have a project in mind and just want to see something in Daffodil working, then use:
- [@daffodil/core](./libs/order/README.md)
- [@daffodil/driver](./libs/driver/README.md)
- [@daffodil/product](./libs/product/README.md)

### **2. To expand Ecommerce opportunities**<a name="angularecompackages"></a>

If you want to expand your portfolio into more Ecommerce opportunities, then use the [common packages](#whatpackages) and optionally include:
- [@daffodil/design](./libs/design/README.md) (optional)

You won't need to use more than the aforementioned common packages(pwapackages) until you have a specific business use or requirement.

### **3. To improve frontend UX for existing business sites**<a name="frontendpackages"></a>

If you have an existing store, either your own or backed by a business, then there are a few working assumptions about your store:
  1. It has pre-existing SEO
    a. You need to support meta-tags, open-graph, schema, etc.
    b. You need to maintain backwards-compatible URLs. 
  2. The product pages need to show lists of related products.
  3. You need a contact form for customers to let you know something went wrong.

So, in addition to the [common packages](#whatpackages), you will likely need the following packages:

- [@daffodil/external-router](./libs/external-router/README.md)
- [@daffodil/seo](./libs/seo/README.md)
- [@daffodil/related-products](./libs/related-products/README.md)
- [@daffodil/design](./libs/design/README.md)
- [@daffodil/contact](./libs/contact/README.md)

### **4. To prevent future re-platforming**<a name="replatformpackages"></a>

If you want to prevent future re-platforming of your Ecommerce site, there are a few assumed advanced requirements. For example, the business has complex product configurations and has marketing email campaigns. So, in addition to the [common packages](#whatpackages) and the packages for [improving frontend UX](#frontendpackages), you may also need the following packages:

- [@daffodil/newsletter](./libs/newsletter/README.md)
- [@daffodil/product-composite](./libs/product-composite/README.md)
- [@daffodil/product-configurable](./libs/product-configurable/README.md)

## Packages <a name="packages"></a>
Below is a table of currently available Daffodil packages.
| Project | Package | Version | Stability |
|---|---|---|---|
| Authorize.net | [@daffodil/authorizenet](./libs/authorizenet/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fauthorizenet/latest.svg)](https://npmjs.com/package/@daffodil/authorizenet) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| Cart | [@daffodil/cart](./libs/cart/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcart/latest.svg)](https://npmjs.com/package/@daffodil/cart) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil) |
| Category | [@daffodil/category](./libs/category/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcategory/latest.svg)](https://npmjs.com/package/@daffodil/category) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil) |
| Checkout | [@daffodil/checkout](./libs/checkout/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcheckout/latest.svg)](https://npmjs.com/package/@daffodil/checkout) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil) |
| Contact | [@daffodil/contact](./libs/contact/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcontact/latest.svg)](https://npmjs.com/package/@daffodil/contact) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| Core | [@daffodil/core](./libs/core/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fcore/latest.svg)](https://npmjs.com/package/@daffodil/core) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil)
| Design | [@daffodil/design](./libs/design/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fdesign/latest.svg)](https://npmjs.com/package/@daffodil/design) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil) |
| Driver | [@daffodil/driver](./libs/driver/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fdriver/latest.svg)](https://npmjs.com/package/@daffodil/driver) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil) |
| External Router | [@daffodil/external-router](./libs/external-router/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fexternal-router/latest.svg)](https://npmjs.com/package/@daffodil/external-router) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil) |
| Geography | [@daffodil/geography](./libs/geography/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fgeography/latest.svg)](https://npmjs.com/package/@daffodil/geography) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil) |
| Newsletter | [@daffodil/newsletter](./libs/newsletter/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fnewsletter/latest.svg)](https://npmjs.com/package/@daffodil/newsletter) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil) |
| Paypal | [@daffodil/paypal](./libs/paypal/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fpaypal/latest.svg)](https://npmjs.com/package/@daffodil/paypal) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil) |
| Product | [@daffodil/product](./libs/product/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fproduct/latest.svg)](https://npmjs.com/package/@daffodil/product) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil) |
| Composite Product | [@daffodil/product-composite](./libs/product-composite/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fproduct-composite/latest.svg)](https://npmjs.com/package/@daffodil/product-composite) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil) |
| Configurable Product | [@daffodil/product-configurable](./libs/product-configurable/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fproduct-configurable/latest.svg)](https://npmjs.com/package/@daffodil/product-configurable) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil) |
| SEO | [@daffodil/seo](./libs/seo/README.md) | [![latest](https://img.shields.io/npm/v/%40daffodil%2Fseo/latest.svg)](https://npmjs.com/package/@daffodil/seo) | [![experimental](https://img.shields.io/static/v1.svg?label=stability&message=experimental&color=orange)](https://www.github.com/graycoreio/daffodil) |

**Note:** About the `checkout` package, it is currently a legacy package; there is no reason to use it. However, the `checkout` package eventually may be filled with extracts from the `cart` and `order` packages.

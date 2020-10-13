# Installation

## Table of Contents

- Package Managers

  - [Installing with NPM](#installing-with-npm)
  - [Installing with yarn](#installing-with-yarn)

- Platforms

  - [Daffodil's In-Memory Web API](#in-memory-web-api)
  - [Magento](#magento)
  - [Shopify](#shopify)

## Installing with `npm`

To install the cart library and its dependencies, use the following command in your terminal.

```bash
npm install @daffodil/cart @daffodil/core @ngrx/store @ngrx/effects --save
```

## Installing with `yarn`

To install the cart library and its dependencies, use the following command in your terminal.

```bash
yarn add @daffodil/cart @daffodil/core @ngrx/store @ngrx/effects
```

## Post-Install

After installing, an ecommerce platform driver needs to be set-up. We highly recommend installing the [In-Memory Web API](#in-memory-web-api) for fast, out-of-the-box development.

## In-Memory Web API

Optional, but [great for fast prototyping and development](./drivers/in-memory).

## Magento

Refer to [the Magento guide](./drivers/magento)

## Shopify

_Coming Soon™_

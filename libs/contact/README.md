# @daffodil/contact
`@daffodil/contact` allows you to quickly scaffold a contact form feature in an Angular application.

## Overview
It provides state management and drivers that simplify the process of integrating your UI with your backend contact features.

## Installation
To install `@daffodil/contact`, use the following commands in your terminal.

Install with npm:
```bash
npm install @daffodil/contact --save
```

Install with yarn:

```bash
yarn add @daffodil/contact
```

> After installing, an ecommerce platform driver needs to be set up. We highly recommend installing the [in-memory web api](./guides/drivers.md) for fast, out-of-the-box development.

## Getting started

`@daffodil/contact` includes multiple layers of functionality that work together to support feature development.

| Layer | Description |
| ----- | ----------- |
| [State](/libs/contact/guides/state.md) | Manage contact form state with NgRx |
| [Drivers](/libs/contact/guides/drivers.md) | Configure backend drivers (Hubspot, In-Memory) |
| [Testing](/libs/contact/guides/testing.md) | Unit test components using contact |

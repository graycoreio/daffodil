# @daffodil/newsletter
`@daffodil/newsletter` allows you to quickly scaffold a "newsletter" subscription UI feature in an Angular application. It supports drivers for a variety of ecommerce platforms in order to make connecting your UI to your platform's newsletter feature easy.

<!-- ## Overview
talk about supported platforms -->

## Installation
To install `@daffodil/newsletter` and its dependencies, use the following commands in the terminal.

Install with npm:
```
npm install @daffodil/newsletter @daffodil/core @ngrx/store @ngrx/effects --save
```

Install with yarn:
```
yarn add @daffodil/newsletter @daffodil/core @ngrx/store @ngrx/effects
```

> After installing, an ecommerce platform driver needs to be set up. We highly recommend installing the [in-memory web api](./guides/drivers.md) for fast, out-of-the-box development.

## Getting started
1. Import the `StoreModule` and the `DaffNewsletterModule` in the root component of your application.
2. Include `StoreModule.forRoot({})` in the imports section. This will be relevant later on when utilizing the redux and state management features of `@daffodil/newsletter`.

```ts
import { DaffNewsletterModule } from '@daffodil/newsletter';
import { StoreModule } from '@ngrx/store';

@ngModule({
  imports: [
    StoreModule.forRoot({}),
    DaffNewsletterModule
  ]
})
```

## Live demo
Check out a [live example](https://stackblitz.com/edit/daff-newsletter-example) of `@daffodil/newsletter` in action!

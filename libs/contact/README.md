# @daffodil/contact
`@daffodil/contact` allows you to quickly scaffold a contact form feature in an Angular application.

## Overview
It supports drivers for a variety of platforms, simplifying the process of integrating your UI with your backend contact features.

## Guides

| Guide | Description |
| ----- | ----------- |
| [State Management](/libs/contact/guides/state.md) | Manage contact form state with NgRx |
| [Drivers](/libs/contact/guides/drivers.md) | Configure backend drivers (Hubspot, In-Memory) |
| [Testing](/libs/contact/guides/testing.md) | Unit test components using contact |

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
1. Import the `DaffContactStateModule` in the root component of your application.
2. Import `StoreModule.forRoot({})` for NgRx state management.

```ts
import { DaffContactStateModule } from '@daffodil/contact/state';

@NgModule({
  imports:[
    StoreModule.forRoot({}),
    DaffContactStateModule,
  ]
})
export class AppModule {}
```

## Usage
`@daffodil/contact` provides a `DaffContactFacade` that centralizes the complexities of the library into one place. This facade handles sending your contact form to your application's backend and can also be utilized to build your UI with behaviors common to a contact form.

To inject the facade inside your component, include an instance of `DaffContactFacade` in your component's constructor.

```ts
export class ContactComponent {
  constructor(public contactFacade: DaffContactFacade) {}
}
```

## Sending a contact form to your backend
The `DaffContactFacade` is built generically, so you can create your own submission object that represents your app's contact form. A simple example:

```ts
export interface ContactFormData {
  email: string;
  name?: string;
  message?: string;
}
```

## Using the facade
Once the `DaffContactFacade` has been set up in your component, use the `dispatch()` method to send your contact data.

The facade provides three observable streams: `success$`, `error$`, and `loading$`, which can be used to enhance your application's UI.

```ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffContactFacade, DaffContactSubmit } from '@daffodil/contact/state';
import { DaffStateError } from '@daffodil/core/state';

export class ContactComponent implements OnInit {
  success$: Observable<boolean>;
  error$: Observable<DaffStateError[]>;
  loading$: Observable<boolean>;

  constructor(public contactFacade: DaffContactFacade) {}

  ngOnInit() {
    this.success$ = this.contactFacade.success$;
    this.error$ = this.contactFacade.error$;
    this.loading$ = this.contactFacade.loading$;
  }

  submitData() {
    const payload = {
      email: 'customer@example.com',
      name: 'John Doe',
      message: 'I have a question.'
    };

    this.contactFacade.dispatch(new DaffContactSubmit(payload));
  }
}
```

> In this example, three observable streams are assigned from `contactFacade`. When `submitData` is called, the facade dispatches a `DaffContactSubmit` action, which sends your data to the backend and updates the observable streams.

For more detailed information on state management, actions, and selectors, see the [State Management guide](/libs/contact/guides/state.md).

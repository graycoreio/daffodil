# @daffodil/contact
`@daffodil/contact` allows you to quickly scaffold a contact form feature in an Angular application.

## Overview
It supports drivers for a variety of ecommerce platforms, simplifying the process of integrating your UI with your platform's contact features. <!-- talk about supported platforms -->

## Installation
To install `@daffodil/contact` and its dependencies, use the following commands in the terminal.

Install with npm:
```bash
npm install @daffodil/contact @daffodil/core @ngrx/store @ngrx/effects --save
```

Install with yarn:

```bash
yarn add @daffodil/contact
```

> After installing, an ecommerce platform driver needs to be set up. We highly recommend installing the [in-memory web api](./guides/drivers.md) for fast, out-of-the-box development.

## Getting started

### Setting up the root component
1. Import the `DaffContactModule` in your root component. 
2. Import `StoreModule.forRoot({})`. This will be relevant later on when utilizing the redux and state management features of `@daffodil/contact`.

```ts
@ngModule({
  imports:[
    StoreModule.forRoot({}),
    DaffContactModule
  ]
})
```

## Usage
`@daffodil/contact` provides a `DaffContactFacade` that centralizes the complexities of the library into one place. This facade handles sending your contact form to your application's backend and can also be utilized to build your UI with behaviors common to a contact form.

To inject the facade inside your component, include an instance of `DaffContactFacade` in your component's constructor.

```ts
export class ContactComponent {
  constructor(public contactFacade: DaffContactFacade) {}
}
```

## Sending a contact form to your platform's backend
The `DaffContactFacade` is built generically, so feel free to create your own submission object that represents your app's contact form. A simple example is given below:

```ts
export interface ContactForm {
  email: string;
}
```

The `ContactForm` only contains a value of `email` and will represent the payload of data that is sent when a user submits their contact form.

## Using the facade
Once the `DaffContactFacade` has been set up in your component, it can now be used to send off your contact data.

To do so, use the `facade.dispatch()` method to dispatch a `DaffContactSubscribe<T>()` action with T being the type of submission object you are using. In addition, it will also update three observable streams of `success$`, `error$`, and `loading$`. These can be used to enhance your application's UI.

```ts
import {
  DaffContactSubscribe,
  DaffContactSubmission,
  DaffContactFacade
} from '@daffodil/contact';

export class ContactComponent implements OnInit {
  ngOnInit() {
    success$: Observable<boolean> = this.contactFacade.success$;
    error$: Observable<string> = this.contactFacade.error$;
    loading$: Observable<boolean> = this.contactFacade.loading$;
  }

  email = 'JohnDoe@email.com';

  constructor(public contactFacade: DaffContactFacade) {}

  submitData() {
    this.contactFacade.dispatch(new DaffContactSubscribe<DaffContactSubmission>(this.email));
  }
}
```

> In this example, three observable streams are assigned from `contactFacade`. Then when `submitData` is called, the `contactFacade` will call its `dispatch` function, which will send your data off to the backend and update the three observable streams.

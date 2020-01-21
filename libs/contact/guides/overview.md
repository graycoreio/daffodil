# Daffodil Contact

The `@daffodil/contact` library allows you quickly to scaffold a contact form UI feature in an Angular application. It supports drivers for a variety of ecommerce platforms in order to make connecting your UI to your platform's contact feature easy. <!-- talk about supported platforms -->

## Table of Contents

- [Getting Started](#getting-started)

  - [Setting up your AppModule](#setting-up-your-appmodule)
  - [Utilizing inside your Component](#utilizing-inside-your-component)

- [Sending a Contact Form](#sending-a-contact-form-to-your-platform's-backend)

  - [Using the facade](#using-the-facade)

- [Live Demo](#live-demo)

- [Supported Drivers](#supported-drivers)

# Getting Started

This overview assumes that you have already set up an Angular project and have gone through the [contact installation guide](./installation.md). If you have not, we recommend you do that first.

## Setting up your AppModule

To get started, import the `DaffContactModule` in your app.module. Next, import `StoreModule.forRoot({})`, which will be relevant later on when utilizing the redux and state management features of the contact module.

```typescript
@ngModule({
  imports:[
    StoreModule.forRoot({}),
    DaffContactModule
  ]
})
```

## Utilizing inside your component

The `DaffContactModule` provides a `DaffContactFacade` that wraps the complexities of the library into one place. This facade will handle sending your contact form to your application's backend and can also be utilized to build your UI with behaviors common to a contact.

To inject the facade inside your component, include an instance of `DaffContactFacade` in your component's constructor.

```typescript
export class contactComponent {
  constructor(public contactFacade: DaffContactFacade) {}
}
```

# Sending a Contact Form to your platform's backend

The `DaffContactFacade` is built generically, so feel free to create your own submission object that represents your app's contact form. A simple example is given below.

```typescript
export interface ContactForm {
  email: string;
}
```

The `ContactForm` only contains a value of `email` and will represent the payload of data that is sent when a user submits their contact form.

## Using the facade

Once the `DaffContactFacade` has been set up in your component, it can now be used to send off your contact data. To do so, use the `facade.dispatch()` method to dispatch a `DaffContactSubscribe<T>()` action with T being the type of submission object you are using. In addition, it will also update three observable streams of `success$`, `error$`, and `loading$`. These can be used to enhance your application's UI.

```typescript
import { DaffContactSubscribe, DaffContactSubmission, DaffContactFacade } from '@daffodil/contact';

export class contactComponent implements OnInit{
  ngOnInit(){
    success$: Observable<boolean> = this.contactFacade.success$;
    error$: Observable<string> = this.contactFacade.error$;
    loading$: Observable<boolean> = this.contactFacade.loading$;
  }


  email:string = "JohnDoe@email.com"

  constructor(public contactFacade: DaffContactFacade){}
  submitData(){
    this.contactFacade.dispatch(new DaffContactSubscribe<DaffContactSubmission>(this.email));
  }

}
```

> In this example, three observable streams are assigned from `contactFacade`. Then when `submitData` is called, the `contactFacade` will call its `dispatch` function which will send your data off to the backend and update the three observable streams.

# Live Demo

[Checkout a live example of the `DaffContact` library in action!]()

# Supported Drivers
- [Daffodil's In-memory-driver](./drivers/in-memory-driver.md)
- [Hubspot Form Driver](./drivers/hubspot-forms-driver.md)
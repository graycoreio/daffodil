# Daffodil Newsletter

The Daffodil Newsletter library manages your newsletter subscription service. It utilizes multiple different ecommerce API drivers to make connecting your application's newsletter simple while also providing tools to help manage your UI.
<!--talk about supported platforms--> 

## Table of Contents
- [Getting Started](#getting-started)
  - [Setting up your AppModule](#setting-up-your-appmodule)
  - [Utilizing inside your Component](#utilizing-inside-your-component)
- [Sending a Newsletter Subscription](#sending-a-newsletter-subscription)
  - [Using the facade](#using-the-facade)
- [Live Demo](#live-demo)



# Getting Started
This overview assumes that you have already set up an Angular project and have gone through the [Newsletter installation guide](). If you have not, we recommend you do that first.

## Setting up your AppModule

To get started, import the `StoreModule` and the `DaffNewsletterModule` at the top of your app.module file.
```typescript
import { DaffNewsletterModule } from '@daffodil/newsletter';
import { StoreModule } from '@ngrx/store';
```
Then import the `DaffNewsletterModule` in your app.module. Afterwards, also import `StoreModule.forRoot({})`, as this will be relevant later on when utilizing the redux and state management features of the newsletter module.

```typescript
@ngModule({
  imports:[
    DaffNewsletterModule,
    StoreModule.forRoot({})
  ]
})

```

## Utilizing inside your component

The Daffodil Newsletter Module creates a `DaffNewsletterFacade` to wrap all the complexities of the library into one place. This facade will handle sending your newsletter subscription to your application's backend and can also be configured to help assist your UI.

To utilize the facade inside your component, include an instance of `DaffNewsletterFacade` in your component's constructor.

```typescript
export class NewsletterComponent {
  constructor(public newsletterFacade: DaffNewsletterFacade) {}
}
```


# Sending a Newsletter Subscription

The `DaffNewsletterFacade` sends out an object called a `DaffNewsletterSubmission` when sending your subscription to the application's backend. 
```ts
export interface DaffNewsletterSubmission {
  email: string;
}
```
This only contains an `email` value, so either creating a `DaffNewsletterSubmission` object or just passing an email value will work. For the following example, we will just use the `DaffNewsletterSubmission`. To learn how to customize your submission, read the [customizing submission data guide]().

## Using the facade
Once the `DaffNewsletterFacade` has been set up in your component, it can now be used to send off your newsletter data. When data is sent to the backend using the `dispatch` function, it sends an object of type `DaffNewsletterSubscription`. This contains basic newsletter subscription data. In addition, it will also update three observable streams of  `success$`, `error$`, and `loading$`. These can be used to enhance your application's UI.

```typescript
import { DaffNewsletterSubscribe, DaffNewsletterSubmission, DaffNewsletterFacade } from '@daffodil/newsletter';

export class NewsletterComponent {

  success$ = this.newsletterFacade.success$;
  error$ = this.newsletterFacade.error$;
  loading$ = this.newsletterFacade.loading$;

  email:string = "JohnDoe@email.com"

  constructor(public newsletterFacade: DaffNewsletterFacade) {
  }
  submitData() {
      this.newsletterFacade.dispatch(new DaffNewsletterSubscribe<DaffNewsletterSubmission>(this.email));
  }

}
```
>In this example, three observable streams are assigned from `newsletterFacade`. Then when `submitData` is called, the `newsletterFacade` will call its `dispatch` function which will send your data off to the backend and update the three observable streams.

# Live Demo
*Coming Soon*

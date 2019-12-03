# Daffodil Newsletter

The `@daffodil/newsletter` library allows you to quickly scaffold a "newsletter" subscription UI feature in an Angular application. It supports drivers for a variety of ecommerce platforms in order to make connecting your UI to your platform's newsletter feature easy. <!-- talk about supported platforms -->

## Table of Contents

- [Getting Started](#getting-started)

  - [Setting up your AppModule](#setting-up-your-appmodule)
  - [Utilizing inside your Component](#utilizing-inside-your-component)

- [Sending a Newsletter Subscription](#sending-a-newsletter-subscription-to-your-platform's-backend)

  - [Using the facade](#using-the-facade)

- [Live Demo](#live-demo)

# Getting Started

This overview assumes that you have already set up an Angular project and have gone through the [Newsletter installation guide](./installation.md). If you have not, we recommend you do that first.

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
    StoreModule.forRoot({}),
    DaffNewsletterModule
  ]
})
```

## Utilizing inside your component

The `DaffNewsletterModule` provides a `DaffNewsletterFacade` that wraps the complexities of the library into one place. This facade will handle sending your newsletter subscription to your application's backend and and can also be utilized to build your UI with behaviors common to a newsletter.

To inject the facade inside your component, include an instance of `DaffNewsletterFacade` in your component's constructor.

```typescript
export class NewsletterComponent {
  constructor(public newsletterFacade: DaffNewsletterFacade) {}
}
```

# Sending a Newsletter Subscription to your platform's backend

The `DaffNewsletterFacade` supports sending a `DaffNewsletterSubmission` when sending a subscription to your platform's backend.

```typescript
export interface DaffNewsletterSubmission {
  email: string;
}
```

The `DaffNewsletterSubmission` is the default object and only contains a value of `email`. To learn how to customize your submission, read the [customizing submission data guide](./advanced/customizing-submission-data.md).

## Using the facade

Once the `DaffNewsletterFacade` has been set up in your component, it can now be used to send off your newsletter data. To do so, the facade will dispatch an action of type `DaffNewsletterSubscribe<T>()` with `T` being the type of submission your object you are using. In addition, it will also update three observable streams of `success$`, `error$`, and `loading$`. These can be used to enhance your application's UI.

```typescript
import { DaffNewsletterSubscribe, DaffNewsletterSubmission, DaffNewsletterFacade } from '@daffodil/newsletter';

export class NewsletterComponent implements OnInit{
  ngOnInit(){
    success$: Observable<boolean> = this.newsletterFacade.success$;
    error$: Observable<string> = this.newsletterFacade.error$;
    loading$: Observable<boolean> = this.newsletterFacade.loading$;
  }


  email:string = "JohnDoe@email.com"

  constructor(public newsletterFacade: DaffNewsletterFacade) {
  }
  submitData() {
      this.newsletterFacade.dispatch(new DaffNewsletterSubscribe<DaffNewsletterSubmission>(this.email));
  }

}
```

> In this example, three observable streams are assigned from `newsletterFacade`. Then when `submitData` is called, the `newsletterFacade` will call its `dispatch` function which will send your data off to the backend and update the three observable streams.

# Live Demo

[Checkout a live example of the `DaffNewsletter` library in action!](https://stackblitz.com/edit/daff-newsletter-example)

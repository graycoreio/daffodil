# Daffodil Newsletter

The Daffodil Newsletter library manages your newsletter subscription service. It utilizes multiple different ecommerce API drivers to make hooking in your app's newsletter simple while also providing tools to help manage your UI. 

# Getting Started
This overview assumes that you had already set up your desired daffodil modules. If you have not, first go through the [daffodil installation guide](https://github.com/graycoreio/daffodil/blob/develop/docs/INSTALLATION.md).

## Setting up your AppModule

To get started import the `StoreModule` and the `DaffNewsletterModule` at the top of your app.module file.
```typescript
import { DaffNewsletterModule } from '@daffodil/newsletter';
import { StoreModule } from '@ngrx/store;'
```
Then import the `DaffNewsletterModule` in your app.module. Afterwards, also import `StoreModule.forRoot({})`, as this will be relevant later when utilizing the redux and state management features of the newsletter module.

```typescript
@ngModule({
  imports:[
    DaffNewsletterModule,
    StoreModule.forRoot({})
  ]
})

```

## Utilizing inside your component

The Daffodil Newsletter Module creates a `DaffNewsletterFacade` to wrap all the complexities into one place. This facade will handle sending your newsletter subscription to your app's backend and can also be configured to help assist your UI.

To utilize the Newsletter Facade inside your component, include an instance of `DaffNewsletterFacade` in your component's constructor.

```typescript
export class NewsletterComponent {
  constructor(public newsletterFacade: DaffNewsletterFacade) {}
}
```


# Sending a Newsletter Subscription

<!--## Choosing what data to send-->

## Using the facade
Once the `DaffNewsletterFacade` has been set up in your component. It can now be used to send off your newsletter data. When data is sent to the backend using the `dispatch` function, it sends an object of `DaffNewsletterSubscription` which contains basic newsletter subscription data. In addition, it will also update three observable streams of  `success$`, `error$`, and `loading$`. These can be used to enhance your app's UI.

```typescript
import { DaffNewsletterSubscribe, DaffNewsletterSubmission, DaffNewsletterFacade } from '@daffodil/newsletter';

export class NewsletterComponent {

  success$ = this.newsletterFacade.success$;
  error$ = this.newsletterFacade.error$;
  loading$ = this.newsletterFacade.loading$;

  constructor(public newsletterFacade: DaffNewsletterFacade) {
  }
  submitData() {
      this.newsletterFacade.dispatch(new DaffNewsletterSubscribe<DaffNewsletterSubmission>(this.email.value));
  }

}
```
>In this example, three observable streams are assigned from `newsletterFacade`. Then when `submitData` is called the `newsletterFacade` will call it's `dispatch` function which will send your data off to the backend and update the three observable streams.

# Live Demo
Insert StackBlitz implementation here

# Daffodil Newsletter

The Daffodil Newsletter library manages your newsletter subscription service. It utilizes multiple different ecommerce API drivers to make hooking in your app's newsletter simple while also providing redux state management for your UI. 

# Getting Started
To get started import the `StoreModule` and the `DaffNewsletter` at the top of your app.module file.
```typescript
import { DaffNewsletterModule } from '@daffodil/newsletter';
import { StoreModule } from '@ngrx/store;'
```
Then import the `DaffNewsletterModule` in your app.module. Afterwards, also import `StoreModule.forRoot({})`, as this will be relevant later when utilizing the redux features of the newsletter module.

```typescript
@ngModule({
  imports:[
    DaffNewsletterModule,
    StoreModule.forRoot({})
  ]
})
```
Then to utilize the Newsletter Facade inside your component, include an instance of `DaffNewsletterFacade` in your component's constructor.

```typescript
export class NewsletterComponent {
  constructor(public newsletterFacade: DaffNewsletterFacade) {}
}
```

# Creating a payload
To include all of the information you want in your subscription, you must define a payload. To do so using the `DaffNewsletterLibrary`, you must use `DaffNewsletterSubmission` or define a class that implements it. The `DaffNewsletterSubmission` only contains one variable of `email` to be used as a standard template for the newsletter library, so it must be included in your defined payload.

```ts
import { DaffNewsletterSubmission } from '@daffodil/newsletter'

export class MyNewsletterSubmission implements DaffNewsletterSubmission {
  email: string;
  name: string;
  address: string;
}
```
Creating your own payload is *not* required. It is also fine to use the base `DaffNewsletterSubmission`.

# Sending a subscription

The Newsletter Library utilizes a packaged redux library using `ngrx` to help manage your app's UI. The state contains three values of `success$`, `error$`, and `loading$`. When the the facade dispatches an action it will update the three values to be utilized in your app.

```typescript
import { DaffNewsletterSubscribe, DaffNewsletterSubmission, DaffNewsletterFacade } from '@daffodil/newsletter';

export class NewsletterComponent {

  success$ = this.newsletterFacade.success$;
  error$ = this.newsletterFacade.error$;
  loading$ = this.newsletterFacade.loading$;

  constructor(public newsletterFacade: DaffNewsletterFacade) {
  }
  onNewsletterSubmit() {
      this.newsletterFacade.dispatch(new DaffNewsletterSubscribe<MyNewsletterSubmission>(this.email.value));
  }

}
```

In this example, three observable streams are assigned from `newsletterFacade`. Then when `onNewsletterSubmit` is called the `newsletterFacade` will dispatch a `DaffNewsletterSubscribeAction` with a payload of type `MyNewsletterSubmission` defined above to the `ngrx store` and update the redux state.

# Live Demo
Insert StackBlitz implementation here

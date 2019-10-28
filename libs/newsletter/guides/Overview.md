# Daffodil Newsletter

The Daffodil Newsletter library manages your newsletter subscription service. It utilizes multiple different ecommerce API drivers to make implementing easy. What I learned in boating school...

# Getting Started
To get started, first import the `DaffNewsletterModule` in your app.module. Followed by including the `ngrx store`, this will be relevant later when utitlizing the redux features of the newsletter module.

```typescript
@ngModule({
  imports:[
    DaffNewsletterModule
    //store stuff 
  ]
})
```
Then to utilize the Newsletter Facade inside your component, include an instance of 'DaffNewsletterFacade' in your constructor

```typescript
export class NewsletterComponent {
  constructor(public newsletterFacade: DaffNewsletterFacade) {}
}
```

# Creating a payload
To include all of the information you want in your subscription, you must define a payload. To do so using the `DaffNewsletterLibrary`, you must use `DaffNewsletterSubmission` or define a class that extends it. The `DaffNewsletterSubmission` only contains one variable of `email` to be used as a standard template for the newsletter library.

```ts
export class NewsletterSubmission extends DaffNewsletterSubmission{
  name: string;
  address: string;
}
```

# Sending a subscription

The Newsletter Library utilizes a packaged redux library using `ngrx` to help performance and simplify your app. The state contains three values of `success$`, `error$`, and `loading$`. When the the facade dispatches an action it will update the three values to be utilized in your app.

```typescript
export class NewsletterComponent {

  success$ = this.newsletterFacade.success$;
  error$ = this.newsletterFacade.error$;
  loading$ = this.newsletterFacade.loading$;

  email: FormControl = new FormControl('');

  constructor(public newsletterFacade: DaffNewsletterFacade) {
  }
  onNewsletterSubmit() {
      this.newsletterFacade.dispatch(new DaffNewsletterSubscribe<DaffNewsletterSubmission>(this.email.value));
  }

}
```

In this example, three observable streams are assigned from `DaffNewsletterFacades`. Then when `onNewsletterSubmit` is called the newsletterFacade will dispatch a `DaffNewsletterSubscribeAction` with a payload of type `DaffNewsletterSubmission` to the `ngrx store` and update state.

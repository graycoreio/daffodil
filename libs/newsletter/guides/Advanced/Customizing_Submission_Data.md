# Customizing Submission Data

## Creating a payload

To include all of the information you want in your newsletter subscription, you must define your own newsletter *payload*. A payload is going to represent all of the data necessary when subscribing to your app's newsletter. To do so using the `DaffNewsletter`, you must use `DaffNewsletterSubmission` or define a class that implements it. The `DaffNewsletterSubmission` only contains one variable of `email` to be used as a standard template for the newsletter library, so it must be included in your defined payload.

```typescript
import { DaffNewsletterSubmission } from '@daffodil/newsletter'

export class MyNewsletterSubmission implements DaffNewsletterSubmission {
  email: string;
  name: string;
  address: string;
}
```

## Utilizing your payload

Once you have defined your own newsletter payload to send to your app's backend. It can now be sent with the `newsletterFacade`'s `dispatch` function by giving the `DaffNewsletterSubscribe` a type of `MyNewsletterSubmission`.

```typescript
import { DaffNewsletterSubscribe, DaffNewsletterSubmission, DaffNewsletterFacade } from '@daffodil/newsletter';

export class NewsletterComponent {

  constructor(public newsletterFacade: DaffNewsletterFacade) {
  }

  dataToSubmit: MyNewsletterSubmission = {
    email = "johndoe@email.com",
    name = "John Doe",
    address= "1800 John Doe's street" 
  }
}


  submitData() {
      this.newsletterFacade.dispatch(new DaffNewsletterSubscribe<MyNewsletterSubmission>(this.dataToSubmit));
  }

}
```

> Creating your own payload is _not_ required. It is also fine to use the base `DaffNewsletterSubmission`.

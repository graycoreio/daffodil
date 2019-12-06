# Customizing Submission Data
Whenever you are setting up your newsletter feature within your application, you must decide what information is important for your user to include for the subscription. This guide will walk you through including your desired newsletter payload when a user submits their newsletter subscription using the DaffNewsletter library.


## Table of Contents
- [The DaffNewsletterSubmission](#the-daff-newsletter-submission)
- [Creating your own submission object](#creating-your-own-submission-object)
- [Utilizing your payload](#utilizing-your-payload)
## The DaffNewsletterSubmission

The `DaffNewsletterSubmission` is the object that holds your subscription data and gets sent to your application's backend. 
```ts
export interface DaffNewsletterSubmission {
  email: string;
}
```
It is simple and represents the baseline information needed in a subscription. It also serves as an out-of-the-box payload for submitting a newsletter subscription.


## Creating your own submission object

To customize `@daffodil/newsletter` to use your custom payload when sending a submission, you must define an object that implements the `DaffNewsletterSubmission`. The `DaffNewsletterSubmission` only contains one variable of `email` to be used as a standard template for the Newsletter library, so it must be included in your defined class.

Here is an example of creating your own payload object that implements `DaffNewsletterSubscription`.

```typescript
import { DaffNewsletterSubmission } from '@daffodil/newsletter';

export class MyNewsletterSubmission implements DaffNewsletterSubmission {
  email: string;
  name: string;
  address: string;
}
```

## Utilizing your payload

After customizing the payload, you can dispatch a `DaffNewsletterSubscribe` with your updated payload via the `DaffNewsletterFacade`'s `dispatch` method. Be sure to type the generic `DaffNewsletterSubscribe<MyNewsletterSubmission>` in order to get proper type safety.

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

  submitData() {
      this.newsletterFacade.dispatch(new DaffNewsletterSubscribe<MyNewsletterSubmission>(this.dataToSubmit));
  }
}

```

> Creating your own payload is not required. It is also fine to use the base `DaffNewsletterSubmission`.

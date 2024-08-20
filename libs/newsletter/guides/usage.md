# Usage
`@daffodil/newsletter` provides a `DaffNewsletterFacade` that centralizes the complexities of the library into one place. It manages the process of sending newsletter subscriptions to your application's backend and can also be used to build your UI with behaviors common to a newsletter.

## DaffNewsletterFacade
To inject the newsletter facade inside your component, include an instance of `DaffNewsletterFacade` in the constructor.

```ts
export class NewsletterComponent {
  constructor(public newsletterFacade: DaffNewsletterFacade) {}
}
```

Once `DaffNewsletterFacade` has been set up in your component, it can be used to send off your newsletter data.

To do so, the facade will dispatch an action of type `DaffNewsletterSubscribe<T>()` with `T` being the type of submission your object you are using. In addition, it will also update three observable streams of `success$`, `error$`, and `loading$`. These can be used to enhance your application's UI.

```ts
import {
  DaffNewsletterSubscribe,
  DaffNewsletterSubmission,
  DaffNewsletterFacade
} from '@daffodil/newsletter';

export class NewsletterComponent implements OnInit {
  constructor(public newsletterFacade: DaffNewsletterFacade) {}

  ngOnInit() {
    success$: Observable<boolean> = this.newsletterFacade.success$;
    error$: Observable<string> = this.newsletterFacade.error$;
    loading$: Observable<boolean> = this.newsletterFacade.loading$;
  }

  email = 'JohnDoe@email.com';

  submitData() {
    this.newsletterFacade.dispatch(new DaffNewsletterSubscribe<DaffNewsletterSubmission>(this.email));
  }
}
```

> In this example, three observable streams are assigned from `newsletterFacade`. Then when `submitData` is called, the `newsletterFacade` will call its `dispatch` function which will send your data off to the backend and update the three observable streams.

## DaffNewsletterSubmission
`DaffNewsletterSubmission` is the default object that holds your subscription data and gets sent to your application's backend. It's simple and represents the baseline information needed in a subscription. It also serves as an out-of-the-box payload for submitting a newsletter subscription. It only contains a value of `email`.

```ts
export interface DaffNewsletterSubmission {
  email: string;
}
```

To learn how to customize your submission, read the customizing submission data guide below.

### Customizing submission data
Whenever you are setting up your newsletter feature within your application, you must decide what information is important for your user to include for the subscription. This section will walk you through on how to include your desired newsletter payload when a user submits their subscription using `@daffodil/newsletter`.

### Creating your own submission object
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

### Utilizing your payload
After customizing the payload, you can dispatch a `DaffNewsletterSubscribe` with your updated payload via the `DaffNewsletterFacade`'s `dispatch` method. Be sure to type the generic `DaffNewsletterSubscribe<MyNewsletterSubmission>` in order to get proper type safety.

```ts
import {
  DaffNewsletterSubscribe,
  DaffNewsletterSubmission,
  DaffNewsletterFacade
} from '@daffodil/newsletter';

export class NewsletterComponent {
  constructor(public newsletterFacade: DaffNewsletterFacade) {}

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

> Creating your own payload is not required. It's also fine to use the base `DaffNewsletterSubmission`.

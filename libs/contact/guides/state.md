# State
`@daffodil/contact/state` provides a fully featured state library to streamline the management of contact form submissions and driver interaction.

## Overview
This package provides a `DaffContactFacade` that abstracts the complexities of the library into one place. This facade handles sending your contact form to your application's backend and can also be utilized to build your UI with behaviors common to a contact form.

## Set up the root component
1. Import the `DaffContactStateModule` in the root component.
2. Import `StoreModule.forRoot({})`. This will be relevant when using the redux and state management features of `@daffodil/contact`.

```ts
import { DaffContactStateModule } from '@daffodil/contact/state';

@NgModule({
  imports:[
    StoreModule.forRoot({}),
    DaffContactStateModule
  ]
})
export class AppModule {}
```

## Using the facade
To inject the facade inside a component, include an instance of `DaffContactFacade` in the component's constructor.

```ts
import { DaffContactFacade } from '@daffodil/contact/state';

@Component({})
export class ContactComponent {
  constructor(public contactFacade: DaffContactFacade) {}
}
```

Once the `DaffContactFacade` has been set up in the component, it can be used to manage contact form submissions.

## Observable streams

The `DaffContactFacade` provides the following observable streams to enhance your application's UI:

| Observable | Type | Description |
| ---------- | ---- | ----------- |
| `success$` | `Observable<boolean>` | Whether the contact form submission succeeded |
| `error$` | `Observable<DaffStateError[]>` | An array of submission errors |
| `loading$` | `Observable<boolean>` | Whether a submission is currently in progress |

Sample usage:

```ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffContactFacade } from '@daffodil/contact/state';
import { DaffStateError } from '@daffodil/core/state';

export class ContactComponent implements OnInit {
  success$: Observable<boolean>;
  error$: Observable<DaffStateError[]>;
  loading$: Observable<boolean>;

  constructor(public contactFacade: DaffContactFacade) {}

  ngOnInit() {
    this.success$ = this.contactFacade.success$;
    this.error$ = this.contactFacade.error$;
    this.loading$ = this.contactFacade.loading$;
  }
}
```

## Actions

Actions are dispatched to the store to trigger state changes. Once the `DaffContactFacade` has been set up in your component, use the `dispatch()` method to dispatch actions.

### DaffContactSubmit
Submits a contact form to the backend. The `DaffContactFacade` is built generically, so you can create your own submission object that represents your app's contact form.

```ts
import { DaffContactSubmit } from '@daffodil/contact/state';

interface ContactFormData {
  email: string;
  name?: string;
  message?: string;
}

const payload: ContactFormData = {
  email: 'customer@example.com',
  name: 'John Doe',
  message: 'I have a question about your products.'
};

this.contactFacade.dispatch(new DaffContactSubmit(payload));
```

### DaffContactSubmitSuccess
Dispatched automatically when a submission succeeds. Generally, you don't need to dispatch this manually.

```ts
import { DaffContactSubmitSuccess } from '@daffodil/contact/state';

this.contactFacade.dispatch(new DaffContactSubmitSuccess());
```

### DaffContactSubmitFailure
Dispatched automatically when a submission fails. Generally, you don't need to dispatch this manually.

```ts
import { DaffContactSubmitFailure } from '@daffodil/contact/state';

const errors = [{ code: 'NETWORK_ERROR', message: 'Failed to connect' }];
this.contactFacade.dispatch(new DaffContactSubmitFailure(errors));
```

### DaffContactRetry
Retries a failed submission with the same payload.

```ts
import { DaffContactRetry } from '@daffodil/contact/state';

const payload = {
  email: 'customer@example.com'
};

this.contactFacade.dispatch(new DaffContactRetry(payload));
```

### DaffContactCancel
Cancels an ongoing submission.

```ts
import { DaffContactCancel } from '@daffodil/contact/state';

this.contactFacade.dispatch(new DaffContactCancel());
```

### DaffContactReset
Resets the contact state to its initial state (clears success, errors, and loading states).

```ts
import { DaffContactReset } from '@daffodil/contact/state';

this.contactFacade.dispatch(new DaffContactReset());
```

## Selectors

Selectors can be used to directly access specific slices of state. The facade's observable streams use these selectors under the hood.

### selectDaffContactSuccess
Selects whether the last submission succeeded.

```ts
import { selectDaffContactSuccess } from '@daffodil/contact/state';

store.select(selectDaffContactSuccess);
```

### selectDaffContactError
Selects the array of submission errors.

```ts
import { selectDaffContactError } from '@daffodil/contact/state';

store.select(selectDaffContactError);
```

### selectDaffContactLoading
Selects whether a submission is currently in progress.

```ts
import { selectDaffContactLoading } from '@daffodil/contact/state';

store.select(selectDaffContactLoading);
```

## Example

The following example illustrates a complete contact form component using the facade, including:
- Setting up a reactive form with validation
- Subscribing to the facade's observable streams
- Dispatching submit and reset actions
- Showing loading, success, and error states in the UI

### Component

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { DaffContactFacade, DaffContactSubmit, DaffContactReset } from '@daffodil/contact/state';
import { DaffStateError } from '@daffodil/core/state';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  loading$: Observable<boolean>;
  success$: Observable<boolean>;
  error$: Observable<DaffStateError[]>;

  constructor(
    private fb: FormBuilder,
    private contactFacade: DaffContactFacade
  ) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required]
    });

    this.loading$ = this.contactFacade.loading$;
    this.success$ = this.contactFacade.success$;
    this.error$ = this.contactFacade.error$;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactFacade.dispatch(new DaffContactSubmit(this.contactForm.value));
    }
  }

  reset() {
    this.contactForm.reset();
    this.contactFacade.dispatch(new DaffContactReset());
  }
}
```

### Template

```html
<form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
  <div>
    <label>Name:</label>
    <input type="text" formControlName="name" />
  </div>

  <div>
    <label>Email:</label>
    <input type="email" formControlName="email" />
  </div>

  <div>
    <label>Phone:</label>
    <input type="tel" formControlName="phone" />
  </div>

  <div>
    <label>Message:</label>
    <textarea formControlName="message"></textarea>
  </div>

  <button type="submit" [disabled]="(loading$ | async) || !contactForm.valid">
    {{ (loading$ | async) ? 'Submitting...' : 'Submit' }}
  </button>

  <button type="button" (click)="reset()">Reset</button>

  <div *ngIf="success$ | async" class="success-message">
    Thank you! Your message has been sent successfully.
  </div>

  <div *ngIf="error$ | async as errors" class="error-message">
    <p *ngFor="let error of errors">{{ error.message }}</p>
  </div>
</form>
```

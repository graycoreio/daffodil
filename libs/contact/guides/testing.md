# Testing
`@daffodil/contact` provides a testing package accessible at `@daffodil/contact/state/testing`. It provides a mock facade to facilitate unit testing of components that use the contact state.

## Overview
The testing module provides a `MockDaffContactFacade` that can be used in place of the real `DaffContactFacade` during unit tests. This allows you to test component behavior without setting up the entire NgRx store.

## Available Testing Utilities

### DaffContactStateTestingModule
A testing module that provides the `MockDaffContactFacade` in place of the real facade.

### MockDaffContactFacade
A mock implementation of `DaffContactFacadeInterface` where all observable streams are of type `BehaviorSubject`. This allows you to control the emitted values during tests using the `next` method.

**Properties:**
- `success$: BehaviorSubject<boolean>` - Controls the success state
- `error$: BehaviorSubject<DaffStateError[]>` - Controls the error state
- `loading$: BehaviorSubject<boolean>` - Controls the loading state
- `dispatch(action: Action)` - Spy-able method for testing action dispatch

## Example

The following example demonstrates how to unit test a component using the mock facade with the Jasmine testing framework and the `jasmine-marbles` library.

### Component Under Test

`contact-form.component.ts`
```ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffContactFacade, DaffContactSubmit } from '@daffodil/contact/state';
import { DaffStateError } from '@daffodil/core/state';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
  loading$: Observable<boolean>;
  success$: Observable<boolean>;
  error$: Observable<DaffStateError[]>;

  constructor(private contactFacade: DaffContactFacade) {}

  ngOnInit() {
    this.loading$ = this.contactFacade.loading$;
    this.success$ = this.contactFacade.success$;
    this.error$ = this.contactFacade.error$;
  }

  submitForm(email: string, message: string) {
    this.contactFacade.dispatch(new DaffContactSubmit({ email, message }));
  }
}
```

### Test Spec

`contact-form.component.spec.ts`
```ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { hot } from 'jasmine-marbles';

import {
  DaffContactFacade,
  DaffContactSubmit,
} from '@daffodil/contact/state';
import {
  DaffContactStateTestingModule,
  MockDaffContactFacade,
} from '@daffodil/contact/state/testing';

describe('ContactFormComponent', () => {
  let mockContactFacade: MockDaffContactFacade;
  let fixture: ComponentFixture<ContactFormComponent>;
  let component: ContactFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormComponent],
      imports: [
        DaffContactStateTestingModule // this provides the MockDaffContactFacade
      ]
    });

    mockContactFacade = TestBed.inject(DaffContactFacade);

    spyOn(mockContactFacade, 'dispatch');

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when submitForm is called', () => {
    const email = 'test@example.com';
    const message = 'Test message';

    beforeEach(() => {
      component.submitForm(email, message);
    });

    it('should dispatch DaffContactSubmit action', () => {
      const expected = new DaffContactSubmit({ email, message });
      expect(mockContactFacade.dispatch).toHaveBeenCalledWith(expected);
    });
  });

  describe('when the form is loading', () => {
    beforeEach(() => {
      // mock facade fields are BehaviorSubjects
      // use the next method to mock stream values
      mockContactFacade.loading$.next(true);
    });

    it('should set loading$ to true', () => {
      const expected = hot('a', { a: true });
      expect(component.loading$).toBeObservable(expected);
    });
  });

  describe('when the form submission succeeds', () => {
    beforeEach(() => {
      mockContactFacade.success$.next(true);
    });

    it('should set success$ to true', () => {
      const expected = hot('a', { a: true });
      expect(component.success$).toBeObservable(expected);
    });
  });

  describe('when the form submission fails', () => {
    const errors = [
      { code: 'VALIDATION_ERROR', message: 'Email is required' }
    ];

    beforeEach(() => {
      mockContactFacade.error$.next(errors);
    });

    it('should set error$ to the error array', () => {
      const expected = hot('a', { a: errors });
      expect(component.error$).toBeObservable(expected);
    });
  });
});
```

### Key Testing Patterns

1. **Import the testing module**: Use `DaffContactStateTestingModule` to automatically provide the mock facade.

2. **Inject the mock facade**: Get a reference to the mock using `TestBed.inject(DaffContactFacade)`.

3. **Spy on dispatch**: Use `spyOn(mockContactFacade, 'dispatch')` to test that the correct actions are dispatched.

4. **Control observable values**: Use `.next()` on the BehaviorSubjects to emit test values:
   ```ts
   mockContactFacade.loading$.next(true);
   mockContactFacade.success$.next(true);
   mockContactFacade.error$.next([{ code: 'ERROR', message: 'Failed' }]);
   ```

5. **Test observables with marbles**: Use `jasmine-marbles` to test that observables emit the expected values:
   ```ts
   import { hot } from 'jasmine-marbles';

   const expected = hot('a', { a: true });
   expect(component.loading$).toBeObservable(expected);
   ```

## Testing Without Marbles

If you prefer not to use `jasmine-marbles`, you can test observables with simple subscriptions:

```ts
describe('when the form is loading', () => {
  it('should set loading$ to true', (done) => {
    mockContactFacade.loading$.next(true);

    component.loading$.subscribe(loading => {
      expect(loading).toBe(true);
      done();
    });
  });
});
```

## Additional Resources

- [Jasmine Testing Framework](https://jasmine.github.io/)
- [Jasmine Marbles](https://github.com/synaptiko/jasmine-marbles)
- [Angular Testing Guide](https://angular.io/guide/testing)

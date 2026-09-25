# @daffodil/jasmine

This packages provides some useful matchers to make testing applications with jasmine a little nicer.

## With Tests
In your `test.ts` file:


```ts
//Import Daffodil Jasmine Features
import { setup } from '@daffodil/jasmine';
setup();

declare const require: any;
```

## Marble Testing
`runMarbles` runs a callback in a fresh RxJS `TestScheduler` that asserts with jasmine's `toEqual`.

```ts
import { runMarbles } from '@daffodil/jasmine';

it('should emit', () => {
  runMarbles(({ expectObservable }) => {
    expectObservable(of(1)).toBe('(a|)', { a: 1 });
  });
});
```

If the test needs a reference to the scheduler itself (e.g. to pass it to the code under test), use `createTestScheduler` instead.

```ts
import { createTestScheduler } from '@daffodil/jasmine';

it('should debounce', () => {
  const testScheduler = createTestScheduler();

  testScheduler.run(({ cold, expectObservable }) => {
    expectObservable(cold('a').pipe(debounceTime(3, testScheduler))).toBe('---a');
  });
});
```

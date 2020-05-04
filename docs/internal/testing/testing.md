# Import Pathing Guidelines for Spec files

## The Problem
One of the difficult problems that we deal with as library authors is defining the API that we expose to consuming application developers. This essentially means one of two things:
  
  1. We provide all the library exports that we use internally to consumers
    * This is often a very bad idea for long term maintenance
  2. We provide only a subset of the libraries' exports.
    *  We can allow our consumers to use the parts of the library we intend them to use, leading to a smaller API surface.

Unfortunately, we (the authors of Daffodil) often view the world from the first perspective. We often write our internal tests depending upon `imports` that are only available to us as library authors. 

This means that the tests are from a very specific perspective, our internal view. So tests that pass for us won't necessarily pass for our consumers, as they may not have a necessary import available. Subsequently, this also means that code that works for us for example, may not work for consuming applications. 

### An Example
Consider the code in the file `my-library-function.spec.ts` in the fake package `@daffodil/library`:

```ts
import { SomeImport } from './path-to-other-import';

import { myLibraryFunction } from './my-library-function';

describe('My Library Function', () => {
  it('should work', () => {
    expect(myLibraryFunction(SomeImport)).toEqual("Something");
  });
});
```

The issue at hand here is that the `SomeImport` is not being accessed from the public-facing api of `@daffodil/library`, so we aren't adequately testing a true consumer interaction. A consuming application developer could attempt to write this same code with this exact dependency set and the code wouldn't work, because `SomeImport` may not be publicly exposed.

## The Solution

To address this problem, we have decided to assume that all code that is **not under test** comes from the public API of the package (unless the code in question is intentionally private). 

To achieve this we change the `@daffodil/library` `tsconfig.json`'s `compilerOptions.paths` to point to the public entrypoint of the package. 

As a result, we can guarantee that if `SomeImport` is meant to be public, then our unit tests will only consume it as a public import. This leads to lower maintenance overheads, and ensures better consumer-side guarantees.

```ts
import { SomeImport } from '@daffodil/library';

import { myLibraryFunction } from './my-library-function';

describe('My Library Function', () => {
  it('should work', () => {
    expect(myLibraryFunction(SomeImport)).toEqual("Something");
  });
});
```

### Improved Import Path Readability
Secondarily, this also makes package imports and maintenance much simpler. Instead of having to worry about silly path references like:

```ts
import { SomeImport } from '../../../../../some-file-far-far-away';
```

we can simply import within tests like:

```ts
import { SomeImport } from '@daffodil/library';
```


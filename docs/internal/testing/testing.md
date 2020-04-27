# Import Pathing Guidelines for Spec files

## The Problem
One of the difficult problems that we deal with as library developers is defining the API that we expose to consuming application developers. This essentially means one of two things:
  
  1. We have to provide all the library exports to consumers
    * This is often a very bad idea for long term maintenance
  2. We have to provide only a subset of the libraries' exports so that we can allow our consumers to use the parts of the library we intend them to use.
    * Smaller API surface means lower maintenance

Unfortunately, when we, the authors of Daffodil, are writing tests we are often prone to depending upon `imports` that are only available to us as library authors. This means that the tests are from a very specific perspective, our internal view. So tests that pass for us, won't necessarily pass for our consumers because they may not have an import available. Subsequently, this also means that code that actually works for in `@daffodil/demo` for example, may not work for consuming applications. 

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

The hidden problem here is that the `SomeImport` is not being accessed from the public-facing api, so we aren't adequately testing a true consumer interaction. A consuming application developer could attempt to write this example same code, with this same dependency, and the code wouldn't work, because `SomeImport` may not be a publicly available token. 

## The Solution

To address this problem, we have elected to write our unit tests as if we are looking at our code from a slightly different perspective. We assume that all code that is NOT UNDER TEST comes from the public API of the package (unless the code in question is intentionally private).

To achieve this we change the `@daffodil/library` `tsconfig.json`'s `compilerOptions.paths` to point to the public entrypoint of the package. As a result, our tests give us an additional guarantee: if `SomeImport` is meant to be public, we can guarantee that it is while we are unit testing. This leads to lower maintenance overheads, and ensures better consumer-side guarantees.

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


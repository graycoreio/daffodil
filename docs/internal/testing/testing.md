# Import Pathing Guidelines for Spec files

## The Problem
One of the difficult problems that we deal with as library authors is defining the API that we expose to consuming application developers. We could handle this problem in one of two ways:
  
  1. We provide all the library exports that we use internally to consumers
  2. We provide only a subset of the libraries' exports.

The first scenario often is a very bad idea for long term maintenance, as the library API surface is very broad and leads to extensive backwards-compatibility maintenance, which is a massive time-sink. The second is more preferred as we can allow our consumers to use the parts of the library we intend them to use, leading to a smaller API surface.

Unfortunately, unless we (the authors of the library) are very particular about preventing this problem, our code will often tend towards the first scenario. It would be wonderfully helpful if there were a mechanism to help us tend towards the narrow API in an automated and "by-default" way. Lucky for us, we can accomplish this by changing the perspective from which we write tests.

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

The issue at hand here is that the `SomeImport` is not being accessed from the public-facing api of `@daffodil/library`, so we aren't adequately testing a true consumer interaction. A consuming application developer could attempt to write this same code with this exact dependency set and the code wouldn't work if `SomeImport` isn't publicly exposed.

## The Solution

To address this problem, we have decided to assume that all code that is **not under test** comes from the public API of the package (unless the code in question is intentionally private). 

To achieve this we change the `@daffodil/library` `tsconfig.json`'s `compilerOptions.paths` to point to the public entrypoint of the package. 

As a result, we can guarantee that if `SomeImport` is meant to be public, then our unit tests will only consume it as a public import. This ensures better consumer-side guarantees.

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


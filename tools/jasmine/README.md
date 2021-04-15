# @daffodil/jasmine

This packages provides some useful matchers to make testing applications with jasmine a little nicer.

## Installation

```bash
npm install @daffodil/jasmine --save
```

## With Tests
In your `test.ts` file:


```ts
//Import Daffodil Jasmine Features
import { setup } from '@daffodil/core/testing/jasmine';
setup();

declare const require: any;
```

# Example Viewer

Example viewer provides components and tokens for dynamically rendering live Angular component examples alongside their source files in documentation pages.

## Registering examples

Each example must be registered via `provideDaffDocsExampleContent` from `@daffodil/docs`. Provide an object with:
- `id` — a unique string identifier used to reference the example in the template.
- `component` — a lazy-loaded factory function returning a `Promise` of the component type.

```ts
import { makeEnvironmentProviders } from '@angular/core';
import { provideDaffDocsExampleContent } from '@daffodil/docs';

export const provideMyExampleContent = () => makeEnvironmentProviders(provideDaffDocsExampleContent(
  {
    id: 'my-example',
    component: () => import('./my-example.component').then(c => c.MyExampleComponent),
  },
));
```

Register the provider in your route or application config:

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideMyExampleContent(),
  ],
};
```

## Providing the example service

**`provideDaffDocsExampleService` must be called or the example viewer will error at runtime.**

`provideDaffDocsExampleService` registers an implementation of `DaffDocsExampleServiceInterface`, which supplies the source file content for each example. For example, you can create a service that fetches source files from an API and register it with `provideDaffDocsExampleService`:

```ts
import {
  EnvironmentProviders,
  Injectable,
  makeEnvironmentProviders,
} from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffDocsExampleServiceInterface,
  provideDaffDocsExampleService,
} from '@daffodil/docs/example-viewer';
import { DaffDocsDesignExample } from '@daffodil/docs-utils';

@Injectable()
export class MyDocsExampleService implements DaffDocsExampleServiceInterface {
  get(example: string): Observable<DaffDocsDesignExample> {
    // return source file data for the given example ID
  }
}

export const provideMyDocsExampleService = (): EnvironmentProviders => makeEnvironmentProviders([
  MyDocsExampleService,
  provideDaffDocsExampleService(MyDocsExampleService),
]);
```

Then include it in your providers:

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideMyDocsExampleService(),
  ],
};
```

## Rendering an example

Use `DaffDocsExampleViewerComponent` in a template by passing the `example` input set to the registered example `id`:

```html
<daff-docs-example-viewer example="my-example" />
```

The component will render the live preview of the example component, and (unless in simple mode) display its source files below.

## Simple mode

Pass `[simple]="true"` to hide the source file panel and only show the live preview:

```html
<daff-docs-example-viewer example="my-example" [simple]="true" />
```

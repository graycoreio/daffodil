# Rendering Content Schema

The `DaffContentSchemaRenderer` component renders a `DaffContentSchema` to the DOM.

## Usage

Import the component and pass a schema to the `[schema]` input:

```ts
import { Component } from '@angular/core';
import { DaffContentSchema } from '@daffodil/content';
import { DaffContentSchemaRenderer } from '@daffodil/content/renderer';

@Component({
  selector: 'my-page',
  imports: [DaffContentSchemaRenderer],
  template: `<daff-schema-renderer [schema]="pageSchema" />`
})
export class MyPageComponent {
  pageSchema: DaffContentSchema = {
    type: 'elementSchema',
    element: 'div',
    children: [
      { type: 'textSchema', text: 'Hello, world!' }
    ]
  };
}
```

The renderer updates automatically when the schema changes.

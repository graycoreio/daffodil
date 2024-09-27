# Container
Container is a basic structural element that restricts page content to a specific maximum width.

## Overview
Container comes with pre-defined sizes that work well with common breakpoints. It's not responsible for providing padding or margin.

## Size
The size of a container can be defined by using the `size` property. There is no default size set.

Supported sizes: `xs | sm | md | lg | xl`

| Description | Max Width | Value  |
| ----------- | --------- | ------ |
| Extra Small | 640px     | xs     |
| Small       | 800px     | sm     |
| Medium      | 1040px    | md     |
| Large       | 1340px    | lg     |
| Extra Large | 1920px    | xl     |

<design-land-example-viewer-container example="container-sizes"></design-land-example-viewer-container>


## Usage

### Within a standalone component
To use container in a standalone component, import it directly into your custom component:

```ts
@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  standalone: true,
  imports: [
    DAFF_CONTAINER_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use container in a module, import `DaffCalloutModule` into your custom module:

```ts
import { NgModule } from '@angular/core';

import { DaffCalloutModule } from '@daffodil/design/container';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffCalloutModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.
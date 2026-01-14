# Container
Container is a structural element that restricts content to a maximum width.

## Overview
Container comes with pre-defined sizes that work well with common breakpoints. It's not responsible for providing padding or margin.

## Usage
### Within a standalone component
To use container in a standalone component, import `DAFF_CONTAINER_COMPONENTS` directly into your custom component:

```ts
import { DAFF_CONTAINER_COMPONENTS } from '@daffodil/design/container';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_CONTAINER_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use container in a module, import `DaffContainerModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffContainerModule } from '@daffodil/design/container';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffContainerModule,
  ],
})
export class CustomComponentModule { }
```

> **Warning**
>
> This method is deprecated. It's recommended to update all custom components to standalone.

## Sizes
Set a size on container using the `size` property. There is no default size.

| Size        | Max Width |
| ----------- | --------- |
| `xs`        | 640px     |
| `sm`        | 800px     |
| `md`        | 1040px    |
| `lg`        | 1340px    |
| `xl`        | 1920px    |
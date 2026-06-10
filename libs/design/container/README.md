# Container
Container is a structural element that restricts content to a maximum width.

## Overview
Container comes with pre-defined sizes that work well with common breakpoints. It's not responsible for providing padding or margin.

## Usage

Import `DAFF_CONTAINER_COMPONENTS` into your component:

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

> **Deprecation notice:**
>
> `DaffContainerModule` is deprecated. Use the standalone component imports instead.

## Sizes
Set a size on container using the `size` property. There is no default size.

| Size        | Max Width |
| ----------- | --------- |
| `xs`        | 640px     |
| `sm`        | 800px     |
| `md`        | 1040px    |
| `lg`        | 1340px    |
| `xl`        | 1920px    |
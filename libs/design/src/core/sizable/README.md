# Sizable
Sizable enforces consistent use of size across components.

## Overview

`DaffSizableDirective` applies size-specific CSS classes and validates the size in dev mode. When an size is set, the corresponding `daff-[size]` class is added.

## Supported sizes

| Alignment | CSS Class |
|---|---|
| `xs` | `.daff-xs` |
| `sm` | `.daff-sm` |
| `md` | `.daff-md` |
| `lg` | `.daff-lg` |
| `xl` | `.daff-xl` |

## Usage

Use `daffSizable` as an attribute selector:

```html
<div daffSizable size="sm">Example</div>
```

Or as an Angular host directive:

```ts
import { DaffSizableDirective } from '@daffodil/design';

@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  hostDirectives: [
    {
      directive: DaffSizableDirective,
      inputs: ['size'],
    },
  ],
})
export class CustomComponent { }
```

### Default size

Set `defaultSize` to apply an size when `size` is not explicitly provided:

```ts
constructor(private textAlignable: DaffSizableDirective) {
  this.textAlignable.defaultSize = 'left';
}
```

## Styles

Use the applied CSS class to style each size variant:

```scss
.custom-component {
  &.daff-sm {
    font-size: 0.875rem;
  }

	&.daff-md {
    font-size: 1rem;
  }
}
```

# Orientable

Orientable enforces consistent use of orientation across components.

## Overview

`DaffOrientableDirective` applies orientation-specific CSS classes and validates the orientation in dev mode. When an orientation is set, the corresponding `daff-[orientation]` class is added.

## Supported orientations

| Alignment | CSS Class |
|---|---|
| `horizontal` | `.daff-horizontal` |
| `vertical` | `.daff-vertical` |

## Usage

Use `daffOrientable` as an attribute selector:

```html
<div daffOrientable orientation="horizontal"></div>
```

Or as an Angular host directive:

```ts
import { DaffOrientableDirective } from '@daffodil/design';

@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  hostDirectives: [
    {
      directive: DaffOrientableDirective,
      inputs: ['orientation'],
    },
  ],
})
export class CustomComponent { }
```

### Default orientation

Set `defaultOrientation` to apply an orientation when `orientation` is not explicitly provided:

```ts
constructor(private orientable: DaffOrientableDirective) {
  this.orientable.defaultOrientation = 'vertical';
}
```

## Styles

Use the applied CSS class to style each orientation variant:

```scss
.custom-component {
  &.daff-vertical {
    display: flex;
    flex-direction: column;
  }
}
```

## Warnings

A console warning is shown in dev mode if a value is not part of the supported orientations.
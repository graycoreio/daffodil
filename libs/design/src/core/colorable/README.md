# Colorable

Colorable enforces consistent use of color across components.

## Overview

`DaffColorableDirective` applies color-specific CSS classes and validates the color in dev mode. When a color is set, the corresponding `daff-[color]` class is added.

## Supported colors

| Color | CSS Class |
|---|---|
| `primary` | `.daff-primary` |
| `secondary` | `.daff-secondary` |
| `tertiary` | `.daff-tertiary` |
| `light` | `.daff-light` |
| `dark` | `.daff-dark` |
| `theme` | `.daff-theme` |
| `theme-contrast` | `.daff-theme-contrast` |

## Usage

Use `daffColorable` as an attribute selector:

```html
<div daffColorable [color]="'primary'">Colored content</div>
```

Or as an Angular host directive:

```ts
import { DaffColorableDirective } from '@daffodil/design';

@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  hostDirectives: [
    {
      directive: DaffColorableDirective,
      inputs: ['color'],
    },
  ],
})
export class CustomComponent { }
```

### Setting a default color

Set `defaultColor` to apply a color when `color` is not explicitly provided:

```ts
constructor(private colorable: DaffColorableDirective) {
  this.colorable.defaultColor = 'primary';
}
```

## Styling

Use the applied CSS class to style each color variant:

```scss
.custom-component {
  &.daff-primary {
    background: theme.daff-color($primary, 10);
    color: daff-color($primary, 90);
  }
}
```

## Warnings

A console warning is shown in dev mode if a color is not part of the supported colors.
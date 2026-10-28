# Sticky

Sticky tracks when a sticky element becomes pinned so it can be styled differently.

## Overview

`DaffStickyTrackerDirective` applies the `is-pinned` CSS class when a sticky element is pinned to the top or bottom of its scroll container, and removes it when the element returns to its normal position.

The directive doesn't make an element sticky. Use `position: sticky` in your styles to do that.

## Usage

Use `daffStickyTracker` as an attribute selector and set `sticky` to the edge the element sticks to:

```ts
import { DaffStickyTrackerDirective } from '@daffodil/design';

@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  imports: [
    DaffStickyTrackerDirective,
  ],
})
export class CustomComponent { }
```

```html
<div daffStickyTracker sticky="top" class="custom-header">Header</div>
```

| Value | Description |
|---|---|
| `top` | The element sticks to the top of its scroll container. |
| `bottom` | The element sticks to the bottom of its scroll container. |

## Styling

Use `position: sticky` to make the element sticky, and the applied CSS class to style the pinned state:

```scss
.custom-header {
  position: sticky;
  top: 0;

  &.is-pinned {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
}
```

## Example

<daff-docs-example-viewer example="basic-sticky"></daff-docs-example-viewer>

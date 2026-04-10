# Compactable

Compactable enforces consistent use of the compact property across components.

## Overview

`DaffCompactableDirective` applies the `daff-compact` CSS class when `compact` is `true`.

## Usage

Use `daffCompactable` as an attribute selector:

```html
<div daffCompactable [compact]="true">Content</div>
```

Or as an Angular host directive:

```ts
import { DaffCompactableDirective } from '@daffodil/design';

@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  hostDirectives: [
    {
      directive: DaffCompactableDirective,
      inputs: ['compact'],
    },
  ],
})
export class CustomComponent { }
```

## Styling

Use the applied CSS class to style the compact variant:

```scss
.custom-component {
  padding: 0.5rem 1rem;

  &.daff-compact {
    padding: 0.25rem 0.5rem;
  }
}
```
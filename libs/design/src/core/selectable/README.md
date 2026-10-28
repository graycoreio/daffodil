# Selectable

Selectable enforces consistent use of the selected state across components.

## Overview

`DaffSelectableDirective` applies the `daff-selected` CSS class when `selected` is `true`.

## Usage

Use `daffSelected` as an attribute selector:

```html
<div daffSelected [selected]="true">Content</div>
```

Or as an Angular host directive:

```ts
import { DaffSelectableDirective } from '@daffodil/design';

@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  hostDirectives: [
    {
      directive: DaffSelectableDirective,
      inputs: ['selected'],
    },
  ],
})
export class CustomComponent { }
```

### Selecting and deselecting

Call `select()` or `deselect()` to change the selected state from your component. `select()` also emits the `becameSelected` event:

```ts
constructor(private selectable: DaffSelectableDirective) {}

onClick() {
  this.selectable.select();
}
```

## Styling

Use the applied CSS class to style the selected variant:

```scss
.custom-component {
  border-bottom: 2px solid transparent;

  &.daff-selected {
    border-bottom-color: currentColor;
  }
}
```

# Disableable

Disableable enforces consistent use of the disabled property across components.

## Overview

`DaffDisableableDirective` applies the `daff-disabled` CSS class when `disabled` is `true`.

## Usage

Use `daffDisableable` as an attribute selector:

```html
<div daffDisableable [disabled]="true">Content</div>
```

Or as an Angular host directive:

```ts
import { DaffDisableableDirective } from '@daffodil/design';

@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  hostDirectives: [
    {
      directive: DaffDisableableDirective,
      inputs: ['disabled'],
    },
  ],
})
export class CustomComponent { }
```

## Styling

Use the applied CSS class to style the disabled variant:

```scss
.custom-component {
  &.daff-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
```

# Statusable

Statusable enforces consistent use of status across components.

## Overview

`DaffStatusableDirective` applies status-specific CSS classes and validates the status in dev mode. When a status is set, the corresponding `daff-[status]` class is added.

## Supported statuses

| Status | CSS Class |
|---|---|
| `info` | `.daff-info` |
| `warn` | `.daff-warn` |
| `critical` | `.daff-critical` |
| `success` | `.daff-success` |

## Usage

Use `daffStatusable` as an attribute selector:

```html
<div daffStatusable [status]="'critical'">Status content</div>
```

Or as an Angular host directive:

```ts
import { DaffStatusableDirective } from '@daffodil/design';

@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  hostDirectives: [
    {
      directive: DaffStatusableDirective,
      inputs: ['status'],
    },
  ],
})
export class CustomComponent { }
```

### Setting a default status

Set `defaultStatus` to apply a status when `status` is not explicitly provided:

```ts
constructor(private statusable: DaffStatusableDirective) {
  this.statusable.defaultStatus = 'info';
}
```

## Styling

Use the applied CSS class to style each status variant:

```scss
.custom-component {
  &.daff-critical {
    background: daff-color($critical, 10);
    color: daff-color($critical, 90);
  }
}
```

## Warnings

A console warning is shown in dev mode if a status value is not part of the supported statuses.

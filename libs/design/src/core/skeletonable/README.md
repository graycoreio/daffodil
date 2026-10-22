# Skeletonable

Skeletonable enforces consistent use of the skeleton loading state across components.

## Overview

`DaffSkeletonableDirective` applies the `daff-skeleton` CSS class when `skeleton` is `true`. Use it to show a placeholder screen while content is loading.

## Usage

Use `daffSkeletonable` as an attribute selector:

```html
<div daffSkeletonable [skeleton]="true">Content</div>
```

Or as an Angular host directive:

```ts
import { DaffSkeletonableDirective } from '@daffodil/design';

@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  hostDirectives: [
    {
      directive: DaffSkeletonableDirective,
      inputs: ['skeleton'],
    },
  ],
})
export class CustomComponent { }
```

## Styling

Use the applied CSS class with the `skeleton-screen` mixin to style the loading state:

```scss
@use '@daffodil/design/scss/state';

.custom-component {
  &.daff-skeleton {
    @include state.skeleton-screen(10rem, 2rem, 0.25rem);
  }
}
```

The `skeleton-screen` mixin takes a width, a height, and an optional border radius.

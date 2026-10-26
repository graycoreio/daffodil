# Prefix Suffix

Prefix and suffix place content before or after the main content of a component.

## Overview

`DaffPrefixDirective` applies the `daff-prefix` CSS class and `DaffSuffixDirective` applies the `daff-suffix` CSS class. Components that support them position the content in the right place, usually as a leading or trailing icon.

## Supported components

| Component | Prefix | Suffix |
|---|---|---|
| [Badge](/libs/design/badge/README.md) | ✓ | |
| [Button](/libs/design/button/README.md) | ✓ | ✓ |
| [Form field](/libs/design/form-field/README.md) | ✓ | ✓ |
| [List](/libs/design/list/README.md) | ✓ | |
| [Menu](/libs/design/menu/README.md) | ✓ | |
| [Notification](/libs/design/notification/README.md) | ✓ | |
| [Tabs](/libs/design/tabs/README.md) | ✓ | ✓ |
| [Tag](/libs/design/tag/README.md) | ✓ | |
| [Toast](/libs/design/toast/README.md) | ✓ | |

## Usage

Import the directives into your component:

```ts
import {
  DaffPrefixDirective,
  DaffSuffixDirective,
} from '@daffodil/design';

@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  imports: [
    DaffPrefixDirective,
    DaffSuffixDirective,
  ],
})
export class CustomComponent { }
```

Or import both at once with `DAFF_PREFIX_SUFFIX_DIRECTIVES`:

```ts
import { DAFF_PREFIX_SUFFIX_DIRECTIVES } from '@daffodil/design';

@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  imports: [
    DAFF_PREFIX_SUFFIX_DIRECTIVES,
  ],
})
export class CustomComponent { }
```

Add `daffPrefix` or `daffSuffix` to an element inside a supported component:

```html
<button daff-button>
  <fa-icon daffPrefix [icon]="faPlus"></fa-icon>
  Add to cart
</button>
```

## Adding prefix and suffix support to a custom component

Use `ng-content` to place prefix and suffix content in your component's template:

```html
<ng-content select="[daffPrefix]"></ng-content>
<div class="custom-component__content">
  <ng-content></ng-content>
</div>
<ng-content select="[daffSuffix]"></ng-content>
```

## Styling

Use the applied CSS classes to style prefix and suffix content:

```scss
.custom-component {
  display: flex;
  align-items: center;

  .daff-prefix {
    margin-right: 0.5rem;
  }

  .daff-suffix {
    margin-left: 0.5rem;
  }
}
```

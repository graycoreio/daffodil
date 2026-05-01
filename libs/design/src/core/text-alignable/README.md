# Text Alignable

Text alignable enforces consistent use of text alignment across components.

## Overview

`DaffTextAlignableDirective` applies alignment-specific CSS classes and validates the alignment in dev mode. When an alignment is set, the corresponding `daff-[alignment]` class is added.

## Supported alignments

| Alignment | CSS Class |
|---|---|
| `left` | `.daff-left` |
| `center` | `.daff-center` |
| `right` | `.daff-right` |

## Usage

Use `daffTextAlignable` as an attribute selector:

```html
<div daffTextAlignable textAlignment="center">Aligned text</div>
```

Or as an Angular host directive:

```ts
import { DaffTextAlignableDirective } from '@daffodil/design';

@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  hostDirectives: [
    {
      directive: DaffTextAlignableDirective,
      inputs: ['textAlignment'],
    },
  ],
})
export class CustomComponent { }
```

### Default alignment

Set `defaultAlignment` to apply an alignment when `textAlignment` is not explicitly provided:

```ts
constructor(private textAlignable: DaffTextAlignableDirective) {
  this.textAlignable.defaultAlignment = 'left';
}
```

## Styles

Use the applied CSS class to style each alignment variant:

```scss
.custom-component {
  &.daff-center {
    text-align: center;
		margin: 0 auto;
  }
}
```

## Warnings

A console warning is shown in dev mode if a value is not part of the supported alignments.

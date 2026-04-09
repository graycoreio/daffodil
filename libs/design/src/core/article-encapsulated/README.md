# Article Encapsulated

Article encapsulated is a directive that prevents article styles from bleeding into custom components nested within an article.

## Overview

When custom components are placed within [DaffArticleComponent](/libs/design/article/README.md), the article's styles may unintentionally affect the component's internal elements. The directive adds the `daff-ae` class to the component or container it's applied to, encapsulating it from the article's styles.

## Usage

Use `daffArticleEncapsulated` as an attribute selector:

```ts
import { DaffArticleEncapsulatedDirective } from '@daffodil/design';

@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  imports: [
    DaffArticleEncapsulatedDirective,
  ],
})
export class CustomComponent { }
```

```html
<h3 daffArticleEncapsulated></h3>
```

Or as an Angular host directive:

```ts
@Component({
  selector: 'custom-component',
  template: 'custom-component.html',
  hostDirectives: [
    {
      directive: DaffArticleEncapsulatedDirective,
    },
  ],
})
export class CustomComponent { }
```

## Example

`DaffArticleComponent` styles descendant headings with specific font sizes, weights, and margins. Without encapsulation, a pricing card nested inside an article would inherit those heading styles, breaking the card's layout:

<daff-docs-example-viewer example="basic-article-encapsulated"></daff-docs-example-viewer>
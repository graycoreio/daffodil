# Text Snippet
A text snippet is used to display a section of text with the ability to show or hide content beyond one line of text.

## Overview
Text snippets provide a way to show previews of long content while allowing users to expand and read the full text when needed. They help condense screen space by truncating long text blocks such as product descriptions, reviews, or articles. By default, content is displayed in condensed mode with a toggle button to expand or collapse the full text.

<design-land-example-viewer-container example="basic-text-snippet"></design-land-example-viewer-container>

## Best practices

**When to use**
- Displaying long content that might overwhelm the interface
- Providing previews of product descriptions, reviews, or articles

## Usage
To use text snippet, import `DaffTextSnippetComponent` directly into your custom component:

```ts
import { DaffTextSnippetComponent } from '@daffodil/design/text-snippet';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DaffTextSnippetComponent,
  ],
})
export class CustomComponent {}
```

## Content options
Text snippet supports two ways of providing content.

- For text managed in a CMS or returned from an API, pass the content through the `html` input:

```html
<daff-text-snippet [html]="categoryDescription"></daff-text-snippet>
```

- For text written directly in a template, place the content inside the component:

```html
<daff-text-snippet>
  Category description
</daff-text-snippet>
```

## Accessibility
Text snippet provides built-in support for assistive technologies:

- The toggle button includes the `aria-expanded` attribute, which reflects whether the snippet is currently expanded (`true`) or condensed (`false`).
- The button label dynamically switches between "Show More" and "Show Less" to provide clear context for screen reader users.
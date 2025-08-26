# Text snippet
Text snippet is used to display a section of text, with the ability to show or hide content beyond one line of text. 

## Overview
Text snippet is useful for showing previews of long content while allowing the user to expand and read the full text. It can be used to truncate long text blocks such as product descriptions, reviews, or articles. By default, the condensed mode is displayed with a toggle button to expand or collapse the full text.

<design-land-example-viewer-container example="basic-text-snippet"></design-land-example-viewer-container>

## Usage

### Within a standalone component
To use a text snippet in a standalone component, import `DaffTextSnippetComponent` directly into your custom component:

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
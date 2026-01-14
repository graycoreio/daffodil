# Article
Article provides styles for common HTML elements to create readable, well-formatted content pages.

## Overview
Article is designed for content pages that display large blocks of text-driven information.

## Usage

### Within a standalone component
To use article in a standalone component, import `DAFF_ARTICLE_COMPONENTS` directly into your custom component:

```ts
import { DAFF_ARTICLE_COMPONENTS } from '@daffodil/design/article';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_ARTICLE_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use article in a module, import `DaffArticleModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffArticleModule } from '@daffodil/design/article';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffArticleModule,
  ],
})
export class CustomComponentModule { }
```

> **Warning**
>
> This method is deprecated. It's recommended to update all custom components to standalone.

## Custom elements

### Meta
Meta displays article metadata such as author name and date. It's a custom directive, not a native element selector. To use it, add `daffArticleMeta` to a paragraph (`<p>`).

<design-land-example-viewer-container example="article-meta"></design-land-example-viewer-container>

## Features

### Heading anchor
`<h2>`, `<h3>`, and `<h4>` headings include an anchor link that directs users to that section and a copy button that copies the heading URL to the clipboard. To disable this, add a `nolink` attribute to the heading element.

<design-land-example-viewer-container example="article-headings"></design-land-example-viewer-container>

### Code copy
Code blocks include a copy button by default. To disable this, add a `nocopy` attribute to the `pre` element.

#### Inline code
<design-land-example-viewer-container example="article-code-inline"></design-land-example-viewer-container>

#### Code blocks
<design-land-example-viewer-container example="article-code-block"></design-land-example-viewer-container>

### Encapsulation
Articles support custom components like [accordion](/libs/design/accordion/README.md), [hero](/libs/design/hero/README.md), or [callout](/libs/design/callout/README.md). Unlike typical HTML elements (`<p>`, `<ol>`, `<ul>`, etc), these components must be style encapsulated to prevent article styles from bleeding into their content.

The following Daffodil Design components are already encapsulated and can be used directiy:
- Accordion
- Breadcrumb
- Button
- Callout
- Card
- Hero
- Link Set
- List
- Media Gallery
- Notification
- Tag
- Toast
- Tree

For custom components, use the `DaffArticleEncapsulatedDirective` to prevent article styles from bleeding in.

## Styled HTML elements

### Table
<design-land-example-viewer-container example="article-table"></design-land-example-viewer-container>

### Lists

#### Unordered list
<design-land-example-viewer-container example="article-ul"></design-land-example-viewer-container>

#### Ordered list
<design-land-example-viewer-container example="article-ol"></design-land-example-viewer-container>

### Horizontal rules
<design-land-example-viewer-container example="article-hr"></design-land-example-viewer-container>

### Blockquote
<design-land-example-viewer-container example="article-blockquote"></design-land-example-viewer-container>
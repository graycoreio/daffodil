# Article
Article provides styles to common element selectors to create an article in a content page.

## Overview
Article can be used on any content page that displays large blocks of text-driven information. It's meant to be used as a standalone element and should not be nested inside any other components that may change the background color from the anticipated one. In the event that you must nest an article inside another component, please ensure that you set the article's background color to the default body color.

## Supported elements

### Headings
<design-land-example-viewer-container example="article-headings"></design-land-example-viewer-container>

### Article Meta
Meta is used if there is metadata information about your article (i.e. author name, date, etc). Meta is a custom directive of article and is not a native element selector. To use it, add `daffArticleMeta` to a paragraph (`<p>`).

<design-land-example-viewer-container example="article-meta"></design-land-example-viewer-container>

### Link
The link style in an article uses the default browser link style.

<design-land-example-viewer-container example="article-link"></design-land-example-viewer-container>

### Table
<design-land-example-viewer-container example="article-table"></design-land-example-viewer-container>

### Lists

#### Unordered list
<design-land-example-viewer-container example="article-ul"></design-land-example-viewer-container>

#### Ordered list
<design-land-example-viewer-container example="article-ol"></design-land-example-viewer-container>

### Code
These are styles for inline and multiline blocks of code.

#### Inline code
<design-land-example-viewer-container example="article-code-inline"></design-land-example-viewer-container>

#### Code blocks
<design-land-example-viewer-container example="article-code-block"></design-land-example-viewer-container>

### Horizontal rules
<design-land-example-viewer-container example="article-hr"></design-land-example-viewer-container>

### Blockquote
<design-land-example-viewer-container example="article-blockquote"></design-land-example-viewer-container>

## Encapsulation
Articles also support other custom "non-native" components like [accordions](/libs/design/accordion/README.md), [media galleries](/libs/design/media-gallery/README.md), and [lists](/libs/design/list/README.md). Unlike typical HTML (`<p>`, `<ol>`, `<ul>`, etc) content, these components must be style encaspulated to prevent article styles bleeding down from the article into their content. Many Daffodil components support this out of the box. If you have a custom component that you would like to place inside an article, you can use the `DaffArticleEncapsulatedDirective` on your component to prevent article styles bleeding into your component.

## Usage

### Within a standalone component
To use article in a standalone component, import it directly into your custom component:

```ts
@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  standalone: true,
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

> This method is deprecated. It's recommended to update all custom components to standalone.

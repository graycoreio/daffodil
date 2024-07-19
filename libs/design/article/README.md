# Article
Article provides styles to common element selectors to create an article in a content page.

## Overview
Article can be used on any content page that displays large blocks of text-driven information. It's meant to be used as a standalone element and should not be nested inside any other components that may change the background color from the anticipated one. In the event that you must nest an article inside another component, please ensure that you set the article's background color to the default body color.

## Supported elements

### Headings
<daff-docs-example-viewer-container-ce example="article-headings"></daff-docs-example-viewer-container-ce>

### Article Meta
Meta is used if there is metadata information about your article (i.e. author name, date, etc). Meta is a custom directive of article and is not a native element selector. To use it, add `daffArticleMeta` to a paragraph (`<p>`).

<daff-docs-example-viewer-container-ce example="article-meta"></daff-docs-example-viewer-container-ce>

### Link
The link style in an article uses the default browser link style.

<daff-docs-example-viewer-container-ce example="article-link"></daff-docs-example-viewer-container-ce>

### Table
<daff-docs-example-viewer-container-ce example="article-table"></daff-docs-example-viewer-container-ce>

### Lists

#### Unordered list
<daff-docs-example-viewer-container-ce example="article-ul"></daff-docs-example-viewer-container-ce>

#### Ordered list
<daff-docs-example-viewer-container-ce example="article-ol"></daff-docs-example-viewer-container-ce>

### Code
These are styles for inline and multiline blocks of code.

#### Inline code
<daff-docs-example-viewer-container-ce example="article-code-inline"></daff-docs-example-viewer-container-ce>

#### Code blocks
<daff-docs-example-viewer-container-ce example="article-code-block"></daff-docs-example-viewer-container-ce>

### Horizontal rules
<daff-docs-example-viewer-container-ce example="article-hr"></daff-docs-example-viewer-container-ce>

### Blockquote
<daff-docs-example-viewer-container-ce example="article-blockquote"></daff-docs-example-viewer-container-ce>

## Encapsulation
Articles also support other custom "non-native" components like [accordions](/libs/design/accordion/README.md), [media galleries](/libs/design/media-gallery/README.md), and [lists](/libs/design/list/README.md). Unlike typical HTML (`<p>`, `<ol>`, `<ul>`, etc) content, these components must be style encaspulated to prevent article styles bleeding down from the article into their content. Many Daffodil components support this out of the box. If you have a custom component that you would like to place inside an article, you can use the `DaffArticleEncapsulatedDirective` on your component to prevent article styles bleeding into your component.

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

> This method is deprecated. It's recommended to update all custom components to standalone.

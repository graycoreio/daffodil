# Article
Article provides styles to common element selectors to create an article in a content page.

## Overview
Article can be used on any content page that displays large blocks of text-driven information. It's meant to be used as a standalone element and should not be nested inside any other components that may change the background color from the anticipated one. In the event that you must nest an article inside another component, please ensure that you set the article's background color to the default body color.

## Headings
<design-land-example-viewer-container example="article-headings"></design-land-example-viewer-container>

## Article Lead
Lead is used as the opening paragraph to provide a summary or leading information for an article. Lead is a custom directive of article and is not a native element selector. To use it, add `daffArticleLead` to a paragraph (`<p>`).

<design-land-example-viewer-container example="article-lead"></design-land-example-viewer-container>

## Article Meta
Meta is used if there is metadata information about your article (i.e. author name, date, etc). Meta is a custom directive of article and is not a native element selector. To use it, add `daffArticleMeta` to a paragraph (`<p>`).

<design-land-example-viewer-container example="article-meta"></design-land-example-viewer-container>

## Link
The link style in an article uses the default browser link style.

<design-land-example-viewer-container example="article-link"></design-land-example-viewer-container>

<h2>Table</h2>
<design-land-example-viewer-container example="article-table"></design-land-example-viewer-container>

## Lists

### Unordered List
<design-land-example-viewer-container example="article-ul"></design-land-example-viewer-container>

### Ordered List
<design-land-example-viewer-container example="article-ol"></design-land-example-viewer-container>

## Code
These are styles for inline and multiline blocks of code.

### Inline code
<design-land-example-viewer-container example="article-code-inline"></design-land-example-viewer-container>

### Code blocks
<design-land-example-viewer-container example="article-code-block"></design-land-example-viewer-container>

## Horizontal Rules
<design-land-example-viewer-container example="article-hr"></design-land-example-viewer-container>

## Blockquote
<design-land-example-viewer-container example="article-blockquote"></design-land-example-viewer-container>
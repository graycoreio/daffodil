# Article
Daffodil's article component provides styles to common element selectors to create an article in a content page.

## About
The article component can be used on any content pages that displays large blocks of text-driven information. It is meant to be used as a standalone element. It should not be nested inside any other components that may change the background color from the anticipated one. In the event that you must nest the article inside another component, please ensure that you set the article's background color to the default body color.

## Headings
<design-land-example-viewer example="article-headings"></design-land-example-viewer>

## Article Lead
Lead is used for the opening paragraph of an article. It should be used to provide a summary or leading information for an article. Lead is a custom directive of article and is not a native element selector. To use it, add `daffArticleLead` to a paragraph (`<p>`)

<design-land-example-viewer example="article-lead"></design-land-example-viewer>

## Link
The link style in an article uses the default browser link style.

<design-land-example-viewer example="article-link"></design-land-example-viewer>

## Lists

### Unordered List
<design-land-example-viewer example="article-ul"></design-land-example-viewer>

### Ordered List
<design-land-example-viewer example="article-ol"></design-land-example-viewer>

## Code
These are styles for inline and multiline blocks of code.

### Inline code
<design-land-example-viewer example="article-code-inline"></design-land-example-viewer>

### Code blocks
<design-land-example-viewer example="article-code-block"></design-land-example-viewer>

## Horizontal Rules
<design-land-example-viewer example="article-hr"></design-land-example-viewer>

## Blockquote
<design-land-example-viewer example="article-blockquote"></design-land-example-viewer>
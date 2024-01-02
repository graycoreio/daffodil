# Paginator
Paginator is used to break up large amounts of content into multiple pages, enabling users to easily navigate between pages of content.

## Truncation
An ellipsis is used to truncate pages when the number of pages exceed the maximum display limit. Double truncation appears when the current page is separated by more than three pages from both the first and last page.

## Accessibility
Use `aria-label` or `aria-labelledby` to give a meaningful label to `daff-paginator` that describes the content controlled by the paginator. If more than one paginator component is used on a page, each will need a unique `aria-label`.

## Usage
<design-land-example-viewer-container example="basic-paginator"></design-land-example-viewer-container>
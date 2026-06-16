# Paginator
Pagination organizes and divides large amounts of content on separate pages and gives the user control over how much content they want to view on each page.

## Overview
Pagination can be used with a data table or on a page. It automatically truncates page numbers when there are many pages, using ellipses to indicate skipped pages.

<daff-docs-example-viewer example="basic-paginator"></daff-docs-example-viewer>

## Best practices

**When to use**
- Displaying large datasets or lists that would be overwhelming on a single page
- Navigating through search results or product listings
- Breaking up long-form content into manageable sections

**When not to use**
- Do not use it to display linear journeys, for example, in a form progression. Instead, use the [Progress Bar](/libs/design/progress-bar/README.md) or [Button](/libs/design/button/README.md) components to navigate forward and backward.

## Usage

Import `DAFF_PAGINATOR_COMPONENTS` into your component:

```ts
import { DAFF_PAGINATOR_COMPONENTS } from '@daffodil/design/paginator';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_PAGINATOR_COMPONENTS,
  ],
})
export class CustomComponent {}
```

> **Deprecation notice:**
> 
> `DaffPaginatorModule` is deprecated. Use the standalone component imports instead.

## Anatomy
A paginator is a single navigation element labeled for the content it controls:

```html
<daff-paginator aria-label="Search results page"></daff-paginator>
```

## Features

### Truncation
Ellipses are used to truncate page numbers when the total number of pages exceeds the maximum display limit. Double truncation appears when the current page is separated by more than three pages from both the first and last page.

## Accessibility

### Built-in behavior
- `role="navigation"` on the paginator element to ensure proper semantic structure

### Developer responsibilities
- Use `aria-label` or `aria-labelledby` to give `<daff-paginator>` a meaningful label that describes the content it controls
- If more than one paginator is used on a page, give each one a unique `aria-label`

```html
<daff-paginator aria-label="Product list paginator">
  <!-- paginator content -->
</daff-paginator>

<daff-paginator aria-label="Search results paginator">
  <!-- paginator content -->
</daff-paginator>
```
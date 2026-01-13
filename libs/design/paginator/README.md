# Paginator
Pagination organizes and divides large amounts of content on separate pages and gives the user control over how much content they want to view on each page.

## Overview
Pagination can be used with a data table or on a page. It automatically truncates page numbers when there are many pages, using ellipses to indicate skipped pages.

<design-land-example-viewer-container example="basic-paginator"></design-land-example-viewer-container>

## Best practices

**When to use**
- Displaying large datasets or lists that would be overwhelming on a single page
- Navigating through search results or product listings
- Breaking up long-form content into manageable sections

**When not to use**
- Do not use it to display linear journeys, for example, in a form progression. Instead, use the [progress bar](/libs/design/progress-bar/README.md) or [button](/libs/design/button/README.md) components to navigate forward and backward.

## Usage

### Within a standalone component
To use paginator in a standalone component, import `DAFF_PAGINATOR_COMPONENTS` directly into your custom component:

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

### Within a module (deprecated)
To use paginator in a module, import `DaffPaginatorModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffPaginatorModule } from '@daffodil/design/paginator';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffPaginatorModule,
  ],
})
export class CustomComponentModule { }
```

> **Warning**
>
> This method is deprecated. It's recommended to update all custom components to standalone.

## Features

### Truncation
Ellipses are used to truncate page numbers when the total number of pages exceeds the maximum display limit. Double truncation appears when the current page is separated by more than three pages from both the first and last page.

## Accessibility

### Daffodil provides
`role="navigation"` on the paginator element to ensure proper semantic structure.

### Developer responsibilities
Use `aria-label` or `aria-labelledby` to give a meaningful label to `<daff-paginator>` that describes the content controlled by the paginator. If more than one paginator is used on a page, each will need a unique `aria-label`.

```html
<daff-paginator aria-label="Product list paginator">
  <!-- paginator content -->
</daff-paginator>

<daff-paginator aria-label="Search results paginator">
  <!-- paginator content -->
</daff-paginator>
```
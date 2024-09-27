# Paginator
Paginator is used to break up large amounts of content into multiple pages, enabling users to easily navigate between pages of content.

## Default Paginator
<design-land-example-viewer-container example="basic-paginator"></design-land-example-viewer-container>

## Usage

### Within a standalone component
To use paginator in a standalone component, import `DAFF_PAGINATOR_COMPONENTS` directly into your custom component:

```ts
@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  standalone: true,
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

> This method is deprecated. It's recommended to update all custom components to standalone.

## Truncation
An ellipsis is used to truncate pages when the number of pages exceed the maximum display limit. Double truncation appears when the current page is separated by more than three pages from both the first and last page.

## Accessibility
Use `aria-label` or `aria-labelledby` to give a meaningful label to `daff-paginator` that describes the content controlled by the paginator. If more than one paginator component is used on a page, each will need a unique `aria-label`.
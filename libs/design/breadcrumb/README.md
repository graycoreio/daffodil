# Breadcrumb
A breadcrumb is a secondary navigation pattern that shows users their current location within a website or application's hierarchy.

## Overview
Breadcrumbs visually represent the navigational structure of a site or app and help users navigate to parent levels with ease. Each breadcrumb item corresponds to a level in the hierarchy, with the last item indicating the current page or context.

<design-land-example-viewer-container example="basic-breadcrumb"></design-land-example-viewer-container>

## Best practices

**When to use**
- Your site has a hierarchical structure with multiple levels
- Users need to understand their location within the site
- You want to provide quick navigation to parent pages

## Usage

### Within a standalone component
To use breadcrumb in a standalone component, import `DAFF_BREADCRUMB_COMPONENTS` directly into your custom component:

```ts
import { DAFF_BREADCRUMB_COMPONENTS } from '@daffodil/design/breadcrumb';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_BREADCRUMB_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use breadcrumb in a module, import `DaffBreadcrumbModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffBreadcrumbModule } from '@daffodil/design/breadcrumb';
import { CustomComponent } from './custom.component';

@NgModule({
  declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffBreadcrumbModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Anatomy
A breadcrumb consists of the following components:

### Container
**`[daff-breadcrumb]`**: The wrapper that groups all breadcrumb items together. Applied to an `<ol>` element.

### Item
**`[daffBreadcrumbItem]`**: Individual breadcrumb element within the navigation path. Applied to a `<li>` element.

### Basic structure
```html
<ol daff-breadcrumb>
  <li daffBreadcrumbItem>
    <a routerLink="/">Home</a>
  </li>
  <li daffBreadcrumbItem>
    <a routerLink="/category">Category</a>
  </li>
  <li daffBreadcrumbItem>
    <span>Current Page</span>
  </li>
</ol>
```

## Accessibility
Breadcrumb follows the [Breadcrumb WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).

### Daffodil provides
- `aria-current="page"` automatically applied to the last breadcrumb item
- Enforces semantic HTML structure (requires `<ol>` and `<li>` elements)

### Developer responsibilities
- Wrap the breadcrumb in a `<nav>` element with a descriptive `aria-label`

```html
<nav aria-label="Category breadcrumb">
  <ol daff-breadcrumb>
    <li daffBreadcrumbItem>
      <a routerLink="/">Home</a>
    </li>
    <li daffBreadcrumbItem>
      <a routerLink="/category">Category</a>
    </li>
    <li daffBreadcrumbItem>
      <span>Current Page</span>
    </li>
  </ol>
</nav>
```
# Breadcrumb
A breadcrumb is a secondary navigation pattern that shows users their current location within a website or application's hierarchy.

## Overview
Breadcrumbs visually represent the navigational structure of a site or app and help users navigate to parent levels with ease. Each breadcrumb item corresponds to a level in the hierarchy, with the last item indicating the current page or context.

<daff-docs-example-viewer example="basic-breadcrumb"></daff-docs-example-viewer>

## Best practices

**When to use**
- Your site has a hierarchical structure with multiple levels
- Users need to understand their location within the site
- You want to provide quick navigation to parent pages

## Usage

Import `DAFF_BREADCRUMB_COMPONENTS` into your component:

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

> **Deprecation notice:**
> 
> `DaffBreadcrumbModule` is deprecated. Use the standalone component imports instead.

## Anatomy
A breadcrumb is composed of a container and one or more items:

```html
<ol daff-breadcrumb>
  <li daffBreadcrumbItem>
    <a routerLink="/">Home</a>
  </li>
  <li daffBreadcrumbItem>
    <a routerLink="/category">Category</a>
  </li>
  <li daffBreadcrumbItem>
    <span>Shoes</span>
  </li>
</ol>
```

- **`[daff-breadcrumb]`**: The wrapper that groups all breadcrumb items together. Applied to an `<ol>` element.
- **`[daffBreadcrumbItem]`**: An individual breadcrumb in the navigation path. Applied to a `<li>` element.
- Use a link for every item except the last, which represents the current page and is rendered as plain text.

## Features

### Truncation
Breadcrumbs are automatically truncated into an overflow menu on mobile viewports. On desktop, truncation occurs when more than five items are present.

<daff-docs-example-viewer example="truncated-breadcrumb"></daff-docs-example-viewer>

## Accessibility
Breadcrumb follows the [Breadcrumb WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).

### Built-in behavior
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
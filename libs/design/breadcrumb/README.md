# Breadcrumb
Breadcrumbs are a secondary navigation that displays a user's location within a website or application.

## Overview
Breadcrumbs are a visual representation of the site's navigational hierarchy. They indicate the current page's location and allows users to easily move up to a parent level.

## Requirements
- `[daff-breadcrumb]` is required to be used with the native HTML `<ol>` element.
- Each `[daffBreadcrumbItem]` needs to be a `<li>` element.

## Structure
Breadcrumbs are built using `[daff-breadcrumb]` and `[daffBreadCrumbItem]`.

- **`[daff-breadcrumb]`**: a wrapper for grouping breadcrumb items.
- **`[daffBreacrumbItem]`**: used to display each breadcrumb item.

<design-land-example-viewer-container example="basic-breadcrumb"></design-land-example-viewer-container>

## Usage
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

```html
<ol daff-breadcrumb>
  <li daffBreadcrumbItem>
    <a routerLink="/link">Link</a>
  </li>
  <li daffBreadcrumbItem>
    <a routerLink="/link">Link</a>
  </li>
  <li daffBreacrumbItem>
    <span>Active Link</span>
  </li>
</ol>
```

## Accessibility
Breadcrumb follows the [Breadcrumb WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).

- `aria-current="page"` is automatically applied to the last item to indicate that it represents the current page.

In order to fully comply with the WAI-ARIA design pattern:

- Breadcrumbs should be wrapped in a native HTML `<nav>` element so that assistive technologies can present the breadcrumbs as a navigational element on the page.
- Use `aria-label="Breadcrumb"` on the `nav` element to provide more context into what kind of navigation it is.

```html
<nav aria-label="breadcrumb">
  <ol daff-breadcrumb>
  </ol>
</nav>
```
# Breadcrumb
Breadcrumb is a secondary navigation pattern that shows users their current location within a website or application’s hierarchy.

## Overview
Breadcrumbs visually represent the navigational structure of a site or app and helps users navigate to parent levels with ease. Each breadcrumb item corresponds to a level in the hierarchy, with the last item indicating the current page or context.

<design-land-example-viewer-container example="basic-breadcrumb"></design-land-example-viewer-container>

## Usage
To use the breadcrumb components, import `DAFF_BREADCRUMB_COMPONENTS` into your custom component:

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

## Anatomy
A breadcrumb is composed of the following:

- **`[daff-breadcrumb]`**: Groups breadcrumb items. Must be applied to a native `<ol>` element.
- **`[daffBreacrumbItem]`**: Represents each individual breadcrumb item. Must be used on a `<li>` element.

```html
<ol daff-breadcrumb>
  <li daffBreadcrumbItem>
    <a routerLink="/">Home</a>
  </li>
  <li daffBreacrumbItem>
    <span>Current page</span>
  </li>
</ol>
```

## Accessibility
Breadcrumb follows the [Breadcrumb WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/).

- The last breadcrumb item is automatically assigned `aria-current="page"` to indicate the current page.

### Best practices
To ensure full accessibility compliance  with the WAI-ARIA design pattern:

- Wrap the breadcrumb in a `<nav>` element so assistive technologies can present the breadcrumb as a navigational element on the page.
- Provide a descriptive `aria-label` on the `<nav>` element to identify the type of navigation.

```html
<nav aria-label="Category breadcrumb">
  <ol daff-breadcrumb>
    <li daffBreadcrumbItem>
      <a routerLink="/">Home</a>
    </li>
    <li daffBreadcrumbItem>
      <span>Current Page</span>
    </li>
  </ol>
</nav>
```
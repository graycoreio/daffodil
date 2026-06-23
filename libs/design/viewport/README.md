# Viewport

The viewport structures a page using a predefined template based on common layout patterns. It hosts one or more [sidebars](/libs/design/sidebar/README.md), positions a navigation area, and manages content shifting and backdrop interactions as sidebars open and close.

## Usage
Import `DAFF_VIEWPORT_COMPONENTS` into your component and add `provideDaffViewport()` to its providers so the component and viewport share the same state:

```ts
import { DAFF_SIDEBAR_COMPONENTS } from '@daffodil/design/sidebar';
import {
  DAFF_VIEWPORT_COMPONENTS,
  provideDaffViewport,
} from '@daffodil/design/viewport';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_VIEWPORT_COMPONENTS,
    DAFF_SIDEBAR_COMPONENTS,
  ],
  providers: [
    provideDaffViewport(),
  ],
})
export class CustomComponent {}
```

## Anatomy
A viewport wraps a navigation area, the page content, an optional footer, and any sidebars:

```html
<daff-viewport>
  <nav daff-viewport-nav daff-navbar>
    Nav content
  </nav>
  <daff-sidebar>
    Sidebar content
  </daff-sidebar>
  <div class="page-content">
    Page content
  </div>
  <div daff-viewport-footer>
    Footer content
  </div>
</daff-viewport>
```

- **`<daff-viewport>`**: The container that positions its content and manages content shifting and backdrop interactions. Use it once per page.
- **`[daff-viewport-nav]`**: Optional navigation area, typically a [navbar](/libs/design/navbar/README.md). Its placement is controlled by `navPlacement`.
- **`[daff-viewport-footer]`**: Optional footer anchored to the bottom of the content area.
- **`<daff-sidebar>`**: One or more [sidebars](/libs/design/sidebar/README.md) rendered within the viewport.

## Features

### Opening and closing
Open and close sidebars programmatically with the `DaffViewportService`, passing the `side` you want to control:

```ts
import { DaffViewportService } from '@daffodil/design/viewport';

@Component({ /* ... */ })
export class CustomComponent {
  constructor(private viewportService: DaffViewportService) {}

  openSidebar() {
    this.viewportService.open('left');
  }

  closeSidebar() {
    this.viewportService.close('left');
  }
}
```

### Navigation placement
Use the `navPlacement` property to control where a `[daff-viewport-nav]` element sits in relation to a `side-fixed` sidebar:

| Placement | Description |
| --------- | ----------- |
| `above` (default) | The nav spans the full width, above the sidebar. |
| `beside` | The nav sits beside the sidebar. |

```html
<daff-viewport navPlacement="beside">
  <nav daff-viewport-nav daff-navbar>
    Nav content
  </nav>
  <daff-sidebar mode="side-fixed" [open]="true">
    Sidebar content
  </daff-sidebar>
  <div class="page-content">
    Page content
  </div>
</daff-viewport>
```

### Backdrop
The viewport renders a backdrop while an `over` or `under` sidebar is open. Clicking the backdrop closes any open sidebars and emits the `backdropClicked` event:

```html
<daff-viewport (backdropClicked)="onBackdropClicked()">
  <!-- ... -->
</daff-viewport>
```

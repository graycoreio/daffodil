# Sidebar
A sidebar is a component used to display additional information alongside a page.

## Overview
Sidebars provide a flexible way to display additional content alongside the main page content. While commonly used for navigation, they can accommodate any type of content. Sidebars support multiple display modes, positions, and include optional header and footer components with minimal styling.

A sidebar always renders inside a `<daff-viewport>`, which manages positioning, content shifting, and backdrop interactions. See the [Viewport](/libs/design/viewport/README.md) documentation for layout details.

<daff-docs-example-viewer example="basic-sidebar"></daff-docs-example-viewer>

## Best practices

**When to use**
- Creating navigation menus
- Displaying supplementary information related to the main content
- Providing contextual tools or controls for the current view

## Usage
Import `DAFF_SIDEBAR_COMPONENTS` into your component:

```ts
import { DAFF_SIDEBAR_COMPONENTS } from '@daffodil/design/sidebar';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_SIDEBAR_COMPONENTS,
  ],
})
export class CustomComponent {}
```

A sidebar must be rendered inside a `<daff-viewport>`. See the [Viewport](/libs/design/viewport/README.md) documentation to set it up, including `provideDaffViewport()` and the `DaffViewportService` used to open and close sidebars.

> **Deprecation notice:**
> 
> `DaffSidebarModule` is deprecated. Use the standalone component imports instead.

## Anatomy
A sidebar is composed of a container with an optional header and footer:

```html
<daff-sidebar>
  <daff-sidebar-header>
    <div daffSidebarHeaderTitle>Sidebar Title</div>
  </daff-sidebar-header>
  <div class="sidebar-content">
    Sidebar content
  </div>
  <daff-sidebar-footer>
    Footer content
  </daff-sidebar-footer>
</daff-sidebar>
```

- **`<daff-sidebar>`**: The main sidebar component that holds all sidebar content.
- **`<daff-sidebar-header>`**: Optional header container, positioned at the top of the sidebar, that holds the title, an optional dismiss button (`dismissible="true"`), and any custom content.
- **`[daffSidebarHeaderTitle]`**: Directive applied to an element inside `<daff-sidebar-header>` to mark it as the header's title.
- **`<daff-sidebar-footer>`**: Optional fixed container anchored to the bottom of the sidebar, often used for persistent actions or controls.

## Features

### Open and close
Open and close a sidebar programmatically through the viewport's `DaffViewportService`, passing the `side` you want to control. See the [Viewport](/libs/design/viewport/README.md) documentation for details.

`over` and `under` sidebars also close automatically when:
- The backdrop is clicked
- The `ESC` key is pressed
- The dismiss button is clicked (requires `dismissible="true"` on the sidebar header)

### Modes
Use the `mode` property to control how the sidebar is displayed:

| Mode       | Description |
| ---------- | ----------- |
| `side` (default) | Displays the sidebar alongside the main content. |
| `side-fixed` | Displays the sidebar alongside the content but remains fixed in place, scrolling independently from the content. |
| `over` | Slides over the main content, temporarily covering it when active. |
| `under` | Sits beneath the main content, which slides over the sidebar when closed. |

**Over and under sidebars**
<daff-docs-example-viewer example="over-and-under-sidebars"></daff-docs-example-viewer>

**Side fixed sidebar**
<daff-docs-example-viewer example="side-fixed-sidebar"></daff-docs-example-viewer>

### Sides
Use the `side` property to control the placement of the sidebar:

| Side  | Description |
| ----- | ----------- |
| `left` (default) | Places the sidebar on the left side of the screen.  |
| `right` | Places the sidebar on the right side of the screen. |

<daff-docs-example-viewer example="sidebar-sides"></daff-docs-example-viewer>

## Customizations

### Sidebar width
The default width is `240px`. Override it with:

```scss
:host {
	--daff-sidebar-left-width: 288px;
	--daff-sidebar-right-width: 288px;
}
```

### Side-fixed top offset
When the viewport's `navPlacement` is `above` (the default), a `side-fixed` sidebar is offset from the top by `64px` (matching the [Navbar](/libs/design/navbar/README.md)'s height) so it sits below the nav. Override this offset with the `--daff-sidebar-side-fixed-top-shift` variable:

```scss
body {
	--daff-sidebar-side-fixed-top-shift: 72px;
}
```

> With `navPlacement="beside"`, the nav sits alongside the sidebar instead, so the sidebar starts at the top of the viewport and this offset has no effect.

## Accessibility

### Built-in
- Automatic focus trapping for `over` and `under` modes (disabled for `side` and `side-fixed` modes)
- Focus moves to the first tabbable element when sidebar opens
- Focus returns to the previously focused element when sidebar closes

### Developer responsibilities
- Apply a meaningful `role` attribute (e.g., `role="navigation"`) to describe the sidebar's purpose
- Provide an `aria-label` when no title or header is present

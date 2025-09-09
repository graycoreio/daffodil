# Sidebar
A sidebar is a component used to display additional information alongside a page.

## Overview
Sidebars provide a flexible way to display additional content alongside the main page content. While commonly used for navigation, they can accommodate any type of content. Sidebars support multiple display modes, positions, and include optional header and footer components with minimal styling.

<design-land-example-viewer-container example="basic-sidebar"></design-land-example-viewer-container>

## Best practices

**When to use**
- Creating navigation menus
- Displaying supplementary information related to the main content
- Providing contextual tools or controls for the current view

## Usage

### Within a standalone component
To use sidebar in a standalone component, import `DAFF_SIDEBAR_COMPONENTS` directly into your custom component:

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

### Within a module (deprecated)
To use sidebar in a module, import `DaffSidebarModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffSidebarModule } from '@daffodil/design/sidebar';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffSidebarModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

### Required imports
The `@angular/platform-browser/animations` `BrowserAnimationsModule` or `NoopAnimationsModule` must be imported in your application module for the sidebar to render and function properly. Without one of these imports, the sidebar component will not initialize correctly.

```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
  ],
})
export class CustomComponentModule {}
```

## Anatomy
A sidebar consists of the following components:

### Viewport
**`<daff-sidebar-viewport>`**: The container that manages nav positioning and backdrop interactions. It should only be used once per application, but multiple sidebars of different modes can exist within it.

### Container
**`<daff-sidebar>`**: The main sidebar component that holds all sidebar content.

### Header
**`<daff-sidebar-header>`**: Optional header container that can include a title (`[daffSidebarHeaderTitle]`), dismiss button, and custom content.

### Footer
**`<daff-sidebar-footer>`**: Optional fixed container anchored to the bottom of the sidebar, often used for persistent actions or controls.

### Basic structure
```html
<daff-sidebar-viewport (backdropClicked)="closeSidebar()">
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
  <div class="page-content">
    Page content
  </div>
</daff-sidebar-viewport>
```

## Features

### Navigation placement
A viewport navigation can be placed either:

- Alongside the sidebar, using the `[daff-sidebar-viewport-nav]` element:

```html
<daff-sidebar-viewport (backdropClicked)="toggleOpen()">
	<nav daff-sidebar-viewport-nav daff-navbar>
		Nav content
	</nav>
	<daff-sidebar mode="over" [open]="open">
		<div class="sidebar-content">
			Sidebar content
		</div>
	</daff-sidebar>
	<div class="page-content">
		Page content
	</div>
</daff-sidebar-viewport>
```

- Inside the viewport content by **omitting** the `[daff-sidebar-viewport-nav]` element:

```html
<daff-sidebar-viewport (backdropClicked)="toggleOpen()">
	<nav daff-navbar>
		Nav content
	</nav>
	<daff-sidebar mode="over" [open]="open">
		<div class="sidebar-content">
			Sidebar content
		</div>
	</daff-sidebar>
	<div class="page-content">
		Page content
	</div>
</daff-sidebar-viewport>
```

### Closing a sidebar
A sidebar can be closed by:
- Clicking on the backdrop
- Pressing the `ESC` key
- Clicking the close button (requires `dismissible="true"` on the sidebar header)

### Modes
Use the `mode` property to control how the sidebar is displayed:

| Mode       | Description |
| ---------- | ----------- |
| `side` (default) | Displays the sidebar alongside the main content. |
| `side-fixed` | Displays the sidebar alongside the content but remains fixed in place, scrolling independently from the content. |
| `over` | Slides over the main content, temporarily covering it when active. |
| `under` | Sits beneath the main content, which slides over the sidebar when closed. |

**Over and under sidebars**
<design-land-example-viewer-container example="over-and-under-sidebars"></design-land-example-viewer-container>

**Side fixed sidebar**
<design-land-example-viewer-container example="side-fixed-sidebar"></design-land-example-viewer-container>

**Two fixed sidebars on either side**
<design-land-example-viewer-container example="two-fixed-sidebars-either-side"></design-land-example-viewer-container>

**Fixed and over sidebar**
<design-land-example-viewer-container example="fixed-and-over-sidebar"></design-land-example-viewer-container>

### Sides
Use the `side` property to control the placement of the sidebar:

| Side  | Description |
| ----- | ----------- |
| `left` (default) | Places the sidebar on the left side of the screen.  |
| `right` | Places the sidebar on the right side of the screen. |

<design-land-example-viewer-container example="sidebar-sides"></design-land-example-viewer-container>

## Customizations

### Sidebar width
The default width is `240px`. Override it with:

```scss
:host {
	--daff-sidebar-left-width: 288px;
	--daff-sidebar-right-width: 288px;
}
```

### Side fixed mode's top offset position
The default offset for a `side-fixed` sidebar is `64px` (matching the [Navbar](/libs/design/navbar/README.md)'s height). Override it with:

```scss
body {
	--daff-sidebar-side-fixed-top-shift: 72px;
}
```

## Accessibility

### Daffodil provides
- Automatic focus trapping for `over` and `under` modes (disabled for `side` and `side-fixed` modes)
- Focus moves to the first tabbable element when sidebar opens
- Focus returns to the previously focused element when sidebar closes

### Developer responsibilities
- Apply a meaningful `role` attribute (e.g., `role="navigation"`) to describe the sidebar's purpose
- Provide an `aria-label` when no title or header is present

## Deprecations
`[daffSidebarHeaderAction]` has been deprecated in favor of the `dismissible` property. Replace `[daffSidebarHeaderAction]` with `<daff-sidebar-header [dismissible]="true">`

```html
<daff-sidebar-header [dismissible]="true">
</daff-sidebar-header>
```
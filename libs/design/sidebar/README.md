# Sidebar
Sidebar is a component used to display additional information alongside a page.

## Overview
Sidebars are commonly used for navigation but are flexible enough to display any type of content. They include optional header and footer components with minimal styling. They can be fixed or collapsible and support multiple modes and positions.

<design-land-example-viewer-container example="basic-sidebar"></design-land-example-viewer-container>

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
`<daff-sidebar>` is placed inside a `<daff-sidebar-viewport>` alongside the page content. It optionally supports:

**Header**\
Contains an optional title (`[daffSidebarHeaderTitle]`), an optional dismiss button, and a slot for custom content. Use `<daff-sidebar-header>`.

**Footer**\
A fixed container anchored to the bottom of the sidebar, often used for persistent actions or controls. Use `<daff-sidebar-footer>`.

> `<daff-sidebar-viewport>` should only be used once per application, but multiple sidebars of different modes can exist within it.

## Navigation placement
A viewport navigation can be placed either:

- Alongside the sidebar, using the `[daff-sidebar-viewport-nav]` selector:

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

- Inside the viewport content by **omitting** the `[daff-sidebar-viewport-nav]` selector:

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

## Closing a sidebar
A sidebar can be closed by:
- Clicking on the backdrop
- Pressing the `ESC` key
- Clicking the close button (requires `dismissible="true"` on the sidebar header)

## Modes
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

## Sides
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
- Apply a meaningful `role` (e.g., navigation) to describe the sidebar’s purpose.
- When no title or header is present, use an `aria-label` to provide context.

### Focus management
Focus trapping is automatically applied for `over` and `under` modes and turned off for `side` and `side-fixed` modes. When opened, the first tabbable element in the sidebar receives focus. When closed, focus returns to the previously focused element.

## Deprecations
`[daffSidebarHeaderAction]` has been deprecated in favor of the `dismissible` property. Replace `[daffSidebarHeaderAction]` with `<daff-sidebar-header [dismissible]="true">`

```html
<daff-sidebar-header [dismissible]="true">
</daff-sidebar-header>
```
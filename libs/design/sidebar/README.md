# Sidebar
Sidebar is a component used to display additional information to the side of a page that may be fixed or collapsible.

## Overview
Sidebars are often used for navigation, but it's built to be flexible and extensible so that it can be used for any content. Sidebar supports a header and footer component with minimal default styling.

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
The `BrowserAnimationsModule` or `NoopAnimationsModule` must be imported in the particular Angular `@NgModule` the sidebar is used in for the sidebar to render and work properly.

## Basic sidebar
The default setting for sidebar is `mode="side"` and `side="left"`.

<design-land-example-viewer-container example="basic-sidebar"></design-land-example-viewer-container>

## Implementing the main and sidebar content
The main and sidebar content should be placed inside of the `<daff-sidebar-viewport>`. The sidebar content should be placed inside of the `<daff-sidebar>`.

> The sidebar viewport should only ever be used once in an application, but it's possible for there to be multiple sidebars of many modes at the same time.

A viewport navigation can either be:

- Placed alongside the `<daff-sidebar>` using the `[daff-sidebar-viewport-nav]` selector.

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

- Placed inside of the viewport content by **omitting** the `[daff-sidebar-viewport-nav]` selector from the nav component.

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

## Header and footer
The `<daff-sidebar-header>` includes optional title (`[daffSidebarHeaderTitle]`) and action (`[daffSidebarHeaderAction]`) selectors, and a slot to render custom content. The action selector should be used along with the `<daff-icon-button>` (view [Button Documentation](/libs/design/button/README.md)) to make sure that the action is positioned correctly and it passes WCAG guidelines.

The `<daff-sidebar-footer>` is a "holder" component with minimal default styling. Its main purpose is to position the footer at the bottom of the sidebar, allowing the sidebar's content to overflow and scroll while ensuring that the footer remains constantly visible.

Both the header and footer are optional components that will not render in the DOM if they are not used.

## Closing a sidebar
A sidebar can be closed by clicking on the backdrop, using the escape key, or clicking on the close button in the sidebar header.

> Note:  The close button is hidden by default. To make it visible, set the `dismissible` property on the sidebar header to `true`.

## Modes
A sidebar can be rendered four different ways by using the `mode` property. If `mode` is not specified, `side` is used by default.

| Mode       | Description                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| side       | Displays the sidebar alongside the main content.                                                              |
| side-fixed | Displays the sidebar alongside the content, but the sidebar remains fixed in place and scrolls independently from the content.                  |
| over       | The sidebar slides over the main content when open, temporarily covering part of the content when active.          |
| under      | The sidebar remains fixed in place while the main content slides over it when the sidebar is closed. |

### Over sidebar
<design-land-example-viewer-container example="over-sidebar"></design-land-example-viewer-container>

### Under sidebar
<design-land-example-viewer-container example="under-sidebar"></design-land-example-viewer-container>

### Two fixed sidebars on either side
<design-land-example-viewer-container example="two-fixed-sidebars-either-side"></design-land-example-viewer-container>

### Fixed and over sidebar
<design-land-example-viewer-container example="fixed-and-over-sidebar"></design-land-example-viewer-container>

## Sides
A sidebar can be positioned on either side of a screen by using the `side` property. If `side` is not specificed, `left` is used by default.

| Side  | Description                                    |
| ----- | ---------------------------------------------- |
| left  | Places sidebar on the left side of the screen  |
| right | Places sidebar on the right side of the screen |

## Custom styles

#### Setting a sidebar's width
The default size of a sidebar is `240px`. The `--daff-sidebar-left-width` and `--daff-sidebar-right-width` variables can be used to change the width of a left or right sidebar. These variables need to be defined on `<daff-sidebar-viewport>` or on the shadow DOM.

`custom-sidebar-viewport.html`
```html
<daff-sidebar-viewport>
	<daff-sidebar></daff-sidebar>
</daff-sidebar-viewport>
```

```scss
:host {
	--daff-sidebar-left-width: 288px;
	--daff-sidebar-right-width: 288px;
}
```

or:

```scss
daff-sidebar-viewport {
	--daff-sidebar-left-width: 288px;
	--daff-sidebar-right-width: 288px;
}
```

## Changing a side- fixed sidebar's top offset position
The default offset position of a sidebar is `0px`. The `--daff-sidebar-side-fixed-top-shift` variable can be used to adjust the top offset position for a primary sidebar and its viewport content.

```scss
body {
	--daff-sidebar-side-fixed-top-shift: 64px;
}
```

## Examples
#### Over and under sidebars
<design-land-example-viewer-container example="over-and-under-sidebars"></design-land-example-viewer-container>

### Side fixed sidebar
<design-land-example-viewer-container example="side-fixed-sidebar"></design-land-example-viewer-container>

## Accessibility
A meaningful `role` should be set on all sidebars depending on how they are used.

When a sidebar header is not used or there is no title for the sidebar, a meaningful `aria-label` should be set to describe the sidebar.

### Focus
Focus trapping is enabled for `over` and `under` modes, and disabled for `side` and `side-fixed` modes. When a sidebar is opened, the first tabbable element within the sidebar will receive focus. When a sidebar is closed, the element that was focused before the sidebar was opened will be re-focused.
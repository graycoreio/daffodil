# Sidebar
Sidebar is a component used to display additional information to the side of a page that may be fixed or collapsible.

## Overview
Sidebars are often used for navigation, but it's built to be flexible and extensible so that it can be used for any content. Sidebar supports a header and footer component with minimal default styling.

### Basic sidebar
The default setting for sidebar is `mode="side"` and `side="left"`.

<daff-docs-example-viewer-container-ce example="basic-sidebar"></daff-docs-example-viewer-container-ce>

### Implementing the main and sidebar content
The main and sidebar content should be placed inside of the `<daff-sidebar-viewport>`. The sidebar content should be placed inside of the `<daff-sidebar>`.

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

#### Required Imports
The `BrowserAnimationsModule` or `NoopAnimationsModule` must be imported in the particular Angular `@NgModule` the sidebar is used in for the sidebar to render and work properly.

### Header and footer
The `<daff-sidebar-header>` includes optional title (`[daffSidebarHeaderTitle]`) and action (`[daffSidebarHeaderAction]`) selectors, and a slot to render custom content. The action selector should be used along with the `<daff-icon-button>` (view [Button Documentation](/libs/design/button/README.md)) to make sure that the action is positioned correctly and it passes WCAG guidelines.

The `<daff-sidebar-footer>` is a "holder" component with minimal default styling. Its main purpose is to position the footer at the bottom of the sidebar, allowing the sidebar's content to overflow and scroll while ensuring that the footer remains constantly visible.

Both the header and footer are optional components that will not render in the DOM if they are not used.

### Opening and closing a sidebar
THe `open` property is used to set the open state for a sidebar.

By default, sidebar supports two methods of closing itself: clicking on the backdrop of the sidebar viewport or pressing `ESC` when the sidebar has focus.

| Method              | ------------------------------------ |
| `(backdropClicked)` | Set on the `<daff-sidebar-viewport>` |
| `(escapePressed)`   | Set on the `<daff-sidebar>`          |

### Modes
`<daff-sidebar>` can be rendered four different ways by using the `mode` property. If `mode` is not specified, `side` is used by default.

| Mode       | Description                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| side       | Sidebar is placed alongside the content                                                              |
| side-fixed | Sidebar is placed alongside the content and will scroll separately from the content                  |
| over       | Sidebar slides over the rest of the content in the viewport and covering it with a backdrop          |
| under      | Sidebar freezes in place and and the content slides above it, while also being covered by a backdrop |

#### Over sidebar
<daff-docs-example-viewer-container-ce example="over-sidebar"></daff-docs-example-viewer-container-ce>

#### Under sidebar
<daff-docs-example-viewer-container-ce example="under-sidebar"></daff-docs-example-viewer-container-ce>

#### Two fixed sidebars on either side
<daff-docs-example-viewer-container-ce example="two-fixed-sidebars-either-side"></daff-docs-example-viewer-container-ce>

#### Fixed and over sidebar
<daff-docs-example-viewer-container-ce example="fixed-and-over-sidebar"></daff-docs-example-viewer-container-ce>

### Sides
`<daff-sidebar>` can be positioned on either side of a screen by using the `side` property. If `side` is not specificed, `left` is used by default.

| Side  | Description                                    |
| ----- | ---------------------------------------------- |
| left  | Places sidebar on the left side of the screen  |
| right | Places sidebar on the right side of the screen |

### Custom styles

#### Setting a sidebar's width
The default size of a sidebar is `240px`. The width can be changed by setting it via CSS:

```scss
daff-sidebar {
	width: 240px;
}
```

### Changing a side-fixed sidebar's top offset position
The default offset position of a sidebar is `0px`. The `--daff-sidebar-side-fixed-top-shift` variable can be used to adjust the top offset position for a primary sidebar and its viewport content.

```scss
body {
	--daff-sidebar-side-fixed-top-shift: 64px;
}
```

### Examples
#### Over and under sidebars
<daff-docs-example-viewer-container-ce example="over-and-under-sidebars"></daff-docs-example-viewer-container-ce>

#### Side fixed sidebar
<daff-docs-example-viewer-container-ce example="side-fixed-sidebar"></daff-docs-example-viewer-container-ce>

### Accessibility
A meaningful `role` should be set on all sidebars depending on how they are used.

When the `<daff-sidebar-header>` is not used or there is no title for the sidebar, a meaningful `aria-label` should be set to describe the sidebar.

#### Focus
Focus trapping is enabled for `over` and `under` modes, and disabled for `side` and `side-fixed` modes. When a sidebar is opened, the first tabbable element within the will receive focus. When a sidebar is opened, the first tabbable element within the will receive focus. When a sidebar is closed, the element that was focused before the sidebar was opened will be re-focused.
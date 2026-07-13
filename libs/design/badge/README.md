# Badge
A badge is a compact visual label or indicator used to convey status or display short pieces of information.

## Overview
Badges are small visual indicators that highlight quick, essential information. Use a badge to draw attention to a piece of content, such as a count, a status, or a short label.

Because badges are not interactive, they aren't meant to group, sort, or filter information. When you need those interactions, use [tags](/libs/design/tag/README.md) instead.

<daff-docs-example-viewer example="basic-badge"></daff-docs-example-viewer>

## Best practices

**When to use**
- Show a status, such as success, error, or new
- Display a small piece of metadata
- Provide quick, scannable context inside a UI

**When not to use**
- To group, sort, or filter information (use [tags](/libs/design/tag/README.md) instead)
- For interactive elements, such as buttons or links

## Usage

Import `DAFF_BADGE_COMPONENTS` into your component:

```ts
import { DAFF_BADGE_COMPONENTS } from '@daffodil/design/badge';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_BADGE_COMPONENTS,
  ],
})
export class CustomComponent {}
```

## Anatomy
A badge is composed of a wrapper, an optional prefix, and a label:

```html
<daff-badge>
  <fa-icon [icon]="faCircleCheck" daffPrefix></fa-icon>
  Badge label
</daff-badge>
```

- **`<daff-badge>`**: The wrapper component that holds the badge content.
- **`[daffPrefix]`**: A leading visual, typically an icon, displayed before the label.
- **Label**: The content of the badge, projected as a child element.

## Features

### Icon support
Use the `[daffPrefix]` element to display a leading visual icon before the badge label.

<daff-docs-example-viewer example="badge-prefix"></daff-docs-example-viewer>

### Appearances
Use the `appearance` property to change the visual style of a badge.

<daff-docs-example-viewer example="badge-appearances"></daff-docs-example-viewer>

### Colors
Use the `color` property to change the color of a badge. The default color is `light`.

<daff-docs-example-viewer example="badge-colors"></daff-docs-example-viewer>

### Sizes
Use the `size` property to change the size of a badge. The default size is `md`.

<daff-docs-example-viewer example="badge-sizes"></daff-docs-example-viewer>

### Statuses
Use the `status` property to convey semantic meaning. A `status` takes precedence over `color`.

<daff-docs-example-viewer example="badge-statuses"></daff-docs-example-viewer>

## Accessibility
Badges are not interactive and do not receive focus.

### Developer responsibilities
- Always provide a text label unless the icon is universally understood and accessible
- Use the `status` property to communicate semantic meaning
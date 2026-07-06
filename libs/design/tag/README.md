# Tag
Tags are interactive indicators and filters that can be edited or removed, used to represent selections, categories, or applied filters.

## Overview
Tag supports flexible content projection to allow for various combinations of icons, labels, and interactive elements within a consistent container. Tags can be dismissed to remove a selection or filter, making them well suited for filter chips, applied search criteria, and editable selections.

<daff-docs-example-viewer example="basic-tag"></daff-docs-example-viewer>

## Usage

Import `DAFF_TAG_COMPONENTS` into your component:

```ts
import { DAFF_TAG_COMPONENTS } from '@daffodil/design/tag';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_TAG_COMPONENTS,
  ],
})
export class CustomComponent {}
```

## Anatomy
A tag is composed of a wrapper, an optional prefix, a label, and an optional close button:

```html
<daff-tag [dismissible]="true" (closeTag)="onCloseTag()">
  <fa-icon [icon]="faCircleCheck" daffPrefix></fa-icon>
  Tag label
</daff-tag>
```

- **`<daff-tag>`**: The wrapper component that holds all tag content.
- **`[daffPrefix]`**: A leading visual, typically an icon, displayed before the label.
- **Label**: The text content of the tag, projected as a child element.
- **Close button**: A trailing remove button, displayed when `dismissible` is `true`.

## Features

### Dismissible tags
Set `dismissible` to `true` to display a close button. The button emits a `closeTag` event when clicked.

<daff-docs-example-viewer example="dismissible-tag"></daff-docs-example-viewer>

### Disabled tags
Set `disabled` to `true` to disable the tag. Disabled tags cannot be removed.

<daff-docs-example-viewer example="disabled-tag"></daff-docs-example-viewer>

### Sizes
Use the `size` property to control tag dimensions. Supported sizes: `sm`, `md` (default), `lg`.

<daff-docs-example-viewer example="sizable-tag"></daff-docs-example-viewer>

### Colors
Use the `color` property to change the color of a tag. Supported colors: `primary`, `secondary`, `tertiary`, `dark`, `light`, `theme`, `theme-contrast`.

<daff-docs-example-viewer example="colorable-tag"></daff-docs-example-viewer>

### Statuses
Use the `status` property to convey semantic meaning. Supported statuses: `warn`, `critical`, `info`, `success`.

> **Deprecation notice:**
>
> The `status` property is deprecated. Tags are intended for selections, categories, and applied filters, so use the `color` property instead.

<daff-docs-example-viewer example="statusable-tag"></daff-docs-example-viewer>

## Accessibility

### Built-in behavior
- Default tags are not interactive and do not receive focus.
- Removable tags include a focusable close button that can be activated with `Enter` or `Space`.
- Disabled tags expose `aria-disabled="true"` and ignore close button activation.

### Developer responsibilities
- Always provide a text label unless the icon is universally understood and accessible.
- Communicate meaning through the tag's label or an accessible icon, rather than relying on color alone.
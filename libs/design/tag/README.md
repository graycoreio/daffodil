# Tag
Tags are compact visual indicators used to display short pieces of information such as status, categories, or labels.

## Overview
Tag supports flexible content projection to allow for various combinations of icons, labels, and interactive elements within a consistent container.

<daff-docs-example-viewer example="basic-tag"></daff-docs-example-viewer>

## Usage
To use tag in a standalone component, import `DAFF_TAG_COMPONENTS` directly into your custom component.

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
Tags should always include a text label unless the icon is universally understood and accessible.

### Icon
Use the `[daffPrefix]` element to display a leading visual icon for a tag.

```html
<daff-tag>
  <fa-icon [icon]="faCircleCheck" daffPrefix></fa-icon>
  <div>Tag label</div>
</daff-tag>
```

## Features

### Dismissible tag
Set `dismissible` to `true` to display a close button. The button emits a `closeTag` event when clicked.

```html
<daff-tag [dismissible]="true" (closeTag)="onCloseTag()">
  <fa-icon [icon]="faCircleCheck" daffPrefix></fa-icon>
  <div>Tag label</div>
</daff-tag>
```

### Disabled
Set `disabled` to `true` to disable the tag. Disabled tags cannot be dismissed.

```html
<daff-tag [disabled]="true">
  <fa-icon [icon]="faCircleCheck" daffPrefix></fa-icon>
  <div>Disabled tag</div>
</daff-tag>
```

## Sizes
Use the `size` property to control tag dimensions. Supported sizes: `sm`, `md` (default), `lg`.

<daff-docs-example-viewer example="sizable-tag"></daff-docs-example-viewer>

## Colors
Use the `color` property to change the color of a tag. Supported colors: `primary`, `secondary`, `tertiary`, `dark`, `light`, `theme`, `theme-contrast`.

<daff-docs-example-viewer example="colorable-tag"></daff-docs-example-viewer>

## Status
Use the `status` property to convey semantic meaning. Supported statuses: `warn`, `critical`, `info`, `success`.

<daff-docs-example-viewer example="statusable-tag"></daff-docs-example-viewer>

## Accessibility
No additional accessibility annotations are needed.

### Keyboard interactions
Default tags are not interactive and do not receive focus.

Dismissible tags include a focusable close button that can be activated with `Enter` or `Space`.
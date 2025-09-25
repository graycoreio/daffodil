# Tag
Tags are compact visual indicators used to display short pieces of information, such as status, categories, or labels. They typically contain an icon, text label, and optionally a delete button for removable items.

## Overview
Tag supports flexible content projection to allow for various combinations of icons, labels, and interactive elements within a consistent container.

| Attribute | Description |
| --------- | ----------- |
| `daff-tag` | Flexible tag container that can contain an icon, a label, and a dismiss button |


**Basic tag**
<design-land-example-viewer-container example="basic-tag"></design-land-example-viewer-container>

## Usage

### Within a standalone component
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
Tags should always have a label, unless you are only using an icon that is universally understood and accessible.

### Icon support
An icon can be rendered within the tag using the `daffPrefix` directive.

```html
<daff-tag>
  <fa-icon [icon]="faCircleCheck" daffPrefix></fa-icon>
  <div>Tag label</div>
</daff-tag>
```

### Dismissible support
A tag can be made dismissible by setting the `dismissible` property to `true`. This displays a close button that emits a `closeTag` event when clicked.

```html
<daff-tag dismissible (closeTag)="onCloseTag()">
  <fa-icon [icon]="faCircleCheck" daffPrefix></fa-icon>
  <div>Tag label</div>
</daff-tag>
```

### Disabled state
Tags can be disabled by setting the `disabled` property to `true`. Disabled tags cannot be dismissed.

```html
<daff-tag dismissible disabled>
  <fa-icon [icon]="faCircleCheck" daffPrefix></fa-icon>
  <div>Disabled tag</div>
</daff-tag>
```

## Sizes
Use the `size` property to control tag dimensions. The default size is `md`. Supported sizes: `sm`, `md`, `lg`.

<design-land-example-viewer-container example="sizeable-tag"></design-land-example-viewer-container>

## Colors
Use the `color` property to change the color of a tag. Supported colors: `primary`, `secondary`, `tertiary`, `dark`, `light`, `theme`, `theme-contrast`.

> Note: `dark`, `light`, and `theme` should be used on appropriate backgrounds for sufficient contrast.

<design-land-example-viewer-container example="colorable-tag"></design-land-example-viewer-container>

## Status indicators
Status indicators help users understand the type of information a tag represents and its importance relative to other tags in the same context. Use the `status` property to convey different semantic meanings. Supported status: `warn`, `critical`, `info`, `success`.

<design-land-example-viewer-container example="statusable-tag"></design-land-example-viewer-container>

## Accessibility
Daffodil uses semantic HTML elements and proper ARIA attributes to ensure an accessible experience by default.

- The close button supports the `disabled` state with appropriate `aria-disabled` attributes
- Use appropriate contrast ratios for text and background colors
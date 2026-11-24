# Swatch
A swatch group lets users pick one option, like a color or pattern, from a group of visual swatches.

## Overview
Swatches are commonly used on product pages to choose between variants such as colors, finishes, or fabrics. Only one swatch in a group can be selected at a time.

<daff-docs-example-viewer example="basic-swatch"></daff-docs-example-viewer>

## Usage
Import `DAFF_SWATCH_COMPONENTS` into your component:

```ts
import { DAFF_SWATCH_COMPONENTS } from '@daffodil/design/swatch';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_SWATCH_COMPONENTS,
  ],
})
export class CustomComponent {}
```

## Anatomy
A swatch group contains one or more swatches:

```html
<daff-swatch-group aria-label="Color" [(value)]="color">
  <daff-swatch value="red" color="#ec0019" aria-label="Red"></daff-swatch>
  <daff-swatch value="blue" color="#1f66ff" aria-label="Blue"></daff-swatch>
</daff-swatch-group>
```

- **`<daff-swatch-group>`**: Groups the swatches.
- **`<daff-swatch>`**: A single swatch option. It **cannot** be used outside of `<daff-swatch-group>`.

### Colors and images
Use the `color` property to fill a swatch. It accepts any CSS color or background value:

```html
<daff-swatch value="red" color="#ec0019" aria-label="Red"></daff-swatch>
```

To show a pattern or texture, add an image inside the swatch:

```html
<daff-swatch value="plaid" aria-label="Plaid pattern">
  <img src="/assets/plaid.jpg" alt="">
</daff-swatch>
```

## Features

### Text
Use the `label` property to show text in a swatch instead of a color, like a size. Text swatches don't show `color` or images, and can't be color pickers.

<daff-docs-example-viewer example="text-swatch"></daff-docs-example-viewer>

### Color picker
Add the `picker` property to a swatch to let users choose their own color. Clicking the swatch selects it and opens the browser's color picker. The chosen color becomes the swatch's value.

Picker swatches start out light gray and don't need a `value`.

<daff-docs-example-viewer example="swatch-picker"></daff-docs-example-viewer>

### Sizes
Use the `size` property on the swatch group to change the size of its swatches. The default size is `md`.

<daff-docs-example-viewer example="swatch-sizes"></daff-docs-example-viewer>

### Shapes
Use the `shape` property on the swatch group to change the shape of its swatches. The default shape is `round`.

<daff-docs-example-viewer example="swatch-shapes"></daff-docs-example-viewer>

### Disabled
Use the `disabled` property on a swatch to make that option unavailable. Use it on the swatch group to disable every swatch in it.

<daff-docs-example-viewer example="disabled-swatch"></daff-docs-example-viewer>

### Forms
Swatch groups work with Angular forms using `formControl`, `formControlName`, or `ngModel`. Disabling the form control disables the swatch group.

<daff-docs-example-viewer example="swatch-with-forms"></daff-docs-example-viewer>

## Accessibility
Swatch group follows the [Radio Group WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/).

### Built-in behavior
- The swatch group has a role of `radiogroup` and each swatch has a role of `radio`.
- `aria-checked` shows which swatch is selected.
- `aria-disabled` is set on disabled swatches and disabled swatch groups.
- Disabled swatches are skipped during keyboard navigation.

### Developer responsibilities
- Label the swatch group with `aria-label`, or with `aria-labelledby` pointing to a visible label.
- Give every color, image, and color picker swatch an `aria-label`, since they don't have visible text. Text swatches are labelled by their text.
- Label color picker swatches so users know they can choose a color, like `"Custom color"`.- Mention when an option is unavailable in its `aria-label`, like `"Green, out of stock"`.
- Leave the `alt` attribute empty on images inside a swatch, so the label isn't read twice.

### Keyboard interactions
| Key | Action |
| --- | ------ |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Moves focus into or out of the swatch group, landing on the selected swatch. |
| <kbd>Right Arrow</kbd> / <kbd>Down Arrow</kbd> | Selects the next swatch, wrapping to the first. |
| <kbd>Left Arrow</kbd> / <kbd>Up Arrow</kbd> | Selects the previous swatch, wrapping to the last. |
| <kbd>Home</kbd> | Selects the first swatch. |
| <kbd>End</kbd> | Selects the last swatch. |
| <kbd>Space</kbd> | Selects the focused swatch. On a color picker swatch, also opens the color picker. |

## Troubleshooting

### Error: DaffSwatchComponent needs to be used inside of a DaffSwatchGroupComponent
This error is thrown when a swatch is used without a swatch group. Make sure your template looks like this:

```html
<daff-swatch-group aria-label="Color">
  <daff-swatch value="red" color="#ec0019" aria-label="Red"></daff-swatch>
</daff-swatch-group>
```

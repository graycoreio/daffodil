# Switch 
A switch allows users to toggle the state of a single setting.

## Overview
Switches provide a way to toggle between two states with a visual indicator of the current state. A label can be positioned on the left, right, top, or bottom of the switch.

<daff-docs-example-viewer example="basic-switch"></daff-docs-example-viewer>

## Usage

Import `DAFF_SWITCH_COMPONENTS` into your component:

```ts
import { DAFF_SWITCH_COMPONENTS } from '@daffodil/design/switch';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_SWITCH_COMPONENTS,
  ],
})
export class CustomComponent {}
```

## Anatomy
A switch consists of a toggle control with a label projected as content:

```html
<daff-switch>Wi-Fi</daff-switch>
```

- **`<daff-switch>`**: The switch control. The label is provided as projected content and is automatically associated with the toggle.

## Features

### Sizes
A small switch variant is available for dense layouts. Use the `size="sm"` property to render a more compact version of a switch.

<daff-docs-example-viewer example="switch-sizes"></daff-docs-example-viewer>

### Disabled switch
Use the `disabled` property on switch to make it non-interactive.

<daff-docs-example-viewer example="disabled-switch"></daff-docs-example-viewer>

### Label positions
Use the `labelPosition` property to control the visual relationship between the switch and its label. By default, labels appear to the left of the switch control.

<daff-docs-example-viewer example="switch-label-positions"></daff-docs-example-viewer>

## Accessibility
Switch follows the [ARIA Switch design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/).

### Built-in behavior
- The switch control is implemented as a `<button>` element with a role of `switch`.
- `aria-checked` is used to indicate the switch's on/off state.
- Links the switch to its label `id` using `aria-labelledby`.

### Keyboard interactions
| Key | Action |
| --- | ------ |
| Tab |  Moves focus to or away from the switch control. |
| Space |  Changes the switch's state between on and off. |
| Enter |  Changes the switch's state between on and off. |

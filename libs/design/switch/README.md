# Switch 
A switch allows users to toggle the state of a single setting.

## Overview
Switches provide a way to toggle between two states with a visual indicator of the current state. A label can be positioned on the left, right, top, or bottom of the switch. The switch can be set to a disabled state, display a loading indicator, or show a custom error message.

## Usage

### Within a standalone component
To use a switch in a standalone component, import `DAFF_SWITCH_COMPONENTS` directly into your custom component:

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

## Examples

### Basic Switch
A basic switch can be toggled by setting the `checked` property to `true` or `false`. By default, this is set to `false`.

<daff-docs-example-viewer-container-ce example="basic-switch"></daff-docs-example-viewer-container-ce>

### Disabled Switch
A switch with the `disabled` property will be non-interactive.

<daff-docs-example-viewer-container-ce example="disabled-switch"></daff-docs-example-viewer-container-ce>

### Loading Switch
A switch can display a loading state by setting `loading` to `true`. This will also disable the switch.

<daff-docs-example-viewer-container-ce example="loading-switch"></daff-docs-example-viewer-container-ce>

### Switch with Error
An error message can be displayed by setting `error` to `true` and including a `daff-error-message` to show the message text.

<daff-docs-example-viewer-container-ce example="switch-error"></daff-docs-example-viewer-container-ce>

### Changing Label Position
The label position can be changed by setting the `labelPosition` property. The default position is `left`.

Supported positions: `left | right | top | bottom`

<daff-docs-example-viewer-container-ce example="switch-label-positions"></daff-docs-example-viewer-container-ce>


## Accessibility
Switches follow the [ARIA Switch design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/).

### Keyboard Interactions
| Key | Action |
| --- | ------ |
| Space |  Toggles the switch to the opposite state. |
| Tab |  Moves to next component on the page. |

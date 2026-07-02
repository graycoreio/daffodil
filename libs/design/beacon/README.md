# Beacon
A beacon is a small indicator that draws visual attention to a specific location or element.

## Overview
Use a beacon to signal a "live" status or highlight a point of interest, such as a new feature or an active notification. It renders as a pulsing dot that draws the eye without interrupting the surrounding content.

<daff-docs-example-viewer example="basic-beacon"></daff-docs-example-viewer>

## Usage

Import `DaffBeaconComponent` into your component:

```ts
import { DaffBeaconComponent } from '@daffodil/design/beacon';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DaffBeaconComponent,
  ],
})
export class CustomComponent {}
```

## Anatomy
A beacon is a single dot with a ring that pulses outward from it. With no properties set, it renders at the default size and inherits the ambient text color:

```html
<daff-beacon></daff-beacon>
```

## Features

### Colors
Use the `color` property to change the color of a beacon. Left unset, the beacon matches the surrounding text color, so setting `color` on a parent element carries down to the beacon.

> Note: `dark`, `light`, and `theme` should be used on appropriate backgrounds for sufficient contrast.

<daff-docs-example-viewer example="beacon-colors"></daff-docs-example-viewer>

### Status
Use the `status` property to color the beacon by meaning: `info`, `warn`, `critical`, or `success`. Use `status` instead of `color` when the dot represents a state.

<daff-docs-example-viewer example="beacon-statuses"></daff-docs-example-viewer>

### Sizes
Use the `size` property to change the diameter of the dot. The default size is `sm`.

<daff-docs-example-viewer example="beacon-sizes"></daff-docs-example-viewer>

### Speed
Use the `speed` property to set how fast the ring pulses. `slow` is a relaxed 3.6s cycle, `normal` (the default) a 2.4s cycle, and `fast` an urgent 1.2s cycle.

<daff-docs-example-viewer example="beacon-speeds"></daff-docs-example-viewer>

## Accessibility

For users who have reduced motion enabled, the beacon shows as a still dot instead of pulsing.

Beacon is purely decorative and should never be the only thing that conveys status. Always pair it with visible text or another cue that communicates the same meaning.

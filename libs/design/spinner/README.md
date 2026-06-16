# Spinner
A spinner is an animated indicator that lets users know content or action is being loaded.

## Overview
Use a spinner to indicate a short, indeterminate loading state. It can appear on its own or paired with a loading message. For longer processes with measurable progress, use the [Progress Bar](/libs/design/progress-bar/README.md) component.

<daff-docs-example-viewer example="basic-spinner"></daff-docs-example-viewer>

## Usage

Import `DAFF_SPINNER_COMPONENTS` into your component:

```ts
import { DAFF_SPINNER_COMPONENTS } from '@daffodil/design/spinner';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_SPINNER_COMPONENTS,
  ],
})
export class CustomComponent {}
```

## Anatomy
A spinner is composed of an animated indicator with an optional label:

```html
<daff-spinner>
  <daff-spinner-label>Loading products...</daff-spinner-label>
</daff-spinner>
```

- **`<daff-spinner>`**: The animated loading indicator.
- **`<daff-spinner-label>`**: An optional label that describes the loading state and provides context for users.

## Features

### Colors
Use the `color` property to change the color of a spinner.

> Note: `dark`, `light`, and `theme` should be used on appropriate backgrounds for sufficient contrast.

<daff-docs-example-viewer example="spinner-colors"></daff-docs-example-viewer>

### Sizes
Use the `size` property to change the size of a spinner. The default size is `md`.

<daff-docs-example-viewer example="spinner-sizes"></daff-docs-example-viewer>

## Accessibility

### Built-in behavior
- `role="status"` on the spinner announces content changes to assistive technologies.
- When `<daff-spinner-label>` is used, its visible text serves as the accessible name. When no label is provided, the spinner defaults to `aria-label="loading"`.

### Developer responsibilities
- When no label is shown, customize the accessible name with the `aria-label` input to describe the loading state:

```html
<daff-spinner aria-label="Saving changes"></daff-spinner>
```
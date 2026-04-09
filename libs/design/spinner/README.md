# Spinner
A spinner is an animated indicator that lets users know content or action is being loaded.

## Overview
Use a spinner to indicate a short, indeterminate loading state. It can appear on its own or paired with a loading message. For longer processes with measurable progress, use the [progress bar](/libs/design/progress-bar/README.md) component.

## Usage
To use spinner, import `DAFF_SPINNER_COMPONENTS` directly into your custom component:

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

### Label
Labels are used to describe the loading state and provide context for users. They are optional.

```html
<daff-spinner>
  <daff-spinner-label>Loading products...</daff-spinner-label>
</daff-spinner>
```

<daff-docs-example-viewer example="spinner-with-label"></daff-docs-example-viewer>

## Features

### Colors
Use the `color` property to change the color of a spinner.

> Note: `dark`, `light`, and `theme` should be used on appropriate backgrounds for sufficient contrast.

<daff-docs-example-viewer example="spinner-colors"></daff-docs-example-viewer>

### Sizes
Use the `size` proeprty to change the size of a spinner. The default size is `md`.

<daff-docs-example-viewer example="spinner-sizes"></daff-docs-example-viewer>

## Accessibility
The spinner has `role="status"` which announces content changes to assistive technologies.

When using `<daff-spinner-label>`, the visible text serves as the accessible name. When no label is provided, the spinner defaults to `aria-label="loading"`. You can customize this with the `aria-label` input:

```html
<daff-spinner aria-label="Saving changes"></daff-spinner>
```
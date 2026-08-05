# Progress Bar
A progress bar provides visual feedback about the duration or progress of a task or operation.

## Overview
Progress bars help users understand the status of ongoing processes or tasks. They can display either determinate progress (when the percentage is known) or indeterminate progress (when the percentage is unknown or cannot be calculated).

<daff-docs-example-viewer example="progress-bar-default"></daff-docs-example-viewer>

## Best practices

**When to use**
- Showing the status of file uploads or downloads
- Indicating completion of multi-step processes
- Displaying loading states for time-consuming operations

**When not to use**
- The operation is short or instantaneous. Use the [spinner](/libs/design/spinner/README.md) component instead.

## Usage

Import `DAFF_PROGRESS_BAR_COMPONENTS` into your component:

```ts
import { DAFF_PROGRESS_BAR_COMPONENTS } from '@daffodil/design/progress-bar';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_PROGRESS_BAR_COMPONENTS,
  ],
})
export class CustomComponent {}
```

> **Deprecation notice:**
> 
> `DaffProgressBarModule` is deprecated. Use the standalone component imports instead.

## Anatomy
A progress bar is composed of a container and an optional label:

```html
<daff-progress-bar>
  <daff-progress-bar-label>File upload</daff-progress-bar-label>
</daff-progress-bar>
```

- **`<daff-progress-bar>`**: The wrapper component that displays the progress indicator.
- **`<daff-progress-bar-label>`**: A label that describes what the progress represents. The label is automatically associated with the progress bar for accessibility.

If a label is not provided, add an `aria-label` to `<daff-progress-bar>` to ensure an accessible experience.

## Features

### Indeterminate
Use an indeterminate progress bar when the percentage of completion is unknown or cannot be calculated. Set the `indeterminate` property to `true`.

<daff-docs-example-viewer example="progress-bar-indeterminate"></daff-docs-example-viewer>

### Colors
The default color is `primary`. Use the `color` property to change a progress bar's color.

> `theme`, `light`, and `dark` should be used with caution to ensure that there is sufficient contrast.

<daff-docs-example-viewer example="progress-bar-themes"></daff-docs-example-viewer>

## Accessibility
Progress bar implements the ARIA `role="progressbar"` pattern.

### Built-in behavior
- `role="progressbar"` on the progress element
- `aria-valuemin="0"` and `aria-valuemax="100"` set by default
- `aria-valuenow` reflecting current progress (for determinate mode)
- `aria-labelledby` automatically linking to `<daff-progress-bar-label>` when present

### Developer responsibilities
- Always provide a label via `<daff-progress-bar-label>` or `aria-label`

```html
<daff-progress-bar>
  <daff-progress-bar-label>File upload</daff-progress-bar-label>
</daff-progress-bar>
```

```html
<daff-progress-bar aria-label="File upload"></daff-progress-bar>
```
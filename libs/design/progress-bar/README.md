# Progress Bar
A progress bar provides visual feedback about the duration or progress of a task or operation.

## Overview
Progress bars help users understand the status of ongoing processes or tasks. They can display either determinate progress (when the percentage is known) or indeterminate progress (when the percentage is unknown or cannot be calculated).

<design-land-example-viewer-container example="progress-bar-default"></design-land-example-viewer-container>

## Best practices

**When to use**
- Showing the status of file uploads or downloads
- Indicating completion of multi-step processes
- Displaying loading states for time-consuming operations

## Usage

### Within a standalone component
To use progress bar in a standalone component, import `DAFF_PROGRESS_BAR_COMPONENTS` directly into your custom component:

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

### Within a module (deprecated)
To use progress bar in a module, import `DaffProgressBarModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffProgressBarModule } from '@daffodil/design/progress-bar';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffProgressBarModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Anatomy
A progress bar consists of the following components:

### Container
**`<daff-progress-bar>`**: The main progress bar component that displays the progress indicator.

### Label
**`<daff-progress-bar-label>`**: Label that helps users understand what the progress represents. The label is automatically associated with the progress bar for accessibility.

### Basic structure
```html
<daff-progress-bar>
  <daff-progress-bar-label>File upload</daff-progress-bar-label>
</daff-progress-bar>
```

If a label is not provided, add an `aria-label` to `<daff-progress-bar>` to ensure an accessible experience.

## Types

### Determinate
Use determinate progress bars when the percentage of completion is known. This is the default type.

### Indeterminate
Use indeterminate progress bars when when the percentage of completion is unknown or cannot be calculated. Set the `indeterminate` property to `true`:

<design-land-example-viewer-container example="progress-bar-indeterminate"></design-land-example-viewer-container>

## Features

### Colors
The default color is `primary`. Use the `color` property to change a progress bar's color.

> `theme`, `white`, and `black` should be used with caution to ensure that there is sufficient contrast.

<design-land-example-viewer-container example="progress-bar-themes"></design-land-example-viewer-container>

## Accessibility
Progress bar implements the ARIA `role="progressbar"` pattern.

### Daffodil provides
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
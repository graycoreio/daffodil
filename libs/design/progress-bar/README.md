# Progress Bar
A progress bar provides visual feedback about the duration or progress of a task or operation.

## Overview
Progress bars can be **determinate** (percentage known) or **indeterminate** (percentage unknown).

<design-land-example-viewer-container example="progress-bar-default"></design-land-example-viewer-container>

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

## Label
Use `<daff-progress-bar-label>` to help users understand what the progress represents. The label is automatically associated with the progress bar for accessibility via `aria-labelledby`.

If no label is provided, add an `aria-label` to `<daff-progress-bar>` to ensure an accessible experience.

## Types

### Determinate
Use determinate progress bars when the percentage of completion is known. This is the default type.

### Indeterminate
Use indeterminate progress bars when when the percentage of completion is unknown or cannot be calculated. Set the `indeterminate` property to `true`:

<design-land-example-viewer-container example="progress-bar-indeterminate"></design-land-example-viewer-container>

## Colors
The default color is `primary`. Use the `color` property to change a progress bar's color.

> `theme`, `white`, and `black` should be used with caution to ensure that there is sufficient contrast.

<design-land-example-viewer-container example="progress-bar-themes"></design-land-example-viewer-container>

## Accessibility
Progress bar implements the ARIA `role="progressbar"` pattern:

- `aria-valuemin="0"` and `aria-valuemax="100"` are set by default.
- `aria-valuenow` reflects the current progress value (not relevant for indeterminate mode).
- `aria-labelledby` links the progress bar track to `<daff-progress-bar-label>` when present.

**Best practice:** Always provide an accessible label via `<daff-progress-bar-label>` or `aria-label` so users know what the progress represents.

```html
<daff-progress-bar>
  <daff-progress-bar-label>File upload</daff-progress-bar-label>
</daff-progress-bar>
```

```html
<daff-progress-bar aria-label="File upload"></daff-progress-bar>
```
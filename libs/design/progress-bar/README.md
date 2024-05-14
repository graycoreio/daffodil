# Progress Bar
A progress bar provides visual feedback about the duration or progress of a task or operation.

## Types
There are two types of progress bars: `determinate` and `indeterminate`. They are `determinate` by default.

### Determinate
Determinate progress bars should be used when the percentage of a task or operation is known.

<design-land-example-viewer-container example="progress-bar-default"></design-land-example-viewer-container>

### Indeterminate
Indeterminate progress bars should be used when the loading percentage of a task or operation is unknown or cannot be calculated.

<design-land-example-viewer-container example="progress-bar-indeterminate"></design-land-example-viewer-container>

## Theming
The progress bar color is defined by using the `color` property. By default, the color is set to `primary`. This can be changed to one of the supported colors.

Supported colors: `primary | secondary | tertiary | theme | theme-contrast | white | black`

> `theme`, `theme-contrast`, `white`, and `black` should be used with caution to ensure that there is sufficient contrast.

<design-land-example-viewer-container example="progress-bar-themes"></design-land-example-viewer-container>

## Accessibility
The progress bar component works with the ARIA `role="progressbar"` to provide an accessible experience. A Label should always be provided by using `label[daffFormLabel]`, `aria-label`, or `aria-labelledby`.

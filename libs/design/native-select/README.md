# Native select
The native select component allows a native HTML select element to work with the form field component.

## Overview
The native select component has the same functionality as a native HTML `<select>` element, with additional custom styling and functionality. It **cannot** be used by itself and must be contained within a [DaffFormFieldComponent](/libs/design/src/atoms/form/form-field/README.md).

<design-land-example-viewer-container example="default-select"></design-land-example-viewer-container>

## Examples

### Disabled select
<design-land-example-viewer-container example="disabled-select"></design-land-example-viewer-container>

### Select with error messages
The select in this example uses the `ReactiveFormsModule` to display errors.

<design-land-example-viewer-container example="select-with-error"></design-land-example-viewer-container>

### Select with hint
The select in this example has a hint.

<design-land-example-viewer-container example="select-with-hint"></design-land-example-viewer-container>

### Loading select
<design-land-example-viewer-container example="skeleton-select"></design-land-example-viewer-container>
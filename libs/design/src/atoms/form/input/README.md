# Input
The input component allows the native HTML `<input>` element to work with the [Form Field](/libs/design/src/atoms/form/form-field/README.md) component.

## Overview
The input component has the same functionality as a native HTML `<input>` element, with additional custom styling and functionality. It can't be used by itself and must be contained within a `<daff-form-field>`.

## Basic input with form field
<design-land-example-viewer-container example="input-with-form-field"></design-land-example-viewer-container>

## Examples

### Disabled input
The input in this example is disabled using the native HTML disabled attribute.

<design-land-example-viewer-container example="input-disabled"></design-land-example-viewer-container>

### Input with error messages
The input in this example uses the `ReactiveFormsModule` to display errors.

<design-land-example-viewer-container example="input-error"></design-land-example-viewer-container>

### Input with hint
The input in this example has a hint.

<design-land-example-viewer-container example="input-hint"></design-land-example-viewer-container>

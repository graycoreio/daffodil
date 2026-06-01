# Input
Input works alongside the native HTML input element, with additional custom styling and functionality.

## Overview
Input has the same functionality as a native HTML input element, with additional custom styling and functionality. It **cannot** be used by itself and must be contained within a [form field](/libs/design/form-field/README.md).

<daff-docs-example-viewer example="input-with-form-field"></daff-docs-example-viewer>

## Usage
Import `DaffInputComponent` into your component:

```ts
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DaffInputComponent,
  ],
})
export class CustomComponent {}
```

## Anatomy
Input must be used inside `<daff-form-field>` to enable proper state management and provide enhanced UI features such as hints, error messages, prefixes, and suffixes. The form field component also ensures accessibility compliance. For more details, see the [form field documentation](/libs/design/form-field/README.md).

```html
<daff-form-field>
  <daff-form-label>First Name</daff-form-label>
  <input daff-input type="text" name="first-name" />
</daff-form-field>
```

## Features

### Disabled
Input can be disabled in two ways: using Angular's reactive forms with `FormControl` or with the native HTML `disabled` attribute.

<daff-docs-example-viewer example="input-disabled"></daff-docs-example-viewer>

### Error
Input supports validation and error messages through Angular's form validation system. Use `<daff-error-message>` within the form field to display context-specific error messages. Error messages automatically appear when the input is invalid and has been touched or submitted.

<daff-docs-example-viewer example="input-error"></daff-docs-example-viewer>

Multiple error messages can be displayed conditionally based on the type of validation error. The form field component handles the styling and positioning of error messages.

### Hints
Hints provide additional context or instructions to help users complete the input field correctly. Use `<daff-hint>` within the form field to display helpful information below the input. Unlike error messages, hints are always visible and provide guidance rather than validation feedback.

<daff-docs-example-viewer example="input-hint"></daff-docs-example-viewer>

## Accessibility

### Built-in behavior
- When `<daff-form-label>` is used within `<daff-form-field>`, the label automatically associates with the input using the `for` and `id` attributes.

### Developer responsibilities
- If a `<daff-form-label>` is not specified, use the `<label>` element to associate text with form elements explicitly. The `for` attribute of the label must exactly match the `id` of the form control.
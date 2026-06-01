# Textarea
Textarea works alongside the HTML textarea element, with additional custom styling and functionality.

## Overview
Textarea has the same functionality as a native HTML textarea element, with additional custom styling and functionality. It **cannot** be used by itself and must be contained within a [form field](/libs/design/form-field/README.md).

<daff-docs-example-viewer example="basic-textarea"></daff-docs-example-viewer>

## Usage
Import `DaffTextareaComponent` into your component:

```ts
import { DaffTextareaComponent } from '@daffodil/design/textarea';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DaffTextareaComponent,
  ],
})
export class CustomComponent {}
```

## Anatomy
Textarea must be used inside `<daff-form-field>` to enable proper state management and provide enhanced UI features such as hints, error messages, prefixes, and suffixes. The form field component also ensures accessibility compliance. For more details, see the [form field documentation](/libs/design/form-field/README.md).

```html
<daff-form-field>
  <daff-form-label>Comments</daff-form-label>
  <textarea daff-textarea name="comments"></textarea>
</daff-form-field>
```

## Features

### Disabled
Textarea can be disabled in two ways: using Angular's reactive forms with `FormControl` or with the native HTML `disabled` attribute.

<daff-docs-example-viewer example="textarea-disabled"></daff-docs-example-viewer>

### Error
Textarea supports validation and error messages through Angular's form validation system. Use `<daff-error-message>` within the form field to display context-specific error messages. Error messages automatically appear when the textarea is invalid and has been touched or submitted.

<daff-docs-example-viewer example="textarea-error"></daff-docs-example-viewer>

Multiple error messages can be displayed conditionally based on the type of validation error. The form field component handles the styling and positioning of error messages.

### Hints
Hints provide additional context or instructions to help users complete the textarea field correctly. Use `<daff-hint>` within the form field to display helpful information below the textarea. Unlike error messages, hints are always visible and provide guidance rather than validation feedback.

<daff-docs-example-viewer example="textarea-hint"></daff-docs-example-viewer>

## Accessibility

### Built-in behavior
- When `<daff-form-label>` is used within `<daff-form-field>`, the label automatically associates with the textarea using the `for` and `id` attributes.

### Developer responsibilities
- If a `<daff-form-label>` is not specified, use the `<label>` element to associate text with form elements explicitly. The `for` attribute of the label must exactly match the `id` of the form control.
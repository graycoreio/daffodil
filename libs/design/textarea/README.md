# Textarea
Textarea works alongside the HTML textarea element, with additional custom styling and functionality.

## Overview
Textarea has the same functionality as a native HTML textarea element, with additional custom styling and functionality. It **cannot** be used by itself and must be contained within a [form field](/libs/design/src/atoms/form/form-field/README.md).

<design-land-example-viewer-container example="basic-textarea"></design-land-example-viewer-container>

## Usage
To use textarea, import `DaffTextareaComponent` directly into your custom component:

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

### Basic structure
```html
<daff-form-field>
  <daff-form-label>Comments</daff-form-label>
  <textarea daff-textarea name="comments"></textarea>
</daff-form-field>
```

## States

### Disabled
Textarea can be disabled in two ways: using Angular's reactive forms with `FormControl` or with the native HTML `disabled` attribute.

<design-land-example-viewer-container example="textarea-disabled"></design-land-example-viewer-container>

### Error
Textarea supports validation and error messages through Angular's form validation system. Use `<daff-error-message>` within the form field to display context-specific error messages. Error messages automatically appear when the textarea is invalid and has been touched or submitted.

<design-land-example-viewer-container example="textarea-error"></design-land-example-viewer-container>

Multiple error messages can be displayed conditionally based on the type of validation error. The form field component handles the styling and positioning of error messages.

## Hints
Hints provide additional context or instructions to help users complete the textarea field correctly. Use `<daff-hint>` within the form field to display helpful information below the textarea. Unlike error messages, hints are always visible and provide guidance rather than validation feedback.

<design-land-example-viewer-container example="textarea-hint"></design-land-example-viewer-container>

## Accessibility
When `<daff-form-label>` is used within `<daff-form-field>`, the label automatically associates with the textarea using the `for` and `id` attributes.

If a `<daff-form-label>` is not specified, use the `<label>` element to associate text with form elements explicitly. The `for` attribute of the label must exactly match the `id` of the form control.
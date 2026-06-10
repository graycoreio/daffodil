# Form
Form provides components for building accessible and well-structured forms, including error messages, hints, and labels for form-related content.

## Overview
This package includes reusable form components that help create consistent and accessible form experiences:

- **Labels** (`<daff-form-label>`): Accessible labels for form controls
- **Hints** (`<daff-hint>`): Helpful information and validation hints
- **Error Messages** (`<daff-error-message>`): Validation error messages for form controls

These components are presentational and have no dependency on [form field](/libs/design/form-field/README.md). They're most commonly used inside a form field, which wires them to their control automatically. Use them on their own when you need the same styling but a form field doesn't fit, such as:

- Controls a form field can't wrap, like checkboxes, radios, switches, or other custom form controls
- Form-level or cross-field messaging that isn't tied to a single control

## Usage

Import `DAFF_FORM_HELPER_COMPONENTS` into your component:

```ts
import { DAFF_FORM_HELPER_COMPONENTS } from '@daffodil/design/form';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_FORM_HELPER_COMPONENTS,
  ],
})
export class CustomComponent {}
```

## Features

### Labels
Labels help users understand what information to enter into a form control. Use `<daff-form-label>` to create accessible labels for form controls.

```html
<daff-form-label>First Name</daff-form-label>
```

When used within a [form field](/libs/design/form-field/README.md), the label is automatically associated with the form control for accessibility. If a form control is marked as required, an asterisk will be attached to the label to indicate that it's a required field.

```html
<daff-form-field>
  <daff-form-label>Email Address</daff-form-label>
  <input daff-input type="email" name="email" required />
</daff-form-field>
```

### Hints
Hints can be used to provide helpful information that assists users in correctly completing a field.

```html
<daff-hint>Password must have 8 characters.</daff-hint>
```

Use the `validated` property to show hints with validation styling:

```html
<daff-hint [validated]="isControlValid">Password must have 8 characters.</daff-hint>
```

### Errors
Error messages can be used to display validation errors.

```html
@if (control.errors?.required) {
  <daff-error-message>Email is a required field.</daff-error-message>
}
```

## Accessibility

When used independently, you're responsible for the accessibility wiring yourself, including the label's `for` attribute and `aria-describedby` on the control.

For complete accessibility information and best practices, refer to the [form field accessibility documentation](/libs/design/form-field/README.md#accessibility).

### Built-in behavior
- `<daff-error-message>` is set to `aria-live="polite"` by default so assistive technology only announce errors when they appear

When used with a [form field](/libs/design/form-field/README.md):
- `<daff-form-label>` automatically associates with form controls
- `<daff-hint>` and `<daff-error-message>` are linked to form controls via `aria-describedby`
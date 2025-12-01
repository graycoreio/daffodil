# Form
Form provides components for building accessible and well-structured forms, including error messages, hints, and labels for form-related content.

## Overview
This package includes reusable form components that help create consistent and accessible form experiences:

- **Labels** (`<daff-form-label>`): Accessible labels for form controls
- **Hints** (`<daff-hint>`): Helpful information and validation hints
- **Error Messages** (`<daff-error-message>`): Validation error messages for form controls

These components can be used independently or within a [form field](/libs/design/form-field/README.md) to organize and style form-related content consistently.

## Usage
To use form, import `DAFF_FORM_HELPER_COMPONENTS` directly into your custom component:

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
These components include built-in accessibility features:
- `<daff-error-message>` is set to `aria-live="polite"` by default so assistive technology only announce errors when they appear

When used with a [form field](/libs/design/form-field/README.md):
- `<daff-form-label>` automatically associates with form controls
- `<daff-hint>` and `<daff-error-message>` are linked to form controls via `aria-describedby`

For complete accessibility information and best practices, refer to the [form field accessibility documentation](/libs/design/form-field/README.md#accessibility).
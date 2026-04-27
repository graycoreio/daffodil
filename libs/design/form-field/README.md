# Form Field
Form field is a wrapping component that provides consistent styling and behavior for form control elements.

## Overview
Form field is used to style certain controls that would otherwise be impossible to style with normal CSS and organize labels, hints, and error messages alongside their associated form controls.

## Supported controls
The following Daffodil Design components are designed to work inside a form field:

- [Native Input](/libs/design/input/README.md)
- [Native Select](/libs/design/native-select/README.md)
- [Native Textarea](/libs/design/textarea/README.md)
- [Custom Select](/libs/design/select/README.md)
- [Quantity Field](/libs/storefront/quantity-field/README.md)

## Usage

Import `DAFF_FORM_FIELD_COMPONENTS` into your component:

```ts
import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
export class CustomComponent {}
```

> **Deprecation notice:**
> 
> `DaffFormFieldModule` is deprecated. Use the standalone component imports instead.

## Anatomy
A form field is composed of a wrapper, label, form control, prefix, suffix, action, hint, and error message:

```html
<daff-form-field>
  <daff-form-label>Email</daff-form-label>
  <fa-icon daffPrefix [icon]="faEnvelope"></fa-icon>
  <input daff-input type="email" name="email" required />
  <fa-icon daffSuffix [icon]="faCheck"></fa-icon>
  <button daffFormFieldAction>Clear</button>
  <daff-hint>We'll never share your email.</daff-hint>
  <daff-error-message>Email is a required field.</daff-error-message>
</daff-form-field>
```

- **`<daff-form-field>`**: The wrapper component that holds all form field content.
- **`<daff-form-label>`**: The label for the form control. An asterisk is appended automatically when the control is required.
- **Form control**: Any element implementing `DaffFormFieldControl` (See [supported controls](/libs/design/form-field/README.md#supported-controls))
- **`[daffPrefix]`**: A leading visual, typically an icon, displayed before the form control.
- **`[daffSuffix]`**: A trailing visual, typically an icon, displayed after the form control.
- **`[daffFormFieldAction]`**: An action element, typically a button, attached to the form control.
- **`<daff-hint>`**: Helpful information displayed below the form field.
- **`<daff-error-message>`**: A validation error displayed below the form field, positioned after any hints.

> **Warning**
>
> The `DaffFormLabelDirective` (using `daffFormLabel` on `<label>`) is deprecated and will be removed in `v1.0.0`. Use `<daff-form-label>` instead for new implementations.

## Features

### Appearances
Form field supports two `appearances`: `fluid` and `fixed`. It will default to `fluid` if an `appearance` is not specified.

- `fluid`: alternate, stylized UI where the label is placed inside of the form control.
- `fixed`: corresponds with a traditional style where the label is positioned outside and above the form control.

<daff-docs-example-viewer example="form-field-appearances"></daff-docs-example-viewer>

### Action
- Fluid appearance: The action is positioned within the form control's UI.
- Fixed appearance: The action is positioned adjacent to the form control's UI.

> **Note**
>
> In a fluid appearance, avoid using a suffix alongside an action.

<daff-docs-example-viewer example="form-field-with-action"></daff-docs-example-viewer>

### Validated hints
Use the `validated` property on `<daff-hint>` to apply validation styling:

<daff-docs-example-viewer example="form-field-validated-hint"></daff-docs-example-viewer>

### Custom IDs
Form fields automatically generate IDs to handle accessibility. You can override this by setting a custom `id` on the form field when needed for specific labeling requirements.

```html
<daff-form-field id="user-email-address">
  <daff-form-label>Email Address</daff-form-label>
  <input daff-input type="email" />
</daff-form-field>
```

> **Note**
>
> When you provide a custom `id`, the `<daff-form-label>` automatically gets the correct `for` attribute that matches the control's `id`.

### Custom controls
In addition to the controls that Daffodil Design provides, you can create your own custom control by using the `DaffFormFieldControl` interface.

1. Your control component must implement the `DaffFormFieldControl` interface.
2. Provide the appropriate dependency key for the `DaffFormFieldComponent` to hook into. You can do this by adding the key to the `providers` key of your component:

```ts
@Component({
  selector: 'custom-control-component',
  providers: [
    {
      provide: DaffFormFieldControl,
      useExisting: CustomControlComponent
    }
  ],
})
export class CustomControlComponent implements DaffFormFieldControl<any> {}
```

## Examples

### Form field with prefix
<daff-docs-example-viewer example="form-field-with-prefix"></daff-docs-example-viewer>

### Form field with suffix
<daff-docs-example-viewer example="form-field-with-suffix"></daff-docs-example-viewer>

## Best practices
- Always provide labels for accessibility. Use `<daff-form-label>` for the best experience with auto-labelling controls.
- Set meaningful custom IDs for form fields to improve accessibility and form management.

## Accessibility

### Built-in behavior

- `<daff-hint>` and `<daff-error-message>` are linked to the form control via `aria-describedby`.
- `<daff-error-message>` is set to `aria-live="polite"` by default so that assistive technology only announce errors when they appear.
- For controls that support auto-labelling, the component automatically associates labels with controls using `for` and `id` attributes.

> **Note**
>
> If a `<daff-form-label>` is not specified, use the `<label>` element to associate text with form elements explicitly. The `for` attribute of the label must exactly match the `id` of the form control.

```html
<daff-form-field>
  <label for="first-name">First Name</label>
  <input type="text" daff-input name="first-name" id="first-name" />
</daff-form-field>
```

### Developer responsibilities
- Always provide labels for accessibility. Use `<daff-form-label>` within `<daff-form-field>` for the best experience with auto-labelling controls.

## Troubleshooting

### Missing child control
> A DaffFormFieldComponent must contain a DaffFormFieldControl

`DaffFormFieldComponent` requires a child component that implements `DaffFormFieldControl`. To fix this, add a control like `daff-input` inside the form field.
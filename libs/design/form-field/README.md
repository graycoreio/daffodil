# Form Field
Form field is a wrapping component that provides consistent styling and behavior for form control elements.

## Overview
It's used to style certain controls that would otherwise be impossible to style with normal CSS and organize labels, hints, and error messages alongside their associated form controls.

The following Daffodil Design components are designed to work inside a form field:

- [Native Input](/libs/design/input/README.md)
- [Native Select](/libs/design/native-select/README.md)
- [Native Textarea](/libs/design/textarea/README.md)
- [Custom Select](/libs/design/select/README.md)

## Usage

### Within a standalone component
To use form field in a standalone component, import `DAFF_FORM_FIELD_COMPONENTS` directly into your custom component:

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

### Within a module (deprecated)
To use form field in a module, import `DaffFormFieldModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffFormFieldModule } from '@daffodil/design/form-field';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffFormFieldModule,
  ],
})
export class CustomComponentModule { }
```

> **Warning**
>
> This method is deprecated. It's recommended to update all custom components to standalone.

## Anatomy

### Labels
Use `<daff-form-label>` to help users understand what information to enter into a form control. Form fields should always have labels. If a form control is marked as required, an asterisk will be attached to the label to indicate that it's a required field.

```html
<daff-form-field>
  <daff-form-label>First Name</daff-form-label>
  <input daff-input type="text" name="first-name" required />
</daff-form-field>
```

> **Warning**
>
> The `DaffFormLabelDirective` (using `daffFormLabel` on `<label>`) is deprecated and will be removed in `v1.0.0`. Use `<daff-form-label>` instead for new implementations.

### Hints
Hints are shown below the form field and are used to provide helpful information that assists users in correctly completing a field.

```html
<daff-form-field>
  <daff-form-label>Password</daff-form-label>
  <input daff-input type="text" name="password" />
  <daff-hint>Password must have 8 characters.</daff-hint>
</daff-form-field>
```

Use the `validated` property to show hints with validation styling:

```html
<daff-form-field>
  <daff-form-label>Password</daff-form-label>
  <input daff-input type="text" name="password" />
  <daff-hint [validated]="isControlValid">Password must have 8 characters.</daff-hint>
</daff-form-field>
```

### Errors
Error messages are used to display validation errors. They are shown under the form field and are placed last if hints are also used.

```html
<daff-form-field>
  <daff-form-label>Email*</daff-form-label>
  <input daff-input type="text" name="email" />
  @if (control.errors?.required) {
    <daff-error-message>Email is a required field.</daff-error-message>
  }
</daff-form-field>
```

### Action
Use the `[daffFormFieldAction]` element to add an action element to a form field.

- Fluid appearance: The action is positioned within the form control's UI.
- Fixed appearance: The action is positioned adjacent to the form control's UI.

<daffio-example-viewer example="form-field-with-action"></daffio-example-viewer>

### Prefix and suffix
Use the `[daffPrefix]` and `[daffSuffix]` elements to display leading or trailing visuals, typically icons, on either side of the form control.

> **Note**
>
> In a fluid appearance, avoid using suffix alongside an action.

<daffio-example-viewer example="form-field-with-prefix"></daffio-example-viewer>

<daffio-example-viewer example="form-field-with-suffix"></daffio-example-viewer>

## Appearances
Form field supports two `appearances`: `fluid` and `fixed`. It will default to `fluid` if an `appearance` is not specified.

- `fluid`: alternate, stylized UI where the label is placed inside of the form control.
- `fixed`: corresponds with a traditional style where the label is positioned outside and above the form control.

<daffio-example-viewer example="form-field-appearances"></daffio-example-viewer>

## Setting a custom ID
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

## Creating a custom form field control
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

## Best practices
- Always provide labels for accessibility. Use `<daff-form-label>` for the best experience with auto-labelling controls.
- Set meaningful custom IDs for form fields to improve accessibility and form management.

## Accessibility

### Daffodil provides

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

### Error: A DaffFormFieldComponent must contain a DaffFormFieldControl
This error appears when the `DaffFormFieldComponent` is missing a child control. Since form field is intended to only be used with a child component that implements `DaffFormFieldControl`, this error enforces that constraint at development time. To fix this, make sure that the form field has a child component that implements this interface.
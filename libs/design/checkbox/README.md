# Checkbox
Checkbox allows users to select one or multiple options from a set of choices. It can be used independently or grouped together in a checkbox set.

## Overview
Users can select zero, one, or any number of checkboxes. They can be used standalone for single selections or grouped within a checkbox set for multiple related options.

The following components are available for checkboxes:

- **`<daff-checkbox>`**: Individual checkbox
- **`<daff-checkbox-set>`**: Container for grouping related checkboxes

## Usage

### Within a standalone component
To use checkbox in a standalone component, import `DAFF_CHECKBOX_COMPONENTS` directly into your custom component:

```ts
import { DAFF_CHECKBOX_COMPONENTS } from '@daffodil/design/checkbox';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_CHECKBOX_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use checkbox in a module, import `DaffCheckboxModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffCheckboxModule } from '@daffodil/design/checkbox';
import { CustomComponent } from './custom.component';

@NgModule({
  declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffCheckboxModule,
  ],
})
export class CustomComponentModule { }
```

> Deprecation notice: This method is deprecated. It's recommended to update all custom components to standalone.

## Anatomy

### Checkbox
A basic checkbox allows users to make a selection. Place the label text as content inside of `<daff-checkbox>`.

```html
<daff-checkbox value="terms-and-conditions">
  Accept terms and conditions
</daff-checkbox>
```

### Checkbox Set
Group related checkboxes together using `<daff-checkbox-set>` for better organization and accessibility. This provides consistent styling and helps organize multiple checkbox options under a common label.

#### Label
Use `<daff-checkbox-set-label>` to provide a descriptive label for the checkbox set. This helps users understand what the group of checkboxes represents.

```html
<daff-checkbox-set>
  <daff-checkbox-set-label>Preferences</daff-checkbox-set-label>
  <daff-checkbox value="email">Email notifications</daff-checkbox>
  <daff-checkbox value="sms">SMS notifications</daff-checkbox>
  <daff-checkbox value="push">Push notifications</daff-checkbox>
</daff-checkbox-set>
```

## Orientation
Use the `orientation` property to stack checkboxes either `vertical` (default) or `horizontal`.

```html
<daff-checkbox-set orientation="horizontal">
  <daff-checkbox-set-label>Preferences</daff-checkbox-set-label>
  <daff-checkbox value="email">Email notifications</daff-checkbox>
  <daff-checkbox value="sms">SMS notifications</daff-checkbox>
  <daff-checkbox value="push">Push notifications</daff-checkbox>
</daff-checkbox-set>
```

## Setting a custom ID
Auto-generated IDs are provided by default and handle accessibility automatically, but the `id` property can be used to provide alternate labelling if necessary.

```html
<daff-checkbox id="terms-checkbox" value="terms">
  I agree to the terms and conditions
</daff-checkbox>

<daff-checkbox-set id="notification-preferences">
  <daff-checkbox-set-label>Notification Preferences</daff-checkbox-set-label>
  <daff-checkbox value="email">Email</daff-checkbox>
  <daff-checkbox value="sms">SMS</daff-checkbox>
</daff-checkbox-set>
```

## Required
Mark a checkbox as required by using the `required` property. When used with Angular forms, this will automatically be set if the form control has the `Validators.required` validator. A required indicator will be shown next to the label.

```html
<daff-checkbox [required]="true" value="agree">
  I agree to the terms
</daff-checkbox>
```

For checkbox sets, the entire set can be marked as required.

```html
<daff-checkbox-set [required]="true">
  <daff-checkbox-set-label>Required Selection</daff-checkbox-set-label>
  <daff-checkbox value="option1">Option 1</daff-checkbox>
  <daff-checkbox value="option2">Option 2</daff-checkbox>
</daff-checkbox-set>
```

## Disabled
Disable a checkbox by using the `disabled` property. When used with Angular forms, this will automatically be set if the form control is disabled.

```html
<daff-checkbox [disabled]="true" value="unavailable">
  This option is unavailable
</daff-checkbox>
```

## Hints
Hints are shown below the checkbox and are used to provide helpful information that assists users in correctly completing a field.

```html
<daff-checkbox value="newsletter">
  Subscribe to newsletter
  <daff-hint>You can unsubscribe at any time.</daff-hint>
</daff-checkbox>
```

Hints can also be used with checkbox sets:

```html
<daff-checkbox-set>
  <daff-checkbox-set-label>Communication Preferences</daff-checkbox-set-label>
  <daff-checkbox value="email">Email</daff-checkbox>
  <daff-checkbox value="sms">SMS</daff-checkbox>
  <daff-hint>Select at least one communication method.</daff-hint>
</daff-checkbox-set>
```

## Errors
Error messages are used to display validation errors. They are shown under the checkbox or checkbox set.

```html
<daff-checkbox required value="terms">
  I agree to the terms and conditions
  @if (control.errors?.required && control.touched) {
    <daff-error-message>You must agree to the terms.</daff-error-message>
  }
</daff-checkbox>
```

<design-land-example-viewer-container example="checkbox-with-error"></design-land-example-viewer-container>

For checkbox sets:

```html
<daff-checkbox-set [formGroup]="formGroup">
  <daff-checkbox-set-label>Required Selection</daff-checkbox-set-label>
  <daff-checkbox formControlName="option1">Option 1</daff-checkbox>
  <daff-checkbox formControlName="option2">Option 2</daff-checkbox>
  @if (formGroup.invalid && formGroup.touched) {
    <daff-error-message>At least one selection is required.</daff-error-message>
  }
</daff-checkbox-set>
```

<design-land-example-viewer-container example="checkbox-set-with-error"></design-land-example-viewer-container>

## Accessibility
Checkbox implements the [Checkbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/).

### Daffodil provides
- Each `<daff-checkbox>` has `role="checkbox"` with proper `aria-checked` state.
- Checkbox sets have `role="group"` with `aria-labelledby` pointing to the label.
- Labels are automatically associated with controls using `for` and `id` attributes.
- `<daff-hint>` and `<daff-error-message>` are linked via `aria-describedby`.

### Developer responsibilities
Always provide clear, descriptive labels by placing text content inside `<daff-checkbox>` to help users understand what they're selecting.
- Use `<daff-checkbox-set-label>` to label checkbox groups.
- If `<daff-checkbox-set-label>` is not provided, set an `id` to link it with the set's `aria-labelledby`.

### Keyboard interaction
| Key | Action |
| --- | ------ |
| `Space` | Toggles the checkbox between checked and unchecked |
| `Tab` | Moves focus to the next focusable element |
| `Shift + Tab` | Moves focus to the previous focusable element |
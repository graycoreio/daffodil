# Quantity Field
Quantity field is a form control element that switches between native select dropdown and input field based on the quantity value.

## Overview
The quantity field is designed for cart items and product quantities. By default, it displays as a select dropdown for values 1-10 and switches to an input field when a value of 10 or higher is selected. This behavior is configurable.

It **cannot** be used by itself and must be contained within a [form field](/libs/design/form-field/README.md).

<daff-docs-example-viewer example="basic-quantity-field"></daff-docs-example-viewer>

## Usage
To use quantity field, import `DAFF_SF_QUANTITY_FIELD_COMPONENTS` directly into your custom component:

```ts
import { DAFF_SF_QUANTITY_FIELD_COMPONENTS } from '@daffodil/storefront/quantity-field';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_SF_QUANTITY_FIELD_COMPONENTS,
  ],
})
export class CustomComponent {}
```

## Anatomy
Quantity field must be used inside `<daff-form-field>` to enable proper state management and provide enhanced UI features such as hints, error messages, prefixes, and suffixes. The form field component also ensures accessibility compliance. For more details, see the [form field documentation](/libs/design/form-field/README.md).

### Basic structure
```html
<daff-form-field>
  <daff-form-label>Quantity</daff-form-label>
  <daff-sf-quantity-field [formControl]="qtyControl"></daff-sf-quantity-field>
</daff-form-field>
```

## Features

### Range limits
The default allowed range of numbers is 1 to 500. This can be changed by passing in the desired min and max values as inputs. Note that this does not validate the actual input. It merely informs the select which options it should generate and sets the input's min and max attributes. See [input#min](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#min) and [input#max](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#max) for more information.

<daff-docs-example-viewer example="custom-range-quantity-field"></daff-docs-example-viewer>

## Hints
Hints provide additional context or instructions to help users complete the input field correctly. Use `<daff-hint>` within the form field to display helpful information below the input. Unlike error messages, hints are always visible and provide guidance rather than validation feedback.

## States

### Disabled
Quantity field can be disabled in two ways: using Angular's reactive forms with `FormControl` or with the native HTML `disabled` attribute.

<daff-docs-example-viewer example="disabled-quantity-field"></daff-docs-example-viewer>

### Error
Quantity field supports validation and error messages through Angular's form validation system. Use `<daff-error-message>` within the form field to display context-specific error messages. Error messages automatically appear when the quantity field is invalid and has been touched or submitted.

## Accessibility
When `<daff-form-label>` is used within `<daff-form-field>`, the label automatically associates with the input using the `for` and `id` attributes.

If a `<daff-form-label>` is not specified, use the `<label>` element to associate text with form elements explicitly. The `for` attribute of the label must exactly match the `id` of the form control.
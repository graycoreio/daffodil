# Native Select
Native select works alongside the HTML select element, with additional custom styling and functionality.

## Overview
Native select has the same functionality as a native HTML select element, with additional custom styling and functionality. It **cannot** be used by itself and must be contained within a [form field](/libs/design/form-field/README.md).

<daff-docs-example-viewer example="basic-native-select"></daff-docs-example-viewer>

## Usage
To use native select, import `DAFF_NATIVE_SELECT_COMPONENTS` directly into your custom component:

```ts
import { DAFF_NATIVE_SELECT_COMPONENTS } from '@daffodil/design/native-select';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_NATIVE_SELECT_COMPONENTS,
  ],
})
export class CustomComponent {}
```

## Anatomy
Native select must be used inside `<daff-form-field>` to enable proper state management and provide enhanced UI features such as hints, error messages, prefixes, and suffixes. The form field component also ensures accessibility compliance. For more details, see the [form field documentation](/libs/design/form-field/README.md).

### Basic structure
```html
<daff-form-field>
  <daff-form-label>Sort By</daff-form-label>
  <select daff-native-select>
    <option value="price-low-high">Price: Low to High</option>
    <option value="price-high-low">Price: High to Low</option>
    <option value="newest">Newest Arrivals</option>
  </select>
</daff-form-field>
```

## States

### Disabled
Native select can be disabled in two ways: using Angular's reactive forms with `FormControl` or with the native HTML `disabled` attribute.

<daff-docs-example-viewer example="native-select-disabled"></daff-docs-example-viewer>

### Error
Native select supports validation and error messages through Angular's form validation system. Use `<daff-error-message>` within the form field to display context-specific error messages. Error messages automatically appear when the select is invalid and has been touched or submitted.

<daff-docs-example-viewer example="native-select-error"></daff-docs-example-viewer>

Multiple error messages can be displayed conditionally based on the type of validation error. The form field component handles the styling and positioning of error messages.

## Hints
Hints provide additional context or instructions to help users complete the select field correctly. Use `<daff-hint>` within the form field to display helpful information below the select. Unlike error messages, hints are always visible and provide guidance rather than validation feedback.

<daff-docs-example-viewer example="native-select-hint"></daff-docs-example-viewer>

## Accessibility
When `<daff-form-label>` is used within `<daff-form-field>`, the label automatically associates with the select using the `for` and `id` attributes.

If a `<daff-form-label>` is not specified, use the `<label>` element to associate text with form elements explicitly. The `for` attribute of the label must exactly match the `id` of the form control.
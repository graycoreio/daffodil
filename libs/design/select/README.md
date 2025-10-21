# Select
Select allows users to choose from a dropdown panel with a list of options, similar to a native `<select>` element but with an enhanced UI.

## Overview
Use select when you need users to pick one option from a list. It works like a standard dropdown menu but gives you more control over how options look and behave. It **cannot** be used by itself and must be used with a [form field](/libs/design/form-field/README.md).

<design-land-example-viewer-container example="basic-select"></design-land-example-viewer-container>

## Usage
To use select, import the components directly into your custom component:

```ts
import { DAFF_SELECT_COMPONENTS } from '@daffodil/design/select';
import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design/form-field';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_SELECT_COMPONENTS,
    DAFF_FORM_FIELD_COMPONENTS,
  ],
})
export class CustomComponent {}
```

## Anatomy
Select must be used inside a `daff-form-field` to enable proper state management and provide enhanced UI features such as hints, error messages, prefixes, and suffixes. The form field component also ensures accessibility compliance. For more details, see the [form field](/libs/design/form-field/README.md) documentation.

### Basic structure
Use `daffSelectOption` to render a list of options in the select panel:

```html
<daff-form-field>
  <daff-form-label>Select an address</daff-form-label>
  <daff-select [options]="options" [formControl]="selectControl">
    <ng-template daffSelectOption let-option="option">
      <div>{{option.name}}</div>
      <div>{{option.street}}</div>
      <div>{{option.city}}, {{option.state}} {{option.postcode}}</div>
    </ng-template>
  </daff-select>
</daff-form-field>
```

## Accessibility
Select follows the [Combobox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/). The combobox activator is combined with an inner `role="listbox"` element opened in a popup.

### Daffodil provides
- Automatic focus trapping when select panel is open
- `aria-labelledby` associated with the `<daff-form-label>`
- `aria-expanded` state management

### Developer responsibilities
- Provide an accessible label by adding `<daff-form-label>` inside of `<daff-form-field>`

### Keyboard interactions
**When select panel is closed:**

| Key | Action |
| --- | ------ |
| `Enter` / `Space` | Open the select panel |
| `Down Arrow` | Open the select panel |
| `Alt` + `Down Arrow` | Open the select panel |
| `Up Arrow` | Open the select panel |
| `Alt` + `Up Arrow` | Open the select panel |

**When select panel is opened:**
| Key | Action |
| --- | ------ |
| `Enter` / `Space` | Select the active option |
| `Escape` | Close the select panel and return focus to select |
| `Down Arrow` | Move focus to next option |
| `Up Arrow` | Move focus to previous option |

## Troubleshooting

### Error: DaffSelectComponent needs to be used with the DaffFormFieldComponent
This error is thrown when a select component is not used with a form field. Make sure your template looks like this:

```html
<daff-form-field>
  <daff-form-label>Select an address</daff-form-label>
  <daff-select [options]="options" [formControl]="selectControl">
    <ng-template daffSelectOption let-option="option">
      <div>{{option.name}}</div>
      <div>{{option.street}}</div>
      <div>{{option.city}}, {{option.state}} {{option.postcode}}</div>
    </ng-template>
  </daff-select>
</daff-form-field>
```
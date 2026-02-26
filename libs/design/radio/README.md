# Radio
Radio allows users to select a single value from a group of options.

## Overview
Use radio when you need users to pick exactly one option from a visible list of choices. Radio buttons are ideal when users need to see and compare all available options at once. It **cannot** be used by itself and must be contained within a `<daff-radio-set>`.

<design-land-example-viewer-container example="basic-radio"></design-land-example-viewer-container>

## Usage

### Within a standalone component
To use radio in a standalone component, import `DAFF_RADIO_COMPONENTS` directly into your custom component:

```ts
import { DAFF_RADIO_COMPONENTS } from '@daffodil/design/radio';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DAFF_RADIO_COMPONENTS,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use radio in a module, import `DaffRadioModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffRadioModule } from '@daffodil/design/radio';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffRadioModule,
  ],
})
export class CustomComponentModule { }
```

> **Warning**
>
> This method is deprecated. It's recommended to update all custom components to standalone.

## Anatomy
Radio must be used inside `<daff-radio-set>` to enable proper state management and grouping. The radio set component manages the selected value and handles the shared `name` attribute for the group.

### Basic structure
Use `<daff-radio-set>` to group related radio buttons and `<daff-radio>` for individual options:

```html
<daff-radio-set name="cardType" value="visa">
  Card Type
  <daff-radio value="visa">Visa</daff-radio>
  <daff-radio value="mastercard">MasterCard</daff-radio>
  <daff-radio value="amex">American Express</daff-radio>
</daff-radio-set>
```

## Reactive forms
Radio can be used with Angular's reactive forms by binding a `FormControl` to the radio set:

<design-land-example-viewer-container example="radio-with-control"></design-land-example-viewer-container>

## Accessibility
Radio follows the [Radio Group WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/). It uses native `<input type="radio">` elements to ensure an accessible experience by default.

### Daffodil provides
- Native radio button semantics with proper grouping
- `aria-labelledby` on the `radiogroup` associated with the `<daff-form-label>`

### Developer responsibilities
- Always provide a visible label for the radio set using `<daff-form-label>`
- Ensure each radio option has descriptive label text

### Keyboard interactions
| Key | Action |
| --- | ------ |
| `Tab` | Move focus to the radio group |
| `Up Arrow` / `Left Arrow` | Move focus to and select the previous option |
| `Down Arrow` / `Right Arrow` | Move focus to and select the next option |

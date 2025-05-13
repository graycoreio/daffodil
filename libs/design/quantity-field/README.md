# Quantity Field
Quantity field is a form control element that switches between a native select and input element.

## Overview
Quantity field is intended for use with cart items and product quantities. The maximum number accepted in a quantity select is configurable and set to 10 by default. It will switch to a quantity input if 10+ is selected.

<design-land-example-viewer-container example="basic-quantity-field"></design-land-example-viewer-container>

## Usage

### Within a standalone component
To use form field in a standalone component, import `DaffQuantityFieldComponent` directly into your custom component:

```ts
import { DaffQuantityFieldComponent } from '@daffodil/design/quantity-field';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DaffQuantityFieldComponent,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use form field in a module, import `DaffQuantityFieldModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffQuantityFieldModule } from '@daffodil/design/quantity-field';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffQuantityFieldModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Range Limits
The default allowed range of numbers is 1 to 500. This can be changed by passing in the desired min and max values as inputs. Note that this does not validate the actual input. It merely informs the select which options it should generate and sets the input's min and max attributes. See [input#min](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#min) and [input#max](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number#max) for more information.

## Disabled quantity field
<design-land-example-viewer-container example="disabled-quantity-field"></design-land-example-viewer-container>

## Custom Select Max Value (15)
The maximum value at which the field will switch to using an input is configurable.
<design-land-example-viewer-container example="select-max-quantity-field"></design-land-example-viewer-container>

## Custom Range Limits (5 - 50)
Custom range limits is the absolute minimum and maximum values can be specified.
<design-land-example-viewer-container example="custom-range-quantity-field"></design-land-example-viewer-container>

# Radio
Radio is used to select a single value from a selection of values.

## Overview
It can be hooked into Angular's `FormControl` to accomodate custom functionality. The `DaffRadioSetComponent` serves as a wrapper around a logical group of radios to provide styling.

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

> Deprecation notice: This method is deprecated. It's recommended to update all custom components to standalone.

## Accessibility
Radio uses native `<input>` HTML elements to ensure an accesible experience by default. It supports inputs to customize the experience for accessibility by allowing native input for `aria-label` and `aria-labelledby`.
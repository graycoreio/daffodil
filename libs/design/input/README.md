# Input
The input component allows a native HTML input element to work with the form field component.

## Overview
The input component has the same functionality as a native HTML `<input>` element, with additional custom styling and functionality. It **cannot** be used by itself and must be contained within a [DaffFormFieldComponent](/libs/design/src/atoms/form/form-field/README.md).

<design-land-example-viewer-container example="input-with-form-field"></design-land-example-viewer-container>

## Usage

### Within a standalone component
To use form field in a standalone component, import `DaffInputComponent` directly into your custom component:

```ts
import { DaffInputComponent } from '@daffodil/design/input';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  imports: [
    DaffInputComponent,
  ],
})
export class CustomComponent {}
```

### Within a module (deprecated)
To use form field in a module, import `DaffInputModule` into your custom module:

```ts
import { NgModule } from '@angular/core';
import { DaffInputModule } from '@daffodil/design/input';
import { CustomComponent } from './custom.component';

@NgModule({
	declarations: [
    CustomComponent,
  ],
  exports: [
    CustomComponent,
  ],
  imports: [
    DaffInputModule,
  ],
})
export class CustomComponentModule { }
```

> This method is deprecated. It's recommended to update all custom components to standalone.

## Examples

### Disabled input
The input in this example is disabled using the native HTML disabled attribute.

<design-land-example-viewer-container example="input-disabled"></design-land-example-viewer-container>

### Input with error messages
The input in this example uses the `ReactiveFormsModule` to display errors.

<design-land-example-viewer-container example="input-error"></design-land-example-viewer-container>

### Input with hint
The input in this example has a hint.

<design-land-example-viewer-container example="input-hint"></design-land-example-viewer-container>

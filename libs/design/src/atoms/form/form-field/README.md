# Form field
Form field is a wrapping component for form control elements.

## Overview
It's used to style certain controls that would otherwise be impossible to style with normal css and organize error messages alongside their associated form controls.

## Usage

### Within a standalone component
To use form field in a standalone component, import `DAFF_FORM_FIELD_COMPONENTS` directly into your custom component:

```ts
import { DAFF_FORM_FIELD_COMPONENTS } from '@daffodil/design';

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
import { DaffFormFieldModule } from '@daffodil/design';
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

> This method is deprecated. It's recommended to update all custom components to standalone.

## Creating a custom control that works with form field
Creating a control that works easily with the form field is fairly straightforward. We've provided the `DaffFormFieldControl` abstract class to allow you to implement the required methods and properties on your control in a consistent manner. Implementing this interface will also ensure that any breaking updates will be caught at build time instead of runtime.

1. Your control component must implement the `DaffFormFieldControl` interface.
2. Provide the appropriate dependency key for the `DaffFormFieldComponent` to hook into. You can do this by adding the key to the `providers` key of your component definition as follows:

```ts
@Component({
  selector: 'custom-control-component',
  ...
  providers: [
    {
      provide: DaffFormFieldControl,
      useExisting: CustomControlComponent
    }
  ],
})
export class CustomControlComponent implements DaffFormFieldControl<any> {
  ...
}
```

You can see examples of controls meeting this interface in the `DaffInputComponent` and `DaffNativeSelectComponent`. 

## Troubleshooting

### Error: A DaffFormFieldComponent must contain a DaffFormFieldControl
This error appears when the `DaffFormFieldComponent` is missing a child control. As this component is intended to only be used with a child component that implements `DaffFormFieldControl`, this error enforces that constraint at development time. To fix, make sure that the `<daff-form-field>` has a child component that implements this interface. An example of some components that we've built include: `DaffInputComponent` and `DaffNativeSelectComponent`.

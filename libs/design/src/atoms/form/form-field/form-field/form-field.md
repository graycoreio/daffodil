# Form Field Component

`daff-form-field` is a wrapping component for form control elements. It is used to style certain controls that would otherwise be impossible to style with normal css and organize error messages alongside their associated form controls.

## Usage

```
<daff-form-field>
  <input daff-input type="text" placeholder="Email" name="email" />
  <daff-error-message *ngIf="requiredError">This field is required.</daff-error-message>
</daff-form-field>
```

## Creating a custom DaffFormFieldControl that works with DaffFormField

Creating a control that works easily with the form field is fairly straightforward. We've provided the `DaffFormFieldControl` abstract class to allow you to implement the required methods and properties on your control in a consistent manner. Implementing this interface will also ensure that any breaking updates will be caught at build time, instead of runtime.

To start, your control component must implement the `DaffFormFieldControl` interface. Once implemented, all you have to is provide the appropriate dependency key for the `DaffFormField` to hook into. You can do this by adding the key to the `providers` key of your component definition as follows:

```ts
@Component({
  selector: 'some-component',
  ...
  providers: [{provide: DaffFormFieldControl, useExisting: SomeComponent}],
})
export class SomeComponent implements DaffFormFieldControl<any> {
  ...
}
```

You can see examples of controls meeting this interface on `DaffInput` and `DaffNativeSelect`. 

## Troubleshooting

### Error: A DaffFormFieldComponent must contain a DaffFormFieldControl
This error appears when your `DaffFormField` is missing a child control. As this component is intended to only be used with a child component that implements `DaffFormFieldControl` this error enforces that constraint at development time. To fix, make sure that your `daff-form-field` has a child component that implements this interface. An example of some components that we've built include: `daff-input` and `daff-native-select`.

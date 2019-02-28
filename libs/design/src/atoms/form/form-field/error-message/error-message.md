# Error Message Component

`daff-error-message` is a component that works alongside the the `daff-form-field` component to style and place the error message and its associated form control element appropriately.

## Usage

```
<daff-form-field>
  <input daff-input type="text" placeholder="Email" name="email" />
  <daff-error-message *ngIf="requiredError">This field is required.</daff-error-message>
</daff-form-field>
```

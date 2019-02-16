# Form Field Component

`daff-form-field` is a wrapper for form control elements that is used to organize and display error messages along with their associated form control elements.

## Usage

```
<daff-form-field>
  <input daff-input type="text" placeholder="Email" name="email" />
  <daff-error-message *ngIf="requiredError">This field is required.</daff-error-message>
</daff-form-field>
```
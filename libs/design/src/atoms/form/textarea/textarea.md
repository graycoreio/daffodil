# Textarea
`[daff-textarea]` is a component selector that allows the native `<textarea>` element to work with `<daff-form-field>`. It has the same functionality as a native `<textarea>` and contains custom styling and functionality. It is used for multi-line text input. It can not be used by itself and must be contained inside of a `<daff-form-field>`.

## Form Field Features
There are many features in `<daff-form-field>` that can be used with the `[daff-textarea]` component. These include `[daffFormLabel]` and `<daff-error-message>`.

For additional information about these features, see the <a href="/form-field">form field</a> documentation.

## Accessibility
  The `[daff-textarea]` component works with the native `<textarea>` element to provide an accessible experience. `[daffFormLabel` should always be used in conjuction with `[daff-textarea]` even if `placeholder="placeholder text"` is used. An error will occur if `[daffFormLabel]` is not defined.

## Usage
```
<h3>Basic Textarea</h3>
<daff-form-field>
  <label daffFormLabel>Comments/Questions?</label>
  <textarea daff-textarea [formControl]="comments"></textarea>
  <daff-error-message *ngIf="comments.invalid">This field is required.</daff-error-message>
</daff-form-field>

<h3>Disabled Textarea</h3>
<daff-form-field>
  <label daffFormLabel>Comments/Questions?</label>
  <textarea daff-textarea [formControl]="comments2"></textarea>
</daff-form-field>
```

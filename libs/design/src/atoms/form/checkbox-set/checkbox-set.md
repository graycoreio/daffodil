# Checkbox Set
`<daff-checkbox-set>` wraps a set of `<daff-checkbox>`es and allows the addition of a 'required' `<daff-error-message>`.

Its focus and touch states are derived from the states of the `<daff-checkbox>`es it contains. As a ControlValueAccessor, the `<daff-checkbox-set>` only takes a `formControl` as an input. Its initial value is an array of the names of the checkboxes that should be initially checked. The `<daff-checkbox-set>` should never be used in conjunction with the `<daff-form-field>` component.

## Usage
```
<daff-checkbox-set [formControl]="checkboxSet">
  <daff-checkbox [value]="'checkbox1'">Checkbox 1</daff-checkbox>
  <daff-checkbox [value]="'checkbox2'">Checkbox 2</daff-checkbox>
  <daff-checkbox [value]="'checkbox3'">Checkbox 3</daff-checkbox>
</daff-checkbox-set>
```
# Radio Set
`<daff-radio-set>` wraps a set of `<daff-radio>`s and as a `ControlValueAccessor`, it takes an Angular `FormControl` as an input. The value of the `FormControl` is the id of the selected radio, and this value will be managed by the `<daff-radio-set>` in conjunction with the contained `<daff-radio>`s.

The `<daff-radio-set>` should never be used with the `<daff-form-field>` component.

## Direction
The direction of a radio set can be defined by using the `direction` property. By default, the direction of a radio set is `vertical`.
- Supported modes: `vertical | horizontal`

## Accessibility
A radio set should be given a meaningful label by using `aria-label` or `aria-labelledby`.

## Usage
```
<daff-radio-set [formControl]="formControl">
  <daff-radio [name]="'option'" [label]="'Select Option 1'" [id]="'option-1'"></daff-radio>
  <daff-radio [name]="'option'" [label]="'Select Option 2'" [id]="'option-2'"></daff-radio>
</daff-radio-set>

<daff-radio-set [formControl]="formControl">
  <daff-radio 
    [name]="'option'" 
    [label]="'Select Option 1'" 
    [id]="'option-1'"
    [subLabel]="'Sub-label'"
    [price]="9.99"></daff-radio>
  <daff-radio 
    [name]="'option'" 
    [label]="'Select Option 2'" 
    [id]="'option-2'"
    [subLabel]="'Sub-label'"
    [price]="11.99"></daff-radio>
</daff-radio-set>
```

# Checkbox
`<daff-checkbox>` is a custom ControlValueAccessor made to be compatible with `<daff-checkbox-set>`.

When used as a standalone checkbox, it should be passed its own formControl. When used in conjunction with `<daff-checkbox-set>`, `<daff-checkbox>` should only be passed a value that identifies the checkbox, while the `<daff-checkbox-set>` takes care of managing the formControl. [View Checkbox Set Documentation](/libs/daff/src/atoms/form/checkbox-set/checkbox-set.md)

## Checkbox Label
`[daffFormLabel]` is used to provide content to `<daff-checkbox>`. If you don't want a checkbox to have a label, you can leave `<daff-checkbox>` blank and use `aria-label` or `aria-labelledby` to specify a label for accessibility considerations.

## Accessbility
The `<daff-checkbox>` component works with the native `<input type="checkbox">` element to provide an accessible experience. This native checkbox is automatically labelled by the content placed inside of `<daff-checkbox>`.

Checkboxes without content need to be given meaningful labels using `aria-label` or `aria-labelledby`.

## Usage
As a standalone checkbox:
```
<daff-checkbox [formControl]="checkbox" id="checkbox" name="checkbox" value="checkbox">Check me!</daff-checkbox>
```

When used with a `<daff-checkbox-set>` ([Checkbox Set Documentation](/libs/daff/src/atoms/form/checkbox-set/checkbox-set.md)):
```
<daff-checkbox-set [formControl]="brands">
  <label daffFormLabel>Brands</label>
  <daff-checkbox id="titleist" name="brands" value="titleist">Titleist</daff-checkbox>
  <daff-checkbox id="callaway" name="brands" value="'callaway">Callaway</daff-checkbox>
  <daff-checkbox id="nike" name="brands" value="nike">Nike</daff-checkbox>
</daff-checkbox-set>
```
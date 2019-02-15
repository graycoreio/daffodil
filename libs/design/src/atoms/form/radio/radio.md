# Radio Button
`daff-radio` enhances the styling of a native `<input type="radio">` radio button.

All radio buttons with the same `name` makes up a set where only one radio button may be selected at a time.

## Radio Label
The `daff-radio-label` is used to define content within the `<daff-radio>` element.

## Usage
```
<daff-radio>
  <input daff-radio-input type="radio" name="shipping" value="free" id="free"/>
  <label daff-radio-label for="free">Free</label>
</daff-radio>
<daff-radio>
  <input daff-radio-input type="radio" name="shipping" value="1day" id="1day"/>
  <label daff-radio-label for="1day">1 Day</label>
</daff-radio>
```
# Radio
`<daff-radio>` provides the same functionality as a native `<input type="radio">` and contains custom styling and functionality. Radios are generally used as a set of related options within a group, and should usually be used with a `<daff-radio-set>`

All `<daff-radio>`s with the same `name` make up a group from which only one radio button may be selected at a time. The style of the radio will change to the bordered, multiline version if a "subLabel" input is provided. Otherwise, it will just be a simple radio.

## Usage
```
<daff-radio-set [formControl]="formControl">
  <daff-radio [name]="'option'" [id]="'option-1'">Select Option 1</daff-radio>
  <daff-radio [name]="'option'" [id]="'option-2'">Select Option 2</daff-radio>
</daff-radio-set>

<daff-radio-set [formControl]="formControl">
  <daff-radio [name]="'option'" [id]="'option-1'">
    <div class="radio-content">
      <div>Select Option 1</div><span>$9.99</span>
      <div>Sub-label</div>
    </div>
  </daff-radio>
  <daff-radio [name]="'option'" [id]="'option-2'">
    <div class="radio-content">
      <div>Select Option 2</div><span>$11.99</span>
      <div>Sub-label</div>
    </div>
  </daff-radio>
</daff-radio-set>
```

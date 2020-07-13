# Checkbox and CheckboxSet

The `DaffCheckboxComponent` is used to toggle an individual selection in a form. It can be hooked into Angular's `FormControl` to accomodate custom functionality. The `DaffCheckboxSetComponent` serves as a wrapper around a logical group of radios to provide styling.

## Accessibility

The `DaffCheckboxComponent` uses native `<input>` HTML elements to ensure an accesible experience by default.

## DaffCheckbox Properties

Property | Name            |  Type   |                                                                                         Description
-------- | --------------- | :-----: | --------------------------------------------------------------------------------------------------:
Input    | checked         | boolean |                 The value representIng whether the checkbox is checked. default is equal to `false` |
Input    | value           | string  |                                                                           The value of the checkbox |
Input    | id              | string  | The id of the checkbox. It is uniquely generated but can be overwritten by the user. Must be unique |
Input    | name            | string  |                                                                            The name of the checkbox |
Output   | becameChecked   | boolean |                                        An event that emits when the `checked` input becomes `true`. |
Output   | becameUnchecked | boolean |                                       An event that emits when the `checked` input becomes `false`. |

## DaffCheckboxSet Properties

Property | Name      |  Type  |                                                                                                             Description
-------- | --------- | :----: | ----------------------------------------------------------------------------------------------------------------------:
Input    | name      | string |                                                                                            The name of the checkbox-set |
Input    | formArray | string | A `FormArray` object associated with the checkbox-set. When provided it will give the checkbox-set extra functionality. |
| Function    |  getValues  |       any[] | A list of all the selected values from the `forms` input array |

## Usage

### component.html

```html
<h1>Daff Checkbox</h1>

<daff-checkbox-set [formArray]="checkboxArray">
  <daff-checkbox [formControl]="checkboxArray.at(0)" value="option1">Option 1 </daff-checkbox>
  <daff-checkbox [formControl]="checkboxArray.at(1)" value="option2">Option 2 </daff-checkbox>
  <daff-checkbox [formControl]="checkboxArray.at(2)" value="option3">Option 3 </daff-checkbox>
</daff-checkbox-set>
```

### component.ts

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'checkbox-component',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'checkbox-component',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {

  option1 = new FormControl();
  option2 = new FormControl();
  option3 = new FormControl();
  checkboxArray = new FormArray([this.option1, this.option2, this.option3]);

}
```

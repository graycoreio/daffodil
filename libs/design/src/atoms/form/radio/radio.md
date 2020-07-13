# DaffRadio and DaffRadioSet
The `DaffRadioComponent` is used to select a single value from a selection of values. It can be hooked into Angular's `FormControl` to accomodate custom functionality. The `DaffRadioSetComponent` serves as a wrapper around a logical group of radios to provide styling.

## Accessibility
The `DaffRadioComponent` uses native `<input>` HTML elements to ensure an accesible experience by default. It supports inputs to customize the experience for accessibility by allowing native input for `aria-label` and `aria-labelledby`.

## DaffRadio Inputs

Property | Name            |  Type   |                                                                                         Description
---------|------- | :-----: | ---------------------------------------------------------------------------:
Input | checked | boolean | The value representing whether the radio is checked. default is equal to `false`|
Input | value   | string  | The value of the radio | 
Input |  id | string | The id of the radio. It is uniquely generated but can be overwritten by the user. Must be unique |
Input |  name | string | The name of the radio |
Input |  label | string | The label for the radio. Used for setting `aria-label` attribute. Defaults to equal name if nothing is provided. |
Output | selectionChange | boolean | An event that emits everytime a selection has been changed.|



## DaffRadioSet Properties

Name    |  type   |                                                                  Description
------- | :-----: | ---------------------------------------------------------------------------:
| name | string | The name of the radio-set |

## Usage

##### component.html
```html
<h1>Daff Radio</h1>

<daff-radio-set [formGroup]="radioGroup" name="race">
  <daff-radio formControlName="race" value="Terran">Terran</daff-radio>
  <daff-radio formControlName="race" value="Protoss">Protoss</daff-radio>
  <daff-radio formControlName="race" value="Zerg">Zerg</daff-radio>
</daff-radio-set>
```
##### component.ts
```ts
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'radio-component',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {

  radioGroup = new FormGroup({
    race: new FormControl('Terran')
  });

}
```
import { FormGroup } from '@angular/forms';

import { DynamicFormElement } from './dynamic-form-element';

export interface DynamicFormBuilderInterface {
  create(...args: unknown[]): DynamicFormElement[];
}

export class CreditCardFormBuilder implements DynamicFormBuilderInterface {
  create() {
    return [
      {
        type: 'input',
        id: 'number',
      },
      {
        type: 'input',
        id: 'month',
      },
      {
        type: 'input',
        id: 'year',
      },
      {
        type: 'input',
        id: 'securitycode',
      },
    ];
  }
}

const dynamicFormBuilder = new CreditCardFormBuilder();
const creditCardFormBuilder = new CreditCardFormBuilder();
const addressFormBuilder = new CreditCardFormBuilder();

export const dependsOnSameAsShippingCheckbox = (form: FormGroup) => !!form.get('same-as-shipping').value;

// dynamicFormBuilder.create(
//   creditCardFormBuilder.create(),
//   {
//     input: 'checkbox',
//     id: 'same-as-shipping',
//     value: false,
//   },
//   addressFormBuilder.create({
//     disabled: dependsOnSameAsShippingCheckbox,
//   }),
// );

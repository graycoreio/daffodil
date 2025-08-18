import {
  Component,
  ChangeDetectionStrategy,
  signal,
} from '@angular/core';

import { DynamicFormRendererComponent  } from './dynamic-form';
import { DynamicFormElement } from './dynamic-form-element';

@Component({
  selector: 'demo-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
		<daff-dynamic-form [formElements]="formElements" [gridTemplate]="gridTemplate"></daff-dynamic-form>
	`,
  imports: [
    DynamicFormRendererComponent,
  ],
})
export class DemoFormComponent {

  formElements: DynamicFormElement[] = [
    {
      id: 'firstname',
      type: 'input',
      value: signal(''),
    },
    {
      id: 'lastname',
      type: 'input',
      value: signal(''),
    },
  ];

  gridTemplate = 'firstname lastname';
}

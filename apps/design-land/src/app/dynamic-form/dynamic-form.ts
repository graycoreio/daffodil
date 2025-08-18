import { NgComponentOutlet } from '@angular/common';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Inject,
  output,
  input,
} from '@angular/core';
import { KNOWN_DYNAMIC_FORM_COMPONENTS } from './dynamic-form-components.token';
import { DynamicFormElement } from './dynamic-form-element';


// Given a json model of a form, render this form as a set of components.
// 1. Lazy-Loading - We only want to load the components that are used. i.e. we don't want load all of the code all possible form components.
// 2. Element Expansion - We want to allow clients to be able to configure their own form elements for render
// 3. Form Composition - We want to be able to combine simple controls into more complex controls
// 4. Conditional Rendering - Form elements should be conditioned upon current form state
// 5. Prefill elements from existing state
// 6. Keeping element state up to date with the formGroup state.
export const renderForm = (elements: DynamicFormElement[] = []) => {

};

@Component({
  selector: 'daff-dynamic-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form method="POST">
      @for(formElement of formElements(); track formElement.id) {
        <div [style.grid-area]="formElement.id">
          <ng-template [ngComponentOutlet]="knownFormComponents.get(formElement.type)" [ngComponentOutletInputs]="formElement.context"></ng-template>
        </div>
      }
    </form>
	`,
  host: {
    '[style.grid-template]': 'gridTemplate()',
  },
  imports: [
    NgComponentOutlet,
  ],
})
export class DynamicFormRendererComponent {

  gridTemplate = input<string>();

  formElements = input<DynamicFormElement[]>([]);

  constructor(@Inject(KNOWN_DYNAMIC_FORM_COMPONENTS) public knownFormComponents){}

  submitted = output();

}



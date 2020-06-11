import { BasicCheckboxComponent } from './basic-checkbox/basic-checkbox.component'
import { CheckboxSetComponent } from './checkbox-set/checkbox-set.component'
import { BasicCheckboxModule } from './basic-checkbox/basic-checkbox.module'
import { CheckboxSetModule } from './checkbox-set/checkbox-set.module'


export let CHECKBOX_EXAMPLES = [
  CheckboxSetComponent,
  BasicCheckboxComponent
];

export const CHECKBOX_EXAMPLES_MODULES = [
  BasicCheckboxModule,
  CheckboxSetModule
];
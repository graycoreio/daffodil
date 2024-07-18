import { ComponentExampleWithModule } from '@daffodil/design';

import { BasicInputComponent } from './basic-input/basic-input.component';
import { BasicInputModule } from './basic-input/basic-input.module';
import { InputDisabledComponent } from './input-disabled/input-disabled.component';
import { InputDisabledModule } from './input-disabled/input-disabled.module';
import { InputErrorComponent } from './input-error/input-error.component';
import { InputErrorModule } from './input-error/input-error.module';
import { InputWithFormFieldComponent } from './input-with-form-field/input-with-form-field.component';
import { InputWithFormFieldModule } from './input-with-form-field/input-with-form-field.module';

export const INPUT_EXAMPLES: ComponentExampleWithModule[] = [
  { component: BasicInputComponent, module: BasicInputModule },
  { component: InputWithFormFieldComponent, module: InputWithFormFieldModule },
  { component: InputDisabledComponent, module: InputDisabledModule },
  { component: InputErrorComponent, module: InputErrorModule },
];

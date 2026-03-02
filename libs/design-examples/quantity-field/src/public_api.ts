import { BasicQuantityFieldExampleComponent } from './basic-quantity-field/basic-quantity-field.component';
import { CustomRangeQuantityFieldExampleComponent } from './custom-range-quantity-field/custom-range-quantity-field.component';
import { DisabledQuantityFieldExampleComponent } from './disabled-quantity-field/disabled-quantity-field.component';
import { SelectMaxQuantityFieldExampleComponent } from './select-max-quantity-field/select-max-quantity-field.component';

export const QUANTITY_FIELD_EXAMPLES = [
  BasicQuantityFieldExampleComponent,
  CustomRangeQuantityFieldExampleComponent,
  DisabledQuantityFieldExampleComponent,
  SelectMaxQuantityFieldExampleComponent,
];
export { provideDaffDesignQuantityFieldExamplesContent } from './provider';

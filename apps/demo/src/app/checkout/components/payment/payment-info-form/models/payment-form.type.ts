import {
  FormControl,
  FormGroup,
} from '@angular/forms';

export type PaymentInfoFormGroup = FormGroup<{
  name: FormControl<string>;
  cardnumber: FormControl<string>;
  month: FormControl<string>;
  year: FormControl<string>;
  securitycode: FormControl<string>;
}>;



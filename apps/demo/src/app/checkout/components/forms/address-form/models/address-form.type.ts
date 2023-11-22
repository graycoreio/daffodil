import {
  FormControl,
  FormGroup,
} from '@angular/forms';

import {
  DaffCountry,
  DaffSubdivision,
} from '@daffodil/geography';

export type AddressFormGroup = FormGroup<{
  firstname: FormControl<string>;
  lastname: FormControl<string>;
  street: FormControl<string>;
  city: FormControl<string>;
  country: FormControl<DaffCountry['id']>;
  state: FormControl<DaffSubdivision['id']>;
  postcode: FormControl<string>;
  telephone: FormControl<string>;
}>;

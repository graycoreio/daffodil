import {
  FormControl,
  FormGroup,
} from '@angular/forms';

import {
  DaffCountry,
  DaffSubdivision,
} from '@daffodil/geography';

export interface DemoCheckoutAddressForm {
  firstname: string;
  lastname: string;
  street: string;
  city: string;
  country: DaffCountry['id'];
  region: DaffSubdivision['id'];
  postcode: string;
  telephone: string;
};

export type DemoCheckoutAddressFormGroup = FormGroup<{
  firstname: FormControl<string>;
  lastname: FormControl<string>;
  street: FormControl<string>;
  city: FormControl<string>;
  country: FormControl<DaffCountry['id']>;
  region: FormControl<DaffSubdivision['id']>;
  postcode: FormControl<string>;
  telephone: FormControl<string>;
}>;

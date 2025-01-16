import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  Observable,
  Subject,
  of,
  takeUntil,
} from 'rxjs';

import {
  DaffInputModule,
  DaffNativeSelectModule,
  DaffFormFieldModule,
} from '@daffodil/design';
import {
  DaffCountry,
  DaffSubdivision,
} from '@daffodil/geography';
import {
  DaffCountryList,
  DaffCountryLoad,
  DaffGeographyFacade,
  DaffGeographyStateModule,
} from '@daffodil/geography/state';

import { DemoCheckoutAddressFormGroup } from '../../models/address-form.type';

@Component({
  selector: 'demo-checkout-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffInputModule,
    DaffNativeSelectModule,
    DaffFormFieldModule,
    DaffGeographyStateModule,
  ],
})
export class DemoCheckoutAddressFormComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject<boolean>();

  @Input() formGroup: DemoCheckoutAddressFormGroup;

  countrySelectValues$: Observable<DaffCountry[]>;
  stateSelectValues$: Observable<DaffSubdivision[]> = of([]);

  constructor(
    private geographyFacade: DaffGeographyFacade,
  ) {}

  ngOnInit(): void {
    this.geographyFacade.dispatch(new DaffCountryList());

    if (this.formGroup.value.country) {
      this.countrySelected(this.formGroup.value.country);
    }

    this.countrySelectValues$ = this.geographyFacade.countries$;
    this.formGroup.controls.country.valueChanges.pipe(
      takeUntil(this._destroyed$),
    ).subscribe(this.countrySelected.bind(this));
  }

  ngOnDestroy(): void {
    this._destroyed$.next(true);
  }

  private countrySelected(country: DaffCountry['id']) {
    this.geographyFacade.dispatch(new DaffCountryLoad(country));
    this.stateSelectValues$ = this.geographyFacade.getCountrySubdivisions(country);
  }
}

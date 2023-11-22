import {
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  Observable,
  Subject,
  of,
  takeUntil,
} from 'rxjs';

import {
  DaffCountry,
  DaffSubdivision,
} from '@daffodil/geography';
import {
  DaffCountryList,
  DaffCountryLoad,
  DaffGeographyFacade,
} from '@daffodil/geography/state';

import { AddressFormGroup } from '../../models/address-form.type';

@Component({
  selector: 'demo-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject<boolean>();

  @Input() formGroup: AddressFormGroup;
  @Input() submitted: boolean;

  countrySelectValues$: Observable<DaffCountry[]>;
  stateSelectValues$: Observable<DaffSubdivision[]> = of([]);

  constructor(
    private geographyFacade: DaffGeographyFacade,
  ) {}

  ngOnInit(): void {
    this.geographyFacade.dispatch(new DaffCountryList());

    this.countrySelectValues$ = this.geographyFacade.countries$;
    this.formGroup.controls.country.valueChanges.pipe(
      takeUntil(this._destroyed$),
    ).subscribe((country) => {
      this.geographyFacade.dispatch(new DaffCountryLoad(country));
      this.stateSelectValues$ = this.geographyFacade.getCountrySubdivisions(country);
    });
  }

  ngOnDestroy(): void {
    this._destroyed$.next(true);
  }
}

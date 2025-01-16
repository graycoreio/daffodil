import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { BehaviorSubject } from 'rxjs';

import { DaffCountry } from '@daffodil/geography';
import { DaffGeographyTestingDriverModule } from '@daffodil/geography/driver/testing';
import {
  DaffCountryList,
  DaffCountryLoad,
} from '@daffodil/geography/state';
import {
  DaffGeographyStateTestingModule,
  MockDaffGeographyFacade,
} from '@daffodil/geography/state/testing';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import { DemoCheckoutAddressFormComponent } from './address-form.component';
import { DemoCheckoutAddressFormFactory } from '../../factories/address-form.factory';
import { DemoCheckoutAddressFormGroup } from '../../models/address-form.type';

@Component({
  template: `
    <demo-checkout-address-form
      [formGroup]="formGroupValue"
    ></demo-checkout-address-form>
  `,
  imports: [
    DemoCheckoutAddressFormComponent,
  ],
})
class WrapperComponent {
  formGroupValue: DemoCheckoutAddressFormGroup;
}

describe('DemoCheckoutAddressFormComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: DemoCheckoutAddressFormComponent;
  let geographyFacade: MockDaffGeographyFacade;
  let countryFactory: DaffCountryFactory;
  let mockCountry: DaffCountry;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffGeographyStateTestingModule,
        StoreModule.forRoot(),
        EffectsModule.forRoot(),
        DaffGeographyTestingDriverModule.forRoot(),
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    geographyFacade = TestBed.inject(MockDaffGeographyFacade);
    countryFactory = TestBed.inject(DaffCountryFactory);

    mockCountry = countryFactory.create();
    geographyFacade.countries$.next([mockCountry]);
    spyOn(geographyFacade, 'dispatch');
    spyOn(geographyFacade, 'getCountrySubdivisions').withArgs(mockCountry.id).and.returnValue(new BehaviorSubject(mockCountry.subdivisions));

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.formGroupValue = TestBed.inject(DemoCheckoutAddressFormFactory).create();

    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('demo-checkout-address-form')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take formGroup as input', () => {
    expect(component.formGroup).toEqual(wrapper.formGroupValue);
  });

  it('should load the country list', () => {
    expect(geographyFacade.dispatch).toHaveBeenCalledWith(new DaffCountryList());
  });

  describe('when a country is selected', () => {
    beforeEach(() => {
      component.formGroup.controls.country.patchValue(mockCountry.id);
    });

    it('should load the country', () => {
      expect(geographyFacade.dispatch).toHaveBeenCalledWith(new DaffCountryLoad(mockCountry.id));
    });

    it('should render a list of the subdivisions', () => {
      expect(component.stateSelectValues$).toBeObservable(cold('a', { a: mockCountry.subdivisions }));
    });
  });
});

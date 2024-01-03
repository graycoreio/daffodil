import { Component } from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { cold } from 'jasmine-marbles';
import { BehaviorSubject } from 'rxjs';

import {
  DaffInputModule,
  DaffNativeSelectComponent,
  DaffNativeSelectModule,
  DaffInputComponent,
} from '@daffodil/design';
import { DaffFormFieldModule } from '@daffodil/design/forms/form-field';
import { DaffCountry } from '@daffodil/geography';
import { DaffCountryLoad } from '@daffodil/geography/state';
import {
  DaffGeographyStateTestingModule,
  MockDaffGeographyFacade,
} from '@daffodil/geography/state/testing';
import { DaffCountryFactory } from '@daffodil/geography/testing';

import { AddressFormComponent } from './address-form.component';
import { AddressFormFactory } from '../../factories/address-form.factory';
import { AddressFormGroup } from '../../models/address-form.type';

@Component({
  template: `
    <demo-address-form
      [formGroup]="formGroupValue"
      [submitted]="submittedValue"
    ></demo-address-form>
  `,
})
class WrapperComponent {
  formGroupValue: AddressFormGroup;
  submittedValue: boolean;
}

describe('AddressFormComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let component: AddressFormComponent;
  let geographyFacade: MockDaffGeographyFacade;
  let countryFactory: DaffCountryFactory;
  let mockCountry: DaffCountry;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        DaffInputModule,
        DaffNativeSelectModule,
        DaffFormFieldModule,
        DaffGeographyStateTestingModule,
      ],
      declarations: [
        WrapperComponent,
        AddressFormComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    geographyFacade = TestBed.inject(MockDaffGeographyFacade);
    countryFactory = TestBed.inject(DaffCountryFactory);

    mockCountry = countryFactory.create();
    geographyFacade.countries$.next([mockCountry]);
    spyOn(geographyFacade, 'getCountrySubdivisions').withArgs(mockCountry.id).and.returnValue(new BehaviorSubject(mockCountry.subdivisions));

    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    wrapper.formGroupValue = TestBed.inject(AddressFormFactory).create({});

    wrapper.submittedValue = false;

    fixture.detectChanges();

    component = fixture.debugElement.query(By.css('demo-address-form')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take formGroup as input', () => {
    expect(component.formGroup).toEqual(wrapper.formGroupValue);
  });

  it('should be able to take submitted as input', () => {
    expect(component.submitted).toEqual(wrapper.submittedValue);
  });

  describe('on [daff-input]', () => {

    let input: DaffInputComponent;

    beforeEach(() => {
      input = fixture.debugElement.queryAll(By.css('[daff-input]'))[0].componentInstance;
    });

    it('should set formControl', () => {
      expect(input.ngControl.control).toEqual(component.formGroup.controls['firstname']);
    });

    it('should set formSubmitted', () => {
      expect(input.formSubmitted).toEqual(component.submitted);
    });
  });

  describe('on [daff-native-select]', () => {

    let select: DaffNativeSelectComponent;

    beforeEach(() => {
      select = fixture.debugElement.queryAll(By.css('[daff-native-select]'))[0].componentInstance;
    });

    it('should set formSubmitted', () => {
      expect(select.formSubmitted).toEqual(component.submitted);
    });
  });

  describe('when a country is selected', () => {
    beforeEach(() => {
      spyOn(geographyFacade, 'dispatch');
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

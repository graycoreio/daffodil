import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingOptionsComponent } from './shipping-options.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ShippingOptionsService } from '../services/shipping-options.service';
import { ShippingOptionsFactory } from '../factories/shipping-options.factory';

const formBuilder: FormBuilder = new FormBuilder();

const stubFormGroupValue = formBuilder.group({
  id: ['', Validators.required]
});
const stubSubmitted = false;

@Component({
  template: '<demo-shipping-options ' + 
              '[formGroup]="formGroupValue" ' +  
              '[submitted]="submittedValue"></demo-shipping-options>'
})
class WrapperComponent {
  formGroupValue: FormGroup = stubFormGroupValue;
  submittedValue: boolean = stubSubmitted;
};

describe('ShippingOptionsComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let shippingOptionsComponent: ShippingOptionsComponent;
  let shippingOptionsService: ShippingOptionsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ 
        WrapperComponent,
        ShippingOptionsComponent
      ],
      providers: [
        ShippingOptionsService,
        ShippingOptionsFactory
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    shippingOptionsService = TestBed.get(ShippingOptionsService);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();

    shippingOptionsComponent = fixture.debugElement.query(By.css('demo-shipping-options')).componentInstance;
  });

  it('should create', () => {
    expect(shippingOptionsComponent).toBeTruthy();
  });

  it('should be able to take formGroup as input', () => {
    expect(shippingOptionsComponent.formGroup).toEqual(wrapper.formGroupValue);
  });

  it('should be able to take submitted as input', () => {
    expect(shippingOptionsComponent.submitted).toEqual(wrapper.submittedValue);
  });

  it('should set shippingOptions', () => {
    expect(shippingOptionsComponent.shippingOptions).toEqual(shippingOptionsService.getShippingOptions());
  });

  describe('when formControl has not been touched or submitted', () => {
    
    it('should set errorState to false', () => {
      shippingOptionsComponent.formGroup.controls['id'].markAsUntouched();
   
      fixture.detectChanges();

      expect(shippingOptionsComponent.errorState).toBeFalsy();
    });
  });

  describe('when formControl has been touched', () => {

    beforeEach(() => {
      shippingOptionsComponent.formGroup.controls['id'].markAsTouched();
    });

    describe('and does not have an error', () => {
      
      it('should set errorState to false', () => {
        shippingOptionsComponent.formGroup.controls['id'].setValue('valid');
        shippingOptionsComponent.ngDoCheck();

        expect(shippingOptionsComponent.errorState).toBeFalsy();
      });
    });
    
    describe('and has an error', () => {
      
      it('should set errorState to true', () => {
        shippingOptionsComponent.formGroup.controls['id'].setValue(null);
    
        fixture.detectChanges();

        expect(shippingOptionsComponent.errorState).toBeTruthy();
      });
    });
  });

  describe('when errorState is true', () => {
    
    beforeEach(() => {
      shippingOptionsComponent.formGroup.controls['id'].setValue(null);
      shippingOptionsComponent.formGroup.controls['id'].markAsTouched();
      fixture.detectChanges();
    });
    
    it('should set hidden to false on .demo-shipping-options__invalid', () => {
      const hostNativeElement = fixture.debugElement.query(By.css('.demo-shipping-options__invalid')).nativeElement;

      expect(hostNativeElement.hidden).toBeFalsy();
    });
  });

  describe('when errorState is false', () => {
    
    beforeEach(() => {
      shippingOptionsComponent.formGroup.controls['id'].setValue('valid');

      fixture.detectChanges();
    });

    it('should set hidden to true on .demo-shipping-options__invalid', () => {
      const hostNativeElement = fixture.debugElement.query(By.css('.demo-shipping-options__invalid')).nativeElement;

      expect(hostNativeElement.hidden).toBeTruthy();
    });
  });
});

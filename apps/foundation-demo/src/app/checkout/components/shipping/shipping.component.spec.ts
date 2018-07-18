import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingComponent } from './shipping.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';
import { By } from '@angular/platform-browser';
import * as fromFoundationShipping from '../../reducers';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { SetShowShippingForm, ToggleShippingForm } from '../../actions/shipping.actions';
import { of } from 'rxjs';

let stubIsShippingInfoValidValue = true;
let stubShippingAddress: ShippingAddress = {
  firstname: '',
  lastname: '',
  street: '',
  city: '',
  state: '',
  postcode: '',
  telephone: ''
}
let stubSelectedShippingOption: string = 'shipping option';
let stubShowShippingForm: boolean = true;

@Component({template: '<shipping [isShippingInfoValid]="isShippingInfoValidValue" [shippingInfo]="shippingInfoValue" [selectedShippingOption]="selectedShippingOptionValue" (updateShippingInfo)="updateShippingInfoFunction($event)" (selectShippingOption)="selectShippingOptionFunction($event)"></shipping>'})
class TestShipping {
  isShippingInfoValidValue = stubIsShippingInfoValidValue;
  shippingInfoValue: ShippingAddress = stubShippingAddress;
  selectedShippingOptionValue: string = stubSelectedShippingOption;
  updateShippingInfoFunction: Function = () => {};
  selectShippingOptionFunction: Function = () => {};
}

@Component({selector: 'shipping-form', template: ''})
class MockShippingFormComponent {
  @Input() shippingInfo: ShippingAddress;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'shipping-summary', template: ''})
class MockShippingSummaryComponent {
  @Input() shippingInfo: ShippingAddress;
  @Input() selectedShippingOption: string;
  @Output() editShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
}

describe('ShippingComponent', () => {
  let component: TestShipping;
  let fixture: ComponentFixture<TestShipping>;
  let shippingFormComponent: MockShippingFormComponent;
  let shippingSummaryComponent: MockShippingSummaryComponent;
  let shipping: ShippingComponent;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          shippings: combineReducers(fromFoundationShipping.reducers),
        })
      ],
      declarations: [ 
        TestShipping,
        MockShippingFormComponent,
        MockShippingSummaryComponent,
        ShippingComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShipping);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    spyOn(fromFoundationShipping, 'selectShowShippingForm').and.returnValue(stubShowShippingForm);
    spyOn(store, 'dispatch');
    fixture.detectChanges();

    shippingFormComponent = fixture.debugElement.query(By.css('shipping-form')).componentInstance;
    shippingSummaryComponent = fixture.debugElement.query(By.css('shipping-summary')).componentInstance;
    shipping = fixture.debugElement.query(By.css('shipping')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take isShippingInfoValid as input', () => {
    expect(shipping.isShippingInfoValid).toEqual(stubIsShippingInfoValidValue);
  });

  it('should be able to take shippingInfo as input', () => {
    expect(shipping.shippingInfo).toEqual(stubShippingAddress);
  });

  it('should be able to take selectedShippingOption as input', () => {
    expect(shipping.selectedShippingOption).toEqual(stubSelectedShippingOption);
  });

  describe('on <shipping-form>', () => {
    
    it('should set shippingInfo', () => {
      expect(shippingFormComponent.shippingInfo).toEqual(shipping.shippingInfo);
    });
  });

  describe('on <shipping-summary>', () => {
    
    it('should set shippingInfo to value passed by the [shipping-container]', () => {
      expect(shippingSummaryComponent.shippingInfo).toEqual(shipping.shippingInfo);
    });

    it('should set selectedShippingOption to value passed by the [shipping-container]', () => {
      expect(shippingSummaryComponent.selectedShippingOption).toEqual(shipping.selectedShippingOption);
    });
  });

  describe('ngOnInit', () => {

    it('should dispatch a SetShowShippingForm action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new SetShowShippingForm(!stubIsShippingInfoValidValue));
    });
    
    it('should initialize showShippingForm$', () => {
      shipping.showShippingForm$.subscribe((showShippingForm) => {
        expect(showShippingForm).toEqual(stubShowShippingForm);
      });
    });
  });

  describe('when shippingFormComponent emits', () => {
    
    describe('updateShippingInfo', () => {
      
      let emittedValue;

      beforeEach(() => {
        emittedValue = 'emittedValue';
        spyOn(component, 'updateShippingInfoFunction');
        spyOn(shipping, 'toggleShippingView');

        shippingFormComponent.updateShippingInfo.emit(emittedValue);
      });
      
      it('should call hostComponent.updateShippingInfoFunction', () => {
        expect(component.updateShippingInfoFunction).toHaveBeenCalledWith(emittedValue);
      });

      it('should call toggleShippingView', () => {
        expect(shipping.toggleShippingView).toHaveBeenCalled();
      });
    });
  });

  describe('when shippingSummaryComponent emits', () => {
    
    describe('editShippingInfo', () => {
      it('should call toggleShippingView', () => {
        spyOn(shipping, 'toggleShippingView');
  
        shippingSummaryComponent.editShippingInfo.emit();
        
        expect(shipping.toggleShippingView).toHaveBeenCalled();
      });
    });

    describe('selectShippingOption', () => {
      
      it('should call hostComponent.selectShippingOptionFunction', () => {
        spyOn(component, 'selectShippingOptionFunction');

        shippingSummaryComponent.selectShippingOption.emit(stubSelectedShippingOption);
        
        expect(component.selectShippingOptionFunction).toHaveBeenCalledWith(stubSelectedShippingOption);
      });
    });
  });

  describe('toggleShippingView', () => {
    
    it('should dispatch a ToggleShippingForm action', () => {
      shipping.toggleShippingView();

      expect(store.dispatch).toHaveBeenCalledWith(new ToggleShippingForm());
    });
  });

  describe('when showShippingForm$ is true', () => {

    beforeEach(() => {
      shipping.showShippingForm$ = of(true);

      fixture.detectChanges();
    });
    
    it('should show <shipping-form>', () => {
      expect(fixture.debugElement.query(By.css('shipping-form')).nativeElement.hidden).toBeFalsy();
    });

    describe('and shippingInfo is defined', () => {
      
      it('should hide <shipping-summary>', () => {
        expect(fixture.debugElement.query(By.css('shipping-summary')).nativeElement.hidden).toBeTruthy();
      });
    });

    describe('and shippingInfo is null', () => {
      
      it('should not render <shipping-summary>', () => {
        shipping.shippingInfo = null;
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('shipping-summary'))).toBeNull();
      });
    });
  });

  describe('when showShippingForm is false', () => {

    beforeEach(() => {
      shipping.showShippingForm$ = of(false);
      fixture.detectChanges();
    });
    
    it('should not show <shipping-form>', () => {
      expect(fixture.debugElement.query(By.css('shipping-form')).nativeElement.hidden).toBeTruthy();
    });

    it('should show <shipping-summary>', () => {
      expect(fixture.debugElement.query(By.css('shipping-summary')).nativeElement.hidden).toBeFalsy();
    });
  });
});

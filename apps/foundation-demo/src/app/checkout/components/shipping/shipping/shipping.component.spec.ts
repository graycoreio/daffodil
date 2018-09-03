import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { DaffodilAddress } from '@daffodil/core';

import * as fromFoundationCheckout from '../../../reducers';
import { SetShowShippingForm, ToggleShowShippingForm } from '../../../actions/shipping.actions';
import { ShippingComponent } from './shipping.component';

let stubIsShippingAddressValidValue = true;
let stubDaffodilAddress: DaffodilAddress = {
  firstname: '',
  lastname: '',
  street: '',
  city: '',
  state: '',
  postcode: '',
  telephone: ''
}
let stubSelectedShippingOptionId: string = '0';
let stubShowShippingForm: boolean = true;
let stubShowPaymentView: boolean = false;

@Component({
  template: '<shipping [isShippingAddressValid]="isShippingAddressValidValue" ' + 
              '[shippingAddress]="shippingAddressValue" ' + 
              '[selectedShippingOptionId]="selectedShippingOptionIdValue" ' + 
              '[showPaymentView]="showPaymentViewValue" ' + 
              '(updateShippingAddress)="updateShippingAddressFunction($event)" ' + 
              '(selectShippingOption)="selectShippingOptionFunction($event)"></shipping>'
})
class TestShipping {
  isShippingAddressValidValue = stubIsShippingAddressValidValue;
  shippingAddressValue: DaffodilAddress = stubDaffodilAddress;
  selectedShippingOptionIdValue: string = stubSelectedShippingOptionId;
  showPaymentViewValue: boolean = stubShowPaymentView;
  updateShippingAddressFunction: Function = () => {};
  selectShippingOptionFunction: Function = () => {};
}

@Component({selector: 'shipping-form', template: '<ng-content></ng-content>'})
class MockShippingFormComponent {
  @Input() shippingAddress: DaffodilAddress;
  @Input() editMode: boolean;
  @Output() submitted: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'shipping-summary', template: ''})
class MockShippingSummaryComponent {
  @Input() shippingAddress: DaffodilAddress;
  @Input() selectedShippingOptionId: string;
  @Output() editShippingInfo: EventEmitter<any> = new EventEmitter();
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
          shippings: combineReducers(fromFoundationCheckout.reducers),
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
    spyOn(fromFoundationCheckout, 'selectShowShippingForm').and.returnValue(stubShowShippingForm);
    spyOn(store, 'dispatch');

    fixture.detectChanges();

    shippingFormComponent = fixture.debugElement.query(By.css('shipping-form')).componentInstance;
    shippingSummaryComponent = fixture.debugElement.query(By.css('shipping-summary')).componentInstance;
    shipping = fixture.debugElement.query(By.css('shipping')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take isShippingAddressValid as input', () => {
    expect(shipping.isShippingAddressValid).toEqual(stubIsShippingAddressValidValue);
  });

  it('should be able to take shippingAddress as input', () => {
    expect(shipping.shippingAddress).toEqual(stubDaffodilAddress);
  });

  it('should be able to take showPaymentView as input', () => {
    expect(shipping.showPaymentView).toEqual(stubShowPaymentView);
  });
  
  describe('on <shipping-form>', () => {
    
    it('should set shippingAddress', () => {
      expect(shippingFormComponent.shippingAddress).toEqual(shipping.shippingAddress);
    });

    it('should set editMode', () => {
      expect(shippingFormComponent.editMode).toEqual(shipping.showPaymentView);
    });
  });

  describe('on <shipping-summary>', () => {
    
    it('should set shippingAddress', () => {
      expect(shippingSummaryComponent.shippingAddress).toEqual(shipping.shippingAddress);
    });

    it('should set selectedShippingOptionId', () => {
      expect(shippingSummaryComponent.selectedShippingOptionId).toEqual(shipping.selectedShippingOptionId);
    });
  });

  describe('ngOnInit', () => {

    it('should dispatch a SetShowShippingForm action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new SetShowShippingForm(!stubIsShippingAddressValidValue));
    });
    
    it('should initialize showShippingForm$', () => {
      shipping.showShippingForm$.subscribe((showShippingForm) => {
        expect(showShippingForm).toEqual(stubShowShippingForm);
      });
    });
  });

  describe('when shippingFormComponent emits', () => {
    
    describe('submitted', () => {
      
      let emittedValue;

      beforeEach(() => {
        emittedValue = {
          address: 'address',
          shippingOption: {
            id: 'id'
          }
        };

        spyOn(component, 'updateShippingAddressFunction');
        spyOn(component, 'selectShippingOptionFunction');
        spyOn(shipping, 'toggleShippingView');

        shippingFormComponent.submitted.emit(emittedValue);
      });
      
      it('should call hostComponent.updateShippingAddressFunction', () => {
        expect(component.updateShippingAddressFunction).toHaveBeenCalledWith(emittedValue.address);
      });
      
      it('should call hostComponent.selectShippingOptionFunction', () => {
        expect(component.selectShippingOptionFunction).toHaveBeenCalledWith(emittedValue.shippingOption.id);
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
  });

  describe('toggleShippingView', () => {
    
    it('should dispatch a ToggleShowShippingForm action', () => {
      shipping.toggleShippingView();

      expect(store.dispatch).toHaveBeenCalledWith(new ToggleShowShippingForm());
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

    describe('and shippingAddress is defined', () => {
      
      it('should hide <shipping-summary>', () => {
        expect(fixture.debugElement.query(By.css('shipping-summary')).nativeElement.hidden).toBeTruthy();
      });
    });

    describe('and shippingAddress is null', () => {
      
      it('should not render <shipping-summary>', () => {
        shipping.shippingAddress = null;
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

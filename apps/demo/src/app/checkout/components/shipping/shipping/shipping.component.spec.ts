import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { DaffAddress } from '@daffodil/core';

import * as fromDemoCheckout from '../../../reducers';
import { SetShowShippingForm, ToggleShowShippingForm } from '../../../actions/shipping.actions';
import { ShippingComponent } from './shipping.component';
import { cold } from 'jasmine-marbles';

const stubIsShippingAddressValidValue = true;
const stubDaffodilAddress: DaffAddress = {
  firstname: '',
  lastname: '',
  street: '',
  city: '',
  state: '',
  postcode: '',
  telephone: ''
}
const stubSelectedShippingOptionId = '0';
const stubShowPaymentView = false;

@Component({
  template: '<demo-shipping [isShippingAddressValid]="isShippingAddressValidValue" ' + 
              '[shippingAddress]="shippingAddressValue" ' + 
              '[selectedShippingOptionId]="selectedShippingOptionIdValue" ' + 
              '[showPaymentView]="showPaymentViewValue" ' + 
              '(updateShippingAddress)="updateShippingAddressFunction($event)" ' + 
              '(selectShippingOption)="selectShippingOptionFunction($event)"></demo-shipping>'
})
class WrapperComponent {
  isShippingAddressValidValue = stubIsShippingAddressValidValue;
  shippingAddressValue: DaffAddress = stubDaffodilAddress;
  selectedShippingOptionIdValue: string = stubSelectedShippingOptionId;
  showPaymentViewValue: boolean = stubShowPaymentView;
  updateShippingAddressFunction() {};
  selectShippingOptionFunction() {};
}

@Component({selector: 'demo-shipping-form', template: '<ng-content></ng-content>'})
class MockShippingFormComponent {
  @Input() shippingAddress: DaffAddress;
  @Input() editMode: boolean;
  @Output() submitted: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'demo-shipping-summary', template: ''})
class MockShippingSummaryComponent {
  @Input() shippingAddress: DaffAddress;
  @Input() selectedShippingOptionId: string;
  @Output() editShippingInfo: EventEmitter<any> = new EventEmitter();
}

describe('ShippingComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let shippingFormComponent: MockShippingFormComponent;
  let shippingSummaryComponent: MockShippingSummaryComponent;
  let shipping: ShippingComponent;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          demoCheckout: combineReducers(fromDemoCheckout.reducers),
        })
      ],
      declarations: [ 
        WrapperComponent,
        MockShippingFormComponent,
        MockShippingSummaryComponent,
        ShippingComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    store = TestBed.get(Store);

    fixture.detectChanges();

    shippingFormComponent = fixture.debugElement.query(By.css('demo-shipping-form')).componentInstance;
    shippingSummaryComponent = fixture.debugElement.query(By.css('demo-shipping-summary')).componentInstance;
    shipping = fixture.debugElement.query(By.css('demo-shipping')).componentInstance;
  });

  it('should create', () => {
    expect(shipping).toBeTruthy();
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
  
  describe('on <demo-shipping-form>', () => {
    
    it('should set shippingAddress', () => {
      expect(shippingFormComponent.shippingAddress).toEqual(shipping.shippingAddress);
    });

    it('should set editMode', () => {
      expect(shippingFormComponent.editMode).toEqual(shipping.showPaymentView);
    });
  });

  describe('on <demo-shipping-summary>', () => {
    
    it('should set shippingAddress', () => {
      expect(shippingSummaryComponent.shippingAddress).toEqual(shipping.shippingAddress);
    });

    it('should set selectedShippingOptionId', () => {
      expect(shippingSummaryComponent.selectedShippingOptionId).toEqual(shipping.selectedShippingOptionId);
    });
  });

  describe('ngOnInit', () => {
    
    it('should dispatch a SetShowShippingForm action', () => {
      spyOn(store, 'dispatch');
      shipping.ngOnInit();
      expect(store.dispatch).toHaveBeenCalledWith(new SetShowShippingForm(!stubIsShippingAddressValidValue));
    });
    
    it('should initialize showShippingForm$', () => {
      const expected = cold('a', { a: false });
      expect(shipping.showShippingForm$).toBeObservable(expected);
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

        spyOn(wrapper, 'updateShippingAddressFunction');
        spyOn(wrapper, 'selectShippingOptionFunction');
        spyOn(shipping, 'toggleShippingView');

        shippingFormComponent.submitted.emit(emittedValue);
      });
      
      it('should call hostComponent.updateShippingAddressFunction', () => {
        expect(wrapper.updateShippingAddressFunction).toHaveBeenCalledWith(emittedValue.address);
      });
      
      it('should call hostComponent.selectShippingOptionFunction', () => {
        expect(wrapper.selectShippingOptionFunction).toHaveBeenCalledWith(emittedValue.shippingOption.id);
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
      spyOn(store, 'dispatch');
      shipping.toggleShippingView();
      expect(store.dispatch).toHaveBeenCalledWith(new ToggleShowShippingForm());
    });
  });

  describe('when showShippingForm$ is true', () => {

    beforeEach(() => {
      shipping.showShippingForm$ = of(true);

      fixture.detectChanges();
    });
    
    it('should show <demo-shipping-form>', () => {
      expect(fixture.debugElement.query(By.css('demo-shipping-form')).nativeElement.hidden).toBeFalsy();
    });

    describe('and shippingAddress is defined', () => {
      
      it('should hide <demo-shipping-summary>', () => {
        expect(fixture.debugElement.query(By.css('demo-shipping-summary')).nativeElement.hidden).toBeTruthy();
      });
    });

    describe('and shippingAddress is null', () => {
      
      it('should not render <demo-shipping-summary>', () => {
        shipping.shippingAddress = null;
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('demo-shipping-summary'))).toBeNull();
      });
    });
  });

  describe('when showShippingForm is false', () => {

    beforeEach(() => {
      shipping.showShippingForm$ = of(false);
      fixture.detectChanges();
    });
    
    it('should not show <demo-shipping-form>', () => {
      expect(fixture.debugElement.query(By.css('demo-shipping-form')).nativeElement.hidden).toBeTruthy();
    });

    it('should show <demo-shipping-summary>', () => {
      expect(fixture.debugElement.query(By.css('demo-shipping-summary')).nativeElement.hidden).toBeFalsy();
    });
  });
});

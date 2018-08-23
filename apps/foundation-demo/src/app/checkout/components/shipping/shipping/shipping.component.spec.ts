import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { DaffodilAddress, ShippingOption } from '@daffodil/core';

import * as fromFoundationCheckout from '../../../reducers';
import { SetShowShippingForm, ToggleShowShippingForm } from '../../../actions/shipping.actions';
import { ShippingComponent } from './shipping.component';

let stubIsShippingInfoValidValue = true;
let stubDaffodilAddress: DaffodilAddress = {
  firstname: '',
  lastname: '',
  street: '',
  city: '',
  state: '',
  postcode: '',
  telephone: ''
}
let stubSelectedShippingOptionId: number = 0;
let stubShowShippingForm: boolean = true;
let stubShowPaymentView: boolean = false;

@Component({
  template: '<shipping [isShippingInfoValid]="isShippingInfoValidValue" ' + 
              '[shippingInfo]="shippingInfoValue" ' + 
              '[selectedShippingOptionId]="selectedShippingOptionIdValue" ' + 
              '[showPaymentView]="showPaymentViewValue" ' + 
              '(updateShippingInfo)="updateShippingInfoFunction($event)" ' + 
              '(selectShippingOption)="selectShippingOptionFunction($event)" ' + 
              '(continueToPayment)="onContinueToPaymentFunction()"></shipping>'
})
class TestShipping {
  isShippingInfoValidValue = stubIsShippingInfoValidValue;
  shippingInfoValue: DaffodilAddress = stubDaffodilAddress;
  selectedShippingOptionIdValue: number = stubSelectedShippingOptionId;
  showPaymentViewValue: boolean = stubShowPaymentView;
  updateShippingInfoFunction: Function = () => {};
  selectShippingOptionFunction: Function = () => {};
  onContinueToPaymentFunction: Function = () => {};
}

@Component({selector: 'shipping-form', template: '<ng-content></ng-content>', encapsulation: ViewEncapsulation.None})
class MockShippingFormComponent {
  @Input() shippingInfo: DaffodilAddress;
  @Input() selectedShippingOptionId: number;
  @Input() hideContinueToPayment: boolean;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() continueToPayment: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'shipping-options', template: ''})
class MockShippingOptionsComponent {
  @Input() selectedShippingOptionId: number;
  @Input() shippingOptions: ShippingOption[];
  @Output() selectShippingOption: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'shipping-summary', template: ''})
class MockShippingSummaryComponent {
  @Input() shippingInfo: DaffodilAddress;
  @Input() selectedShippingOption: ShippingOption;
  @Output() editShippingInfo: EventEmitter<any> = new EventEmitter();
}

describe('ShippingComponent', () => {
  let component: TestShipping;
  let fixture: ComponentFixture<TestShipping>;
  let shippingFormComponent: MockShippingFormComponent;
  let shippingOptionsComponent: MockShippingOptionsComponent;
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
        MockShippingOptionsComponent,
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
    shippingOptionsComponent = fixture.debugElement.query(By.css('shipping-options')).componentInstance;
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
    expect(shipping.shippingInfo).toEqual(stubDaffodilAddress);
  });

  it('should be able to take selectedShippingOptionId as input', () => {
    expect(shipping.selectedShippingOptionId).toEqual(stubSelectedShippingOptionId);
  });

  it('should be able to take showPaymentView as input', () => {
    expect(shipping.showPaymentView).toEqual(stubShowPaymentView);
  });

  describe('on <shipping-options>', () => {

    it('should set selectedShippingOptionId', () => {
      expect(shippingOptionsComponent.selectedShippingOptionId).toEqual(shipping.selectedShippingOptionId);
    });
    
    it('should set shippingOptions', () => {
      expect(shippingOptionsComponent.shippingOptions).toEqual(shipping.shippingOptions);
    });
  });

  describe('when shippingOptions.selectShippingOption is emitted', () => {
    
    it('should call onSelectShippingOption', () => {
      spyOn(shipping, 'onSelectShippingOption');

      shippingOptionsComponent.selectShippingOption.emit(shipping.shippingOptions[0].id);

      expect(shipping.onSelectShippingOption).toHaveBeenCalledWith(shipping.shippingOptions[0].id);
    });
  });
  
  describe('on <shipping-form>', () => {
    
    it('should set shippingInfo', () => {
      expect(shippingFormComponent.shippingInfo).toEqual(shipping.shippingInfo);
    });

    it('should set selectedShippingOptionId', () => {
      expect(shippingFormComponent.selectedShippingOptionId).toEqual(shipping.selectedShippingOptionId);
    });

    it('should set hideContinueToPayment', () => {
      expect(shippingFormComponent.hideContinueToPayment).toEqual(shipping.showPaymentView);
    });
  });

  describe('on <shipping-summary>', () => {
    
    it('should set shippingInfo', () => {
      expect(shippingSummaryComponent.shippingInfo).toEqual(shipping.shippingInfo);
    });

    it('should set selectedShippingOptionId', () => {
      expect(shippingSummaryComponent.selectedShippingOption).toEqual(shipping.shippingOptions[stubSelectedShippingOptionId]);
    });
  });

  describe('constructor', () => {
    
    it('should generate an array of shippingOptions', () => {
      expect(shipping.shippingOptions.length).toEqual(3);
    });

    it('should generate a shippingOptions array with 0', () => {
      expect(shipping.shippingOptions[0].id).toEqual(0);
    });

    it('should generate a shippingOptions array with 1', () => {
      expect(shipping.shippingOptions[1].id).toEqual(1);
    });

    it('should generate a shippingOptions array with 2', () => {
      expect(shipping.shippingOptions[2].id).toEqual(2);
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

    describe('continueToPayment', () => {
      
      it('should call hostComponent.onContinueToPaymentFunction', () => {
        spyOn(component, 'onContinueToPaymentFunction');

        shippingFormComponent.continueToPayment.emit();

        expect(component.onContinueToPaymentFunction).toHaveBeenCalled();
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

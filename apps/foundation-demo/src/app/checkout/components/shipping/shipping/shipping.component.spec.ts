import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { DaffodilAddress, ShippingOption, ShippingFactory } from '@daffodil/core';

import * as fromFoundationCheckout from '../../../reducers';
import { SetShowShippingForm, ToggleShowShippingForm } from '../../../actions/shipping.actions';
import { ShippingComponent } from './shipping.component';

let shippingFactory: ShippingFactory = new ShippingFactory();

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
let stubShippingOptions: ShippingOption[] = shippingFactory.createShippingOptions();
let stubSelectedShippingOptionId: string = '0';
let stubShowShippingForm: boolean = true;
let stubShowPaymentView: boolean = false;

@Component({
  template: '<shipping [isShippingInfoValid]="isShippingInfoValidValue" ' + 
              '[shippingInfo]="shippingInfoValue" ' + 
              '[selectedShippingOptionId]="selectedShippingOptionIdValue" ' + 
              '[showPaymentView]="showPaymentViewValue" ' + 
              '(updateShippingInfo)="updateShippingInfoFunction($event)" ' + 
              '(selectShippingOption)="selectShippingOptionFunction($event)"></shipping>'
})
class TestShipping {
  isShippingInfoValidValue = stubIsShippingInfoValidValue;
  shippingInfoValue: DaffodilAddress = stubDaffodilAddress;
  selectedShippingOptionIdValue: string = stubSelectedShippingOptionId;
  showPaymentViewValue: boolean = stubShowPaymentView;
  updateShippingInfoFunction: Function = () => {};
  selectShippingOptionFunction: Function = () => {};
}

@Component({selector: 'shipping-form', template: '<ng-content></ng-content>', encapsulation: ViewEncapsulation.None})
class MockShippingFormComponent {
  @Input() shippingInfo: DaffodilAddress;
  @Input() shippingOptions: ShippingOption[];
  @Input() editMode: boolean;
  @Output() submitted: EventEmitter<any> = new EventEmitter();
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

  it('should be able to take isShippingInfoValid as input', () => {
    expect(shipping.isShippingInfoValid).toEqual(stubIsShippingInfoValidValue);
  });

  it('should be able to take shippingInfo as input', () => {
    expect(shipping.shippingInfo).toEqual(stubDaffodilAddress);
  });

  it('should be able to take shippingOptions as input', () => {
    let expectedShippingOptions = [
      {
        id: '0',
        text: 'Standard'
      },
      {
        id: '1',
        text: 'Two Day'
      },
      {
        id: '2',
        text: 'One Day'
      }
    ];

    expect(shipping.shippingOptions).toEqual(expectedShippingOptions);
  });

  it('should be able to take showPaymentView as input', () => {
    expect(shipping.showPaymentView).toEqual(stubShowPaymentView);
  });
  
  describe('on <shipping-form>', () => {
    
    it('should set shippingInfo', () => {
      expect(shippingFormComponent.shippingInfo).toEqual(shipping.shippingInfo);
    });

    it('should set shippingOptions', () => {
      expect(shippingFormComponent.shippingOptions).toEqual(shipping.shippingOptions);
    });

    it('should set editMode', () => {
      expect(shippingFormComponent.editMode).toEqual(shipping.showPaymentView);
    });
  });

  describe('on <shipping-summary>', () => {
    
    it('should set shippingInfo', () => {
      expect(shippingSummaryComponent.shippingInfo).toEqual(shipping.shippingInfo);
    });

    it('should set selectedShippingOption', () => {
      expect(shippingSummaryComponent.selectedShippingOption).toEqual(shipping.shippingOptions[stubSelectedShippingOptionId]);
    });
  });

  describe('constructor', () => {
    
    it('should generate an array of shippingOptions', () => {
      expect(shipping.shippingOptions.length).toEqual(3);
    });

    it('should generate a shippingOptions array with Standard', () => {
      expect(shipping.shippingOptions[0].text).toEqual('Standard');
    });

    it('should generate a shippingOptions array with Two Day', () => {
      expect(shipping.shippingOptions[1].text).toEqual('Two Day');
    });

    it('should generate a shippingOptions array with One Day', () => {
      expect(shipping.shippingOptions[2].text).toEqual('One Day');
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
    
    describe('submitted', () => {
      
      let emittedValue;

      beforeEach(() => {
        emittedValue = {
          address: 'address',
          shippingOption: {
            id: 'id'
          }
        };

        spyOn(component, 'updateShippingInfoFunction');
        spyOn(component, 'selectShippingOptionFunction');
        spyOn(shipping, 'toggleShippingView');

        shippingFormComponent.submitted.emit(emittedValue);
      });
      
      it('should call hostComponent.updateShippingInfoFunction', () => {
        expect(component.updateShippingInfoFunction).toHaveBeenCalledWith(emittedValue.address);
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

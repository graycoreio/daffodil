import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingComponent } from './shipping.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShippingAddress } from '@daffodil/core';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';

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
let stubShippingOption: string = 'shipping option';

@Component({template: '<shipping [isShippingInfoValid]="isShippingInfoValidValue"></shipping>'})
class TestShippingWrapper {
  isShippingInfoValidValue = stubIsShippingInfoValidValue;
}

@Component({selector: 'shipping-form', template: ''})
class MockShippingFormComponent {
  @Input() shippingInfo: ShippingAddress;
  @Output() updateShippingInfo: EventEmitter<any> = new EventEmitter();
}

@Component({selector: 'shipping-summary', template: ''})
class MockShippingSummaryComponent {
  @Input() shippingInfo: ShippingAddress;
  @Input() shippingOption: string;
  @Output() editShippingInfo: EventEmitter<any> = new EventEmitter();
  @Output() updateShippingOption: EventEmitter<any> = new EventEmitter();
}

@Component({
  selector: '[shipping-container]', 
  template: '<ng-content></ng-content>', 
  exportAs: 'ShippingContainer'
})
class MockShippingContainer {
  shippingInfo$: Observable<ShippingAddress> = of(stubShippingAddress);
  shippingOption$: Observable<string> = of(stubShippingOption);
  updateShippingInfo: Function = () => {};
  updateShippingOption: Function = () => {};
}

describe('ShippingComponent', () => {
  let component: TestShippingWrapper;
  let fixture: ComponentFixture<TestShippingWrapper>;
  let shippingFormComponent: MockShippingFormComponent;
  let shippingSummaryComponent: MockShippingSummaryComponent;
  let shippingContainer: MockShippingContainer;
  let shippingComponent: ShippingComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestShippingWrapper,
        MockShippingFormComponent,
        MockShippingSummaryComponent,
        MockShippingContainer,
        ShippingComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShippingWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();

    shippingFormComponent = fixture.debugElement.query(By.css('shipping-form')).componentInstance;
    shippingSummaryComponent = fixture.debugElement.query(By.css('shipping-summary')).componentInstance;
    shippingContainer = fixture.debugElement.query(By.css('[shipping-container]')).componentInstance;
    shippingComponent = fixture.debugElement.query(By.css('shipping')).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on <shipping-form>', () => {
    
    it('should set shippingInfo to value passed by the [shipping-container]', () => {
      shippingContainer.shippingInfo$.subscribe((shippingInfo) => {
        expect(shippingFormComponent.shippingInfo).toEqual(shippingInfo);
      })
    });
  });

  describe('on <shipping-summary>', () => {
    
    it('should set shippingInfo to value passed by the [shipping-container]', () => {
      shippingContainer.shippingInfo$.subscribe((shippingInfo) => {
        expect(shippingSummaryComponent.shippingInfo).toEqual(shippingInfo);
      });
    });

    it('should set shippingOption to value passed by the [shipping-container]', () => {
      shippingContainer.shippingOption$.subscribe((shippingOption) => {
        expect(shippingSummaryComponent.shippingOption).toEqual(shippingOption);
      });
    });
  });

  describe('ngOnInit', () => {
    
    it('should set showShippingForm to !value passed by the [shipping-container]', () => {
      expect(shippingComponent.showShippingForm).toEqual(!stubIsShippingInfoValidValue);
    });
  });

  describe('when shippingFormComponent emits', () => {
    
    describe('updateShippingInfo', () => {
      
      let emittedValue;

      beforeEach(() => {
        emittedValue = 'emittedValue';
        spyOn(shippingContainer, 'updateShippingInfo');
        spyOn(shippingComponent, 'toggleShippingView');

        shippingFormComponent.updateShippingInfo.emit(emittedValue);
      });
      
      it('should call shippingContainer.updateShippingInfo', () => {
        expect(shippingContainer.updateShippingInfo).toHaveBeenCalledWith(emittedValue);
      });

      it('should call toggleShippingView', () => {
        expect(shippingComponent.toggleShippingView).toHaveBeenCalled();
      });
    });
  });

  describe('when shippingSummaryComponent emits', () => {
    
    describe('editShippingInfo', () => {
      it('should call toggleShippingView', () => {
        spyOn(shippingComponent, 'toggleShippingView');
  
        shippingSummaryComponent.editShippingInfo.emit();
        
        expect(shippingComponent.toggleShippingView).toHaveBeenCalled();
      });
    });

    describe('updateShippingOption', () => {
      
      it('should call ShippingContainer.updateShippingOption', () => {
        spyOn(shippingContainer, 'updateShippingOption');

        shippingSummaryComponent.updateShippingOption.emit(stubShippingOption);
        
        expect(shippingContainer.updateShippingOption).toHaveBeenCalledWith(stubShippingOption);
      });
    });
  });

  describe('toggleShippingView', () => {
    
    it('should toggle showShippingForm', () => {
      shippingComponent.toggleShippingView();

      expect(shippingComponent.showShippingForm).toEqual(stubIsShippingInfoValidValue);
    });
  });

  describe('when showShippingForm is true', () => {

    beforeEach(() => {
      shippingComponent.showShippingForm = true;

      fixture.detectChanges();
    });
    
    it('should show <shipping-form>', () => {
      shippingContainer.shippingInfo$.subscribe(() => {
        expect(fixture.debugElement.query(By.css('shipping-form')).nativeElement.hidden).toBeFalsy();
      });
    });

    describe('and shippingContainer.shipping is defined', () => {
      
      it('should hide <shipping-summary>', () => {
        shippingContainer.shippingInfo$.subscribe(() => {
          expect(fixture.debugElement.query(By.css('shipping-summary')).nativeElement.hidden).toBeTruthy();
        })
      });
    });

    describe('and shippingContainer.shippingInfo is null', () => {
      
      it('should not render <shipping-summary>', () => {
        shippingContainer.shippingInfo$ = of(null);
        fixture.detectChanges();

        shippingContainer.shippingInfo$.subscribe(() => {
          expect(fixture.debugElement.query(By.css('shipping-summary'))).toBeNull();
        })
      });
    });
  });

  describe('when showShippingForm is false', () => {

    beforeEach(() => {
      shippingComponent.showShippingForm = false;
      fixture.detectChanges();
    });
    
    it('should not show <shipping-form>', () => {
      shippingContainer.shippingInfo$.subscribe(() => {
        expect(fixture.debugElement.query(By.css('shipping-form')).nativeElement.hidden).toBeTruthy();
      });
    });

    it('should show <shipping-summary>', () => {
      shippingContainer.shippingInfo$.subscribe(() => {
        expect(fixture.debugElement.query(By.css('shipping-summary')).nativeElement.hidden).toBeFalsy();
      });
    });
  });
});

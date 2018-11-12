import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { DaffDropdownComponent } from './dropdown.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

let stubPositionX = 'before';
let stubPositionY = 'above';

@Component({template: '<daff-dropdown class="dropdown-wrapper"></daff-dropdown>'})
class TestDefaultDropdownWrapper {}

@Component({template: '<daff-dropdown class="dropdown-wrapper" [positionX]="positionXValue" [positionY]="positionYValue"></daff-dropdown>'})
class TestNonDefaultDropdownWrapper {
  positionXValue: string = stubPositionX;
  positionYValue: string = stubPositionY;
}

describe('DaffDropdownComponent', () => {

  describe('default input values', () => {
    let component: TestDefaultDropdownWrapper;
    let fixture: ComponentFixture<TestDefaultDropdownWrapper>;
    let dropdownComponent: DaffDropdownComponent;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule
        ],
        declarations: [ 
          TestDefaultDropdownWrapper,
          DaffDropdownComponent
        ]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestDefaultDropdownWrapper);
      component = fixture.componentInstance;
      fixture.detectChanges();

      dropdownComponent = fixture.debugElement.query(By.css('daff-dropdown')).componentInstance;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should set positionX to after by default', () => {
      expect(dropdownComponent.positionX).toEqual('after');
    });

    it('should set positionY to below by default', () => {
      expect(dropdownComponent.positionY).toEqual('below');
    });
  });

  describe('DaffDropdownComponent - non default values', () => {
    let component: TestNonDefaultDropdownWrapper;
    let fixture: ComponentFixture<TestNonDefaultDropdownWrapper>;
    let dropdownComponent: DaffDropdownComponent;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          NoopAnimationsModule
        ],
        declarations: [ 
          TestNonDefaultDropdownWrapper,
          DaffDropdownComponent
        ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(TestNonDefaultDropdownWrapper);
      component = fixture.componentInstance;
      fixture.detectChanges();
  
      dropdownComponent = fixture.debugElement.query(By.css('daff-dropdown')).componentInstance;
    });

    it('should be able to take positionX as input', () => {
      expect(dropdownComponent.positionX).toEqual(stubPositionX);
    });

    it('should be able to take positionY as input', () => {
      expect(dropdownComponent.positionY).toEqual(stubPositionY);
    });

    it('should set _showBody to false by default', () => {
      expect(dropdownComponent._showBody).toBeFalsy();
    });

    describe('when positionX is before', () => {
      
      let bodyWrapperElement;

      beforeEach(() => {
        component.positionXValue = 'before';

        fixture.detectChanges();

        bodyWrapperElement = fixture.debugElement.query(By.css('.daff-dropdown__body-wrapper')).nativeElement;
      });
      
      it('should set daff-dropdown__body--before on daff-dropdown__body-wrapper', () => {
        expect(bodyWrapperElement.classList.contains('daff-dropdown__body--before')).toBeTruthy();
      });

      it('should not set daff-dropdown__body--after on daff-dropdown__body-wrapper', () => {
        expect(bodyWrapperElement.classList.contains('daff-dropdown__body--after')).toBeFalsy();
      });
    });

    describe('when positionX is after', () => {

      let bodyWrapperElement;

      beforeEach(() => {
        component.positionXValue = 'after';

        fixture.detectChanges();

        bodyWrapperElement = fixture.debugElement.query(By.css('.daff-dropdown__body-wrapper')).nativeElement;
      });
      
      it('should not set daff-dropdown__body--before on daff-dropdown__body-wrapper', () => {
        expect(bodyWrapperElement.classList.contains('daff-dropdown__body--before')).toBeFalsy();
      });

      it('should set daff-dropdown__body--after on daff-dropdown__body-wrapper', () => {
        expect(bodyWrapperElement.classList.contains('daff-dropdown__body--after')).toBeTruthy();
      });
    });

    describe('when positionY is above', () => {
      
      let bodyWrapperElement;

      beforeEach(() => {
        component.positionYValue = 'above';

        fixture.detectChanges();

        bodyWrapperElement = fixture.debugElement.query(By.css('.daff-dropdown__body-wrapper')).nativeElement;
      });
      
      it('should set daff-dropdown__body--above on daff-dropdown__body-wrapper', () => {
        expect(bodyWrapperElement.classList.contains('daff-dropdown__body--above')).toBeTruthy();
      });

      it('should not set daff-dropdown__body--below on daff-dropdown__body-wrapper', () => {
        expect(bodyWrapperElement.classList.contains('daff-dropdown__body--below')).toBeFalsy();
      });
    });

    describe('when positionY is below', () => {

      let bodyWrapperElement;

      beforeEach(() => {
        component.positionYValue = 'below';

        fixture.detectChanges();

        bodyWrapperElement = fixture.debugElement.query(By.css('.daff-dropdown__body-wrapper')).nativeElement;
      });
      
      it('should not set daff-dropdown__body--above on daff-dropdown__body-wrapper', () => {
        expect(bodyWrapperElement.classList.contains('daff-dropdown__body--above')).toBeFalsy();
      });

      it('should set daff-dropdown__body--below on daff-dropdown__body-wrapper', () => {
        expect(bodyWrapperElement.classList.contains('daff-dropdown__body--below')).toBeTruthy();
      });
    });

    describe('when daff-dropdown__title-wrapper is clicked', () => {
      
      beforeEach(() => {
        dropdownComponent._showBody = false;

        fixture.debugElement.query(By.css('.daff-dropdown__title-wrapper')).nativeElement.click();
      });

      it('should toggle _showBody', () => {
        expect(dropdownComponent._showBody).toBeTruthy();
      });
    });

    describe('when mouse leaves daff-dropdown', () => {
      
      let daffDropdownElement;
      
      beforeEach(() => {
        daffDropdownElement = fixture.debugElement.query(By.css('.daff-dropdown')).nativeElement;
      });

      describe('when _showBody is true', () => {
        
        beforeEach(() => {
          dropdownComponent._showBody = true;

          daffDropdownElement.dispatchEvent(new Event('mouseleave'));
        });

        it('should toggle _showBody', () => {
          expect(dropdownComponent._showBody).toBeFalsy();
        });
      });

      describe('when _showBody is false', () => {
        
        beforeEach(() => {
          dropdownComponent._showBody = false;

          daffDropdownElement.dispatchEvent(new Event('mouseleave'));
        });

        it('should not toggle _showBody', () => {
          expect(dropdownComponent._showBody).toBeFalsy();
        });
      });
    });
  });
});



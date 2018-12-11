import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffAccordionItemComponent } from './accordion-item.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({template: `
<daff-accordion-item [initiallyActive]="initiallyActiveValue">
  <h3 daff-accordion-item-title>Size and Fit</h3>
  <div daff-accordion-item-content>no content</div>
</daff-accordion-item>
`})
class Wrapper {
  initiallyActiveValue: boolean;
}

describe('DaffAccordionItemComponent', () => {
  let wrapper: Wrapper;
  let fixture: ComponentFixture<Wrapper>;
  let component: DaffAccordionItemComponent;
  let accordionHeader: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [ 
        Wrapper,
        DaffAccordionItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wrapper);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
    
    component = fixture.debugElement.query(By.css('daff-accordion-item')).componentInstance;    
    accordionHeader = fixture.debugElement.query(By.css('.daff-accordion-item__header'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set _open to false by default', () => {
    expect(component._open).toEqual(false);
  });

  it('should set _animationState to void by default', () => {
    expect(component._animationState).toEqual('void');
  });

  it('should be able to accept an initiallyActive input', () => {
    wrapper.initiallyActiveValue = false;

    fixture.detectChanges();

    expect(component.initiallyActive).toEqual(false);

    wrapper.initiallyActiveValue = true;

    fixture.detectChanges();

    expect(component.initiallyActive).toEqual(true);
  });

  describe('ngOnInit', () => {
    
    describe('when initiallyActive is true', () => {

      beforeEach(() => {
        wrapper.initiallyActiveValue = true;
        fixture.detectChanges();
      })
      
      it('should set _open to true', () => {
        component.ngOnInit();
        expect(component._open).toBeTruthy();
      });
    });

    describe('when initiallyActive is not set', () => {

      beforeEach(() => {
        wrapper.initiallyActiveValue = undefined;
        fixture.detectChanges();
      })
      
      it('should set open to false', () => {
        component.ngOnInit();
        expect(component._open).toBeFalsy();
      });
    });
  });

  describe('when accordion header is clicked', () => {

    beforeEach(() => {
      spyOn(component, 'toggleActive');
      
      accordionHeader.nativeElement.click();
    });

    it('should call toggleActive', () => {
      expect(component.toggleActive).toHaveBeenCalled();
    });
  });

  describe('toggleActive', () => {
    it('should toggle open', () => {
      component._open = false;

      component.toggleActive();
      expect(component._open).toEqual(true);

      component.toggleActive();
      expect(component._open).toEqual(false);
    });

    it('should toggle _animationState between void and open', () =>  {
      component.toggleActive();
      expect(component._animationState).toEqual('open');

      component.toggleActive();
      expect(component._animationState).toEqual('void');
    });
  });
});
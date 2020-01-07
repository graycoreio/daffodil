import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffAccordionItemComponent } from './accordion-item.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({template: `
<daff-accordion-item [initiallyActive]="initiallyActiveValue">
  <h3 daffAccordionItemTitle>Size and Fit</h3>
  <div daffAccordionItemContent>no content</div>
</daff-accordion-item>
`})
class WrapperComponent {
  initiallyActiveValue: boolean;
}

describe('DaffAccordionItemComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let accordionHeader: DebugElement;
  let daffAccordionItem: DaffAccordionItemComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FontAwesomeModule
      ],
      declarations: [ 
        WrapperComponent,
        DaffAccordionItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    
    fixture.detectChanges();
    
    daffAccordionItem = fixture.debugElement.query(By.css('daff-accordion-item')).componentInstance;    
    accordionHeader = fixture.debugElement.query(By.css('.daff-accordion-item__header'));
  });

  it('should create', () => {
    expect(daffAccordionItem).toBeTruthy();
  });

  it('should set _open to false by default', () => {
    expect(daffAccordionItem._open).toEqual(false);
  });

  it('should set _animationState to void by default', () => {
    expect(daffAccordionItem._animationState).toEqual('void');
  });

  it('should be able to accept an initiallyActive input', () => {
    wrapper.initiallyActiveValue = false;

    fixture.detectChanges();

    expect(daffAccordionItem.initiallyActive).toEqual(false);

    wrapper.initiallyActiveValue = true;

    fixture.detectChanges();

    expect(daffAccordionItem.initiallyActive).toEqual(true);
  });

  describe('ngOnInit', () => {
    
    describe('when initiallyActive is true', () => {

      beforeEach(() => {
        wrapper.initiallyActiveValue = true;
        fixture.detectChanges();
      })
      
      it('should set _open to true', () => {
        daffAccordionItem.ngOnInit();
        expect(daffAccordionItem._open).toBeTruthy();
      });
    });

    describe('when initiallyActive is not set', () => {

      beforeEach(() => {
        wrapper.initiallyActiveValue = undefined;
        fixture.detectChanges();
      })
      
      it('should set open to false', () => {
        daffAccordionItem.ngOnInit();
        expect(daffAccordionItem._open).toBeFalsy();
      });
    });
  });

  describe('when accordion header is clicked', () => {

    beforeEach(() => {
      spyOn(daffAccordionItem, 'toggleActive');
      
      accordionHeader.nativeElement.click();
    });

    it('should call toggleActive', () => {
      expect(daffAccordionItem.toggleActive).toHaveBeenCalled();
    });
  });

  describe('toggleActive', () => {
    it('should toggle open', () => {
      daffAccordionItem._open = false;

      daffAccordionItem.toggleActive();
      expect(daffAccordionItem._open).toEqual(true);

      daffAccordionItem.toggleActive();
      expect(daffAccordionItem._open).toEqual(false);
    });

    it('should toggle _animationState between void and open', () =>  {
      daffAccordionItem.toggleActive();
      expect(daffAccordionItem._animationState).toEqual('open');

      daffAccordionItem.toggleActive();
      expect(daffAccordionItem._animationState).toEqual('void');
    });
  });
});
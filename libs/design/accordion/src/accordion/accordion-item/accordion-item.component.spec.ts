import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffAccordionItemComponent } from './accordion-item.component';

@Component({
  template: `
    <daff-accordion-item [initiallyExpanded]="initiallyExpandedValue">
      <h3 daffAccordionItemTitle>Size and Fit</h3>
      <div>no content</div>
    </daff-accordion-item>
    `,
  standalone: true,
  imports: [
    DaffAccordionItemComponent,
  ],
})
class WrapperComponent {
  initiallyExpandedValue: boolean;
}

describe('@daffodil/design/accordion | DaffAccordionItemComponent', () => {
  let fixture: ComponentFixture<WrapperComponent>;
  let wrapper: WrapperComponent;
  let accordionHeader: DebugElement;
  let daffAccordionItem: DaffAccordionItemComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FontAwesomeModule,
        WrapperComponent,
      ],
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

  it('should be able to accept an initiallyExpanded input', () => {
    wrapper.initiallyExpandedValue = false;

    fixture.detectChanges();

    expect(daffAccordionItem.initiallyExpanded).toEqual(false);

    wrapper.initiallyExpandedValue = true;

    fixture.detectChanges();

    expect(daffAccordionItem.initiallyExpanded).toEqual(true);
  });

  describe('ngOnInit', () => {

    describe('when initiallyExpanded is true', () => {

      beforeEach(() => {
        wrapper.initiallyExpandedValue = true;
        fixture.detectChanges();
      });

      it('should set _open to true', () => {
        daffAccordionItem.ngOnInit();
        expect(daffAccordionItem._open).toBeTruthy();
      });
    });

    describe('when initiallyExpanded is not set', () => {

      beforeEach(() => {
        wrapper.initiallyExpandedValue = undefined;
        fixture.detectChanges();
      });

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
      expect(daffAccordionItem.toggleActive).toHaveBeenCalledWith();
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

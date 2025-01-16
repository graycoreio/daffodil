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

describe('@daffodil/design/accordion | DaffAccordionItemComponent | Defaults', () => {
  let fixture: ComponentFixture<DaffAccordionItemComponent>;
  let component: DaffAccordionItemComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FontAwesomeModule,
        DaffAccordionItemComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffAccordionItemComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should set initiallyExpanded to false by default', () => {
    expect(component.initiallyExpanded).toEqual(false);
  });

  it('should set _animationState to void by default', () => {
    expect(component._animationState).toEqual('void');
  });

  it('should be collapsed by default', () => {
    expect(component.open).toEqual(false);
  });
});


@Component({
  template: `
    <daff-accordion-item [initiallyExpanded]="initiallyExpandedValue" (toggled)="toggledFunction($event)">
      <h3 daffAccordionItemTitle>Size and Fit</h3>
      <div>no content</div>
    </daff-accordion-item>
    `,
  imports: [
    DaffAccordionItemComponent,
  ],
})
class WrapperComponent {
  initiallyExpandedValue: boolean;
  toggledFunction(val: boolean) {};
}

describe('@daffodil/design/accordion | DaffAccordionItemComponent | Usage', () => {
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

    daffAccordionItem = fixture.debugElement.query(By.css('daff-accordion-item')).componentInstance;
    accordionHeader = fixture.debugElement.query(By.css('.daff-accordion-item__header'));
  });

  it('should create', () => {
    expect(daffAccordionItem).toBeTruthy();
  });

  it('should be able to accept an initiallyExpanded input', () => {
    wrapper.initiallyExpandedValue = false;

    fixture.detectChanges();

    expect(daffAccordionItem.initiallyExpanded).toEqual(false);

    wrapper.initiallyExpandedValue = true;

    fixture.detectChanges();

    expect(daffAccordionItem.initiallyExpanded).toEqual(true);
  });

  it('should set aria-expanded to true if open is true', () => {
    daffAccordionItem.reveal();
    fixture.detectChanges();

    expect(accordionHeader.nativeElement.attributes['aria-expanded'].value).toEqual('true');

  });

  it('should set aria-expanded to false if open is false', () => {
    daffAccordionItem.hide();
    fixture.detectChanges();

    expect(accordionHeader.nativeElement.attributes['aria-expanded'].value).toEqual('false');

  });

  it('should set open to true if initiallyExpanded is true', () => {
    wrapper.initiallyExpandedValue = true;
    fixture.detectChanges();

    expect(daffAccordionItem.open).toBeTrue();
  });

  it('should set open to false if initiallyExpanded is false', () => {
    wrapper.initiallyExpandedValue = false;
    fixture.detectChanges();

    expect(daffAccordionItem.open).toBeFalse();
  });

  it('should set open to false if initiallyExpanded is undefined', () => {
    wrapper.initiallyExpandedValue = undefined;
    fixture.detectChanges();

    expect(daffAccordionItem.open).toBeFalse();
  });

  describe('when accordion header is clicked', () => {
    beforeEach(() => {
      spyOn(daffAccordionItem, 'toggle');

      accordionHeader.nativeElement.click();
    });

    it('should call toggle', () => {
      expect(daffAccordionItem.toggle).toHaveBeenCalledWith();
    });
  });

  describe('toggle', () => {
    it('should toggle', () => {
      spyOn(wrapper, 'toggledFunction');
      daffAccordionItem.toggle();

      expect(wrapper.toggledFunction).toHaveBeenCalledWith(true);
    });

    it('should toggle _animationState between void and open', () =>  {
      daffAccordionItem.toggle();
      expect(daffAccordionItem._animationState).toEqual('open');

      daffAccordionItem.toggle();
      expect(daffAccordionItem._animationState).toEqual('void');
    });
  });
});

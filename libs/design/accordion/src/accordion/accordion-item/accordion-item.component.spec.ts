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

import { DaffAccordionItemComponent } from './accordion-item.component';

describe('@daffodil/design/accordion | DaffAccordionItemComponent | Defaults', () => {
  let fixture: ComponentFixture<DaffAccordionItemComponent>;
  let component: DaffAccordionItemComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
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
  let accordionItemHeader: DebugElement;
  let daffAccordionItem: DaffAccordionItemComponent;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('daff-accordion-item'));
    daffAccordionItem = de.componentInstance;
    accordionItemHeader = fixture.debugElement.query(By.css('.daff-accordion-item__header'));
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

    expect(accordionItemHeader.nativeElement.attributes['aria-expanded'].value).toEqual('true');

  });

  it('should set aria-expanded to false if open is false', () => {
    daffAccordionItem.hide();
    fixture.detectChanges();

    expect(accordionItemHeader.nativeElement.attributes['aria-expanded'].value).toEqual('false');

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

      accordionItemHeader.nativeElement.click();
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

  describe('when disabled is set to true on the accordion item', () => {
    beforeEach(() => {
      daffAccordionItem.disabled = true;
      fixture.detectChanges();
    });

    it('should set disabled to true on the accordion item header', () => {
      expect(accordionItemHeader.nativeElement.disabled).toBeTruthy();
    });

    it('should set aria-disabled to true on the accordion item header', () => {
      expect(accordionItemHeader.nativeElement.attributes['aria-disabled'].value).toEqual('true');
    });
  });
});

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

import { DaffAccordionItemTitleDirective } from './accordion-item-title.directive';

@Component({
  template: `
    <div daffAccordionItemTitle>Title</div>
  `,
  imports: [
    DaffAccordionItemTitleDirective,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/accordion | DaffAccordionItemTitleDirective', () => {
  let accordionItemTitle: DaffAccordionItemTitleDirective;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    de = fixture.debugElement.query(By.css('[daffAccordionItemTitle]'));
    accordionItemTitle = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(accordionItemTitle).toBeTruthy();
  });

  describe('[daffAccordionItemTitle]', () => {
    it('should add a class of "daff-accordion-item__title" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-accordion-item__title': true,
      }));
    });
  });
});

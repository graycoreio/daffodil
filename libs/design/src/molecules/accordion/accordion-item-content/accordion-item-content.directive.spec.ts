import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffAccordionItemContentDirective } from './accordion-item-content.directive';

@Component({
  template: `
    <div daffAccordionItemContent>Content</div>
  `
})
class WrapperComponent {}

describe('DaffAccordionItemContentDirective', () => {
  let accordionItemContent: DaffAccordionItemContentDirective;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffAccordionItemContentDirective,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    de = fixture.debugElement.query(By.css('[daffAccordionItemContent]'));
    accordionItemContent = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(accordionItemContent).toBeTruthy();
  });

  describe('[daffAccordionItemContent]', () => {
    it('should add a class of "daff-accordion-item__content" to the host element', () => {
      expect(de.classes).toEqual(jasmine.objectContaining({
        'daff-accordion-item__content': true,
      }));
    });
  });
});

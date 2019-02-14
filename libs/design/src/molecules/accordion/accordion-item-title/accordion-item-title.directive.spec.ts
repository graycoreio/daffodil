import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffAccordionItemTitleDirective } from './accordion-item-title.directive';

@Component({
  template: `
    <h3 daffAccordionItemTitle>Title</h3>
  `
})
class WrapperComponent {}

describe('DaffAccordionItemTitleDirective', () => {
  let accordionItemTitle: DaffAccordionItemTitleDirective;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffAccordionItemTitleDirective,
        WrapperComponent
      ]
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

  describe('[daffAccordionItemTitle]',() => {
    it('should add a class of `daff-accordion-item__title` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-accordion-item__title')).toEqual(true);
    });
  });
});

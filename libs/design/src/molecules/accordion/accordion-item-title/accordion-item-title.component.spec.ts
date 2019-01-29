import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffAccordionItemTitleComponent } from './accordion-item-title.component';

@Component({
  template: `
    <h3 daff-accordion-item-title>Title</h3>
  `
})
class WrapperComponent {}

describe('DaffAccordionItemTitleComponent', () => {
  let accordionItemTitle: DaffAccordionItemTitleComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffAccordionItemTitleComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    de = fixture.debugElement.query(By.css('[daff-accordion-item-title]'));
    accordionItemTitle = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(accordionItemTitle).toBeTruthy();
  });

  describe('[daff-accordion-item-title]',() => {
    it('should add a class of `daff-accordion-item__title` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-accordion-item__title')).toEqual(true);
    });
  });
});

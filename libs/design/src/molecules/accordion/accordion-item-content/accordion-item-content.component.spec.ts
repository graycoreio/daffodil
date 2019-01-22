import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffAccordionItemContentComponent } from './accordion-item-content.component';

@Component({
  template: `
    <div daff-accordion-item-content>Content</div>
  `
})
class WrapperComponent {}

describe('DaffAccordionItemContentComponent', () => {
  let accordionItemContent: DaffAccordionItemContentComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffAccordionItemContentComponent,
        WrapperComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    de = fixture.debugElement.query(By.css('[daff-accordion-item-content]'));
    accordionItemContent = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(accordionItemContent).toBeTruthy();
  });

  describe('[daff-accordion-item-content]',() => {
    it('should add a class of `daff-accordion-item__content` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-accordion-item__content')).toEqual(true);
    });
  });
});

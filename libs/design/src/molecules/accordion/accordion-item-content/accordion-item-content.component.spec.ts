import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DaffAccordionItemContentComponent } from './accordion-item-content.component';

@Component({
  template: `
    <div daff-accordion-item-content>Content</div>
  `
})

class Wrapper {

}

describe('DaffAccordionItemContentComponent', () => {
  let wrapper: Wrapper;
  let component: DaffAccordionItemContentComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<Wrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaffAccordionItemContentComponent,
        Wrapper
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wrapper);
    de = fixture.debugElement.query(By.css('[daff-accordion-item-content]'));
    component = de.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('[daff-accordion-item-content]',() => {
    it('should add a class of `daff-accordion-item__content` to its host element', () => {
      expect(de.nativeElement.classList.contains('daff-accordion-item__content')).toEqual(true);
    });
  });
});

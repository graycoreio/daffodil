import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemTitleComponent } from './accordion-item-title.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<div class="accordion-item-title-wrapper" accordion-item-title>Title</div>'})
class TestAccordionItemTitleWrapper {}

describe('AccordionItemTitleComponent', () => {
  let component: TestAccordionItemTitleWrapper;
  let fixture: ComponentFixture<TestAccordionItemTitleWrapper>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestAccordionItemTitleWrapper,
        AccordionItemTitleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAccordionItemTitleWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a class of `accordion-item__title` to its host', () => {
    let accordionItemTitleWrapper = fixture.debugElement.query(By.css('.accordion-item-title-wrapper'));

    expect(accordionItemTitleWrapper.nativeElement.classList.contains('accordion-item__title')).toBeTruthy();
  });
});

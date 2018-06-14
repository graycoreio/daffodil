import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemTitleComponent } from './accordion-item-title.component';

describe('AccordionItemTitleComponent', () => {
  let component: AccordionItemTitleComponent;
  let fixture: ComponentFixture<AccordionItemTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionItemTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should add a class of `accordion-item__title` to its host', () => {

  });
});

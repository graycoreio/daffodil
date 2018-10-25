import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AccordionItemComponent } from './accordion-item.component';

@Component({template: '<accordion-item [title]="titleValue" [initiallyActive]="initiallyActiveValue"></accordion-item>'})
class TestAccordionItemWrapper {
  titleValue: string;
  initiallyActiveValue: boolean;
}

describe('AccordionItemComponent', () => {
  let component: TestAccordionItemWrapper;
  let fixture: ComponentFixture<TestAccordionItemWrapper>;
  let stubTitle: string;
  let stubInitiallyActive: boolean;
  let accordionItemComponent: AccordionItemComponent;
  let accordionButton;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestAccordionItemWrapper,
        AccordionItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    stubInitiallyActive = true;

    fixture = TestBed.createComponent(TestAccordionItemWrapper);
    component = fixture.componentInstance;
    component.titleValue = stubTitle;
    component.initiallyActiveValue = stubInitiallyActive;

    fixture.detectChanges();

    accordionItemComponent = fixture.debugElement.query(By.css('accordion-item')).componentInstance;    
    accordionButton = fixture.debugElement.query(By.css('.accordion-item__button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to accept an initiallyActive input', () => {
    expect(accordionItemComponent.initiallyActive).toEqual(stubInitiallyActive);
  });

  describe('ngOnInit', () => {
    
    describe('when initiallyActive is true', () => {
      
      it('should set open to true', () => {
        expect(accordionItemComponent.open).toBeTruthy();
      });
    });

    describe('when initiallyActive is not set', () => {
      
      it('should set open to false', () => {
        accordionItemComponent.initiallyActive = null;
        accordionItemComponent.ngOnInit();
        
        expect(accordionItemComponent.open).toBeFalsy();
      });
    });
  });

  describe('when accordion button is clicked', () => {

    beforeEach(() => {
      spyOn(accordionItemComponent, 'toggleActive');
      
      accordionButton.nativeElement.click();
    });

    it('should call toggleActive', () => {
      expect(accordionItemComponent.toggleActive);
    });
  });

  describe('toggleActive', () => {
    
    it('should toggle active', () => {
      accordionItemComponent.open = false;
      accordionItemComponent.toggleActive();

      expect(accordionItemComponent.open).toBeTruthy();
    });
  });

  describe('isOpen getter', () => {

    it('should return open', () => {
      expect(accordionItemComponent.isOpen).toEqual(accordionItemComponent.open);
    });
  });

  describe('when open is true', () => {

    beforeEach(() => {
      accordionItemComponent.open = true;

      fixture.detectChanges();
    });

    it('should render the accordion-item__panel', () => {
      let accordionPanel = fixture.debugElement.query(By.css('.accordion-item__panel'));

      expect(accordionPanel).not.toBeNull();
    });
  });

  describe('when active is false', () => {

    beforeEach(() => {
      accordionItemComponent.open = false;

      fixture.detectChanges();
    });

    it('should not render the accordion-item__panel', () => {
      let accordionPanel = fixture.debugElement.query(By.css('.accordion-item__panel'));

      expect(accordionPanel).toBeNull();
    });
  });
});

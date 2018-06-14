import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionItemComponent } from './accordion-item.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

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
  let accordionItemComponent;
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
    accordionItemComponent = fixture.debugElement.query(By.css('accordion-item'));    
    accordionButton = fixture.debugElement.query(By.css('.accordion-item__button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to accept an initiallyActive input', () => {
    expect(accordionItemComponent.componentInstance.initiallyActive).toEqual(stubInitiallyActive);
  });

  describe('ngOnInit', () => {
    
    describe('when initiallyActive is true', () => {
      
      it('should set open to true', () => {
        expect(accordionItemComponent.componentInstance.open).toBeTruthy();
      });
    });

    describe('when initiallyActive is not set', () => {
      
      it('should set open to false', () => {
        accordionItemComponent.componentInstance.initiallyActive = null;
        accordionItemComponent.componentInstance.ngOnInit();
        
        expect(accordionItemComponent.componentInstance.open).toBeFalsy();
      });
    });
  });

  describe('when accordion button is clicked', () => {

    beforeEach(() => {
      spyOn(accordionItemComponent.componentInstance, 'toggleActive');
      
      accordionButton.nativeElement.click();
    });

    it('should call toggleActive', () => {
      expect(accordionItemComponent.componentInstance.toggleActive);
    });
  });

  describe('toggleActive', () => {
    
    it('should toggle active', () => {
      accordionItemComponent.componentInstance.open = false;
      accordionItemComponent.componentInstance.toggleActive();

      expect(accordionItemComponent.componentInstance.open).toBeTruthy();
    });
  });

  describe('isOpen getter', () => {

    it('should return open', () => {
      expect(accordionItemComponent.componentInstance.isOpen).toEqual(accordionItemComponent.componentInstance.open);
    });
  });

  describe('when open is true', () => {

    beforeEach(() => {
      accordionItemComponent.componentInstance.open = true;

      fixture.detectChanges();
    });

    it('should render the accordion-item__panel', () => {
      let accordionPanel = fixture.debugElement.query(By.css('.accordion-item__panel'));

      expect(accordionPanel).not.toBeNull();
    });
  });

  describe('when active is false', () => {

    beforeEach(() => {
      accordionItemComponent.componentInstance.open = false;

      fixture.detectChanges();
    });

    it('should not render the accordion-item__panel', () => {
      let accordionPanel = fixture.debugElement.query(By.css('.accordion-item__panel'));

      expect(accordionPanel).toBeNull();
    });
  });
});

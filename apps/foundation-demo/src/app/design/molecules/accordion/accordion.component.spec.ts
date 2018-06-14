import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<accordion [title]="titleValue" [initiallyActive]="initiallyActiveValue"></accordion>'})
class TestAccordionWrapper {
  titleValue: string;
  initiallyActiveValue: boolean;
}

describe('AccordionComponent', () => {
  let component: TestAccordionWrapper;
  let fixture: ComponentFixture<TestAccordionWrapper>;
  let stubTitle: string;
  let stubInitiallyActive: boolean;
  let accordionComponent;
  let accordionButton;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestAccordionWrapper,
        AccordionComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    stubTitle = 'title';
    stubInitiallyActive = true;

    fixture = TestBed.createComponent(TestAccordionWrapper);
    component = fixture.componentInstance;

    component.titleValue = stubTitle;
    component.initiallyActiveValue = stubInitiallyActive;

    fixture.detectChanges();
    accordionComponent = fixture.debugElement.query(By.css('accordion'));    
    accordionButton = fixture.debugElement.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to accept a title input', () => {
    expect(accordionComponent.componentInstance.title).toEqual(stubTitle);
  });

  it('should be able to accept an initiallyActive input', () => {
    expect(accordionComponent.componentInstance.initiallyActive).toEqual(stubInitiallyActive);
  });

  describe('ngOnInit', () => {
    
    describe('when initiallyActive is true', () => {
      
      it('should set active to true', () => {
        expect(accordionComponent.componentInstance.active).toBeTruthy();
      });
    });

    describe('when initiallyActive is not set', () => {
      
      it('should set active to false', () => {
        accordionComponent.componentInstance.initiallyActive = null;
        accordionComponent.componentInstance.ngOnInit();
        
        expect(accordionComponent.componentInstance.active).toBeFalsy();
      });
    });
  });

  describe('when accordion button is clicked', () => {
    
    let accordion;

    beforeEach(() => {
      spyOn(accordionComponent.componentInstance, 'toggleActive');
      accordion = fixture.debugElement.query(By.css('.accordion'));
      
      accordion.nativeElement.click();
    });

    it('should call toggleActive', () => {
      expect(accordionComponent.componentInstance.toggleActive);
    });
  });

  describe('toggleActive', () => {
    
    it('should toggle active', () => {
      accordionComponent.componentInstance.active = false;
      accordionComponent.componentInstance.toggleActive();

      expect(accordionComponent.componentInstance.active).toBeTruthy();
    });
  });

  describe('isAccordionOpen getter', () => {

    it('should return active', () => {
      expect(accordionComponent.componentInstance.isAccordionOpen).toEqual(accordionComponent.componentInstance.active);
    });
  });

  describe('when active is true', () => {

    beforeEach(() => {
      accordionComponent.componentInstance.active = true;

      fixture.detectChanges();
    });

    it('should have the accordion__panel--active class', () => {
      let accordionPanel = fixture.debugElement.query(By.css('.accordion__panel'));

      expect(accordionPanel.nativeElement.classList.contains('accordion__panel--active')).toBeTruthy();
    });
  });

  describe('when active is false', () => {

    beforeEach(() => {
      accordionComponent.componentInstance.active = false;

      fixture.detectChanges();
    });

    it('accordion__panel should not have the accordion__panel--active', () => {
      let accordionPanel = fixture.debugElement.query(By.css('.accordion__panel'));

      expect(accordionPanel.nativeElement.classList.contains('accordion__panel--active')).toBeFalsy();
    });
  });
});

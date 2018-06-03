import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({template: '<accordion [title]="titleValue" [id]="idValue"></accordion>'})
class TestAccordionWrapper {
  titleValue: string;
  idValue: string;
}

describe('AccordionComponent', () => {
  let component: TestAccordionWrapper;
  let fixture: ComponentFixture<TestAccordionWrapper>;
  let stubTitle: string;
  let stubId: string;
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
    stubId = 'id';

    fixture = TestBed.createComponent(TestAccordionWrapper);
    component = fixture.componentInstance;

    component.titleValue = stubTitle;
    component.idValue = stubId;

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

  it('should be able to accept an id input', () => {
    expect(accordionComponent.componentInstance.id).toEqual(stubId);
  });

  describe('when accordion button is clicked', () => {
    
    let panel;

    beforeEach(() => {
      panel = accordionComponent.componentInstance.accordionElement.nextElementSibling;      
    });
    
    describe('and panel paddingBottom is defined', () => {

      beforeEach(() => {
        panel.style.paddingBottom = "20px";

        accordionButton.nativeElement.click();
      });
      
      it('should set panel paddingBottom to blank', () => {
        expect(panel.style.paddingBottom).toEqual('');
      });

      it('should remove the active class from accordion', () => {
        expect(accordionComponent.componentInstance.accordionElement.classList.contains('active')).toBeFalsy();
      });
    });

    describe('and panel paddingBottom is blank', () => {

      beforeEach(() => {
        panel.style.paddingBottom = '';
        
        accordionButton.nativeElement.click();
      });
      
      it('should set paddingBottom to expected value', () => {
        expect(panel.style.paddingBottom).toEqual(panel.scrollHeight + 15 + "px");
      });

      it('should add the active class from accordion', () => {
        expect(accordionComponent.componentInstance.accordionElement.classList.contains('active')).toBeTruthy();        
      });
    });
  });

  describe('isAccordionOpen getter', () => {
    
    describe('when accordionElement is defined', () => {
      
      describe('and accordion has active class', () => {

        beforeEach(() => {
          accordionComponent.componentInstance.accordionElement.classList.add('active');
        });
        
        it('returns true', () => {
          expect(accordionComponent.componentInstance.isAccordionOpen).toBeTruthy();
        });
      });

      describe('and accordion does not have active class', () => {
        
        beforeEach(() => {
          accordionComponent.componentInstance.accordionElement.classList.remove('active');
        });

        it('returns false', () => {
          expect(accordionComponent.componentInstance.isAccordionOpen).toBeFalsy()
        });
      });
    });

    describe('when accordionElement is not defined', () => {

      beforeEach(() => { 
        accordionComponent.componentInstance.accordionElement = null;
      });
      
      it('should return false', () => {
        expect(accordionComponent.componentInstance.isAccordionOpen).toBeFalsy();
      });
    });
  });

  describe('accordionId getter', () => {
    
    it('should return expected string', () => {
      expect(accordionComponent.componentInstance.accordionId).toEqual("accordion-" + stubId + "-" + stubTitle);
    });
  });
});

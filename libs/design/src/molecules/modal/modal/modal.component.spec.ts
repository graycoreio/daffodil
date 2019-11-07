import { Component, Input, Output, EventEmitter, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffModalComponent } from './modal.component';
import { DaffBackdropComponent, DaffBackdropModule } from '../../backdrop/public_api';

@Component({template: `
  <div class="daff-modal-wrapper">
    <daff-modal
      [verticalPosition]="verticalPositionValue"
      [horizontalPosition]="horizontalPositionValue"></daff-modal>
  </div>
`})
class WrapperComponent {
  verticalPositionValue = 'top';
  horizontalPositionValue = 'right';
}

describe('DaffModalComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let modal: DaffModalComponent;
  let backdrop: DaffBackdropComponent;
  let daffModalElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        DaffBackdropModule
      ],
      declarations: [
        WrapperComponent,
        DaffModalComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;

    modal = fixture.debugElement.query(By.css('daff-modal')).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should be able to take verticalPosition as input', () => {
    expect(modal.verticalPosition).toEqual(wrapper.verticalPositionValue);
  });

  it('should be able to take horizontalPosition as input', () => {
    expect(modal.horizontalPosition).toEqual(wrapper.horizontalPositionValue);
  });

  describe('when horizontalPosition', () => {
    
    describe('is left', () => {

      let contentWrapperElement;
      
      beforeEach(() => {
        wrapper.horizontalPositionValue = 'left';
        fixture.detectChanges();
        contentWrapperElement = fixture.debugElement.query(By.css('.daff-modal__content')).nativeElement;
      });
    
      it('should set daff-modal__content--left on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--left')).toBeTruthy();
      });

      it('should not set daff-modal__content--right on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--right')).toBeFalsy();
      });

      it('should not set daff-modal__content--center on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--center')).toBeFalsy();
      });
    });

    describe('is right', () => {

      let contentWrapperElement;
      
      beforeEach(() => {
        wrapper.horizontalPositionValue = 'right';
        fixture.detectChanges();
        contentWrapperElement = fixture.debugElement.query(By.css('.daff-modal__content')).nativeElement;
      });
    
      it('should not set daff-modal__content--left on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--left')).toBeFalsy();
      });

      it('should set daff-modal__content--right on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--right')).toBeTruthy();
      });

      it('should not set daff-modal__content--center on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--center')).toBeFalsy();
      });
    });

    describe('is center', () => {

      let contentWrapperElement;
      
      beforeEach(() => {
        wrapper.horizontalPositionValue = 'center';
        fixture.detectChanges();
        contentWrapperElement = fixture.debugElement.query(By.css('.daff-modal__content')).nativeElement;
      });
    
      it('should not set daff-modal__content--left on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--left')).toBeFalsy();
      });

      it('should not set daff-modal__content--right on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--right')).toBeFalsy();
      });

      it('should set daff-modal__content--center on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--center')).toBeTruthy();
      });
    });
  });

  describe('when verticalPosition', () => {
    
    describe('is top', () => {

      let contentWrapperElement;
      
      beforeEach(() => {
        wrapper.verticalPositionValue = 'top';
        fixture.detectChanges();
        contentWrapperElement = fixture.debugElement.query(By.css('.daff-modal__content')).nativeElement;
      });
    
      it('should set daff-modal__content--top on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--top')).toBeTruthy();
      });

      it('should not set daff-modal__content--bottom on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--bottom')).toBeFalsy();
      });

      it('should not set daff-modal__content--middle on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--center')).toBeFalsy();
      });
    });

    describe('is bottom', () => {

      let contentWrapperElement;
      
      beforeEach(() => {
        wrapper.verticalPositionValue = 'bottom';
        fixture.detectChanges();
        contentWrapperElement = fixture.debugElement.query(By.css('.daff-modal__content')).nativeElement;
      });
    
      it('should not set daff-modal__content--top on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--top')).toBeFalsy();
      });

      it('should set daff-modal__content--bottom on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--bottom')).toBeTruthy();
      });

      it('should not set daff-modal__content--middle on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--center')).toBeFalsy();
      });
    });

    describe('is center', () => {

      let contentWrapperElement;
      
      beforeEach(() => {
        wrapper.verticalPositionValue = 'center';
        fixture.detectChanges();
        contentWrapperElement = fixture.debugElement.query(By.css('.daff-modal__content')).nativeElement;
      });
    
      it('should not set daff-modal__content--top on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--top')).toBeFalsy();
      });

      it('should not set daff-modal__content--bottom on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--bottom')).toBeFalsy();
      });

      it('should set daff-modal__content--middle on daff-modal__content', () => {
        expect(contentWrapperElement.classList.contains('daff-modal__content--middle')).toBeTruthy();
      });
    });
  });
});
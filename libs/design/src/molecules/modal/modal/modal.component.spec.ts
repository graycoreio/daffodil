import { Component, Input, Output, EventEmitter, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffModalComponent } from './modal.component';
import { DaffBackdropComponent, DaffBackdropModule } from '../../backdrop/public_api';

@Component({template: `
  <div class="daff-modal-wrapper">
    <daff-modal
      [backdropIsVisible]="backdropIsVisible"
      [show]="show" 
      [verticalPosition]="verticalPositionValue"
      [horizontalPosition]="horizontalPositionValue"
      (hide)="backdropClickedFunction()"></daff-modal>
  </div>
`})
class WrapperComponent {
  show = true;
  verticalPositionValue = 'top';
  horizontalPositionValue = 'right';

  backdropIsVisible = false;

  backdropClickedFunction() {}
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

  it('should be able to take show as input', () => {
    expect(modal.show).toEqual(wrapper.show);
  });

  it('should be able to take backdropIsVisible as input', () => {
    expect(modal.backdropIsVisible).toEqual(wrapper.backdropIsVisible);
  });

  it('should be able to take verticalPosition as input', () => {
    expect(modal.verticalPosition).toEqual(wrapper.verticalPositionValue);
  });

  it('should be able to take horizontalPosition as input', () => {
    expect(modal.horizontalPosition).toEqual(wrapper.horizontalPositionValue);
  });

  describe('when _show is true', () => {
    
    it('should render .daff-modal', () => {
      daffModalElement = fixture.debugElement.query(By.css('.daff-modal'));
      expect(daffModalElement).not.toBeNull();
    });
  });

  describe('when _show is false', () => {


    beforeEach(() => {
      modal.show = false;
      fixture.detectChanges();
    
      daffModalElement = fixture.debugElement.query(By.css('.daff-modal'));
    });
    
    it('should not render .daff-modal', () => {
      expect(daffModalElement).toBeNull();
    });
  });

  describe('on <daff-backdrop>', () => {

    beforeEach(() => {
      backdrop = fixture.debugElement.query(By.css('daff-backdrop')).componentInstance;
    });
    
    it('should add and remove the backdrop from the DOM as `show` changes', () => {
      wrapper.show = false;
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('daff-backdrop'))).toBe(null);

      wrapper.show = true;
      fixture.detectChanges();

      expect(fixture.debugElement.query(By.css('daff-backdrop'))).toBeDefined();
    });

    it('should set transparent', () => {
      fixture.detectChanges();
      expect(backdrop.transparent).toEqual(modal.backdropIsVisible);
    });
  });

  describe('when <daff-backdrop> emits backdropClicked', () => {

    beforeEach(() => {
      backdrop = fixture.debugElement.query(By.css('daff-backdrop')).componentInstance;
      spyOn(wrapper, 'backdropClickedFunction');

      backdrop.backdropClicked.emit();
    });
    
    it('should call hostComponent.backdropClicked.emit', () => {
      expect(wrapper.backdropClickedFunction).toHaveBeenCalled();
    });
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
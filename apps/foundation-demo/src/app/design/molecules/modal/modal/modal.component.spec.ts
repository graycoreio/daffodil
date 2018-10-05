import { Component, Input, Output, EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffModalComponent } from './modal.component';

@Component({template: `
  <div class="daff-modal-wrapper">
    <daff-modal
      [backdropIsVisible]="backdropIsVisible"
      [show]="show" 
      [verticalPosition]="verticalPositionValue"
      [horizontalPosition]="horizontalPositionValue"
      (hide)="onBackdropClickedFunction()"></daff-modal>
  </div>
`})
class TestModalWrapper {
  show: boolean = true;
  verticalPositionValue = 'top';
  horizontalPositionValue = 'right';

  backdropIsVisible : boolean = false;

  onBackdropClickedFunction() {}
}

@Component({selector: 'daff-backdrop', template: ''})
class MockDaffBackDropComponent {
  @Input() show: boolean;
  @Input() backdropIsVisible: boolean;
  @Output() backdropClicked: EventEmitter<any> = new EventEmitter();
}

describe('DaffModalComponent', () => {
  let component: TestModalWrapper;
  let fixture: ComponentFixture<TestModalWrapper>;
  let modal: DaffModalComponent;
  let backdrop: MockDaffBackDropComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule
      ],
      declarations: [
        TestModalWrapper,
        DaffModalComponent,
        MockDaffBackDropComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModalWrapper);
    component = fixture.componentInstance;

    modal = fixture.debugElement.query(By.css('daff-modal')).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to take show as input', () => {
    expect(modal.show).toEqual(component.show);
  });

  it('should be able to take backdropIsVisible as input', () => {
    expect(modal.backdropIsVisible).toEqual(component.backdropIsVisible);
  });

  it('should be able to take verticalPosition as input', () => {
    expect(modal.verticalPosition).toEqual(component.verticalPositionValue);
  });

  it('should be able to take horizontalPosition as input', () => {
    expect(modal.horizontalPosition).toEqual(component.horizontalPositionValue);
  });

  describe('when _show is true', () => {
    
    it('should render .daff-modal', () => {
      let daffModalElement = fixture.debugElement.query(By.css('.daff-modal'));
      expect(daffModalElement).not.toBeNull();
    });
  });

  describe('when _show is false', () => {

    let daffModalElement;

    beforeEach(() => {
      modal.show = false;
      fixture.detectChanges();
    
      daffModalElement = fixture.debugElement.query(By.css('.daff-modal'));
    });
    
    it('should not render .daff-modal', () => {
      expect(daffModalElement).toBeNull();
    });
  });

  describe('on <backdrop>', () => {

    beforeEach(() => {
      backdrop = fixture.debugElement.query(By.css('daff-backdrop')).componentInstance;
    });
    
    it('should set show to modal.show', () => {
      expect(backdrop.show).toEqual(modal.show);
    });

    it('should set backdropIsVisible', () => {
      expect(backdrop.backdropIsVisible).toEqual(modal.backdropIsVisible);
    });
  });

  describe('when <backdrop> emits backdropClicked', () => {

    beforeEach(() => {
      backdrop = fixture.debugElement.query(By.css('daff-backdrop')).componentInstance;
      spyOn(component, 'onBackdropClickedFunction');

      backdrop.backdropClicked.emit();
    });
    
    it('should call hostComponent.backdropClicked.emit', () => {
      expect(component.onBackdropClickedFunction).toHaveBeenCalled();
    });
  });

  describe('when horizontalPosition', () => {
    
    describe('is left', () => {

      let contentWrapperElement;
      
      beforeEach(() => {
        component.horizontalPositionValue = 'left';
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
        component.horizontalPositionValue = 'right';
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
        component.horizontalPositionValue = 'center';
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
        component.verticalPositionValue = 'top';
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
        component.verticalPositionValue = 'bottom';
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
        component.verticalPositionValue = 'center';
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
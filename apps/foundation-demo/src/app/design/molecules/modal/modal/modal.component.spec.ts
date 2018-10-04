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
      (hide)="onBackdropClickedFunction()"></daff-modal>
  </div>
`})
class TestModalWrapper {
  show: boolean = true;

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
});
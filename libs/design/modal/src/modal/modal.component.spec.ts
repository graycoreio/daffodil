import { DOCUMENT } from '@angular/common';
import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffFocusStackService } from '@daffodil/design';

import { DaffModalComponent } from './modal.component';
import { DaffModalService } from '../service/modal.service';

@Component({
  template: `<button id="activator">Open Modal</button>
    <daff-modal></daff-modal>`,
  standalone: true,
  imports: [
    DaffModalComponent,
  ],
  providers: [
    DaffModalService,
  ],
})
class WrapperComponent {}

describe('@daffodil/design/modal | DaffModalComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let modal: DaffModalComponent;
  let modalDe: DebugElement;
  let focusStackService: jasmine.SpyObj<DaffFocusStackService>;

  beforeEach(waitForAsync(() => {
    const focusStackSpy = jasmine.createSpyObj('DaffFocusStackService', ['push', 'pop', 'focus', 'length']);

    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        WrapperComponent,
      ],
      providers: [
        { provide: DaffFocusStackService, useValue: focusStackSpy },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    focusStackService = <jasmine.SpyObj<DaffFocusStackService>>TestBed.inject(DaffFocusStackService);

    modalDe = fixture.debugElement.query(By.css('daff-modal'));
    modal = modalDe.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should add a class of "daff-modal" to the host element', () => {
    expect(modalDe.classes).toEqual(jasmine.objectContaining({
      'daff-modal': true,
    }));
  });

  it('should have a role of dialog on the host element', () => {
    expect(modal.role).toBe('dialog');
  });

  it('should set aria-modal to true on the host element', () => {
    expect(modalDe.attributes['aria-modal']).toEqual('true');
  });

  describe('focus management', () => {
    let activatorButton: HTMLButtonElement;
    let document: Document;

    beforeEach(() => {
      document = TestBed.inject(DOCUMENT);
      activatorButton = fixture.debugElement.query(By.css('#activator')).nativeElement;
      activatorButton.focus();
    });

    it('should push the activator to the focus stack when modal opens', () => {
      expect(focusStackService.push).toHaveBeenCalledTimes(1);
    });

    it('should pop and restore focus when modal closes', () => {
      const animationEvent = {
        fromState: 'open',
        toState: 'closed',
        totalTime: 300,
        phaseName: 'done',
        element: modalDe.nativeElement,
        triggerName: 'fade',
        disabled: false,
      };

      modal.animationDone(animationEvent);

      expect(focusStackService.pop).toHaveBeenCalledTimes(1);
    });

    it('should not pop focus stack when animation is not closing', () => {
      const animationEvent = {
        fromState: 'closed',
        toState: 'open',
        totalTime: 300,
        phaseName: 'done',
        element: modalDe.nativeElement,
        triggerName: 'fade',
        disabled: false,
      };

      modal.animationDone(animationEvent);

      expect(focusStackService.pop).not.toHaveBeenCalled();
    });

    it('should follow complete user interaction flow: focus → click → modal focused → close → button focused', () => {
      const modalElement = modalDe.nativeElement;

      expect(document.activeElement).toBe(activatorButton);

      activatorButton.click();

      modal.ngAfterViewInit();

      expect(modalElement.contains(document.activeElement)).toBe(true);

      focusStackService.pop.and.callFake(() => {
        activatorButton.focus();
        return activatorButton;
      });

      const animationEvent = <any>{ toState: 'closed', totalTime: 300 };
      modal.animationDone(animationEvent);

      expect(focusStackService.pop).toHaveBeenCalledTimes(1);

      expect(document.activeElement).toBe(activatorButton);
    });

    it('should emit closedAnimationCompleted when modal closes', () => {
      spyOn(modal.closedAnimationCompleted, 'emit');

      const animationEvent = {
        fromState: 'open',
        toState: 'closed',
        totalTime: 300,
        phaseName: 'done',
        element: modalDe.nativeElement,
        triggerName: 'fade',
        disabled: false,
      };

      modal.animationDone(animationEvent);

      expect(modal.closedAnimationCompleted.emit).toHaveBeenCalledWith(animationEvent);
    });
  });
});

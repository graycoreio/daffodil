
import {
  Component,
  getDebugNode,
  DOCUMENT,
} from '@angular/core';
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DaffFocusStackService } from '@daffodil/design';
import {
  DaffModalComponent,
  DaffModalRef,
  DaffModalService,
} from '@daffodil/design/modal';

@Component({
  template: '<div>Modal content</div>',
})
class ModalContentComponent {}

@Component({
  template: `<button id="activator" (click)="openModal()">Open Modal</button>`,
  imports: [
    DaffModalComponent,
  ],
  providers: [
    DaffModalService,
  ],
})
class WrapperComponent {
  _modal: DaffModalRef<ModalContentComponent>;
  constructor(private modal: DaffModalService) {}

  openModal() {
    this._modal = this.modal.open(ModalContentComponent);
  }

  closeModal() {
    this._modal.close();
  }
}

describe('@daffodil/design/modal | DaffModalComponent | Focus Management', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let focusStackService: DaffFocusStackService;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [
        WrapperComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    focusStackService = TestBed.inject(DaffFocusStackService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
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
      expect(focusStackService.length()).toEqual(0);
      activatorButton.click();
      fixture.detectChanges();

      expect(focusStackService.length()).toEqual(1);
      expect(document.activeElement).not.toEqual(activatorButton);
    });

    it('should follow complete user interaction flow: focus → click → modal focused → close → button focused', async () => {
      expect(focusStackService.length()).toEqual(0);
      activatorButton.click();
      fixture.detectChanges();

      expect(focusStackService.length()).toEqual(1);
      expect(document.activeElement).not.toEqual(activatorButton);

      const modalElement = TestBed.inject(DOCUMENT).querySelector('daff-modal');
      const debugModal = getDebugNode(modalElement);
      const modal: DaffModalComponent = debugModal.componentInstance;

      expect(modalElement.contains(document.activeElement)).toBe(true);
      wrapper.closeModal();
      fixture.detectChanges();

      modal.closedAnimationCompleted$.subscribe(() => {
        expect(focusStackService.length()).toEqual(0);
        expect(document.activeElement).toEqual(activatorButton);
      });
    });
  });
});

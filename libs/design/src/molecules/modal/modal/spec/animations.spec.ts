import { Component, Input, Output, EventEmitter, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DaffModalComponent } from '../modal.component';
import { DaffBackdropModule } from '../../../backdrop/public_api';

@Component({template: `
  <div class="daff-modal-wrapper">
    <daff-modal [open]="open"></daff-modal>
  </div>
`})
class WrapperComponent {
  open = true;
}

describe('DaffModalComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let modal: DaffModalComponent;
  let modalDe: DebugElement;
  
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

    modalDe = fixture.debugElement.query(By.css('daff-modal'));
    modal = modalDe.componentInstance;
    fixture.detectChanges();
  });

  describe('the entrance and exit animations', () => {
    it('should change animation states depending on whether or not the modal is open or closed', () => {
      wrapper.open = true;
      fixture.detectChanges();
      expect(modal.fadeState).toBe('open');
      wrapper.open = false;
      fixture.detectChanges();
      expect(modal.fadeState).toBe('closed');
    });
  });
});
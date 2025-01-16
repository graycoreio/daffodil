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

import { DaffModalComponent } from '../modal/modal.component';
import { DaffModalService } from '../service/modal.service';

@Component({
  template: `
    <div class="daff-modal-wrapper">
      <daff-modal [open]="open"></daff-modal>
    </div>
  `,
  imports: [
    DaffModalComponent,
  ],
  providers: [
    DaffModalService,
  ],
})
class WrapperComponent {
  open = true;
}

describe('@daffodil/design/modal | DaffModalComponent', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let modal: DaffModalComponent;
  let modalDe: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        WrapperComponent,
      ],
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

  it('should change the animation state to open if modal is open', () => {
    modal.reveal();
    fixture.detectChanges();

    expect(modal.fadeState).toBe('open');
  });

  it('should change the animation state to closed if modal is closed', () => {
    modal.hide();
    fixture.detectChanges();

    expect(modal.fadeState).toBe('closed');
  });
});
